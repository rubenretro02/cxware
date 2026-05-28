import Link from "next/link";

export default function ExpertAgents() {
  const features = [
    "Match with brands that fit your experience",
    "Choose shifts around your schedule",
    "Competitive pay, paid for productive hours",
    "Join a community of career CX professionals",
  ];

  return (
    <section className="py-28 lg:py-36 border-t border-[var(--line)]">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-8">
        <div className="grid grid-cols-12 gap-x-8 gap-y-14 items-center">
          {/* Left — copy */}
          <div className="col-span-12 lg:col-span-6 space-y-8">
            <span className="label">For agents</span>

            <h2 className="text-[clamp(2rem,4.4vw,3.4rem)] font-medium leading-[1.04] tracking-[-0.025em] text-balance">
              The best support agents
              <br />
              work on their own terms.
            </h2>

            <p className="text-[16.5px] text-[var(--fg-muted)] leading-[1.55] max-w-[52ch]">
              CXware pairs brands with top 1099 contractor agents who value autonomy. The
              platform verifies, certifies, schedules, and pays. You just take great calls.
            </p>

            <ul className="space-y-3 max-w-[44ch]">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0" />
                  <span className="text-[15px] text-[var(--fg)] leading-[1.5]">{f}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <Link href="/agents" className="btn btn-accent btn-lg">
                Become an agent
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right — full photo with mono stats overlay */}
          <div className="col-span-12 lg:col-span-6 relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[var(--r-xl)] border border-[var(--line)]">
              <img
                src="/images/agent-male-headset.jpg"
                alt="CXware agent"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/85 via-[var(--bg)]/20 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-4 panel-inset p-5 backdrop-blur-md bg-[oklch(0.165_0.012_255/0.75)]">
                <StatCell value="1,247" label="Agents online" />
                <StatCell value="98%" label="Satisfaction" />
                <StatCell value="30+" label="Industries" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCell({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="mono text-[22px] tabular-nums leading-none">{value}</div>
      <div className="mono text-[10.5px] uppercase tracking-[0.14em] text-[var(--fg-dim)] mt-2">
        {label}
      </div>
    </div>
  );
}
