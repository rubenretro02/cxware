"use client";

import Link from "next/link";
import { useState, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();
  const isAgentsPage = pathname === "/agents";

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
    { icon: "clock", label: "24/7 Help Desk", href: "/services/24-7-help-desk" },
    { icon: "file", label: "Tax Support", href: "/services/tax-support" },
    { icon: "heart", label: "Healthcare Support", href: "/services/healthcare-support" },
  ];

  const businessIndustryItems = [
    { label: "Insurance", href: "/services/call-center-outsourcing" },
    { label: "Telecommunications", href: "/services/call-center-outsourcing" },
    { label: "Utilities", href: "/services/call-center-outsourcing" },
    { label: "Finance/Banking", href: "/services/call-center-outsourcing" },
    { label: "Travel/Transportation", href: "/services/call-center-outsourcing" },
    { label: "Retail", href: "/services/customer-service-outsourcing" },
    { label: "Healthcare", href: "/services/healthcare-support" },
  ];

  // Agents page navigation items
  const agentOpportunityItems = [
    { label: "Customer Service", pay: "$14-$20/hr", href: "/agents/opportunities/customer-service" },
    { label: "Inbound Sales", pay: "$14-$20+/hr", href: "/agents/opportunities/inbound-sales" },
    { label: "Healthcare Support", pay: "$15-$20/hr", href: "/agents/opportunities/healthcare-support" },
    { label: "Insurance Sales", pay: "$16-$25+/hr", href: "/agents/opportunities/insurance-sales" },
    { label: "Bilingual Spanish", pay: "$17-$20+/hr", href: "/agents/opportunities/bilingual-spanish" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0B0F1A]/95 backdrop-blur-md border-b border-white/5">
      <nav className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center">
              <img
                src="https://ext.same-assets.com/405996721/472180092.webp"
                alt="CXware Agent Solutions"
                className="h-9 w-auto"
              />
            </Link>

            {/* For Business / For Agents Toggle */}
            <div className="hidden md:flex items-center bg-white/10 rounded-full p-1">
              <Link
                href="/"
                className={`px-5 py-2 text-sm font-semibold rounded-full transition-all ${
                  !isAgentsPage
                    ? "bg-gradient-to-r from-[#2047FF] to-[#C873E5] text-white shadow-md"
                    : "text-[#8B92A5] hover:text-[#FFFFFF]"
                }`}
              >
                For Business
              </Link>
              <Link
                href="/agents"
                className={`px-5 py-2 text-sm font-semibold rounded-full transition-all ${
                  isAgentsPage
                    ? "bg-gradient-to-r from-[#2047FF] to-[#C873E5] text-white shadow-md"
                    : "text-[#8B92A5] hover:text-[#FFFFFF]"
                }`}
              >
                For Agents
              </Link>
            </div>
          </div>

          {/* Desktop Navigation - Different for Business vs Agents */}
          <div className="hidden lg:flex items-center gap-1">
            {!isAgentsPage ? (
              // Business Navigation
              <>
                <Link
                  href="#how-it-works"
                  className="px-4 py-2 text-sm font-medium text-[#8B92A5] hover:text-[#FFFFFF] transition-colors"
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
                    className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-[#8B92A5] hover:text-[#FFFFFF] transition-colors"
                  >
                    Services
                    <svg
                      className={`w-4 h-4 transition-transform ${activeDropdown === "services" ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {activeDropdown === "services" && (
                    <div className="absolute top-full left-0 pt-2 w-[550px]">
                    <div className="bg-[#141829] rounded-2xl border border-white/10 shadow-2xl p-6 grid grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#C873E5] mb-4">
                          By Solution
                        </h4>
                        <div className="space-y-1">
                          {businessSolutionItems.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              onClick={() => setActiveDropdown(null)}
                              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#8B92A5] hover:text-[#FFFFFF] hover:bg-[#1A1E30] transition-all"
                            >
                              <span className="text-sm font-medium">{item.label}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#C873E5] mb-4">
                          By Industry
                        </h4>
                        <div className="space-y-1">
                          {businessIndustryItems.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              onClick={() => setActiveDropdown(null)}
                              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#8B92A5] hover:text-[#FFFFFF] hover:bg-[#1A1E30] transition-all"
                            >
                              <span className="text-sm font-medium">{item.label}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                    </div>
                  )}
                </div>
                
                <Link
                  href="#faq"
                  className="px-4 py-2 text-sm font-medium text-[#8B92A5] hover:text-[#FFFFFF] transition-colors"
                >
                  FAQs
                </Link>

                <Link
                  href="#contact"
                  className="px-4 py-2 text-sm font-medium text-[#8B92A5] hover:text-[#FFFFFF] transition-colors"
                >
                  About
                </Link>

                <Link
                  href="/contact"
                  className="px-4 py-2 text-sm font-medium text-[#8B92A5] hover:text-[#FFFFFF] transition-colors"
                >
                  Contact
                </Link>
              </>
            ) : (
              // Agents Navigation
              <>
                <Link
                  href="#how-to-start"
                  className="px-4 py-2 text-sm font-medium text-[#8B92A5] hover:text-[#FFFFFF] transition-colors"
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
                    className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-[#8B92A5] hover:text-[#FFFFFF] transition-colors"
                  >
                    Opportunities
                    <svg
                      className={`w-4 h-4 transition-transform ${activeDropdown === "opportunities" ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {activeDropdown === "opportunities" && (
                    <div className="absolute top-full left-0 pt-2 w-[350px]">
                    <div className="bg-[#141829] rounded-2xl border border-white/10 shadow-2xl p-5">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#C873E5] mb-4">
                        Remote Opportunities
                      </h4>
                      <div className="space-y-1">
                        {agentOpportunityItems.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-center justify-between px-3 py-3 rounded-lg text-[#8B92A5] hover:text-[#FFFFFF] hover:bg-[#1A1E30] transition-all"
                          >
                            <span className="text-sm font-medium">{item.label}</span>
                            <span className="text-xs font-semibold text-[#C873E5]">{item.pay}</span>
                          </Link>
                        ))}
                      </div>
                      <div className="mt-4 pt-3 border-t border-white/10">
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
                    </div>
                  )}
                </div>
                
                <Link
                  href="#faq"
                  className="px-4 py-2 text-sm font-medium text-[#8B92A5] hover:text-[#FFFFFF] transition-colors"
                >
                  FAQs
                </Link>

                <Link
                  href="#requirements"
                  className="px-4 py-2 text-sm font-medium text-[#8B92A5] hover:text-[#FFFFFF] transition-colors"
                >
                  Requirements
                </Link>
              </>
            )}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {!isAgentsPage ? (
              <Link
                href="/contact"
                className="px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-[#2047FF] to-[#C873E5] rounded-md hover:shadow-lg transition-all flex items-center gap-2"
              >
                Let's Talk
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            ) : (
              <Link
                href="#apply"
                className="px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-[#2047FF] to-[#C873E5] rounded-md hover:shadow-lg transition-all flex items-center gap-2"
              >
                Apply Now
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-[#FFFFFF]"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-white/10 pt-4">
            {/* Mobile Toggle */}
            <div className="flex items-center bg-white/10 rounded-full p-1 mb-4">
              <Link
                href="/"
                className={`flex-1 px-4 py-2 text-sm font-semibold rounded-full text-center transition-all ${
                  !isAgentsPage
                    ? "bg-gradient-to-r from-[#2047FF] to-[#C873E5] text-white"
                    : "text-[#8B92A5]"
                }`}
              >
                For Business
              </Link>
              <Link
                href="/agents"
                className={`flex-1 px-4 py-2 text-sm font-semibold rounded-full text-center transition-all ${
                  isAgentsPage
                    ? "bg-gradient-to-r from-[#2047FF] to-[#C873E5] text-white"
                    : "text-[#8B92A5]"
                }`}
              >
                For Agents
              </Link>
            </div>

            <div className="flex flex-col gap-2">
              {!isAgentsPage ? (
                <>
                  <Link href="#how-it-works" className="px-4 py-3 text-[#FFFFFF] hover:bg-[#1A1E30] rounded-lg">
                    How It Works
                  </Link>
                  <Link href="#services" className="px-4 py-3 text-[#FFFFFF] hover:bg-[#1A1E30] rounded-lg">
                    Services
                  </Link>
                  <Link href="#faq" className="px-4 py-3 text-[#8B92A5] hover:bg-[#1A1E30] rounded-lg">
                    FAQs
                  </Link>
                  <Link href="#contact" className="px-4 py-3 text-[#8B92A5] hover:bg-[#1A1E30] rounded-lg">
                    About
                  </Link>
                  <Link href="/contact" className="px-4 py-3 text-[#8B92A5] hover:bg-[#1A1E30] rounded-lg">
                    Contact
                  </Link>
                  <div className="mt-4 px-4">
                    <Link
                      href="/contact"
                      className="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#2047FF] to-[#C873E5] rounded-md"
                    >
                      Let's Talk
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <Link href="#how-to-start" className="px-4 py-3 text-[#FFFFFF] hover:bg-[#1A1E30] rounded-lg">
                    How It Works
                  </Link>
                  <Link href="/agents/opportunities" className="px-4 py-3 text-[#FFFFFF] hover:bg-[#1A1E30] rounded-lg">
                    Opportunities
                  </Link>
                  <Link href="#faq" className="px-4 py-3 text-[#8B92A5] hover:bg-[#1A1E30] rounded-lg">
                    FAQs
                  </Link>
                  <Link href="#requirements" className="px-4 py-3 text-[#8B92A5] hover:bg-[#1A1E30] rounded-lg">
                    Requirements
                  </Link>
                  <div className="mt-4 px-4">
                    <Link
                      href="#apply"
                      className="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#2047FF] to-[#C873E5] rounded-md"
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
