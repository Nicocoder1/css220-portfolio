"use client";

import { useEffect, useRef, useState } from "react";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function NavBar() {
  const [activeHash, setActiveHash] = useState<string>("#home");
  const [theme, setTheme] = useState<string>(() => {
    if (typeof document === "undefined") return "dark";
    return document.documentElement.dataset.theme ?? "dark";
  });
  const obsRef = useRef<IntersectionObserver | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Initialize theme from localStorage if present
    const stored = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    if (stored) {
      document.documentElement.dataset.theme = stored;
      setTheme(stored);
    } else {
      const current = document.documentElement.dataset.theme ?? "dark";
      document.documentElement.dataset.theme = current;
      setTheme(current);
    }

    // Scroll spy using IntersectionObserver
    const ids = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];

    if (sections.length > 0) {
      obsRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveHash(`#${entry.target.id}`);
            }
          });
        },
        { root: null, rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75] }
      );

      sections.forEach((el) => obsRef.current?.observe(el));
    }

    return () => {
      obsRef.current?.disconnect();
    };
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // ignore storage errors
    }
    setTheme(next);
  }

  return (
    <nav className="sticky top-0 z-40 backdrop-blur bg-white/3 dark:bg-black/20 border-b border-black/5 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <div className="flex items-center gap-6">
          <ul className="hidden sm:flex gap-6 text-sm sm:text-base">
            {NAV_LINKS.slice(0, 2).map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`transition pb-1 ${
                    activeHash === link.href
                      ? "text-[var(--accent)] border-b-2 border-[var(--accent)]"
                      : "text-inherit hover:brightness-105"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-lg sm:text-xl font-bold tracking-wide">
          <a href="#home" className="inline-block">
            Nicolas Soria
          </a>
        </div>

        <div className="flex items-center gap-4">
          <ul className="hidden sm:flex gap-6 items-center text-sm sm:text-base">
            {NAV_LINKS.slice(2).map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`transition pb-1 ${
                    activeHash === link.href
                      ? "text-[var(--accent)] border-b-2 border-[var(--accent)]"
                      : "text-inherit hover:brightness-105"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Theme toggle always visible */}
          <button
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="ml-2 p-2 rounded-full bg-white/6 dark:bg-black/30 hover:brightness-105 transition"
            title="Toggle theme"
          >
            {theme === "dark" ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden>
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden>
                <path d="M6.76 4.84l-1.8-1.79L3.17 4.84l1.79 1.8 1.8-1.8zM1 13h3v-2H1v2zm10 9h2v-3h-2v3zm7.24-2.84l1.79 1.79 1.79-1.79-1.79-1.8-1.79 1.8zM20 11v2h3v-2h-3zM4.22 19.78l1.79-1.79-1.79-1.8-1.79 1.8 1.79 1.79zM12 5a7 7 0 0 0 0 14 7 7 0 0 0 0-14z" />
              </svg>
            )}
          </button>

          {/* Hamburger (mobile only) */}
          <button
            className="sm:hidden ml-2 p-2"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsOpen((s) => !s)}
          >
            <span className={`block w-5 h-[2px] bg-current transform transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
            <span className={`block w-5 h-[2px] bg-current my-1 transition-opacity duration-200 ${isOpen ? "opacity-0" : "opacity-100"}`} />
            <span className={`block w-5 h-[2px] bg-current transform transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsOpen(false)}
        aria-hidden={!isOpen}
      />

      {/* Mobile menu panel */}
      <div className="relative">
        <div
          id="mobile-menu"
          className={`absolute top-full left-0 w-full bg-[var(--bg)] backdrop-blur border-t border-white/10 z-50 overflow-hidden transition-all duration-300 ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"}`}
          style={{ willChange: "transform, opacity" }}
        >
          <div className="px-6 py-4 flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="py-2 text-sm font-medium hover:text-[var(--accent)] transition"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
