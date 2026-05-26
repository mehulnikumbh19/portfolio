import RetroCard from "./RetroCard";
import SectionTitle from "./SectionTitle";
import { problems } from "../data/portfolioData";

export default function ProblemsSolved() {
  return (
    <section className="site-shell py-14 sm:py-20">
      <SectionTitle
        kicker="Service menu"
        title="Cyber Risk Problems I Help Solve"
        description="What GRC and security teams hire me to clean up."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {problems.map((problem, index) => {
          const Icon = problem.icon;
          const isOrange = index % 3 === 1;
          const isDark = index % 3 === 2;
          const tone = isDark ? "dark" : isOrange ? "cream" : "paper";
          return (
            <RetroCard
              key={problem.title}
              delay={index * 0.04}
              tone={tone}
              className={`p-5 ${isOrange ? "bg-orange" : ""}`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`grid h-10 w-10 place-items-center border-2 ${
                    isDark
                      ? "border-orange bg-coal text-orange"
                      : "border-ink bg-paper text-ink"
                  }`}
                >
                  {Icon ? <Icon className="h-5 w-5" aria-hidden="true" /> : null}
                </span>
                <p className="pixel-label text-current">
                  {`0${index + 1} / 0${problems.length}`}
                </p>
              </div>
              <h3
                className={`pixel-heading mt-4 text-[1.5rem] ${
                  isDark ? "text-paper" : "text-ink"
                }`}
              >
                {problem.title}
              </h3>
              <p
                className={`mt-3 text-[0.95rem] leading-relaxed ${
                  isDark ? "text-paper/85" : "text-brown"
                }`}
              >
                {problem.description}
              </p>
            </RetroCard>
          );
        })}
      </div>
    </section>
  );
}
