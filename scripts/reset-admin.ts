/**
 * Create or reset the admin user from SEED_ADMIN_EMAIL / SEED_ADMIN_PASSWORD in .env
 * Run: npm run reset-admin
 */

import './load-env.js'
import config from '../src/payload.config'
import { getPayload } from 'payload'
import { requireEnv } from './load-env.js'

async function main() {
  requireEnv('DATABASE_URI')
  requireEnv('PAYLOAD_SECRET')
  const email = requireEnv('SEED_ADMIN_EMAIL')
  const password = requireEnv('SEED_ADMIN_PASSWORD')

  const payload = await getPayload({ config })

  const existing = await payload.find({
    collection: 'users',
    where: { email: { equals: email } },
    limit: 1,
    overrideAccess: true,
  })

  if (existing.docs.length > 0) {
    const user = existing.docs[0]
    await payload.update({
      collection: 'users',
      id: user.id,
      data: { password },
      overrideAccess: true,
    })
    console.log(`Password reset and account unlocked for: ${email}`)
  } else {
    await payload.create({
      collection: 'users',
      data: { email, password, role: 'admin' },
      overrideAccess: true,
    })
    console.log(`Created admin user: ${email}`)
  }

  process.exit(0)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
