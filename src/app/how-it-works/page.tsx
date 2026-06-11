import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "How It Works - WingCX Agent Solutions",
  description:
    "From discovery to live coverage in under three weeks. See how WingCX connects to your stack, forecasts demand, certifies expert agents, and optimizes every interaction.",
};

const steps = [
  {
    title: "Connect & audit",
    meta: "Step 01",
    body: "We plug into your contact center stack — we support the platforms you already run — and review service levels, call volumes, and seasonal spikes to pin your real staffing curve.",
    detail: "CCaaS, CRM, and WFM integrations. No rip-and-replace.",
  },
  {
    title: "Forecast & optimize",
    meta: "Step 02",
    body: "Proprietary forecasting algorithms turn your historical volume into a precision staffing plan, scheduled in 30-minute intervals against intraday and seasonal demand.",
    detail: "Your FTE forecast becomes a living schedule, not a spreadsheet.",
  },
  {
    title: "Rapid certification",
    meta: "Step 03",
    body: "Pre-vetted, ID-verified agents are matched to your exact standards and certified on your brand materials through our self-paced LMS — about 2× faster than classroom training.",
    detail: "Quality is verified before anyone takes a live interaction.",
  },
  {
    title: "Launch with priority boarding",
    meta: "Step 04",
    body: "Your program goes live with the right mix of AI and human agents for perfect staffing. Top-ranked agents earn the most hours, so performance compounds instead of decaying.",
    detail: "Live dashboards from day one.",
  },
  {
    title: "24/7 QA & continuous improvement",
    meta: "Step 05",
    body: "AI-assisted QA monitors 100% of interactions for compliance and quality — not a 2% sample. Insights feed back into matching, training, and scheduling automatically.",
    detail: "Every interaction scored. Every week better than the last.",
  },
];

const outcomes = [
  { value: "35–55%", label: "Savings vs. a traditional ops model" },
  { value: "30 days", label: "Typical implementation, audit to live" },
  { value: "3×", label: "Flex capacity during surges" },
  { value: "100%", label: "Of interactions monitored by QA" },
];

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden bg-[var(--bg)]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="aurora-blob w-[520px] h-[520px] -top-32 -left-32" style={{ opacity: 0.2 }} />
          <div className="aurora-blob w-[420px] h-[420px] bottom-0 right-0" style={{ opacity: 0.16, animationDelay: "-7s" }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-14 animate-fade-in-up">
            <span className="eyebrow-brand"><span>HOW IT WORKS</span></span>
            <h1 className="text-4xl md:text-6xl font-bold text-[var(--fg)] mt-4 mb-5 leading-[1.04] tracking-[-0.025em]">
              Running your workforce should feel like <span className="gradient-text">one click</span>
            </h1>
            <p className="text-[var(--fg-muted)] text-lg leading-[1.6] max-w-[58ch]">
              WingCX automatically executes a scalable human workforce around your AI and your
              core team. Five steps take you from data audit to fully optimized live coverage —
              in weeks, not quarters.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link href="/contact" className="btn btn-brand btn-lg">
                Talk to our team
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link href="/services" className="btn btn-ghost btn-lg">
                Explore services
              </Link>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden border border-[var(--line-strong)] shadow-[var(--shadow-elev-2)]">
            <img
              src="/images/real-two-colleagues.jpg"
              alt="WingCX agents collaborating on a program"
              className="w-full h-[380px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Steps timeline */}
      <section className="py-24 lg:py-32 bg-[var(--bg-elev-1)] border-y border-[var(--line)] relative overflow-hidden">
        <div className="aurora-blob w-[500px] h-[500px] bottom-[-100px] left-[-100px]" style={{ opacity: 0.16 }} />
        <div className="relative mx-auto max-w-[1400px] px-5 lg:px-8">
          <ScrollReveal variant="up" className="mb-16 max-w-3xl">
            <h2 className="text-[clamp(2rem,4.6vw,3.4rem)] font-bold leading-[1.04] tracking-[-0.025em] text-balance">
              Five steps to <span className="gradient-text">insanely easy</span> contact center ops
            </h2>
          </ScrollReveal>

          <ol className="relative">
            <div className="hidden lg:block absolute left-[7.5%] top-2 bottom-2 w-px" style={{ background: "var(--grad)", opacity: 0.4 }} />
            {steps.map((step, i) => (
              <ScrollReveal
                key={step.title}
                as="li"
                variant="up"
                delay={i * 90}
                className="grid grid-cols-12 gap-x-8 py-8 lg:py-12 relative list-none"
              >
                <div className="col-span-12 lg:col-span-2 flex lg:block items-baseline gap-3">
                  <span className="mono text-[12px] gradient-text font-bold uppercase tracking-[0.14em]">{step.meta}</span>
                </div>
                <div className="hidden lg:flex col-span-1 justify-center">
                  <span
                    className="mt-[10px] w-2.5 h-2.5 rounded-full ring-4 ring-[var(--bg-elev-1)]"
                    style={{ background: "var(--grad)", boxShadow: "0 0 16px rgba(200, 115, 229, 0.5)" }}
                  />
                </div>
                <div className="col-span-12 lg:col-span-5 mt-3 lg:mt-0">
                  <h3 className="text-[24px] lg:text-[28px] font-semibold leading-[1.15] tracking-[-0.015em]">{step.title}</h3>
                  <p className="mono text-[12px] text-[var(--fg-faint)] mt-2">{step.detail}</p>
                </div>
                <div className="col-span-12 lg:col-span-4 mt-3 lg:mt-0">
                  <p className="text-[15.5px] text-[var(--fg-muted)] leading-[1.55] text-pretty">{step.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-24 lg:py-32 bg-[var(--bg)] relative overflow-hidden">
        <div className="relative mx-auto max-w-[1400px] px-5 lg:px-8">
          <ScrollReveal variant="up" className="mb-12 max-w-3xl">
            <span className="eyebrow-brand"><span>OUTCOMES</span></span>
            <h2 className="text-[clamp(2rem,4.2vw,3rem)] font-bold leading-[1.05] tracking-[-0.025em] mt-4 text-balance">
              Say goodbye to <span className="gradient-text">shrinkage</span>
            </h2>
            <p className="text-[16px] text-[var(--fg-muted)] leading-[1.6] mt-4 max-w-[56ch]">
              Overstaffing burns budget. Understaffing walks customers to your competitors. Built-in
              surge capacity and automated workforce ops keep you at the staffing curve — not above
              it, not below it.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="stagger" className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {outcomes.map((s) => (
              <div key={s.label} className="panel p-6 text-center">
                <div className="stat-number mb-2">{s.value}</div>
                <p className="text-[13.5px] text-[var(--fg-muted)] leading-snug">{s.label}</p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
