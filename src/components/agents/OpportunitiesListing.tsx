"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { opportunities } from "@/lib/opportunities";

export default function OpportunitiesListing() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-16 overflow-hidden" style={{ background: "var(--agent-bg-primary)" }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#2047FF]/[0.04] blur-3xl animate-breathe" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#7C3AED]/[0.04] blur-3xl animate-breathe" style={{ animationDelay: "2s" }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <ScrollReveal delay={0}>
            <nav className="mb-8 flex items-center gap-2 text-sm" style={{ color: "var(--agent-text-muted)" }}>
              <Link href="/agents" className="hover:text-[#2047FF] transition-colors">For Agents</Link>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span style={{ color: "var(--agent-text-heading)" }}>Opportunities</span>
            </nav>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="text-center max-w-3xl mx-auto">
              <span className="agent-section-label mb-4 block">Remote Opportunities</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span style={{ color: "var(--agent-text-heading)" }}>Find Your Perfect </span>
                <span className="agent-gradient-text">Remote Role</span>
              </h1>
              <p className="text-xl leading-relaxed" style={{ color: "var(--agent-text-secondary)" }}>
                Explore all available remote opportunities with CXware. Each role offers flexible scheduling, competitive pay, and the freedom to work from home.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Opportunities Grid */}
      <section className="py-20" style={{ background: "var(--agent-bg-secondary)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {opportunities.map((opp, index) => (
              <ScrollReveal key={opp.slug} delay={index * 100}>
                <Link href={`/agents/opportunities/${opp.slug}`} className="block h-full">
                  <div className="agent-card overflow-hidden h-full flex flex-col">
                    <div className="h-52 overflow-hidden relative">
                      <img
                        src={opp.image}
                        alt={opp.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1.5 text-xs font-semibold rounded-full bg-[var(--agent-bg-card)] text-[#2047FF] shadow-md">
                          {opp.type}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold mb-2" style={{ color: "var(--agent-text-heading)" }}>
                        {opp.title}
                      </h3>
                      <p className="text-sm mb-3 font-bold text-[#2047FF]">{opp.pay}</p>
                      <p className="text-sm mb-6 flex-1" style={{ color: "var(--agent-text-secondary)" }}>
                        {opp.heroSubtitle}. {opp.description.slice(0, 120)}...
                      </p>

                      {/* Quick skills preview */}
                      <div className="flex flex-wrap gap-2 mb-5">
                        {opp.skills.slice(0, 3).map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-1 text-xs rounded-full bg-gradient-to-r from-[#2047FF]/5 to-[#7C3AED]/5"
                            style={{ color: "var(--agent-text-primary)" }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-4" style={{ borderTop: "1px solid var(--agent-border)" }}>
                        <div className="flex items-center gap-2 text-sm" style={{ color: "var(--agent-text-muted)" }}>
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          Remote - USA
                        </div>
                        <span className="text-[#2047FF] text-sm font-semibold flex items-center gap-1">
                          Learn More
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24" style={{ background: "var(--agent-bg-primary)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal direction="scale">
            <div className="rounded-3xl p-12 md:p-16 relative overflow-hidden bg-gradient-to-br from-[#2047FF] to-[#7C3AED]">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-[var(--agent-bg-card)]/10 animate-breathe" />
                <div className="absolute top-1/4 right-1/4 w-16 h-16 rounded-full bg-[var(--agent-bg-card)]/10 animate-breathe" style={{ animationDelay: "1s" }} />
                <div className="absolute bottom-10 left-1/3 w-12 h-12 rounded-full bg-[var(--agent-bg-card)]/10 animate-breathe" style={{ animationDelay: "2s" }} />
              </div>

              <div className="relative z-10 text-center max-w-2xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-[var(--agent-bg-card)] mb-6">
                  {"Don't see the right fit?"}
                </h2>
                <p className="text-lg md:text-xl text-[var(--agent-bg-card)]/90 mb-8">
                  New opportunities are added regularly. Apply now and we'll match you with the best programs based on your skills and experience.
                </p>
                <Link
                  href="mailto:support@cxwareagent.com"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--agent-bg-card)] font-semibold rounded-xl transition-all hover:shadow-lg hover:-translate-y-0.5"
                  style={{ color: "#2047FF" }}
                >
                  Apply Now
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
