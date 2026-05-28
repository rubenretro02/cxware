import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

type Service = {
  title: string;
  description: string;
  category: string;
  href: string;
  span?: "large" | "tall" | "wide";
  image?: string;
};

const services: Service[] = [
  {
    category: "Call Center Outsourcing",
    title: "Customer service",
    description:
      "Inbound and outbound calls for billing, accounts, and general support, handled with empathy and brand precision.",
    href: "/services/customer-service-outsourcing",
    span: "large",
    image: "/images/call-center-team.jpg",
  },
  {
    category: "Live Chat",
    title: "Live chat",
    description: "Real-time chat that helps customers complete tasks fast.",
    href: "/services/live-chat-support",
  },
  {
    category: "24/7 Help Desk",
    title: "24/7 help desk",
    description: "Round-the-clock support for product, technical, and account questions.",
    href: "/services/help-desk",
  },
  {
    category: "Healthcare Support",
    title: "Healthcare patient support",
    description: "Compassionate, compliant support that connects patients with care.",
    href: "/services/healthcare-support",
    span: "wide",
    image: "/images/agent-headset-woman.jpg",
  },
  {
    category: "Sales Support",
    title: "Insurance sales",
    description: "Licensed agents close policies with the right product fit.",
    href: "/services/insurance",
  },
  {
    category: "Tax Season",
    title: "Tax season surge",
    description: "Elastic coverage that holds up through April peaks.",
    href: "/services/tax-support",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 lg:py-36 border-t border-[var(--line)] relative overflow-hidden">
      <div className="aurora-blob w-[520px] h-[520px] top-[40%] left-[-150px]" style={{ opacity: 0.12 }} />

      <div className="relative mx-auto max-w-[1400px] px-5 lg:px-8">
        <ScrollReveal variant="up" className="mb-14">
          <div className="grid grid-cols-12 gap-x-8 gap-y-6">
            <div className="col-span-12 lg:col-span-7 space-y-4">
              <span className="eyebrow-brand"><span>THE PLATFORM</span></span>
              <h2 className="text-[clamp(2rem,4.6vw,3.4rem)] font-bold leading-[1.04] tracking-[-0.025em] text-balance">
                One operations layer for <span className="gradient-text">every contact center.</span>
              </h2>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal as="div" variant="stagger" className="grid grid-cols-12 gap-4 lg:gap-5 auto-rows-[minmax(0,1fr)]">
          {services.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className={`group relative overflow-hidden rounded-[var(--r-lg)] border border-[var(--line)] bg-[var(--bg-elev-1)] flex flex-col justify-between p-6 lg:p-7 transition-all duration-500 ease-[var(--ease-cinema)] hover:border-[var(--line-strong)] hover:-translate-y-1 hover:shadow-[var(--shadow-elev-2)] ${
                s.span === "large"
                  ? "col-span-12 md:col-span-6 lg:col-span-6 row-span-2 min-h-[420px]"
                  : s.span === "wide"
                    ? "col-span-12 md:col-span-12 lg:col-span-6 min-h-[280px]"
                    : "col-span-6 md:col-span-6 lg:col-span-3 min-h-[200px]"
              }`}
            >
              {s.image && (
                <div className="absolute inset-0 -z-10">
                  <img
                    src={s.image}
                    alt=""
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-65 group-hover:scale-105 transition-all duration-700 ease-[var(--ease-cinema)]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-elev-1)] via-[var(--bg-elev-1)]/85 to-[var(--bg-elev-1)]/40" />
                </div>
              )}

              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <span className="mono text-[10.5px] uppercase tracking-[0.14em] text-[var(--fg-dim)]">
                    {s.category}
                  </span>
                  <h3 className="text-[20px] lg:text-[24px] font-semibold tracking-[-0.015em] leading-[1.15] text-balance max-w-[14ch]">
                    {s.title}
                  </h3>
                </div>
                <span className="mono text-[14px] text-[var(--fg-faint)] transition-all duration-300 group-hover:text-[var(--brand-purple)] group-hover:translate-x-1">
                  →
                </span>
              </div>
              <p className="text-[14.5px] text-[var(--fg-muted)] leading-[1.55] text-pretty max-w-[44ch] mt-8">
                {s.description}
              </p>
            </Link>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
