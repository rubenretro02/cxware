import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "About Us - WingCX Agent Solutions",
  description:
    "WingCX exists to improve lives through meaningful connections — for the brands we support and the agents who power them. Learn about our mission, values, and model.",
};

const values = [
  {
    title: "People first, always",
    body: "Technology should enhance human connection, not replace it. Every product decision starts with the agent and the customer on the other end of the line.",
  },
  {
    title: "Earn trust with results",
    body: "We don't sell promises, we publish numbers. CSAT, schedule reliability, cost per resolution — measured continuously and shared openly with every partner.",
  },
  {
    title: "Flexibility is freedom",
    body: "For brands, flexibility means paying only for productive time. For agents, it means building a career around their life — not the other way around.",
  },
  {
    title: "Quality compounds",
    body: "Top-performing agents earn priority hours. Insights from QA feed back into training and matching. Every week the program runs, it gets better.",
  },
];

const milestones = [
  {
    meta: "The problem",
    title: "Traditional workforce ops is broken",
    body: "We watched brands burn budget on overstaffed quiet weeks, then lose customers in understaffed peak ones — while temp agencies failed to close the gap and talented people sat outside rigid 9-to-5 hiring funnels.",
  },
  {
    meta: "The model",
    title: "A flexible, remote-first workforce",
    body: "WingCX was built on a simple idea: match certified, independent professionals to the brands that need them, in 30-minute increments, with AI handling the orchestration humans shouldn't do by hand.",
  },
  {
    meta: "Today",
    title: "One synchronized workforce",
    body: "We now run programs that blend AI agents and expert humans into a single operation — cutting partner costs by 25–55% while raising CSAT, and giving thousands of agents work that fits their lives.",
  },
];

const stats = [
  { value: "1,000+", label: "Pre-vetted agents in the network" },
  { value: "4.8/5", label: "Average agent quality rating" },
  { value: "24/7", label: "Coverage across time zones" },
  { value: "2 days", label: "Average time to brand certification" },
];

export default function AboutPage() {
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
            <img
              src="/images/globe-network.jpg"
              alt="WingCX global network"
              className="w-full h-[420px] object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, rgba(251,251,253,0.94) 0%, rgba(251,251,253,0.80) 30%, rgba(251,251,253,0.40) 60%, rgba(251,251,253,0.05) 100%)",
              }}
            />
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-xl pl-10 md:pl-14">
                <span className="eyebrow-brand"><span>ABOUT WINGCX</span></span>
                <h1 className="text-4xl md:text-5xl font-bold text-[var(--fg)] mt-4 mb-4 leading-[1.05]">
                  Improving lives through <span className="gradient-text">meaningful connections</span>
                </h1>
                <p className="text-[var(--fg-muted)] text-lg max-w-[46ch]">
                  For the brands we support, and for the agents who power them. That mission has
                  guided every program we&apos;ve launched since day one.
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

      {/* Story */}
      <section className="py-24 lg:py-32 bg-[var(--bg-elev-1)] border-y border-[var(--line)] relative overflow-hidden">
        <div className="aurora-blob w-[460px] h-[460px] top-[15%] right-[-120px]" style={{ opacity: 0.14 }} />
        <div className="relative mx-auto max-w-[1400px] px-5 lg:px-8">
          <ScrollReveal variant="up" className="mb-16 max-w-3xl">
            <span className="eyebrow-brand"><span>OUR STORY</span></span>
            <h2 className="text-[clamp(2rem,4.6vw,3.2rem)] font-bold leading-[1.05] tracking-[-0.025em] mt-4 text-balance">
              Built because the old model <span className="gradient-text">failed everyone</span>
            </h2>
          </ScrollReveal>

          <ol className="relative">
            <div className="hidden lg:block absolute left-[7.5%] top-2 bottom-2 w-px" style={{ background: "var(--grad)", opacity: 0.4 }} />
            {milestones.map((m, i) => (
              <ScrollReveal
                key={m.title}
                as="li"
                variant="up"
                delay={i * 100}
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

      {/* Values */}
      <section className="py-24 lg:py-32 bg-[var(--bg)] relative overflow-hidden">
        <div className="relative mx-auto max-w-[1400px] px-5 lg:px-8">
          <div className="grid grid-cols-12 gap-x-8 gap-y-12">
            <ScrollReveal variant="up" className="col-span-12 lg:col-span-5 lg:sticky lg:top-32 lg:self-start space-y-6">
              <span className="eyebrow-brand"><span>WHAT WE BELIEVE</span></span>
              <h2 className="text-[clamp(2rem,4.6vw,3.2rem)] font-bold leading-[1.05] tracking-[-0.025em] text-balance">
                The values behind <span className="gradient-text">the workforce</span>
              </h2>
              <p className="text-[16px] text-[var(--fg-muted)] leading-[1.6] max-w-[44ch]">
                A distributed workforce only works on trust. These are the commitments we make to
                every brand we represent and every agent who certifies with us.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn btn-brand btn-lg">
                  Work with us
                </Link>
                <Link href="/agents" className="btn btn-ghost btn-lg">
                  Become an agent
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal as="div" variant="stagger" className="col-span-12 lg:col-span-6 lg:col-start-7">
              <ul className="border-t border-[var(--line)]">
                {values.map((row, i) => (
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

      <CTA />
      <Footer />
    </main>
  );
}
