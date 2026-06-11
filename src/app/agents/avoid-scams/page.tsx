import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import AgentCTA from "@/components/agents/AgentCTA";

export const metadata: Metadata = {
  title: "Avoid Work-From-Home Scams - WingCX Agents",
  description:
    "How to tell a legitimate WingCX opportunity from a scam: what we will never ask for, the red flags to watch, and where to report fraud.",
};

const neverList = [
  {
    title: "We never ask you to pay to get a job",
    body: "There is no application fee, no training fee, and no equipment deposit. Anyone demanding payment to 'secure your position' is not WingCX.",
  },
  {
    title: "We never send checks for equipment",
    body: "A classic scam: a check arrives, you're told to deposit it and wire part back for a 'laptop vendor.' The check bounces and you lose your money. We will never do this — you supply your own equipment.",
  },
  {
    title: "We never interview over messaging apps",
    body: "We do not conduct interviews over Telegram, WhatsApp, Skype, Signal, or text message. Real interviews happen through our application portal or a scheduled video call from our team.",
  },
  {
    title: "We only contact you after you apply",
    body: "If someone reaches out offering you a WingCX position you never applied for, it's not us. Recruiting starts with your application — always.",
  },
  {
    title: "We only use official email domains",
    body: "Legitimate messages come from @wingcx.com or @wingcxagent.com addresses. Look-alike domains (wingcx-jobs.com, wingcx-hr.net) are fraud, no matter how official the message looks.",
  },
  {
    title: "We never ask for passwords or social logins",
    body: "We will never request your social media credentials, banking passwords, or verification codes. Identity verification happens only inside our secure onboarding portal.",
  },
];

const redFlags = [
  "Pay that's far above market for 'easy work' — if it sounds too good to be true, it is",
  "Pressure to act immediately: 'positions close today,' 'reply within the hour'",
  "Job offers without an interview, or after a 5-minute chat conversation",
  "Requests for your bank account, SSN, or copies of your ID before any formal application",
  "Vague job descriptions like 'data entry' or 'package reshipping' with no real company details",
  "A recruiter whose profile was created last week, with a free email address (gmail, outlook)",
];

const reportSteps = [
  {
    title: "Stop all contact",
    body: "Don't send money, don't share more information, and don't deposit any checks. Save screenshots of every message — they help investigators.",
  },
  {
    title: "Report it to the authorities",
    body: "File a complaint with the FBI's Internet Crime Complaint Center at ic3.gov and with the FTC at reportfraud.ftc.gov. If you lost money, also contact your local police department and your bank immediately.",
  },
  {
    title: "Tell us",
    body: "If someone impersonated WingCX, forward everything to support@wingcxagent.com. We verify legitimate communications, pursue takedowns of fake domains, and warn the rest of the community.",
  },
];

