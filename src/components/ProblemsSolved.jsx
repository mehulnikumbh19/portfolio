import GlassCard from "./GlassCard";
import SectionHeading from "./SectionHeading";
import { problems } from "../data/portfolioData";

export default function ProblemsSolved() {
  return (
    <section className="section-shell">
      <SectionHeading
        eyebrow="Security and GRC Problems"
        title="What I help teams solve"
        description="Practical GRC work starts with messy evidence, unclear ownership, and risks that need structure."
      />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {problems.map((problem, index) => {
          const Icon = problem.icon;
          return (
            <GlassCard key={problem.title} delay={index * 0.05} className="p-5">
              <div className="mb-5 flex items-start justify-between gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-xl border border-cyan-300/22 bg-cyan-300/10 text-cyan-200">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="font-mono text-xs text-slate-500">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="display-3">{problem.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{problem.description}</p>
            </GlassCard>
          );
        })}
      </div>
    </section>
  );
}
