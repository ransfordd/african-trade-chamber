/** WordPress media host — often unreachable in local dev (DNS/firewall). */
export function isWpMediaUrl(url?: string | null): boolean {
  if (!url) return false
  return url.includes('africantradechamber.org')
}

export function isPayloadMediaUrl(url?: string | null): boolean {
  return Boolean(url?.startsWith('/api/media/'))
}

/** Prefer local `/images/...` or non-WP URLs for next/image. */
export function resolveImageUrl(
  url: string | undefined,
  fallback?: string,
): string | undefined {
  if (!url) return fallback
  if (url.startsWith('/images/')) return url
  if (isWpMediaUrl(url)) return fallback
  return url
}

/** Static public paths safe for next/image optimization (excludes Payload API URLs). */
export function isLocalImage(url: string): boolean {
  return url.startsWith('/') && !isPayloadMediaUrl(url)
}
