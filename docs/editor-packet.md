# Editor packet

The editor packet is Rachel’s review bundle — the final human quality gate before customer delivery.

## Purpose

Give Rachel everything needed to approve or revise a campaign package in one place, without re-running production from scratch.

## When to assemble

After deterministic QA passes and before package assembly.

## Packet contents

```text
CauseBrief_EditorPacket_[EventName]_[YYYYMMDD]/
├── 00_Fact_Ledger.md          — approved fact ledger (see docs/fact-ledger.md)
├── 01_Brief_Original.txt      — raw customer submission
├── 02_Draft_All_Channels.md   — combined draft output
├── 03_Critique_Notes.md       — AI critique pass findings + resolutions
├── 04_QA_Checklist.md         — completed fulfillment/qa-checklist.md
├── 05_Change_Log.md           — what changed between draft and polish pass
└── 06_Rachel_Review.md        — approval checklist (below)
```

## Rachel review checklist (`06_Rachel_Review.md`)

```markdown
# Rachel review — [Campaign Name]

- [ ] Fact ledger matches customer brief
- [ ] No invented sponsors, stats, quotes, links, partners, deadlines, outcomes, or claims
- [ ] Tone matches customer request
- [ ] All requested channels included
- [ ] Dates, times, location/link, and offer/ask are correct
- [ ] Phrases to include/avoid respected
- [ ] Copy is usable without extra explanation
- [ ] Appropriate for nonprofit / local / community voice if applicable
- [ ] Ready for customer delivery

Decision: [ ] Approved  [ ] Needs revision

Notes:
```

## Rachel’s role

- **Final expert quality gate** — not the first drafter.
- Josh + internal AI tooling produce drafts; Rachel approves what ships.
- Revisions go back through polish + QA, not straight to the customer.

## After approval

1. Apply Rachel’s edits to final deliverable files.
2. Assemble customer package per `fulfillment/delivery-package.md`.
3. Deliver to customer delivery email within SLA.
