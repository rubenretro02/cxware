"use client";

import { useRef, useEffect, useCallback } from "react";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Thanks to CXware, our inbound sales conversion rates have improved dramatically. Their expert agents handle leads efficiently and close deals with care.",
      name: "Priya S.",
      role: "Insurance Agency Director",
    },
    {
      quote: "CXware's remote support team has been a game-changer for our business. Their professionalism and responsiveness have boosted our customer satisfaction significantly.",
      name: "Sarah M.",
      role: "Retail Business Owner",
    },
    {
      quote: "Partnering with CXware allowed us to scale our customer service quickly without sacrificing quality. Their agents truly feel like an extension of our own team.",
      name: "David L.",
      role: "Healthcare Services Manager",
    },
    {
      quote: "We saw a 40% reduction in response times within the first month. CXware agents are well-trained, professional, and genuinely care about our customers.",
      name: "Michael T.",
      role: "E-Commerce Operations Lead",
    },
    {
      quote: "CXware helped us handle a massive holiday surge without missing a beat. Their flexible staffing model is exactly what modern businesses need.",
      name: "Angela R.",
      role: "Director of Customer Experience",
    },
    {
      quote: "The quality of agents on CXware is unmatched. They integrate seamlessly with our tools and workflows from day one.",
      name: "Jason K.",
      role: "SaaS Support Manager",
    },
    {
      quote: "We reduced our cost-per-contact by 35% while actually improving CSAT scores. CXware delivers real results.",
      name: "Maria L.",
      role: "VP of Operations, FinTech",
    },
    {
      quote: "Their platform makes workforce management effortless. We simply upload our forecast and CXware handles the rest.",
      name: "Robert C.",
      role: "Call Center Director",
    },
  ];

  // Duplicate testimonials for seamless infinite loop
  const doubled = [...testimonials, ...testimonials];

  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const isPausedRef = useRef(false);
  const speedRef = useRef(0.6); // pixels per frame

  const animate = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    if (!isPausedRef.current) {
      el.scrollLeft += speedRef.current;

      // When we've scrolled past the first set, jump back seamlessly
      const halfWidth = el.scrollWidth / 2;
      if (el.scrollLeft >= halfWidth) {
        el.scrollLeft -= halfWidth;
      }
    }

    animationRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [animate]);

  const handleMouseEnter = () => {
    isPausedRef.current = true;
  };

  const handleMouseLeave = () => {
    isPausedRef.current = false;
  };

  return (
    <section className="py-24 section-purple">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="max-w-3xl">
          <span className="section-label mb-4 block">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            <span className="text-[#FFFFFF]">Why Brands </span>
            <span className="gradient-text">Trust</span>
            <span className="text-[#FFFFFF]"> CXware</span>
          </h2>
          <p className="text-lg text-[#8B92A5]">
            See what keeps the best brands working on our platform
          </p>
        </div>
      </div>

      {/* Full-width auto-scrolling strip */}
      <div
        className="relative overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleMouseEnter}
        onTouchEnd={handleMouseLeave}
      >
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0F1322] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0F1322] to-transparent z-10 pointer-events-none" />

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-hidden px-6"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {doubled.map((testimonial, i) => (
            <div
              key={`${testimonial.name}-${i}`}
              className="bg-[#141829] rounded-2xl p-8 shadow-lg transition-all border border-white/10 flex-shrink-0 w-[350px] flex flex-col hover:border-white/20"
            >
              <div className="mb-6">
                <svg className="w-10 h-10 text-[#C873E5]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-[#FFFFFF] text-lg mb-6 leading-relaxed flex-1">
                {testimonial.quote}
              </p>
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2047FF] to-[#C873E5] flex items-center justify-center text-[#FFFFFF] font-bold text-lg flex-shrink-0">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-[#FFFFFF]">{testimonial.name}</p>
                  <p className="text-sm text-[#8B92A5]">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
