import type { ReactElement } from "react";

import SectionHeading from "../components/SectionHeading";
import AnimatedSection from "../components/AnimatedSection";
import AboutSection from "../components/AboutSection";
import Link from "next/link";

export default function AboutPage(): ReactElement {
  return (
    <main>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
no        {/* Removed Back to Home link */}
        <AnimatedSection aria-label="About">
          <SectionHeading>About</SectionHeading>
          <AboutSection />
        </AnimatedSection>
      </div>
    </main>
  );
}
