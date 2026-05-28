"use client";

import { useEffect, useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";

type StatItem = { value: number; format: (v: number) => string; label: string };

const stats: StatItem[] = [
  { value: 1247, format: (v) => v.toLocaleString(), label: "Vetted agents online" },
  { value: 99.8, format: (v) => v.toFixed(1) + "%", label: "Customer satisfaction" },
  { value: 500, format: (v) => Math.round(v) + "K", label: "Interactions handled" },
  { value: 45, format: (v) => "−" + Math.round(v) + "%", label: "Cost vs. legacy BPO" },
];

function useCounter(target: number, start: boolean, durationMs = 1400) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - t0) / durationMs);
      // cinema ease-out
      const eased = 1 - Math.pow(1 - t, 3);
      setN(target * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start, durationMs]);
  return n;
}

function StatCell({ stat, start }: { stat: StatItem; start: boolean }) {
  const n = useCounter(stat.value, start);
  return (
    <>
      <dt className="mono text-[11.5px] uppercase tracking-[0.16em] text-[var(--fg-dim)] mb-4">
        {stat.label}
      </dt>
      <dd className="mono text-[clamp(2.4rem,4.5vw,3.6rem)] font-bold tabular-nums leading-none tracking-[-0.02em] gradient-text">
        {stat.format(n)}
      </dd>
    </>
  );
}

export default function Stats() {
  const [start, setStart] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setStart(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 lg:py-28 relative overflow-hidden">
      <div className="aurora-blob w-[420px] h-[420px] top-[20%] right-[-100px]" style={{ opacity: 0.18 }} />

      <div className="relative mx-auto max-w-[1400px] px-5 lg:px-8">
        <ScrollReveal variant="up" className="mb-12">
          <div className="grid grid-cols-12 gap-x-8">
            <p className="col-span-12 lg:col-span-7 text-[17px] text-[var(--fg-muted)] leading-[1.55] max-w-[55ch]">
              Partners cut cost 35%+, sustain 98%+ quality scores, and clear SLAs through seasonal peaks. The numbers don't depend on heroics.
            </p>
          </div>
        </ScrollReveal>

        <dl className="grid grid-cols-2 lg:grid-cols-4 border-t border-[var(--line)]">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`py-10 lg:py-14 px-5 lg:px-8 border-b border-[var(--line)] ${
                i !== 0 ? "lg:border-l border-l border-[var(--line)]" : ""
              } ${i % 2 !== 0 ? "border-l border-[var(--line)] lg:border-l" : ""}`}
            >
              <StatCell stat={s} start={start} />
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
