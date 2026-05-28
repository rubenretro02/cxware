"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Animated number that counts up from 0 → `value` when scrolled into view.
 * Uses cinema ease-out so the climb feels weighty at the start and
 * settles smoothly at the end.
 */
export default function Counter({
  value,
  format,
  durationMs = 1500,
  className = "",
}: {
  value: number;
  format?: (n: number) => string;
  durationMs?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            io.disconnect();
            const t0 = performance.now();
            let raf = 0;
            const tick = (now: number) => {
              const t = Math.min(1, (now - t0) / durationMs);
              // cinema ease-out (1 - (1-t)^3)
              const eased = 1 - Math.pow(1 - t, 3);
              setN(value * eased);
              if (t < 1) raf = requestAnimationFrame(tick);
            };
            raf = requestAnimationFrame(tick);
            return () => cancelAnimationFrame(raf);
          }
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, durationMs]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {format ? format(n) : Math.round(n)}
    </span>
  );
}
