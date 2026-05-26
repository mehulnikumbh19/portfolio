import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import Badge from "./Badge";
import GlassCard, { expo } from "./GlassCard";

export default function ExperienceCard({ item, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.05, ease: expo }}
      className="relative pl-12"
    >
      <span className="absolute left-0 top-7 z-10 grid h-10 w-10 place-items-center rounded-full border border-cyan-300/45 bg-slate-950 text-xs font-bold text-cyan-100 shadow-cyber">
        {index + 1}
      </span>
      <GlassCard hover={false} className="p-6">
        <div className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr]">
          <header>
            <p className="eyebrow mb-3">{item.dates}</p>
            <h3 className="display-3">{item.title}</h3>
            <p className="mt-2 text-base font-semibold text-cyan-100">{item.company}</p>
            <div className="mt-4 space-y-2 text-sm text-slate-400">
              <p>{item.type}</p>
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" aria-hidden="true" />
                {item.location}
              </p>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
          </header>
          <ul className="space-y-3 text-sm leading-7 text-slate-300">
            {item.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3">
                <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(34,197,94,0.7)]" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </GlassCard>
    </motion.article>
  );
}
