import RetroCard from "./RetroCard";
import SectionTitle from "./SectionTitle";
import { frameworks } from "../data/portfolioData";

const tonePalette = ["paper", "cream", "dark", "paper", "cream", "dark", "paper"];

export default function FrameworkMapping() {
  return (
    <section className="site-shell py-14 sm:py-20">
      <SectionTitle
        kicker="References"
        title="Frameworks"
        description="Each reference standard, paired with the practical evidence and remediation work it implies."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {frameworks.map((framework, index) => {
          const tone = tonePalette[index % tonePalette.length];
          const isDark = tone === "dark";
          return (
            <RetroCard
              key={framework.name}
              tone={tone}
              delay={index * 0.04}
              className="p-0"
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
                  className={`mt-4 text-[0.93rem] leading-relaxed ${
                    isDark ? "text-paper/85" : "text-brown"
                  }`}
                >
                  {framework.work}
                </p>
                <div
                  className={`mt-4 border-2 px-3 py-2 ${
                    isDark
                      ? "border-orange bg-coal text-paper/90"
                      : "border-ink bg-paper text-ink"
                  }`}
                >
                  <p className="pixel-label">Example domains</p>
                  <p className="mt-1 text-[0.9rem]">{framework.examples}</p>
                </div>
              </div>
            </RetroCard>
          );
        })}
      </div>
    </section>
  );
}
