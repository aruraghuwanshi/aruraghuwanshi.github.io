# aruraghuwanshi.github.io — Engineering Impact Portfolio

Public portfolio of **Aru Raghuwanshi**: large-scale Apache Druid platform engineering —
version upgrades, Kubernetes operator, query gateway, cost-to-serve, zero-downtime
ingestion, incident leadership, and upstream open-source contributions.

Live site: **https://aruraghuwanshi.github.io**

## What's inside

- **Hero + impact stats** — 80+ production changes, ~$1.3M/yr savings, Druid 25→28→32,
  zero-downtime deploys, incident reviews led, upstream contributor
- **Summary of work** — 19 searchable/filterable initiatives
- **Major projects** — 18 case studies in Problem / My work / Impact format, each with a
  shareable deep-dive page under `/projects/[slug]`
- **Recent work** — graceful drains, gateway rate limiting, cost delivery, alerting-as-code
- **Cost savings** — ~$1.3M/yr run-rate breakdown by lever
- **Incidents** — anonymized review themes and roles
- **Open source** — public Apache Druid / Druid Operator PRs and issues, all linked live
- **About** — what I do, where to find me

> Privacy note: internal work-item IDs, internal links, and colleague names/emails are
> intentionally omitted. Open-source links are public and clickable.

## Run locally

```bash
npm install
npm run dev -- --port 43127
# open http://127.0.0.1:43127
```

## Build & deploy

Static export via Next.js (`output: "export"`). Pushing to `main` triggers
[`.github/workflows/pages.yml`](.github/workflows/pages.yml), which builds and deploys
to GitHub Pages.

```bash
npm run build   # emits ./out
npm run lint
```

## Tech

Next.js (App Router) · TypeScript · Tailwind CSS v4 · statically exported · GitHub Pages
