import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="w-full full-dvh flex items-center justify-center px-4">
      <div className="hero-gradient rounded-3xl border border-white/10 shadow-lg flex items-center justify-center
        w-full max-w-[1200px] min-h-[60dvh] sm:min-h-[70dvh] md:min-h-[75dvh] lg:min-h-[80dvh] p-4 sm:p-6">
        <div className="w-full h-full flex flex-col items-center justify-center p-6 sm:p-12 lg:p-20 text-center">
          <p className="text-sm text-[var(--muted)] mb-2">Hi, my name is</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Nicolas Soria  Web Developer in training
          </h1>
          <p className="mt-4 max-w-3xl text-[var(--fg)]/85 px-4">
            I build modern, accessible web experiences. Currently exploring
            frontend engineering and AI-powered workflows.
          </p>

          <div className="mt-6 flex items-center gap-4 justify-center">
            <Link
              href="#projects"
              className="inline-block bg-[var(--accent)] text-background px-4 py-2 rounded-md font-medium focus:outline-none focus:ring-4 focus:ring-[var(--ring)]"
            >
              View Projects
            </Link>

            <span className="text-sm text-[var(--muted)]">Based in Utah  Open to internships</span>
          </div>
        </div>
      </div>
    </section>
  );
}
