import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import AgentCTA from "@/components/agents/AgentCTA";
import EligibleStates from "@/components/agents/EligibleStates";

export const metadata: Metadata = {
  title: "Agent Eligibility Requirements - WingCX Agents",
  description:
    "Everything you need to qualify as a WingCX independent agent: basic eligibility, background check, home office setup, and technical requirements.",
};

const basics = [
  {
    title: "18 years or older",
    body: "You must be a legal adult to contract with WingCX as an independent professional.",
  },
  {
    title: "High school diploma or equivalent",
    body: "A diploma, GED, or equivalent credential is required for every program on the platform.",
  },
  {
    title: "U.S. resident, authorized to work",
    body: "You must live in, and be legally authorized to work in, the United States. Programs are available in most states; availability is confirmed during your application.",
  },
  {
    title: "Customer service experience",
    body: "Most programs ask for 2–3 years of customer-facing experience. Strong communicators with less experience can qualify for entry programs.",
  },
];

const checkFacts = [
  {
    title: "It's fast",
    body: "Most background checks complete in 1–3 business days. We'll notify you the moment yours clears so you can start certification.",
  },
  {
    title: "What we screen for",
    body: "Programs handle payments and sensitive data, so records involving theft, fraud, dishonesty, breach of trust, or violent crime are disqualifying. Multiple recent misdemeanors are reviewed case by case.",
  },
  {
    title: "Your data stays protected",
    body: "Checks are run by an accredited consumer-reporting agency with your written consent, and results are used only for qualification — never shared with clients.",
  },
];

export default function EligibilityPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden bg-[var(--bg)]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="aurora-blob w-[520px] h-[520px] -top-32 -right-32" style={{ opacity: 0.2 }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <span className="eyebrow-brand"><span>ELIGIBILITY</span></span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--fg)] mt-4 mb-5 leading-[1.04] tracking-[-0.025em]">
                What it takes to <span className="gradient-text">work with us</span>
              </h1>
              <p className="text-[var(--fg-muted)] text-lg leading-[1.6] max-w-[54ch]">
                WingCX agents run their own home business serving brands they choose. Before you
                apply, make sure you meet the basics below — it saves you time and gets you to
                your first paid hour faster.
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <Link href="/agents#apply" className="btn btn-brand btn-lg">
                  Apply now
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M5 12h14M13 6l6 6-6 6" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link href="/agents/experience" className="btn btn-ghost btn-lg">
                  See the agent experience
                </Link>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden border border-[var(--line-strong)] shadow-[var(--shadow-elev-2)]">
              <img
                src="/images/real-headset-man-office.jpg"
                alt="WingCX agent taking a call from her home office"
                className="w-full h-[420px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Basic requirements */}
      <section className="py-24 lg:py-32 bg-[var(--bg-elev-1)] border-y border-[var(--line)] relative overflow-hidden">
        <div className="relative mx-auto max-w-[1400px] px-5 lg:px-8">
          <ScrollReveal variant="up" className="mb-14 max-w-3xl">
            <span className="eyebrow-brand"><span>THE BASICS</span></span>
            <h2 className="text-[clamp(2rem,4.6vw,3.2rem)] font-bold leading-[1.05] tracking-[-0.025em] mt-4 text-balance">
              Four things <span className="gradient-text">every agent needs</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal variant="stagger" className="grid md:grid-cols-2 gap-5">
            {basics.map((b, i) => (
              <div key={b.title} className="card-light p-7">
                <span className="mono text-[12px] gradient-text font-bold">0{i + 1}</span>
                <h3 className="text-[19px] font-semibold tracking-[-0.01em] mt-3 mb-2.5">{b.title}</h3>
                <p className="text-[14.5px] text-[var(--fg-muted)] leading-[1.6] text-pretty">{b.body}</p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Background check */}
      <section className="py-24 lg:py-32 bg-[var(--bg)] relative overflow-hidden">
        <div className="aurora-blob w-[420px] h-[420px] top-[20%] left-[-120px]" style={{ opacity: 0.12 }} />
        <div className="relative mx-auto max-w-[1400px] px-5 lg:px-8">
          <div className="grid grid-cols-12 gap-x-8 gap-y-12">
            <ScrollReveal variant="up" className="col-span-12 lg:col-span-5 space-y-6">
              <span className="eyebrow-brand"><span>BACKGROUND CHECK</span></span>
              <h2 className="text-[clamp(2rem,4.2vw,3rem)] font-bold leading-[1.05] tracking-[-0.025em] text-balance">
                One quick check, <span className="gradient-text">then you're in</span>
              </h2>
              <p className="text-[16px] text-[var(--fg-muted)] leading-[1.6] max-w-[46ch]">
                Because agents handle real customer data for real brands, every applicant completes
                a background check before certification. It's straightforward, and we never make
                you guess where you stand.
              </p>
            </ScrollReveal>

            <ScrollReveal as="div" variant="stagger" className="col-span-12 lg:col-span-6 lg:col-start-7">
              <ul className="border-t border-[var(--line)]">
                {checkFacts.map((row, i) => (
                  <li key={row.title} className="py-7 border-b border-[var(--line)] grid grid-cols-12 gap-x-6 items-baseline">
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

      {/* Eligible states map */}
      <EligibleStates />

      {/* Setup pointer + contractor note */}
      <section className="py-16 bg-[var(--bg-elev-1)] border-y border-[var(--line)] relative overflow-hidden">
        <div className="relative mx-auto max-w-[1400px] px-5 lg:px-8 space-y-5">
          <ScrollReveal variant="fade">
            <div className="panel-inset p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-[14.5px] text-[var(--fg-muted)] max-w-[68ch]">
                <strong className="text-[var(--fg)]">Wondering about equipment?</strong>{" "}
                Workspace, internet, computer, headset, and security standards live on the
                requirements section — expand each card to see exactly what every program needs.
              </p>
              <Link href="/agents#requirements" className="btn btn-brand flex-shrink-0">
                See setup requirements
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="fade" delay={100}>
            <div className="panel-inset p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-[14.5px] text-[var(--fg-muted)] max-w-[68ch]">
                <strong className="text-[var(--fg)]">You're an independent professional.</strong>{" "}
                WingCX agents are self-employed independent contractors, not employees. You choose
                when, where, and how often to work — and you supply your own qualifying equipment.
              </p>
              <Link href="/agents#faq" className="btn btn-ghost flex-shrink-0">
                Read the FAQ
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
