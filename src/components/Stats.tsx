export default function Stats() {
  const stats = [
    { value: "1,000+", label: "Trusted Partners" },
    { value: "99.8%", label: "Customer Satisfaction" },
    { value: "500K", label: "Handled Interactions" },
    { value: "45%", label: "Cost Savings" },
  ];

  return (
    <section className="py-20 gradient-bg relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-24 h-24 rounded-full bg-white/10" />
        <div className="absolute bottom-10 right-20 w-32 h-32 rounded-full bg-white/10" />
        <div className="absolute top-1/2 left-1/3 w-16 h-16 rounded-full bg-white/10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Award-Winning
              <br />
              Workforce Innovation
            </h2>
          </div>
          <div>
            <p className="text-lg text-white/90">
              Our partners slash costs by 35%+, sustain 98%+ quality scores, and crush SLAs—even during seasonal peaks.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
              <p className="text-white/80 text-sm uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
