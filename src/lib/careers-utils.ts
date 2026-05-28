/** Normalize Payload ISO dates or YYYY-MM-DD strings for display logic. */
export function normalizePostedAt(value: unknown): string {
  if (!value) return ''
  const raw = String(value)
  const dateOnly = raw.slice(0, 10)
  if (/^\d{4}-\d{2}-\d{2}$/.test(dateOnly)) return dateOnly
  const parsed = new Date(raw)
  if (Number.isNaN(parsed.getTime())) return ''
  return parsed.toISOString().slice(0, 10)
}

export function getRelativePostedLabel(isoDateString: string): string {
  if (!isoDateString) return 'Posted recently'
  const dateOnly = normalizePostedAt(isoDateString)
  if (!dateOnly) return 'Posted recently'
  const post = new Date(`${dateOnly}T12:00:00`)
  if (Number.isNaN(post.getTime())) return 'Posted recently'
  const today = new Date()
  post.setHours(0, 0, 0, 0)
  today.setHours(0, 0, 0, 0)
  const diffDays = Math.floor((today.getTime() - post.getTime()) / (24 * 60 * 60 * 1000))
  if (Number.isNaN(diffDays) || diffDays < 0) return 'Posted recently'
  if (diffDays === 0) return 'Posted Today'
  if (diffDays === 1) return 'Posted Yesterday'
  if (diffDays < 7) return `Posted ${diffDays} days ago`
  if (diffDays < 30) return `Posted ${Math.floor(diffDays / 7)} weeks ago`
  return `Posted ${Math.floor(diffDays / 30)} months ago`
}
