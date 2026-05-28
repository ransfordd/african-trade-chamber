import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const envPath = path.resolve(__dirname, '../.env')

dotenv.config({ path: envPath })

export function requireEnv(name: string): string {
  const value = process.env[name]
  if (!value || typeof value !== 'string' || !value.trim()) {
    console.error(`Missing or empty ${name}.`)
    console.error(`Copy .env.example to .env in the project root (expected: ${envPath})`)
    process.exit(1)
  }
  return value.trim()
}
