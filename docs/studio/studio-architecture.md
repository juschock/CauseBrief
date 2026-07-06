# RacobenStudio architecture

RacobenStudio is a **staff-only internal operations backend** — not a customer-facing SaaS portal.

## Portfolio layout (horizontal products)

```text
juschock/racoben          → racoben.com (parent site, rewrites only)
juschock/Snickerdoodle       → racoben.com/snickerdoodle (public marketing + intake)
juschock/ShipCheck        → racoben.com/shipcheck (public product, when split)
juschock/RacobenStudio    → studio.racoben.com (internal ops — this system)
```

Snickerdoodle and RacobenStudio are **separate repos, separate Vercel projects, separate deployments**.

## Customer-facing vs internal

| | Snickerdoodle (public) | RacobenStudio (internal) |
|---|---|---|
| URL | `racoben.com/snickerdoodle` | `studio.racoben.com` (or temp Vercel URL) |
| Auth | None | Staff login required |
| Database | None in V1 | Yes (Supabase Postgres) |
| AI | Never customer-facing | Internal drafting/critique/polish only |
| Audience | Prospects & customers | Josh, Rachel, future ops staff |

**Do not** mount Studio at `racoben.com/snickerdoodle/studio`. It couples public marketing to sensitive operational data.

## What Studio manages

- Accounts (client organizations)
- Contacts
- Campaigns (many per account)
- Orders / kits (many per campaign)
- Briefs, fact ledgers, kit assets
- AI draft runs (internal artifacts)
- Review tasks (Rachel queue)
- Delivery packages
- Analytics (operations, PMF, outcomes)
- Activity events and internal notes

## Roles

| Role | Who | Capabilities |
|------|-----|--------------|
| Owner | Josh | Full access |
| Operator | Josh / future ops | Accounts, orders, drafting workflow, delivery |
| Reviewer | Rachel | Review queue, editor packet, approve/revise, edit final copy |

Rachel does **not** need billing, AI prompt config, or admin settings.

## Recommended stack (when built)

- Next.js App Router (internal dashboard)
- Supabase Postgres + Auth
- Supabase Storage (later, for delivered files)
- Vercel (Studio deployment)
- Internal AI scripts/jobs (separate from public app)

## Guiding principle

Design for scale; **build for the next 10 orders**. Studio helps Josh and Rachel manage work — not customer self-service.
