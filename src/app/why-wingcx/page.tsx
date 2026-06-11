import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Why WingCX - Flexible Customer Service Solutions | WingCX",
  description:
    "It's not outsourcing, it's upgrading. Scale support up or down in real time, pay only for productive hours, and keep quality high with certified remote agents.",
};

const pillars = [
  {
    title: "Seasonal flexibility",
    body: "Scale support up or down — daily surges, weekly swings, or seasonal peaks — with a delivery model that adapts to your business in real time. Ramp coverage up to 10× without recruiting, hiring, or training a single FTE.",
  },
  {
    title: "Precision scheduling",
    body: "Forget rigid 8-hour blocks. Our platform schedules certified agents in 30-minute increments against your actual volume curve, so you're never paying for an idle bench.",
  },
  {
    title: "True cost of ownership",
    body: "Pay only for productive time. No idle hours, no shrinkage, no physical infrastructure. Partners typically cut total program cost by 25–55% versus a traditional ops model.",
  },
  {
    title: "Quality talent",
    body: "Our sourcing combines AI-driven screening with hands-on evaluation. Every agent is ID-verified, background-checked, and certified on your brand materials before their first interaction.",
  },
  {
    title: "Security & compliance",
    body: "A security-first operation built for regulated industries — aligned with PCI-DSS, HIPAA, SOC 2, and GDPR requirements, with 100% of interactions monitored for compliance and quality.",
  },
  {
    title: "AI + human, synchronized",
    body: "Technology should enhance human connection, not replace it. We orchestrate the right mix of AI agents and expert humans so routine work is automated and complex moments get a person.",
  },
];

const stats = [
  { value: "10×", label: "Flex to expected or unexpected events" },
  { value: "25–55%", label: "Average cost savings vs. traditional ops" },
  { value: "+15%", label: "Average increase in CSAT" },
  { value: "99%", label: "Schedule reliability" },
];

const framework = [
  {
    title: "Talent sourcing",
    body: "AI-driven screening matched with real industry experience. We surface agents who have already supported brands like yours.",
  },
  {
    title: "Learning & development",
    body: "Immersive, self-paced certification programs get agents brand-ready 2× faster than classroom training.",
  },
  {
    title: "Precision scheduling",
    body: "Proprietary forecasting allocates coverage in 30-minute intervals against intraday and seasonal volume.",
  },
  {
    title: "Client results",
    body: "A dedicated performance team monitors your KPIs and tunes the program continuously — not at quarterly reviews.",
  },
  {
    title: "Agent experience",
    body: "Real-time sentiment insights, peer community, and performance-based hour priority keep the best agents on your program.",
  },
];

