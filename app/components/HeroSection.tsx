"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="w-full full-dvh flex items-center justify-center px-4 mt-2 sm:mt-4 md:mt-6 lg:mt-8">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
  className="relative rounded-3xl border border-[var(--accent)] bg-[radial-gradient(circle at 50% 50%,rgba(13,2,8,0.92) 60%,rgba(0,255,65,0.18) 100%)] backdrop-blur-xl shadow-[0_0_0_4px_var(--accent),0_8px_32px_-8px_rgba(0,255,65,0.18)] flex items-center justify-center w-full max-w-[1200px] min-h-[60dvh] sm:min-h-[70dvh] md:min-h-[75dvh] lg:min-h-[80dvh] p-4 sm:p-6 overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-1/3 pointer-events-none z-0" style={{background: "linear-gradient(180deg,rgba(120,180,255,0.18) 0%,rgba(255,255,255,0) 100%)"}}></div>
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-6 sm:p-12 lg:p-20 text-center">
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
