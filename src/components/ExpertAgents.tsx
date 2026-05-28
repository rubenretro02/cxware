import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function ExpertAgents() {
  const features = [
    "Match with brands that fit your experience",
    "Choose shifts around your schedule",
    "Competitive pay, paid for productive hours",
    "Join a community of career CX professionals",
  ];

  return (
    <section className="py-28 lg:py-36 border-t border-[var(--line)] relative overflow-hidden">
      <div className="aurora-blob w-[480px] h-[480px] bottom-0 left-[30%]" style={{ opacity: 0.14 }} />

      <div className="relative mx-auto max-w-[1400px] px-5 lg:px-8">
        <div className="grid grid-cols-12 gap-x-8 gap-y-14 items-center">
          <ScrollReveal variant="up" className="col-span-12 lg:col-span-6 space-y-7">
            <span className="eyebrow-brand"><span>FOR AGENTS</span></span>

            <h2 className="text-[clamp(2rem,4.6vw,3.4rem)] font-bold leading-[1.04] tracking-[-0.025em] text-balance">
              The best support agents
              <br />
              work on <span className="gradient-text">their own terms.</span>
            </h2>

            <p className="text-[16.5px] text-[var(--fg-muted)] leading-[1.55] max-w-[52ch]">
              CXware pairs brands with top 1099 contractor agents who value autonomy. The
              platform verifies, certifies, schedules, and pays. You just take great calls.
            </p>

            <ul className="space-y-3 max-w-[44ch]">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span
                    className="mt-[5px] w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: "var(--grad)" }}
                  >
                    <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-[15px] text-[var(--fg)] leading-[1.5]">{f}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <Link href="/agents" className="btn btn-brand btn-lg group">
                Become an Agent
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade" delay={150} className="col-span-12 lg:col-span-6 relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[var(--r-xl)] border border-[var(--line-strong)] shadow-[0_30px_60px_rgba(0,0,0,0.4)]">
              <div className="absolute -inset-px rounded-[var(--r-xl)] opacity-40 pointer-events-none" style={{ background: "var(--grad)", filter: "blur(20px)", zIndex: -1 }} />

              <img
                src="/images/agent-male-headset.jpg"
                alt="CXware agent"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/85 via-[var(--bg)]/20 to-transparent" />

              <div
                className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-4 rounded-[var(--r-md)] p-5 border border-white/10"
                style={{
                  background: "rgba(11, 15, 26, 0.65)",
                  backdropFilter: "blur(22px) saturate(160%)",
                  WebkitBackdropFilter: "blur(22px) saturate(160%)",
                }}
              >
                <StatCell value="1,247" label="Agents online" />
                <StatCell value="98%" label="Satisfaction" />
                <StatCell value="30+" label="Industries" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function StatCell({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="mono text-[22px] gradient-text font-bold leading-none tabular-nums">{value}</div>
      <div className="mono text-[10.5px] uppercase tracking-[0.14em] text-[var(--fg-dim)] mt-2">
        {label}
      </div>
    </div>
  );
}
