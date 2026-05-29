/**
 * Import WordPress pages (post_type: page) into Payload.
 *
 * Usage:
 *   npm run migrate:pages -- data/africantradechamber.WordPress.2026-05-26.xml
 */

import './load-env.js'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { XMLParser } from 'fast-xml-parser'
import { convertHTMLToLexical, editorConfigFactory } from '@payloadcms/richtext-lexical'
import { JSDOM } from 'jsdom'
import { getPayload } from 'payload'
import config from '../src/payload.config'
import { requireEnv } from './load-env.js'
import { sanitizeWpHtmlForLexical } from './sanitize-wp-html.js'
import { isReservedTopLevelRoute } from '../src/lib/reserved-top-level-routes.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DATA_DIR = path.resolve(__dirname, '../data')

const EXCERPT_MAX = 200

type WpPageRow = {
  title: string
  slug: string
  excerpt?: string
  contentHtml?: string
}

function resolveExportPath(): string {
  const arg = process.argv[2]
  if (arg) {
    const p = path.isAbsolute(arg) ? arg : path.resolve(process.cwd(), arg)
    if (fs.existsSync(p)) return p
    console.error(`Export file not found: ${p}`)
    process.exit(1)
  }

  const xmlFiles = fs
    .readdirSync(DATA_DIR)
    .filter((f) => f.endsWith('.xml'))
    .map((f) => {
      const full = path.join(DATA_DIR, f)
      return { full, size: fs.statSync(full).size, mtime: fs.statSync(full).mtimeMs }
    })
    .sort((a, b) => b.size - a.size || b.mtime - a.mtime)

  if (xmlFiles.length) return xmlFiles[0].full
  return path.join(DATA_DIR, 'wp-export.xml')
}

function asArray<T>(value: T | T[] | undefined | null): T[] {
  if (value == null) return []
  return Array.isArray(value) ? value : [value]
}

function textVal(node: unknown): string {
  if (node == null) return ''
  if (typeof node === 'string' || typeof node === 'number') return String(node).trim()
  if (typeof node === 'object' && node !== null && '#text' in node) {
    return String((node as Record<string, unknown>)['#text']).trim()
  }
  return String(node).trim()
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
}

function truncateExcerpt(text: string): string {
  const t = text.trim()
  if (t.length <= EXCERPT_MAX) return t
  return `${t.slice(0, EXCERPT_MAX)}...`
}

function parseItems(xml: string): WpPageRow[] {
  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: '@_',
    trimValues: true,
    parseTagValue: false,
    isArray: (name) =>
      name === 'item' ||
      name === 'wp:postmeta' ||
      name === 'category' ||
      name === 'content:encoded' ||
      name === 'excerpt:encoded',
  })

  const parsed = parser.parse(xml)
  const channel = parsed?.rss?.channel ?? parsed?.channel
  const items = asArray(channel?.item) as Record<string, unknown>[]

  const pages: WpPageRow[] = []

  for (const item of items) {
    if (textVal(item['wp:post_type']) !== 'page') continue
    if (textVal(item['wp:status']) !== 'publish') continue

    const title = textVal(item.title)
    const slug = textVal(item['wp:post_name'])
    if (!title || !slug) continue

    const contentHtml = textVal(item['content:encoded'])
    const wpExcerpt = stripHtml(textVal(item['excerpt:encoded']))
    const excerpt = wpExcerpt
      ? wpExcerpt
      : contentHtml
        ? truncateExcerpt(stripHtml(contentHtml))
        : undefined

    pages.push({
      title,
      slug,
      excerpt,
      contentHtml: contentHtml || undefined,
    })
  }

  return pages
}

async function main() {
  requireEnv('DATABASE_URI')
  requireEnv('PAYLOAD_SECRET')

  const exportPath = resolveExportPath()
  console.log('WordPress pages → Payload import')
  console.log('Using export:', exportPath)

  if (!fs.existsSync(exportPath)) {
    console.error('\nNo XML export found in data/')
    process.exit(1)
  }

  const xml = fs.readFileSync(exportPath, 'utf-8')
  const pages = parseItems(xml)
  console.log(`Parsed ${pages.length} published WordPress pages`)

  if (!pages.length) {
    console.log('No pages found.')
    process.exit(0)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const payload: any = await getPayload({ config })

  const editorConfig = await editorConfigFactory.default({
    config: payload.config,
    parentIsLocalized: false,
  })

  const htmlToLexical = (html: string) => {
    if (!html.trim()) return undefined
    const sanitized = sanitizeWpHtmlForLexical(html)
    if (!sanitized) return undefined
    try {
      return convertHTMLToLexical({
        html: sanitized,
        editorConfig,
        JSDOM: JSDOM as unknown as new (html: string) => { window: { document: Document } },
      })
    } catch (err) {
      console.warn('HTML → Lexical failed:', err instanceof Error ? err.message : err)
      return undefined
    }
  }

  let created = 0
  let updated = 0
  let skippedReserved = 0
  let contentSkipped = 0

  for (const row of pages) {
    const content = row.contentHtml ? htmlToLexical(row.contentHtml) : undefined
    if (row.contentHtml && !content) contentSkipped++

    const data = {
      title: row.title,
      slug: row.slug,
      excerpt: row.excerpt,
      ...(content ? { content } : {}),
    }

    const existing = await payload.find({
      collection: 'pages',
      where: { slug: { equals: row.slug } },
      limit: 1,
    })

    try {
      if (existing.docs[0]) {
        await payload.update({
          collection: 'pages',
          id: existing.docs[0].id,
          data,
        })
        updated++
      } else {
        await payload.create({
          collection: 'pages',
          data,
        })
        created++
      }

      if (isReservedTopLevelRoute(row.slug)) {
        skippedReserved++
        console.log(
          `  Note: /${row.slug} is imported in admin but the Next.js static route takes precedence on the frontend.`,
        )
      }
    } catch (err) {
      console.warn(`Failed to import page "${row.slug}":`, err instanceof Error ? err.message : err)
    }
  }

  if (contentSkipped) {
    console.log(`Warning: ${contentSkipped} pages had HTML but Lexical conversion failed`)
  }
  if (skippedReserved) {
    console.log(
      `${skippedReserved} page(s) overlap with static Next.js routes (still visible in admin).`,
    )
  }

  console.log(`Done: ${created} created, ${updated} updated`)
  process.exit(0)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
