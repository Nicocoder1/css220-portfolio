import AnimatedSection from "./AnimatedSection"; // Animation wrapper
import ProjectsCarousel from "./ProjectsCarousel"; // Carousel of projects
import ProjectCard from "./ProjectCard"; // Project card
import { projects } from "../data/projects"; // Project data

// Section for all projects
export default function ProjectsSection() {
  return (
    <AnimatedSection className="py-2">
      <div className="w-full flex items-center justify-center">
        {/* Carousel with all projects */}
        <ProjectsCarousel />
      </div>
    </AnimatedSection>
  );
}
