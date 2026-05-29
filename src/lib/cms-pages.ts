import { getPayloadClient } from '@/lib/cms'
import type { CmsPageDetail } from '@/types/cms-page'

function heroImageUrl(heroImage: unknown): { url?: string; alt?: string } {
  if (!heroImage || typeof heroImage === 'number') return {}
  const media = heroImage as Record<string, unknown>
  const url = media.url as string | undefined
  if (!url) return {}
  const base = (process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3002').replace(/\/$/, '')
  const resolved = url.startsWith('http') ? url : `${base}${url.startsWith('/') ? url : `/${url}`}`
  return {
    url: resolved,
    alt: media.alt ? String(media.alt) : undefined,
  }
}

function mapPageDoc(doc: Record<string, unknown>): CmsPageDetail {
  const excerptRaw = doc.excerpt ? String(doc.excerpt).trim() : ''
  const content = doc.content
  const hero = heroImageUrl(doc.heroImage)

  return {
    id: String(doc.id),
    title: String(doc.title ?? ''),
    slug: String(doc.slug ?? ''),
    excerpt: excerptRaw || undefined,
    excerptFull: excerptRaw || undefined,
    content:
      content && typeof content === 'object' && content !== null
        ? (content as Record<string, unknown>)
        : null,
    seoTitle: doc.seoTitle ? String(doc.seoTitle) : undefined,
    seoDescription: doc.seoDescription ? String(doc.seoDescription) : undefined,
    heroImageUrl: hero.url,
    heroImageAlt: hero.alt,
  }
}

export async function getCmsPageBySlug(slug: string): Promise<CmsPageDetail | null> {
  try {
    const payload = await getPayloadClient()
    if (!payload) return null
    const result = await payload.find({
      collection: 'pages',
      limit: 1,
      depth: 1,
      where: { slug: { equals: slug } },
    })
    const doc = result.docs[0] as unknown as Record<string, unknown> | undefined
    if (!doc) return null
    return mapPageDoc(doc)
  } catch {
    return null
  }
}

export async function getCmsPageSlugs(limit = 500): Promise<string[]> {
  try {
    const payload = await getPayloadClient()
    if (!payload) return []
    const result = await payload.find({
      collection: 'pages',
      limit,
      depth: 0,
      select: { slug: true },
    })
    return result.docs
      .map((doc) => String((doc as { slug?: string }).slug ?? ''))
      .filter(Boolean)
  } catch {
    return []
  }
}
