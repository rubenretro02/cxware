"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

interface Capability {
  title: string;
  description: string;
}

interface UseCase {
  text: string;
}

interface RelatedService {
  title: string;
  type: string;
  description: string;
  href: string;
}

interface ServicePageData {
  breadcrumb: string;
  label: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  stats: { value: string; label: string }[];
  overviewTitle: string;
  overviewText: string;
  capabilities: Capability[];
  benefits: string[];
  useCases: UseCase[];
  relatedServices: RelatedService[];
  ctaTitle: string;
  ctaText: string;
}

export default function ServicePageTemplate({ data }: { data: ServicePageData }) {
  return (
    <main className="min-h-screen bg-[#0B0E18] text-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Breadcrumbs */}
          <ScrollReveal delay={0}>
            <nav className="flex items-center gap-2 text-sm text-[#8B92A5] mb-8">
              <Link href="/" className="hover:text-white transition-colors">For Business</Link>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <Link href="/#services" className="hover:text-white transition-colors">Services</Link>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-white">{data.breadcrumb}</span>
            </nav>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <span className="section-label">{data.label}</span>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-4 leading-tight">
              <span className="text-white">{data.title} </span>
              <span className="gradient-text">{data.titleHighlight}</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <p className="text-lg text-[#8B92A5] max-w-2xl mb-8">{data.subtitle}</p>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div className="flex flex-wrap gap-4 mb-12">
              <Link href="/contact" className="btn-primary text-base py-3 px-8">
                {"Let's Talk"}
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/#services" className="btn-secondary text-base py-3 px-8">
                All Services
              </Link>
            </div>
          </ScrollReveal>

          {/* Stats */}
          <ScrollReveal delay={500}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {data.stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-[#141829] p-6 text-center">
                  <p className="text-2xl md:text-3xl font-bold gradient-text mb-1">{stat.value}</p>
                  <p className="text-sm text-[#8B92A5]">{stat.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-[#0d1120]">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <span className="section-label">Overview</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-white">{data.overviewTitle}</h2>
            <p className="text-lg text-[#8B92A5] leading-relaxed">{data.overviewText}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <span className="section-label">Capabilities</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-12 text-white">How We Deliver Results</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8">
            {data.capabilities.map((cap, i) => (
              <ScrollReveal key={cap.title} delay={i * 100}>
                <div className="rounded-2xl border border-white/10 bg-[#141829] p-8 h-full hover:border-[#2047FF]/40 transition-colors">
                  <h3 className="text-xl font-bold text-white mb-3">{cap.title}</h3>
                  <p className="text-[#8B92A5] leading-relaxed">{cap.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-[#0d1120]">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <span className="section-label">Benefits</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-8 text-white">
              Why Choose CXware for {data.breadcrumb}
            </h2>
            <p className="text-[#8B92A5] mb-8">We deliver measurable improvements across cost, quality, and scalability.</p>
          </ScrollReveal>
          <div className="space-y-4">
            {data.benefits.map((benefit, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-[#141829]/50">
                  <svg className="w-6 h-6 text-[#2047FF] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-[#c0c4d0]">{benefit}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <span className="section-label">Use Cases</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-12 text-white">Common Applications</h2>
          </ScrollReveal>
          <div className="space-y-4">
            {data.useCases.map((uc, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="flex items-center gap-6 p-5 rounded-2xl border border-white/10 bg-[#141829]">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-[#2047FF] to-[#7C3AED] flex items-center justify-center text-white font-bold text-sm">
                    {i + 1}
                  </span>
                  <p className="text-[#c0c4d0]">{uc.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-[#0d1120]">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <span className="section-label">Explore More</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4 text-white">Other Solutions & Industries</h2>
            <p className="text-[#8B92A5] mb-12">CXware serves businesses across multiple industries and use cases.</p>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.relatedServices.map((rs, i) => (
              <ScrollReveal key={rs.title} delay={i * 100}>
                <Link
                  href={rs.href}
                  className="block rounded-2xl border border-white/10 bg-[#141829] p-6 h-full hover:border-[#2047FF]/40 transition-all group"
                >
                  <span className="text-xs font-medium uppercase tracking-wider text-[#C873E5]">{rs.type}</span>
                  <h3 className="text-lg font-bold text-white mt-2 mb-2 group-hover:text-[#2047FF] transition-colors">{rs.title}</h3>
                  <p className="text-sm text-[#8B92A5] mb-4">{rs.description}</p>
                  <span className="text-sm font-medium text-[#2047FF] group-hover:underline">Learn More</span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">{data.ctaTitle}</h2>
            <p className="text-lg text-[#8B92A5] mb-8">{data.ctaText}</p>
            <Link href="/contact" className="btn-primary text-base py-4 px-8 inline-flex">
              Talk with Sales
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
