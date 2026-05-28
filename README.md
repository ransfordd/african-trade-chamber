# African Trade Chamber — Next.js + Payload CMS

Greenfield rebuild of [africantradechamber.org](https://africantradechamber.org): **Next.js 15** (App Router; required by Payload CMS 3), **TypeScript**, **Tailwind**, **Framer Motion**, **Payload CMS 3**, **PostgreSQL**, deployed via **Coolify**.

Legacy HTML in `../word/` is design/copy reference only — not production markup.

## Quick start (local)

```bash
# 1. Postgres (listens on host port 5433)
docker compose up -d postgres

# 2. Environment
cp .env.example .env
# DATABASE_URI must use localhost:5433 — edit PAYLOAD_SECRET too

# 3. Install & run
npm install
npm run dev
```

- **Site:** http://localhost:3000  
- **CMS admin:** http://localhost:3000/admin  

Without Postgres, the public site still renders using fallbacks in `src/lib/defaults.ts`.

**Local Postgres uses host port `5433`** (see `docker-compose.yml`) so it does not clash with another PostgreSQL on Windows port `5432`. Your `.env` must use `localhost:5433`.

### Seed CMS data

```powershell
# PowerShell — .env is loaded automatically by the seed script
$env:SEED_ADMIN_EMAIL="admin@africantradechamber.org"
$env:SEED_ADMIN_PASSWORD="YourSecurePassword123!"
npm run seed
```

Ensure Docker Postgres is running (`docker compose up -d postgres`) and `.env` uses port **5433**.

### Verify production build

```bash
npm run build
```

Build succeeds without Postgres (pages use fallbacks). Connect Postgres before using `/admin`.

## Project structure

```
src/
  app/
    (frontend)/     # Public pages
    (payload)/      # /admin + API routes
  components/       # Header, Footer, HeroSlider, etc.
  lib/              # CMS helpers + defaults
  payload/          # Collections & globals
docs/
  SITE-INVENTORY.md # URL → route → reference HTML map
scripts/
  seed.ts
  migrate-from-wp.ts
```

## Coolify deployment

1. Push this repo to GitHub.
2. In Coolify, create an app from the repo (Dockerfile build).
3. Add a **PostgreSQL** service; set env vars:

| Variable | Description |
|----------|-------------|
| `DATABASE_URI` | `postgresql://user:pass@host:5432/dbname` |
| `PAYLOAD_SECRET` | Long random secret |
| `NEXT_PUBLIC_SERVER_URL` | Public URL, e.g. `https://staging.africantradechamber.org` |

4. Build command: `npm run build` (handled by Dockerfile).
5. Port **3000**; health check `/`.
6. After deploy, run seed once (Coolify one-off command or local against prod DB).

`docker-compose.yml` runs Postgres locally; production DB is typically a separate Coolify Postgres resource.

See **`docs/COOLIFY.md`** for step-by-step Coolify setup.

## Content migration

1. WordPress export XML → `data/wp-export.xml`
2. `npm run migrate:wp` (extend script for your export)
3. 301 redirects live in `next.config.mjs`

## Troubleshooting Postgres

| Error | Likely cause | Fix |
|-------|----------------|-----|
| `password authentication failed for user "atc"` | App hit **wrong** Postgres on port 5432 (Windows install) | Use `DATABASE_URI=...@localhost:5433/...` and `docker compose up -d postgres` |
| `read ECONNRESET` | Port conflict or DB not ready | Wait 10s after `docker compose up`; check `docker ps` |
| Stale Docker volume | Old password in volume | `docker compose down -v` then `up -d postgres` (wipes local DB) |

Verify Docker DB:

```powershell
docker exec atc-website-postgres-1 psql -U atc -d atc_website -c "SELECT 1;"
```

Check port 5433 is mapped: `docker ps` should show `0.0.0.0:5433->5432/tcp`.

**Seed error: multiple relations named `children`:** Nested nav used two fields named `children` (fixed: inner level is now `subItems`). Reset the dev database and re-seed:

```powershell
docker compose down -v
docker compose up -d postgres
npm run seed
```

**npm lockfile warning:** If you see “multiple lockfiles” pointing to `C:\Users\HP\package-lock.json`, rename or remove that file so npm uses `atc-website/package-lock.json`.

## Reference

- Site inventory: `docs/SITE-INVENTORY.md`
- Membership fees & hero slides: seeded from `checks.html` content
