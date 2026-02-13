"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function AgentsHero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Full background image - woman on the right */}
      <div className="absolute inset-0">
        <img
          src="/images/agent-hero-banner.jpg"
          alt="CXware Agent working remotely"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay - opaque on left (for text), transparent on right (shows person) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F1A] via-[#0B0F1A]/95 to-[#0B0F1A]/30" />
      </div>

      {/* Text Content - positioned on the left */}
      <div className="relative max-w-7xl mx-auto px-6 py-16 w-full">
        <div className="max-w-2xl">
          <ScrollReveal delay={0}>
            <span className="agent-section-label">
              Remote Customer Service Jobs - Work Around Your Schedule
            </span>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mt-6">
              <span className="text-white">Earn </span>
              <span className="agent-gradient-text">Competitive Pay</span>
              <span className="text-white"> on a schedule you </span>
              <span className="agent-gradient-text">Choose</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-xl max-w-xl leading-relaxed mt-8 text-[#c0c4d0]">
              Become a CXware agent and tap into flexible customer service shifts you can
              accept---or skip---with total freedom. Get credentialed fast, choose the hours
              you want, and take home pay that often beats standard rates.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link href="#apply" className="agent-btn-primary text-base py-4 px-8">
                Apply Now
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="#how-to-start" className="agent-btn-secondary text-base py-4 px-8">
                See How It Works
              </Link>
            </div>
          </ScrollReveal>

          {/* Social Proof */}
          <ScrollReveal delay={400}>
            <div className="flex items-center gap-4 mt-8">
              <div className="flex -space-x-3">
                <img
                  src="/images/call-center-agent-2.jpg"
                  alt="Agent"
                  className="w-11 h-11 rounded-full border-3 border-[#0B0F1A] object-cover shadow-md"
                />
                <img
                  src="/images/call-center-agent-1.jpg"
                  alt="Agent"
                  className="w-11 h-11 rounded-full border-3 border-[#0B0F1A] object-cover shadow-md"
                />
                <img
                  src="/images/woman-laptop.jpg"
                  alt="Agent"
                  className="w-11 h-11 rounded-full border-3 border-[#0B0F1A] object-cover shadow-md"
                />
                <img
                  src="/images/agent-headset-woman.jpg"
                  alt="Agent"
                  className="w-11 h-11 rounded-full border-3 border-[#0B0F1A] object-cover shadow-md"
                />
                <div className="w-11 h-11 rounded-full border-3 border-[#0B0F1A] bg-gradient-to-r from-[#2047FF] to-[#7C3AED] flex items-center justify-center text-white text-xs font-bold shadow-md">
                  +1K
                </div>
              </div>
              <p className="text-sm text-[#c0c4d0]">
                <span className="font-semibold text-white">1,000+ Agents</span> and growing
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
