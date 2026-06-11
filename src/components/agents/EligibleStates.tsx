import ScrollReveal from "@/components/ScrollReveal";

/**
 * Tile-grid map of the U.S. — each state is a rounded tile, brand-colored
 * when we're actively sourcing agents there. Reads instantly, scales to
 * any viewport, and stays on-theme without a heavy geographic SVG.
 */

type Tile = { abbr: string; name: string; col: number; row: number };

const TILES: Tile[] = [
  { abbr: "AK", name: "Alaska", col: 0, row: 0 },
  { abbr: "ME", name: "Maine", col: 10, row: 0 },
  { abbr: "VT", name: "Vermont", col: 9, row: 1 },
  { abbr: "NH", name: "New Hampshire", col: 10, row: 1 },
  { abbr: "WA", name: "Washington", col: 0, row: 2 },
  { abbr: "MT", name: "Montana", col: 1, row: 2 },
  { abbr: "ND", name: "North Dakota", col: 2, row: 2 },
  { abbr: "MN", name: "Minnesota", col: 3, row: 2 },
  { abbr: "WI", name: "Wisconsin", col: 4, row: 2 },
  { abbr: "MI", name: "Michigan", col: 6, row: 2 },
  { abbr: "NY", name: "New York", col: 8, row: 2 },
  { abbr: "MA", name: "Massachusetts", col: 9, row: 2 },
  { abbr: "RI", name: "Rhode Island", col: 10, row: 2 },
  { abbr: "OR", name: "Oregon", col: 0, row: 3 },
  { abbr: "ID", name: "Idaho", col: 1, row: 3 },
  { abbr: "SD", name: "South Dakota", col: 2, row: 3 },
  { abbr: "IA", name: "Iowa", col: 3, row: 3 },
  { abbr: "IL", name: "Illinois", col: 4, row: 3 },
  { abbr: "IN", name: "Indiana", col: 5, row: 3 },
  { abbr: "OH", name: "Ohio", col: 6, row: 3 },
  { abbr: "PA", name: "Pennsylvania", col: 7, row: 3 },
  { abbr: "NJ", name: "New Jersey", col: 8, row: 3 },
  { abbr: "CT", name: "Connecticut", col: 9, row: 3 },
  { abbr: "CA", name: "California", col: 0, row: 4 },
  { abbr: "NV", name: "Nevada", col: 1, row: 4 },
  { abbr: "WY", name: "Wyoming", col: 2, row: 4 },
  { abbr: "NE", name: "Nebraska", col: 3, row: 4 },
  { abbr: "MO", name: "Missouri", col: 4, row: 4 },
  { abbr: "KY", name: "Kentucky", col: 5, row: 4 },
  { abbr: "WV", name: "West Virginia", col: 6, row: 4 },
  { abbr: "VA", name: "Virginia", col: 7, row: 4 },
  { abbr: "MD", name: "Maryland", col: 8, row: 4 },
  { abbr: "DE", name: "Delaware", col: 9, row: 4 },
  { abbr: "AZ", name: "Arizona", col: 1, row: 5 },
  { abbr: "UT", name: "Utah", col: 2, row: 5 },
  { abbr: "CO", name: "Colorado", col: 3, row: 5 },
  { abbr: "KS", name: "Kansas", col: 4, row: 5 },
  { abbr: "AR", name: "Arkansas", col: 5, row: 5 },
  { abbr: "TN", name: "Tennessee", col: 6, row: 5 },
  { abbr: "NC", name: "North Carolina", col: 7, row: 5 },
  { abbr: "SC", name: "South Carolina", col: 8, row: 5 },
  { abbr: "NM", name: "New Mexico", col: 2, row: 6 },
  { abbr: "OK", name: "Oklahoma", col: 3, row: 6 },
  { abbr: "LA", name: "Louisiana", col: 4, row: 6 },
  { abbr: "MS", name: "Mississippi", col: 5, row: 6 },
  { abbr: "AL", name: "Alabama", col: 6, row: 6 },
  { abbr: "GA", name: "Georgia", col: 7, row: 6 },
  { abbr: "HI", name: "Hawaii", col: 0, row: 7 },
  { abbr: "TX", name: "Texas", col: 3, row: 7 },
  { abbr: "FL", name: "Florida", col: 8, row: 7 },
];

