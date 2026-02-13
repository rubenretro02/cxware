"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden" style={{ background: 'var(--bg-light)' }}>
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#2047FF]/5 via-[#C873E5]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#2047FF]/3 to-[#C873E5]/3 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <span className="section-label">Agentic Workforce Delivery Platform</span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-white">Intelligent</span>
                <br />
                <span className="gradient-text">Customer</span>
                <br />
                <span className="text-white">Operations</span>
              </h1>
            </div>

            <p className="text-lg md:text-xl text-[#8B92A5] max-w-xl leading-relaxed">
              The only platform that synchronizes your evolving AI agents and internal team with an automated, scalable human workforce that saves time and money.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="#contact" className="btn-primary text-base py-4 px-8">
                Let's Talk
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="#how-it-works" className="btn-secondary text-base py-4 px-8">
                See How It Works
              </Link>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-4 pt-4">
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
                <span className="text-white font-semibold">1,000+ Agents</span> and growing
              </p>
            </div>
          </div>

          {/* Right Content - Feature Cards Grid */}
          <div className="relative lg:pl-8 animate-fade-in-up delay-200">
            <div className="grid grid-cols-2 gap-4">
              <div className="card-light p-6 space-y-3 hover:shadow-xl transition-all">
                <div className="icon-box">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold">Say goodbye to shrinkage</h3>
                <p className="text-sm text-[#8B92A5]">Cover any channel at any time with the best global agents</p>
              </div>

              <div className="card-light p-6 space-y-3 hover:shadow-xl transition-all">
                <div className="icon-box-secondary">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold">Built-in surge capacity</h3>
                <p className="text-sm text-[#8B92A5]">Ramp up coverage in real-time for surges and seasonality</p>
              </div>

              <div className="card-light p-6 space-y-3 hover:shadow-xl transition-all">
                <div className="icon-box">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold">Automated workforce ops</h3>
                <p className="text-sm text-[#8B92A5]">Define ideal agents and upload forecasts, the platform does the rest</p>
              </div>

              <div className="card-light p-6 space-y-3 hover:shadow-xl transition-all">
                <div className="icon-box-secondary">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold">Cut costs by 25-55%</h3>
                <p className="text-sm text-[#8B92A5]">Only pay for productive hours and save on management overhead</p>
              </div>
            </div>

            {/* Globe Image */}
            <div className="relative mt-8 flex justify-center">
              <img
                src="/images/globe.jpg"
                alt="Global CX operations"
                className="w-72 h-72 object-contain animate-spin-slow"
              />
              {/* Shadow underneath for 3D effect */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-8 bg-[#2047FF]/10 blur-xl rounded-full" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
