"use client";

import ScrollReveal from "@/components/ScrollReveal";

const testimonials = [
  {
    quote: "WingCX lets me schedule work around my kids' school day — and still average 30+ hours.",
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
    quote:
      "At WingCX, I feel like my voice matters. The environment encourages learning and collaboration. It's rewarding to help customers while knowing I'm supported.",
    name: "Jamal R.",
    location: "Atlanta",
    image: "/images/agent-male-headset.jpg",
  },
  {
    quote:
      "Being part of WingCX has boosted my confidence. The team is like a family — always ready to help. I've grown professionally and personally.",
    name: "Priya D.",
    location: "Miami",
    image: "/images/woman-laptop.jpg",
  },
];

export default function AgentTestimonials() {
  const track = [...testimonials, ...testimonials];

  return (
    <section className="py-28 lg:py-32 bg-[var(--bg-elev-1)] border-y border-[var(--line)] relative overflow-hidden">
      <div className="aurora-blob w-[460px] h-[460px] top-[20%] left-[-120px]" style={{ opacity: 0.16 }} />

      <div className="relative mx-auto max-w-[1400px] px-5 lg:px-8 mb-14">
        <ScrollReveal variant="up">
          <div className="grid grid-cols-12 gap-x-8 gap-y-4">
            <div className="col-span-12 lg:col-span-7 space-y-4">
              <span className="eyebrow-brand"><span>TESTIMONIALS</span></span>
              <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-bold leading-[1.04] tracking-[-0.025em] text-balance">
                Why agents <span className="gradient-text">love WingCX.</span>
              </h2>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <div className="marquee-wrap marquee-mask">
        <div className="marquee-track">
          {track.map((t, i) => (
            <figure
              key={`${t.name}-${i}`}
              className="marquee-item flex-shrink-0 w-[340px] lg:w-[420px] rounded-[var(--r-lg)] border border-[var(--line)] bg-[var(--bg)] p-7 flex flex-col hover:border-[var(--line-strong)] hover:-translate-y-1 transition-all duration-500 ease-[var(--ease-cinema)]"
            >
              <svg className="w-7 h-7 mb-5" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id={`agent-quote-grad-${i}`} x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#2047FF" />
                    <stop offset="100%" stopColor="#C873E5" />
                  </linearGradient>
                </defs>
                <path
                  d="M14 21v-7.4c0-5.7 3.7-9.6 9-10.6l1 2.1c-2.4.9-4 3.6-4 5.9h4v10h-10zm-14 0v-7.4c0-5.7 3.7-9.6 9-10.6l1 2.1c-2.4.9-4 3.6-4 5.9h4v10h-10z"
                  fill={`url(#agent-quote-grad-${i})`}
                />
              </svg>
              <blockquote className="text-[15.5px] text-[var(--fg)] leading-[1.55] text-pretty flex-1">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-[var(--line)] flex items-center gap-3">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover shrink-0"
                />
                <div>
                  <div className="text-[14px] text-[var(--fg)] font-semibold">{t.name}</div>
                  <div className="mono text-[10.5px] uppercase tracking-[0.12em] text-[var(--fg-dim)]">
                    {t.location}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
