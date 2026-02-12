"use client";

import ScrollReveal from "@/components/ScrollReveal";

export default function HowToStart() {
  const steps = [
    {
      number: "01",
      title: "Apply Online",
      description: "Fill out our quick application and submit a short video interview so we can learn about your experience.",
    },
    {
      number: "02",
      title: "Get Certified",
      description: "Complete our selection and skills validation process. Upload your resume and complete your profile.",
    },
    {
      number: "03",
      title: "Pick Your Shifts",
      description: "Choose the project/opportunity that best fits you. Browse available shifts and claim the ones that work for your schedule.",
    },
    {
      number: "04",
      title: "Start Working",
      description: "Receive training, access the necessary tools, and start working. Earn money at your own pace.",
    },
  ];

  return (
    <section id="how-to-start" className="py-24" style={{ background: "var(--agent-bg-primary)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span style={{ color: "var(--agent-text-heading)" }}>How to </span>
              <span className="agent-gradient-text">Get Started</span>
            </h2>
            <p className="text-lg" style={{ color: "var(--agent-text-secondary)" }}>
              {"Here's a look at what you can expect."}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <ScrollReveal key={step.number} delay={index * 120}>
              <div className="relative group h-full">
                <div className="agent-card p-6 h-full">
                  <span className="agent-big-number text-6xl mb-6 block">{step.number}</span>
                  <span className="agent-section-label mb-2 block">Step {index + 1}</span>
                  <h3 className="text-xl font-semibold mb-3" style={{ color: "var(--agent-text-heading)" }}>{step.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--agent-text-secondary)" }}>{step.description}</p>
                </div>
                {/* Connector line between steps */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-[2px] bg-gradient-to-r from-[#2047FF]/20 to-[#7C3AED]/20" />
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
