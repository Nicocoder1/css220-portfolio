"use client";

import { useEffect, useState, useRef } from "react";
// ...existing code...
// ...existing code...
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/uses", label: "Uses" },
];
    // { href: "/contact", label: "Contact" },

export default function NavBar() {
  // Track scroll direction for hide/reveal
  const [hideNav, setHideNav] = useState(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();
  const activePath = pathname ?? "/";
  const isActive = (href: string) => {
    if (href === "/") return activePath === "/";
    return activePath === href || activePath.startsWith(href + "/");
  };
  const [theme, setTheme] = useState<string>(() => {
    if (typeof document === "undefined") return "dark";
    return document.documentElement.dataset.theme ?? "dark";
  });
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Scroll effect for navbar: blur and hide on scroll down
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
      const threshold = 50;
      if (window.scrollY > lastScrollY.current && window.scrollY > threshold) {
        setHideNav(true); // scrolling down
      } else {
        setHideNav(false); // scrolling up or near top
      }
      lastScrollY.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // set initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    // Update <html> element's data-theme attribute for CSS variables
    if (typeof window !== "undefined") {
      document.documentElement.setAttribute("data-theme", next);
    }
    try {
      localStorage.setItem("theme", next);
    } catch {
      // ignore storage errors
    }
    setTheme(next);
  }

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-[rgba(0,0,0,0.45)] backdrop-blur-md border-b border-[#78b4ff]/20 shadow-[0_0_10px_#00FF41]/20 transition-all duration-300 transition-transform ease-in-out relative`}
      style={{
        WebkitBackdropFilter: 'blur(12px)',
        backdropFilter: 'blur(12px)',
        transition: 'transform 0.3s ease-in-out, background 0.3s, backdrop-filter 0.3s',
        transform: hideNav ? 'translateY(-100%)' : 'translateY(0)'
      }}
    >
  {/* Vertical gradient highlight at top, fading down like hero section */}
  {/* Slightly light blue vertical gradient highlight at top, fading down like hero section */}
  <div className="absolute top-0 left-0 w-full h-7 pointer-events-none z-0" style={{background: "linear-gradient(180deg,rgba(120,180,255,0.18) 0%,rgba(255,255,255,0) 100%)"}}></div>
  <div className="h-px w-full bg-[#003B00] absolute top-full left-0" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <div className="flex items-center gap-6">
          <ul className="hidden sm:flex gap-6 text-sm sm:text-base">
            {NAV_LINKS.slice(0, 2).map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`transition-all duration-300 pb-1 px-2 rounded-md
                    hover:scale-105 hover:px-4 hover:text-lg active:scale-105 active:px-4 active:text-lg
                    ${isActive(link.href)
                      ? "text-[var(--accent)] bg-gradient-to-r from-[#00FF41]/80 to-transparent bg-[length:100%_2px] bg-[position:0_100%] bg-no-repeat"
                      : "text-inherit hover:brightness-105"}
                  `}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-lg sm:text-xl font-bold tracking-wide">
          <Link href="/" className="inline-block">
            Nicolas Soria
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <ul className="hidden sm:flex gap-6 items-center text-sm sm:text-base">
            {NAV_LINKS.slice(2).map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`transition-all duration-300 pb-1 px-2 rounded-md
                    hover:scale-105 hover:px-4 hover:text-lg active:scale-105 active:px-4 active:text-lg
                    ${isActive(link.href)
                      ? "text-[var(--accent)] bg-gradient-to-r from-[#00FF41]/80 to-transparent bg-[length:100%_2px] bg-[position:0_100%] bg-no-repeat"
                      : "text-inherit hover:brightness-105"}
                  `}
                >
                  {link.label}
                </Link>
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
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`py-2 text-sm font-medium transition-all duration-300 px-2 rounded-md
                  hover:scale-105 hover:px-4 hover:text-lg active:scale-105 active:px-4 active:text-lg hover:text-[var(--accent)]
                  ${isActive(link.href) ? 'text-[var(--accent)]' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
//this is the end of the nav bar component