# Coolify deployment guide

## Prerequisites

- GitHub repository with this project
- Coolify instance with Docker support
- PostgreSQL 16 (Coolify database service or external)

## 1. Create PostgreSQL

In Coolify, add a **PostgreSQL** resource. Note the internal connection URL, e.g.:

```
postgresql://user:password@postgres.internal:5432/atc_website
```

## 2. Create application

1. **New Resource** → Application → GitHub → select `atc-website` repo
2. **Build pack:** Dockerfile (root `Dockerfile`)
3. **Port:** `3000`
4. **Health check:** `/` (HTTP 200)

## 3. Environment variables

| Key | Required | Example |
|-----|----------|---------|
| `DATABASE_URI` | Yes | `postgresql://...` |
| `PAYLOAD_SECRET` | Yes | 32+ char random string |
| `NEXT_PUBLIC_SERVER_URL` | Yes | `https://staging.africantradechamber.org` |

Optional for first deploy seed (run once, then remove):

| Key | Example |
|-----|---------|
| `SEED_ADMIN_EMAIL` | `admin@africantradechamber.org` |
| `SEED_ADMIN_PASSWORD` | (strong password) |

## 4. Deploy

1. Push to `main` (or your deploy branch)
2. Coolify builds via Dockerfile (`npm ci` → `npm run build` → standalone)
3. After first successful deploy, run one-off command in Coolify:

   ```bash
   npm run seed
   ```

4. Open `https://your-domain/admin` and log in with the seeded user (or create user in admin)

## 5. Staging → production

- Run staging on a subdomain first (e.g. `staging.africantradechamber.org`)
- Verify redirects in `next.config.mjs`
- Point production DNS to Coolify when ready; keep WordPress live until cutover
- Update `NEXT_PUBLIC_SERVER_URL` to production URL

## 6. GitHub integration

Coolify webhooks redeploy on push. No extra CI required for basic deploys.

## Troubleshooting

- **Build fails:** Ensure Node 20 in Dockerfile (already set)
- **Admin 500:** Check `DATABASE_URI` and that Postgres is reachable from the app container
- **Images broken:** `next.config.mjs` allows `africantradechamber.org` uploads; migrate media to Payload over time
