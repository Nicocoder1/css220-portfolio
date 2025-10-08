import React from "react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-black/5 dark:border-white/10 mt-8">
      <div className="max-w-5xl mx-auto py-6 px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-center sm:text-left">
          <span className="font-semibold">Nicolas Soria</span>
          <span className="ml-2">— I am a computer scientist and software engineer who loves technology, AI, and innovation.</span>
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://instagram.com/nikosoriag"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm hover:brightness-105 transition-[filter] duration-150"
            aria-label="Instagram"
          >
            {/* Instagram SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden>
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7.25a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5zm0 1.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5zM17.75 6a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" />
            </svg>
            <span className="hidden sm:inline">@nikosoriag</span>
          </a>

          <a
            href="https://facebook.com/nicolas.soria"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm hover:brightness-105 transition-[filter] duration-150"
            aria-label="Facebook"
          >
            {/* Facebook SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden>
              <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8.9v-2.9h1.6V9.4c0-1.6 1-2.5 2.4-2.5.7 0 1.4.05 2 .1v2.3h-1.1c-1 0-1.2.5-1.2 1.1v1.4h2.4l-.4 2.9h-2v7A10 10 0 0 0 22 12z" />
            </svg>
            <span className="hidden sm:inline">Nicolas Soria</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
