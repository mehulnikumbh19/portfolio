import { motion } from "framer-motion";
import { ArrowDownRight, Download, Mail, ShieldCheck, Terminal } from "lucide-react";
import Badge from "./Badge";
import MetricCard from "./MetricCard";
import { expo } from "./GlassCard";
import { controlPanelMetrics, heroBadges, profile, terminalLines } from "../data/portfolioData";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.06
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 }
};

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28">
      <div className="pointer-events-none absolute inset-x-0 top-20 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />
      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-content items-center gap-10 px-4 pb-16 pt-12 sm:px-6 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div initial="hidden" animate="visible" variants={container}>
          <motion.div
            variants={item}
            transition={{ duration: 0.58, ease: expo }}
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-emerald-300/25 bg-emerald-300/10 px-4 py-2 font-mono text-xs font-semibold text-emerald-100 shadow-green"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(34,197,94,0.9)]" />
            Open to GRC, IT Risk, and Security Compliance roles
          </motion.div>

          <motion.p variants={item} transition={{ duration: 0.58, ease: expo }} className="eyebrow mb-5">
            {profile.name}
          </motion.p>

          <motion.h1 variants={item} transition={{ duration: 0.68, ease: expo }} className="display-1 max-w-5xl">
            {profile.headline}
          </motion.h1>

          <motion.p
            variants={item}
            transition={{ duration: 0.58, ease: expo }}
            className="mt-6 max-w-3xl text-lg font-semibold leading-8 text-slate-100"
          >
            {profile.subheadline}
          </motion.p>

          <motion.p variants={item} transition={{ duration: 0.58, ease: expo }} className="lead mt-5">
            {profile.summary}
          </motion.p>

          <motion.div variants={item} transition={{ duration: 0.58, ease: expo }} className="mt-8 flex flex-wrap gap-4">
            <a className="btn-primary" href="#projects" aria-label="View featured projects">
              <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
              View Projects
            </a>
            <a className="btn-ghost" href={profile.resume} aria-label="Download resume">
              <Download className="h-4 w-4" aria-hidden="true" />
              Download Resume
            </a>
            <a className="btn-ghost" href="#contact" aria-label="Contact Mehul Nikumbh">
              <Mail className="h-4 w-4" aria-hidden="true" />
              Contact Me
            </a>
          </motion.div>

          <motion.div variants={item} transition={{ duration: 0.58, ease: expo }} className="mt-7 flex flex-wrap gap-2.5">
            {heroBadges.map((badge, index) => (
              <Badge key={badge} tone={index === 0 ? "accent" : "default"}>
                {badge}
              </Badge>
            ))}
          </motion.div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.74, delay: 0.12, ease: expo }}
          className="cyber-panel p-4 sm:p-5"
          aria-label="Animated GRC control panel"
        >
          <div className="relative overflow-hidden rounded-2xl border border-cyan-300/18 bg-slate-950/70 p-5">
            <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-cyan-300/10 to-transparent animate-scan" />
            <div className="relative flex items-start justify-between gap-4">
              <div>
                <p className="eyebrow">GRC Control Room</p>
                <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">Evidence to risk dashboard</h2>
              </div>
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-emerald-300/25 bg-emerald-300/10 text-emerald-200">
                <ShieldCheck className="h-6 w-6" aria-hidden="true" />
              </span>
            </div>

            <div className="relative mt-6 grid gap-3 sm:grid-cols-2">
              {controlPanelMetrics.map((metric, index) => (
                <MetricCard key={metric.label} metric={metric} compact delay={index * 0.04} />
              ))}
            </div>

            <div className="relative mt-5 rounded-2xl border border-white/10 bg-black/35 p-4">
              <div className="mb-3 flex items-center gap-2 text-cyan-100">
                <Terminal className="h-4 w-4" aria-hidden="true" />
                <span className="font-mono text-xs font-semibold">terminal</span>
              </div>
              <div className="terminal-text">
                {terminalLines.map((line) => (
                  <p key={line}>
                    <span className="text-cyan-300">&gt;</span> {line}
                  </p>
                ))}
              </div>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-2">
              {["Evidence", "Risk", "Control"].map((label) => (
                <div key={label} className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-3 text-center">
                  <span className="block font-mono text-[0.65rem] uppercase tracking-micro text-slate-400">{label}</span>
                  <span className="mt-1 block text-sm font-bold text-cyan-100">online</span>
                </div>
              ))}
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
