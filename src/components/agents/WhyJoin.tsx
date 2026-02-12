export default function WhyJoin() {
  const benefits = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Choose your own hours",
      description: "Pick 30-minute shifts and stack up to full-time or keep it part-time—the choice is always yours.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      title: "Work from home—no commute",
      description: "Log in from home with a hard-wired 25 Mbps+ connection and a reliable computer. CXware is 100% remote across the U.S. & LATAM.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Competitive pay",
      description: "Earn market-leading hourly rates that are deposited weekly—the perfect second job or supplemental income.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      title: "Stand out, earn more",
      description: "We reward top-rated, reliable agents with Agent Priority Boarding, granting them first dibs to open shifts and opportunities.",
    },
  ];

  return (
    <section className="py-24" style={{ background: 'var(--bg-muted)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-[#FFFFFF]">Why </span>
            <span className="gradient-text">CXware</span>
          </h2>
          <p className="text-lg text-[#8B92A5]">
            Flexible work designed for top customer service professionals that love supporting customers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="card-light p-6 space-y-4 hover:shadow-xl transition-all">
              <div className="icon-box">{benefit.icon}</div>
              <h3 className="text-lg font-semibold text-[#FFFFFF]">{benefit.title}</h3>
              <p className="text-[#8B92A5] text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
