# CauseBrief

Productized campaign package service by **Racoben Engineering**. Canonical repo: [github.com/juschock/CauseBrief](https://github.com/juschock/CauseBrief) (rename from CampaignKit pending).

Live at `racoben.com/causebrief` via the Racoben parent-site Vercel rewrites.

Built with Next.js App Router, Tailwind CSS v4, and a v0.dev UI scaffold — mailto intake, fulfillment docs, and `basePath: '/causebrief'`.

## V1

- Sales landing page + sectioned intake form (`/brief`)
- Mailto handoff — no database, no payment, no customer-facing AI
- Internal fulfillment docs in `fulfillment/` and `templates/`
- Product philosophy: `docs/backend-development-philosophy.md`

## Local dev

```bash
npm install
npm run dev
```

App runs at **http://localhost:3102/causebrief** (port 3102 avoids conflicts with other local projects).

To test through the Racoben parent proxy, also run [juschock/racoben](https://github.com/juschock/racoben) (`site/`) and open **http://localhost:3100/causebrief**.

## Deploy (Vercel)

1. Import this repo as a **standalone** Vercel project (repo root — not a subdirectory).
2. Deploy. The app uses `basePath: '/causebrief'` in `next.config.mjs`.
3. On the **Racoben parent site** Vercel project, set `CAUSEBRIEF_PRODUCTION_URL` to this deployment URL (e.g. `https://causebrief.vercel.app`).

Do not include `/causebrief` in the env var value.

Parent site rewrites `/causebrief` and `/causebrief/*` to this project.
