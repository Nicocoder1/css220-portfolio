import AnimatedSection from "./AnimatedSection";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

export default function ProjectsSection() {
  return (
    <AnimatedSection className="py-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.title} title={p.title} description={p.description} tech={p.tech} image={p.image} href={p.href} />
        ))}
      </div>
    </AnimatedSection>
  );
}
