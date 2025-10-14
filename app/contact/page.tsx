import type { ReactElement } from "react";

import SectionHeading from "../components/SectionHeading";
import AnimatedSection from "../components/AnimatedSection";
import ContactSection from "../components/ContactSection";
import Link from "next/link";

export default function ContactPage(): ReactElement {
  return (
    <main>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="mb-6">
          <Link href="/" className="text-[var(--accent)] hover:underline">← Back to Home</Link>
        </div>
        <AnimatedSection aria-label="Contact">
          <SectionHeading>Contact</SectionHeading>
          <ContactSection />
        </AnimatedSection>
      </div>
    </main>
  );
}
