"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-white">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#1A3A6B]/5 via-[#2A7D8A]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#1A3A6B]/3 to-[#2A7D8A]/3 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <span className="section-label">Agentic Workforce Delivery Platform</span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-[#0B1121]">Intelligent</span>
                <br />
                <span className="gradient-text">Customer</span>
                <br />
                <span className="text-[#0B1121]">Operations</span>
              </h1>
            </div>

            <p className="text-lg md:text-xl text-[#64748B] max-w-xl leading-relaxed">
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
                  className="w-11 h-11 rounded-full border-3 border-white object-cover shadow-md"
                />
                <img
                  src="/images/call-center-agent-1.jpg"
                  alt="Agent"
                  className="w-11 h-11 rounded-full border-3 border-white object-cover shadow-md"
                />
                <img
                  src="/images/woman-laptop.jpg"
                  alt="Agent"
                  className="w-11 h-11 rounded-full border-3 border-white object-cover shadow-md"
                />
                <img
                  src="/images/agent-headset-woman.jpg"
                  alt="Agent"
                  className="w-11 h-11 rounded-full border-3 border-white object-cover shadow-md"
                />
                <div className="w-11 h-11 rounded-full border-3 border-white bg-gradient-to-r from-[#1A3A6B] to-[#2A7D8A] flex items-center justify-center text-white text-xs font-bold shadow-md">
                  +1K
                </div>
              </div>
              <p className="text-sm text-[#64748B]">
                <span className="text-[#0B1121] font-semibold">1,000+ Agents</span> and growing
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
                <h3 className="text-[#0B1121] font-semibold">Say goodbye to shrinkage</h3>
                <p className="text-sm text-[#64748B]">Cover any channel at any time with the best global agents</p>
              </div>

              <div className="card-light p-6 space-y-3 hover:shadow-xl transition-all">
                <div className="icon-box-secondary">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-[#0B1121] font-semibold">Built-in surge capacity</h3>
                <p className="text-sm text-[#64748B]">Ramp up coverage in real-time for surges and seasonality</p>
              </div>

              <div className="card-light p-6 space-y-3 hover:shadow-xl transition-all">
                <div className="icon-box">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-[#0B1121] font-semibold">Automated workforce ops</h3>
                <p className="text-sm text-[#64748B]">Define ideal agents and upload forecasts, the platform does the rest</p>
              </div>

              <div className="card-light p-6 space-y-3 hover:shadow-xl transition-all">
                <div className="icon-box-secondary">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-[#0B1121] font-semibold">Cut costs by 25-55%</h3>
                <p className="text-sm text-[#64748B]">Only pay for productive hours and save on management overhead</p>
              </div>
            </div>

            {/* Floating Globe Image */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-2xl overflow-hidden shadow-2xl animate-float hidden xl:block">
              <img
                src="/images/globe-network.jpg"
                alt="Global Network"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
