import AnimatedSection from "./AnimatedSection";
import ProjectsCarousel from "./ProjectsCarousel";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

export default function ProjectsSection() {
  return (
    <AnimatedSection className="py-2">
      <div className="w-full flex items-center justify-center">
        <ProjectsCarousel />
      </div>
    </AnimatedSection>
  );
}
