export default function Stats() {
  const stats = [
    { value: "1,247", unit: "", label: "Vetted agents online" },
    { value: "99.8", unit: "%", label: "Customer satisfaction" },
    { value: "500K", unit: "", label: "Interactions handled" },
    { value: "−45", unit: "%", label: "Cost vs. legacy BPO" },
  ];

  return (
    <section className="py-24 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-8">
        <div className="grid grid-cols-12 gap-x-8 mb-12">
          <p className="col-span-12 lg:col-span-7 text-[17px] text-[var(--fg-muted)] leading-[1.55] max-w-[55ch]">
            Partners cut cost 35%+, sustain 98%+ quality scores, and clear SLAs through seasonal peaks. The numbers don't depend on heroics.
          </p>
        </div>

        <dl className="grid grid-cols-2 lg:grid-cols-4 border-t border-[var(--line)]">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`py-8 lg:py-12 px-5 lg:px-8 border-b border-[var(--line)] ${
                i !== 0 ? "lg:border-l border-l border-[var(--line)]" : ""
              } ${i % 2 !== 0 ? "border-l border-[var(--line)] lg:border-l" : ""}`}
            >
              <dt className="mono text-[11.5px] uppercase tracking-[0.16em] text-[var(--fg-dim)] mb-4">
                {s.label}
              </dt>
              <dd className="mono text-[clamp(2.2rem,4.2vw,3.2rem)] tabular-nums leading-none tracking-[-0.02em]">
                {s.value}
                <span className="text-[var(--fg-dim)] text-[0.55em] ml-1">{s.unit}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
