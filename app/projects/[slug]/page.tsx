import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies } from "@/data/impact";
import { Badge, Card, ImpactBox } from "@/components/ui";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = caseStudies.find((c) => c.slug === slug);
  if (!study) notFound();

  const idx = caseStudies.findIndex((c) => c.slug === slug);
  const prev = idx > 0 ? caseStudies[idx - 1] : null;
  const next = idx < caseStudies.length - 1 ? caseStudies[idx + 1] : null;

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <Link href="/" className="text-xs font-semibold text-sky-300 hover:text-sky-200">
        ← Back to all work
      </Link>
      <Card className="mt-4 p-6 sm:p-8">
        <Badge tone="purple">{study.area}</Badge>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-white">{study.title}</h1>

        <h2 className="mt-6 text-sm font-bold uppercase tracking-widest text-sky-300">
          Problem &amp; what it does
        </h2>
        <p className="mt-2 text-sm leading-7 text-slate-200">{study.problem}</p>

        <h2 className="mt-6 text-sm font-bold uppercase tracking-widest text-sky-300">My work</h2>
        <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-7 text-slate-200">
          {study.work.map((w) => (
            <li key={w}>{w}</li>
          ))}
        </ul>

        <ImpactBox>
          <ul className="list-disc space-y-1 pl-4">
            {study.impact.map((imp) => (
              <li key={imp}>{imp}</li>
            ))}
          </ul>
        </ImpactBox>

        {study.links && study.links.length > 0 ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {study.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-sky-200 hover:border-sky-300/50"
              >
                {l.label} →
              </a>
            ))}
          </div>
        ) : null}
      </Card>

      <div className="mt-6 flex items-center justify-between gap-3">
        {prev ? (
          <Link
            href={`/projects/${prev.slug}`}
            className="rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-xs font-semibold text-slate-200 hover:border-sky-300/40 hover:text-white"
          >
            ← {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/projects/${next.slug}`}
            className="rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-xs font-semibold text-slate-200 hover:border-sky-300/40 hover:text-white"
          >
            {next.title} →
          </Link>
        ) : (
          <span />
        )}
      </div>
    </div>
  );
}
