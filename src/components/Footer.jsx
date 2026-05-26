import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/portfolioData";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-shell pb-8 pt-4">
      <div className="retro-card bg-ink p-4 text-paper sm:p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="pixel-label text-orange">
            Designed and built for GRC, IT Risk, and Security Compliance opportunities.
          </p>
          <div className="flex items-center gap-2">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="grid h-9 w-9 place-items-center border-2 border-orange bg-ink text-orange transition-colors duration-150 ease-retro hover:bg-orange hover:text-ink"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="grid h-9 w-9 place-items-center border-2 border-orange bg-ink text-orange transition-colors duration-150 ease-retro hover:bg-orange hover:text-ink"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="grid h-9 w-9 place-items-center border-2 border-orange bg-ink text-orange transition-colors duration-150 ease-retro hover:bg-orange hover:text-ink"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
        <p className="pixel-label mt-4 text-paper/70">
          Mehul Nikumbh . Issue 01 . {year}
        </p>
      </div>
    </footer>
  );
}
