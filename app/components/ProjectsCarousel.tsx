"use client";
import { useState, useRef } from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import { AnimatePresence, motion } from "framer-motion";

const CARD_COUNT = projects.length;

function mod(n: number, m: number) {
  return ((n % m) + m) % m;
}

export default function ProjectsCarousel() {
  const [centerIdx, setCenterIdx] = useState(0);
  const touchStartX = useRef<number | null>(null);

  // Infinite carousel logic
  const getCardIdx = (offset: number) => mod(centerIdx + offset, CARD_COUNT);

  // Arrow controls
  const moveLeft = () => setCenterIdx((idx) => mod(idx - 1, CARD_COUNT));
  const moveRight = () => setCenterIdx((idx) => mod(idx + 1, CARD_COUNT));

  // Touch/swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > 40) moveLeft();
    else if (delta < -40) moveRight();
    touchStartX.current = null;
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="relative w-full flex items-center justify-center" style={{ minHeight: 320 }}>
        {/* Left arrow */}
        <button
          aria-label="Previous project"
          onClick={moveLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/40 text-[#00FF41] rounded-full p-2 shadow hover:bg-black/60 transition"
        >
          &#8592;
        </button>
        {/* Carousel cards */}
        <div
          className="flex w-full items-center justify-center gap-0"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {[ -1, 0, 1 ].map((offset) => {
            const idx = getCardIdx(offset);
            const isCenter = offset === 0;
            return (
              <motion.div
                key={projects[idx].title}
                initial={{ scale: isCenter ? 1 : 0.85, opacity: isCenter ? 1 : 0.6, zIndex: isCenter ? 2 : 1 }}
                animate={{ scale: isCenter ? 1 : 0.85, opacity: isCenter ? 1 : 0.6, zIndex: isCenter ? 2 : 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 30 }}
                className={`mx-[-2vw] ${isCenter ? "" : "pointer-events-none"}`}
                style={{ width: isCenter ? "32vw" : "24vw", minWidth: 260, maxWidth: 400 }}
              >
                <ProjectCard {...projects[idx]} />
              </motion.div>
            );
          })}
        </div>
        {/* Right arrow */}
        <button
          aria-label="Next project"
          onClick={moveRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/40 text-[#00FF41] rounded-full p-2 shadow hover:bg-black/60 transition"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
}
