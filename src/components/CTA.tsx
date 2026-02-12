import Link from "next/link";

export default function CTA() {
  return (
    <section id="contact" className="py-24" style={{ background: 'var(--bg-muted)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="gradient-bg rounded-3xl p-12 md:p-16 relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-white/10" />
            <div className="absolute top-1/4 right-1/4 w-16 h-16 rounded-full bg-white/10" />
            <div className="absolute bottom-10 left-1/3 w-12 h-12 rounded-full bg-white/10" />
          </div>

          {/* Floating Agent Photos on right side */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block">
            <div className="relative w-64 h-64">
              <img
                src="/images/call-center-agent-2.jpg"
                alt="Agent"
                className="absolute top-0 right-0 w-16 h-16 rounded-full border-4 border-white/20 shadow-xl animate-float object-cover"
              />
              <img
                src="/images/call-center-agent-1.jpg"
                alt="Agent"
                className="absolute top-8 left-4 w-14 h-14 rounded-full border-4 border-white/20 shadow-xl animate-float delay-200 object-cover"
              />
              <img
                src="/images/woman-laptop.jpg"
                alt="Agent"
                className="absolute bottom-8 right-8 w-18 h-18 rounded-full border-4 border-white/20 shadow-xl animate-float delay-100 object-cover"
              />
              <img
                src="/images/agent-headset-woman.jpg"
                alt="Agent"
                className="absolute bottom-0 left-0 w-12 h-12 rounded-full border-4 border-white/20 shadow-xl animate-float delay-300 object-cover"
              />
              <img
                src="/images/agent-male-headset.jpg"
                alt="Agent"
                className="absolute top-1/2 right-4 w-14 h-14 rounded-full border-4 border-white/20 shadow-xl animate-float delay-400 object-cover"
              />
            </div>
          </div>

          <div className="relative z-10 max-w-2xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Ready to experience perfect staffing?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              See how CXware can boost your CX and cut costs in as little as 30 days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="mailto:contact@cxwares.com"
                className="btn-light text-base"
              >
                Let's Talk
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/agents"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white font-semibold rounded-md border-2 border-white/30 hover:bg-white/10 transition-all"
              >
                Become an Agent
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
