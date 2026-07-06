# Snickerdoodle internal automation pipeline

Staff-only production workflow. Customers never see this process.

## Overview

```text
Customer survey (mailto / future form)
        ↓
1. Intake normalization
        ↓
2. Fact ledger
        ↓
3. Campaign-type selection
        ↓
4. Internal AI drafting
        ↓
5. Channel adaptation
        ↓
6. AI critique pass
        ↓
7. AI polish pass
        ↓
8. Deterministic QA
        ↓
9. Editor packet
        ↓
10. Rachel review (final quality gate)
        ↓
11. Package assembly
        ↓
12. Delivery
```

## Stage details

### 1. Intake normalization

- Parse email or form submission into structured fields.
- Flag missing required fields before production starts.
- Create internal folder: `Snickerdoodle_[EventName]_[YYYYMMDD]`.

### 2. Fact ledger

- Extract only verified facts from the survey into a single source of truth.
- See `docs/fact-ledger.md`.
- All downstream AI steps must reference the ledger, not the raw survey alone.

### 3. Campaign-type selection

- Map brief to template pack in `templates/`.
- Note channel weights and tone emphasis for the campaign type.

### 4. Internal AI drafting

- Josh + ChatGPT + custom tooling generate first drafts.
- Prompts in `fulfillment/internal-prompts.md`.
- **Hard rule:** use fact ledger only. No invented facts.

### 5. Channel adaptation

- Adapt base copy for each requested channel (email, Instagram, Facebook, etc.).
- Respect platform length and format norms.

### 6. AI critique pass

- Run a structured critique against the fact ledger and brief constraints.
- Flag unsupported claims, tone mismatches, missing channels, and phrase violations.

### 7. AI polish pass

- Apply fixes from critique pass.
- Improve clarity, flow, and CTA strength without adding new facts.

### 8. Deterministic QA

- Run `fulfillment/qa-checklist.md` mechanically where possible.
- Verify dates, links, channel coverage, file naming.

### 9. Editor packet

- Assemble Rachel’s review packet per `docs/editor-packet.md`.
- Include fact ledger, drafts, critique notes, and QA results.

### 10. Rachel review

- Rachel is the final expert quality gate.
- Approve, edit, or return for revision before packaging.

### 11. Package assembly

- Build customer deliverable per `fulfillment/delivery-package.md`.

### 12. Delivery

- Send ZIP + optional Google Doc link to customer delivery email.
- Confirm 48-hour SLA from complete brief.

## Hard rules

- AI is internal only. Never customer-facing.
- AI must use only facts in the fact ledger.
- No invented sponsors, donation matches, statistics, quotes, links, partners, deadlines, outcomes, or claims.
- Rachel review is required before every delivery in V1.

## V1 constraints

Manual payment confirmation before production starts. No customer-facing automation required for first 5–10 orders.

Goal: 5 packages sold → repeatable pipeline → faster package #5 than package #1.
