"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

interface OpportunityData {
  slug: string;
  title: string;
  roleName: string;
  tagline: string;
  pay: string;
  type: string;
  location: string;
  aboutText: string;
  skillsIntro: string;
  skills: string[];
  whatYouDo: string[];
  greatIfYou: string[];
  quickOverview: {
    payRange: string;
    type: string;
    location: string;
    hoursNote: string[];
    channels?: string[];
  };
  techRequirements: string[];
  techLevel: string;
  benefits: {
    title: string;
    items: string[];
  }[];
  relatedOpportunities: {
    title: string;
    tagline: string;
    pay: string;
    href: string;
  }[];
  ctaTitle: string;
  ctaText: string;
}

export default function OpportunityPageTemplate({ data }: { data: OpportunityData }) {
  return (
    <main className="min-h-screen bg-[#0B0E18] text-white">
      <Header />

      {/* Hero */}
      <section className="pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal delay={0}>
            <p className="text-sm text-[#C873E5] font-medium mb-4">
              {data.type} &middot; {data.pay}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-2 mb-4 leading-tight">
              <span className="text-white">Remote </span>
              <span className="agent-gradient-text">{data.title}</span>
              <span className="text-white"> Agent Opportunities</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-lg text-[#8B92A5] max-w-2xl mb-8">{data.tagline}</p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="flex flex-wrap gap-4">
              <Link href="#apply" className="agent-btn-primary text-base py-3 px-8">
                Apply Now
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/agents/opportunities" className="agent-btn-secondary text-base py-3 px-8">
                View All Opportunities
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* About */}
      <section className="py-20 bg-[#0d1120]">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <span className="agent-section-label">About This Opportunity</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-white">{data.tagline}</h2>
            <p className="text-lg text-[#8B92A5] leading-relaxed">{data.aboutText}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Skills & What You'll Do */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Skills */}
            <ScrollReveal>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Skills & Experience</h3>
                <p className="text-[#8B92A5] mb-6">{data.skillsIntro}</p>
                <div className="space-y-3">
                  {data.skills.map((skill) => (
                    <div key={skill} className="flex items-start gap-3 p-3 rounded-xl border border-white/5 bg-[#141829]/50">
                      <svg className="w-5 h-5 text-[#2047FF] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[#c0c4d0] text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* What You'll Do */}
            <ScrollReveal delay={200}>
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">{"What You'll Do"}</h3>
                <div className="space-y-4">
                  {data.whatYouDo.map((item, i) => (
                    <div key={i} className="flex items-center gap-5 p-4 rounded-2xl border border-white/10 bg-[#141829]">
                      <span className="flex-shrink-0 w-9 h-9 rounded-full bg-gradient-to-r from-[#2047FF] to-[#7C3AED] flex items-center justify-center text-white font-bold text-sm">
                        {i + 1}
                      </span>
                      <p className="text-[#c0c4d0] text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Great If You & Quick Overview */}
      <section className="py-20 bg-[#0d1120]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <ScrollReveal>
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Great If You...</h3>
                <div className="space-y-3">
                  {data.greatIfYou.map((trait) => (
                    <div key={trait} className="flex items-start gap-3 p-3 rounded-xl border border-white/5 bg-[#141829]/50">
                      <svg className="w-5 h-5 text-[#C873E5] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[#c0c4d0] text-sm">{trait}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="rounded-2xl border border-white/10 bg-[#141829] p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Quick Overview</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-white/5">
                    <span className="text-[#8B92A5] text-sm">Pay Range</span>
                    <span className="text-white font-semibold">{data.quickOverview.payRange}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/5">
                    <span className="text-[#8B92A5] text-sm">Type</span>
                    <span className="text-white font-semibold">{data.quickOverview.type}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/5">
                    <span className="text-[#8B92A5] text-sm">Location</span>
                    <span className="text-white font-semibold">{data.quickOverview.location}</span>
                  </div>
                  <div className="pt-3">
                    <p className="text-[#8B92A5] text-sm font-medium mb-2">Calls Typically Available:</p>
                    <ul className="space-y-1">
                      {data.quickOverview.hoursNote.map((note, i) => (
                        <li key={i} className="text-[#c0c4d0] text-sm flex items-start gap-2">
                          <span className="text-[#2047FF] mt-1">-</span> {note}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {data.quickOverview.channels && (
                    <div className="pt-3 border-t border-white/5">
                      <p className="text-[#8B92A5] text-sm font-medium mb-2">Support Channels</p>
                      <div className="flex flex-wrap gap-2">
                        {data.quickOverview.channels.map((ch) => (
                          <span key={ch} className="px-3 py-1 rounded-full bg-[#2047FF]/10 text-[#2047FF] text-xs font-medium border border-[#2047FF]/20">
                            {ch}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <div className="mt-8">
                  <Link href="#apply" className="agent-btn-primary w-full justify-center text-base py-3">
                    Apply Now
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Tech Requirements */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <span className="agent-section-label">What You Need</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4 text-white">Technical Requirements</h2>
            <p className="text-[#8B92A5] mb-8">Technology skill level: {data.techLevel}</p>
          </ScrollReveal>
          <div className="space-y-3">
            {data.techRequirements.map((req, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-[#141829]/50">
                  <svg className="w-5 h-5 text-[#2047FF] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-[#c0c4d0]">{req}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-[#0d1120]">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <span className="agent-section-label">Benefits</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-12 text-white">{"What's In It For You"}</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {data.benefits.map((benefit, i) => (
              <ScrollReveal key={benefit.title} delay={i * 100}>
                <div className="rounded-2xl border border-white/10 bg-[#141829] p-8 h-full">
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <ul className="space-y-3">
                    {benefit.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-[#c0c4d0]">
                        <span className="text-[#C873E5] mt-0.5">-</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related Opportunities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <span className="agent-section-label">Explore More</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4 text-white">
              Not sure if {data.title} is right for you?
            </h2>
            <p className="text-[#8B92A5] mb-12">Check out our other remote opportunities.</p>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.relatedOpportunities.map((opp, i) => (
              <ScrollReveal key={opp.title} delay={i * 100}>
                <Link href={opp.href} className="block rounded-2xl border border-white/10 bg-[#141829] p-6 h-full hover:border-[#C873E5]/40 transition-all group">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#C873E5] transition-colors">{opp.title}</h3>
                  <p className="text-sm text-[#8B92A5] mb-3">{opp.tagline}</p>
                  <p className="text-sm font-semibold text-[#C873E5]">{opp.pay}</p>
                  <span className="text-sm font-medium text-[#C873E5] mt-3 block group-hover:underline">Learn more</span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="apply" className="py-20 bg-[#0d1120]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">{data.ctaTitle}</h2>
            <p className="text-lg text-[#8B92A5] mb-8">{data.ctaText}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="#apply" className="agent-btn-primary text-base py-4 px-8">
                Start My Application
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
      </section>

      <Footer />
    </main>
  );
}
