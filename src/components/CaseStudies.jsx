import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import GlassCard, { expo } from "./GlassCard";
import SectionHeading from "./SectionHeading";
import { caseStudies } from "../data/portfolioData";

export default function CaseStudies() {
  const [open, setOpen] = useState(caseStudies[0].name);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") setOpen("");
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <section id="case-studies" className="section-shell">
      <SectionHeading
        eyebrow="Case Studies"
        title="Expandable project evidence panels"
        description="Cyber-styled case study accordions for problem framing, audit tests, outputs, and interview talking points."
      />
      <div className="space-y-4">
        {caseStudies.map((study, index) => {
          const Icon = study.icon;
          const expanded = open === study.name;
          const panelId = `case-study-panel-${study.name.toLowerCase()}`;
          const triggerId = `case-study-trigger-${study.name.toLowerCase()}`;
          return (
            <GlassCard key={study.name} delay={index * 0.04} className="p-0">
              <button
                type="button"
                id={triggerId}
                className="flex w-full items-center justify-between gap-4 p-5 text-left transition hover:text-cyan-100"
                onClick={() => setOpen(expanded ? "" : study.name)}
                aria-expanded={expanded}
                aria-controls={panelId}
              >
                <span className="flex items-center gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-xl border border-cyan-300/22 bg-cyan-300/10 text-cyan-200">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="font-mono text-xs uppercase tracking-micro text-slate-500">
                      Case {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="display-3 mt-1 block">{study.name}</span>
                  </span>
                </span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-cyan-200 transition duration-300 ease-out-expo ${expanded ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </button>
              <AnimatePresence initial={false}>
                {expanded ? (
                  <motion.div
                    id={panelId}
                    role="region"
                    aria-labelledby={triggerId}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: expo }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-white/10 p-5">
                      {study.showSimulatedDisclaimer ? (
                        <p className="mb-5 rounded-xl border border-emerald-300/25 bg-emerald-300/10 px-4 py-3 text-sm leading-6 text-emerald-100">
                          This case study uses simulated data designed to mirror real enterprise workflows without exposing confidential information.
                        </p>
                      ) : null}
                      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                        {study.sections.map((section) => (
                          <article key={section.title} className="rounded-2xl border border-white/10 bg-black/[0.24] p-4">
                            <h4 className="font-mono text-sm font-bold uppercase tracking-label text-cyan-100">
                              {section.title}
                            </h4>
                            <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
                              {section.items.map((entry) => (
                                <li key={entry} className="flex gap-3">
                                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300" />
                                  <span>{entry}</span>
                                </li>
                              ))}
                            </ul>
                          </article>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </GlassCard>
          );
        })}
      </div>
    </section>
  );
}
