import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0B1121] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <img
                src="https://ext.same-assets.com/405996721/472180092.webp"
                alt="CXware Agent Solutions"
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-[#a3a0ab] mb-6 max-w-sm">
              Subscribe and join thousands of CX pros in reading the CXware newsletter every month. No spam, ever.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Email*"
                className="flex-1 bg-[#0D1120] border border-white/10 rounded-md px-5 py-3 text-white placeholder-[#64748B] focus:outline-none focus:border-[#C873E5] transition-colors"
              />
              <button type="submit" className="px-6 py-3 bg-gradient-to-r from-[#2047FF] to-[#C873E5] text-white font-semibold rounded-md hover:shadow-lg transition-all">
                Sign Up
              </button>
            </form>
          </div>

          {/* General */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">General</h4>
            <ul className="space-y-3">
              <li><Link href="/agents" className="text-[#a3a0ab] hover:text-white transition-colors">For Agents</Link></li>
              <li><Link href="/" className="text-[#a3a0ab] hover:text-white transition-colors">For Businesses</Link></li>
              <li><Link href="#how-it-works" className="text-[#a3a0ab] hover:text-white transition-colors">How It Works</Link></li>
              <li><Link href="#faq" className="text-[#a3a0ab] hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="#contact" className="text-[#a3a0ab] hover:text-white transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Use Cases */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Use Cases</h4>
            <ul className="space-y-3">
              <li><Link href="#services" className="text-[#a3a0ab] hover:text-white transition-colors">Customer Service</Link></li>
              <li><Link href="#services" className="text-[#a3a0ab] hover:text-white transition-colors">Healthcare Support</Link></li>
              <li><Link href="#services" className="text-[#a3a0ab] hover:text-white transition-colors">Insurance Sales</Link></li>
              <li><Link href="#services" className="text-[#a3a0ab] hover:text-white transition-colors">Tax Support</Link></li>
              <li><Link href="#services" className="text-[#a3a0ab] hover:text-white transition-colors">Tech Support</Link></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Industries</h4>
            <ul className="space-y-3">
              <li><Link href="#services" className="text-[#a3a0ab] hover:text-white transition-colors">Insurance</Link></li>
              <li><Link href="#services" className="text-[#a3a0ab] hover:text-white transition-colors">Healthcare</Link></li>
              <li><Link href="#services" className="text-[#a3a0ab] hover:text-white transition-colors">Retail</Link></li>
              <li><Link href="#services" className="text-[#a3a0ab] hover:text-white transition-colors">Finance/Banking</Link></li>
              <li><Link href="#services" className="text-[#a3a0ab] hover:text-white transition-colors">Telecommunications</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#64748B] text-sm">
            © 2025 CXware Agent Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-[#a3a0ab] hover:text-white transition-colors text-sm">Privacy Policy</Link>
            <Link href="#" className="text-[#a3a0ab] hover:text-white transition-colors text-sm">Terms of Use</Link>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-[#0D1120] flex items-center justify-center text-[#a3a0ab] hover:text-white hover:bg-[#C873E5]/20 transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#0D1120] flex items-center justify-center text-[#a3a0ab] hover:text-white hover:bg-[#C873E5]/20 transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="mailto:contact@cxwares.com" className="w-10 h-10 rounded-full bg-[#0D1120] flex items-center justify-center text-[#a3a0ab] hover:text-white hover:bg-[#C873E5]/20 transition-all">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
