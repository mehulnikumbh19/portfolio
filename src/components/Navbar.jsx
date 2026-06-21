import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Briefcase,
  Github,
  Home,
  Linkedin,
  Mail,
  Menu,
  ShieldCheck,
  User,
  Wrench,
  X
} from "lucide-react";
import PixelAvatar from "./PixelAvatar";
import { navLinks, profile } from "../data/portfolioData";

const iconForLink = {
  Home,
  About: User,
  Skills: Wrench,
  Experience: Briefcase,
  Projects: ShieldCheck,
  Contact: Mail
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const panelRef = useRef(null);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0.1 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return undefined;

    const handleEscape = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    const handleClick = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClick);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="site-shell pt-4 sm:pt-6">
        <div className="retro-card relative bg-paper p-3 sm:p-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-3">
              <PixelAvatar size={48} className="shrink-0" />
              <div className="leading-tight">
                <p className="pixel-heading text-[1.35rem] text-ink sm:text-[1.55rem]">
                  {profile.name}
                </p>
                <p className="pixel-label text-rust">Cybersecurity GRC</p>
              </div>
            </div>

            <nav className="ml-auto hidden items-center gap-1 lg:flex" aria-label="Primary">
              {navLinks.map((link) => {
                const isActive = active === link.href.slice(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`pixel-label border-2 px-2.5 py-1.5 transition-colors duration-150 ease-retro ${
                      isActive
                        ? "border-ink bg-ink text-orange"
                        : "border-transparent text-ink hover:border-ink hover:bg-orange"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            <div className="ml-auto flex items-center gap-2 lg:ml-3">
              <a
                className="btn-retro btn-retro--orange hidden text-[1rem] sm:inline-flex"
                href={profile.resume}
                download
                aria-label="Download resume"
              >
                Resume
              </a>

              <button
                type="button"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                onClick={() => setOpen((value) => !value)}
                className="grid h-11 w-11 place-items-center border-2 border-ink bg-paper text-ink shadow-pixel-sm transition-transform duration-150 ease-retro hover:bg-orange active:translate-x-[3px] active:translate-y-[3px] active:shadow-none lg:hidden"
              >
                {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            ref={panelRef}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.18, ease: [0.5, 0, 0.5, 1] }}
            className="site-shell mt-3 lg:hidden"
          >
            <div className="retro-card bg-paper p-2">
              <ul className="divide-y-2 divide-ink">
                {navLinks.map((link) => {
                  const Icon = iconForLink[link.label] ?? Home;
                  const isActive = active === link.href.slice(1);
                  return (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={`flex items-center gap-3 px-3 py-3 transition-colors duration-150 ease-retro ${
                          isActive ? "bg-orange" : "hover:bg-cream"
                        }`}
                      >
                        <span className="grid h-9 w-9 place-items-center border-2 border-ink bg-paper">
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <span className="pixel-heading text-[1.4rem] text-ink">{link.label}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>

              <div className="status-strip mt-2 justify-between">
                <span className="flex items-center gap-2">
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="grid h-8 w-8 place-items-center border-2 border-orange bg-ink text-orange hover:bg-orange hover:text-ink"
                  >
                    <Linkedin className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="grid h-8 w-8 place-items-center border-2 border-orange bg-ink text-orange hover:bg-orange hover:text-ink"
                  >
                    <Github className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <a
                    href={`mailto:${profile.email}`}
                    aria-label="Email"
                    className="grid h-8 w-8 place-items-center border-2 border-orange bg-ink text-orange hover:bg-orange hover:text-ink"
                  >
                    <Mail className="h-4 w-4" aria-hidden="true" />
                  </a>
                </span>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="pixel-label flex items-center gap-1.5 text-paper hover:text-orange"
                >
                  Let&rsquo;s talk
                  <span aria-hidden="true">{">"}</span>
                </a>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