const ACTIVE = new Set([
  "AL", "AK", "AZ", "DE", "FL", "GA", "ID", "IN", "IA", "KS", "KY", "ME",
  "MD", "MI", "MS", "MO", "MT", "NE", "NV", "NM", "NC", "ND", "OH", "OK",
  "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VA", "WV", "WY",
]);

const SIZE = 38;
const GAP = 5;
const PITCH = SIZE + GAP;
const COLS = 11;
const ROWS = 8;

export default function EligibleStates() {
  const activeNames = TILES.filter((t) => ACTIVE.has(t.abbr))
    .map((t) => t.name)
    .sort();

  return (
    <section className="py-24 lg:py-32 bg-[var(--bg)] relative overflow-hidden">
      <div className="aurora-blob w-[420px] h-[420px] top-[15%] right-[-120px]" style={{ opacity: 0.12 }} />
      <div className="relative mx-auto max-w-[1400px] px-5 lg:px-8">
        <div className="grid grid-cols-12 gap-x-10 gap-y-12 items-start">
          {/* Copy + state list */}
          <ScrollReveal variant="up" className="col-span-12 lg:col-span-5 space-y-6">
            <span className="eyebrow-brand"><span>WHERE WE HIRE</span></span>
            <h2 className="text-[clamp(2rem,4.2vw,3rem)] font-bold leading-[1.05] tracking-[-0.025em] text-balance">
              Are you in an <span className="gradient-text">eligible state?</span>
            </h2>
            <p className="text-[16px] text-[var(--fg-muted)] leading-[1.6] max-w-[48ch]">
              Our agents are as geographically diverse as their skills. Check the map to see if
              we're actively sourcing work-from-home agents in your state — the list grows as new
              programs launch.
            </p>
            <ul className="columns-2 sm:columns-3 gap-x-6 pt-2">
              {activeNames.map((name) => (
                <li
                  key={name}
                  className="text-[13.5px] text-[var(--fg-muted)] py-1.5 break-inside-avoid flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--grad)" }} />
                  {name}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* Tile map */}
          <ScrollReveal variant="fade" delay={120} className="col-span-12 lg:col-span-7">
            <div className="card-light p-6 sm:p-8">
              <svg
                viewBox={`0 0 ${COLS * PITCH - GAP} ${ROWS * PITCH - GAP}`}
                className="w-full h-auto"
                role="img"
                aria-label="Map of U.S. states where WingCX is actively sourcing agents"
              >
                <defs>
                  <linearGradient id="state-grad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#2047FF" />
                    <stop offset="100%" stopColor="#C873E5" />
                  </linearGradient>
                </defs>
                {TILES.map((t) => {
                  const active = ACTIVE.has(t.abbr);
                  return (
                    <g key={t.abbr}>
                      <title>{`${t.name} — ${active ? "actively sourcing" : "not actively sourcing"}`}</title>
                      <rect
                        x={t.col * PITCH}
                        y={t.row * PITCH}
                        width={SIZE}
                        height={SIZE}
                        rx={9}
                        fill={active ? "url(#state-grad)" : "var(--bg-elev-2)"}
                        stroke={active ? "none" : "var(--line-strong)"}
                        strokeWidth={1}
                        opacity={active ? 0.92 : 1}
                      />
                      <text
                        x={t.col * PITCH + SIZE / 2}
                        y={t.row * PITCH + SIZE / 2 + 4}
                        textAnchor="middle"
                        fontSize="11.5"
                        fontWeight="600"
                        fontFamily="var(--font-mono), ui-monospace, monospace"
                        fill={active ? "#FFFFFF" : "var(--fg-dim)"}
                      >
                        {t.abbr}
                      </text>
                    </g>
                  );
                })}
              </svg>

              <div className="flex items-center gap-6 mt-6 pt-5 border-t border-[var(--line)]">
                <span className="flex items-center gap-2.5 text-[13px] text-[var(--fg-muted)]">
                  <span className="w-4 h-4 rounded-[5px]" style={{ background: "var(--grad-135)" }} />
                  Actively sourcing
                </span>
                <span className="flex items-center gap-2.5 text-[13px] text-[var(--fg-muted)]">
                  <span className="w-4 h-4 rounded-[5px] border border-[var(--line-strong)] bg-[var(--bg-elev-2)]" />
                  Not actively sourcing
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
