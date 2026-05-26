import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, ShieldCheck, X } from "lucide-react";
import { expo } from "./GlassCard";
import { navLinks, profile } from "../data/portfolioData";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = navLinks.map((link) => document.querySelector(link.href)).filter(Boolean);
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
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const handleEscape = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [open]);

  const linkClass = (href) => {
    const isActive = active === href.slice(1);
    return `rounded-full px-3 py-2 text-sm font-semibold transition duration-200 ease-out-expo ${
      isActive
        ? "bg-cyan-400/12 text-cyan-100 shadow-[0_0_20px_rgba(34,211,238,0.16)]"
        : "text-slate-300 hover:bg-white/[0.08] hover:text-white"
    }`;
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition duration-300 ease-out-expo ${
        scrolled
          ? "border-cyan-300/15 bg-slate-950/78 shadow-[0_12px_40px_rgba(0,0,0,0.26)] backdrop-blur-xl"
          : "border-white/[0.08] bg-slate-950/45 backdrop-blur-lg"
      }`}
    >
      <nav className="mx-auto flex max-w-content items-center justify-between px-4 py-3 sm:px-6">
        <a href="#home" className="flex items-center gap-3" aria-label="Mehul Nikumbh home">
          <span className="grid h-11 w-11 place-items-center rounded-xl border border-cyan-300/30 bg-cyan-300/10 text-cyan-200 shadow-cyber">
            <ShieldCheck className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-bold text-white">Mehul Nikumbh</span>
            <span className="block font-mono text-[0.68rem] text-slate-400">GRC • Risk • Compliance</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={linkClass(link.href)}>
              {link.label}
            </a>
          ))}
        </div>

        <a className="btn-primary hidden lg:inline-flex" href={profile.resume} aria-label="Download resume">
          <Download className="h-4 w-4" aria-hidden="true" />
          Resume
        </a>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-xl border border-white/[0.12] bg-white/[0.08] text-white transition hover:border-cyan-300/40 hover:bg-cyan-300/10 active:scale-[0.97] lg:hidden"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-navigation"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: expo }}
            className="overflow-hidden border-t border-white/10 bg-slate-950/96 backdrop-blur-xl lg:hidden"
          >
            <div className="mx-auto grid max-w-content gap-2 px-4 py-4 sm:px-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={linkClass(link.href)}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a className="btn-primary mt-2" href={profile.resume} onClick={() => setOpen(false)}>
                <Download className="h-4 w-4" aria-hidden="true" />
                Download Resume
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
