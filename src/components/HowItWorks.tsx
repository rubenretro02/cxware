export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Data Audit",
      description: "We review your current service levels, call volumes, and seasonal spikes to identify optimal staffing needs.",
    },
    {
      number: "02",
      title: "Workforce Forecast & Optimization",
      description: "Define ideal agent profiles and upload forecasts. Our platform matches you with pre-vetted, certified professionals.",
    },
    {
      number: "03",
      title: "Rapid Certification",
      description: "Agents complete brand-specific training with average completion time of 2 days. Quality verified before going live.",
    },
    {
      number: "04",
      title: "Launch & Monitor",
      description: "Go live with real-time dashboards, AI-powered analytics, and automated quality monitoring.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-[#0C0227]">How to </span>
            <span className="gradient-text">Get Started</span>
          </h2>
          <p className="text-lg text-[#6b687a]">
            Here's a look at what you can expect.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative group"
            >
              {/* Card with gradient background on hover */}
              <div className="card-light p-6 h-full transition-all group-hover:shadow-xl">
                {/* Big Number */}
                <div className="big-number text-6xl mb-6">{step.number}</div>

                {/* Step Label */}
                <span className="section-label mb-2 block">Step {index + 1}</span>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#0C0227] mb-3">{step.title}</h3>

                {/* Description */}
                <p className="text-[#6b687a] text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
