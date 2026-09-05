import RetroCard from "./RetroCard";
import SectionTitle from "./SectionTitle";
import { frameworks } from "../data/portfolioData";

// Rendered inside a dark band, so paper/cream already read as two dark shades.
const tonePalette = ["paper", "cream"];

export default function FrameworkMapping() {
  return (
    <section className="band band-dark">
      <div className="site-shell py-10 sm:py-14">
      <SectionTitle
        kicker="References"
        title="Frameworks"
        description="Eight standards from the resume, each paired with the work it backed."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {frameworks.map((framework, index) => {
          const tone = tonePalette[index % tonePalette.length];
          const isDark = tone === "dark";
          return (
            <RetroCard
              key={framework.name}
              tone={tone}
              delay={index * 0.04}
              flat
              className={`p-0 ${isDark ? "scanlines" : ""}`}
            >
              <div
                className={`titlebar ${
                  isDark ? "bg-orange text-ink" : "bg-ink text-paper"
                }`}
              >
                <span>{`0${index + 1} . framework`}</span>
                <span className="pixel-label">v1</span>
              </div>
              <div className={`p-5 sm:p-6 ${isDark ? "text-paper" : "text-ink"}`}>
                <h3
                  className={`pixel-display text-[clamp(1.5rem,3vw,2rem)] ${
                    isDark ? "text-paper" : "text-ink"
                  }`}
                >
                  {framework.name}
                </h3>
                <p
                  className={`pixel-label mt-2 ${
                    isDark ? "text-orange" : "text-rust"
                  }`}
                >
                  {framework.use}
                </p>
                <p
                  className={`mt-3 text-[0.93rem] leading-relaxed ${
                    isDark ? "text-paper/85" : "text-brown"
                  }`}
                >
                  {framework.work}
                </p>
              </div>
            </RetroCard>
          );
        })}
      </div>
      </div>
    </section>
  );
}
