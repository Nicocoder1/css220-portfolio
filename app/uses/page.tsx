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
          <p className="mt-4 text-[var(--muted)]">
            Here’s a list of the main tools, frameworks, and knowledge required to build a modern portfolio like this, plus a short description of what each is for:
          </p>
          <ul className="mt-4 space-y-4 text-[var(--fg)]">
            <li>
              <strong>Next.js</strong> – A React-based framework for building fast, scalable web apps. Handles routing, server-side rendering, and API routes.
            </li>
            <li>
              <strong>React</strong> – The core JavaScript library for building user interfaces with reusable components.
            </li>
            <li>
              <strong>TypeScript</strong> – Adds type safety to JavaScript, making code more reliable and easier to maintain.
            </li>
            <li>
              <strong>Tailwind CSS</strong> – Utility-first CSS framework for rapid, responsive, and consistent styling using classes.
            </li>
            <li>
              <strong>Framer Motion</strong> – Animation library for React, used for smooth transitions, fades, and interactive effects.
            </li>
            <li>
              <strong>HTML & CSS</strong> – The foundation for structuring and styling all web pages.
            </li>
            <li>
              <strong>JavaScript (ES6+)</strong> – The main programming language for web interactivity and logic.
            </li>
            <li>
              <strong>Canvas API</strong> – Used for custom graphics and animations, like the Matrix rain background.
            </li>
            <li>
              <strong>VS Code</strong> – Code editor with extensions for productivity, linting, and formatting.
            </li>
            <li>
              <strong>Git & GitHub</strong> – Version control and collaboration tools for managing code and sharing projects.
            </li>
            <li>
              <strong>Figma</strong> – Design tool for prototyping layouts and UI elements.
            </li>
            <li>
              <strong>Responsive Design</strong> – Techniques to make the site look great on all devices (mobile, tablet, desktop).
            </li>
            <li>
              <strong>Accessibility (a11y)</strong> – Ensuring the site is usable for everyone, including keyboard navigation and readable colors.
            </li>
          </ul>
          <p className="mt-8 text-[var(--muted)]">
            <strong>How it works:</strong> This portfolio is built with reusable React components, styled using Tailwind CSS, and animated with Framer Motion. Next.js handles routing and page structure. The Matrix rain background uses the Canvas API for custom animation. All code is managed in VS Code and versioned with Git. Responsive and accessible design ensures a great experience for all users.
          </p>
        </AnimatedSection>
      </div>
    </main>
  );
}
