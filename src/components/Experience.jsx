import ExperienceCard from "./ExperienceCard";
import SectionTitle from "./SectionTitle";
import { experience } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="band band-cream">
      <div className="site-shell py-10 sm:py-14">
      <SectionTitle
        kicker="Resume"
        title="Experience"
        description="Cloud security and GRC roles spanning enterprise control testing, cloud governance, and audit readiness."
      />

      <ol className="grid gap-5 lg:grid-cols-2">
        {experience.map((item, index) => (
          <ExperienceCard key={`${item.title}-${item.company}`} item={item} index={index} />
        ))}
      </ol>
      </div>
    </section>
  );
}
