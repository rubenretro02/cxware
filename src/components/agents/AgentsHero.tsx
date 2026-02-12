"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function AgentsHero() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-24 overflow-hidden"
      style={{ background: "var(--agent-bg-primary)" }}
    >
      {/* Decorative background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#2047FF]/[0.04] blur-3xl animate-breathe" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#7C3AED]/[0.04] blur-3xl animate-breathe" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#2047FF]/[0.02] blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <ScrollReveal delay={0}>
              <span className="agent-section-label">Remote Customer Service Jobs - Work Around Your Schedule</span>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span style={{ color: "var(--agent-text-heading)" }}>Earn </span>
                <span className="agent-gradient-text">Competitive Pay</span>
                <span style={{ color: "var(--agent-text-heading)" }}> on a schedule you </span>
                <span className="agent-gradient-text">Choose</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-xl max-w-xl leading-relaxed" style={{ color: "var(--agent-text-secondary)" }}>
                Become a CXware agent and tap into flexible customer service shifts you can accept—or skip—with total freedom. Get credentialed fast, choose the hours you want, and take home pay that often beats standard rates.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="flex flex-wrap gap-4">
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
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  <img
                    src="/images/call-center-agent-2.jpg"
                    alt="Agent"
                    className="w-11 h-11 rounded-full border-3 border-[var(--agent-bg-primary)] object-cover shadow-md"
                  />
                  <img
                    src="/images/call-center-agent-1.jpg"
                    alt="Agent"
                    className="w-11 h-11 rounded-full border-3 border-[var(--agent-bg-primary)] object-cover shadow-md"
                  />
                  <img
                    src="/images/woman-laptop.jpg"
                    alt="Agent"
                    className="w-11 h-11 rounded-full border-3 border-[var(--agent-bg-primary)] object-cover shadow-md"
                  />
                  <img
                    src="/images/agent-headset-woman.jpg"
                    alt="Agent"
                    className="w-11 h-11 rounded-full border-3 border-[var(--agent-bg-primary)] object-cover shadow-md"
                  />
                  <div className="w-11 h-11 rounded-full border-3 border-[var(--agent-bg-primary)] bg-gradient-to-r from-[#2047FF] to-[#7C3AED] flex items-center justify-center text-[var(--agent-bg-card)] text-xs font-bold shadow-md">
                    +1K
                  </div>
                </div>
                <p className="text-sm" style={{ color: "var(--agent-text-secondary)" }}>
                  <span className="font-semibold" style={{ color: "var(--agent-text-heading)" }}>1,000+ Agents</span> and growing
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Content - Agent Image with floating elements */}
          <ScrollReveal direction="right" delay={200} className="relative hidden lg:block">
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl animate-glow-pulse">
                <img
                  src="/images/agent-headset-woman.jpg"
                  alt="CXware Agent working with headset"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2047FF]/10 to-transparent" />
              </div>

              {/* Floating pay card */}
              <div className="absolute -bottom-6 right-8 rounded-2xl p-4 shadow-xl border animate-float-slow agent-card" style={{ animationDelay: "1s" }}>
                <div>
                  <p className="font-bold text-lg" style={{ color: "var(--agent-text-heading)" }}>$14-$20/hr</p>
                  <p className="text-sm" style={{ color: "var(--agent-text-secondary)" }}>Competitive Pay</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
