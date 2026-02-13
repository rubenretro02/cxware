"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const opportunities = [
  {
    title: "Customer Service",
    type: "Independent Contractor",
    pay: "$14 to $20 per hour",
    tagline: "Be the customer care voice of top brands.",
    description: "Customer service is the foundation of every successful business. As a CXware Remote Customer Service Agent, you'll be the first point of contact for customers who need help with orders, account inquiries, billing questions, product support, and more.",
    skills: ["Tier 1 & Tier 2 customer care", "Order support and account management", "Billing and payment inquiries"],
    location: "Remote - USA",
    href: "/agents/opportunities/customer-service",
  },
  {
    title: "Inbound Sales",
    type: "Independent Contractor",
    pay: "$14 to $20+ per hour",
    tagline: "Enjoy the thrill of the sale from home.",
    description: "Sales is so much more than taking an order - it's understanding the caller's needs, overcoming challenges, and dazzling them with enthusiasm for products they'll love.",
    skills: ["Business-to-Consumer inbound sales", "Upselling and cross-selling", "Consultative sales approach"],
    location: "Remote - USA",
    href: "/agents/opportunities/inbound-sales",
  },
  {
    title: "Healthcare Support",
    type: "Independent Contractor",
    pay: "$15 to $20 per hour",
    tagline: "Help patients navigate their healthcare.",
    description: "Healthcare concerns can make people feel vulnerable and overwhelmed. As a CXware Remote Healthcare Support Agent, you can make a real difference in people's lives.",
    skills: ["Patient intake and appointment scheduling", "Insurance verification and benefits explanation", "Pharmacy support and prescription inquiries"],
    location: "Remote - USA",
    href: "/agents/opportunities/healthcare-support",
  },
  {
    title: "Insurance Sales",
    type: "Independent Contractor",
    pay: "$16 to $25+ per hour",
    tagline: "Sell top insurance coverage from home.",
    description: "You don't have to spend your time traveling and chasing leads to build an insurance business. CXware connects you with some of the largest and most respected insurance companies in the nation.",
    skills: ["Inbound insurance sales and consultation", "Warm lead outbound follow-up", "Upselling and cross-selling insurance products"],
    location: "Remote - USA",
    href: "/agents/opportunities/insurance-sales",
  },
  {
    title: "Bilingual Spanish Agent",
    type: "Independent Contractor",
    pay: "$17 to $20+ per hour",
    tagline: "Leverage your bilingual skills for premium pay.",
    description: "Your bilingual abilities are in high demand. As a CXware Bilingual Spanish Agent, you'll provide customer support, sales assistance, and healthcare navigation to both English and Spanish-speaking customers.",
    skills: ["English and Spanish customer support", "Bilingual inbound sales and consultations", "Healthcare patient support in both languages"],
    location: "Remote - USA",
    href: "/agents/opportunities/bilingual-spanish",
  },
];

export default function OpportunitiesPage() {
  return (
    <main className="min-h-screen bg-[#0B0E18] text-white">
      <Header />

      {/* Hero */}
      <section className="pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal delay={0}>
            <span className="agent-section-label">Remote Opportunities</span>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6 leading-tight">
              <span className="text-white">Find Your Perfect </span>
              <span className="agent-gradient-text">Remote Role</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-lg text-[#8B92A5] max-w-3xl leading-relaxed">
              Explore all available remote opportunities with CXware. Each role offers flexible scheduling, competitive pay, and the freedom to work from home.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Opportunity Cards */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-8">
            {opportunities.map((opp, i) => (
              <ScrollReveal key={opp.title} delay={i * 100}>
                <div className="rounded-2xl border border-white/10 bg-[#141829] p-8 hover:border-[#C873E5]/30 transition-all">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h2 className="text-2xl font-bold text-white">{opp.title}</h2>
                      </div>
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="px-3 py-1 rounded-full bg-[#C873E5]/10 text-[#C873E5] text-xs font-medium border border-[#C873E5]/20">
                          {opp.type}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-[#2047FF]/10 text-[#2047FF] text-xs font-medium border border-[#2047FF]/20">
                          {opp.pay}
                        </span>
                      </div>
                      <p className="text-[#8B92A5] mb-4 leading-relaxed">{opp.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {opp.skills.map((skill) => (
                          <span key={skill} className="text-xs text-[#c0c4d0] bg-white/5 rounded-lg px-3 py-1.5">{skill}</span>
                        ))}
                      </div>
                      <p className="text-sm text-[#8B92A5]">{opp.location}</p>
                    </div>
                    <div className="flex-shrink-0">
                      <Link href={opp.href} className="agent-btn-primary text-sm py-3 px-6">
                        Learn More
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0d1120]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">{"Don't see the right fit?"}</h2>
            <p className="text-lg text-[#8B92A5] mb-8">
              {"New opportunities are added regularly. Apply now and we'll match you with the best programs based on your skills and experience."}
            </p>
            <Link href="#apply" className="agent-btn-primary text-base py-4 px-8 inline-flex">
              Apply Now
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
