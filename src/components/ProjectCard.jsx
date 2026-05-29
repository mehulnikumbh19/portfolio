import { ArrowUpRight, Download, Github } from "lucide-react";
import Badge from "./Badge";
import RetroCard from "./RetroCard";

function AccessMatrixPreview() {
  const cells = Array.from({ length: 25 });
  const states = [
    "bg-success",
    "bg-success",
    "bg-paper",
    "bg-risk",
    "bg-success",
    "bg-paper",
    "bg-success",
    "bg-warn",
    "bg-success",
    "bg-paper",
    "bg-risk",
    "bg-paper",
    "bg-success",
    "bg-success",
    "bg-warn",
    "bg-success",
    "bg-success",
    "bg-paper",
    "bg-success",
    "bg-success",
    "bg-paper",
    "bg-warn",
    "bg-success",
    "bg-paper",
    "bg-success"
  ];
  return (
    <div className="grid grid-cols-5 gap-1.5">
      {cells.map((_, idx) => (
        <span
          key={idx}
          className={`block h-7 w-full border-2 border-ink ${states[idx] || "bg-paper"}`}
        />
      ))}
    </div>
  );
}

function VendorReviewPreview() {
  const rows = [
    { label: "SOC 2", value: "review", tone: "bg-success" },
    { label: "BAA", value: "gap", tone: "bg-risk" },
    { label: "DPA", value: "expired", tone: "bg-warn" },
    { label: "MFA", value: "follow-up", tone: "bg-paper" }
  ];

  return (
    <ul className="space-y-1.5">
      {rows.map((row) => (
        <li
          key={row.label}
          className="grid grid-cols-[4.5rem_1fr] items-center gap-2 border-2 border-ink bg-paper px-2 py-1.5"
        >
          <span className={`pixel-label border-2 border-ink px-1.5 py-0.5 text-ink ${row.tone}`}>
            {row.label}
          </span>
          <span className="pixel-label text-ink">{row.value}</span>
        </li>
      ))}
    </ul>
  );
}

function ControlMappingPreview() {
  const rows = ["AC-2 . Account Mgmt", "AU-6 . Audit Review", "CM-7 . Least Function", "RA-3 . Risk Assessment", "IR-4 . Incident Handling"];
  return (
    <ul className="space-y-1.5">
      {rows.map((row, idx) => (
        <li
          key={row}
          className="flex items-center justify-between border-2 border-ink bg-paper px-2.5 py-1.5"
        >
          <span className="pixel-label text-ink">{row}</span>
          <span
            aria-hidden="true"
            className={`h-3 w-3 ${idx === 1 ? "bg-warn" : idx === 3 ? "bg-risk" : "bg-success"}`}
          />
        </li>
      ))}
    </ul>
  );
}

function VulnHeatmapPreview() {
  const heat = [
    "bg-risk",
    "bg-warn",
    "bg-warn",
    "bg-success",
    "bg-success",
    "bg-warn",
    "bg-risk",
    "bg-warn",
    "bg-success",
    "bg-success",
    "bg-warn",
    "bg-warn",
    "bg-warn",
    "bg-success",
    "bg-paper",
    "bg-success",
    "bg-warn",
    "bg-success",
    "bg-paper",
    "bg-paper"
  ];
  return (
    <div className="grid grid-cols-5 gap-1.5">
      {heat.map((cls, idx) => (
        <span key={idx} className={`h-8 border-2 border-ink ${cls}`} />
      ))}
    </div>
  );
}

function SiemFeedPreview() {
  const rows = [
    { sev: "HIGH", text: "auth.fail . svc_admin . 17x", tone: "bg-risk" },
    { sev: "MED", text: "edr.detect . T1059 PowerShell", tone: "bg-warn" },
    { sev: "LOW", text: "net.scan . internal probe", tone: "bg-success" },
    { sev: "MED", text: "edr.iso . endpoint quarantined", tone: "bg-warn" }
  ];
  return (
    <ul className="space-y-1.5">
      {rows.map((row) => (
        <li key={row.text} className="flex items-center gap-2 border-2 border-ink bg-paper px-2 py-1.5">
          <span className={`pixel-label border-2 border-ink px-1.5 py-0.5 ${row.tone} text-ink`}>
            {row.sev}
          </span>
          <span className="pixel-label text-ink">{row.text}</span>
        </li>
      ))}
    </ul>
  );
}

