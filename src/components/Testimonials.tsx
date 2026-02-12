"use client";

import { useRef, useState, useEffect } from "react";

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

  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll);
    return () => el.removeEventListener("scroll", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = 380;
    el.scrollBy({ left: direction === "right" ? cardWidth : -cardWidth, behavior: "smooth" });
  };

  return (
    <section className="py-24 section-purple">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-16">
          <div className="max-w-3xl">
            <span className="section-label mb-4 block">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-[#FFFFFF]">Why Brands </span>
              <span className="gradient-text">Trust</span>
              <span className="text-[#FFFFFF]"> CXware</span>
            </h2>
            <p className="text-lg text-[#8B92A5]">
              See what keeps the best brands working on our platform
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 hover:border-white/40"
              aria-label="Scroll left"
            >
              <svg className="w-5 h-5 text-[#FFFFFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 hover:border-white/40"
              aria-label="Scroll right"
            >
              <svg className="w-5 h-5 text-[#FFFFFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scrollable Container */}
        <div className="relative">
          {/* Right fade indicator */}
          {canScrollRight && (
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#0F1322] to-transparent z-10 pointer-events-none" />
          )}
          {canScrollLeft && (
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#0F1322] to-transparent z-10 pointer-events-none" />
          )}

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-[#141829] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-white/10 flex-shrink-0 w-[350px] snap-start flex flex-col"
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
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2047FF] to-[#C873E5] flex items-center justify-center text-[#FFFFFF] font-bold text-lg">
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

        {/* Mobile scroll hint */}
        <div className="flex md:hidden items-center justify-center gap-2 mt-6">
          <svg className="w-4 h-4 text-[#8B92A5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-sm text-[#8B92A5]">Swipe for more</span>
        </div>
      </div>
    </section>
  );
}
