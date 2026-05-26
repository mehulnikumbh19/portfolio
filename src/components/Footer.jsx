import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/portfolioData";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-slate-950/70">
      <div className="mx-auto flex max-w-content flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-slate-100">Built with React, Tailwind CSS, Framer Motion</p>
          <p className="mt-2 text-sm text-slate-400">Designed for GRC, IT Risk, and Security Compliance opportunities</p>
          <p className="mt-2 font-mono text-xs text-slate-500">Copyright {year} Mehul Nikumbh</p>
        </div>
        <div className="flex gap-3">
          <a className="icon-link" href={profile.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer">
            <Linkedin className="h-5 w-5" aria-hidden="true" />
          </a>
          <a className="icon-link" href={profile.github} aria-label="GitHub" target="_blank" rel="noreferrer">
            <Github className="h-5 w-5" aria-hidden="true" />
          </a>
          <a className="icon-link" href={`mailto:${profile.email}`} aria-label="Email">
            <Mail className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
