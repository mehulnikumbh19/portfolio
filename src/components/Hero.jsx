import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Sparkles } from "lucide-react";
import Badge from "./Badge";
import PixelAvatar from "./PixelAvatar";
import RetroCard from "./RetroCard";
import { heroSkills, profile } from "../data/portfolioData";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 }
};

function GrcConsole() {
  return (
    <div className="retro-card relative overflow-hidden bg-paper p-0">
      <div className="titlebar">
        <span className="flex items-center gap-2">
          <Sparkles className="h-3.5 w-3.5" aria-hidden="true" /> grc.console
        </span>
        <span className="titlebar-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </div>
      <div className="halftone p-5 sm:p-6">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            { label: "Controls", value: "120+" },
            { label: "CVEs", value: "2,000+" },
            { label: "Alerts", value: "500+" },
            { label: "Gaps", value: "28" },
            { label: "Assets", value: "150" },
            { label: "Families", value: "5" }
          ].map((cell) => (
            <div key={cell.label} className="border-2 border-ink bg-paper p-3">
              <p className="pixel-heading text-[1.6rem] text-ink">{cell.value}</p>
              <p className="pixel-label text-rust">{cell.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="status-strip">
        <span aria-hidden="true" className="h-2 w-2 bg-success" />
        <span>status . audit-ready evidence</span>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="site-shell pb-16 pt-2 sm:pt-4">
      <div className="grid gap-6 lg:grid-cols-[1fr_1.6fr]">

        {/* Left col — photo */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.5, 0, 0.5, 1] }}
          className="flex flex-col gap-6"
        >
          <div className="retro-card overflow-hidden p-0">
            <div className="titlebar">
              <span>profile.exe</span>
              <span className="titlebar-dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
            </div>
            <div className="halftone relative">
              <img
                src="/portfolio/avatar.jpg"
                alt="Mehul Nikumbh"
                className="w-full object-cover"
                style={{ maxHeight: "480px", filter: "contrast(1.05) saturate(0.9)" }}
              />
            </div>
            <div className="status-strip">
              <span aria-hidden="true" className="h-2 w-2 bg-success" />
              <span>status . open to roles</span>
            </div>
          </div>
        </motion.div>

        {/* Right col — bio + skills */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          className="flex flex-col gap-6"
        >
          <motion.div variants={fadeUp} transition={{ duration: 0.4, ease: [0.5, 0, 0.5, 1] }}>
            <RetroCard tone="paper" hover={false} className="p-5 sm:p-7">
              <div className="flex flex-wrap items-center gap-3">
                <Badge tone="orange">Issue 01 . GRC</Badge>
                <Badge>Open to roles</Badge>
              </div>
              <h1 className="pixel-display mt-6 text-[clamp(2rem,6vw,4rem)] text-ink">
                Mehul Nikumbh
              </h1>
              <p className="pixel-heading mt-3 text-[clamp(1.4rem,3vw,2rem)] text-rust">
                {profile.role}
              </p>
              <p className="mt-5 max-w-prose text-[1.05rem] leading-relaxed text-brown">
                {profile.heroHeadline}
              </p>
              <p className="mt-4 max-w-prose text-[0.98rem] leading-relaxed text-brown/90">
                {profile.summary}
              </p>
              <p className="pixel-label mt-6 inline-flex items-center gap-2 border-2 border-ink bg-cream px-2.5 py-1.5 text-ink">
                {profile.education}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a className="btn-retro btn-retro--orange" href="#projects">
                  View Projects <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  className="btn-retro btn-retro--ghost"
                  href={profile.resume}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Resume
                </a>
                <a className="btn-retro" href="#contact">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  Contact
                </a>
              </div>
            </RetroCard>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.4, ease: [0.5, 0, 0.5, 1] }}
          >
            <div className="retro-card retro-card--dark overflow-hidden p-0">
              <div className="titlebar bg-ink">
                <span>skills.matrix</span>
                <span className="titlebar-dots" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </span>
              </div>
              <div className="p-5 sm:p-6">
                <p className="pixel-label text-orange">Core stack</p>
                <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {heroSkills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-2 border-2 border-orange bg-coal px-3 py-2 text-paper"
                    >
                      <PixelAvatar size={18} />
                      <span className="pixel-heading text-[1.25rem]">{skill}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="btn-retro btn-retro--orange mt-6 w-full justify-center"
                >
                  Book a call
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.4, ease: [0.5, 0, 0.5, 1] }}
            className="retro-card flex items-center gap-3 bg-cream p-3 sm:p-4"
          >
            <span aria-hidden="true" className="h-2.5 w-2.5 shrink-0 bg-success" />
            <p className="pixel-label text-ink">{profile.availability}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
