import { ArrowUpRight, Download, Github, ListChecks } from "lucide-react";
import Badge from "./Badge";
import GlassCard from "./GlassCard";

export default function ProjectCard({ project, index }) {
  const Icon = project.icon;

  return (
    <GlassCard delay={index * 0.06} className="flex h-full flex-col p-6">
      <div className="flex items-start justify-between gap-4">
        <span className="grid h-12 w-12 place-items-center rounded-xl border border-cyan-300/24 bg-cyan-300/10 text-cyan-200">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </span>
        <span className="chip-accent">Simulated data</span>
      </div>

      <p className="eyebrow mt-5">Project {String(index + 1).padStart(2, "0")}</p>
      <h3 className="display-2 mt-2">{project.name}</h3>
      <p className="mt-3 text-sm font-semibold uppercase tracking-label text-cyan-100">{project.subtitle}</p>
      <p className="mt-5 leading-7 text-slate-300">{project.description}</p>

      <div className="mt-5 grid gap-2 sm:grid-cols-2">
        {project.metrics.map((metric) => (
          <div key={metric} className="rounded-xl border border-white/10 bg-black/[0.24] px-3 py-2 font-mono text-xs text-slate-300">
            {metric}
          </div>
        ))}
      </div>

      <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-300">
        {project.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-3">
            <ListChecks className="mt-1 h-4 w-4 shrink-0 text-emerald-300" aria-hidden="true" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-2.5">
        {project.tags.map((tag, tagIndex) => (
          <Badge key={tag} tone={tagIndex % 4 === 0 ? "accent" : "default"}>
            {tag}
          </Badge>
        ))}
      </div>

      <div className="mt-auto flex flex-wrap gap-3 pt-7">
        <a className="btn-ghost" href={project.links.github} aria-label={`View ${project.name} on GitHub`}>
          <Github className="h-4 w-4" aria-hidden="true" />
          GitHub
        </a>
        <a className="btn-ghost" href={project.links.caseStudy} aria-label={`View ${project.name} case study`}>
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          Case Study
        </a>
        <a className="btn-primary" href={project.links.artifact} aria-label={`Download ${project.name} artifact`}>
          <Download className="h-4 w-4" aria-hidden="true" />
          Artifact
        </a>
      </div>
    </GlassCard>
  );
}
