import ExperienceCard from "./ExperienceCard";
import SectionTitle from "./SectionTitle";
import { experience } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="site-shell py-14 sm:py-20">
      <SectionTitle
        kicker="Resume"
        title="Experience"
        description="Security operations roots paired with control testing, evidence, and risk reporting work."
      />

      <ol className="grid gap-5 lg:grid-cols-3">
        {experience.map((item, index) => (
          <ExperienceCard key={`${item.title}-${item.company}`} item={item} index={index} />
        ))}
      </ol>
    </section>
  );
}
