import type { ReactElement } from "react";

import SectionHeading from "./components/SectionHeading";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import AnimatedSection from "./components/AnimatedSection";
import SkillsWidget from "./components/SkillsWidget";

const skills = [
  { name: "HTML", icon: "/icons/html.svg", proficiency: 95 },
  { name: "CSS", icon: "/icons/css.svg", proficiency: 90 },
  { name: "JavaScript", icon: "/icons/js.svg", proficiency: 85 },
  { name: "React", icon: "/icons/react.svg", proficiency: 80 },
  { name: "Tailwind", icon: "/icons/tailwind.svg", proficiency: 75 },
];

export default function Home(): ReactElement {
  return (
    <main className="scroll-smooth">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-28">

        <AnimatedSection id="home" aria-label="Home">
          <HeroSection />
        </AnimatedSection>

        <AnimatedSection id="skills" aria-label="Skills">
          <SectionHeading>Skills</SectionHeading>
          <SkillsWidget
            title="My Skills"
            content="Here are the technologies and languages I’m currently using and improving on."
            skills={skills}
          />
        </AnimatedSection>

        <AnimatedSection id="projects" aria-label="Projects">
          <SectionHeading>Projects</SectionHeading>
          <ProjectsSection />
        </AnimatedSection>

        <AnimatedSection id="about" aria-label="About">
          <SectionHeading>About</SectionHeading>
          <AboutSection />
        </AnimatedSection>

        <AnimatedSection id="contact" aria-label="Contact">
          <SectionHeading>Contact</SectionHeading>
          <ContactSection />
        </AnimatedSection>

      </div>
    </main>
  );
}

