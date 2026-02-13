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
    <main>
      <Header />

      {/* Hero Section */}
      <section
        className="relative pt-32 pb-16 overflow-hidden"
        style={{ background: "var(--bg-light)" }}
      >
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#2047FF]/5 via-[#C873E5]/5 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#2047FF]/3 to-[#C873E5]/3 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left - Text */}
            <div>
              <span className="section-label">Get In Touch</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6 leading-tight">
                <span className="text-white">{"Let's Build Your "}</span>
                <span className="gradient-text">Ideal CX Team</span>
              </h1>
              <p className="text-lg text-[#8B92A5] leading-relaxed">
                {
                  "Ready to scale your customer operations? Fill out the form below and we'll get back to you within one business day."
                }
              </p>
            </div>

            {/* Right - Image */}
            <div className="relative h-[300px] md:h-[380px] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/contact-hero.avif"
                alt="CXware professional agent working in modern office"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#0B0E18]/30" />
            </div>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Contact Form - takes 3 cols */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            {/* Side Info - takes 2 cols */}
            <div className="lg:col-span-2 space-y-6">
              {/* Why CXware Card */}
              <div className="card-light p-8 space-y-6">
                <h3 className="text-xl font-bold text-white">
                  Why companies choose CXware
                </h3>
                <div className="space-y-5">
                  <div className="flex gap-4">
                    <div className="icon-box flex-shrink-0">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">
                        Fast Onboarding
                      </h4>
                      <p className="text-[#8B92A5] text-sm">
                        Get your CX team live in days, not months
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="icon-box flex-shrink-0">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">
                        Cut Costs 25-55%
                      </h4>
                      <p className="text-[#8B92A5] text-sm">
                        Pay only for productive hours with flexible scaling
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="icon-box flex-shrink-0">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">
                        Global Talent Pool
                      </h4>
                      <p className="text-[#8B92A5] text-sm">
                        Access 1,000+ pre-vetted agents worldwide
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="icon-box flex-shrink-0">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">
                        Enterprise Security
                      </h4>
                      <p className="text-[#8B92A5] text-sm">
                        SOC 2 compliant with end-to-end encryption
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Contact Card */}
              <div className="card-light p-8 space-y-4">
                <h3 className="text-lg font-bold text-white">
                  Prefer to reach out directly?
                </h3>
                <div className="space-y-3">
                  <a
                    href="mailto:contact@cxwares.com"
                    className="flex items-center gap-3 text-[#8B92A5] hover:text-white transition-colors"
                  >
                    <svg
                      className="w-5 h-5 text-[#C873E5]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-sm">contact@cxwares.com</span>
                  </a>
                </div>
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
