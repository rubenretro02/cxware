"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const isAgentsPage = pathname === "/agents";

  // Business page navigation items
  const businessSolutionItems = [
    { icon: "phone", label: "Call Center Outsourcing", href: "#services" },
    { icon: "users", label: "Customer Service Outsourcing", href: "#services" },
    { icon: "chat", label: "Live Chat Support", href: "#services" },
    { icon: "clock", label: "24/7 Help Desk", href: "#services" },
    { icon: "file", label: "Tax Support", href: "#services" },
    { icon: "heart", label: "Healthcare Support", href: "#services" },
  ];

  const businessIndustryItems = [
    { label: "Insurance", href: "#services" },
    { label: "Telecommunications", href: "#services" },
    { label: "Utilities", href: "#services" },
    { label: "Finance/Banking", href: "#services" },
    { label: "Travel/Transportation", href: "#services" },
    { label: "Retail", href: "#services" },
    { label: "Healthcare", href: "#services" },
  ];

  // Agents page navigation items
  const agentOpportunityItems = [
    { label: "USA - Remote Call Center Agent", pay: "$14-$20/hr", href: "#opportunities" },
    { label: "Spanish Bilingual Agent (USA)", pay: "$17-$20/hr", href: "#opportunities" },
    { label: "Dominican Republic - Freelancer", pay: "$5-$7/hr", href: "#opportunities" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-black/5">
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
            <div className="hidden md:flex items-center bg-[#f0eff2] rounded-full p-1">
              <Link
                href="/"
                className={`px-5 py-2 text-sm font-semibold rounded-full transition-all ${
                  !isAgentsPage
                    ? "bg-gradient-to-r from-[#2047FF] to-[#C873E5] text-white shadow-md"
                    : "text-[#64748B] hover:text-[#0B1121]"
                }`}
              >
                For Business
              </Link>
              <Link
                href="/agents"
                className={`px-5 py-2 text-sm font-semibold rounded-full transition-all ${
                  isAgentsPage
                    ? "bg-gradient-to-r from-[#2047FF] to-[#C873E5] text-white shadow-md"
                    : "text-[#64748B] hover:text-[#0B1121]"
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
                  className="px-4 py-2 text-sm font-medium text-[#64748B] hover:text-[#0B1121] transition-colors"
                >
                  How It Works
                </Link>

                {/* Services Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setActiveDropdown("services")}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    type="button"
                    className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-[#64748B] hover:text-[#0B1121] transition-colors"
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
                    <div className="absolute top-full left-0 mt-2 w-[550px] bg-white rounded-2xl border border-black/10 shadow-2xl p-6 grid grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#C873E5] mb-4">
                          By Solution
                        </h4>
                        <div className="space-y-1">
                          {businessSolutionItems.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#64748B] hover:text-[#0B1121] hover:bg-[#f7f6f8] transition-all"
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
                              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#64748B] hover:text-[#0B1121] hover:bg-[#f7f6f8] transition-all"
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
                  className="px-4 py-2 text-sm font-medium text-[#64748B] hover:text-[#0B1121] transition-colors"
                >
                  FAQs
                </Link>

                <Link
                  href="#contact"
                  className="px-4 py-2 text-sm font-medium text-[#64748B] hover:text-[#0B1121] transition-colors"
                >
                  About
                </Link>
              </>
            ) : (
              // Agents Navigation
              <>
                <Link
                  href="#how-to-start"
                  className="px-4 py-2 text-sm font-medium text-[#64748B] hover:text-[#0B1121] transition-colors"
                >
                  How It Works
                </Link>

                {/* Opportunities Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setActiveDropdown("opportunities")}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    type="button"
                    className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-[#64748B] hover:text-[#0B1121] transition-colors"
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
                    <div className="absolute top-full left-0 mt-2 w-[350px] bg-white rounded-2xl border border-black/10 shadow-2xl p-5">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#C873E5] mb-4">
                        Open Positions
                      </h4>
                      <div className="space-y-2">
                        {agentOpportunityItems.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="flex items-center justify-between px-3 py-3 rounded-lg text-[#64748B] hover:text-[#0B1121] hover:bg-[#f7f6f8] transition-all"
                          >
                            <span className="text-sm font-medium">{item.label}</span>
                            <span className="text-xs font-semibold text-[#C873E5]">{item.pay}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <Link
                  href="#faq"
                  className="px-4 py-2 text-sm font-medium text-[#64748B] hover:text-[#0B1121] transition-colors"
                >
                  FAQs
                </Link>

                <Link
                  href="#requirements"
                  className="px-4 py-2 text-sm font-medium text-[#64748B] hover:text-[#0B1121] transition-colors"
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
                href="#contact"
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
            className="lg:hidden p-2 text-[#0B1121]"
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
          <div className="lg:hidden mt-4 pb-4 border-t border-black/10 pt-4">
            {/* Mobile Toggle */}
            <div className="flex items-center bg-[#f0eff2] rounded-full p-1 mb-4">
              <Link
                href="/"
                className={`flex-1 px-4 py-2 text-sm font-semibold rounded-full text-center transition-all ${
                  !isAgentsPage
                    ? "bg-gradient-to-r from-[#2047FF] to-[#C873E5] text-white"
                    : "text-[#64748B]"
                }`}
              >
                For Business
              </Link>
              <Link
                href="/agents"
                className={`flex-1 px-4 py-2 text-sm font-semibold rounded-full text-center transition-all ${
                  isAgentsPage
                    ? "bg-gradient-to-r from-[#2047FF] to-[#C873E5] text-white"
                    : "text-[#64748B]"
                }`}
              >
                For Agents
              </Link>
            </div>

            <div className="flex flex-col gap-2">
              {!isAgentsPage ? (
                <>
                  <Link href="#how-it-works" className="px-4 py-3 text-[#0B1121] hover:bg-[#f7f6f8] rounded-lg">
                    How It Works
                  </Link>
                  <Link href="#services" className="px-4 py-3 text-[#0B1121] hover:bg-[#f7f6f8] rounded-lg">
                    Services
                  </Link>
                  <Link href="#faq" className="px-4 py-3 text-[#64748B] hover:bg-[#f7f6f8] rounded-lg">
                    FAQs
                  </Link>
                  <Link href="#contact" className="px-4 py-3 text-[#64748B] hover:bg-[#f7f6f8] rounded-lg">
                    About
                  </Link>
                  <div className="mt-4 px-4">
                    <Link
                      href="#contact"
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
                  <Link href="#how-to-start" className="px-4 py-3 text-[#0B1121] hover:bg-[#f7f6f8] rounded-lg">
                    How It Works
                  </Link>
                  <Link href="#opportunities" className="px-4 py-3 text-[#0B1121] hover:bg-[#f7f6f8] rounded-lg">
                    Opportunities
                  </Link>
                  <Link href="#faq" className="px-4 py-3 text-[#64748B] hover:bg-[#f7f6f8] rounded-lg">
                    FAQs
                  </Link>
                  <Link href="#requirements" className="px-4 py-3 text-[#64748B] hover:bg-[#f7f6f8] rounded-lg">
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
