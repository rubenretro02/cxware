import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import AgentCTA from "@/components/agents/AgentCTA";

export const metadata: Metadata = {
  title: "Why Agents Choose WingCX - WingCX Agents",
  description:
    "Be your own boss with real support behind you: flexible scheduling, weekly pay, transparent rates, and a community of thousands of independent agents.",
};

const reasons = [
  {
    title: "You're in control",
    body: "Choose when, where, and how often you work. Run it as your main hustle or a side gig — scale your hours up for a big month, dial them down when life needs you.",
  },
  {
    title: "Be your own boss, with backup",
    body: "You're building a home business, not taking another job. But unlike going it alone, you get onboarding, live shift support, and an agent-success team invested in your growth.",
  },
  {
    title: "Earnings you can plan around",
    body: "Every program publishes its rate up front. Track your hours in real time and get paid weekly — no waiting for month-end, no invoicing.",
  },
  {
    title: "Work that rewards quality",
    body: "Top-rated agents get first pick of new programs and prime hours. Your reputation on the platform is an asset that compounds.",
  },
  {
    title: "People you'll love serving",
    body: "Support brands you actually believe in — insurance, healthcare, retail, travel. You pick the programs that fit your experience and interests.",
  },
  {
    title: "A community that gets it",
    body: "The WingCX Crew is thousands of independent agents swapping tips, celebrating wins, and pushing each other forward. Self-employed never means alone.",
  },
];

const comparison = [
  { dimension: "Schedule", traditional: "Fixed shifts assigned to you", wingcx: "You pick 30-minute blocks that fit your life" },
  { dimension: "Location", traditional: "Commute to a call center", wingcx: "Your home office, zero commute" },
  { dimension: "Boss", traditional: "Supervisor sets your targets", wingcx: "You run your own business with our support" },
  { dimension: "Pay", traditional: "Monthly or biweekly, opaque", wingcx: "Weekly deposits, rates published up front" },
  { dimension: "Growth", traditional: "Wait for a promotion cycle", wingcx: "Performance unlocks programs and hours immediately" },
  { dimension: "Programs", traditional: "One brand, take it or leave it", wingcx: "Choose from brands across industries" },
];

const stats = [
  { value: "1,000+", label: "Independent agents on the platform" },
  { value: "4.8/5", label: "Average agent quality rating" },
  { value: "Weekly", label: "Pay, deposited automatically" },
  { value: "100%", label: "Remote — work from anywhere in the U.S." },
];

export default function WhyWingCXAgentsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden bg-[var(--bg)]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="aurora-blob w-[520px] h-[520px] -top-32 -right-32" style={{ opacity: 0.2 }} />
          <div className="aurora-blob w-[420px] h-[420px] bottom-0 left-0" style={{ opacity: 0.16, animationDelay: "-6s" }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <span className="eyebrow-brand"><span>WHY WINGCX</span></span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--fg)] mt-4 mb-5 leading-[1.04] tracking-[-0.025em]">
                {"We're in the "}
                <span className="gradient-text">people business</span>
              </h1>
              <p className="text-[var(--fg-muted)] text-lg leading-[1.6] max-w-[54ch]">
                Improving lives through meaningful connections isn't just what we do for brands —
                it starts with the agents who power every conversation. Here's why thousands of
                independent professionals build their home business on WingCX.
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <Link href="/agents#apply" className="btn btn-brand btn-lg">
                  Apply now
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M5 12h14M13 6l6 6-6 6" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link href="/agents/opportunities" className="btn btn-ghost btn-lg">
                  Browse opportunities
                </Link>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden border border-[var(--line-strong)] shadow-[var(--shadow-elev-2)]">
              <img
                src="/images/real-agent-woman-headset.jpg"
                alt="Independent WingCX agent"
                className="w-full h-[460px] object-cover"
              />
            </div>
          </div>

          <ScrollReveal variant="stagger" className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            {stats.map((s) => (
              <div key={s.label} className="panel p-6 text-center">
                <div className="stat-number mb-2">{s.value}</div>
                <p className="text-[13.5px] text-[var(--fg-muted)] leading-snug">{s.label}</p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Reasons */}
      <section className="py-24 lg:py-32 bg-[var(--bg-elev-1)] border-y border-[var(--line)] relative overflow-hidden">
        <div className="aurora-blob w-[460px] h-[460px] top-[20%] right-[-120px]" style={{ opacity: 0.14 }} />
        <div className="relative mx-auto max-w-[1400px] px-5 lg:px-8">
          <ScrollReveal variant="up" className="mb-14 max-w-3xl">
            <span className="eyebrow-brand"><span>THE REASONS</span></span>
            <h2 className="text-[clamp(2rem,4.6vw,3.2rem)] font-bold leading-[1.05] tracking-[-0.025em] mt-4 text-balance">
              Six reasons agents <span className="gradient-text">stay for years</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal variant="stagger" className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {reasons.map((r, i) => (
              <div key={r.title} className="card-light p-7">
                <span className="mono text-[12px] gradient-text font-bold">0{i + 1}</span>
                <h3 className="text-[19px] font-semibold tracking-[-0.01em] mt-3 mb-2.5">{r.title}</h3>
                <p className="text-[14.5px] text-[var(--fg-muted)] leading-[1.6] text-pretty">{r.body}</p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-24 lg:py-32 bg-[var(--bg)] relative overflow-hidden">
        <div className="relative mx-auto max-w-[1400px] px-5 lg:px-8">
          <ScrollReveal variant="up" className="mb-12 max-w-3xl">
            <span className="eyebrow-brand"><span>THE DIFFERENCE</span></span>
            <h2 className="text-[clamp(2rem,4.2vw,3rem)] font-bold leading-[1.05] tracking-[-0.025em] mt-4 text-balance">
              Traditional call center job vs. <span className="gradient-text">your WingCX business</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal variant="fade">
            <div className="card-light overflow-hidden">
              <div className="grid grid-cols-12 px-6 py-4 border-b border-[var(--line)] bg-[var(--bg-elev-2)]">
                <span className="col-span-3 label">Dimension</span>
                <span className="col-span-4 label">Traditional job</span>
                <span className="col-span-5 label gradient-text">With WingCX</span>
              </div>
              <ul className="divide-y divide-[var(--line)]">
                {comparison.map((row) => (
                  <li key={row.dimension} className="grid grid-cols-12 gap-x-4 px-6 py-4 items-start">
                    <span className="col-span-3 text-[14px] font-semibold text-[var(--fg)] pt-0.5">{row.dimension}</span>
                    <span className="col-span-4 text-[14px] text-[var(--fg-dim)] leading-[1.5] pr-4">{row.traditional}</span>
                    <span className="col-span-5 text-[14px] text-[var(--fg-muted)] leading-[1.5] flex items-start gap-2.5">
                      <svg className="w-5 h-5 mt-px flex-shrink-0 text-[var(--brand-purple)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {row.wingcx}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade" className="mt-10">
            <div className="panel-inset p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-[14.5px] text-[var(--fg-muted)] max-w-[68ch]">
                <strong className="text-[var(--fg)]">Ready to see if you qualify?</strong>{" "}
                Check the eligibility requirements, then start your application — most agents go
                from application to first paid hour in under three weeks.
              </p>
              <Link href="/agents/eligibility" className="btn btn-ghost flex-shrink-0">
                Check eligibility
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <AgentCTA />
      <Footer />
    </main>
  );
}
