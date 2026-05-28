import Link from "next/link";

type Service = {
  title: string;
  description: string;
  href: string;
  span?: "large" | "tall" | "wide";
  image?: string;
};

const services: Service[] = [
  {
    title: "Customer service",
    description:
      "Inbound and outbound calls for billing, accounts, and general support, handled with empathy and brand precision.",
    href: "/services/customer-service-outsourcing",
    span: "large",
    image: "/images/call-center-team.jpg",
  },
  {
    title: "Live chat",
    description: "Real-time chat that helps customers complete tasks fast.",
    href: "/services/live-chat-support",
  },
  {
    title: "24/7 help desk",
    description: "Round-the-clock support for product, technical, and account questions.",
    href: "/services/help-desk",
  },
  {
    title: "Healthcare patient support",
    description: "Compassionate, compliant support that connects patients with care.",
    href: "/services/healthcare-support",
    span: "wide",
    image: "/images/agent-headset-woman.jpg",
  },
  {
    title: "Insurance sales",
    description: "Licensed agents close policies with the right product fit.",
    href: "/services/insurance",
  },
  {
    title: "Tax season surge",
    description: "Elastic coverage that holds up through April peaks.",
    href: "/services/tax-support",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 lg:py-36 border-t border-[var(--line)]">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-8">
        <div className="grid grid-cols-12 gap-x-8 gap-y-6 mb-14">
          <div className="col-span-12 lg:col-span-7">
            <span className="label">The platform</span>
            <h2 className="mt-4 text-[clamp(2rem,4.4vw,3.4rem)] font-medium leading-[1.04] tracking-[-0.025em] text-balance">
              One operations layer for every contact center.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 lg:gap-5 auto-rows-[minmax(0,1fr)]">
          {services.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className={`group panel relative overflow-hidden flex flex-col justify-between p-6 lg:p-7 transition-colors hover:border-[var(--line-strong)] ${
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
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-60 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-elev-1)] via-[var(--bg-elev-1)]/85 to-[var(--bg-elev-1)]/40" />
                </div>
              )}

              <div className="flex items-start justify-between">
                <h3 className="text-[20px] lg:text-[24px] font-medium tracking-[-0.015em] leading-[1.15] text-balance max-w-[14ch]">
                  {s.title}
                </h3>
                <span className="mono text-[11px] text-[var(--fg-faint)] uppercase tracking-[0.14em]">
                  →
                </span>
              </div>
              <p className="text-[14.5px] text-[var(--fg-muted)] leading-[1.55] text-pretty max-w-[44ch] mt-8">
                {s.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
