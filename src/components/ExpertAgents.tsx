import Link from "next/link";

export default function ExpertAgents() {
  const features = [
    "Match with brands that fit your experience",
    "Choose shifts around your schedule",
    "Competitive pay",
    "Join an agent community of passionate professionals",
  ];


  return (
    <section className="py-24" style={{ background: 'var(--bg-muted)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="section-label">Expert Agents</span>
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="text-[#FFFFFF]">Get support from </span>
                <span className="gradient-text">the best agents</span>
                <span className="text-[#FFFFFF]"> in the world</span>
              </h2>
            </div>

            <p className="text-lg text-[#8B92A5]">
              CXware pairs brands with top 1099 contractor agents that value autonomy and love customer service. The platform automatically verifies, certifies, schedules and handles payments making workforce ops insanely easy for brands and agents.
            </p>

            <div className="space-y-4">
              <h3 className="text-[#FFFFFF] font-semibold">Why agents work with CXware</h3>
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#2047FF] to-[#C873E5] flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[#8B92A5]">{feature}</span>
                </div>
              ))}
            </div>

            <Link href="/agents" className="btn-primary inline-flex">
              Become an Agent
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="relative">
            <div className="gradient-bg rounded-3xl p-10 md:p-12 relative overflow-hidden">
              <div className="absolute inset-0">
                <div className="absolute top-8 left-8 w-20 h-20 rounded-full bg-white/10" />
                <div className="absolute bottom-12 right-12 w-16 h-16 rounded-full bg-white/10" />
              </div>

              <div className="relative space-y-8">
                {/* Big stat */}
                <div>
                  <div className="text-7xl md:text-8xl font-bold text-white mb-2">1,000+</div>
                  <p className="text-lg text-white/80">Verified agents ready to serve</p>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-2xl p-5">
                    <div className="text-3xl font-bold text-white mb-1">98%</div>
                    <p className="text-sm text-white/70">Satisfaction rate</p>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-5">
                    <div className="text-3xl font-bold text-white mb-1">24/7</div>
                    <p className="text-sm text-white/70">Coverage available</p>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-5">
                    <div className="text-3xl font-bold text-white mb-1">30+</div>
                    <p className="text-sm text-white/70">Industries served</p>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-5">
                    <div className="text-3xl font-bold text-white mb-1">55%</div>
                    <p className="text-sm text-white/70">Cost savings avg.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
