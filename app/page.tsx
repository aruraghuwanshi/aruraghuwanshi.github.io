import Link from "next/link";
import {
  automation,
  caseStudies,
  costLevers,
  externalContribs,
  hero,
  incidentSummary,
  incidents,
  navSections,
  ossGroups,
  productivity,
  stats,
} from "@/data/impact";
import { SiteNav, WorkGrid } from "@/components/client";
import { Badge, Card, ImpactBox, SectionHeading } from "@/components/ui";

const recentSlugs = ["middle-manager-drain", "gateway-rate-limiting", "cost-to-serve", "alerting-as-code", "capacity-fy27"];
const recentStudies = caseStudies.filter((c) => recentSlugs.includes(c.slug));

function OssState({ state }: { state: "merged" | "open" | "closed" }) {
  const tone = state === "merged" ? "green" : state === "open" ? "blue" : "amber";
  return <Badge tone={tone}>{state}</Badge>;
}

export default function Home() {
  return (
    <div id="top">
      <SiteNav sections={navSections} />

      {/* Hero */}
      <header className="mx-auto max-w-6xl px-4 pt-10">
        <Card className="relative overflow-hidden p-6 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
            {hero.eyebrow}
          </p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            {hero.name} <span className="text-amber-200">— {hero.title}</span>
          </h1>
          <p className="mt-4 max-w-4xl text-sm leading-6 text-slate-200 sm:text-base sm:leading-7">
            {hero.scope}
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label} className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                <p className="text-2xl font-extrabold text-sky-300">{s.value}</p>
                <p className="mt-1 text-sm font-semibold text-white">{s.label}</p>
                <p className="mt-0.5 text-xs leading-5 text-slate-300">{s.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {navSections.map((s) => (
              <Link
                key={s.id}
                href={`#${s.id}`}
                className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-slate-200 hover:border-sky-300/50 hover:text-white"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </Card>
      </header>

      <main className="mx-auto max-w-6xl space-y-16 px-4 py-12">
        {/* Summary of work */}
        <section id="work" className="scroll-mt-20">
          <SectionHeading
            kicker="Breadth"
            title="Summary of work"
            lede="Every initiative in one grid — search or filter by theme. Open-source-safe summaries; internal ticket IDs and links intentionally omitted."
          />
          <WorkGrid />
        </section>

        {/* Major projects */}
        <section id="projects" className="scroll-mt-20">
          <SectionHeading
            kicker="Depth"
            title="Major projects"
            lede="Problem, my work, and impact for each project. Click any card for a shareable deep-dive page."
          />
          <div className="grid gap-4 lg:grid-cols-2">
            {caseStudies.map((c) => (
              <Link key={c.slug} href={`/projects/${c.slug}`} className="block h-full">
                <Card className="h-full transition hover:border-sky-300/40">
                  <Badge tone="purple">{c.area}</Badge>
                  <h3 className="mt-2 text-lg font-bold text-white">{c.title}</h3>
                  <p className="mt-1.5 line-clamp-3 text-[13px] leading-5 text-slate-300">
                    {c.problem}
                  </p>
                  <ImpactBox>
                    <ul className="list-disc space-y-0.5 pl-4">
                      {c.impact.slice(0, 2).map((imp) => (
                        <li key={imp}>{imp}</li>
                      ))}
                    </ul>
                  </ImpactBox>
                  <p className="mt-3 text-xs font-semibold text-sky-300">Read case study →</p>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Recent work spotlight */}
        <section id="recent" className="scroll-mt-20">
          <SectionHeading
            kicker="Now"
            title="Recent work spotlight"
            lede="Graceful drains, gateway rate limiting, cost delivery, quoting, and automation — the current frontier."
          />
          <div className="grid gap-4 lg:grid-cols-2">
            {recentStudies.map((c) => (
              <Card key={c.slug}>
                <Badge tone="blue">{c.area}</Badge>
                <h3 className="mt-2 text-lg font-bold text-white">{c.title}</h3>
                <p className="mt-1.5 text-[13px] leading-5 text-slate-300">{c.problem}</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-[13px] leading-5 text-slate-200">
                  {c.work.map((w) => (
                    <li key={w}>{w}</li>
                  ))}
                </ul>
                <ImpactBox>
                  <ul className="list-disc space-y-0.5 pl-4">
                    {c.impact.map((imp) => (
                      <li key={imp}>{imp}</li>
                    ))}
                  </ul>
                </ImpactBox>
                <Link
                  href={`/projects/${c.slug}`}
                  className="mt-3 inline-block text-xs font-semibold text-sky-300"
                >
                  Full case study →
                </Link>
              </Card>
            ))}
          </div>

          <Card className="mt-4">
            <h3 className="font-semibold text-amber-100">AI &amp; automation</h3>
            <p className="mt-1 text-[13px] leading-5 text-slate-300">
              Turned operational knowledge into tooling rather than repeating manual toil.
            </p>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {automation.map((a) => (
                <div key={a.title} className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
                  <p className="text-sm font-semibold text-white">{a.title}</p>
                  <p className="mt-0.5 text-[13px] leading-5 text-slate-300">{a.summary}</p>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Cost */}
        <section id="cost" className="scroll-mt-20">
          <SectionHeading
            kicker="Efficiency"
            title="Cost savings delivered — ~$1.3M/yr"
            lede="Node-removal run-rate plus storage, retention, and SKU wins. Figures are annualized run-rate reductions at time of action, estimated on the internal node-cost model."
          />
          <Card>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-left text-[13px] leading-5">
                <thead>
                  <tr className="border-b border-white/10 text-xs uppercase tracking-wider text-slate-400">
                    <th className="py-2 pr-4 font-semibold">Lever</th>
                    <th className="py-2 pr-4 font-semibold">What shipped</th>
                    <th className="py-2 font-semibold">Saving</th>
                  </tr>
                </thead>
                <tbody>
                  {costLevers.map((c) => (
                    <tr key={c.lever} className="border-b border-white/5 last:border-0">
                      <td className="py-2.5 pr-4 font-semibold text-amber-100">{c.lever}</td>
                      <td className="py-2.5 pr-4 text-slate-300">{c.shipped}</td>
                      <td className="py-2.5 font-semibold text-emerald-300">{c.saving}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <Card>
              <p className="text-xl font-extrabold text-sky-300">~$793K</p>
              <p className="mt-1 text-sm font-semibold text-white">FY27 capacity owned</p>
              <p className="mt-0.5 text-xs leading-5 text-slate-300">
                Alerting workload isolation, dual-replica ingestion HA, geo-local migration.
              </p>
            </Card>
            <Card>
              <p className="text-xl font-extrabold text-sky-300">8 min → 30 s</p>
              <p className="mt-1 text-sm font-semibold text-white">Pre-deploy pipeline</p>
              <p className="mt-0.5 text-xs leading-5 text-slate-300">
                Pod-native identity with caching, on every forward and rollback.
              </p>
            </Card>
            <Card>
              <p className="text-xl font-extrabold text-sky-300">36 h → &lt;1 h</p>
              <p className="mt-1 text-sm font-semibold text-white">Cluster-wide rollout</p>
              <p className="mt-0.5 text-xs leading-5 text-slate-300">
                Configurable batch deploys with per-phase health checks.
              </p>
            </Card>
          </div>
        </section>

        {/* Incidents */}
        <section id="incidents" className="scroll-mt-20">
          <SectionHeading
            kicker="Ownership"
            title="Incidents & reviews led"
            lede="Anonymized themes — no internal incident IDs. Sourced from the incident system as owner, assignee, or retrospective owner."
          />
          <div className="grid gap-4 sm:grid-cols-3">
            <Card className="text-center">
              <p className="text-3xl font-extrabold text-amber-200">{incidentSummary.led}</p>
              <p className="mt-1 text-sm text-slate-300">{incidentSummary.ledLabel}</p>
            </Card>
            <Card className="text-center">
              <p className="text-3xl font-extrabold text-sky-300">{incidentSummary.owned}</p>
              <p className="mt-1 text-sm text-slate-300">{incidentSummary.ownedLabel}</p>
            </Card>
            <Card className="text-center">
              <p className="text-3xl font-extrabold text-emerald-300">{incidentSummary.approvals}</p>
              <p className="mt-1 text-sm text-slate-300">{incidentSummary.approvalsLabel}</p>
            </Card>
          </div>
          <Card className="mt-4">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-left text-[13px] leading-5">
                <thead>
                  <tr className="border-b border-white/10 text-xs uppercase tracking-wider text-slate-400">
                    <th className="py-2 pr-4 font-semibold">Theme</th>
                    <th className="py-2 pr-4 font-semibold">Sev</th>
                    <th className="py-2 pr-4 font-semibold">Status</th>
                    <th className="py-2 font-semibold">My role</th>
                  </tr>
                </thead>
                <tbody>
                  {incidents.map((i) => (
                    <tr key={i.theme} className="border-b border-white/5 last:border-0">
                      <td className="py-2.5 pr-4 text-slate-200">{i.theme}</td>
                      <td className="py-2.5 pr-4">
                        <Badge tone={i.severity === "P2" ? "amber" : "slate"}>{i.severity}</Badge>
                      </td>
                      <td className="py-2.5 pr-4 text-slate-300">{i.status}</td>
                      <td className="py-2.5 text-slate-300">{i.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </section>

        {/* Open source */}
        <section id="opensource" className="scroll-mt-20">
          <SectionHeading
            kicker="Community"
            title="Open source — Apache Druid & Operator"
            lede="Every upstream PR and issue below is public and clickable. Plus merged contributions in partner teams' repos."
          />
          <div className="space-y-4">
            {ossGroups.map((g) => (
              <Card key={g.repo}>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-semibold text-white">{g.repo}</h3>
                  <a
                    href={g.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-semibold text-sky-300 hover:text-sky-200"
                  >
                    View on GitHub →
                  </a>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <a
                      key={item.id}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-slate-200 transition hover:border-sky-300/50 hover:text-white"
                    >
                      <span className="font-mono font-semibold text-sky-200">{item.id}</span>
                      <span className="max-w-56 truncate sm:max-w-none">{item.title}</span>
                      <OssState state={item.state} />
                    </a>
                  ))}
                </div>
              </Card>
            ))}
            <Card>
              <h3 className="font-semibold text-white">External contributions — other teams&apos; repos</h3>
              <p className="mt-1 text-[13px] leading-5 text-slate-300">
                Merged PRs landed in repos owned by other teams (not my own service).
              </p>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {externalContribs.map((e) => (
                  <div key={e.area} className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
                    <p className="text-sm font-semibold text-amber-100">{e.area}</p>
                    <p className="mt-0.5 text-[13px] leading-5 text-slate-300">{e.items}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>

        {/* Productivity */}
        <section id="velocity" className="scroll-mt-20">
          <SectionHeading
            kicker="Momentum"
            title="Recent productivity"
            lede={productivity.note}
          />
          <Card>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-left text-[13px] leading-5">
                <thead>
                  <tr className="border-b border-white/10 text-xs uppercase tracking-wider text-slate-400">
                    <th className="py-2 pr-4 font-semibold">Metric</th>
                    <th className="py-2 pr-4 font-semibold">Baseline</th>
                    <th className="py-2 pr-4 font-semibold">Recent</th>
                    <th className="py-2 font-semibold">Ratio</th>
                  </tr>
                </thead>
                <tbody>
                  {productivity.rows.map((r) => (
                    <tr key={r.metric} className="border-b border-white/5 last:border-0">
                      <td className="py-2.5 pr-4 text-slate-200">{r.metric}</td>
                      <td className="py-2.5 pr-4 text-slate-400">{r.baseline}</td>
                      <td className="py-2.5 pr-4 font-semibold text-white">{r.recent}</td>
                      <td className="py-2.5 font-bold text-emerald-300">~{r.ratio}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-20">
          <SectionHeading
            kicker="Person"
            title="About"
            lede="Platform engineer working where distributed systems meet operating reality."
          />
          <div className="grid gap-4 lg:grid-cols-2">
            <Card>
              <h3 className="font-semibold text-white">What I do</h3>
              <ul className="mt-2 list-disc space-y-1.5 pl-5 text-[13px] leading-6 text-slate-300">
                <li>Run and evolve a multi-cluster Apache Druid fleet behind a real-time Events analytics platform.</li>
                <li>Drive major-version upgrades end to end: perf testing, memory validation, staged rollout, incident-free cutover.</li>
                <li>Extend the Druid Kubernetes operator: batch deploys, health checks, graceful drains, rollout guardrails.</li>
                <li>Protect the fleet: query laning, gateway rate limiting, alerting-as-code, capacity and cost modeling.</li>
                <li>Unblock partners and teams: ingestion routes, onboarding, cross-team escalations to done.</li>
              </ul>
            </Card>
            <Card>
              <h3 className="font-semibold text-white">Find me</h3>
              <ul className="mt-2 space-y-2 text-[13px] leading-6 text-slate-300">
                <li>
                  <a href="https://github.com/aruraghuwanshi" target="_blank" rel="noreferrer" className="font-semibold text-sky-300 hover:text-sky-200">
                    github.com/aruraghuwanshi →
                  </a>{" "}
                  — personal projects, forks, and this site&apos;s repo
                </li>
                <li>
                  <a href="https://github.com/apache/druid/pulls?q=author%3Aaruraghuwanshi" target="_blank" rel="noreferrer" className="font-semibold text-sky-300 hover:text-sky-200">
                    Upstream Apache Druid work →
                  </a>{" "}
                  — PRs and issues under @aruraghuwanshi
                </li>
                <li>
                  <span className="text-slate-400">
                    Recruiters and hiring managers: every project card links to a deep-dive page you can share with a hiring panel.
                  </span>
                </li>
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge tone="green">Apache Druid</Badge>
                <Badge tone="green">Kubernetes operators</Badge>
                <Badge tone="blue">Envoy / gateways</Badge>
                <Badge tone="blue">Streaming ingestion</Badge>
                <Badge tone="purple">Cost engineering</Badge>
                <Badge tone="purple">Incident leadership</Badge>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs leading-5 text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Aru Raghuwanshi — Engineering Impact. Public portfolio; internal IDs, links, and
            colleague details intentionally omitted.
          </p>
          <p>
            <a href="https://github.com/aruraghuwanshi" target="_blank" rel="noreferrer" className="font-semibold text-sky-300">
              GitHub
            </a>{" "}
            · Built with Next.js, statically exported to GitHub Pages
          </p>
        </div>
      </footer>
    </div>
  );
}
