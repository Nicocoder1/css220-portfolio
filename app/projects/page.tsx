import type { ReactElement } from "react";

import SectionHeading from "../components/SectionHeading";
import AnimatedSection from "../components/AnimatedSection";
import ProjectsSection from "../components/ProjectsSection";
import Link from "next/link";

export default function ProjectsPage(): ReactElement {
  return (
    <main>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        {/* Removed Back to Home link */}
        <AnimatedSection aria-label="Projects">
          <SectionHeading>Projects</SectionHeading>
          <ProjectsSection />
        </AnimatedSection>
      </div>
    </main>
  );
}
