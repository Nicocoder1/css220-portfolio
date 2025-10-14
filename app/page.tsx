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

          <div className="mt-8 text-center">
            <Link
              href="/projects"
              aria-label="View my projects"
              className="inline-block bg-[var(--accent)] text-background px-5 py-3 rounded-md font-medium hover:brightness-105 transition transform hover:-translate-y-0.5"
            >
              <span className="inline-flex items-center gap-3">
                <span>View My Projects</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" className="inline-block transition-transform duration-200 group-hover:translate-x-1" fill="currentColor" aria-hidden>
                  <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </span>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
}

