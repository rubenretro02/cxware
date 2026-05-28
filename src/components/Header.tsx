"use client";

import Link from "next/link";
import { useState, useRef, useCallback, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();
  const isAgentsPage = pathname === "/agents" || pathname.startsWith("/agents/");
  const isServicePage = pathname.startsWith("/services");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseEnter = useCallback((dropdown: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveDropdown(dropdown);
  }, []);

  const handleMouseLeave = useCallback(() => {
    closeTimeoutRef.current = setTimeout(() => setActiveDropdown(null), 250);
  }, []);

  const solutions = [
    { label: "Call Center Outsourcing", href: "/services/call-center-outsourcing" },
    { label: "Customer Service", href: "/services/customer-service-outsourcing" },
    { label: "Live Chat Support", href: "/services/live-chat-support" },
    { label: "24/7 Help Desk", href: "/services/help-desk" },
    { label: "Tax Support", href: "/services/tax-support" },
    { label: "Healthcare Support", href: "/services/healthcare-support" },
  ];
  const industries = [
    { label: "Insurance", href: "/services/insurance" },
    { label: "Telecommunications", href: "/services/telecommunications" },
    { label: "Utilities", href: "/services/utilities" },
    { label: "Finance & Banking", href: "/services/finance-banking" },
    { label: "Travel & Transport", href: "/services/travel-transportation" },
    { label: "Retail", href: "/services/retail" },
    { label: "Healthcare", href: "/services/healthcare-industry" },
  ];
  const opportunities = [
    { label: "Customer Service", pay: "$14–20/hr", href: "/agents/opportunities/customer-service" },
    { label: "Inbound Sales", pay: "$14–20+/hr", href: "/agents/opportunities/inbound-sales" },
    { label: "Healthcare Support", pay: "$15–20/hr", href: "/agents/opportunities/healthcare" },
    { label: "Insurance Sales", pay: "$16–25+/hr", href: "/agents/opportunities/insurance-sales" },
    { label: "Bilingual Spanish", pay: "$17–20+/hr", href: "/agents/opportunities/bilingual-spanish" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`mx-auto max-w-[1400px] px-5 lg:px-8 transition-colors duration-200 ${
          scrolled
            ? "backdrop-blur-md bg-[oklch(0.165_0.012_255/0.78)] border-b border-[var(--line)]"
            : "border-b border-transparent"
        }`}
      >
        <nav className="h-16 flex items-center justify-between gap-6">
          {/* Left — wordmark + toggle */}
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <img
                src="https://ext.same-assets.com/405996721/472180092.webp"
                alt="CXware"
                className="h-7 w-auto"
              />
            </Link>

            <div className="hidden md:flex items-center gap-px text-[12px] mono">
              <Link
                href="/"
                className={`px-2.5 py-1 rounded-[var(--r-sm)] transition-colors ${
                  !isAgentsPage
                    ? "bg-[var(--bg-elev-2)] text-[var(--fg)]"
                    : "text-[var(--fg-dim)] hover:text-[var(--fg)]"
                }`}
              >
                Business
              </Link>
              <Link
                href="/agents"
                className={`px-2.5 py-1 rounded-[var(--r-sm)] transition-colors ${
                  isAgentsPage
                    ? "bg-[var(--bg-elev-2)] text-[var(--fg)]"
                    : "text-[var(--fg-dim)] hover:text-[var(--fg)]"
                }`}
              >
                Agents
              </Link>
            </div>
          </div>

          {/* Center — nav links */}
          <div className="hidden lg:flex items-center gap-1 text-[13.5px]">
            {!isAgentsPage ? (
              <>
                <Link href="#how-it-works" className="px-3 py-1.5 text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors">
                  Platform
                </Link>

                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter("services")}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    type="button"
                    className={`flex items-center gap-1 px-3 py-1.5 transition-colors ${
                      isServicePage ? "text-[var(--fg)]" : "text-[var(--fg-muted)] hover:text-[var(--fg)]"
                    }`}
                  >
                    Services
                    <svg className={`w-3 h-3 transition-transform ${activeDropdown === "services" ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M6 9l6 6 6-6" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  {activeDropdown === "services" && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[560px] panel p-5 grid grid-cols-2 gap-6 shadow-2xl shadow-black/40">
                      <div>
                        <div className="label mb-3">By solution</div>
                        <ul className="space-y-px">
                          {solutions.map((item) => (
                            <li key={item.label}>
                              <Link
                                href={item.href}
                                onClick={() => setActiveDropdown(null)}
                                className="block px-2.5 py-2 text-[13.5px] text-[var(--fg-muted)] hover:text-[var(--fg)] hover:bg-[var(--bg-elev-2)] rounded-[var(--r-sm)] transition-colors"
                              >
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="label mb-3">By industry</div>
                        <ul className="space-y-px">
                          {industries.map((item) => (
                            <li key={item.label}>
                              <Link
                                href={item.href}
                                onClick={() => setActiveDropdown(null)}
                                className="block px-2.5 py-2 text-[13.5px] text-[var(--fg-muted)] hover:text-[var(--fg)] hover:bg-[var(--bg-elev-2)] rounded-[var(--r-sm)] transition-colors"
                              >
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>

                <Link href="#faq" className="px-3 py-1.5 text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors">
                  FAQ
                </Link>
                <Link href="/contact" className="px-3 py-1.5 text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors">
                  Contact
                </Link>
              </>
            ) : (
              <>
                <Link href="#how-to-start" className="px-3 py-1.5 text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors">
                  How it works
                </Link>

                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter("opportunities")}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    type="button"
                    className="flex items-center gap-1 px-3 py-1.5 text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors"
                  >
                    Opportunities
                    <svg className={`w-3 h-3 transition-transform ${activeDropdown === "opportunities" ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M6 9l6 6 6-6" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  {activeDropdown === "opportunities" && (
                    <div className="absolute top-full left-0 mt-3 w-[360px] panel p-3 shadow-2xl shadow-black/40">
                      <div className="label px-2.5 mb-2">Remote roles</div>
                      <ul className="space-y-px">
                        {opportunities.map((item) => (
                          <li key={item.label}>
                            <Link
                              href={item.href}
                              onClick={() => setActiveDropdown(null)}
                              className="flex items-center justify-between gap-3 px-2.5 py-2 text-[13.5px] text-[var(--fg-muted)] hover:text-[var(--fg)] hover:bg-[var(--bg-elev-2)] rounded-[var(--r-sm)] transition-colors"
                            >
                              <span>{item.label}</span>
                              <span className="mono text-[12px] text-[var(--accent)]">{item.pay}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <div className="hairline-row mt-2 pt-2">
                        <Link
                          href="/agents/opportunities"
                          onClick={() => setActiveDropdown(null)}
                          className="block px-2.5 py-1.5 text-[13px] text-[var(--accent)] hover:underline underline-offset-4"
                        >
                          View all roles →
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

                <Link href="#faq" className="px-3 py-1.5 text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors">
                  FAQ
                </Link>
                <Link href="#requirements" className="px-3 py-1.5 text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors">
                  Requirements
                </Link>
              </>
            )}
          </div>

          {/* Right — single CTA per page register */}
          <div className="hidden md:flex items-center gap-3">
            {!isAgentsPage ? (
              <Link href="/contact" className="btn btn-accent">
                Talk to us
              </Link>
            ) : (
              <Link href="#apply" className="btn btn-accent">
                Apply now
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-[var(--fg)]"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M6 18L18 6M6 6l12 12" strokeWidth={1.75} strokeLinecap="round" />
              </svg>
            ) : (
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M4 7h16M4 12h16M4 17h16" strokeWidth={1.75} strokeLinecap="round" />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden pb-5 border-t border-[var(--line)] pt-4">
            <div className="flex items-center gap-px mono text-[12px] mb-4 w-fit">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className={`px-3 py-1.5 rounded-[var(--r-sm)] ${
                  !isAgentsPage ? "bg-[var(--bg-elev-2)] text-[var(--fg)]" : "text-[var(--fg-dim)]"
                }`}
              >
                Business
              </Link>
              <Link
                href="/agents"
                onClick={() => setIsOpen(false)}
                className={`px-3 py-1.5 rounded-[var(--r-sm)] ${
                  isAgentsPage ? "bg-[var(--bg-elev-2)] text-[var(--fg)]" : "text-[var(--fg-dim)]"
                }`}
              >
                Agents
              </Link>
            </div>

            <ul className="flex flex-col">
              {(!isAgentsPage
                ? [
                    { label: "Platform", href: "#how-it-works" },
                    { label: "Services", href: "/services/call-center-outsourcing" },
                    { label: "FAQ", href: "#faq" },
                    { label: "Contact", href: "/contact" },
                  ]
                : [
                    { label: "How it works", href: "#how-to-start" },
                    { label: "Opportunities", href: "/agents/opportunities" },
                    { label: "FAQ", href: "#faq" },
                    { label: "Requirements", href: "#requirements" },
                  ]
              ).map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-1 py-3 text-[15px] text-[var(--fg-muted)] hover:text-[var(--fg)] border-b border-[var(--line)] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href={isAgentsPage ? "#apply" : "/contact"}
              onClick={() => setIsOpen(false)}
              className="btn btn-accent btn-lg w-full justify-center mt-5"
            >
              {isAgentsPage ? "Apply now" : "Talk to us"}
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
