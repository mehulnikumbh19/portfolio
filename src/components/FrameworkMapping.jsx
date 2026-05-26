import { Layers3 } from "lucide-react";
import GlassCard from "./GlassCard";
import SectionHeading from "./SectionHeading";
import { frameworks } from "../data/portfolioData";

export default function FrameworkMapping() {
  return (
    <section className="section-shell">
      <SectionHeading
        eyebrow="Framework Mapping"
        title="Frameworks connected to practical GRC work"
        description="Each framework is mapped to how it supports control testing, evidence review, and risk communication."
      />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {frameworks.map((framework, index) => (
          <GlassCard key={framework.name} delay={index * 0.04} className="p-5">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl border border-purple-300/22 bg-purple-400/10 text-purple-200">
                <Layers3 className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-mono text-xs text-slate-500">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="display-3">{framework.name}</h3>
              </div>
            </div>
            <div className="mt-5 space-y-4 text-sm leading-7 text-slate-300">
              <p>
                <span className="font-semibold text-cyan-100">Used for: </span>
                {framework.use}
              </p>
              <p>
                <span className="font-semibold text-emerald-100">Practical work: </span>
                {framework.work}
              </p>
              <p className="rounded-xl border border-white/10 bg-black/[0.24] px-3 py-2 font-mono text-xs text-slate-300">
                {framework.examples}
              </p>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
