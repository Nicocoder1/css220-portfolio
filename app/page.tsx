import type { ReactElement } from "react";

import HeroSection from "./components/HeroSection";
import AnimatedSection from "./components/AnimatedSection";
import Link from "next/link";

export default function Home(): ReactElement {
  return (
    <main className="scroll-smooth">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <AnimatedSection id="home" aria-label="Home">
          <HeroSection />

          {/* Removed extra View My Projects button outside hero box */}
        </AnimatedSection>
      </div>
    </main>
  );
}

