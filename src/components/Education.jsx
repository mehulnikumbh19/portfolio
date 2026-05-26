import Badge from "./Badge";
import GlassCard from "./GlassCard";
import SectionHeading from "./SectionHeading";
import { education } from "../data/portfolioData";

export default function Education() {
  const Icon = education.icon;
  return (
    <section className="section-shell">
      <SectionHeading eyebrow="Education" title="Academic foundation" />
      <GlassCard className="p-6 sm:p-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="grid h-12 w-12 place-items-center rounded-xl border border-cyan-300/22 bg-cyan-300/10 text-cyan-200">
              <Icon className="h-6 w-6" aria-hidden="true" />
            </span>
            <h3 className="display-3 mt-5">{education.school}</h3>
            <p className="mt-3 text-cyan-100">{education.degree}</p>
          </div>
          <div className="flex flex-wrap content-start gap-2.5">
            {education.focusAreas.map((area, index) => (
              <Badge key={area} tone={index % 3 === 0 ? "accent" : "default"}>
                {area}
              </Badge>
            ))}
          </div>
        </div>
      </GlassCard>
    </section>
  );
}
