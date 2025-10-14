"use client";

import React, { useEffect, useRef } from "react";

type Props = React.PropsWithChildren<React.HTMLAttributes<HTMLElement> & { className?: string }>;

export default function AnimatedSection({ children, className, ...rest }: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const obs = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.4) {
            el.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: [0, 0.4, 1] }
    );

    obs.observe(el);

    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className={`${className ?? ""} reveal`} {...rest}>
      {children}
    </section>
  );
}

// hola profe

