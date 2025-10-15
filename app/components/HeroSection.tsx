"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="w-full full-dvh flex items-center justify-center px-4 mt-4 sm:mt-6 md:mt-8 lg:mt-10">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="hero-gradient rounded-2xl border border-white/10 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.12),0_2px_8px_0_rgba(0,0,0,0.04)] dark:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.32),0_2px_8px_0_rgba(0,0,0,0.16)] flex items-center justify-center w-full max-w-[1200px] min-h-[60dvh] sm:min-h-[70dvh] md:min-h-[75dvh] lg:min-h-[80dvh] p-4 sm:p-6"
      >
        <div className="w-full h-full flex flex-col items-center justify-center p-6 sm:p-12 lg:p-20 text-center">
          <p className="text-xs sm:text-sm text-[var(--muted)] mb-2 italic font-light">Hi, my name is</p>
          <h1 className="text-5xl sm:text-6xl font-black leading-tight text-[var(--fg)] dark:text-[var(--fg)]">
            Nicolas Soria  Web Developer in training
          </h1>
          <p className="mt-4 max-w-3xl text-[var(--fg)]/85 px-4">
            I build modern, accessible web experiences. Currently exploring
            frontend engineering and AI-powered workflows.
          </p>

          <div className="mt-6 flex flex-col items-center justify-center gap-0">
            <div className="flex items-center gap-4">
              <Link
                href="#projects"
                className="inline-block bg-[var(--accent)] text-background px-4 py-2 rounded-md font-medium focus:outline-none focus:ring-4 focus:ring-[var(--ring)]"
              >
                View Projects
              </Link>
            </div>
            <span className="mt-3 text-xs text-[var(--muted)] font-light">Based in Utah  Open to internships</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
