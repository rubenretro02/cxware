import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function WhyCXware() {
  const rows = [
    {
      title: "Cost without premium markup",
      body: "Pay productive hours, not roster overhead. Exceptional service, sane unit economics.",
    },
    {
      title: "Scale 3-5× on demand",
      body: "Flex coverage right when volume spikes, scale back without the bench.",
    },
    {
      title: "Zero spend on shrinkage",
      body: "Productive time only. Idle and attrition stay off your P&L.",
    },
    {
      title: "Compliance built in",
      body: "PCI-DSS, HIPAA, SOC II, HITRUST, GDPR. Agents are certified before they go live.",
    },
  ];

  return (
    <section className="py-28 lg:py-36 bg-[var(--bg-elev-1)] border-y border-[var(--line)] relative overflow-hidden">
      <div className="aurora-blob w-[460px] h-[460px] top-[10%] right-[-100px]" style={{ opacity: 0.16 }} />

      <div className="relative mx-auto max-w-[1400px] px-5 lg:px-8">
        <div className="grid grid-cols-12 gap-x-8 gap-y-12">
          <ScrollReveal variant="up" className="col-span-12 lg:col-span-5 lg:sticky lg:top-32 lg:self-start space-y-6">
            <h2 className="text-[clamp(2rem,4.6vw,3.4rem)] font-bold leading-[1.04] tracking-[-0.025em] text-balance">
              Precision of <span className="gradient-text">technology.</span><br />
              Reliability of <span className="gradient-text">people.</span>
            </h2>
            <p className="text-[16.5px] text-[var(--fg-muted)] leading-[1.55] max-w-[42ch]">
              Legacy BPOs are people without tech. WFM tools are tech without people. CXware ships both as a single product.
            </p>
            <Link href="/contact" className="btn btn-ghost btn-lg group">
              See it on your data
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M5 12h14M13 6l6 6-6 6" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </ScrollReveal>

          <ScrollReveal as="div" variant="stagger" className="col-span-12 lg:col-span-6 lg:col-start-7">
            <ul className="border-t border-[var(--line)]">
              {rows.map((row, i) => (
                <li
                  key={row.title}
                  className="py-7 lg:py-8 border-b border-[var(--line)] grid grid-cols-12 gap-x-6 items-baseline group hover:bg-white/[0.015] transition-colors duration-300"
                >
                  <span className="col-span-2 mono text-[12px] tabular-nums gradient-text font-bold">
                    0{i + 1}
                  </span>
                  <div className="col-span-10">
                    <h3 className="text-[18px] lg:text-[20px] font-semibold tracking-[-0.01em] mb-2 transition-colors duration-300">
                      {row.title}
                    </h3>
                    <p className="text-[14.5px] text-[var(--fg-muted)] leading-[1.55] text-pretty max-w-[52ch]">
                      {row.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
