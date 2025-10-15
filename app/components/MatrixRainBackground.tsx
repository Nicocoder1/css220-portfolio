"use client";
import { useEffect, useRef } from "react";

const MATRIX_COLORS = {
  base: "#0D0208",
  trail: "#003B00",
  glyph: "#008F11",
  glow: "#00FF41",
};

function getRandomGlyph() {
  const glyphs = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズヅブプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return glyphs[Math.floor(Math.random() * glyphs.length)];
}

export default function MatrixRainBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId: number;

    // Responsive sizing
    function resizeCanvas() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Matrix rain setup
    const fontSize = 20;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    function draw() {
      if (!canvas || !ctx) return;
      ctx.globalAlpha = 1;
      ctx.fillStyle = MATRIX_COLORS.base;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalAlpha = 0.8;
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < columns; i++) {
        // Brightest glyph
        ctx.fillStyle = MATRIX_COLORS.glow;
        ctx.shadowColor = MATRIX_COLORS.glow;
        ctx.shadowBlur = 8;
        const glyph = getRandomGlyph();
        ctx.fillText(glyph, i * fontSize, drops[i] * fontSize);

        // Trail
        ctx.fillStyle = MATRIX_COLORS.glyph;
        ctx.shadowBlur = 0;
        for (let t = 1; t < 4; t++) {
          const trailGlyph = getRandomGlyph();
          ctx.globalAlpha = 0.5 - t * 0.12;
          ctx.fillText(trailGlyph, i * fontSize, (drops[i] - t) * fontSize);
        }
        ctx.globalAlpha = 0.8;

        // Move drop
        if (canvas && drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += Math.random() * 1.5 + 0.8;
      }
    }

    function animate() {
      draw();
      animationFrameId = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Fallback for reduced motion
  const prefersReducedMotion = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {prefersReducedMotion ? (
        <div
          style={{
            width: "100vw",
            height: "100vh",
            background: "linear-gradient(to bottom, #0D0208, #003B00, #008F11)",
          }}
        />
      ) : (
        <canvas
          ref={canvasRef}
          width={typeof window !== "undefined" ? window.innerWidth : 1920}
          height={typeof window !== "undefined" ? window.innerHeight : 1080}
          style={{
            display: "block",
            width: "100vw",
            height: "100vh",
            background: MATRIX_COLORS.base,
          }}
        />
      )}
    </div>
  );
}