const previewMap = {
  MANDATE: { Component: VendorReviewPreview, tag: "TPRM Review" },
  AccessGuard: { Component: AccessMatrixPreview, tag: "Access Matrix" },
  Bastion: { Component: ControlMappingPreview, tag: "Control Map" },
  Patchwork: { Component: VulnHeatmapPreview, tag: "Risk Heatmap" },
  Watchtower: { Component: SiemFeedPreview, tag: "SIEM Feed" }
};

const toneByIndex = ["paper", "dark", "cream", "paper"];

export default function ProjectCard({ project, index }) {
  const preview = previewMap[project.name];
  const tone = toneByIndex[index % toneByIndex.length];
  const isDark = tone === "dark";
  const PreviewComponent = preview?.Component;

  return (
    <RetroCard delay={index * 0.05} tone={tone} className="p-0">
      <div
        className={`titlebar ${
          isDark ? "bg-orange text-ink" : "bg-ink text-paper"
        }`}
      >
        <span className="flex items-center gap-2">
          <span aria-hidden="true">{">"}</span>
          {project.name.toLowerCase()}.exe
        </span>
        <span className="pixel-label">{preview?.tag}</span>
      </div>

      <div className={`p-5 sm:p-6 ${isDark ? "text-paper" : "text-ink"}`}>
        <div className="flex items-baseline justify-between gap-3">
          <h3
            className={`pixel-display text-[clamp(1.5rem,3.5vw,2.25rem)] ${
              isDark ? "text-paper" : "text-ink"
            }`}
          >
            {project.name}
          </h3>
          <Badge tone={isDark ? "dark" : "orange"}>{`0${index + 1}`}</Badge>
        </div>
        <p
          className={`pixel-label mt-3 ${
            isDark ? "text-orange" : "text-rust"
          }`}
        >
          {project.subtitle}
        </p>

        {PreviewComponent ? (
          <div
            className={`mt-5 border-4 border-ink p-3 ${
              isDark ? "bg-coal" : "bg-cream"
            }`}
          >
            <PreviewComponent />
          </div>
        ) : null}

        <p
          className={`mt-5 text-[0.95rem] leading-relaxed ${
            isDark ? "text-paper/85" : "text-brown"
          }`}
        >
          {project.description}
        </p>

        {project.metrics?.length ? (
          <ul
            className={`mt-4 grid gap-1.5 sm:grid-cols-2 ${
              isDark ? "text-paper/85" : "text-brown"
            }`}
          >
            {project.metrics.map((metric) => (
              <li
                key={metric}
                className={`border-2 px-2 py-1 text-[0.85rem] ${
                  isDark ? "border-orange bg-coal" : "border-ink bg-paper"
                }`}
              >
                {metric}
              </li>
            ))}
          </ul>
        ) : null}

        <ul className="mt-5 space-y-2.5 text-[0.93rem] leading-relaxed">
          {project.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-2.5">
              <span
                aria-hidden="true"
                className={`mt-1.5 h-2.5 w-2.5 shrink-0 ${
                  isDark ? "bg-orange" : "bg-ink"
                }`}
              />
              <span className={isDark ? "text-paper/90" : "text-brown"}>{bullet}</span>
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

        <div className="mt-6 flex flex-wrap gap-2">
          {project.links.live ? (
            <a
              className="btn-retro btn-retro--orange"
              href={project.links.live}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${project.name} live app`}
            >
              Live App
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          ) : null}
          {project.links.github ? (
            <a
              className="btn-retro btn-retro--ghost"
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`View ${project.name} on GitHub`}
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              GitHub
            </a>
          ) : null}
          {project.links.caseStudy ? (
            <a
              className="btn-retro btn-retro--ghost"
              href={project.links.caseStudy}
              aria-label={`View ${project.name} case study`}
            >
              Case Study
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          ) : null}
          {project.links.artifact ? (
            <a
              className="btn-retro btn-retro--orange"
              href={project.links.artifact}
              aria-label={`Download ${project.name} artifact`}
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Artifact
            </a>
          ) : null}
        </div>
      </div>
    </RetroCard>
  );
}
