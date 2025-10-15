import AnimatedSection from "./AnimatedSection"; // Animation wrapper
import ProjectsCarousel from "./ProjectsCarousel"; // Carousel of projects
import ProjectCard from "./ProjectCard"; // Project card
import { projects } from "../data/projects"; // Project data

// Section for all projects
// Projects section with heading and intro
export default function ProjectsSection() {
  return (
    <AnimatedSection className="py-2">
      <div className="w-full flex flex-col items-center justify-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#00FF41] mb-2 text-center">Projects</h2>
        <p className="max-w-2xl text-center text-base text-[var(--muted)] mb-6">
          Here are some of the projects I’ve built and am currently working on. My work spans backend systems, creative coding, and artistic web experiences. Each project reflects my passion for technology, innovation, and learning.
        </p>
        {/* Carousel with all projects */}
        <ProjectsCarousel />
      </div>
    </AnimatedSection>
  );
}