export default function WhyWingCXPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden bg-[var(--bg)]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="aurora-blob w-[520px] h-[520px] -top-32 -right-32" style={{ opacity: 0.22 }} />
          <div className="aurora-blob w-[420px] h-[420px] bottom-0 left-0" style={{ opacity: 0.18, animationDelay: "-6s" }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="relative rounded-3xl overflow-hidden mb-16 border border-[var(--line-strong)] shadow-[var(--shadow-elev-2)]">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/images/contact-hero.jpg"
              aria-hidden="true"
              className="w-full h-[420px] object-cover"
            >
              <source src="/videos/call-center-broll.mp4" type="video/mp4" />
            </video>
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, rgba(251,251,253,0.97) 0%, rgba(251,251,253,0.90) 35%, rgba(251,251,253,0.62) 65%, rgba(251,251,253,0.25) 100%)",
              }}
            />
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-xl pl-10 md:pl-14 animate-fade-in-up">
                <span className="eyebrow-brand"><span>WHY WINGCX</span></span>
                <h1 className="text-4xl md:text-5xl font-bold text-[var(--fg)] mt-4 mb-4 leading-[1.05]">
                  {"It's not outsourcing. "}
                  <span className="gradient-text">{"It's upgrading."}</span>
                </h1>
                <p className="text-[var(--fg-muted)] text-lg max-w-[46ch]">
                  Customer service doesn&apos;t just reflect your brand — it defines it. We combine
                  human expertise with powerful technology so you can elevate your brand, scale on
                  demand, and adapt instantly.
                </p>
              </div>
            </div>
          </div>

          {/* Stats band */}
          <ScrollReveal variant="stagger" className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((s) => (
              <div key={s.label} className="panel p-6 text-center">
                <div className="stat-number mb-2">{s.value}</div>
                <p className="text-[13.5px] text-[var(--fg-muted)] leading-snug">{s.label}</p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-24 lg:py-32 bg-[var(--bg-elev-1)] border-y border-[var(--line)] relative overflow-hidden">
        <div className="aurora-blob w-[460px] h-[460px] top-[20%] right-[-120px]" style={{ opacity: 0.14 }} />
        <div className="relative mx-auto max-w-[1400px] px-5 lg:px-8">
          <ScrollReveal variant="up" className="mb-14 max-w-3xl">
            <span className="eyebrow-brand"><span>THE DIFFERENCE</span></span>
            <h2 className="text-[clamp(2rem,4.6vw,3.2rem)] font-bold leading-[1.05] tracking-[-0.025em] mt-4 text-balance">
              Six reasons brands <span className="gradient-text">switch to WingCX</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal variant="stagger" className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {pillars.map((p, i) => (
              <div key={p.title} className="card-light p-7">
                <span className="mono text-[12px] gradient-text font-bold">0{i + 1}</span>
                <h3 className="text-[19px] font-semibold tracking-[-0.01em] mt-3 mb-2.5">{p.title}</h3>
                <p className="text-[14.5px] text-[var(--fg-muted)] leading-[1.6] text-pretty">{p.body}</p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Operating framework */}
      <section className="py-24 lg:py-32 bg-[var(--bg)] relative overflow-hidden">
        <div className="relative mx-auto max-w-[1400px] px-5 lg:px-8">
          <div className="grid grid-cols-12 gap-x-8 gap-y-12">
            <ScrollReveal variant="up" className="col-span-12 lg:col-span-5 lg:sticky lg:top-32 lg:self-start space-y-6">
              <span className="eyebrow-brand"><span>OPERATING FRAMEWORK</span></span>
              <h2 className="text-[clamp(2rem,4.6vw,3.2rem)] font-bold leading-[1.05] tracking-[-0.025em] text-balance">
                Human-powered.<br />
                <span className="gradient-text">Technology-enhanced.</span><br />
                Results-driven.
              </h2>
              <p className="text-[16px] text-[var(--fg-muted)] leading-[1.6] max-w-[44ch]">
                Five functional pillars run every WingCX program — from the first agent we source
                to the last KPI we report. Each one is instrumented, measured, and continuously tuned.
              </p>
              <Link href="/how-it-works" className="btn btn-ghost btn-lg group">
                See how it works
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </ScrollReveal>

            <ScrollReveal as="div" variant="stagger" className="col-span-12 lg:col-span-6 lg:col-start-7">
              <ul className="border-t border-[var(--line)]">
                {framework.map((row, i) => (
                  <li
                    key={row.title}
                    className="py-7 border-b border-[var(--line)] grid grid-cols-12 gap-x-6 items-baseline"
                  >
                    <span className="col-span-2 mono text-[12px] tabular-nums gradient-text font-bold">0{i + 1}</span>
                    <div className="col-span-10">
                      <h3 className="text-[18px] lg:text-[20px] font-semibold tracking-[-0.01em] mb-2">{row.title}</h3>
                      <p className="text-[14.5px] text-[var(--fg-muted)] leading-[1.55] text-pretty max-w-[52ch]">{row.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Talent network */}
      <section className="py-24 lg:py-32 bg-[var(--bg-elev-1)] border-y border-[var(--line)] relative overflow-hidden">
        <div className="relative mx-auto max-w-[1400px] px-5 lg:px-8 grid grid-cols-12 gap-x-8 gap-y-10 items-center">
          <ScrollReveal variant="up" className="col-span-12 lg:col-span-6 space-y-6">
            <span className="eyebrow-brand"><span>TALENT NETWORK</span></span>
            <h2 className="text-[clamp(2rem,4.2vw,3rem)] font-bold leading-[1.05] tracking-[-0.025em] text-balance">
              Skilled agents, <span className="gradient-text">wherever your customers are</span>
            </h2>
            <p className="text-[16px] text-[var(--fg-muted)] leading-[1.6] max-w-[52ch]">
              Access experienced, pre-vetted professionals across onshore, nearshore, and bilingual
              talent pools. Because our agents work remotely and choose programs that fit their
              experience, you get motivated specialists — not whoever happened to be on the bench.
            </p>
            <ul className="space-y-3">
              {[
                "ID-verified and background-checked before certification",
                "Average quality rating of 4.8/5 across live programs",
                "Bilingual English/Spanish coverage on demand",
                "Top-performing agents earn priority hours on your program",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-[var(--fg-muted)]">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-[var(--brand-purple)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>
          <ScrollReveal variant="up" delay={120} className="col-span-12 lg:col-span-5 lg:col-start-8">
            <div className="rounded-3xl overflow-hidden border border-[var(--line-strong)] shadow-[var(--shadow-elev-2)]">
              <img
                src="/images/real-happy-team-laptop.jpg"
                alt="WingCX certified agent network"
                className="w-full h-[420px] object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
