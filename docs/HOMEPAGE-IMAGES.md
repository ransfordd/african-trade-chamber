# Homepage section images

## What the errors mean

`upstream image response failed ... 404` means Next.js tried to load a remote image URL and the server returned **not found**. The page still loads; only those images are missing.

## Local dev without WordPress DNS

If you see `ENOTFOUND africantradechamber.org`, your PC cannot reach the live WordPress host. The app now:

- Uses **local** `/images/hero/...` and **Unsplash** URLs in `src/lib/homepage-defaults.ts`
- **Replaces** any `africantradechamber.org` image URL from the database with those defaults at runtime

Refresh the CMS copy (optional but recommended):

```powershell
npm run seed
npm run dev
```

Open the URL from the terminal (e.g. `http://localhost:3002`).

## Local images (current setup)

Place files in `public/images/homepage/` using the **card title** as the filename (e.g. `Our Services.jpg`, `Agribusiness Council.avif`).

Defaults in `src/lib/homepage-defaults.ts` map each card to `/images/homepage/...` automatically.

After adding or renaming files:

```powershell
npm run seed
npm run dev
```

**Note:** There is no `Policy Advocacy.jpg` in the folder yet — Policy Advocacy temporarily uses `Trade & Market Briefs.jpg`. Add `Policy Advocacy.jpg` with that exact name to fix it.

## Port / lockfile notes

- If dev runs on **3002**, open `http://localhost:3002` (not 3000).
- Remove stray `C:\Users\HP\package-lock.json` if npm warns about multiple lockfiles.
