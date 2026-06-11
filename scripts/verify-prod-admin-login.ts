/**
 * Verify admin login with NODE_ENV=production (same mode as the running app).
 * Used by docker-entrypoint after seed.
 */

import config from '../src/payload.config'
import { getPayload } from 'payload'
import { readEnv } from './lib/sanitize-env.js'

async function main() {
  const email = readEnv('SEED_ADMIN_EMAIL')
  const password = readEnv('SEED_ADMIN_PASSWORD')

  if (!email || !password) {
    console.error('Missing SEED_ADMIN_EMAIL or SEED_ADMIN_PASSWORD for production login check.')
    process.exit(1)
  }

  console.log(
    `Production login check (NODE_ENV=${process.env.NODE_ENV ?? 'unset'}, password length ${password.length})...`,
  )

  const payload = await getPayload({ config })

  try {
    const login = await payload.login({
      collection: 'users',
      data: { email, password },
    })
    if (!login.token) {
      console.error('Production-mode admin login failed: no token returned.')
      process.exit(1)
    }
    console.log(`Production-mode admin login verified for ${email}.`)
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    console.error(`Production-mode admin login failed: ${message}`)
    process.exit(1)
  }

  process.exit(0)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
