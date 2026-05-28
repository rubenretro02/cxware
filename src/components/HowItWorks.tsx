import ScrollReveal from "./ScrollReveal";

export default function HowItWorks() {
  const steps = [
    {
      title: "Discovery & data audit",
      body: "We review your service levels, call volumes, and seasonal spikes to pin the real staffing curve.",
      meta: "Week 1",
    },
    {
      title: "Forecast & match",
      body: "You define ideal agent profiles. The platform matches pre-vetted certified professionals against your forecast.",
      meta: "Week 1–2",
    },
    {
      title: "Brand certification",
      body: "Agents complete your brand-specific training. Average time to certification: 2 days. Quality verified before going live.",
      meta: "Week 2",
    },
    {
      title: "Launch & monitor",
      body: "Live in dashboards day one. AI-assisted analytics and automated QA from the first interaction.",
      meta: "Week 3",
    },
  ];

  return (
    <section id="how-it-works" className="py-28 lg:py-36 bg-[var(--bg-elev-1)] border-y border-[var(--line)] relative overflow-hidden">
      <div className="aurora-blob w-[500px] h-[500px] bottom-[-100px] left-[-100px]" style={{ opacity: 0.18 }} />

      <div className="relative mx-auto max-w-[1400px] px-5 lg:px-8">
        <ScrollReveal variant="up" className="mb-16 lg:mb-24">
          <div className="grid grid-cols-12 gap-x-8 gap-y-6">
            <div className="col-span-12 lg:col-span-8">
              <h2 className="text-[clamp(2rem,4.6vw,3.4rem)] font-bold leading-[1.04] tracking-[-0.025em] text-balance">
                From discovery to <span className="gradient-text">live coverage</span> in under three weeks.
              </h2>
            </div>
          </div>
        </ScrollReveal>

        <ol className="relative">
          <div className="hidden lg:block absolute left-[7.5%] top-2 bottom-2 w-px" style={{ background: "var(--grad)", opacity: 0.4 }} />
          {steps.map((step, i) => (
            <ScrollReveal
              key={step.title}
              as="li"
              variant="up"
              delay={i * 100}
              className="grid grid-cols-12 gap-x-8 py-8 lg:py-12 relative list-none"
            >
              <div className="col-span-12 lg:col-span-2 flex lg:block items-baseline gap-3">
                <span className="mono text-[12px] text-[var(--fg-faint)] tabular-nums uppercase tracking-[0.14em]">
                  Step 0{i + 1}
                </span>
                <span className="mono text-[12px] gradient-text font-bold lg:block lg:mt-2">{step.meta}</span>
              </div>

              <div className="hidden lg:flex col-span-1 justify-center">
                <span className="mt-[10px] w-2.5 h-2.5 rounded-full ring-4 ring-[var(--bg-elev-1)]"
                      style={{ background: "var(--grad)", boxShadow: "0 0 16px rgba(200, 115, 229, 0.5)" }} />
              </div>

              <div className="col-span-12 lg:col-span-5 mt-3 lg:mt-0">
                <h3 className="text-[24px] lg:text-[28px] font-semibold leading-[1.15] tracking-[-0.015em]">
                  {step.title}
                </h3>
              </div>
              <div className="col-span-12 lg:col-span-4 mt-3 lg:mt-0">
                <p className="text-[15.5px] text-[var(--fg-muted)] leading-[1.55] text-pretty">
                  {step.body}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
