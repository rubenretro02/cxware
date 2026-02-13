import Link from "next/link";

export default function MapSection() {
  return (
    <section className="bg-[#0B1121]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2047FF]/20 to-[#C873E5]/20 flex items-center justify-center">
              <svg className="w-6 h-6 text-[#C873E5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg">Our Headquarters</h3>
              <p className="text-[#8B92A5] text-sm">66 W Flagler St, Ste 900, Miami, FL 33130</p>
            </div>
          </div>
          <Link
            href="/contact"
            className="px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-[#2047FF] to-[#C873E5] rounded-md hover:shadow-lg transition-all flex items-center gap-2"
          >
            Get in Touch
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
      <div className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.8986791788886!2d-80.19506842414447!3d25.77427137734563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b6a03e4c4d7d%3A0x7c5b0d4c0e7c5e0d!2s66%20W%20Flagler%20St%20Suite%20900%2C%20Miami%2C%20FL%2033130!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
          width="100%"
          height="300"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="CXware Office Location - 66 W Flagler St, Ste 900, Miami, FL 33130"
          className="hover:scale-[1.02] transition-transform duration-500 origin-center"
        />
      </div>
    </section>
  );
}
