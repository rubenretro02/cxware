import ScrollReveal from "./ScrollReveal";

export default function ProblemSection() {
  const problems = [
    {
      tag: "Overstaffed",
      headline: "Idle agents quietly burn margin.",
      body: "Payroll keeps running. Coverage doesn't change. The cost lands at month-end.",
    },
    {
      tag: "Understaffed",
      headline: "Hold times push CSAT off a cliff.",
      body: "Queues stretch, customers walk, churn shows up two quarters later.",
    },
    {
      tag: "Temp agencies",
      headline: "Generic temps never close the gap.",
      body: "Light skills, weak engagement, and a compliance posture you can't underwrite.",
    },
  ];

  return (
    <section className="py-28 lg:py-36 border-t border-[var(--line)] relative overflow-hidden">
      <div className="aurora-blob w-[460px] h-[460px] top-0 right-[10%]" style={{ opacity: 0.15 }} />

      <div className="relative mx-auto max-w-[1400px] px-5 lg:px-8">
        <div className="grid grid-cols-12 gap-x-8 gap-y-10">
          <ScrollReveal variant="up" className="col-span-12 lg:col-span-5">
            <h2 className="text-[clamp(2rem,4.6vw,3.6rem)] font-bold leading-[1.04] tracking-[-0.025em] text-balance">
              Traditional workforce
              <br />
              ops is <span className="gradient-text">broken.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal variant="up" delay={120} className="col-span-12 lg:col-span-6 lg:col-start-7 self-end">
            <p className="text-[17px] text-[var(--fg-muted)] max-w-[55ch] leading-[1.55]">
              Volume swings every hour. Static staffing forces a trade between idle payroll
              and angry queues. Both quietly tax the business.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal as="ol" variant="stagger" className="mt-20 lg:mt-24 list-none">
          {problems.map((p, i) => (
            <li
              key={p.tag}
              className="grid grid-cols-12 gap-x-8 py-10 lg:py-12 border-t border-[var(--line)] last:border-b group hover:bg-[rgba(255,255,255,0.015)] transition-colors duration-300"
            >
              <div className="col-span-2 lg:col-span-1">
                <span className="mono text-[12px] gradient-text font-bold tabular-nums">
                  0{i + 1}
                </span>
              </div>
              <div className="col-span-10 lg:col-span-3">
                <span className="mono text-[11.5px] uppercase tracking-[0.16em] text-[var(--fg-dim)]">
                  {p.tag}
                </span>
              </div>
              <div className="col-span-12 lg:col-span-5 mt-3 lg:mt-0">
                <h3 className="text-[22px] lg:text-[26px] font-semibold leading-[1.15] tracking-[-0.015em] text-balance transition-colors duration-300 group-hover:text-white">
                  {p.headline}
                </h3>
              </div>
              <div className="col-span-12 lg:col-span-3 mt-3 lg:mt-0">
                <p className="text-[15px] text-[var(--fg-muted)] leading-[1.55] text-pretty">
                  {p.body}
                </p>
              </div>
            </li>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
