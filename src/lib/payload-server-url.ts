function normalizeServerUrl(url: string): string {
  return url.trim().replace(/\/$/, '')
}

/** Public origins used for Payload serverURL, CSRF, and CORS. */
export function getServerURLs(): string[] {
  const values = [
    process.env.PAYLOAD_SERVER_URL,
    process.env.NEXT_PUBLIC_SERVER_URL,
    'http://localhost:3000',
    'http://localhost:3002',
  ]

  const urls = values
    .filter((value): value is string => typeof value === 'string' && value.trim().length > 0)
    .map(normalizeServerUrl)

  return [...new Set(urls)]
}

export function getPrimaryServerURL(): string {
  return getServerURLs()[0] ?? 'http://localhost:3000'
}
