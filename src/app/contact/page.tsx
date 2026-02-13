import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import MapSection from "@/components/MapSection";

export const metadata: Metadata = {
  title: "Contact Us - CXware Agent Solutions",
  description:
    "Get in touch with CXware. Talk to our team about scaling your customer operations with intelligent workforce solutions.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden" style={{ background: "var(--bg-light)" }}>
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#2047FF]/[0.04] blur-3xl animate-breathe" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#C873E5]/[0.04] blur-3xl animate-breathe" style={{ animationDelay: "2s" }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Hero with background image */}
          <div className="relative rounded-3xl overflow-hidden mb-16">
            {/* Background Image */}
            <img
              src="/images/contact-hero.jpg"
              alt="CXware contact"
              className="w-full h-[400px] object-cover"
            />
            {/* Overlay gradient - darker on right for text readability */}
            <div className="absolute inset-0 bg-gradient-to-l from-[#0B0F1A]/90 via-[#0B0F1A]/60 to-transparent" />

            {/* Text on the right side */}
            <div className="absolute inset-0 flex items-center justify-end">
              <div className="max-w-lg text-right pr-12">
                <span className="section-label">Get In Touch</span>
                <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-4">
                  {"Let's Build Your "}
                  <span className="gradient-text">Ideal CX Team</span>
                </h1>
                <p className="text-[#8B92A5] text-lg">
                  {
                    "Ready to scale your customer operations? Fill out the form below and we'll get back to you within one business day."
                  }
                </p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form - takes 3 cols */}
            <div className="lg:col-span-3 card-light p-8 md:p-10">
              <ContactForm />
            </div>

            {/* Side Info - takes 2 cols */}
            <div className="lg:col-span-2 space-y-6">
              {/* Why CXware Card */}
              <div className="card-light p-6">
                <h3 className="text-lg font-bold text-white mb-4">
                  Why companies choose CXware
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="icon-box flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">Fast Onboarding</p>
                      <p className="text-[#8B92A5] text-xs">Get your CX team live in days, not months</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="icon-box flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">Cut Costs 25-55%</p>
                      <p className="text-[#8B92A5] text-xs">Pay only for productive hours with flexible scaling</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="icon-box flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">Global Talent Pool</p>
                      <p className="text-[#8B92A5] text-xs">Access 1,000+ pre-vetted agents worldwide</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="icon-box flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">Enterprise Security</p>
                      <p className="text-[#8B92A5] text-xs">SOC 2 compliant with end-to-end encryption</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Contact Card */}
              <div className="card-light p-6">
                <h3 className="text-lg font-bold text-white mb-3">
                  Prefer to reach out directly?
                </h3>
                <a
                  href="mailto:contact@cxwares.com"
                  className="flex items-center gap-3 text-[#C873E5] hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="font-medium">contact@cxwares.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MapSection />
      <Footer />
    </main>
  );
}
