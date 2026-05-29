export type LexicalContent = Record<string, unknown> | null

export type CmsPageDetail = {
  id: string
  title: string
  slug: string
  excerpt?: string
  excerptFull?: string
  content: LexicalContent
  seoTitle?: string
  seoDescription?: string
  heroImageUrl?: string
  heroImageAlt?: string
}
