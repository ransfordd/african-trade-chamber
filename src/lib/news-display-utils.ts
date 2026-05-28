import type { NewsArticle } from '@/types/news-article'

/** Client-safe date formatting (no Payload / Node imports). */
export function formatNewsDisplayDate(article: NewsArticle): string {
  const raw = article.newsDate || article.publishedAt
  if (!raw) return ''
  const dateOnly = raw.slice(0, 10)
  const d = new Date(raw.includes('T') ? raw : `${dateOnly}T12:00:00`)
  if (Number.isNaN(d.getTime())) return ''
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}