export default function AvoidScamsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden bg-[var(--bg)]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="aurora-blob w-[480px] h-[480px] -top-32 -right-32" style={{ opacity: 0.18 }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl animate-fade-in-up">
            <span className="eyebrow-brand"><span>STAY SAFE</span></span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--fg)] mt-4 mb-5 leading-[1.04] tracking-[-0.025em]">
              Avoid work-from-home <span className="gradient-text">scams</span>
            </h1>
            <p className="text-[var(--fg-muted)] text-lg leading-[1.6] max-w-[58ch]">
              Remote work attracts scammers who impersonate legitimate platforms — including ours.
              Knowing how WingCX actually operates is your best defense. Here's exactly what we
              will and will not do, and how to protect yourself.
            </p>
          </div>
        </div>
      </section>

      {/* What we never do */}
      <section className="py-24 lg:py-32 bg-[var(--bg-elev-1)] border-y border-[var(--line)] relative overflow-hidden">
        <div className="relative mx-auto max-w-[1400px] px-5 lg:px-8">
          <ScrollReveal variant="up" className="mb-14 max-w-3xl">
            <span className="eyebrow-brand"><span>OUR PROMISE</span></span>
            <h2 className="text-[clamp(2rem,4.6vw,3.2rem)] font-bold leading-[1.05] tracking-[-0.025em] mt-4 text-balance">
              Six things WingCX <span className="gradient-text">will never do</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal variant="stagger" className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {neverList.map((item, i) => (
              <div key={item.title} className="card-light p-7">
                <span className="mono text-[12px] gradient-text font-bold">0{i + 1}</span>
                <h3 className="text-[18px] font-semibold tracking-[-0.01em] mt-3 mb-2.5">{item.title}</h3>
                <p className="text-[14.5px] text-[var(--fg-muted)] leading-[1.6] text-pretty">{item.body}</p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Red flags */}
      <section className="py-24 lg:py-32 bg-[var(--bg)] relative overflow-hidden">
        <div className="aurora-blob w-[420px] h-[420px] bottom-[10%] left-[-120px]" style={{ opacity: 0.12 }} />
        <div className="relative mx-auto max-w-[1400px] px-5 lg:px-8">
          <div className="grid grid-cols-12 gap-x-8 gap-y-12 items-center">
            <ScrollReveal variant="up" className="col-span-12 lg:col-span-5 space-y-6">
              <span className="eyebrow-brand"><span>RED FLAGS</span></span>
              <h2 className="text-[clamp(2rem,4.2vw,3rem)] font-bold leading-[1.05] tracking-[-0.025em] text-balance">
                Six warning signs of a <span className="gradient-text">fake opportunity</span>
              </h2>
              <p className="text-[16px] text-[var(--fg-muted)] leading-[1.6] max-w-[46ch]">
                These patterns show up across nearly every work-from-home scam, no matter which
                company the scammer pretends to be. One red flag is reason to slow down; two is
                reason to walk away.
              </p>
              <div className="rounded-2xl overflow-hidden border border-[var(--line-strong)] shadow-[var(--shadow-elev-2)]">
                <img
                  src="/images/real-woman-desk-notes.jpg"
                  alt="Agent reviewing an opportunity carefully"
                  className="w-full h-[240px] object-cover"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal as="div" variant="stagger" className="col-span-12 lg:col-span-6 lg:col-start-7">
              <ul className="border-t border-[var(--line)]">
                {redFlags.map((flag, i) => (
                  <li key={flag} className="py-5 border-b border-[var(--line)] flex items-start gap-4">
                    <span className="mono text-[12px] tabular-nums gradient-text font-bold mt-1">0{i + 1}</span>
                    <p className="text-[15px] text-[var(--fg-muted)] leading-[1.55] text-pretty">{flag}</p>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What to do */}
      <section className="py-24 lg:py-32 bg-[var(--bg-elev-1)] border-y border-[var(--line)] relative overflow-hidden">
        <div className="relative mx-auto max-w-[1400px] px-5 lg:px-8">
          <ScrollReveal variant="up" className="mb-14 max-w-3xl">
            <span className="eyebrow-brand"><span>IF IT HAPPENS</span></span>
            <h2 className="text-[clamp(2rem,4.6vw,3.2rem)] font-bold leading-[1.05] tracking-[-0.025em] mt-4 text-balance">
              Targeted by a scam? <span className="gradient-text">Do this</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal variant="stagger" className="grid md:grid-cols-3 gap-5">
            {reportSteps.map((step, i) => (
              <div key={step.title} className="card-light p-7">
                <div className="icon-box mb-4">
                  <span className="font-bold text-[15px]">{i + 1}</span>
                </div>
                <h3 className="text-[19px] font-semibold tracking-[-0.01em] mb-2.5">{step.title}</h3>
                <p className="text-[14.5px] text-[var(--fg-muted)] leading-[1.6] text-pretty">{step.body}</p>
              </div>
            ))}
          </ScrollReveal>

          <ScrollReveal variant="fade" className="mt-10">
            <div className="panel-inset p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-[14.5px] text-[var(--fg-muted)] max-w-[68ch]">
                <strong className="text-[var(--fg)]">Not sure if a message is really from us?</strong>{" "}
                Forward it to support@wingcxagent.com before you respond. We'll confirm or deny it
                within one business day — and you'll never be penalized for double-checking.
              </p>
              <a href="mailto:support@wingcxagent.com" className="btn btn-brand flex-shrink-0">
                Verify a message
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <AgentCTA />
      <Footer />
    </main>
  );
}
