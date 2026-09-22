import type { ReactNode } from "react";

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-gradient-to-b from-[#1b2a5e]/90 to-[#101a3f]/90 p-5 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur ${className}`}
    >
      {children}
    </div>
  );
}

export function Badge({
  children,
  tone = "slate",
}: {
  children: ReactNode;
  tone?: "slate" | "green" | "blue" | "amber" | "purple";
}) {
  const tones: Record<string, string> = {
    slate: "bg-white/10 text-slate-200 border-white/15",
    green: "bg-emerald-400/15 text-emerald-300 border-emerald-300/30",
    blue: "bg-sky-400/15 text-sky-300 border-sky-300/30",
    amber: "bg-amber-400/15 text-amber-300 border-amber-300/30",
    purple: "bg-violet-400/15 text-violet-300 border-violet-300/30",
  };
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  kicker,
  title,
  lede,
}: {
  kicker: string;
  title: string;
  lede?: string;
}) {
  return (
    <div className="mb-6">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">{kicker}</p>
      <h2 className="mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl">{title}</h2>
      {lede ? <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-300">{lede}</p> : null}
    </div>
  );
}

export function ImpactBox({ children }: { children: ReactNode }) {
  return (
    <div className="mt-4 rounded-xl border border-emerald-300/25 bg-gradient-to-b from-lime-400/25 to-emerald-500/20 p-4">
      <p className="text-xs font-bold uppercase tracking-widest text-lime-200">Impact</p>
      <div className="mt-1 space-y-1 text-sm leading-6 text-emerald-50">{children}</div>
    </div>
  );
}
