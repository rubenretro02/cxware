"use client";

import ScrollReveal from "@/components/ScrollReveal";

export default function AgentTestimonials() {
  const testimonials = [
    {
      quote: "CXware lets me schedule work around my kids' school day--and still average 30+ hours.",
      name: "Maria R.",
      location: "Tampa",
      image: "/images/call-center-agent-2.jpg",
    },
    {
      quote: "Agent Priority Boarding keeps my calendar full. I haven't worried about hours since day one.",
      name: "Jordan T.",
      location: "Bogota",
      image: "/images/call-center-agent-1.jpg",
    },
    {
      quote: "At CXware, I feel like my voice matters. The environment encourages learning and collaboration. It's rewarding to help customers while knowing I'm supported every step of the way.",
      name: "Jamal R.",
      location: "Atlanta",
      image: "/images/agent-male-headset.jpg",
    },
    {
      quote: "Being part of CXware has boosted my confidence. The team is like a family--always ready to help. I've grown professionally and personally.",
      name: "Priya D.",
      location: "Miami",
      image: "/images/woman-laptop.jpg",
    },
  ];

  return (
    <section className="py-24 agent-section-accent">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="agent-section-label mb-4 block">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span style={{ color: "var(--agent-text-heading)" }}>Why Agents </span>
              <span className="agent-gradient-text">Love</span>
              <span style={{ color: "var(--agent-text-heading)" }}> CXware</span>
            </h2>
            <p className="text-lg" style={{ color: "var(--agent-text-secondary)" }}>
              See what keeps the best agents working on our platform
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.name} delay={index * 100}>
              <div className="agent-testimonial-card h-full">
                <div className="mb-6">
                  <svg className="w-10 h-10 text-[#2047FF]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-lg mb-6 leading-relaxed" style={{ color: "var(--agent-text-heading)" }}>
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-4 pt-4" style={{ borderTop: "1px solid var(--agent-border)" }}>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover shadow-md"
                  />
                  <div>
                    <p className="font-semibold" style={{ color: "var(--agent-text-heading)" }}>{testimonial.name}</p>
                    <p className="text-sm" style={{ color: "var(--agent-text-muted)" }}>{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
