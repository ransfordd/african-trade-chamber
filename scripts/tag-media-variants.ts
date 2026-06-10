/**
 * Backfill isHiddenVariant on all Media documents from filename patterns.
 *
 * Usage:
 *   npm run media:tag-variants
 *   npm run media:tag-variants -- --dry-run
 */

import './load-env.js'
import { getPayload } from 'payload'
import config from '../src/payload.config'
import { isHiddenMediaVariant } from '../src/lib/media-filename-utils.js'
import { requireEnv } from './load-env.js'

const dryRun = process.argv.includes('--dry-run')

async function main() {
  requireEnv('DATABASE_URI')
  requireEnv('PAYLOAD_SECRET')

  const payload = await getPayload({ config })

  let page = 1
  const pageSize = 200
  let updated = 0
  let hidden = 0
  let visible = 0
  let unchanged = 0

  for (;;) {
    const result = await payload.find({
      collection: 'media',
      limit: pageSize,
      page,
      overrideAccess: true,
    })

    for (const doc of result.docs) {
      const row = doc as { id: number; filename?: string; isHiddenVariant?: boolean }
      const filename = row.filename ?? ''
      const shouldHide = filename ? isHiddenMediaVariant(filename) : false

      if (shouldHide) hidden += 1
      else visible += 1

      if (Boolean(row.isHiddenVariant) === shouldHide) {
        unchanged += 1
        continue
      }

      if (dryRun) {
        updated += 1
        continue
      }

      await payload.update({
        collection: 'media',
        id: row.id,
        data: { isHiddenVariant: shouldHide },
        overrideAccess: true,
      })
      updated += 1
    }

    if (!result.hasNextPage) break
    page += 1
    if (page % 10 === 0) console.log(`Processed page ${page}...`)
  }

  console.log('\n--- Tag media variants ---')
  console.log(`Mode: ${dryRun ? 'dry run' : 'live'}`)
  console.log(`Would update / updated: ${updated}`)
  console.log(`Unchanged: ${unchanged}`)
  console.log(`Hidden variants: ${hidden}`)
  console.log(`Visible in grid: ${visible}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
