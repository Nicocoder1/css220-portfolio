"use client";

import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="w-full flex justify-between items-center py-4 px-6 border-b border-gray-200 dark:border-gray-700">
      <ul className="flex gap-6 text-sm sm:text-base">
        <li><Link href="#home" className="hover:text-red-500 transition">Home</Link></li>
        <li><Link href="#projects" className="hover:text-red-500 transition">Projects</Link></li>
      </ul>

      <div className="text-xl font-bold tracking-wide">
        <Link href="#home" className="hover:text-red-500 transition">Nicolas Soria</Link>
      </div>

      <ul className="flex gap-6 items-center text-sm sm:text-base">
        <li><Link href="#about" className="hover:text-red-500 transition">About</Link></li>
        <li><Link href="#contact" className="hover:text-red-500 transition">Contact</Link></li>
        <li>
          <button
            className="text-lg hover:text-red-500 transition"
            onClick={() => alert("Search feature coming soon!")}
          >
            🔍
          </button>
        </li>
      </ul>
    </nav>
  );
}