export default function MapSection() {
  return (
    <section className="py-16" style={{ background: "var(--bg-white)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <span className="section-label">Our Location</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
            Visit Us
          </h2>
          <p className="text-[#8B92A5] mt-3 max-w-lg mx-auto">
            Located in the heart of innovation, our team is ready to help you transform your customer experience operations.
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden border border-white/10" style={{ height: "400px" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.8887244564!2d-80.1918!3d25.7617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b69c0c7e0e3d%3A0x2c5c8e8e8e8e8e8e!2sMiami%2C%20FL!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="CXware Office Location"
          />
        </div>
      </div>
    </section>
  );
}
