import { projectsData } from "../data/portfolio";
import SectionHeader from "./SectionHeader";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="section-spacing">
      <div className="container-wide">
        <SectionHeader number="03" label="OPEN SOURCE & REPOS" title="Featured GitHub Projects" />

        <div className="grid-projects">
          {projectsData.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
