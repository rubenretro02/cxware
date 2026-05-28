import Link from "next/link";

export default function CTA() {
  return (
    <section id="contact" className="py-28 lg:py-36 border-t border-[var(--line)]">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-8">
        <div className="relative panel overflow-hidden">
          <div className="relative grid grid-cols-12 gap-x-8 gap-y-10 items-center p-8 lg:p-14">
            <div className="col-span-12 lg:col-span-7 space-y-6">
              <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-medium leading-[1.04] tracking-[-0.025em] text-balance">
                See the platform on your own forecast.
              </h2>
              <p className="text-[16.5px] text-[var(--fg-muted)] leading-[1.55] max-w-[46ch]">
                Bring last quarter's volume curve. We'll show you the cost and SLA impact in 30 minutes.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <Link href="mailto:contact@cxwares.com" className="btn btn-accent btn-lg">
                  Talk to us
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M5 12h14M13 6l6 6-6 6" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link href="/agents" className="btn btn-quiet">
                  Apply as agent →
                </Link>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-4 lg:col-start-9">
              <div className="grid grid-cols-2 gap-px bg-[var(--line)] rounded-[var(--r-md)] overflow-hidden">
                <Tile label="Avg time live" value="< 3 wk" />
                <Tile label="Cost delta" value="−45%" />
                <Tile label="CSAT" value="99.8%" />
                <Tile label="Coverage" value="24 / 7" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Tile({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-[var(--bg-elev-1)] p-5">
      <div className="mono text-[10.5px] uppercase tracking-[0.14em] text-[var(--fg-dim)] mb-2">
        {label}
      </div>
      <div className="mono text-[22px] lg:text-[26px] tabular-nums leading-none">
        {value}
      </div>
    </div>
  );
}
