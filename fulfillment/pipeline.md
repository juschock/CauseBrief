# Snickerdoodle fulfillment pipeline (internal)

1. **Intake received** — Email or future form submission creates a ticket folder: `Snickerdoodle_[EventName]_[YYYYMMDD]`.
2. **Intake normalization** — Parse submission into structured fields; flag missing info before starting.
3. **Fact ledger** — Build approved fact ledger per `docs/fact-ledger.md`. All AI steps use ledger only.
4. **Survey completeness check** — Verify dates, location, audience, goal, offer, tone, channels, delivery email.
5. **Campaign type mapping** — Select template pack from `templates/` (fundraiser, local-event, adoption-drive, etc.).
6. **Internal drafting** — Josh + ChatGPT + custom tooling per `fulfillment/internal-prompts.md`. Customer never sees this step.
7. **Channel adaptation** — Adapt copy for each requested channel.
8. **AI critique pass** — Diff output against fact ledger; flag invented or unsupported claims.
9. **AI polish pass** — Apply critique fixes without adding new facts.
10. **Deterministic QA** — Run `fulfillment/qa-checklist.md`.
11. **Editor packet** — Assemble Rachel review bundle per `docs/editor-packet.md`.
12. **Rachel review** — Final expert quality gate before packaging.
13. **Package & deliver** — Assemble ZIP + optional Google Doc link per `fulfillment/delivery-package.md`. Confirm 48-hour SLA from complete survey.

See also: `docs/internal-automation-pipeline.md`

## V1 constraints

- Manual payment confirmation before production starts
- No customer-facing automation required for first 5–10 orders
- Goal: 5 packages sold → repeatable pipeline → faster package #5 than package #1

## Hard rule

AI is allowed and encouraged internally, but never customer-facing. AI must use only facts in the fact ledger. No invented sponsors, donation matches, statistics, quotes, links, partners, deadlines, outcomes, or claims.
