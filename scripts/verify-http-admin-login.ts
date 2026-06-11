/**
 * POST /api/users/login over HTTP like the admin UI (validates CSRF + Set-Cookie path).
 * Run after the app is listening — used from docker-entrypoint background check.
 */

import { readEnv } from './lib/sanitize-env.js'

async function main() {
  const email = readEnv('SEED_ADMIN_EMAIL')
  const password = readEnv('SEED_ADMIN_PASSWORD')
  const baseUrl = (
    readEnv('PAYLOAD_SERVER_URL') ||
    readEnv('NEXT_PUBLIC_SERVER_URL') ||
    'http://127.0.0.1:3000'
  ).replace(/\/$/, '')

  if (!email || !password) {
    console.error('Missing SEED_ADMIN_* for HTTP login check.')
    process.exit(1)
  }

  const loginUrl = 'http://127.0.0.1:3000/api/users/login'
  console.log(`HTTP admin login check → ${loginUrl} (Origin: ${baseUrl})`)

  const res = await fetch(loginUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Origin: baseUrl,
      Referer: `${baseUrl}/admin/login`,
    },
    body: JSON.stringify({ email, password }),
  })

  const setCookie = res.headers.get('set-cookie')
  const body = await res.text()

  if (!res.ok) {
    console.error(`HTTP login failed: ${res.status} ${body.slice(0, 200)}`)
    process.exit(1)
  }

  if (!setCookie?.includes('payload-token')) {
    console.error('HTTP login returned 200 but no payload-token Set-Cookie header.')
    console.error(`Set-Cookie: ${setCookie ?? '(none)'}`)
    process.exit(1)
  }

  const cookieHeader = setCookie
    .split(/,(?=\s*[^;,]+=)/)
    .map((part) => part.split(';')[0]?.trim())
    .filter(Boolean)
    .join('; ')

  const meRes = await fetch('http://127.0.0.1:3000/api/users/me', {
    headers: {
      Cookie: cookieHeader,
      Origin: baseUrl,
    },
  })

  if (!meRes.ok) {
    console.error(`HTTP /api/users/me failed after login: ${meRes.status}`)
    process.exit(1)
  }

  const adminRes = await fetch('http://127.0.0.1:3000/admin', {
    headers: {
      Cookie: cookieHeader,
      Origin: baseUrl,
    },
    redirect: 'manual',
  })

  if (adminRes.status === 307 || adminRes.status === 308) {
    const location = adminRes.headers.get('location') ?? ''
    if (location.includes('/admin/login')) {
      console.error(`HTTP /admin redirected to login with Origin header: ${location}`)
      process.exit(1)
    }
  }

  if (adminRes.status !== 200) {
    console.error(`HTTP /admin unexpected status with Origin: ${adminRes.status}`)
    process.exit(1)
  }

  const adminBody = await adminRes.text()
  if (adminBody.includes('NEXT_REDIRECT;replace;/admin/login')) {
    console.error('HTTP /admin RSC payload redirects to login despite valid cookie.')
    process.exit(1)
  }

  const adminNavRes = await fetch('http://127.0.0.1:3000/admin', {
    headers: {
      Cookie: cookieHeader,
      'Sec-Fetch-Site': 'none',
    },
    redirect: 'manual',
  })

  if (adminNavRes.status === 307 || adminNavRes.status === 308) {
    const location = adminNavRes.headers.get('location') ?? ''
    if (location.includes('/admin/login')) {
      console.error(`HTTP /admin redirected to login on document-style request: ${location}`)
      process.exit(1)
    }
  }

  const adminNavBody = await adminNavRes.text()
  if (adminNavBody.includes('NEXT_REDIRECT;replace;/admin/login')) {
    console.error('HTTP /admin document-style request still redirects to login.')
    process.exit(1)
  }

  console.log('HTTP admin login check passed (cookie set, /admin reachable).')
  process.exit(0)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
