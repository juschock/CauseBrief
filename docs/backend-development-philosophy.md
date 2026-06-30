# CampaignKit Backend Development Philosophy

CampaignKit is a productized service first, not a full SaaS product.

The purpose of the backend work is to support fast, high-quality, human-reviewed fulfillment of campaign kits while keeping the customer-facing experience simple and trustworthy.

## Core Principle

Build just enough internal tooling to make high-quality, human-reviewed campaign kits efficiently.

Start by doing the work manually so we can sell and learn quickly. Only automate the parts that are repetitive and well-understood after we have validated the offer with real customers.

## Customer-Facing Experience

The customer should see a clean, simple flow:

1. Fill out a structured campaign brief.
2. Submit the campaign details.
3. Receive a polished, human-reviewed marketing kit.

The customer should not see:

- AI chat interfaces
- prompt boxes
- model settings
- token usage
- “generate with AI” controls
- customer-facing AI claims
- automated output with no review step

CampaignKit is not positioned as an AI writing tool. It is positioned as a polished campaign-kit service by Racoben.

## Backend Definition

For V1, “backend” primarily means the internal production workflow, not a traditional SaaS backend.

Over time, internal tooling should live in a **separate, access-controlled system** that only CampaignKit fulfillment staff can reach — not in the public customer app. That internal system may include:

- form submission handling
- intake organization
- internal fulfillment folders
- template selection
- internal AI drafting prompts
- QA checklists
- delivery checklists
- file packaging conventions
- internal status tracking

The backend should not initially include:

- customer accounts
- dashboards (customer-facing)
- database persistence in the public app
- automated payment workflows
- automated delivery portals
- customer-facing AI
- complex admin panels exposed to customers
- multi-user customer roles
- subscription billing

Those may be considered later only after demand is validated.

## Internal AI Use

AI may be used internally by Racoben as a production aid.

Acceptable internal AI uses:

- first-draft generation
- channel-specific copy variations
- subject line generation
- CTA variations
- tone adjustments
- press release drafts
- social post variants
- campaign schedule drafts
- formatting assistance

AI output must be reviewed before delivery.

Human review is required for:

- accuracy
- tone
- event details
- names
- dates
- links
- prices
- donation asks
- sensitive wording
- nonprofit/community voice
- inappropriate claims
- hallucinated facts

The customer buys the finished campaign kit, not raw AI output.

## Human-in-the-Loop Requirement

Human review is required for V1.

This is not optional at the beginning.

Marketing copy for nonprofits, local events, fundraisers, and small businesses requires judgment, tone, and accuracy. The human review step is part of the product quality and part of Racoben’s advantage.

The backend should support the review step, not replace it prematurely.

## Development Phases

### Phase 0 — Offer Definition

Goal: define the product clearly before building automation.

Required artifacts:

- landing page
- intake form
- pricing
- fulfillment checklist
- QA checklist
- internal prompt library
- delivery package structure

No database, auth, customer dashboard, or payment integration is required in this phase.

**Status:** complete for V1 UI/offer testing.

### Phase 1 — Manual Fulfillment

Goal: sell and fulfill the first 5–10 campaign kits manually.

Workflow:

1. Customer submits intake form.
2. Submission is delivered by email or simple form handler.
3. Racoben creates an internal campaign folder.
4. Human selects the campaign template type.
5. Internal AI assists with first drafts.
6. Human reviews and edits the kit.
7. Final files are packaged manually.
8. Customer receives the finished kit within the promised delivery window.

Success criteria:

- at least 5 real customer attempts
- at least 1–3 paid customers, ideally more
- clear understanding of common campaign types
- clear understanding of fulfillment bottlenecks
- customer feedback on usefulness

**Status:** current phase.

### Phase 2 — Lightweight Internal Tooling

Goal: reduce repetitive manual work after real orders reveal the workflow.

Build in a **staff-only internal app or workspace** (locked-down access — not linked from the public site).

Possible tools:

- internal intake viewer
- campaign-type template selector
- internal draft-generation helper
- prompt runner
- folder/package generator
- QA checklist tracker
- delivery status tracker
- reusable file naming system

Still required:

- human QA
- human final approval
- no customer-facing AI
- no full SaaS dashboard unless proven necessary

### Phase 3 — Robust Backend

Goal: add heavier infrastructure only after the offer is validated.

Possible future additions:

- database
- customer accounts
- order history
- payment integration
- automated delivery
- internal admin dashboard
- subscription plans
- team workflows
- saved campaign templates

These should not be built until there is evidence that customers are paying and the fulfillment process is repeatable.

## What Not to Build Early

Do not build early:

- complex SaaS backend
- customer accounts
- subscription billing
- full admin dashboard (customer-facing)
- automated campaign generation without review
- customer-facing AI prompt interface
- multi-tenant data model
- CRM features
- email sending platform
- social posting automation
- marketing analytics platform

CampaignKit V1 should sell the outcome, not the software.

## V1 Backend Goal

The V1 backend should make it easy to receive, organize, draft, review, package, and deliver campaign kits.

The goal is not scale.

The goal is learning.

## V1 Business Goal

The first business milestone is not full automation.

The first business milestone is:

- sell 5–10 campaign kits
- fulfill them well
- learn what customers actually need
- identify which parts of fulfillment are repetitive
- automate only after the process is understood

## Guiding Sentence

CampaignKit should begin as a high-quality, human-reviewed productized service with internal AI-assisted fulfillment, then gradually evolve into software only where automation clearly improves speed, consistency, or margin.

## Related internal docs

```text
campaignkit/fulfillment/   — pipeline, QA, prompts, delivery package
campaignkit/templates/     — campaign-type template notes
campaignkit/docs/          — product philosophy and future specs
```
