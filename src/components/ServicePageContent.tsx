"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import type { Service } from "@/lib/services";
import { getOtherServices } from "@/lib/services";

function FeatureIcon({ icon }: { icon: string }) {
  const icons: Record<string, React.ReactNode> = {
    rocket: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    scale: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
      </svg>
    ),
    shield: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    dollar: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    channels: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    training: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    analytics: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    team: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    clock: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    target: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
      </svg>
    ),
    integration: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
    ticket: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
      </svg>
    ),
    knowledge: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    lock: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    heart: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    calendar: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  };
  return <>{icons[icon] || icons.shield}</>;
}

export default function ServicePageContent({ service }: { service: Service }) {
  const otherServices = getOtherServices(service.slug);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-20 overflow-hidden bg-[#0B0F1A]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-[#2047FF]/[0.06] blur-3xl animate-breathe" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#C873E5]/[0.04] blur-3xl animate-breathe" style={{ animationDelay: "2s" }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <ScrollReveal delay={0}>
            <nav className="mb-8 flex items-center gap-2 text-sm text-[#8B92A5]">
              <Link href="/" className="hover:text-[#C873E5] transition-colors">For Business</Link>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <Link href="/services" className="hover:text-[#C873E5] transition-colors">Services</Link>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-[#FFFFFF]">{service.title}</span>
            </nav>
          </ScrollReveal>

          <div className="max-w-4xl">
            <ScrollReveal delay={100}>
              <span className="section-label mb-4 block">
                {service.category === "solution" ? "Solution" : "Industry"}
              </span>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="text-[#FFFFFF]">{service.heroTitle.split(" ").slice(0, -1).join(" ")} </span>
                <span className="gradient-text">{service.heroTitle.split(" ").slice(-1)}</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <p className="text-xl leading-relaxed text-[#8B92A5] mb-8 max-w-3xl">
                {service.heroSubtitle}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="btn-primary text-base py-4 px-8">
                  {"Let's Talk"}
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link href="/services" className="btn-secondary text-base py-4 px-8">
                  All Services
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Stats Bar */}
          <ScrollReveal delay={500}>
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
              {service.stats.map((stat) => (
                <div key={stat.label} className="card-light p-6 text-center">
                  <p className="text-2xl md:text-3xl font-bold gradient-text mb-1">{stat.value}</p>
                  <p className="text-sm text-[#8B92A5]">{stat.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Description */}
      <section className="py-20 bg-[#0F1322]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <span className="section-label mb-4 block">Overview</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#FFFFFF] mb-6">
                {service.heroSubtitle}
              </h2>
              <p className="text-lg leading-relaxed text-[#8B92A5]">
                {service.description}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-[#0B0F1A]">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="section-label mb-4 block">Capabilities</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#FFFFFF]">
                How We Deliver Results
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {service.features.map((feature, index) => (
              <ScrollReveal key={feature.title} delay={index * 100}>
                <div className="card-light p-8 h-full">
                  <div className="icon-box mb-5">
                    <FeatureIcon icon={feature.icon} />
                  </div>
                  <h3 className="text-xl font-bold text-[#FFFFFF] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[#8B92A5] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-[#0F1322]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <span className="section-label mb-4 block">Benefits</span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#FFFFFF] mb-6">
                  Why Choose CXware for {service.title}
                </h2>
                <p className="text-lg text-[#8B92A5] mb-8">
                  We deliver measurable improvements across cost, quality, and scalability.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="card-light p-8">
                <div className="space-y-4">
                  {service.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-[#2047FF] to-[#C873E5] flex items-center justify-center">
                        <svg className="w-3 h-3 text-[#FFFFFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-[#C8CDD8]">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-[#0B0F1A]">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="section-label mb-4 block">Use Cases</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#FFFFFF]">
                Common Applications
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="max-w-3xl mx-auto card-light p-8">
              <div className="grid sm:grid-cols-2 gap-4">
                {service.useCases.map((useCase, index) => (
                  <div key={useCase} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-r from-[#2047FF]/10 to-[#C873E5]/10 flex items-center justify-center">
                      <span className="text-sm font-bold text-[#C873E5]">{index + 1}</span>
                    </div>
                    <p className="text-[#C8CDD8] text-sm">{useCase}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Explore Other Services */}
      <section className="py-20 bg-[#0F1322]">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="section-label mb-4 block">Explore More</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#FFFFFF] mb-4">
                Other Solutions & Industries
              </h2>
              <p className="text-lg text-[#8B92A5]">
                CXware serves businesses across multiple industries and use cases.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherServices.map((other, index) => (
              <ScrollReveal key={other.slug} delay={index * 100}>
                <Link href={`/services/${other.slug}`} className="block h-full">
                  <div className="card-light p-6 h-full flex flex-col">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#C873E5] mb-3">
                      {other.category === "solution" ? "Solution" : "Industry"}
                    </span>
                    <h3 className="text-lg font-bold text-[#FFFFFF] mb-2">{other.title}</h3>
                    <p className="text-sm text-[#8B92A5] mb-4 flex-1">
                      {other.heroSubtitle}
                    </p>
                    <span className="text-[#C873E5] text-sm font-semibold flex items-center gap-1">
                      Learn More
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0B0F1A]">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal direction="scale">
            <div className="rounded-3xl p-12 md:p-16 relative overflow-hidden bg-gradient-to-br from-[#2047FF] to-[#C873E5]">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-[#FFFFFF]/10 animate-breathe" />
                <div className="absolute top-1/4 right-1/4 w-16 h-16 rounded-full bg-[#FFFFFF]/10 animate-breathe" style={{ animationDelay: "1s" }} />
                <div className="absolute bottom-10 left-1/3 w-12 h-12 rounded-full bg-[#FFFFFF]/10 animate-breathe" style={{ animationDelay: "2s" }} />
              </div>

              <div className="relative z-10 text-center max-w-2xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-[#FFFFFF] mb-6">
                  {service.ctaTitle}
                </h2>
                <p className="text-lg md:text-xl text-[#FFFFFF]/90 mb-8">
                  {service.ctaDescription}
                </p>
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#FFFFFF] text-[#2047FF] font-semibold rounded-xl transition-all hover:shadow-lg hover:-translate-y-0.5"
                >
                  {"Talk with Sales"}
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
