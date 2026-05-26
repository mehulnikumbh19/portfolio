import { Briefcase } from "lucide-react";
import Badge from "./Badge";
import RetroCard from "./RetroCard";

export default function ExperienceCard({ item, index }) {
  const tone = index === 1 ? "dark" : index === 2 ? "cream" : "paper";
  const isDark = tone === "dark";

  return (
    <RetroCard as="li" delay={index * 0.06} tone={tone} className="p-0">
      <div
        className={`titlebar ${
          isDark ? "bg-orange text-ink" : "bg-ink text-paper"
        }`}
      >
        <span className="flex items-center gap-2">
          <Briefcase className="h-3.5 w-3.5" aria-hidden="true" />
          {item.dates}
        </span>
        <span className="pixel-label">{`Role 0${index + 1}`}</span>
      </div>
      <div className={`p-5 ${isDark ? "text-paper" : "text-ink"} sm:p-6`}>
        <h3
          className={`pixel-heading text-[1.55rem] ${
            isDark ? "text-paper" : "text-ink"
          }`}
        >
          {item.title}
        </h3>
        <p
          className={`mt-1 text-[0.95rem] font-semibold ${
            isDark ? "text-orange" : "text-rust"
          }`}
        >
          {item.company}
        </p>
        <p
          className={`pixel-label mt-3 ${
            isDark ? "text-paper/80" : "text-brown"
          }`}
        >
          {item.location} . {item.type}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <Badge
              key={tag}
              tone={isDark ? "dark" : "cream"}
              className={isDark ? "border-orange" : ""}
            >
              {tag}
            </Badge>
          ))}
        </div>

        <ul
          className={`mt-5 space-y-3 text-[0.93rem] leading-relaxed ${
            isDark ? "text-paper/90" : "text-brown"
          }`}
        >
          {item.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3">
              <span
                aria-hidden="true"
                className={`mt-1.5 h-2.5 w-2.5 shrink-0 ${
                  isDark ? "bg-orange" : "bg-ink"
                }`}
              />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </RetroCard>
  );
}
