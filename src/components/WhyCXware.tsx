import Link from "next/link";

export default function WhyCXware() {
  const benefits = [
    {
      label: "Benefit",
      title: "Incredibly cost-effective workforce ops",
      description: "Provide your customers with exceptional service without premium BPO markups.",
    },
    {
      label: "Benefit",
      title: "Scale on-demand",
      description: "Flex 3-5x agents right when your customers need them most, and back down when they don't.",
    },
    {
      label: "Benefit",
      title: "Pay only for productive time",
      description: "Never pay for shrinkage again. That means zero spend on idle time and attrition.",
    },
    {
      label: "Benefit",
      title: "Built-in compliance",
      description: "PCI-DSS, HIPAA, SOC II, HITRUST, GDPR—all baked in with certified agents.",
    },
  ];

  return (
    <section className="py-24" style={{ background: 'var(--bg-light)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="lg:sticky lg:top-32">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-[#FFFFFF]">Why </span>
              <span className="gradient-text">CXware</span>
            </h2>
            <p className="text-lg text-[#8B92A5] mb-8">
              CXware delivers the precision of technology and the reliability of people—outperforming legacy BPOs (people without tech) and WFM solutions (tech without people).
            </p>
            <Link href="#contact" className="btn-primary">
              Learn More
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="card-light p-6 space-y-3 hover:shadow-xl transition-all"
              >
                <span className="section-label">{benefit.label}</span>
                <h3 className="text-lg font-semibold text-[#FFFFFF]">{benefit.title}</h3>
                <p className="text-sm text-[#8B92A5]">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
