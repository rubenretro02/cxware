import Link from "next/link";

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
    <section className="py-28 lg:py-36 bg-[var(--bg-elev-1)] border-y border-[var(--line)]">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-8">
        <div className="grid grid-cols-12 gap-x-8 gap-y-12">
          <div className="col-span-12 lg:col-span-5 lg:sticky lg:top-32 lg:self-start space-y-6">
            <h2 className="text-[clamp(2rem,4.4vw,3.4rem)] font-medium leading-[1.04] tracking-[-0.025em] text-balance">
              Precision of technology. Reliability of people.
            </h2>
            <p className="text-[16.5px] text-[var(--fg-muted)] leading-[1.55] max-w-[42ch]">
              Legacy BPOs are people without tech. WFM tools are tech without people. CXware ships both as a single product.
            </p>
            <Link href="/contact" className="btn btn-ghost">
              See it on your data
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M5 12h14M13 6l6 6-6 6" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          <div className="col-span-12 lg:col-span-6 lg:col-start-7">
            <ul className="border-t border-[var(--line)]">
              {rows.map((row, i) => (
                <li
                  key={row.title}
                  className="py-7 lg:py-8 border-b border-[var(--line)] grid grid-cols-12 gap-x-6 items-baseline"
                >
                  <span className="col-span-2 mono text-[12px] tabular-nums text-[var(--fg-faint)]">
                    0{i + 1}
                  </span>
                  <div className="col-span-10">
                    <h3 className="text-[18px] lg:text-[20px] font-medium tracking-[-0.01em] mb-2">
                      {row.title}
                    </h3>
                    <p className="text-[14.5px] text-[var(--fg-muted)] leading-[1.55] text-pretty max-w-[52ch]">
                      {row.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
