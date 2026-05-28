"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function AgentsHero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center pt-24 overflow-hidden">
      {/* Full-bleed background photo — visible across the whole hero */}
      <div className="absolute inset-0">
        <img
          src="/images/agent-hero-banner.jpg"
          alt="WingCX agent working remotely"
          className="w-full h-full object-cover"
          loading="eager"
          style={{ filter: "brightness(1.05) saturate(0.95)" }}
        />
        {/* Soft white scrim across the entire photo to brighten it */}
        <div className="absolute inset-0 bg-[rgba(251,251,253,0.18)]" />
        {/* Stronger white wash on the left so the navy headline reads */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(251,251,253,0.92) 0%, rgba(251,251,253,0.78) 28%, rgba(251,251,253,0.45) 55%, rgba(251,251,253,0.10) 82%, rgba(251,251,253,0) 100%)",
          }}
        />
        {/* Bottom fade into next section */}
        <div className="absolute inset-x-0 bottom-0 h-[18vh] bg-gradient-to-t from-[var(--bg)] to-transparent" />
        {/* Subtle aurora for premium feel */}
        <div className="aurora-blob w-[460px] h-[460px] -top-28 -left-20" style={{ opacity: 0.22 }} />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 lg:px-8">
        <div className="grid grid-cols-12 gap-x-8">
          {/* Copy block — left, capped at 7/12 so the photo breathes on the right */}
          <ScrollReveal as="div" variant="stagger" className="col-span-12 lg:col-span-7 space-y-7 py-12">
            <span className="eyebrow-brand">
              <span>REMOTE CUSTOMER SERVICE · WORK YOUR HOURS</span>
            </span>

            <h1 className="text-[clamp(2.5rem,5.8vw,5rem)] font-bold leading-[1.02] tracking-[-0.025em] text-balance">
              Earn <span className="gradient-text">competitive pay</span>
              <br />
              on a schedule you <span className="gradient-text">choose.</span>
            </h1>

            <p className="text-[17px] md:text-[19px] text-[var(--fg-muted)] max-w-[54ch] leading-[1.55] text-pretty">
              Become a WingCX agent and tap into flexible customer service shifts.
              Accept the ones that fit, skip the rest. Get credentialed fast, and take home
              pay that often beats standard rates.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link href="#apply" className="btn btn-brand btn-lg group">
                Apply Now
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link href="#how-to-start" className="btn btn-ghost btn-lg">
                See How It Works
              </Link>
            </div>

            {/* Inline stat strip — replaces the floating card */}
            <div className="flex flex-wrap items-end gap-x-8 gap-y-4 pt-6">
              <Stat label="Top hourly" value="$25" unit="+" />
              <span className="hidden sm:block w-px h-10 bg-[var(--line)]" />
              <Stat label="Time to live" value="48" unit="hr" />
              <span className="hidden sm:block w-px h-10 bg-[var(--line)]" />
              <Stat label="Open roles" value="120" unit="" />
              <span className="hidden md:block w-px h-10 bg-[var(--line)]" />
              <div className="flex items-center gap-2.5 mono text-[11px] text-[var(--fg-dim)] uppercase tracking-[0.16em]">
                <span className="live-dot" />
                <span>HIRING NOW</span>
              </div>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-4 pt-4">
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
                    className="w-9 h-9 rounded-full border-2 object-cover shadow-md"
                    style={{ borderColor: "var(--bg)", zIndex: 4 - i }}
                  />
                ))}
                <div
                  className="w-9 h-9 rounded-full border-2 flex items-center justify-center text-white text-[10px] font-bold shadow-md"
                  style={{ borderColor: "var(--bg)", backgroundImage: "var(--grad)" }}
                >
                  +1K
                </div>
              </div>
              <p className="text-[13.5px] text-[var(--fg-muted)]">
                <span className="text-[var(--fg)] font-semibold">1,000+ agents</span> and growing
              </p>
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
      <div className="mono text-[10.5px] text-[var(--fg-dim)] uppercase tracking-[0.16em] mb-1">
        {label}
      </div>
      <div className="mono text-[var(--fg)] text-[28px] tabular-nums leading-none font-bold">
        {value}
        <span className="text-[var(--fg-dim)] text-[14px] ml-0.5 font-normal">{unit}</span>
      </div>
    </div>
  );
}
