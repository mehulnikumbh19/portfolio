import { BookOpenCheck } from "lucide-react";
import GlassCard from "./GlassCard";
import SectionHeading from "./SectionHeading";
import { learningPriorities } from "../data/portfolioData";

export default function Learning() {
  return (
    <section className="section-shell">
      <SectionHeading eyebrow="Learning Priorities" title="Current focus areas" />
      <GlassCard className="p-5 sm:p-6">
        <div className="grid gap-3 md:grid-cols-2">
          {learningPriorities.map((priority, index) => (
            <div key={priority} className="flex gap-3 rounded-xl border border-white/10 bg-black/[0.24] p-4 text-sm leading-7 text-slate-300">
              <BookOpenCheck className="mt-1 h-4 w-4 shrink-0 text-emerald-300" aria-hidden="true" />
              <span>
                <span className="mr-2 font-mono text-xs text-slate-500">{String(index + 1).padStart(2, "0")}</span>
                {priority}
              </span>
            </div>
          ))}
        </div>
      </GlassCard>
    </section>
  );
}
