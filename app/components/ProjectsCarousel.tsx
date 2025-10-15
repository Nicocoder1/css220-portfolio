"use client"; // This is a client-side component
import { useState, useRef } from "react"; // React hooks
import { projects } from "../data/projects"; // Project data
import ProjectCard from "./ProjectCard"; // Card component
import { AnimatePresence, motion } from "framer-motion"; // Animation

const CARD_COUNT = projects.length; // How many projects

// Helper for looping carousel
function mod(n: number, m: number) {
  return ((n % m) + m) % m;
}

export default function ProjectsCarousel() {
  const [centerIdx, setCenterIdx] = useState(0); // Which card is in the middle
  const touchStartX = useRef<number | null>(null); // For swipe

  // Get the index for a card, looping around
  const getCardIdx = (offset: number) => mod(centerIdx + offset, CARD_COUNT);

  // Move carousel left
  const moveLeft = () => setCenterIdx((idx) => mod(idx - 1, CARD_COUNT));
  // Move carousel right
  const moveRight = () => setCenterIdx((idx) => mod(idx + 1, CARD_COUNT));

  // Start swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  // End swipe and move
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > 40) moveLeft();
    else if (delta < -40) moveRight();
    touchStartX.current = null;
  };

  // Render carousel
  return (
    <div className="w-full flex flex-col items-center">
      <div className="relative w-full flex items-center justify-center" style={{ minHeight: 320 }}>
        {/* Left arrow button */}
        <button
          aria-label="Previous project"
          onClick={moveLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/40 text-[#00FF41] rounded-full p-2 shadow hover:bg-black/60 transition"
        >
          &#8592;
        </button>
        {/* The 3 cards in the carousel */}
        <div
          className="flex w-full items-center justify-center gap-1"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {[ -1, 0, 1 ].map((offset) => {
            const idx = getCardIdx(offset); // Which card
            const isCenter = offset === 0; // Is it the middle card?
            return (
              <motion.div
                key={projects[idx].title}
                initial={{ x: offset * 80, scale: isCenter ? 1 : 0.75, opacity: isCenter ? 1 : 0.5, zIndex: isCenter ? 2 : 1 }}
                animate={{ x: offset * 80, scale: isCenter ? 1 : 0.75, opacity: isCenter ? 1 : 0.5, zIndex: isCenter ? 2 : 1 }}
                transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
                className={`${isCenter ? "" : "pointer-events-none"}`}
                style={{ width: 400, height: 400, minWidth: 400, maxWidth: 400, minHeight: 400, maxHeight: 400 }}
              >
                <ProjectCard {...projects[idx]} />
              </motion.div>
            );
          })}
        </div>
        {/* Right arrow button */}
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
