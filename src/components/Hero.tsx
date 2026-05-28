"use client";

import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-end pt-28 pb-12 overflow-hidden">
      {/* Aurora gradient backdrop — animated, restrained */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="aurora-blob w-[640px] h-[640px] top-[-160px] right-[-120px]" style={{ animationDelay: "0s" }} />
        <div className="aurora-blob w-[420px] h-[420px] bottom-[-80px] left-[-60px]" style={{ animationDelay: "-6s", opacity: 0.35 }} />
        <div className="absolute inset-0 grid-noise opacity-[0.25]" />
        <div className="absolute inset-x-0 bottom-0 h-[40vh] bg-gradient-to-t from-[var(--bg)] to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-[1400px] px-5 lg:px-8">
        <div className="grid grid-cols-12 gap-x-8 gap-y-12 items-end">
          {/* Left — copy with staggered entry */}
          <ScrollReveal as="div" variant="stagger" className="col-span-12 lg:col-span-7 space-y-7">
            <div className="flex items-center gap-2.5 mono text-[11px] text-[var(--fg-dim)] uppercase tracking-[0.16em]">
              <span className="live-dot" />
              <span>WORKFORCE.OPS · v3.2</span>
              <span className="text-[var(--fg-faint)]">·</span>
              <span className="gradient-text font-bold">1,247 agents online</span>
            </div>

            <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.02] tracking-[-0.025em] text-balance">
              Workforce operations,
              <br />
              <span className="gradient-text">fully synchronized.</span>
            </h1>

            <p className="text-[17px] md:text-[19px] text-[var(--fg-muted)] max-w-[54ch] leading-[1.55] text-pretty">
              CXware fuses your AI agents and human teams into one elastic workforce.
              Coverage scales with demand. You pay only for productive hours.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link href="/contact" className="btn btn-brand btn-lg group">
                Let's Talk
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link href="#how-it-works" className="btn btn-ghost btn-lg">
                See How It Works
              </Link>
            </div>

            {/* Social proof — small, refined */}
            <div className="flex items-center gap-4 pt-3">
              <div className="flex -space-x-2.5">
                {[
                  "/images/call-center-agent-2.jpg",
                  "/images/call-center-agent-1.jpg",
                  "/images/woman-laptop.jpg",
                  "/images/agent-headset-woman.jpg",
                ].map((src, i) => (
                  <img
                    key={src}
                    src={src}
                    alt=""
                    className="w-9 h-9 rounded-full border-2 border-[var(--bg)] object-cover shadow-lg"
                    style={{ zIndex: 4 - i }}
                  />
                ))}
                <div
                  className="w-9 h-9 rounded-full border-2 border-[var(--bg)] flex items-center justify-center text-white text-[10px] font-bold shadow-lg"
                  style={{ backgroundImage: "var(--grad)" }}
                >
                  +1K
                </div>
              </div>
              <p className="text-[13.5px] text-[var(--fg-muted)]">
                <span className="text-white font-semibold">1,000+ vetted agents</span> ready to serve
              </p>
            </div>
          </ScrollReveal>

          {/* Right — anchored visual with image reveal + status panel */}
          <ScrollReveal as="div" variant="fade" delay={200} className="col-span-12 lg:col-span-5 relative">
            <div className="relative aspect-[4/5] lg:aspect-[3/4] w-full overflow-hidden rounded-[var(--r-xl)] border border-[var(--line-strong)] shadow-[0_30px_60px_rgba(0,0,0,0.4)]">
              {/* gradient border glow */}
              <div className="absolute -inset-px rounded-[var(--r-xl)] opacity-50 pointer-events-none" style={{ background: "var(--grad)", filter: "blur(20px)", zIndex: -1 }} />

              <img
                src="/images/call-center-agent-1.jpg"
                alt="CXware agent at work"
                className="w-full h-full object-cover img-reveal is-visible"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-[var(--bg)]/30 to-transparent" />

              {/* mono status panel — glassmorphic */}
              <div
                className="absolute left-4 right-4 bottom-4 rounded-[var(--r-md)] p-4 border border-white/10"
                style={{
                  background: "rgba(11, 15, 26, 0.6)",
                  backdropFilter: "blur(20px) saturate(160%)",
                  WebkitBackdropFilter: "blur(20px) saturate(160%)",
                }}
              >
                <div className="flex items-center justify-between mono text-[10.5px] uppercase tracking-[0.14em] text-[var(--fg-dim)] mb-3">
                  <span className="flex items-center gap-2"><span className="live-dot" /> LIVE QUEUE · NA-EAST</span>
                  <span className="gradient-text font-bold">ALL GREEN</span>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <Stat label="Coverage" value="99.8" unit="%" />
                  <Stat label="Avg wait" value="11" unit="s" />
                  <Stat label="Cost ↓" value="45" unit="%" />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value, unit }: { label: string; value: string; unit: string }) {
  return (
    <div>
      <div className="mono text-[10px] text-[var(--fg-faint)] uppercase tracking-[0.14em]">
        {label}
      </div>
      <div className="mono text-white text-[20px] tabular-nums mt-1 font-semibold">
        {value}
        <span className="text-[var(--fg-dim)] text-[12px] ml-0.5 font-normal">{unit}</span>
      </div>
    </div>
  );
}
