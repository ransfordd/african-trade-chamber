import type { Payload } from 'payload'
import {
  buildMediaPathIndex,
  resolveMediaId,
  type MediaPathIndex,
} from './media-url-index.js'

const UPLOAD_FIELD_NAMES = new Set([
  'featuredImage',
  'heroSideImage',
  'backgroundImage',
  'sideImage',
  'photo',
  'heroImage',
  'introImage',
  'image',
  'heroImage',
])

const MEDIA_URL_IN_TEXT =
  /(?:\/uploads\/|\/images\/|\/api\/media\/file\/|\/wp-content\/uploads\/)/i

function addMediaId(used: Set<number>, id: unknown) {
  if (typeof id === 'number' && Number.isFinite(id)) {
    used.add(id)
    return
  }
  if (typeof id === 'string' && /^\d+$/.test(id)) {
    used.add(Number.parseInt(id, 10))
  }
}

function resolveApiMediaId(value: string, index: MediaPathIndex): number | null {
  const match = value.match(/\/api\/media\/file\/([^/?#]+)/i)
  if (!match) return null
  try {
    const filename = decodeURIComponent(match[1])
    return index.byFilename.get(filename) ?? null
  } catch {
    return index.byFilename.get(match[1]) ?? null
  }
}

function extractMediaIdsFromString(value: string, used: Set<number>, index: MediaPathIndex) {
  if (!MEDIA_URL_IN_TEXT.test(value)) return

  const fromLegacy = resolveMediaId(value, index)
  if (fromLegacy != null) used.add(fromLegacy)

  const fromApi = resolveApiMediaId(value, index)
  if (fromApi != null) used.add(fromApi)

  // Scan for embedded paths inside longer HTML or JSON strings
  const pathMatches = value.matchAll(
    /(?:\/uploads\/[^\s"'<>]+|\/images\/[^\s"'<>]+|\/api\/media\/file\/[^\s"'<>?#]+)/gi,
  )
  for (const match of pathMatches) {
    const segment = match[0]
    const legacy = resolveMediaId(segment, index)
    if (legacy != null) used.add(legacy)
    const api = resolveApiMediaId(segment, index)
    if (api != null) used.add(api)
  }
}

function isLikelyUploadField(key: string): boolean {
  const lower = key.toLowerCase()
  return UPLOAD_FIELD_NAMES.has(key) || lower.includes('image') || lower === 'photo'
}

function collectMediaRef(key: string, value: unknown, used: Set<number>) {
  if (!isLikelyUploadField(key)) return
  if (typeof value === 'number') {
    addMediaId(used, value)
    return
  }
  if (value && typeof value === 'object') {
    const row = value as Record<string, unknown>
    if (row.relationTo === 'media' && row.value != null) {
      addMediaId(used, row.value)
      return
    }
    if ('filename' in row && 'mimeType' in row && row.id != null) {
      addMediaId(used, row.id)
      return
    }
    addMediaId(used, row.id)
  }
}

function walkLexical(node: unknown, used: Set<number>, index: MediaPathIndex) {
  if (!node || typeof node !== 'object') return
  const row = node as Record<string, unknown>

  if (row.type === 'upload' && row.value != null) {
    if (typeof row.value === 'number') addMediaId(used, row.value)
    else if (typeof row.value === 'object' && row.value !== null) {
      addMediaId(used, (row.value as { id?: unknown }).id)
    }
  }

  if (typeof row.url === 'string') extractMediaIdsFromString(row.url, used, index)
  if (typeof row.src === 'string') extractMediaIdsFromString(row.src, used, index)
  if (typeof row.href === 'string') extractMediaIdsFromString(row.href, used, index)

  for (const value of Object.values(row)) {
    if (Array.isArray(value)) {
      for (const item of value) walkLexical(item, used, index)
    } else if (value && typeof value === 'object') {
      walkLexical(value, used, index)
    } else if (typeof value === 'string') {
      extractMediaIdsFromString(value, used, index)
    }
  }
}

function collectFromValue(value: unknown, used: Set<number>, index: MediaPathIndex) {
  if (value == null) return

  if (typeof value === 'string') {
    extractMediaIdsFromString(value, used, index)
    return
  }

  if (Array.isArray(value)) {
    for (const item of value) collectFromValue(item, used, index)
    return
  }

  if (typeof value !== 'object') return

  const obj = value as Record<string, unknown>

  if (obj.root && typeof obj.root === 'object') {
    walkLexical(obj, used, index)
  }

  for (const [key, child] of Object.entries(obj)) {
    if (key === 'root') continue
    collectMediaRef(key, child, used)
    collectFromValue(child, used, index)
  }
}

async function scanCollection(payload: Payload, slug: string, used: Set<number>, index: MediaPathIndex) {
  let page = 1
  const pageSize = 100

  for (;;) {
    const result = await payload.find({
      collection: slug as never,
      limit: pageSize,
      page,
      depth: 0,
      overrideAccess: true,
    })

    for (const doc of result.docs) {
      collectFromValue(doc, used, index)
    }

    if (!result.hasNextPage) break
    page += 1
  }
}

async function scanGlobals(payload: Payload, used: Set<number>, index: MediaPathIndex) {
  for (const global of payload.config.globals) {
    try {
      const doc = await payload.findGlobal({
        slug: global.slug as never,
        depth: 0,
        overrideAccess: true,
      })
      collectFromValue(doc, used, index)
    } catch {
      /* global may not exist yet */
    }
  }
}

export async function collectUsedMediaIds(payload: Payload): Promise<Set<number>> {
  const used = new Set<number>()
  const index = await buildMediaPathIndex(payload)

  for (const collection of payload.config.collections) {
    if (collection.slug === 'media') continue
    await scanCollection(payload, collection.slug, used, index)
  }

  await scanGlobals(payload, used, index)

  return used
}

export type MediaUsageStats = {
  totalMedia: number
  usedCount: number
  unusedCount: number
}

export async function getMediaUsageStats(payload: Payload): Promise<MediaUsageStats & { used: Set<number> }> {
  const used = await collectUsedMediaIds(payload)
  const total = await payload.find({ collection: 'media', limit: 0, overrideAccess: true })
  const totalMedia = total.totalDocs
  return {
    used,
    totalMedia,
    usedCount: used.size,
    unusedCount: Math.max(0, totalMedia - used.size),
  }
}
