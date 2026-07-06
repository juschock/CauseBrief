# RacobenStudio phase plan

Build for the **next 10 orders**, not full SaaS. Do not start Studio until Snickerdoodle is live on `racoben.com/snickerdoodle` and sample kits exist — unless manual ops becomes unbearable.

## Prerequisites (Snickerdoodle public)

- [ ] `racoben.com/snickerdoodle` proxied and verified
- [ ] `snickerdoodle@racoben.com` receiving mail
- [ ] Two public sample kits published
- [ ] First paid validation cycle started

## Order lifecycle statuses

```text
New Intake
Needs Clarification
Ready for Drafting
Drafting
AI Critique
Ready for Human Review
Rachel Reviewing
Revision Needed
Approved
Packaged
Delivered
Follow-Up Sent
Closed
```

## Studio Phase 1 — Internal CRM / ops

**Goal:** Replace spreadsheets for accounts and order tracking.

- Staff login (Supabase Auth)
- Accounts list + detail
- Contacts
- Campaigns list (multi per account)
- Orders list + status board
- Brief viewer (read-only from stored submission)
- Internal notes
- Activity log

**No:** payment, customer portal, AI runner, integrations.

## Studio Phase 2 — Production pipeline

- Fact ledger editor
- Kit asset editor (draft/final text)
- AI draft run records (manual paste or script hook)
- Editor packet assembly
- Rachel review queue
- Delivery package tracker + status transitions

## Studio Phase 3 — Analytics

- Fulfillment metrics entry / timers
- Manual campaign outcome metrics
- Customer feedback capture
- Simple dashboards: fulfillment time, rewrite rate, revenue per client

## Studio Phase 4 — Automation

- Prompt runner for draft / critique / polish
- Package folder generator
- Delivery email drafter (staff sends manually)

## Studio Phase 5 — Integrations (only if validated)

- Stripe
- Mailchimp / Eventbrite / Givebutter
- Public brief form → Studio intake API (if not done in Phase 2)

## Public Snickerdoodle coupling

| Studio phase | Public Snickerdoodle change |
|--------------|--------------------------|
| 1 | None (mailto continues) |
| 2 | Optional: POST intake to Studio API |
| 3+ | Same intake; no customer dashboard |

## Open questions

1. **Repo name:** `RacobenStudio` (portfolio-wide) vs `SnickerdoodleStudio` (product-specific)?
2. **Account matching:** Auto-merge by email domain vs manual dedup?
3. **Campaign auto-create:** Every brief creates new campaign vs prompt staff to link existing?
4. **Subdomain:** `studio.racoben.com` vs `ops.racoben.com`?
5. **When to split:** After how many paid orders does mailto become blocking?

Recommended defaults: `RacobenStudio`, manual account matching in V1, staff picks campaign on intake review, `studio.racoben.com`, start Studio Phase 1 after 3–5 paid kits if ops pain is real.
