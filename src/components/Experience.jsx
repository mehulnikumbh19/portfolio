import ExperienceCard from "./ExperienceCard";
import SectionHeading from "./SectionHeading";
import { experience } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="section-shell">
      <SectionHeading
        eyebrow="Experience"
        title="Security work with evidence, controls, and remediation context"
        description="A timeline of information security, security operations, and GRC-aligned responsibilities."
      />
      <div className="relative space-y-6 before:absolute before:left-[19px] before:top-8 before:h-[calc(100%-3rem)] before:w-px before:bg-gradient-to-b before:from-cyan-300/60 before:via-blue-400/25 before:to-emerald-300/45">
        {experience.map((item, index) => (
          <ExperienceCard key={`${item.title}-${item.company}`} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}
