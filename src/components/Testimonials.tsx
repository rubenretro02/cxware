export default function Testimonials() {
  const testimonials = [
    {
      quote: "Thanks to CXware, our inbound sales conversion rates have improved dramatically. Their expert agents handle leads efficiently and close deals with care.",
      name: "Priya S.",
      role: "Insurance Agency Director",
      image: "/images/call-center-agent-2.jpg",
    },
    {
      quote: "CXware's remote support team has been a game-changer for our business. Their professionalism and responsiveness have boosted our customer satisfaction significantly.",
      name: "Sarah M.",
      role: "Retail Business Owner",
      image: "/images/woman-laptop.jpg",
    },
    {
      quote: "Partnering with CXware allowed us to scale our customer service quickly without sacrificing quality. Their agents truly feel like an extension of our own team.",
      name: "David L.",
      role: "Healthcare Services Manager",
      image: "/images/call-center-agent-1.jpg",
    },
  ];

  return (
    <section className="py-24 section-purple">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-label mb-4 block">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-[#0B1121]">Why Brands </span>
            <span className="gradient-text">Trust</span>
            <span className="text-[#0B1121]"> CXware</span>
          </h2>
          <p className="text-lg text-[#64748B]">
            See what keeps the best brands working on our platform
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-black/5"
            >
              <div className="mb-6">
                <svg className="w-10 h-10 text-[#C873E5]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-[#0B1121] text-lg mb-6 leading-relaxed">
                {testimonial.quote}
              </p>
              <div className="flex items-center gap-4 pt-4 border-t border-black/10">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-[#0B1121]">{testimonial.name}</p>
                  <p className="text-sm text-[#64748B]">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
