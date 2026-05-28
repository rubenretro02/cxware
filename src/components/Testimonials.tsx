"use client";

import { useRef, useEffect, useCallback } from "react";

const testimonials = [
  {
    quote:
      "Inbound sales conversion improved dramatically. Their agents handle leads efficiently and close with care.",
    name: "Priya S.",
    role: "Insurance Agency Director",
  },
  {
    quote:
      "CXware's remote support has been a game-changer. Professionalism and responsiveness lifted our CSAT.",
    name: "Sarah M.",
    role: "Retail Business Owner",
  },
  {
    quote:
      "We scaled support quickly without sacrificing quality. The agents feel like an extension of our own team.",
    name: "David L.",
    role: "Healthcare Services Manager",
  },
  {
    quote:
      "40% reduction in response times within the first month. The agents are well-trained and genuinely care.",
    name: "Michael T.",
    role: "E-Commerce Operations Lead",
  },
  {
    quote:
      "CXware absorbed a massive holiday surge without missing a beat. Their flexible staffing model is exactly right.",
    name: "Angela R.",
    role: "Director of CX",
  },
  {
    quote:
      "Quality of agents on CXware is unmatched. They integrate seamlessly with our tools from day one.",
    name: "Jason K.",
    role: "SaaS Support Manager",
  },
  {
    quote:
      "We reduced cost-per-contact by 35% and CSAT went up. CXware delivers real, measurable results.",
    name: "Maria L.",
    role: "VP Operations, FinTech",
  },
  {
    quote:
      "Workforce management is effortless. We upload our forecast and CXware handles the rest.",
    name: "Robert C.",
    role: "Call Center Director",
  },
];

export default function Testimonials() {
  const doubled = [...testimonials, ...testimonials];

  const scrollRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const pausedRef = useRef(false);
  const speedRef = useRef(0.45);

  const animate = useCallback(() => {
    const el = scrollRef.current;
    if (el && !pausedRef.current) {
      el.scrollLeft += speedRef.current;
      const half = el.scrollWidth / 2;
      if (el.scrollLeft >= half) el.scrollLeft -= half;
    }
    rafRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [animate]);

  return (
    <section className="py-28 lg:py-32 bg-[var(--bg-elev-1)] border-y border-[var(--line)]">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-8 mb-14">
        <div className="grid grid-cols-12 gap-x-8 gap-y-6">
          <div className="col-span-12 lg:col-span-7">
            <h2 className="text-[clamp(1.8rem,3.8vw,3rem)] font-medium leading-[1.04] tracking-[-0.025em] text-balance">
              Brands that trust CXware to keep their queues moving.
            </h2>
          </div>
        </div>
      </div>

      <div
        className="relative marquee-mask"
        onMouseEnter={() => (pausedRef.current = true)}
        onMouseLeave={() => (pausedRef.current = false)}
        onTouchStart={() => (pausedRef.current = true)}
        onTouchEnd={() => (pausedRef.current = false)}
      >
        <div
          ref={scrollRef}
          className="flex gap-4 lg:gap-5 overflow-x-hidden px-5 lg:px-8"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {doubled.map((t, i) => (
            <figure
              key={`${t.name}-${i}`}
              className="flex-shrink-0 w-[320px] lg:w-[380px] panel p-7 flex flex-col"
            >
              <svg className="w-6 h-6 text-[var(--accent)] mb-5 opacity-90" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14 21v-7.4c0-5.7 3.7-9.6 9-10.6l1 2.1c-2.4.9-4 3.6-4 5.9h4v10h-10zm-14 0v-7.4c0-5.7 3.7-9.6 9-10.6l1 2.1c-2.4.9-4 3.6-4 5.9h4v10h-10z" />
              </svg>
              <blockquote className="text-[15.5px] text-[var(--fg)] leading-[1.55] text-pretty flex-1">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-[var(--line)] flex items-baseline justify-between gap-4">
                <span className="text-[14px] text-[var(--fg)] font-medium">{t.name}</span>
                <span className="mono text-[11px] uppercase tracking-[0.12em] text-[var(--fg-dim)] text-right">
                  {t.role}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
