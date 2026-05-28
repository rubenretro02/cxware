"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Variant = "up" | "fade" | "blur" | "stagger";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  variant?: Variant;
  /** Legacy alias kept so older sub-pages keep compiling */
  direction?: "up" | "left" | "right" | "scale";
  delay?: number;
  threshold?: number;
  once?: boolean;
  as?: React.ElementType;
}

export default function ScrollReveal({
  children,
  className = "",
  variant,
  direction,
  delay = 0,
  threshold = 0.15,
  once = true,
  as: Tag = "div",
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            if (delay > 0) {
              setTimeout(() => el.classList.add("is-visible"), delay);
            } else {
              el.classList.add("is-visible");
            }
            if (once) io.unobserve(el);
          } else if (!once) {
            el.classList.remove("is-visible");
          }
        }
      },
      { threshold, rootMargin: "0px 0px -50px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay, once, threshold]);

  // Resolve which class to use: new `variant` first, fall back to legacy `direction`
  const resolved: Variant | "legacy-left" | "legacy-right" | "legacy-scale" =
    variant ??
    (direction === "left"
      ? "legacy-left"
      : direction === "right"
        ? "legacy-right"
        : direction === "scale"
          ? "legacy-scale"
          : "up");

  const baseClass =
    resolved === "stagger"
      ? "stagger"
      : resolved === "legacy-left"
        ? "scroll-reveal-left"
        : resolved === "legacy-right"
          ? "scroll-reveal-right"
          : resolved === "legacy-scale"
            ? "scroll-reveal-scale"
            : `reveal-${resolved}`;

  return (
    <Tag ref={ref} className={`${baseClass} ${className}`}>
      {children}
    </Tag>
  );
}
