import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aru Raghuwanshi — Engineering Impact | Druid & Events Platform",
  description:
    "Portfolio of Aru Raghuwanshi: large-scale Apache Druid platform engineering — upgrades, operator, gateway, cost-to-serve, zero-downtime ingestion, incident leadership, and upstream open-source contributions.",
  openGraph: {
    title: "Aru Raghuwanshi — Engineering Impact",
    description:
      "~3x query latency · ~$1.3M/yr savings · Druid 25→28→32 · zero-downtime deploys · upstream Apache Druid contributor.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
