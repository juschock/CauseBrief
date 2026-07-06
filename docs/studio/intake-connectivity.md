# Intake connectivity

How the public Snickerdoodle site connects to RacobenStudio.

## Phase 1 (current — V1)

```text
Customer → /snickerdoodle/brief form → mailto → Josh/Rachel manual fulfillment
```

No API. No database. No change to public app constraints.

## Phase 2 (target)

```text
Customer → /snickerdoodle/brief form
         → Snickerdoodle server route (POST)
         → RacobenStudio POST /api/intake (authenticated via shared secret)
         → Supabase: account, contact, campaign, order, brief, activity event
         → Email notify Josh/Rachel
         → Customer confirmation page (no AI, no account creation)
```

### Public site responsibilities

- Validate form fields (same schema as today `lib/intake.ts`)
- POST to Studio intake URL **server-side only** (secret never exposed to browser)
- Show success UI (preserve current confirmation UX)
- **Do not** own Postgres or business logic

### Studio intake endpoint responsibilities

1. Validate payload + API secret
2. Match or create **Account** (by organization name + email heuristics)
3. Create **Contact** (delivery email)
4. Create or match **Campaign** (from campaign name + type)
5. Create **Order** (status: New Intake)
6. Store **Brief** (raw JSON + normalized fields)
7. Create draft **Fact Ledger** (missing facts flagged)
8. **Activity event:** `brief_submitted`
9. Notify staff email
10. Return `{ orderId }` to public site for confirmation display (optional)

No customer login. No customer dashboard.

### API shape (sketch)

```http
POST /api/intake
Authorization: Bearer <STUDIO_INTAKE_API_SECRET>
Content-Type: application/json

{ ...BriefFormData fields... }
```

Rate-limit and validate origin on Studio side.

## Phase 3+

- Webhook from email parser for mailto fallback
- Duplicate detection (same org resubmits)
- Payment status field on order (manual until Stripe)

## Hard rules (unchanged)

- AI internal only
- Fact ledger before drafting
- Rachel review before delivery
- No customer-facing AI, prompts, or chat
