# CampaignKit fulfillment pipeline (internal)

1. **Intake received** — Email or future form submission creates a ticket folder: `CampaignKit_[EventName]_[YYYYMMDD]`.
2. **Brief completeness check** — Verify dates, location, audience, goal, offer, tone, channels, delivery email. Request missing info before starting.
3. **Campaign type mapping** — Select template pack from `templates/` (fundraiser, local-event, adoption-drive, etc.).
4. **Internal drafting** — Use `fulfillment/internal-prompts.md` with Racoben-only production aids. Customer never sees this step.
5. **Human QA** — Run `fulfillment/qa-checklist.md` before delivery.
6. **Package & deliver** — Assemble ZIP + optional Google Doc link per `fulfillment/delivery-package.md`. Confirm 48-hour SLA from complete brief.

## V1 constraints

- Manual payment confirmation before production starts
- No customer-facing automation required for first 5–10 orders
- Goal: 5 kits sold → repeatable pipeline → faster kit #5 than kit #1
