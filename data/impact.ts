export type Stat = {
  value: string;
  label: string;
  detail: string;
};

export type Initiative = {
  title: string;
  summary: string;
  tags: string[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  area: string;
  problem: string;
  work: string[];
  impact: string[];
  links?: { label: string; href: string }[];
};

export type Incident = {
  theme: string;
  severity: string;
  status: string;
  role: string;
};

export type CostLever = {
  lever: string;
  shipped: string;
  saving: string;
};

export type OssItem = {
  id: string;
  title: string;
  state: "merged" | "open" | "closed";
  href: string;
};

export const hero = {
  eyebrow: "Monitoring Cloud · Events · Druid & Events Platform",
  name: "Aru Raghuwanshi",
  title: "Engineering Impact",
  scope:
    "I work on a large-scale Events platform backed by Apache Druid — the engine (version upgrades, Kubernetes operator, query gateway), the fleet (capacity, cost-to-serve, ingestion, alerting), and operations (on-call, incident reviews, partner onboarding). That spans graceful MiddleManager drains, gateway rate limiting, node-removal cost programs, deep-storage optimization, rollout lifecycle guardrails, and compute-family migrations.",
};

export const stats: Stat[] = [
  {
    value: "~3x",
    label: "Query-latency improvement on Druid 28",
    detail: "Fleet-wide OLAP queries after the 25 → 28 upgrade",
  },
  {
    value: "~$1.3M/yr",
    label: "Run-rate cost reduction delivered",
    detail: "Node removals, plus storage, retention and SKU wins",
  },
  {
    value: "25 → 28 → 32",
    label: "Druid major-version upgrades driven",
    detail: "Performance, features, and high-cardinality unblock",
  },
  {
    value: "Zero-downtime",
    label: "Rolling ingestion-tier restarts",
    detail: "Graceful drain for batch + streaming task tiers",
  },
  {
    value: "6 PRBs",
    label: "P2/P3 incident reviews led",
    detail: "4 as owner, plus on-call and release ownership",
  },
  {
    value: "Upstream",
    label: "Apache Druid & Druid Operator contributor",
    detail: "Merged PRs and issues filed upstream",
  },
];

export const initiatives: Initiative[] = [
  {
    title: "Metadata limits",
    summary:
      "Uncovered safe metadata limits for Coordinators and Historicals with efficient dynamic config — preventing GC failures on segment metadata.",
    tags: ["reliability", "druid-internals"],
  },
  {
    title: "Historical tiering + AZ awareness",
    summary:
      "Split Historicals into AZ-separated tiers with per-tier replication and a shared disruption budget — AZ-fault tolerant and unblocking batch deploys.",
    tags: ["reliability", "availability"],
  },
  {
    title: "On-call + run-the-business",
    summary:
      "Sustained on-call including reducing no-op alerts and shipping bug fixes that cut noise and toil.",
    tags: ["operations"],
  },
  {
    title: "Lakehouse ingestion route",
    summary:
      "Built a DBT → Druid ingestion route via the Iceberg extension, unblocking partner analytics and removing manual data-watching in lower stages.",
    tags: ["ingestion", "partner"],
  },
  {
    title: "Druid 28",
    summary:
      "Performance-tested and released Druid 28 across pre-prod and prod — ~3x query-latency improvement, far fewer inter-pod requests, lakehouse + direct object-store ingestion.",
    tags: ["upgrade", "performance"],
  },
  {
    title: "Operator upgrade",
    summary:
      "Upgraded the operator off deprecated policies that would otherwise have blocked releases — done proactively, ahead of the deadline.",
    tags: ["kubernetes", "operator"],
  },
  {
    title: "Monitoring-agent test bed",
    summary:
      "Partnered across teams to stand up an end-to-end test platform for the customer-side monitoring agent (collect and ship events, metrics, and traces).",
    tags: ["testing", "partner"],
  },
  {
    title: "Partner onboarding",
    summary:
      "Converted partner schemas and dashboard queries to Druid SQL and onboarded their use-cases onto the cluster.",
    tags: ["partner", "sql"],
  },
  {
    title: "Dashboard improvements",
    summary:
      "Added ingestion panels enabling per-topic debugging of ingestion lag.",
    tags: ["observability"],
  },
  {
    title: "Managed releases",
    summary:
      "Ran the sizing spike for onboarding Events onto the managed-release platform and kicked off the initial onboarding.",
    tags: ["platform", "releases"],
  },
  {
    title: "Alert on Events",
    summary:
      "Catalogued every query hitting prod, categorized by p95, and proposed alternative query shapes to dent overall query load for alerting.",
    tags: ["alerting", "performance"],
  },
  {
    title: "Cost to serve",
    summary:
      "Drove scale-down and retention-update initiatives plus precise funnel-based cost numbers — double-digit percentage storage savings.",
    tags: ["cost"],
  },
  {
    title: "POC environments for partners",
    summary:
      "Supported a partner team's changing requirements in a dedicated test environment for their Druid proof-of-concept.",
    tags: ["partner", "testing"],
  },
  {
    title: "Hackathons",
    summary:
      "Prototyped query laning (traffic management + tiering for a cost-efficient cold tier) and chat-ops dashboards.",
    tags: ["hackathon", "performance"],
  },
  {
    title: "Query laning + prioritization",
    summary:
      "Built broker query lanes plus custom datasource-based prioritization exempting high-priority datasources — from POC to prod.",
    tags: ["performance", "reliability"],
  },
  {
    title: "Performance configs",
    summary:
      "Defined key performance metrics, refreshed the deep-dive dashboard, and built query/event-generator profiles giving repeatable knobs for perf testing.",
    tags: ["performance", "testing"],
  },
  {
    title: "Storage lifecycle",
    summary:
      "Stale volume reclaim, deep-storage drop vs peak, persistent scale-down — tracked separately from the node-removal program.",
    tags: ["cost", "storage"],
  },
  {
    title: "Lifecycle waiter",
    summary:
      "Operator pins rollout status to a single pod-template hash so a leftover replica set cannot look healthy — staged rollout guardrail.",
    tags: ["operator", "reliability"],
  },
  {
    title: "Customer quoting model",
    summary:
      "Internal quoting tool over funnel + streaming + the Druid node model. Measured throughput uplifts on partner destinations.",
    tags: ["cost", "partner"],
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "druid-28",
    title: "Druid 28",
    area: "Major version upgrade",
    problem:
      "Capture Druid 28's query-latency and capability gains over Druid 25. Druid is the backend powering real-time analytics and fast OLAP queries for the Events platform.",
    work: [
      "Compared and tested all benefits of Druid 28; performance-tested querying and ingestion across all relevant domains.",
      "Released to all pre-prod and prod environments, repeating performance and memory tests for reliability.",
    ],
    impact: [
      "~3x query-latency improvement.",
      "Far fewer inter-pod requests (less noise).",
      "Enabled lakehouse-based ingestion and direct object-store consumption with better analytics UX.",
    ],
    links: [
      { label: "apache/druid #15823", href: "https://github.com/apache/druid/pull/15823" },
    ],
  },
  {
    slug: "lakehouse-ingestion",
    title: "Lakehouse → Druid ingestion",
    area: "Ingestion",
    problem:
      "Establish a DBT → Druid ingestion route using Druid 28's Iceberg extension, and enable partners to ingest their lakehouse data for real-time querying.",
    work: [
      "Proved the older version's object-store paths could not serve Iceberg data and that backporting needed heavy core changes — upgrade was the better path.",
      "Proved the Iceberg extension ingests this data well; deployed across pre-prod and canary.",
    ],
    impact: [
      "Lakehouse customers can onboard for real-time querying and dashboarding.",
      "Partners unblocked to land data on the cluster for analytics and alerting.",
    ],
  },
  {
    slug: "druid-internals",
    title: "Druid internals — features & limits",
    area: "Reliability",
    problem:
      "Cluster reliability plus feature utilization: uncover metadata limits for each pod type and fully use Druid's capabilities such as tiering.",
    work: [
      "Concluded value ranges for Druid dynamic configs through in-depth POCs; established metadata limits for Coordinators and Historicals.",
      "POC to speed up Historical startup; POC plus implemented maintenance mode for Historical scale-down; POC for tiering.",
    ],
    impact: [
      "Drove a Historical metadata-threshold alert that warns before Historical GC fails on segment metadata.",
      "Tooling to speed Historical startup before key deploys; maintenance mode scales down many Historicals without hurting availability; dynamic-config control over segment distribution.",
    ],
  },
  {
    slug: "query-laning",
    title: "Query laning + custom prioritization",
    area: "Service protection",
    problem:
      "A service-protection measure that limits low-priority and inefficient queries from consuming cluster resources: broker lanes (reserved capacity for high-priority, an upper bound for low-priority) plus custom prioritization exempting key datasources from lookback-based deprioritization.",
    work: [
      "POC plus pre-prod testing for query laning, then to prod.",
      "POC plus extension of the open-source Druid prioritization class, then pre-prod testing to prod.",
    ],
    impact: [
      "Avoids outages from low-priority queries starving Historical resources; capacity reservation protects the cluster; important customers stay prioritized regardless of lookback.",
    ],
    links: [
      { label: "apache/druid #17416", href: "https://github.com/apache/druid/issues/17416" },
    ],
  },
  {
    slug: "tiering-az-awareness",
    title: "Historical tiering + AZ awareness",
    area: "Availability",
    problem:
      "Become AZ-aware for service protection and to open up faster deployments: distribute Historicals into AZ-separated tiers, replicate within each tier, and share a disruption budget so patching cannot take down more than one Historical across both tiers.",
    work: [
      "Created the required PRs on the operator and chart repos; devised and tested a migration plan across all pre-prod.",
    ],
    impact: [
      "Now AZ-aware and AZ-fault tolerant; unblocked mechanisms that support batch deployments.",
    ],
    links: [
      { label: "apache/druid #17120", href: "https://github.com/apache/druid/issues/17120" },
    ],
  },
  {
    slug: "nodepool-migration",
    title: "Nodepool tests + migration strategy",
    area: "Performance & cost",
    problem:
      "Deep-dive performance comparison of candidate nodepools and a switch from the default to a custom nodepool — reducing cost-to-serve for the same node count and gaining network bandwidth to push perf bottlenecks further.",
    work: [
      "Drove nodepool requests with the platform team; performance-tested across queries-per-minute, datasource types, and configs on different nodepools.",
      "Developed and tested a migration strategy maintaining full query capacity and segment availability.",
    ],
    impact: [
      "Completed compute-family pin already reflected in today's run-rate; leftover monitoring-pool assignment still unassigned.",
    ],
  },
  {
    slug: "operator-fit-tests",
    title: "Operator FIT tests",
    area: "Release safety",
    problem:
      "Introduce functional integration tests for the operator so each new operator deployment is verified beyond plain Kubernetes health checks, giving faster and deeper failure insight.",
    work: ["Wrote, tested, and rolled the FIT tests out to production."],
    impact: [
      "FIT tests now active in prod, giving real-time deployment-health insight on every deploy.",
    ],
  },
  {
    slug: "batch-deployment",
    title: "Historical batch deployment",
    area: "Deploy velocity",
    problem:
      "Speed up Druid deployments (the biggest single rollout took well over a day cluster-wide) by making batch size configurable down to under an hour, plus Druid-specific health checks throughout the rollout that stop it on any anomaly, enabling fast rollback.",
    work: [
      "Wrote the operator change enabling configurable batch rollout plus per-phase Druid health checks; tested in pre-prod and promoted.",
    ],
    impact: [
      "In production — health checks plus batch deploys are active: sharply lower forward-deploy times, faster rollbacks, early roll-forward stoppage.",
    ],
  },
  {
    slug: "druid-32",
    title: "Druid 32 upgrade",
    area: "Major version upgrade",
    problem:
      "Upgrade to Druid 32, unblocking the high-cardinality metrics effort and bringing window functions, better metrics, and improved cluster stability — closer to upstream's bleeding edge.",
    work: [
      "Ported changes and resolved merge conflicts while retaining custom additions; regression-tested; helped with perf testing and other teams' changes; kept pre-prod clusters healthy while driving the version upstream.",
    ],
    impact: [
      "High-cardinality efforts unblocked; once in prod: better cluster health, fewer incidents, happier customers.",
    ],
  },
  {
    slug: "zookeeper-remediation",
    title: "Zookeeper upgrade — incident remediation",
    area: "Incident response",
    problem:
      "An expired metrics-exporter image caused Zookeeper pods to fail respawns in all environments, risking total cluster-stability loss.",
    work: [
      "Found a working solution, delivered the fix, and deployed it while monitoring critical metrics and logs across all clusters — disabling the broken exporter and scraping the default metrics port via the standard sidecar.",
    ],
    impact: [
      "Averted a potentially long cluster-wide outage; upgraded images deployed across all clusters with correct certificates.",
    ],
  },
  {
    slug: "semantic-versioning",
    title: "Semantic versioning & guardrails",
    area: "Release safety",
    problem:
      "Ensure no lower artifact version can deploy to prod or staging unless explicitly tagged as a rollback — for all Events services. Introduces a platform-compatible way to track build numbers and forward-deploy versions.",
    work: [
      "Wrote the needed changes for all services; tested across pre-prod and enabled for all prod releases.",
    ],
    impact: [
      "Stops human error in artifact selection during forward releases — incident prevention.",
    ],
  },
  {
    slug: "pod-native-identity",
    title: "Pod-native identity for certs",
    area: "Platform",
    problem:
      "An operator deploy hit a race in the pre-deploy stage where the sidecar fails to inject certificates in rare cases. The path forward was pod-native identity, which automates credential insertion and removes workload-identity tooling from the picture.",
    work: [
      "Enabled and verified pod-native identity for all Events services in pre-prod.",
    ],
    impact: [
      "Incident prevention plus the recommended cert path; with identity caching, pre-deploy drops from ~8 minutes to ~30 seconds — saving ~7 minutes off every forward and rollback pipeline.",
    ],
  },
  {
    slug: "lifecycle-waiter",
    title: "Wait-for-lifecycle rollout guard",
    area: "Release safety",
    problem:
      "Stops false-successful rolls on pre-prod and stage fleets: the operator pins rollout status to a single pod-template hash so a leftover replica set cannot look healthy.",
    work: [
      "Implemented the waiter on lower environments; prod fleet rollout pending at time of writing.",
    ],
    impact: [
      "Eliminates a class of silent bad deploys where stale pods masquerade as a successful rollout.",
    ],
  },
  {
    slug: "cost-to-serve",
    title: "Cost-to-serve program",
    area: "Cost",
    problem:
      "Cost-reduction drive across the monitoring platform: right-size the Historical tier, decommission unused capacity, and clean up stale datasources.",
    work: [
      "Safely scaled down Historicals in all prod clusters without impacting availability; scaled down and decommissioned unused pre-prod clusters; cleaned up stale datasources.",
    ],
    impact: [
      "Saved on the order of tens of thousands per month in the first wave; node-removal program totals ~$1.3M/yr run-rate (see cost breakdown).",
    ],
  },
  {
    slug: "middle-manager-drain",
    title: "MiddleManager graceful drain",
    area: "Zero-downtime ingestion",
    problem:
      "Extend batch deployment semantics to the ingestion tier: MiddleManager restarts were dropping in-flight streaming indexing tasks.",
    work: [
      "Built a full graceful drain into the operator so MiddleManager restarts no longer drop in-flight tasks: disable the worker via the overlord, discover tasks, infer task-group IDs, trigger early handoff, poll to full drain, then restart.",
      "Hardened with race-condition fixes, a drain timeout, SQL-based task discovery, and end-to-end plus unit tests. Validated 9 tasks across 3 supervisors drained in ~3 minutes with no drops.",
    ],
    impact: [
      "Zero-downtime rolling restarts of the ingestion tier; upstreamed to apache/druid-operator.",
    ],
    links: [
      { label: "apache/druid-operator #18", href: "https://github.com/apache/druid-operator/pull/18" },
    ],
  },
  {
    slug: "gateway-rate-limiting",
    title: "Global rate limiting for the gateway",
    area: "Service protection",
    problem:
      "Design and ship per-user / per-token / per-service query rate limiting at the Envoy layer with no app changes, covering every client type via one CRD with mutual-exclusivity rules and Lua filters for identity headers — alert-evaluator traffic exempted.",
    work: [
      "Rolled out behind flags with shadow-then-enforce validation and post-deploy verification on gateway targets.",
    ],
    impact: [
      "Fleet-wide query-shape protection: request-count based guardrail (limitation: request count, not SQL cost).",
    ],
  },
  {
    slug: "alerting-as-code",
    title: "Alerting as code",
    area: "Reliability",
    problem:
      "Events' hand-built alerts lived outside version control with false positives and coverage gaps.",
    work: [
      "Migrated alerts to Terraform and used the move to cut false positives (query-availability, ingestion-lag) and close coverage gaps (pre-prod segment availability, supervisor health, utilization, data-lag, per-cluster ingest spikes).",
      "Fixed notification templating across all alerts. Pages now fire on outcomes (lag / SLA), not only infrastructure gauges.",
    ],
    impact: [
      "Reviewable, repeatable alerting with fewer noisy pages and better pre-prod coverage.",
    ],
  },
  {
    slug: "capacity-fy27",
    title: "Capacity & workload isolation",
    area: "Planning",
    problem:
      "Own FY27 budget requests, each justified by alerting availability and backed by a Druid node cost model.",
    work: [
      "Owned three budget requests: broker and Historical tiering for alerting workload isolation, dual-replica ingestion for HA, and geo-local migration for partner datasources.",
      "Published a Historical right-sizing analysis identifying a further seven-figure annual opportunity.",
    ],
    impact: ["~$793K owned across the three requests."],
  },
];

export const incidents: Incident[] = [
  {
    theme: "Streaming consumer lag after a savepoint upgrade",
    severity: "P2",
    status: "Analysis complete",
    role: "On-call · retro owner",
  },
  {
    theme: "Ingestion latency after a data-manager release",
    severity: "P2",
    status: "Analysis complete",
    role: "Owner",
  },
  {
    theme: "Streaming job failing — connectivity loss",
    severity: "P2",
    status: "Analysis complete",
    role: "Assignee",
  },
  {
    theme: "Zookeeper update — cascade orphan remediation",
    severity: "P2",
    status: "Closed",
    role: "Owner",
  },
  {
    theme: "Data loss on a specific event type / topic",
    severity: "P3",
    status: "Closed",
    role: "Owner · retro owner",
  },
];

export const incidentSummary = {
  led: "6",
  ledLabel: "P2/P3 incident reviews led across the platform",
  owned: "4",
  ownedLabel: "owned directly (owner of record)",
  approvals: "580",
  approvalsLabel: "deployment change-cases owned as release approver",
};

export const costLevers: CostLever[] = [
  {
    lever: "Historical right-sizing + decommissions",
    shipped: "~170 nodes removed, including full unused clusters",
    saving: "~$1.3M/yr run-rate",
  },
  {
    lever: "Stale volume reclaim",
    shipped: "Hundreds of TiB executed via delete-volume operations (not operator GC)",
    saving: "~$12.3k/mo executed (~$148k/yr)",
  },
  {
    lever: "Deep-storage optimization",
    shipped: "Daily object-store cost cut by more than half from July peak via retention and lifecycle knobs",
    saving: "~$41k/mo vs peak (~$491k/yr)",
  },
  {
    lever: "Persist + alerting replica trims",
    shipped: "Replica and retention trims where Helm state did not hold the cut",
    saving: "~$115k/yr modeled",
  },
  {
    lever: "Compute-family SKU pin",
    shipped: "Pinned remaining prod fleets to the efficient SKU vs the prior origin",
    saving: "~$20k/mo in run-rate",
  },
  {
    lever: "Log-volume trim",
    shipped: "Allowlist trim of Vert.x-style metrics; restored query/byte-count signals",
    saving: "Count reduction, not license-master dollars",
  },
];

export const ossGroups: { repo: string; href: string; items: OssItem[] }[] = [
  {
    repo: "apache/druid — pull requests",
    href: "https://github.com/apache/druid/pulls?q=author%3Aaruraghuwanshi",
    items: [
      { id: "#19114", title: "Supervisor task-count health metric", state: "merged", href: "https://github.com/apache/druid/pull/19114" },
      { id: "#19090", title: "Docs: Supervisor Stats API structure", state: "merged", href: "https://github.com/apache/druid/pull/19090" },
      { id: "#18996", title: "Shrink dependency version-enforcement set", state: "merged", href: "https://github.com/apache/druid/pull/18996" },
      { id: "#16192", title: "Null handling in Kafka header reader", state: "merged", href: "https://github.com/apache/druid/pull/16192" },
      { id: "#15823", title: "Input-sources S3 docs fix", state: "merged", href: "https://github.com/apache/druid/pull/15823" },
      { id: "#19002", title: "Shrink dependencies", state: "open", href: "https://github.com/apache/druid/pull/19002" },
      { id: "#17416", title: "Datasource exemption from deprioritization", state: "closed", href: "https://github.com/apache/druid/pull/17416" },
      { id: "#16317", title: "Fix pom.xml version", state: "closed", href: "https://github.com/apache/druid/pull/16317" },
    ],
  },
  {
    repo: "apache/druid — issues filed",
    href: "https://github.com/apache/druid/issues?q=author%3Aaruraghuwanshi",
    items: [
      { id: "#17120", title: "AZ fault-tolerance documentation proposal", state: "open", href: "https://github.com/apache/druid/issues/17120" },
      { id: "#19038", title: "Feature: dynamic rate-based sampling for streaming ingestion", state: "open", href: "https://github.com/apache/druid/issues/19038" },
      { id: "#16433", title: "Segment load queue refresh per-Historical", state: "open", href: "https://github.com/apache/druid/issues/16433" },
      { id: "#17730", title: "Stale coordinator-leader metrics", state: "open", href: "https://github.com/apache/druid/issues/17730" },
      { id: "#16492", title: "Misleading max-query-timeout description", state: "open", href: "https://github.com/apache/druid/issues/16492" },
    ],
  },
  {
    repo: "apache/druid-operator — pull requests",
    href: "https://github.com/apache/druid-operator/pulls?q=author%3Aaruraghuwanshi",
    items: [
      { id: "#24", title: "Configurable revisionHistoryLimit", state: "open", href: "https://github.com/apache/druid-operator/pull/24" },
      { id: "#18", title: "MiddleManager drain rollout strategy", state: "open", href: "https://github.com/apache/druid-operator/pull/18" },
      { id: "#15", title: "Deterministic rollout order per node type", state: "closed", href: "https://github.com/apache/druid-operator/pull/15" },
    ],
  },
];

export const externalContribs = [
  {
    area: "AI agent platform (another team's repo)",
    items: "Druid tooling (datasource catalog + query safety), structured investigation methodology, iterative discovery + transforms, hardened event-query guardrails — all merged.",
  },
  {
    area: "Metrics platform (another team's repo)",
    items: "Alert-query identifier fix to use the canonical wire-name — merged.",
  },
];

export const automation = [
  {
    title: "Investigation agent",
    summary: "Turned operational knowledge into RCA / investigation tooling with an evidence-ledger gate.",
  },
  {
    title: "On-call autopilot",
    summary: "Paging-incident investigation assistance for the on-call.",
  },
  {
    title: "Query-safety + IaC guardrails",
    summary: "Druid query-safety checks plus infrastructure-as-code-safe alerting guardrails.",
  },
  {
    title: "Triage agent",
    summary: "Code-generation triage support for incoming issues.",
  },
];

export const productivity = {
  heading: "Recent productivity — trailing-year baseline vs recent window",
  note: "PR and commit throughput from authored git history (exact emails, no-merge commits); sprint velocity from closed work items. Ratios are window-sensitive — two standout sprints lift the recent window.",
  rows: [
    { metric: "PR creation throughput — merged PRs / month", baseline: "11.8", recent: "33.0", ratio: "2.8x" },
    { metric: "Commits / month", baseline: "84.6", recent: "245", ratio: "2.9x" },
    { metric: "Story points closed / sprint", baseline: "8.7", recent: "17.0", ratio: "2.0x" },
    { metric: "Work items closed / sprint", baseline: "5.1", recent: "9.0", ratio: "1.8x" },
  ],
};

export const navSections = [
  { id: "work", label: "Summary of work" },
  { id: "projects", label: "Major projects" },
  { id: "recent", label: "Recent work" },
  { id: "cost", label: "Cost savings" },
  { id: "incidents", label: "Incidents" },
  { id: "opensource", label: "Open source" },
  { id: "about", label: "About" },
];
