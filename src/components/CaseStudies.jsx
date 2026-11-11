import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { caseStudies } from "../data/portfolioData";

export default function CaseStudies() {
  const [openName, setOpenName] = useState(caseStudies[0]?.name ?? "");

  return (
    <section id="case-studies" className="site-shell py-14 sm:py-20">
      <SectionTitle
        kicker="Case files"
        title="Case Files"
        description="Project dossiers that recruiters can skim before deeper interview discussion."
      />

      <div className="retro-card overflow-hidden bg-paper p-0">
        <div className="titlebar">
          <span>case_files.dir</span>
          <span className="titlebar-dots" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </div>

        <ul className="divide-y-[3px] divide-ink">
          {caseStudies.map((study, index) => {
            const Icon = study.icon;
            const expanded = openName === study.name;
            const panelId = `case-panel-${study.name.toLowerCase()}`;
            const triggerId = `case-trigger-${study.name.toLowerCase()}`;
            return (
              <li key={study.name}>
                <button
                  type="button"
                  id={triggerId}
                  aria-controls={panelId}
                  aria-expanded={expanded}
                  onClick={() => setOpenName(expanded ? "" : study.name)}
                  className={`flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors duration-150 ease-retro sm:px-6 ${
                    expanded ? "bg-orange" : "hover:bg-cream"
                  }`}
                >
                  <span className="flex items-center gap-4">
                    <span className="grid h-11 w-11 place-items-center border-2 border-ink bg-paper">
                      {Icon ? <Icon className="h-5 w-5" aria-hidden="true" /> : null}
                    </span>
                    <span>
                      <span className="pixel-label block text-rust">{`Case File 0${index + 1}`}</span>
                      <span className="pixel-display block text-[clamp(1.5rem,3.5vw,2.25rem)] text-ink">
                        {study.name}
                      </span>
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className={`grid h-10 w-10 place-items-center border-2 border-ink bg-paper transition-transform duration-200 ease-retro ${
                      expanded ? "rotate-45 bg-ink text-orange" : ""
                    }`}
                  >
                    <Plus className="h-5 w-5" />
                  </span>
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
                      transition={{ duration: 0.25, ease: [0.5, 0, 0.5, 1] }}
                      className="overflow-hidden bg-cream"
                    >
                      <div className="p-5 sm:p-6">
                        {study.showSimulatedDisclaimer ? (
                          <p className="pixel-label mb-5 border-2 border-ink bg-paper px-3 py-2 text-rust">
                            Simulated data designed to mirror enterprise workflows without exposing
                            real organizational information.
                          </p>
                        ) : null}
                        <div className="grid gap-5 lg:grid-cols-2">
                          {study.sections.map((section) => (
                            <article
                              key={section.title}
                              className="border-2 border-ink bg-paper p-4"
                            >
                              <p className="pixel-label text-rust">{section.title}</p>
                              <ul className="mt-3 space-y-2 text-[0.93rem] leading-relaxed text-brown">
                                {section.items.map((item) => (
                                  <li key={item} className="flex gap-2.5">
                                    <span
                                      aria-hidden="true"
                                      className="mt-1.5 h-2 w-2 shrink-0 bg-ink"
                                    />
                                    <span>{item}</span>
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
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
