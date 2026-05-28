"use client";

import { useRef, useEffect, useCallback } from "react";
import ScrollReveal from "./ScrollReveal";

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
    <section className="py-28 lg:py-32 bg-[var(--bg-elev-1)] border-y border-[var(--line)] relative overflow-hidden">
      <div className="aurora-blob w-[480px] h-[480px] top-[20%] right-[-120px]" style={{ opacity: 0.16 }} />

      <div className="relative mx-auto max-w-[1400px] px-5 lg:px-8 mb-14">
        <ScrollReveal variant="up">
          <div className="grid grid-cols-12 gap-x-8 gap-y-4">
            <div className="col-span-12 lg:col-span-7 space-y-4">
              <span className="eyebrow-brand"><span>TESTIMONIALS</span></span>
              <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-bold leading-[1.04] tracking-[-0.025em] text-balance">
                Why brands <span className="gradient-text">trust CXware</span> to keep queues moving.
              </h2>
            </div>
          </div>
        </ScrollReveal>
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
              className="flex-shrink-0 w-[320px] lg:w-[380px] rounded-[var(--r-lg)] border border-[var(--line)] bg-[var(--bg)] p-7 flex flex-col hover:border-[var(--line-strong)] hover:-translate-y-1 transition-all duration-500 ease-[var(--ease-cinema)]"
            >
              <svg className="w-7 h-7 mb-5" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id={`quote-grad-${i}`} x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#2047FF" />
                    <stop offset="100%" stopColor="#C873E5" />
                  </linearGradient>
                </defs>
                <path
                  d="M14 21v-7.4c0-5.7 3.7-9.6 9-10.6l1 2.1c-2.4.9-4 3.6-4 5.9h4v10h-10zm-14 0v-7.4c0-5.7 3.7-9.6 9-10.6l1 2.1c-2.4.9-4 3.6-4 5.9h4v10h-10z"
                  fill={`url(#quote-grad-${i})`}
                />
              </svg>
              <blockquote className="text-[15.5px] text-[var(--fg)] leading-[1.55] text-pretty flex-1">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-[var(--line)] flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                  style={{ background: "var(--grad)" }}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-[14px] text-[var(--fg)] font-semibold">{t.name}</div>
                  <div className="mono text-[10.5px] uppercase tracking-[0.12em] text-[var(--fg-dim)]">
                    {t.role}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
