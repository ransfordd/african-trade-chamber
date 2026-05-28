/** WordPress media host — often unreachable in local dev (DNS/firewall). */
export function isWpMediaUrl(url?: string | null): boolean {
  if (!url) return false
  return url.includes('africantradechamber.org')
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

export function isLocalImage(url: string): boolean {
  return url.startsWith('/')
}
