"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function Requirements() {
  const requirements = [
    "3+ years of customer-service experience",
    "Empathy & problem-solving mindset",
    "Reliability: on-time log-ins and clear communication",
    "Tech readiness: modern computer, USB headset, hard-wired internet (25 Mbps+)",
    "Quiet workspace for professional calls",
  ];

  return (
    <section id="requirements" className="py-24" style={{ background: "var(--agent-bg-secondary)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <div className="space-y-8">
              <div>
                <span className="agent-section-label mb-4 block">Agent Requirements</span>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  <span style={{ color: "var(--agent-text-heading)" }}>Are you the next </span>
                  <span className="agent-gradient-text">CXware agent</span>
                  <span style={{ color: "var(--agent-text-heading)" }}>?</span>
                </h2>
                <p className="text-lg" style={{ color: "var(--agent-text-secondary)" }}>
                  The best agents on the platform are dedicated and passionate professionals that truly enjoy serving customers.
                </p>
              </div>

              <Link href="#apply" className="agent-btn-primary inline-flex">
                Apply Now
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              <div className="space-y-4">
                <h3 className="font-semibold" style={{ color: "var(--agent-text-heading)" }}>We look for</h3>
                {requirements.map((req, index) => (
                  <ScrollReveal key={req} delay={index * 80}>
                    <div className="flex items-start gap-3 py-3" style={{ borderBottom: "1px solid var(--agent-border)" }}>
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#2047FF] to-[#7C3AED] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3.5 h-3.5 text-[var(--agent-bg-card)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span style={{ color: "var(--agent-text-secondary)" }}>{req}</span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="relative">
              {/* Image collage instead of plain gradient box */}
              <div className="rounded-3xl overflow-hidden relative aspect-square shadow-2xl">
                <img
                  src="/images/call-center-team.jpg"
                  alt="CXware agents working together"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2047FF]/80 via-[#2047FF]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-[var(--agent-bg-card)]">
                  <div className="text-7xl font-bold mb-4">1,000+</div>
                  <p className="text-xl text-[var(--agent-bg-card)]/90">Agents already working with CXware</p>
                </div>
              </div>


            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
