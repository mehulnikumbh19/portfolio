import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import GlassCard, { expo } from "./GlassCard";
import SectionHeading from "./SectionHeading";
import { faqs } from "../data/portfolioData";

export default function FAQ() {
  const [open, setOpen] = useState(faqs[0].question);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") setOpen("");
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <section className="section-shell">
      <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const expanded = open === faq.question;
          const panelId = `faq-panel-${index}`;
          const triggerId = `faq-trigger-${index}`;
          return (
            <GlassCard key={faq.question} delay={index * 0.04} className="p-0">
              <button
                type="button"
                id={triggerId}
                onClick={() => setOpen(expanded ? "" : faq.question)}
                aria-expanded={expanded}
                aria-controls={panelId}
                className="flex w-full items-center justify-between gap-4 p-5 text-left transition hover:text-cyan-100"
              >
                <span className="display-3">{faq.question}</span>
                <ChevronDown className={`h-5 w-5 shrink-0 text-cyan-200 transition duration-300 ease-out-expo ${expanded ? "rotate-180" : ""}`} aria-hidden="true" />
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
                    transition={{ duration: 0.28, ease: expo }}
                    className="overflow-hidden"
                  >
                    <p className="border-t border-white/10 px-5 pb-5 pt-4 leading-7 text-slate-300">{faq.answer}</p>
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
