import Link from "next/link";

export default function ExpertAgents() {
  const features = [
    "Match with brands that fit your experience",
    "Choose shifts around your schedule",
    "Competitive pay",
    "Join an agent community of passionate professionals",
  ];

  // Agent images from local folder
  const agentImages = [
    { src: "/images/call-center-agent-1.jpg", alt: "Call center agent" },
    { src: "/images/call-center-agent-2.jpg", alt: "Customer service agent" },
    { src: "/images/woman-laptop.jpg", alt: "Support agent" },
    { src: "/images/agent-headset-woman.jpg", alt: "Remote agent" },
    { src: "/images/call-center-team.jpg", alt: "Service representative" },
    { src: "/images/business-meeting.jpg", alt: "Professional agent" },
    { src: "/images/agent-male-headset.jpg", alt: "Business professional" },
    { src: "/images/globe-network.jpg", alt: "Global team" },
  ];

  return (
    <section className="py-24 bg-[#f7f6f8]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="section-label">Expert Agents</span>
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="text-[#0B1121]">Get support from </span>
                <span className="gradient-text">the best agents</span>
                <span className="text-[#0B1121]"> in the world</span>
              </h2>
            </div>

            <p className="text-lg text-[#64748B]">
              CXware pairs brands with top 1099 contractor agents that value autonomy and love customer service. The platform automatically verifies, certifies, schedules and handles payments making workforce ops insanely easy for brands and agents.
            </p>

            <div className="space-y-4">
              <h3 className="text-[#0B1121] font-semibold">Why agents work with CXware</h3>
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#2047FF] to-[#C873E5] flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[#64748B]">{feature}</span>
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
            <div className="gradient-bg rounded-3xl p-8 aspect-square flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0">
                <div className="absolute top-8 left-8 w-20 h-20 rounded-full bg-white/10" />
                <div className="absolute bottom-12 right-12 w-16 h-16 rounded-full bg-white/10" />
              </div>

              <div className="relative grid grid-cols-3 gap-4 w-full max-w-xs">
                {agentImages.map((img, index) => (
                  <div key={index} className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                <div className="aspect-square rounded-2xl bg-white/20 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">+1K</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
