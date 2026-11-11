import { ArrowUpRight } from "lucide-react";
import Badge from "./Badge";
import RetroCard from "./RetroCard";
import SectionTitle from "./SectionTitle";
import { projects } from "../data/portfolioData";

export default function Projects() {
  return (
    <section id="projects" className="site-shell py-10 sm:py-14">
      <SectionTitle
        kicker="Builds"
        title="Projects"
        description="Hands-on GRC tooling: control mapping, gap analysis, and identity governance monitoring."
      />

      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project, index) => {
          const Icon = project.icon;
          const isDark = index % 2 === 1;
          return (
            <RetroCard
              key={project.name}
              delay={index * 0.06}
              tone={isDark ? "dark" : "paper"}
              className={`flex flex-col p-0 ${isDark ? "scanlines" : ""}`}
            >
              <div className={`titlebar ${isDark ? "bg-orange text-ink" : "bg-ink text-paper"}`}>
                <span>{`${project.name.toLowerCase()}.py`}</span>
                <span className="pixel-label">{`Build 0${index + 1}`}</span>
              </div>
              <div className={`flex flex-1 flex-col p-5 sm:p-6 ${isDark ? "text-paper" : "text-ink"}`}>
                <div className="flex items-center gap-3">
                  <span
                    className={`grid h-10 w-10 shrink-0 place-items-center border-2 ${
                      isDark ? "border-orange bg-coal text-orange" : "border-ink bg-cream text-ink"
                    }`}
                  >
                    {Icon ? <Icon className="h-5 w-5" aria-hidden="true" /> : null}
                  </span>
                  <div>
                    <h3
                      className={`pixel-display text-[clamp(1.5rem,3vw,2rem)] ${
                        isDark ? "text-paper" : "text-ink"
                      }`}
                    >
                      {project.name}
                    </h3>
                    <p className={`pixel-label ${isDark ? "text-orange" : "text-rust"}`}>
                      {project.tagline}
                    </p>
                  </div>
                </div>

                <p
                  className={`mt-4 text-[0.95rem] leading-relaxed ${
                    isDark ? "text-paper/90" : "text-brown"
                  }`}
                >
                  {project.description}
                </p>

                <ul
                  className={`mt-4 space-y-2.5 text-[0.93rem] leading-relaxed ${
                    isDark ? "text-paper/90" : "text-brown"
                  }`}
                >
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className={`mt-1.5 h-2.5 w-2.5 shrink-0 ${isDark ? "bg-orange" : "bg-ink"}`}
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      tone={isDark ? "dark" : "cream"}
                      className={isDark ? "border-orange" : ""}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-3 pt-6">
                  {project.links.map((link, linkIndex) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className={`btn-retro ${linkIndex === 0 ? "btn-retro--orange" : "btn-retro--ghost"}`}
                    >
                      {link.label}
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            </RetroCard>
          );
        })}
      </div>
    </section>
  );
}
