import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";
import { projects } from "../data/portfolioData";

export default function Projects() {
  return (
    <section id="projects" className="site-shell py-10 sm:py-14">
      <SectionTitle
        kicker="Focus Areas"
        title="Where I Spend My Time"
        description="Six recurring areas of work drawn directly from my GRC and cloud security roles at BlackRock and Siemens."
        size="xl"
      />

      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
