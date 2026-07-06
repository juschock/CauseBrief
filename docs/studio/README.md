# RacobenStudio — design docs

These documents describe **RacobenStudio**, the staff-only internal operations backend for Snickerdoodle (and eventually other Racoben products).

**Implementation repo (planned):** [juschock/RacobenStudio](https://github.com/juschock/RacobenStudio) — separate from [juschock/Snickerdoodle](https://github.com/juschock/Snickerdoodle).

Design-only for now. Do not implement in the public Snickerdoodle app.

| Doc | Purpose |
|-----|---------|
| [studio-architecture.md](./studio-architecture.md) | System overview, repos, deployments |
| [deployment-model.md](./deployment-model.md) | Public vs internal apps, domains, isolation |
| [data-model.md](./data-model.md) | Core entities and relationships |
| [campaign-model.md](./campaign-model.md) | Multi-campaign per client, types, milestones |
| [analytics-model.md](./analytics-model.md) | Operations, PMF, and outcome analytics |
| [intake-connectivity.md](./intake-connectivity.md) | Public form → Studio API flow |
| [phase-plan.md](./phase-plan.md) | Phased build order |

When the RacobenStudio repo is created, move or mirror these docs there.
