/**
 * WordPress → Payload migration entry point.
 * News import: npm run migrate:news (requires data/wp-export.xml)
 */

import './load-env.js'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const EXPORT_PATH = path.resolve(__dirname, '../data/wp-export.xml')

async function main() {
  console.log('ATC WordPress → Payload migration')
  console.log('For news posts, run: npm run migrate:news')
  console.log('Expected export path:', EXPORT_PATH)

  if (!fs.existsSync(EXPORT_PATH)) {
    console.log('\nNo wp-export.xml found.')
    console.log('  1. WordPress → Tools → Export → News (or All content)')
    console.log('  2. Save as data/wp-export.xml')
    console.log('  3. npm run migrate:news')
    process.exit(0)
  }

  console.log('\nFound wp-export.xml — running news import...\n')
  const { spawn } = await import('child_process')
  const child = spawn('npx', ['tsx', 'scripts/migrate-news-from-wp.ts'], {
    stdio: 'inherit',
    shell: true,
    cwd: path.resolve(__dirname, '..'),
  })
  child.on('exit', (code) => process.exit(code ?? 0))
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
