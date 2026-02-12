"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function AgentCTA() {
  return (
    <section id="apply" className="py-24" style={{ background: "var(--agent-bg-secondary)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal direction="scale">
          <div className="rounded-3xl p-12 md:p-16 relative overflow-hidden bg-gradient-to-br from-[#2047FF] to-[#7C3AED]">
            {/* Animated decorative circles */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-[var(--agent-bg-card)]/10 animate-breathe" />
              <div className="absolute top-1/4 right-1/4 w-16 h-16 rounded-full bg-[var(--agent-bg-card)]/10 animate-breathe" style={{ animationDelay: "1s" }} />
              <div className="absolute bottom-10 left-1/3 w-12 h-12 rounded-full bg-[var(--agent-bg-card)]/10 animate-breathe" style={{ animationDelay: "2s" }} />
            </div>

            <div className="relative z-10 max-w-2xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--agent-bg-card)] mb-6">
                Ready to start your journey?
              </h2>
              <p className="text-lg md:text-xl text-[var(--agent-bg-card)]/90 mb-8">
                See how CXware can boost your income and flexibility in as little as 30 days.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="mailto:support@cxwareagent.com"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--agent-bg-card)] font-semibold rounded-xl transition-all hover:shadow-lg hover:-translate-y-0.5"
                  style={{ color: "#2047FF" }}
                >
                  Start My Application
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-[var(--agent-bg-card)] font-semibold rounded-xl border-2 border-[var(--agent-bg-card)]/30 hover:bg-[var(--agent-bg-card)]/10 transition-all"
                >
                  For Businesses
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom link for businesses */}
        <ScrollReveal delay={200}>
          <div className="mt-12 text-center">
            <p style={{ color: "var(--agent-text-muted)" }} className="mb-2">Looking for scalable customer support for your business?</p>
            <Link href="/" className="text-[#2047FF] font-medium hover:underline inline-flex items-center gap-2">
              Learn more
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
