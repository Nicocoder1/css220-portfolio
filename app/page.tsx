import type { ReactElement } from "react";

import SectionHeading from "./components/SectionHeading";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";

export default function Home(): ReactElement {
  return (
    <main className="scroll-smooth">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <section id="home" aria-label="Home" className="py-20 sm:py-28">
          <SectionHeading>Home</SectionHeading>
          <HeroSection />
        </section>

        <section id="projects" aria-label="Projects" className="py-20 sm:py-28">
          <SectionHeading>Projects</SectionHeading>
          <ProjectsSection />
        </section>

        <section id="about" aria-label="About" className="py-20 sm:py-28">
          <SectionHeading>About</SectionHeading>
          <AboutSection />
        </section>

        <section id="skills" aria-label="Skills" className="py-20 sm:py-28">
          <SectionHeading>Skills</SectionHeading>
          <SkillsSection />
        </section>

        <section id="contact" aria-label="Contact" className="py-20 sm:py-28">
          <SectionHeading>Contact</SectionHeading>
          <ContactSection />
        </section>

      </div>
    </main>
  );
}
