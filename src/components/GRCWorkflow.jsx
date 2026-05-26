import { motion } from "framer-motion";
import GlassCard, { expo } from "./GlassCard";
import SectionHeading from "./SectionHeading";
import { workflowSteps } from "../data/portfolioData";

export default function GRCWorkflow() {
  return (
    <section className="section-shell">
      <SectionHeading
        eyebrow="GRC Workflow"
        title="From evidence intake to clear reporting"
        description="A repeatable process for testing controls, rating risk, and keeping remediation traceable."
      />
      <div className="relative">
        <div className="absolute left-6 top-8 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-cyan-300/70 via-blue-400/35 to-emerald-300/55 md:block xl:left-1/2" />
        <ol className="grid gap-5 xl:grid-cols-2">
          {workflowSteps.map((step, index) => {
            const Icon = step.icon;
            const offset = index % 2 === 1;
            return (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, x: offset ? 22 : -22 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.52, delay: index * 0.05, ease: expo }}
                className={offset ? "xl:translate-y-10" : ""}
              >
                <GlassCard hover={false} className="p-5">
                  <div className="flex gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-cyan-300/24 bg-cyan-300/10 text-cyan-200">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-mono text-xs font-semibold uppercase tracking-micro text-emerald-300">
                        Step {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="display-3 mt-2">{step.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-300">{step.examples}</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
