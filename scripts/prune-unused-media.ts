/**
 * Remove Media library documents not referenced anywhere in CMS content.
 *
 * Usage:
 *   npm run media:prune-unused              # dry-run (default)
 *   npm run media:prune-unused -- --execute   # delete unused docs + files
 *   npm run media:prune-unused -- --limit=100 # cap deletions per run
 */

import './load-env.js'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { getPayload } from 'payload'
import config from '../src/payload.config'
import { requireEnv } from './load-env.js'
import { collectUsedMediaIds } from './lib/collect-used-media-ids.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const OUTPUT_DIR = path.join(ROOT, 'scripts', 'output')

const args = process.argv.slice(2)
const execute = args.includes('--execute')
const dryRun = !execute

const limitFlagIndex = args.findIndex((a) => a === '--limit' || a.startsWith('--limit='))
let limit = 0
if (limitFlagIndex >= 0) {
  const flag = args[limitFlagIndex]
  const fromEquals = flag.includes('=') ? flag.split('=')[1] : args[limitFlagIndex + 1]
  limit = Number.parseInt(fromEquals ?? '', 10) || 0
}

type MediaRow = {
  id: number
  filename?: string
  isHiddenVariant?: boolean
}

async function main() {
  requireEnv('DATABASE_URI')
  requireEnv('PAYLOAD_SECRET')

  console.log(`Prune unused media${dryRun ? ' (dry run)' : ' (EXECUTE)'}...`)

  const payload = await getPayload({ config })
  const used = await collectUsedMediaIds(payload)
  console.log(`Referenced media IDs in CMS: ${used.size}`)

  const unused: MediaRow[] = []
  let page = 1
  const pageSize = 500

  for (;;) {
    const result = await payload.find({
      collection: 'media',
      limit: pageSize,
      page,
      overrideAccess: true,
    })

    for (const doc of result.docs) {
      const row = doc as MediaRow
      if (!used.has(row.id)) {
        unused.push(row)
      }
    }

    if (!result.hasNextPage) break
    page += 1
  }

  const toProcess = limit > 0 ? unused.slice(0, limit) : unused
  const hiddenCount = toProcess.filter((d) => d.isHiddenVariant).length
  const visibleCount = toProcess.length - hiddenCount

  console.log('\n--- Prune summary ---')
  console.log(`Total media:     ${used.size + unused.length}`)
  console.log(`Used:            ${used.size}`)
  console.log(`Unused:          ${unused.length}`)
  console.log(`To process:      ${toProcess.length}${limit > 0 ? ` (limit ${limit})` : ''}`)
  console.log(`  hidden variant: ${hiddenCount}`)
  console.log(`  visible:        ${visibleCount}`)

  if (toProcess.length) {
    console.log('\nSample unused filenames:')
    for (const row of toProcess.slice(0, 20)) {
      console.log(`  #${row.id} ${row.filename ?? '(no filename)'}`)
    }
    if (toProcess.length > 20) console.log(`  ... and ${toProcess.length - 20} more`)
  }

  if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true })
  const reportPath = path.join(OUTPUT_DIR, 'unused-media-report.json')
  fs.writeFileSync(
    reportPath,
    JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        dryRun,
        usedCount: used.size,
        unusedCount: unused.length,
        processedCount: toProcess.length,
        sample: toProcess.slice(0, 100).map((d) => ({
          id: d.id,
          filename: d.filename,
          isHiddenVariant: Boolean(d.isHiddenVariant),
        })),
        ids: toProcess.map((d) => d.id),
      },
      null,
      2,
    ),
  )
  console.log(`\nReport written: ${reportPath}`)

  if (dryRun) {
    console.log('\nDry run — no deletions. Pass --execute to delete unused media.')
    return
  }

  let deleted = 0
  let failed = 0

  for (const row of toProcess) {
    try {
      await payload.delete({
        collection: 'media',
        id: row.id,
        overrideAccess: true,
      })
      deleted += 1
      if (deleted % 100 === 0) console.log(`Deleted ${deleted}/${toProcess.length}...`)
    } catch (err) {
      failed += 1
      console.error(
        `Failed to delete #${row.id} ${row.filename ?? ''}:`,
        err instanceof Error ? err.message : err,
      )
    }
  }

  console.log('\n--- Delete complete ---')
  console.log(`Deleted: ${deleted}`)
  console.log(`Failed:  ${failed}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
