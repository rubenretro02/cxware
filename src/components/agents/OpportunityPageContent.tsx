"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import type { Opportunity } from "@/lib/opportunities";
import { getOtherOpportunities } from "@/lib/opportunities";

export default function OpportunityPageContent({ opportunity }: { opportunity: Opportunity }) {
  const others = getOtherOpportunities(opportunity.slug);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-28 pb-16 overflow-hidden" style={{ background: "var(--agent-bg-primary)" }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#2047FF]/[0.04] blur-3xl animate-breathe" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#7C3AED]/[0.04] blur-3xl animate-breathe" style={{ animationDelay: "2s" }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Breadcrumb */}
          <ScrollReveal delay={0}>
            <nav className="mb-8 flex items-center gap-2 text-sm" style={{ color: "var(--agent-text-muted)" }}>
              <Link href="/agents" className="hover:text-[#2047FF] transition-colors">For Agents</Link>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <Link href="/agents/opportunities" className="hover:text-[#2047FF] transition-colors">Opportunities</Link>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span style={{ color: "var(--agent-text-heading)" }}>{opportunity.title}</span>
            </nav>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <ScrollReveal delay={100}>
                <span className="agent-section-label">{opportunity.type} &middot; {opportunity.pay}</span>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span style={{ color: "var(--agent-text-heading)" }}>{opportunity.heroTitle.split(" ").slice(0, -1).join(" ")} </span>
                  <span className="agent-gradient-text">{opportunity.heroTitle.split(" ").slice(-1)}</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <p className="text-xl leading-relaxed" style={{ color: "var(--agent-text-secondary)" }}>
                  {opportunity.heroSubtitle}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <div className="flex flex-wrap gap-4">
                  <Link href="#apply" className="agent-btn-primary text-base py-4 px-8">
                    Apply Now
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link href="/agents/opportunities" className="agent-btn-secondary text-base py-4 px-8">
                    View All Opportunities
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Content - Image */}
            <ScrollReveal direction="right" delay={200} className="hidden lg:block">
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={opportunity.image}
                    alt={opportunity.title}
                    className="w-full h-[420px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2047FF]/10 to-transparent rounded-3xl" />
                </div>
                <div className="absolute -bottom-4 right-8 rounded-2xl p-4 shadow-xl border animate-float-slow agent-card">
                  <p className="font-bold text-lg" style={{ color: "var(--agent-text-heading)" }}>{opportunity.pay}</p>
                  <p className="text-sm" style={{ color: "var(--agent-text-secondary)" }}>Competitive Pay</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-20" style={{ background: "var(--agent-bg-secondary)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-12">
              <ScrollReveal>
                <div>
                  <span className="agent-section-label mb-4 block">About This Opportunity</span>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "var(--agent-text-heading)" }}>
                    {opportunity.heroSubtitle}
                  </h2>
                  <p className="text-lg leading-relaxed" style={{ color: "var(--agent-text-secondary)" }}>
                    {opportunity.description}
                  </p>
                </div>
              </ScrollReveal>

              {/* Skills & Experience */}
              <ScrollReveal delay={100}>
                <div className="agent-card p-8">
                  <h3 className="text-xl font-bold mb-4" style={{ color: "var(--agent-text-heading)" }}>
                    Skills & Experience
                  </h3>
                  <p className="mb-6" style={{ color: "var(--agent-text-secondary)" }}>
                    {opportunity.skillsIntro}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {opportunity.skills.map((skill) => (
                      <div key={skill} className="flex items-start gap-3">
                        <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-[#2047FF] to-[#7C3AED] flex items-center justify-center">
                          <svg className="w-3 h-3 text-[#FFFFFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm" style={{ color: "var(--agent-text-primary)" }}>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* What You'll Do */}
              <ScrollReveal delay={200}>
                <div className="agent-card p-8">
                  <h3 className="text-xl font-bold mb-6" style={{ color: "var(--agent-text-heading)" }}>
                    What You'll Do
                  </h3>
                  <div className="space-y-4">
                    {opportunity.whatYouDo.map((item, index) => (
                      <div key={item} className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-r from-[#2047FF]/10 to-[#7C3AED]/10 flex items-center justify-center">
                          <span className="text-sm font-bold text-[#2047FF]">{index + 1}</span>
                        </div>
                        <p style={{ color: "var(--agent-text-primary)" }}>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Great If You */}
              <ScrollReveal delay={300}>
                <div className="agent-card p-8">
                  <h3 className="text-xl font-bold mb-6" style={{ color: "var(--agent-text-heading)" }}>
                    Great If You...
                  </h3>
                  <div className="space-y-3">
                    {opportunity.traits.map((trait) => (
                      <div key={trait} className="flex items-start gap-3">
                        <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#2047FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span style={{ color: "var(--agent-text-primary)" }}>{trait}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* Quick Info Card */}
              <ScrollReveal delay={100}>
                <div className="agent-card p-6 sticky top-28">
                  <h3 className="text-lg font-bold mb-5" style={{ color: "var(--agent-text-heading)" }}>
                    Quick Overview
                  </h3>

                  <div className="space-y-5">
                    <div className="flex items-start gap-3">
                      <div className="agent-icon-box flex-shrink-0" style={{ width: "2.5rem", height: "2.5rem" }}>
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--agent-text-muted)" }}>Pay Range</p>
                        <p className="font-bold text-[#2047FF]">{opportunity.pay}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="agent-icon-box flex-shrink-0" style={{ width: "2.5rem", height: "2.5rem" }}>
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--agent-text-muted)" }}>Type</p>
                        <p className="font-semibold" style={{ color: "var(--agent-text-heading)" }}>{opportunity.type}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="agent-icon-box flex-shrink-0" style={{ width: "2.5rem", height: "2.5rem" }}>
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--agent-text-muted)" }}>Location</p>
                        <p className="font-semibold" style={{ color: "var(--agent-text-heading)" }}>Remote - USA</p>
                      </div>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="mt-6 pt-5" style={{ borderTop: "1px solid var(--agent-border)" }}>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--agent-text-muted)" }}>
                      {opportunity.hoursLabel}
                    </p>
                    <ul className="space-y-2">
                      {opportunity.hours.map((hour) => (
                        <li key={hour} className="text-sm flex items-start gap-2" style={{ color: "var(--agent-text-primary)" }}>
                          <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#2047FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {hour}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Channels */}
                  {opportunity.channels && (
                    <div className="mt-6 pt-5" style={{ borderTop: "1px solid var(--agent-border)" }}>
                      <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--agent-text-muted)" }}>
                        Support Channels
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {opportunity.channels.map((channel) => (
                          <span
                            key={channel}
                            className="px-3 py-1.5 text-xs font-semibold rounded-full bg-gradient-to-r from-[#2047FF]/10 to-[#7C3AED]/10 text-[#2047FF]"
                          >
                            {channel}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Apply CTA */}
                  <div className="mt-6">
                    <Link href="#apply" className="agent-btn-primary w-full justify-center py-4">
                      Apply Now
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Requirements */}
      <section className="py-20" style={{ background: "var(--agent-bg-primary)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="agent-section-label mb-4 block">What You Need</span>
              <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "var(--agent-text-heading)" }}>
                Technical Requirements
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="max-w-3xl mx-auto agent-card p-8">
              <div className="grid sm:grid-cols-2 gap-4">
                {opportunity.technicalRequirements.map((req) => (
                  <div key={req} className="flex items-start gap-3">
                    <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#7C3AED]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                    <span className="text-sm" style={{ color: "var(--agent-text-primary)" }}>{req}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Perks Section */}
      <section className="py-20" style={{ background: "var(--agent-bg-secondary)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="agent-section-label mb-4 block">Benefits</span>
              <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "var(--agent-text-heading)" }}>
                {"What's In It For You"}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {opportunity.perks.map((perk, index) => (
              <ScrollReveal key={perk.title} delay={index * 100}>
                <div className="agent-card p-8 h-full">
                  <div className="agent-icon-box mb-5">
                    {index === 0 && (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    )}
                    {index === 1 && (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    )}
                    {index === 2 && (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-4" style={{ color: "var(--agent-text-heading)" }}>
                    {perk.title}
                  </h3>
                  <ul className="space-y-3">
                    {perk.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#2047FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm" style={{ color: "var(--agent-text-secondary)" }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Other Opportunities */}
      <section className="py-20" style={{ background: "var(--agent-bg-primary)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="agent-section-label mb-4 block">Explore More</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--agent-text-heading)" }}>
                Not sure if {opportunity.title} is right for you?
              </h2>
              <p className="text-lg" style={{ color: "var(--agent-text-secondary)" }}>
                Check out our other remote opportunities.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {others.map((opp, index) => (
              <ScrollReveal key={opp.slug} delay={index * 100}>
                <Link href={`/agents/opportunities/${opp.slug}`} className="block h-full">
                  <div className="agent-card overflow-hidden h-full flex flex-col">
                    <div className="h-40 overflow-hidden">
                      <img
                        src={opp.image}
                        alt={opp.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <h3 className="font-bold mb-2" style={{ color: "var(--agent-text-heading)" }}>
                        {opp.title}
                      </h3>
                      <p className="text-sm mb-4 flex-1" style={{ color: "var(--agent-text-secondary)" }}>
                        {opp.heroSubtitle}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-[#2047FF]">{opp.pay}</span>
                        <span className="text-[#2047FF] text-sm font-medium flex items-center gap-1">
                          Learn more
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

      {/* CTA Section */}
      <section id="apply" className="py-24" style={{ background: "var(--agent-bg-secondary)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal direction="scale">
            <div className="rounded-3xl p-12 md:p-16 relative overflow-hidden bg-gradient-to-br from-[#2047FF] to-[#7C3AED]">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-[var(--agent-bg-card)]/10 animate-breathe" />
                <div className="absolute top-1/4 right-1/4 w-16 h-16 rounded-full bg-[var(--agent-bg-card)]/10 animate-breathe" style={{ animationDelay: "1s" }} />
                <div className="absolute bottom-10 left-1/3 w-12 h-12 rounded-full bg-[var(--agent-bg-card)]/10 animate-breathe" style={{ animationDelay: "2s" }} />
              </div>

              <div className="relative z-10 max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-bold text-[var(--agent-bg-card)] mb-6">
                  Ready to get started as a {opportunity.title} Agent?
                </h2>
                <p className="text-lg md:text-xl text-[var(--agent-bg-card)]/90 mb-8">
                  Apply today and start your flexible, remote career with CXware. Set your own schedule, work from home, and earn competitive pay.
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
                    href="/agents/opportunities"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-[var(--agent-bg-card)] font-semibold rounded-xl border-2 border-[var(--agent-bg-card)]/30 hover:bg-[var(--agent-bg-card)]/10 transition-all"
                  >
                    View All Opportunities
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
