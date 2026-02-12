import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { services } from "@/lib/services";

export const metadata = {
  title: "Our Services - CXware Agent Solutions",
  description: "Explore CXware's full range of customer experience outsourcing solutions and industry-specific services.",
};

export default function ServicesPage() {
  const solutions = services.filter((s) => s.category === "solution");
  const industries = services.filter((s) => s.category === "industry");

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative pt-28 pb-20 overflow-hidden bg-[#0B0F1A]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-[#2047FF]/[0.06] blur-3xl animate-breathe" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#C873E5]/[0.04] blur-3xl animate-breathe" style={{ animationDelay: "2s" }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <span className="section-label mb-4 block">What We Do</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="text-[#FFFFFF]">Our </span>
            <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl text-[#8B92A5] max-w-3xl mx-auto">
            From call center outsourcing to industry-specific solutions, CXware delivers expert agents trained for your exact needs.
          </p>
        </div>
      </section>

      {/* By Solution */}
      <section className="py-20 bg-[#0F1322]">
        <div className="max-w-7xl mx-auto px-6">
          <span className="section-label mb-4 block">By Solution</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#FFFFFF] mb-12">
            Outsourcing Solutions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="block h-full">
                <div className="card-light p-8 h-full flex flex-col">
                  <h3 className="text-xl font-bold text-[#FFFFFF] mb-3">{service.title}</h3>
                  <p className="text-[#8B92A5] mb-4 flex-1 leading-relaxed">{service.heroSubtitle}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.stats.slice(0, 2).map((stat) => (
                      <span key={stat.label} className="text-xs font-semibold px-3 py-1 rounded-full bg-[#2047FF]/10 text-[#C873E5]">
                        {stat.value} {stat.label}
                      </span>
                    ))}
                  </div>
                  <span className="text-[#C873E5] text-sm font-semibold flex items-center gap-1">
                    Learn More
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* By Industry */}
      <section className="py-20 bg-[#0B0F1A]">
        <div className="max-w-7xl mx-auto px-6">
          <span className="section-label mb-4 block">By Industry</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#FFFFFF] mb-12">
            Industry-Specific Solutions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="block h-full">
                <div className="card-light p-8 h-full flex flex-col">
                  <h3 className="text-xl font-bold text-[#FFFFFF] mb-3">{service.title}</h3>
                  <p className="text-[#8B92A5] mb-4 flex-1 leading-relaxed">{service.heroSubtitle}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.stats.slice(0, 2).map((stat) => (
                      <span key={stat.label} className="text-xs font-semibold px-3 py-1 rounded-full bg-[#2047FF]/10 text-[#C873E5]">
                        {stat.value} {stat.label}
                      </span>
                    ))}
                  </div>
                  <span className="text-[#C873E5] text-sm font-semibold flex items-center gap-1">
                    Learn More
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0F1322]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-3xl p-12 md:p-16 relative overflow-hidden bg-gradient-to-br from-[#2047FF] to-[#C873E5]">
            <div className="relative z-10 text-center max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-[#FFFFFF] mb-6">
                {"Ready to Get Started?"}
              </h2>
              <p className="text-lg md:text-xl text-[#FFFFFF]/90 mb-8">
                {"Let's discuss how CXware can transform your customer experience operations."}
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#FFFFFF] text-[#2047FF] font-semibold rounded-xl transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                {"Talk with Sales"}
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
