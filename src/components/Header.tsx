"use client";

import Link from "next/link";
import { useState, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();
  const isAgentsPage = pathname === "/agents" || pathname.startsWith("/agents/");
  const isServicePage = pathname.startsWith("/services");

  const handleMouseEnter = useCallback((dropdown: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveDropdown(dropdown);
  }, []);

  const handleMouseLeave = useCallback(() => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
  }, []);

  const handleToggleDropdown = useCallback((dropdown: string) => {
    setActiveDropdown((prev) => (prev === dropdown ? null : dropdown));
  }, []);

  // Business page navigation items
  const businessSolutionItems = [
    { icon: "phone", label: "Call Center Outsourcing", href: "/services/call-center-outsourcing" },
    { icon: "users", label: "Customer Service Outsourcing", href: "/services/customer-service-outsourcing" },
    { icon: "chat", label: "Live Chat Support", href: "/services/live-chat-support" },
    { icon: "clock", label: "24/7 Help Desk", href: "/services/help-desk" },
    { icon: "file", label: "Tax Support", href: "/services/tax-support" },
    { icon: "heart", label: "Healthcare Support", href: "/services/healthcare-support" },
  ];

  const businessIndustryItems = [
    { label: "Insurance", href: "/services/insurance" },
    { label: "Telecommunications", href: "/services/telecommunications" },
    { label: "Utilities", href: "/services/utilities" },
    { label: "Finance/Banking", href: "/services/finance-banking" },
    { label: "Travel/Transportation", href: "/services/travel-transportation" },
    { label: "Retail", href: "/services/retail" },
    { label: "Healthcare", href: "/services/healthcare-industry" },
  ];

  // Agents page navigation items
  const agentOpportunityItems = [
    { label: "Customer Service", pay: "$14-$20/hr", href: "/agents/opportunities/customer-service" },
    { label: "Inbound Sales", pay: "$14-$20+/hr", href: "/agents/opportunities/inbound-sales" },
    { label: "Healthcare Support", pay: "$15-$20/hr", href: "/agents/opportunities/healthcare" },
    { label: "Insurance Sales", pay: "$16-$25+/hr", href: "/agents/opportunities/insurance-sales" },
    { label: "Bilingual Spanish", pay: "$17-$20+/hr", href: "/agents/opportunities/bilingual-spanish" },
  ];

  // Colors based on page context
  const navBg = isAgentsPage
    ? "bg-[#1E1F25]/90 border-[#2A2B33]"
    : "bg-[#0B0F1A]/90 border-white/10";

  const dropdownBg = isAgentsPage ? "bg-[#1E1F25]" : "bg-[#141829]";
  const dropdownBorder = isAgentsPage ? "border-[#2A2B33]" : "border-white/10";
  const hoverBg = isAgentsPage ? "hover:bg-[#28292F]" : "hover:bg-[#1A1E30]";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <nav
        className={`max-w-7xl mx-auto px-6 py-2.5 rounded-full border backdrop-blur-xl ${navBg} shadow-lg shadow-black/20`}
      >
        <div className="flex items-center justify-between">
          {/* Left: Logo + Toggle */}
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center shrink-0">
              <img
                src="https://ext.same-assets.com/405996721/472180092.webp"
                alt="CXware"
                className="h-8 w-auto"
              />
            </Link>

            {/* For Business / For Agents Toggle Pills */}
            <div className={`hidden md:flex items-center rounded-full p-0.5 border ${isAgentsPage ? "border-[#3A3B43] bg-[#28292F]" : "border-white/10 bg-white/5"}`}>
              <Link
                href="/"
                className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all ${
                  !isAgentsPage
                    ? "bg-gradient-to-r from-[#2047FF] to-[#C873E5] text-white shadow-md shadow-[#2047FF]/25"
                    : "text-[#8B92A5] hover:text-white"
                }`}
              >
                For Business
              </Link>
              <Link
                href="/agents"
                className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all ${
                  isAgentsPage
                    ? "bg-gradient-to-r from-[#2047FF] to-[#C873E5] text-white shadow-md shadow-[#2047FF]/25"
                    : "text-[#8B92A5] hover:text-white"
                }`}
              >
                For Agents
              </Link>
            </div>
          </div>

          {/* Center/Right: Navigation Links */}
          <div className="hidden lg:flex items-center gap-1">
            {!isAgentsPage ? (
              <>
                <Link
                  href="#how-it-works"
                  className="px-3.5 py-1.5 text-[13px] font-medium text-[#8B92A5] hover:text-white transition-colors"
                >
                  How It Works
                </Link>

                {/* Services Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter("services")}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    type="button"
                    onClick={() => handleToggleDropdown("services")}
                    className={`flex items-center gap-1 px-3.5 py-1.5 text-[13px] font-medium transition-colors ${
                      isServicePage ? "text-white" : "text-[#8B92A5] hover:text-white"
                    }`}
                  >
                    Services
                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === "services" ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {activeDropdown === "services" && (
                    <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[520px] ${dropdownBg} rounded-2xl border ${dropdownBorder} shadow-2xl shadow-black/40 p-6 grid grid-cols-2 gap-8`}>
                      <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#C873E5] mb-3">
                          By Solution
                        </h4>
                        <div className="space-y-0.5">
                          {businessSolutionItems.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              onClick={() => setActiveDropdown(null)}
                              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-[#8B92A5] hover:text-white ${hoverBg} transition-all`}
                            >
                              <span className="text-sm font-medium">{item.label}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#C873E5] mb-3">
                          By Industry
                        </h4>
                        <div className="space-y-0.5">
                          {businessIndustryItems.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              onClick={() => setActiveDropdown(null)}
                              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-[#8B92A5] hover:text-white ${hoverBg} transition-all`}
                            >
                              <span className="text-sm font-medium">{item.label}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <Link
                  href="#faq"
                  className="px-3.5 py-1.5 text-[13px] font-medium text-[#8B92A5] hover:text-white transition-colors"
                >
                  FAQs
                </Link>

                <Link
                  href="#contact"
                  className="px-3.5 py-1.5 text-[13px] font-medium text-[#8B92A5] hover:text-white transition-colors"
                >
                  About
                </Link>

                <Link
                  href="/contact"
                  className="px-3.5 py-1.5 text-[13px] font-medium text-[#8B92A5] hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="#how-to-start"
                  className="px-3.5 py-1.5 text-[13px] font-medium text-[#8B92A5] hover:text-white transition-colors"
                >
                  How It Works
                </Link>

                {/* Opportunities Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter("opportunities")}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    type="button"
                    onClick={() => handleToggleDropdown("opportunities")}
                    className="flex items-center gap-1 px-3.5 py-1.5 text-[13px] font-medium text-[#8B92A5] hover:text-white transition-colors"
                  >
                    Opportunities
                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === "opportunities" ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {activeDropdown === "opportunities" && (
                    <div className={`absolute top-full left-0 mt-4 w-[340px] ${dropdownBg} rounded-2xl border ${dropdownBorder} shadow-2xl shadow-black/40 p-5`}>
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#C873E5] mb-3">
                        Remote Opportunities
                      </h4>
                      <div className="space-y-1">
                        {agentOpportunityItems.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            onClick={() => setActiveDropdown(null)}
                            className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-[#8B92A5] hover:text-white ${hoverBg} transition-all`}
                          >
                            <span className="text-sm font-medium">{item.label}</span>
                            <span className="text-xs font-semibold text-[#C873E5]">{item.pay}</span>
                          </Link>
                        ))}
                      </div>
                      <div className="mt-3 pt-3 border-t border-white/10">
                        <Link
                          href="/agents/opportunities"
                          onClick={() => setActiveDropdown(null)}
                          className="flex items-center justify-center gap-2 text-sm font-medium text-[#C873E5] hover:text-white transition-colors"
                        >
                          View All Opportunities
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

                <Link
                  href="#faq"
                  className="px-3.5 py-1.5 text-[13px] font-medium text-[#8B92A5] hover:text-white transition-colors"
                >
                  FAQs
                </Link>

                <Link
                  href="#requirements"
                  className="px-3.5 py-1.5 text-[13px] font-medium text-[#8B92A5] hover:text-white transition-colors"
                >
                  Requirements
                </Link>
              </>
            )}
          </div>

          {/* Right: CTA + Arrow */}
          <div className="hidden md:flex items-center gap-2.5">
            {!isAgentsPage ? (
              <Link
                href="#contact"
                className="group px-5 py-2 text-xs font-bold uppercase tracking-wider text-white border border-[#C873E5]/60 rounded-full hover:border-[#C873E5] hover:bg-[#C873E5]/10 transition-all"
              >
                {"Let's Talk"}
              </Link>
            ) : (
              <Link
                href="#apply"
                className="group px-5 py-2 text-xs font-bold uppercase tracking-wider text-white border border-[#C873E5]/60 rounded-full hover:border-[#C873E5] hover:bg-[#C873E5]/10 transition-all"
              >
                Apply Now
              </Link>
            )}
            <Link
              href={isAgentsPage ? "#apply" : "#contact"}
              className="flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-r from-[#2047FF] to-[#C873E5] text-white hover:shadow-lg hover:shadow-[#2047FF]/30 transition-all"
              aria-label={isAgentsPage ? "Apply now" : "Contact us"}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-3 pb-3 border-t border-white/10 pt-3">
            {/* Mobile Toggle */}
            <div className={`flex items-center rounded-full p-0.5 mb-4 border ${isAgentsPage ? "border-[#3A3B43] bg-[#28292F]" : "border-white/10 bg-white/5"}`}>
              <Link
                href="/"
                className={`flex-1 px-4 py-2 text-xs font-semibold rounded-full text-center transition-all ${
                  !isAgentsPage
                    ? "bg-gradient-to-r from-[#2047FF] to-[#C873E5] text-white"
                    : "text-[#8B92A5]"
                }`}
              >
                For Business
              </Link>
              <Link
                href="/agents"
                className={`flex-1 px-4 py-2 text-xs font-semibold rounded-full text-center transition-all ${
                  isAgentsPage
                    ? "bg-gradient-to-r from-[#2047FF] to-[#C873E5] text-white"
                    : "text-[#8B92A5]"
                }`}
              >
                For Agents
              </Link>
            </div>

            <div className="flex flex-col gap-1">
              {!isAgentsPage ? (
                <>
                  <Link href="#how-it-works" onClick={() => setIsOpen(false)} className={`px-4 py-2.5 text-sm text-white ${hoverBg} rounded-lg transition-colors`}>
                    How It Works
                  </Link>
                  <Link href="/services/call-center-outsourcing" onClick={() => setIsOpen(false)} className={`px-4 py-2.5 text-sm text-white ${hoverBg} rounded-lg transition-colors`}>
                    Services
                  </Link>
                  <Link href="#faq" onClick={() => setIsOpen(false)} className={`px-4 py-2.5 text-sm text-[#8B92A5] ${hoverBg} rounded-lg transition-colors`}>
                    FAQs
                  </Link>
                  <Link href="#contact" onClick={() => setIsOpen(false)} className={`px-4 py-2.5 text-sm text-[#8B92A5] ${hoverBg} rounded-lg transition-colors`}>
                    About
                  </Link>
                  <Link href="/contact" onClick={() => setIsOpen(false)} className={`px-4 py-2.5 text-sm text-[#8B92A5] ${hoverBg} rounded-lg transition-colors`}>
                    Contact
                  </Link>
                  <div className="mt-3 px-2">
                    <Link
                      href="#contact"
                      onClick={() => setIsOpen(false)}
                      className="w-full flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white border border-[#C873E5]/60 rounded-full hover:border-[#C873E5] transition-all"
                    >
                      {"Let's Talk"}
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <Link href="#how-to-start" onClick={() => setIsOpen(false)} className={`px-4 py-2.5 text-sm text-white ${hoverBg} rounded-lg transition-colors`}>
                    How It Works
                  </Link>
                  <Link href="/agents/opportunities" onClick={() => setIsOpen(false)} className={`px-4 py-2.5 text-sm text-white ${hoverBg} rounded-lg transition-colors`}>
                    Opportunities
                  </Link>
                  <Link href="#faq" onClick={() => setIsOpen(false)} className={`px-4 py-2.5 text-sm text-[#8B92A5] ${hoverBg} rounded-lg transition-colors`}>
                    FAQs
                  </Link>
                  <Link href="#requirements" onClick={() => setIsOpen(false)} className={`px-4 py-2.5 text-sm text-[#8B92A5] ${hoverBg} rounded-lg transition-colors`}>
                    Requirements
                  </Link>
                  <div className="mt-3 px-2">
                    <Link
                      href="#apply"
                      onClick={() => setIsOpen(false)}
                      className="w-full flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white border border-[#C873E5]/60 rounded-full hover:border-[#C873E5] transition-all"
                    >
                      Apply Now
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
