import Link from "next/link";

export default function Requirements() {
  const requirements = [
    "3+ years of customer-service experience",
    "Empathy & problem-solving mindset",
    "Reliability: on-time log-ins and clear communication",
    "Tech readiness: modern computer, USB headset, hard-wired internet (25 Mbps+)",
    "Quiet workspace for professional calls",
  ];

  return (
    <section id="requirements" className="py-24 bg-[#f7f6f8]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <span className="section-label mb-4 block">Agent Requirements</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-[#0C0227]">Are you the next </span>
                <span className="gradient-text">CXware agent</span>
                <span className="text-[#0C0227]">?</span>
              </h2>
              <p className="text-lg text-[#6b687a]">
                The best agents on the platform are dedicated and passionate professionals that truly enjoy serving customers.
              </p>
            </div>

            <Link href="#apply" className="btn-primary inline-flex">
              Apply Now
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

            <div className="space-y-4">
              <h3 className="text-[#0C0227] font-semibold">We look for</h3>
              {requirements.map((req) => (
                <div key={req} className="flex items-start gap-3 py-3 border-b border-black/10">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#2047FF] to-[#C873E5] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[#6b687a]">{req}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="gradient-bg rounded-3xl aspect-square flex items-center justify-center relative overflow-hidden">
              {/* Decorative circles */}
              <div className="absolute top-8 left-8 w-20 h-20 rounded-full bg-white/10" />
              <div className="absolute bottom-12 right-12 w-16 h-16 rounded-full bg-white/10" />

              <div className="text-center text-white p-8 relative z-10">
                <div className="text-7xl font-bold mb-4">1,000+</div>
                <p className="text-xl text-white/90">Agents already working with CXware</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
