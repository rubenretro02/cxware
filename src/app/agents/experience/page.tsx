import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import AgentTestimonials from "@/components/agents/AgentTestimonials";
import AgentCTA from "@/components/agents/AgentCTA";

export const metadata: Metadata = {
  title: "The Agent Experience - WingCX Agents",
  description:
    "What it's actually like to work as a WingCX independent agent: pick your shifts, certify fast, get paid weekly, and join a community that has your back.",
};

const rhythm = [
  {
    meta: "You choose",
    title: "Work on your own terms",
    body: "Open the schedule, grab the 30-minute blocks that fit your life, skip the ones that don't. Early mornings before the kids wake up, evenings after class, full weeks when you want to push — the calendar is yours.",
  },
  {
    meta: "You're backed",
    title: "A team invested in your success",
    body: "From your first onboarding call through every certification, a dedicated agent-success team is on your side. Stuck mid-shift? Live support is one click away. Nobody works alone here.",
  },
  {
    meta: "You're paid",
    title: "Weekly deposits, transparent rates",
    body: "Every program shows its rate before you commit. Hours are tracked automatically and deposits land in your account weekly — no invoicing, no chasing payments.",
  },
  {
    meta: "You grow",
    title: "Performance opens doors",
    body: "Top-rated agents get priority access to new programs and the most desirable hours. The better you perform, the more the platform works for you.",
  },
];

const community = [
  "A private agent community for tips, wins, and honest talk about programs",
  "Seasonal challenges and recognition for top performers",
  "Peer mentorship from agents who've been where you are",
  "Direct feedback channels — agent input shapes how the platform evolves",
];

const stats = [
  { value: "30 min", label: "Smallest schedulable shift block" },
  { value: "2 days", label: "Average time to brand certification" },
  { value: "Weekly", label: "Pay deposited to your account" },
  { value: "4.8/5", label: "Average agent quality rating" },
];

export default function AgentExperiencePage() {
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
          <div className="relative rounded-3xl overflow-hidden mb-16 border border-[var(--line-strong)] shadow-[var(--shadow-elev-2)]">
            <img
              src="/images/agent-hero-banner.jpg"
              alt="WingCX agent at her home workspace"
              className="w-full h-[420px] object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, rgba(251,251,253,0.97) 0%, rgba(251,251,253,0.90) 35%, rgba(251,251,253,0.62) 65%, rgba(251,251,253,0.25) 100%)",
              }}
            />
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-xl pl-10 md:pl-14 animate-fade-in-up">
                <span className="eyebrow-brand"><span>THE AGENT EXPERIENCE</span></span>
                <h1 className="text-4xl md:text-5xl font-bold text-[var(--fg)] mt-4 mb-4 leading-[1.05]">
                  Love what you do, <span className="gradient-text">on your own terms</span>
                </h1>
                <p className="text-[var(--fg-muted)] text-lg max-w-[46ch]">
                  Our agents are parents, students, caretakers, artists, military spouses, and
                  adventurers. What they share: work that bends around life, not the other way
                  around.
                </p>
              </div>
            </div>
          </div>

          <ScrollReveal variant="stagger" className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="panel p-6 text-center">
                <div className="stat-number mb-2">{s.value}</div>
                <p className="text-[13.5px] text-[var(--fg-muted)] leading-snug">{s.label}</p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* The rhythm of the work */}
      <section className="py-24 lg:py-32 bg-[var(--bg-elev-1)] border-y border-[var(--line)] relative overflow-hidden">
        <div className="aurora-blob w-[460px] h-[460px] top-[15%] right-[-120px]" style={{ opacity: 0.14 }} />
        <div className="relative mx-auto max-w-[1400px] px-5 lg:px-8">
          <ScrollReveal variant="up" className="mb-16 max-w-3xl">
            <span className="eyebrow-brand"><span>HOW IT FEELS</span></span>
            <h2 className="text-[clamp(2rem,4.6vw,3.2rem)] font-bold leading-[1.05] tracking-[-0.025em] mt-4 text-balance">
              Time for the things <span className="gradient-text">that matter</span>
            </h2>
          </ScrollReveal>

          <ol className="relative">
            <div className="hidden lg:block absolute left-[7.5%] top-2 bottom-2 w-px" style={{ background: "var(--grad)", opacity: 0.4 }} />
            {rhythm.map((m, i) => (
              <ScrollReveal
                key={m.title}
                as="li"
                variant="up"
                delay={i * 90}
                className="grid grid-cols-12 gap-x-8 py-8 lg:py-12 relative list-none"
              >
                <div className="col-span-12 lg:col-span-2">
                  <span className="mono text-[12px] gradient-text font-bold uppercase tracking-[0.14em]">{m.meta}</span>
                </div>
                <div className="hidden lg:flex col-span-1 justify-center">
                  <span
                    className="mt-[10px] w-2.5 h-2.5 rounded-full ring-4 ring-[var(--bg-elev-1)]"
                    style={{ background: "var(--grad)", boxShadow: "0 0 16px rgba(200, 115, 229, 0.5)" }}
                  />
                </div>
                <div className="col-span-12 lg:col-span-5 mt-3 lg:mt-0">
                  <h3 className="text-[24px] lg:text-[28px] font-semibold leading-[1.15] tracking-[-0.015em]">{m.title}</h3>
                </div>
                <div className="col-span-12 lg:col-span-4 mt-3 lg:mt-0">
                  <p className="text-[15.5px] text-[var(--fg-muted)] leading-[1.55] text-pretty">{m.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Community */}
      <section className="py-24 lg:py-32 bg-[var(--bg)] relative overflow-hidden">
        <div className="relative mx-auto max-w-[1400px] px-5 lg:px-8 grid grid-cols-12 gap-x-8 gap-y-10 items-center">
          <ScrollReveal variant="up" className="col-span-12 lg:col-span-6 space-y-6">
            <span className="eyebrow-brand"><span>THE WINGCX CREW</span></span>
            <h2 className="text-[clamp(2rem,4.2vw,3rem)] font-bold leading-[1.05] tracking-[-0.025em] text-balance">
              Self-employed, <span className="gradient-text">never on your own</span>
            </h2>
            <p className="text-[16px] text-[var(--fg-muted)] leading-[1.6] max-w-[52ch]">
              Thousands of independent agents make up the WingCX Crew. It's where new agents find
              their footing, veterans share what works, and everyone celebrates the wins — big
              and small.
            </p>
            <ul className="space-y-3">
              {community.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-[var(--fg-muted)]">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-[var(--brand-purple)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link href="/agents#apply" className="btn btn-brand btn-lg">
                Apply now
              </Link>
              <Link href="/agents/eligibility" className="btn btn-ghost btn-lg">
                Check eligibility first
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="up" delay={120} className="col-span-12 lg:col-span-5 lg:col-start-8">
            <div className="rounded-3xl overflow-hidden border border-[var(--line-strong)] shadow-[var(--shadow-elev-2)]">
              <img
                src="/images/real-happy-team-laptop.jpg"
                alt="WingCX agents connecting as a community"
                className="w-full h-[440px] object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <AgentTestimonials />
      <AgentCTA />
      <Footer />
    </main>
  );
}
