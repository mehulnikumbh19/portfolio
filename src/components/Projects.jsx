import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";
import { projects } from "../data/portfolioData";

export default function Projects() {
  return (
    <section id="projects" className="section-shell">
      <SectionHeading
        eyebrow="Featured Projects"
        title="Simulated GRC projects built around enterprise workflows"
        description="Access governance, control mapping, vulnerability risk, and SIEM evidence projects with realistic audit artifacts."
      />
      <div className="grid gap-6 xl:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
