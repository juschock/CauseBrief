# CampaignKit

Productized marketing kit service by **Racoben Engineering**. Canonical repo: [github.com/juschock/CampaignKit](https://github.com/juschock/CampaignKit).

Live at `racoben.com/campaignkit` via the Racoben parent-site Vercel rewrites.

Built with Next.js App Router, Tailwind CSS v4, and a v0.dev UI scaffold — mailto intake, fulfillment docs, and `basePath: '/campaignkit'`.

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

App runs at **http://localhost:3102/campaignkit** (port 3102 avoids conflicts with other local projects).

To test through the Racoben parent proxy, also run [juschock/racoben](https://github.com/juschock/racoben) (`site/`) and open **http://localhost:3100/campaignkit**.

## Deploy (Vercel)

1. Import this repo as a **standalone** Vercel project (repo root — not a subdirectory).
2. Deploy. The app uses `basePath: '/campaignkit'` in `next.config.mjs`.
3. On the **Racoben parent site** Vercel project, set `CAMPAIGNKIT_PRODUCTION_URL` to this deployment URL (e.g. `https://campaignkit.vercel.app`).

Parent site rewrites `/campaignkit` and `/campaignkit/*` to this project.
