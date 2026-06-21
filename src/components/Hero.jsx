import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import Badge from "./Badge";
import PixelAvatar from "./PixelAvatar";
import RetroCard from "./RetroCard";
import { heroSkills, profile } from "../data/portfolioData";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 }
};

const avatarSrc = `${import.meta.env.BASE_URL}avatar.jpg`;

export default function Hero() {
  return (
    <section id="home" className="site-shell flex flex-col gap-6 pb-16 pt-2 sm:pt-4">
      <div className="grid items-stretch gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] lg:gap-8">

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.5, 0, 0.5, 1] }}
          className="flex w-full"
        >
          <div className="retro-card flex w-full flex-col overflow-hidden p-0">
            <div className="titlebar">
              <span>profile.exe</span>
              <span className="titlebar-dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
            </div>
            <div className="halftone relative flex-1">
              <img
                src={avatarSrc}
                alt="Mehul Nikumbh"
                className="h-full w-full object-cover"
                style={{ filter: "contrast(1.05) saturate(0.9)" }}
              />
            </div>
            <div className="status-strip">
              <span aria-hidden="true" className="h-2 w-2 bg-success" />
              <span>status . open to roles</span>
            </div>
          </div>
        </motion.div>

        {/* Bio */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.4, ease: [0.5, 0, 0.5, 1] }}
          className="flex w-full"
        >
          <RetroCard tone="paper" hover={false} className="flex w-full flex-col p-5 sm:p-7">
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
            <p className="pixel-label mt-6 inline-flex w-fit items-center gap-2 border-2 border-ink bg-cream px-2.5 py-1.5 text-ink">
              {profile.education}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a className="btn-retro btn-retro--orange" href="#projects">
                View Projects <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                className="btn-retro btn-retro--ghost"
                href={profile.resume}
                download
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
      </div>

      {/* Skills matrix — full width */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
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
            <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
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

      {/* Availability — full width */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4, ease: [0.5, 0, 0.5, 1] }}
        className="retro-card flex items-center gap-3 bg-cream p-3 sm:p-4"
      >
        <span aria-hidden="true" className="h-2.5 w-2.5 shrink-0 bg-success" />
        <p className="pixel-label text-ink">{profile.availability}</p>
      </motion.div>
    </section>
  );
}
