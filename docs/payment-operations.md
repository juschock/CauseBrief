# Snickerdoodle payment operations

## Customer workflow

1. The customer completes the campaign survey at `/snickerdoodle/brief`.
2. The server validates every field and stores a pending `$99 USD` checkout intent.
3. Stripe Checkout collects the card details and payment. Card data never passes through Racoben servers.
4. Stripe redirects the customer to a confirmation or cancellation page.
5. The signed Stripe webhook is the source of truth for fulfillment, not the browser redirect.

## Staff workflow

1. A paid Checkout Session creates the account, primary contact, campaign, order, brief, and payment activity in Studio in one database transaction.
2. The new paid order appears in Studio as `New Intake` with `payment_status = paid`.
3. Staff reviews the brief, requests clarification if needed, and moves the order through the existing fulfillment board.
4. The existing 48-hour delivery expectation begins after successful payment and receipt of a complete survey.

## Payment controls

- The server owns the only offer definition: `standard_99`, `9900` cents, `usd`, quantity one.
- The client cannot supply a Stripe price, amount, currency, product, or quantity.
- Webhooks require the raw request body and a valid Stripe signature.
- The database function validates amount and currency again and uses the Stripe event ID as its idempotency key.
- Staff RLS remains in force. Checkout writes use a server-only Supabase service credential; no secret is exposed through a `NEXT_PUBLIC_` variable.
- Logs include event IDs and error messages only, never card data, secrets, or the survey payload.

## Required environment variables

- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`
- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `NEXT_PUBLIC_SITE_ORIGIN=https://racoben.com`

Use Stripe test-mode credentials in Preview and Development. Production must use the intended Racoben Stripe account's live credentials and a live webhook endpoint at `https://racoben.com/snickerdoodle/api/stripe/webhook`.

## First-real-dollar readiness

Code complete: validated Checkout creation, success/cancel UX, signed webhook handling, idempotent transactional persistence, staff handoff, privacy/terms copy, tests, and build verification.

External activation still required: confirm the Racoben Stripe account, configure test credentials and webhook, apply the Studio payment migration, run a test-card checkout through the public proxy, then separately authorize live Stripe credentials and webhook activation.
