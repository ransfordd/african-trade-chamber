/**
 * Create or reset the admin user from SEED_ADMIN_EMAIL / SEED_ADMIN_PASSWORD in .env
 * Run: npm run reset-admin
 */

import './load-env.js'
import config from '../src/payload.config'
import { getPayload } from 'payload'
import { requireEnv } from './load-env.js'
import { syncAdminUser } from './lib/sync-admin-user.js'

async function main() {
  requireEnv('DATABASE_URI')
  requireEnv('PAYLOAD_SECRET')
  const email = requireEnv('SEED_ADMIN_EMAIL')
  const password = requireEnv('SEED_ADMIN_PASSWORD')

  const payload = await getPayload({ config })
  await syncAdminUser({ email, password, payload })

  process.exit(0)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
