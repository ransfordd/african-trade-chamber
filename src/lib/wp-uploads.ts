/**
 * Map WordPress upload URLs to locally served paths under /uploads (symlinked from data/uploads).
 */
export function wpUploadUrlToLocal(url?: string | null): string | undefined {
  if (!url) return undefined
  const trimmed = url.trim()
  if (!trimmed) return undefined

  if (trimmed.startsWith('/uploads/')) return trimmed

  const wpMatch = trimmed.match(/\/wp-content\/uploads\/(.+)$/i)
  if (wpMatch) return `/uploads/${wpMatch[1].replace(/^\//, '')}`

  if (trimmed.startsWith('uploads/')) return `/${trimmed}`

  return trimmed
}

export function resolveMemberImageUrl(url?: string | null): string | undefined {
  const local = wpUploadUrlToLocal(url)
  if (!local) return undefined
  if (local.startsWith('http')) return local
  return local
}
