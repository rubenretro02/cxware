"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-end pt-24 pb-12 overflow-hidden">
      {/* subtle grid backdrop */}
      <div className="pointer-events-none absolute inset-0 grid-noise opacity-[0.35]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[60vh] bg-gradient-to-b from-[var(--bg-elev-1)] to-transparent" />

      <div className="relative mx-auto w-full max-w-[1400px] px-5 lg:px-8">
        <div className="grid grid-cols-12 gap-x-8 gap-y-12 items-end">
          {/* Left — copy */}
          <div className="col-span-12 lg:col-span-7 space-y-7">
            <div className="flex items-center gap-2.5 mono text-[11px] text-[var(--fg-dim)]">
              <span className="live-dot" />
              <span>WORKFORCE.OPS / v3.2</span>
              <span className="text-[var(--fg-faint)]">·</span>
              <span>1,247 agents online now</span>
            </div>

            <h1 className="text-[clamp(2.4rem,5.4vw,4.5rem)] font-medium leading-[1.02] tracking-[-0.025em] text-balance">
              Workforce operations,
              <br />
              fully synchronized.
            </h1>

            <p className="text-[17px] md:text-[18px] text-[var(--fg-muted)] max-w-[52ch] leading-[1.55] text-pretty">
              CXware fuses your AI agents and human teams into one elastic workforce.
              Coverage scales with demand. You pay only for productive hours.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <Link href="/contact" className="btn btn-accent btn-lg">
                Talk to us
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link href="#how-it-works" className="btn btn-quiet">
                See the platform
              </Link>
            </div>
          </div>

          {/* Right — single anchored visual + status overlay */}
          <div className="col-span-12 lg:col-span-5 relative">
            <div className="relative aspect-[4/5] lg:aspect-[3/4] w-full overflow-hidden rounded-[var(--r-xl)] border border-[var(--line)]">
              <img
                src="/images/call-center-agent-1.jpg"
                alt="CXware agent at work"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-[var(--bg)]/30 to-transparent" />

              {/* mono status panel — bottom left */}
              <div className="absolute left-4 right-4 bottom-4 panel-inset p-4 backdrop-blur-md bg-[oklch(0.165_0.012_255/0.75)]">
                <div className="flex items-center justify-between mono text-[10.5px] text-[var(--fg-dim)] mb-3">
                  <span>LIVE QUEUE · NA-EAST</span>
                  <span className="text-[var(--accent)]">ALL GREEN</span>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <Stat label="Coverage" value="99.8" unit="%" />
                  <Stat label="Avg wait" value="11" unit="s" />
                  <Stat label="Cost vs BPO" value="−45" unit="%" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value, unit }: { label: string; value: string; unit: string }) {
  return (
    <div>
      <div className="mono text-[10.5px] text-[var(--fg-faint)] uppercase tracking-[0.12em]">
        {label}
      </div>
      <div className="mono text-[var(--fg)] text-[18px] tabular-nums mt-0.5">
        {value}
        <span className="text-[var(--fg-dim)] text-[13px] ml-0.5">{unit}</span>
      </div>
    </div>
  );
}
