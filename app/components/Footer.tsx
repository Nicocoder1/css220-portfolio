import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full mt-8">
      {/* thin gradient border */}
      <div className="h-px w-full bg-gradient-to-r from-[var(--accent)]/20 via-transparent to-[var(--accent)]/0" />

      <div className="max-w-5xl mx-auto py-6 px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[var(--muted)] text-center sm:text-left">
          <span className="font-semibold">Nicolas Soria</span>
          <span className="ml-2">— I am a computer scientist and software engineer who loves technology, AI, and innovation.</span>
          <span className="block sm:inline sm:ml-2">© {year}</span>
        </p>

        <div className="flex items-center gap-4">
          <a
            href="mailto:nikosoriagomez@gmail.com"
            className="flex items-center gap-2 text-sm hover:brightness-105 transition-[filter] duration-150 text-[var(--muted)]"
            aria-label="Email"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden>
              <path d="M2.5 6.75A2.25 2.25 0 0 1 4.75 4.5h14.5A2.25 2.25 0 0 1 21.5 6.75v10.5A2.25 2.25 0 0 1 19.25 19.5H4.75A2.25 2.25 0 0 1 2.5 17.25V6.75zm2.7-.75L12 11.1l6.8-5.1H5.2z" />
            </svg>
            <span className="hidden sm:inline">nikosoriagomez@gmail.com</span>
          </a>

          <a
            href="https://instagram.com/nikosoriag"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm hover:brightness-105 transition-[filter] duration-150 text-[var(--muted)]"
            aria-label="Instagram"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden>
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7.25a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5zm0 1.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5zM17.75 6a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" />
            </svg>
            <span className="hidden sm:inline">@nikosoriag</span>
          </a>

          <a
            href="https://linkedin.com/in/nikosoriag"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm hover:brightness-105 transition-[filter] duration-150 text-[var(--muted)]"
            aria-label="LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden>
              <path d="M4.98 3.5C4.98 4.88 3.86 6 2.49 6S0 4.88 0 3.5 1.12 1 2.49 1 4.98 2.12 4.98 3.5zM0 8h4v13H0V8zm7.5 0h3.8v1.8h.05c.53-1 1.82-2 3.75-2 4 0 4.75 2.63 4.75 6.05V21H17v-6.1c0-1.52-.03-3.48-2.12-3.48-2.12 0-2.44 1.66-2.44 3.38V21H7.5V8z" />
            </svg>
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
