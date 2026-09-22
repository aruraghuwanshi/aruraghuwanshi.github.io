"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { initiatives } from "@/data/impact";
import { Badge, Card } from "./ui";

const allTags = Array.from(new Set(initiatives.flatMap((i) => i.tags))).sort();

export function WorkGrid() {
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return initiatives.filter((i) => {
      const matchesQuery =
        !q ||
        i.title.toLowerCase().includes(q) ||
        i.summary.toLowerCase().includes(q);
      const matchesTag = !tag || i.tags.includes(tag);
      return matchesQuery && matchesTag;
    });
  }, [query, tag]);

  return (
    <div>
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search initiatives… (e.g. cost, ingestion, upgrade)"
          className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-slate-400 focus:border-sky-400 focus:outline-none sm:max-w-sm"
          aria-label="Search initiatives"
        />
        <div className="flex flex-wrap gap-1.5">
          <button
            onClick={() => setTag(null)}
            className={`rounded-full border px-3 py-1 text-xs font-medium transition ${
              tag === null
                ? "border-sky-300 bg-sky-400/20 text-sky-100"
                : "border-white/15 bg-white/5 text-slate-300 hover:border-white/30"
            }`}
          >
            All
          </button>
          {allTags.map((t) => (
            <button
              key={t}
              onClick={() => setTag(tag === t ? null : t)}
              className={`rounded-full border px-3 py-1 text-xs font-medium transition ${
                tag === t
                  ? "border-sky-300 bg-sky-400/20 text-sky-100"
                  : "border-white/15 bg-white/5 text-slate-300 hover:border-white/30"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <Card className="text-center">
          <p className="text-sm text-slate-300">
            No initiatives match “{query}”. Try a different keyword or clear the tag filter.
          </p>
          <button
            onClick={() => {
              setQuery("");
              setTag(null);
            }}
            className="mt-3 rounded-full border border-sky-300/40 bg-sky-400/15 px-4 py-1.5 text-xs font-semibold text-sky-100 hover:bg-sky-400/25"
          >
            Clear filters
          </button>
        </Card>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((i) => (
            <Card key={i.title}>
              <h3 className="font-semibold text-amber-100">{i.title}</h3>
              <p className="mt-1.5 text-[13px] leading-5 text-slate-300">{i.summary}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {i.tags.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      )}
      <p className="mt-3 text-xs text-slate-400">
        Showing {filtered.length} of {initiatives.length} initiatives
      </p>
    </div>
  );
}

export function SiteNav({ sections }: { sections: { id: string; label: string }[] }) {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#060b24]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="#top" className="text-sm font-bold tracking-tight text-white">
          Aru Raghuwanshi <span className="text-sky-300">· Impact</span>
        </Link>
        <button
          className="rounded-lg border border-white/15 px-3 py-1.5 text-xs text-slate-200 sm:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          {open ? "Close" : "Menu"}
        </button>
        <div className="hidden items-center gap-1 sm:flex">
          {sections.map((s) => (
            <Link
              key={s.id}
              href={`#${s.id}`}
              className="rounded-full px-3 py-1.5 text-xs font-medium text-slate-300 hover:bg-white/10 hover:text-white"
            >
              {s.label}
            </Link>
          ))}
        </div>
      </div>
      {open ? (
        <div className="border-t border-white/10 px-4 py-2 sm:hidden">
          {sections.map((s) => (
            <Link
              key={s.id}
              href={`#${s.id}`}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-2 py-2 text-sm text-slate-200 hover:bg-white/10"
            >
              {s.label}
            </Link>
          ))}
        </div>
      ) : null}
    </nav>
  );
}
