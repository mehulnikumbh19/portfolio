import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";
import { projects } from "../data/portfolioData";

export default function Projects() {
  return (
    <section id="projects" className="site-shell py-14 sm:py-20">
      <SectionTitle
        kicker="Portfolio"
        title="Works"
        description="GRC and cybersecurity projects built with simulated data, audit workflows, and risk reporting."
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
