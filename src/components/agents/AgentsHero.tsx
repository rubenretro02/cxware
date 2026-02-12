import Link from "next/link";

export default function AgentsHero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden" style={{ background: 'var(--bg-light)' }}>
      {/* Subtle gradient on right side */}
      <div className="absolute right-0 top-0 w-1/2 h-full gradient-bg opacity-10 hidden lg:block" />

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-tr from-[#2047FF]/3 to-[#C873E5]/3 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <span className="section-label">Remote Customer Service Jobs - Work Around Your Schedule</span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-[#FFFFFF]">Earn </span>
              <span className="gradient-text">Competitive Pay</span>
              <span className="text-[#FFFFFF]"> on a schedule you </span>
              <span className="gradient-text">Choose</span>
            </h1>

            <p className="text-xl text-[#8B92A5] max-w-xl leading-relaxed">
              Become a CXware agent and tap into flexible customer service shifts you can accept—or skip—with total freedom. Get credentialed fast, choose the hours you want, and take home pay that often beats standard rates.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="#apply" className="btn-primary text-base py-4 px-8">
                Apply Now
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="#how-to-start" className="btn-secondary text-base py-4 px-8">
                See How It Works
              </Link>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                <img
                  src="/images/call-center-agent-2.jpg"
                  alt="Agent"
                  className="w-11 h-11 rounded-full border-3 border-[#1A1E30] object-cover shadow-md"
                />
                <img
                  src="/images/call-center-agent-1.jpg"
                  alt="Agent"
                  className="w-11 h-11 rounded-full border-3 border-[#1A1E30] object-cover shadow-md"
                />
                <img
                  src="/images/woman-laptop.jpg"
                  alt="Agent"
                  className="w-11 h-11 rounded-full border-3 border-[#1A1E30] object-cover shadow-md"
                />
                <img
                  src="/images/agent-headset-woman.jpg"
                  alt="Agent"
                  className="w-11 h-11 rounded-full border-3 border-[#1A1E30] object-cover shadow-md"
                />
                <div className="w-11 h-11 rounded-full border-3 border-[#1A1E30] bg-gradient-to-r from-[#2047FF] to-[#C873E5] flex items-center justify-center text-white text-xs font-bold shadow-md">
                  +1K
                </div>
              </div>
              <p className="text-sm text-[#8B92A5]">
                <span className="text-[#FFFFFF] font-semibold">1,000+ Agents</span> and growing
              </p>
            </div>
          </div>

          {/* Right Content - Agent Image */}
          <div className="relative animate-fade-in-up delay-200 hidden lg:block">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/call-center-agent-1.jpg"
                alt="CXware Agent working from home"
                className="w-full h-auto object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2047FF]/10 to-transparent" />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-[#141829] rounded-2xl p-4 shadow-xl border border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#2047FF] to-[#C873E5] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#FFFFFF] font-bold">$14-$20/hr</p>
                  <p className="text-sm text-[#8B92A5]">Competitive Pay</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
