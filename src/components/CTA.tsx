import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function CTA() {
  return (
    <section id="contact" className="py-28 lg:py-36 border-t border-[var(--line)]">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-8">
        <ScrollReveal variant="up">
          <div
            className="relative rounded-[var(--r-xl)] overflow-hidden border border-white/10 shadow-[0_30px_80px_rgba(32,71,255,0.25)]"
            style={{ background: "var(--grad-135)" }}
          >
            {/* decorative orbs */}
            <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-white/10 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none" />
            <div className="absolute inset-0 grid-noise opacity-20 pointer-events-none" />

            <div className="relative grid grid-cols-12 gap-x-8 gap-y-10 items-center p-8 lg:p-16">
              <div className="col-span-12 lg:col-span-7 space-y-6">
                <h2 className="text-[clamp(2rem,4.4vw,3.4rem)] font-bold leading-[1.04] tracking-[-0.025em] text-balance text-white">
                  See the platform on
                  <br />
                  your own forecast.
                </h2>
                <p className="text-[17px] text-white/85 leading-[1.55] max-w-[46ch]">
                  Bring last quarter's volume curve. We'll show you the cost and SLA impact in 30 minutes.
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Link href="mailto:contact@cxwares.com" className="btn btn-light btn-lg group">
                    Let's Talk
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M5 12h14M13 6l6 6-6 6" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                  <Link
                    href="/agents"
                    className="btn btn-lg text-white border border-white/30 hover:border-white/60 hover:bg-white/10 backdrop-blur-sm"
                  >
                    Become an Agent
                  </Link>
                </div>
              </div>

              <div className="col-span-12 lg:col-span-4 lg:col-start-9">
                <div
                  className="grid grid-cols-2 gap-px rounded-[var(--r-md)] overflow-hidden border border-white/15"
                  style={{ background: "rgba(255,255,255,0.12)" }}
                >
                  <Tile label="Avg time live" value="< 3 wk" />
                  <Tile label="Cost delta" value="−45%" />
                  <Tile label="CSAT" value="99.8%" />
                  <Tile label="Coverage" value="24 / 7" />
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function Tile({ label, value }: { label: string; value: string }) {
  return (
    <div
      className="p-5"
      style={{ background: "rgba(11, 15, 26, 0.85)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}
    >
      <div className="mono text-[10.5px] uppercase tracking-[0.14em] text-white/60 mb-2">
        {label}
      </div>
      <div className="mono text-[22px] lg:text-[26px] tabular-nums leading-none text-white font-bold">
        {value}
      </div>
    </div>
  );
}
