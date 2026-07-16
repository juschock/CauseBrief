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

Verified in Stripe test mode on July 15, 2026: browser survey submission, server-side Checkout creation, a `$99 USD` test-card payment, signed webhook delivery, idempotent Supabase finalization, and the resulting paid `New Intake` order in Studio. The Studio payment migration is deployed and its staff authorization boundary remains unchanged.

External cutover still required:

1. Finish Stripe account activation and connect the verified Racoben Engineering, LLC payout account.
2. Create a live-mode webhook endpoint for `https://racoben.com/snickerdoodle/api/stripe/webhook` with `checkout.session.completed` and `checkout.session.async_payment_succeeded` enabled.
3. Add the live Stripe secret and live webhook signing secret to Vercel Production only. Keep test credentials restricted to Preview/Development.
4. Merge the checkout pull request only after the production secrets exist, then verify the GitHub-triggered production deployment.
5. Open a production Checkout Session and confirm it has no test-mode or Sandbox indicator. Do not make a self-payment merely to test live mode.
6. Rotate the test secret that was used during setup and remove the temporary Preview webhook/bypass configuration.

## Launch-day verification

- Confirm `/snickerdoodle/brief`, Checkout, cancel, success, privacy, and terms pages load through `racoben.com`.
- Confirm a live Checkout Session contains exactly one `standard_99` item for `$99 USD` and uses the Racoben Stripe account.
- Confirm the live webhook endpoint is enabled and its most recent deliveries return HTTP 200.
- Confirm Stripe shows the intended Fulton business checking account for payouts and review the initial payout schedule.
- Confirm staff can see paid orders in Studio but public/anonymous users cannot query operational tables.
- Confirm `snickerdoodle@racoben.com` is monitored for fulfillment and refund questions.

## Daily operations and exception handling

- Treat Studio's paid order as the fulfillment trigger. A success-page visit alone is not proof of payment.
- Reconcile Stripe payments against Studio payment activity daily during launch week, then weekly once stable.
- For a webhook HTTP 500, fix the underlying database/configuration issue and use Stripe's retry or resend function; idempotency makes resends safe.
- For an asynchronous payment that remains unpaid, do not start fulfillment until the success event marks it paid.
- Issue refunds from the Racoben Stripe account, record the reason in the order activity, and update the Studio payment state when a refund workflow is added. Until then, refunds require an explicit manual reconciliation note.
- Never request card details by email or store them in Studio. Direct customers to Stripe-hosted Checkout.

## Payout expectations

Accepting a successful live payment and receiving a bank payout are separate events. Stripe may hold the first payout while account verification completes, and the bank settlement date depends on the configured payout schedule. Launch readiness means the payment is captured, the webhook is processed, the order is visible to staff, and the payout account is correctly linked; it does not guarantee same-day bank availability.
