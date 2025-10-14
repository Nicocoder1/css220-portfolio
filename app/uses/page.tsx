import type { ReactElement } from "react";

import SectionHeading from "../components/SectionHeading";
import AnimatedSection from "../components/AnimatedSection";
import Link from "next/link";

export default function UsesPage(): ReactElement {
  return (
    <main>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        {/* Removed Back to Home link */}
        <AnimatedSection aria-label="Uses">
          <SectionHeading>Uses</SectionHeading>
          <p className="mt-4 text-[var(--muted)]">A short list of tools and hardware I use while learning and building.</p>
          <ul className="mt-4 space-y-2 text-[var(--fg)]">
            <li>MacBook Pro (M1)</li>
            <li>Visual Studio Code</li>
            <li>iPhone 13</li>
            <li>Figma</li>
          </ul>
        </AnimatedSection>
      </div>
    </main>
  );
}
