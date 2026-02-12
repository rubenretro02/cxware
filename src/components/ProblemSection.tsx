export default function ProblemSection() {
  return (
    <section className="py-24 bg-[#f7f6f8]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Problem Statement */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="text-[#0C0227]">Traditional Workforce</span>
                <br />
                <span className="text-[#0C0227]">Ops is </span>
                <span className="gradient-text">Broken</span>
              </h2>
              <p className="text-lg text-[#6b687a]">
                Fluctuating call volumes force you to choose between expensive idle time or angry customers stuck on hold.
              </p>
            </div>

            <div className="space-y-6">
              <div className="border-b border-black/10 pb-6">
                <span className="section-label mb-2 block">Problem</span>
                <h3 className="text-xl font-semibold text-[#0C0227] mb-2">
                  Overstaffed? You're Burning Budget
                </h3>
                <p className="text-[#6b687a]">Idle agents drain payroll and erode margins.</p>
              </div>

              <div className="border-b border-black/10 pb-6">
                <span className="section-label mb-2 block">Problem</span>
                <h3 className="text-xl font-semibold text-[#0C0227] mb-2">
                  Understaffed? Customers Walk Away
                </h3>
                <p className="text-[#6b687a]">Hold times skyrocket, CSAT plummets, churn rises.</p>
              </div>

              <div className="pb-6">
                <span className="section-label mb-2 block">Problem</span>
                <h3 className="text-xl font-semibold text-[#0C0227] mb-2">
                  Temp Agencies Can't Close the Gap
                </h3>
                <p className="text-[#6b687a]">Generic temps lack the skill, engagement, and compliance modern CX demands.</p>
              </div>
            </div>
          </div>

          {/* Right - Solution Preview */}
          <div className="relative">
            <div className="card-light p-8 space-y-6">
              <h3 className="text-2xl font-bold text-[#0C0227]">
                <span className="gradient-text">Perfectly Staff</span> Your Contact Center, Automatically
              </h3>
              <p className="text-[#6b687a]">
                A single platform that synchronizes your evolving AI agents and internal team with an automated, scalable human workforce that saves time and money.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#f7f6f8] rounded-xl p-4 border border-black/5">
                  <div className="stat-number text-2xl">45%</div>
                  <p className="text-sm text-[#6b687a]">Cost Reduction</p>
                </div>
                <div className="bg-[#f7f6f8] rounded-xl p-4 border border-black/5">
                  <div className="stat-number text-2xl">99.8%</div>
                  <p className="text-sm text-[#6b687a]">CSAT Score</p>
                </div>
                <div className="bg-[#f7f6f8] rounded-xl p-4 border border-black/5">
                  <div className="stat-number text-2xl">24/7</div>
                  <p className="text-sm text-[#6b687a]">Coverage</p>
                </div>
                <div className="bg-[#f7f6f8] rounded-xl p-4 border border-black/5">
                  <div className="stat-number text-2xl">3+</div>
                  <p className="text-sm text-[#6b687a]">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
