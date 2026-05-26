import { Download } from "lucide-react";
import GlassCard from "./GlassCard";
import SectionHeading from "./SectionHeading";
import { artifacts } from "../data/portfolioData";

export default function Artifacts() {
  return (
    <section className="section-shell">
      <SectionHeading
        eyebrow="Portfolio Artifacts"
        title="Evidence samples and project files"
        description="Downloadable placeholders for resume, GRC portfolio assets, trackers, and workbook samples."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {artifacts.map((artifact, index) => {
          const Icon = artifact.icon;
          return (
            <GlassCard key={artifact.title} delay={index * 0.04} className="p-5">
              <div className="flex items-start justify-between gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-cyan-300/22 bg-cyan-300/10 text-cyan-200">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="chip">{artifact.fileType}</span>
              </div>
              <h3 className="display-3 mt-5">{artifact.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{artifact.description}</p>
              {artifact.isPlaceholder ? (
                <span className="mt-5 inline-flex rounded-full border border-amber-300/24 bg-amber-300/10 px-3 py-1.5 font-mono text-xs text-amber-100">
                  File coming soon
                </span>
              ) : null}
              <a className="btn-ghost mt-5 w-full" href={artifact.href} aria-label={`Download ${artifact.title}`}>
                <Download className="h-4 w-4" aria-hidden="true" />
                Download
              </a>
            </GlassCard>
          );
        })}
      </div>
      <p className="mt-6 rounded-2xl border border-emerald-300/24 bg-emerald-300/10 px-4 py-3 text-sm text-emerald-100">
        Selected artifacts use simulated data for portfolio demonstration purposes.
      </p>
    </section>
  );
}
