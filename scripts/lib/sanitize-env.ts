/**
 * Normalize env values from Coolify/Docker/shell exports.
 * Strips surrounding quotes and trailing carriage returns that often get preserved in UI copy/paste.
 */
export function sanitizeEnvValue(raw: string): string {
  let value = raw.replace(/^\uFEFF/, '').trim()

  if (
    (value.startsWith('"') && value.endsWith('"') && value.length >= 2) ||
    (value.startsWith("'") && value.endsWith("'") && value.length >= 2)
  ) {
    value = value.slice(1, -1).trim()
  }

  return value.replace(/\r+$/g, '')
}

export function readEnv(name: string): string | undefined {
  const raw = process.env[name]
  if (raw == null || typeof raw !== 'string') return undefined
  const sanitized = sanitizeEnvValue(raw)
  return sanitized || undefined
}
