# CampaignKit

Productized marketing kit service by **Racoben Engineering**. Mounted at `racoben.com/campaignkit`.

Built with Next.js App Router, Tailwind CSS v4, and a v0.dev UI scaffold — integrated with Racoben intake (mailto), fulfillment docs, and product routing.

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

## Deploy

Separate Vercel project, root directory: `campaignkit/`.
