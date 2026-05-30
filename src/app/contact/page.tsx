import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import MapSection from "@/components/MapSection";

export const metadata: Metadata = {
  title: "Contact Us - WingCX Agent Solutions",
  description:
    "Get in touch with WingCX. Talk to our team about scaling your customer operations with intelligent workforce solutions.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden bg-[var(--bg)]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="aurora-blob w-[520px] h-[520px] -top-32 -right-32" style={{ opacity: 0.22 }} />
          <div className="aurora-blob w-[420px] h-[420px] bottom-0 left-0" style={{ opacity: 0.18, animationDelay: "-6s" }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Hero with background image */}
          <div className="relative rounded-3xl overflow-hidden mb-16 border border-[var(--line-strong)] shadow-[var(--shadow-elev-2)]">
            <img
              src="/images/contact-hero.jpg"
              alt="WingCX contact"
              className="w-full h-[400px] object-cover"
            />
            {/* light overlay so navy text reads on the right */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(270deg, rgba(251,251,253,0.92) 0%, rgba(251,251,253,0.78) 28%, rgba(251,251,253,0.42) 58%, rgba(251,251,253,0.05) 100%)",
              }}
            />

            <div className="absolute inset-0 flex items-center justify-end">
              <div className="max-w-lg text-right pr-12">
                <span className="eyebrow-brand"><span>GET IN TOUCH</span></span>
                <h1 className="text-4xl md:text-5xl font-bold text-[var(--fg)] mt-4 mb-4">
                  {"Let's build your "}
                  <span className="gradient-text">ideal CX team</span>
                </h1>
                <p className="text-[var(--fg-muted)] text-lg">
                  {
                    "Ready to scale your customer operations? Fill out the form and we'll get back to you within one business day."
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
              {/* Why WingCX Card */}
              <div className="card-light p-6">
                <h3 className="text-lg font-bold text-[var(--fg)] mb-4">
                  Why companies choose WingCX
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="icon-box flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[var(--fg)] font-semibold text-sm">Fast Onboarding</p>
                      <p className="text-[var(--fg-muted)] text-xs">Get your CX team live in days, not months</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="icon-box flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[var(--fg)] font-semibold text-sm">Cut Costs 25-55%</p>
                      <p className="text-[var(--fg-muted)] text-xs">Pay only for productive hours with flexible scaling</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="icon-box flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[var(--fg)] font-semibold text-sm">Global Talent Pool</p>
                      <p className="text-[var(--fg-muted)] text-xs">Access 1,000+ pre-vetted agents worldwide</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="icon-box flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[var(--fg)] font-semibold text-sm">Enterprise Security</p>
                      <p className="text-[var(--fg-muted)] text-xs">SOC 2 compliant with end-to-end encryption</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Contact Card */}
              <div className="card-light p-6">
                <h3 className="text-lg font-bold text-[var(--fg)] mb-3">
                  Prefer to reach out directly?
                </h3>
                <a
                  href="mailto:contact@wingcx.com"
                  className="flex items-center gap-3 text-[var(--brand-purple)] hover:text-[var(--fg)] transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="font-medium">contact@wingcx.com</span>
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
