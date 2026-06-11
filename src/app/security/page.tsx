import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Security & Compliance - WingCX Agent Solutions",
  description:
    "A security-first operation built for regulated industries. WingCX aligns with PCI-DSS, HIPAA, SOC 2, and GDPR requirements with 100% interaction monitoring.",
};

const frameworks = [
  {
    name: "PCI-DSS",
    body: "Payment card data is handled under PCI-DSS-aligned controls — tokenized where possible, never stored on agent devices.",
  },
  {
    name: "HIPAA",
    body: "Healthcare programs run under HIPAA-aligned safeguards with signed BAAs, PHI minimization, and role-based access.",
  },
  {
    name: "SOC 2",
    body: "Our platform and operational controls are built to SOC 2 trust principles: security, availability, and confidentiality.",
  },
  {
    name: "GDPR",
    body: "Data subject rights, purpose limitation, and processing agreements are built into how programs handle personal data.",
  },
  {
    name: "HITRUST",
    body: "For regulated healthcare partners, controls map to the HITRUST CSF so your risk team isn't starting from zero.",
  },
  {
    name: "CCPA",
    body: "California consumer rights — access, deletion, and opt-out of sale — are supported across every program we operate.",
  },
];

const controls = [
  {
    title: "Verified remote workforce",
    body: "Every agent is identity-verified and background-checked before certification. Access to your systems is provisioned per-program, least-privilege, and revoked the moment an engagement ends.",
  },
  {
    title: "Secure-by-default endpoints",
    body: "Agent workstations meet a hardened baseline — encrypted disks, locked-down browsers, no local storage of customer data — enforced and attested before each shift.",
  },
  {
    title: "100% interaction monitoring",
    body: "AI-assisted QA reviews every interaction for compliance and quality, not a sample. Anomalies surface to your dedicated performance team in near real time.",
  },
  {
    title: "Encryption everywhere",
    body: "Data is encrypted in transit and at rest. Customer data lives in your systems of record — agents work inside your stack, not copies of it.",
  },
  {
    title: "Continuous risk management",
    body: "Access reviews, vendor assessments, and incident response runbooks are exercised on a schedule, with findings tracked to closure.",
  },
  {
    title: "Call recording governance",
    body: "Where interactions are recorded for training or quality assurance, retention and access follow documented policy and applicable law.",
  },
];

export default function SecurityPage() {
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
          <div className="max-w-3xl animate-fade-in-up">
            <span className="eyebrow-brand"><span>SECURITY &amp; COMPLIANCE</span></span>
            <h1 className="text-4xl md:text-6xl font-bold text-[var(--fg)] mt-4 mb-5 leading-[1.04] tracking-[-0.025em]">
              Built for <span className="gradient-text">regulated industries</span>
            </h1>
            <p className="text-[var(--fg-muted)] text-lg leading-[1.6] max-w-[58ch]">
              A distributed workforce demands more security discipline, not less. Our security-first
              approach and commitment to compliance keep your customer operations protected,
              reliable, and audit-ready — across insurance, healthcare, finance, and beyond.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link href="/contact" className="btn btn-brand btn-lg">
                Talk to our team
              </Link>
              <Link href="/why-wingcx" className="btn btn-ghost btn-lg">
                Why WingCX
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Frameworks */}
      <section className="py-24 lg:py-32 bg-[var(--bg-elev-1)] border-y border-[var(--line)] relative overflow-hidden">
        <div className="aurora-blob w-[460px] h-[460px] top-[20%] right-[-120px]" style={{ opacity: 0.14 }} />
        <div className="relative mx-auto max-w-[1400px] px-5 lg:px-8">
          <ScrollReveal variant="up" className="mb-14 max-w-3xl">
            <span className="eyebrow-brand"><span>FRAMEWORKS</span></span>
            <h2 className="text-[clamp(2rem,4.6vw,3.2rem)] font-bold leading-[1.05] tracking-[-0.025em] mt-4 text-balance">
              Aligned with the standards <span className="gradient-text">your auditors expect</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal variant="stagger" className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {frameworks.map((f) => (
              <div key={f.name} className="card-light p-7">
                <div className="icon-box-secondary mb-4">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-[19px] font-semibold tracking-[-0.01em] mb-2.5 mono">{f.name}</h3>
                <p className="text-[14.5px] text-[var(--fg-muted)] leading-[1.6] text-pretty">{f.body}</p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Operational controls */}
      <section className="py-24 lg:py-32 bg-[var(--bg)] relative overflow-hidden">
        <div className="relative mx-auto max-w-[1400px] px-5 lg:px-8">
          <div className="grid grid-cols-12 gap-x-8 gap-y-12">
            <ScrollReveal variant="up" className="col-span-12 lg:col-span-5 lg:sticky lg:top-32 lg:self-start space-y-6">
              <span className="eyebrow-brand"><span>OPERATIONAL CONTROLS</span></span>
              <h2 className="text-[clamp(2rem,4.6vw,3.2rem)] font-bold leading-[1.05] tracking-[-0.025em] text-balance">
                Security that runs <span className="gradient-text">every shift</span>
              </h2>
              <p className="text-[16px] text-[var(--fg-muted)] leading-[1.6] max-w-[44ch]">
                Certifications matter, but day-to-day discipline matters more. These controls apply
                to every agent, every program, every interaction.
              </p>
              <div className="rounded-2xl overflow-hidden border border-[var(--line-strong)] shadow-[var(--shadow-elev-2)]">
                <img
                  src="/images/real-woman-office-screen.jpg"
                  alt="WingCX infrastructure and data center security"
                  className="w-full h-[260px] object-cover"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal as="div" variant="stagger" className="col-span-12 lg:col-span-6 lg:col-start-7">
              <ul className="border-t border-[var(--line)]">
                {controls.map((row, i) => (
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
