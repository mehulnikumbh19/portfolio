import GlassCard from "./GlassCard";
import SectionHeading from "./SectionHeading";
import { recruiterSnapshot } from "../data/portfolioData";

export default function RecruiterSnapshot() {
  return (
    <section className="section-shell">
      <SectionHeading
        eyebrow="Recruiter Signal"
        title="A 10-second snapshot for GRC and IT Risk roles"
        description="Target roles, core strength, framework focus, and practical evidence work in a compact scan."
      />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {recruiterSnapshot.map((item, index) => {
          const Icon = item.icon;
          return (
            <GlassCard key={item.title} delay={index * 0.06} className="p-5">
              <div className="mb-5 flex items-center justify-between gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-cyan-300/22 bg-cyan-300/10 text-cyan-200">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="font-mono text-xs text-slate-500">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="display-3">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{item.text}</p>
            </GlassCard>
          );
        })}
      </div>
    </section>
  );
}
