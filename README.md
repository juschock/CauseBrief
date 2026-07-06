# Snickerdoodle

Campaign execution packages by **Racoben Engineering, LLC**. Canonical repo: [github.com/juschock/CauseBrief](https://github.com/juschock/CauseBrief) (GitHub rename to Snickerdoodle pending).

Live at `racoben.com/snickerdoodle` via the Racoben parent-site Vercel rewrites.

Built with Next.js App Router, Tailwind CSS v4, and a v0.dev UI scaffold — mailto survey intake, fulfillment docs, and `basePath: '/snickerdoodle'`.

## Tagline

One survey. A complete campaign package.

## Local development

```bash
npm install
npm run dev
```

App runs at **http://localhost:3102/snickerdoodle** (port 3102 avoids conflicts with other local projects).

To test through the Racoben parent proxy, also run [juschock/racoben](https://github.com/juschock/racoben) (`site/`) and open **http://localhost:3100/snickerdoodle**.

## Deploy

1. Connect this repo to a Vercel project.
2. Deploy. The app uses `basePath: '/snickerdoodle'` in `next.config.mjs`.
3. On the **Racoben parent site** Vercel project, set `SNICKERDOODLE_PRODUCTION_URL` to this deployment URL (e.g. `https://snickerdoodle.vercel.app`).

Do not include `/snickerdoodle` in the env var value.

Parent site rewrites `/snickerdoodle` and `/snickerdoodle/*` to this project.

## Key docs

- `docs/operating-doctrine.md` — what Snickerdoodle sells and how it operates
- `docs/campaign-families.md` — launch campaign families and primary actions
- `docs/sample-kit-plan.md` — public sample kit strategy
- `docs/fact-ledger.md` — mandatory fact source for all AI drafting
