import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Briefcase,
  Github,
  Home,
  Linkedin,
  Mail,
  Menu,
  User,
  Wrench,
  X
} from "lucide-react";
import PixelAvatar from "./PixelAvatar";
import ThemeToggle from "./ThemeToggle";
import { navLinks, profile } from "../data/portfolioData";

const iconForLink = {
  Home,
  About: User,
  Skills: Wrench,
  Experience: Briefcase,
  Contact: Mail
};

const pad = (value) => String(value).padStart(2, "0");

function Clock() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const colon = now.getSeconds() % 2 === 0 ? "visible" : "invisible";

  return (
    <time
      dateTime={now.toISOString()}
      className="pixel-label hidden items-center gap-2 border-2 border-ink bg-cream px-2.5 py-1.5 text-ink md:inline-flex"
      aria-label="Local time"
    >
      <span aria-hidden="true" className="h-2 w-2 animate-pulse bg-success" />
      <span className="tabular-nums">
        {pad(now.getHours())}
        <span className={colon}>:</span>
        {pad(now.getMinutes())}
        <span className={colon}>:</span>
        {pad(now.getSeconds())}
      </span>
    </time>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
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
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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

  const path = active === "home" ? "~" : `~/${active}`;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`site-shell transition-[padding] duration-200 ease-retro ${
          scrolled ? "pt-2 sm:pt-3" : "pt-4 sm:pt-6"
        }`}
      >
        <div
          className={`retro-card relative bg-paper transition-[padding,box-shadow] duration-200 ease-retro ${
            scrolled ? "p-2 shadow-pixel-sm sm:p-2.5" : "p-3 sm:p-4"
          }`}
        >
          <div className="flex items-center gap-3">
            <a href="#home" className="flex items-center gap-3" aria-label="Back to top">
              <PixelAvatar size={scrolled ? 40 : 48} className="shrink-0 transition-all" />
              <div className="leading-tight">
                <p className="pixel-heading text-[1.35rem] text-ink sm:text-[1.55rem]">
                  {profile.name}
                </p>
                <p className="pixel-label flex items-center gap-1.5 text-rust">
                  <span>mehul@grc:</span>
                  <AnimatePresence mode="popLayout" initial={false}>
                    <motion.span
                      key={path}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.18, ease: [0.5, 0, 0.5, 1] }}
                      className="text-ink"
                    >
                      {path}
                    </motion.span>
                  </AnimatePresence>
                </p>
              </div>
            </a>

            <nav className="ml-auto hidden items-center gap-1 lg:flex" aria-label="Primary">
              {navLinks.map((link) => {
                const isActive = active === link.href.slice(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`pixel-label relative isolate border-2 border-transparent px-2.5 py-1.5 transition-colors duration-150 ease-retro ${
                      isActive ? "text-orange" : "text-ink hover:border-ink hover:bg-orange"
                    }`}
                  >
                    {isActive ? (
                      <motion.span
                        layoutId="nav-marker"
                        aria-hidden="true"
                        className="absolute inset-[-2px] -z-10 border-2 border-ink bg-ink"
                        transition={{ type: "spring", stiffness: 420, damping: 34 }}
                      />
                    ) : null}
                    {link.label}
                  </a>
                );
              })}
            </nav>

            <div className="ml-auto flex items-center gap-2 lg:ml-3">
              <Clock />

              <a
                className="btn-retro btn-retro--orange hidden text-[1rem] sm:inline-flex"
                href={profile.resume}
                download
                aria-label="Download resume"
              >
                Resume
              </a>

              <ThemeToggle />

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
