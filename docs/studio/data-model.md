# RacobenStudio data model

Core entities and relationships. Implementation target: Supabase Postgres.

## Entity hierarchy

```text
Account (client organization)
├── Contact(s)
├── Campaign(s)
│   ├── Order(s) / Kit(s)
│   │   ├── Brief
│   │   ├── Fact Ledger
│   │   ├── Kit Asset(s)
│   │   ├── AI Draft Run(s)
│   │   ├── Review Task(s)
│   │   ├── Delivery Package
│   │   └── Fulfillment Metrics
│   ├── Campaign Milestone(s)
│   └── Campaign Metric(s)
├── Outreach Event(s)
└── Activity Event(s)
```

## Accounts

Client organizations CauseBrief serves.

| Field | Notes |
|-------|-------|
| id | UUID |
| name | Organization name |
| account_type | nonprofit, animal_rescue, church, school_pta, local_business, event_organizer, consultant, other |
| website | |
| location | |
| status | active, prospect, paused, churned |
| tags | json array |
| source | lead source |
| lifetime_value | computed |
| notes | |
| created_at, updated_at | |

## Contacts

| Field | Notes |
|-------|-------|
| id | |
| account_id | FK |
| name | |
| email | |
| role | |
| phone | optional |
| is_primary | boolean |
| notes | |

## Campaigns

See [campaign-model.md](./campaign-model.md). One account → many campaigns.

## Orders

A **specific paid kit/deliverable** within a campaign.

| Field | Notes |
|-------|-------|
| id | |
| campaign_id | FK |
| account_id | FK (denormalized for queries) |
| primary_contact_id | FK |
| package_type | e.g. standard $99 kit |
| price | |
| status | see [phase-plan.md](./phase-plan.md) lifecycle |
| due_at | |
| delivered_at | |
| assigned_reviewer_id | FK → users |
| created_at, updated_at | |

## Briefs

| Field | Notes |
|-------|-------|
| id | |
| order_id | FK |
| raw_submission_json | full intake payload |
| organization_name, campaign_name, campaign_type | |
| date_time, location_or_link | |
| target_audience, main_goal, offer_or_ask | |
| key_details, tone, channels_needed | |
| website_social_links | |
| phrases_to_include, phrases_to_avoid | |
| additional_notes, delivery_email | |
| created_at | |

## Fact ledgers

Single source of truth before AI drafting. See CauseBrief `docs/fact-ledger.md`.

| Field | Notes |
|-------|-------|
| id | |
| order_id | FK |
| verified_facts_json | |
| missing_facts_json | |
| approved_claims_json | |
| blocked_claims_json | |
| tone_guardrails_json | |
| status | draft, complete, approved |
| created_at, updated_at | |

## Kit assets

| Field | Notes |
|-------|-------|
| id | |
| order_id | FK |
| asset_type | email_sequence, social_posts, landing_page_copy, subject_lines, cta_bank, posting_schedule, flyer_copy, press_release, thank_you_followup |
| title | |
| draft_content | |
| final_content | |
| status | draft, in_review, approved |
| version | |
| created_at, updated_at | |

## AI draft runs (internal only)

| Field | Notes |
|-------|-------|
| id | |
| order_id | FK |
| prompt_version | |
| input_fact_ledger_id | FK |
| model_provider | |
| draft_output | |
| critique_output | |
| polish_output | |
| created_by | FK → users |
| created_at | |

## Review tasks

| Field | Notes |
|-------|-------|
| id | |
| order_id | FK |
| reviewer_id | FK → users |
| status | pending, in_progress, approved, revision_needed |
| priority | |
| due_at | |
| review_notes | |
| approved_at | |
| created_at, updated_at | |

## Delivery packages

| Field | Notes |
|-------|-------|
| id | |
| order_id | FK |
| storage_path | object storage path or folder ref |
| delivered_at | |
| delivery_method | email, link |
| delivery_email | |

## Activity events

Audit trail.

| Field | Notes |
|-------|-------|
| id | |
| account_id, order_id | optional FKs |
| actor_id | FK → users |
| event_type | brief_submitted, status_changed, review_approved, etc. |
| message | |
| metadata_json | |
| created_at | |

## Internal notes

| Field | Notes |
|-------|-------|
| id | |
| account_id, order_id, campaign_id | optional FKs |
| author_id | |
| body | |
| created_at | |

## Users (staff)

Supabase Auth users with role: owner, operator, reviewer.
