"use client";

import Link from "next/link";
import { useState, useRef, useCallback, useEffect } from "react";
import { usePathname } from "next/navigation";
import BrandMark from "./BrandMark";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();
  const isAgentsPage = pathname === "/agents" || pathname.startsWith("/agents/");
  const isServicePage = pathname.startsWith("/services");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
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

  const cta = isAgentsPage
    ? { label: "Apply Now", href: "#apply" }
    : { label: "Let's Talk", href: "/contact" };

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-3 sm:px-5 pt-3 sm:pt-4">
      <nav
        className={`mx-auto max-w-[1320px] rounded-full border transition-all duration-300 ease-out ${
          scrolled
            ? "shadow-[0_8px_32px_rgba(10,18,38,0.08)]"
            : "shadow-[0_4px_18px_rgba(10,18,38,0.05)]"
        }`}
        style={{
          background: scrolled ? "var(--glass-bg-strong)" : "var(--glass-bg)",
          borderColor: scrolled ? "var(--line-strong)" : "var(--line)",
          backdropFilter: "blur(22px) saturate(180%)",
          WebkitBackdropFilter: "blur(22px) saturate(180%)",
        }}
      >
        <div className="flex items-center justify-between gap-4 px-4 sm:px-5 lg:px-6 py-2.5">
          {/* Left — wordmark + Business/Agents toggle */}
          <div className="flex items-center gap-5">
            <BrandMark href={isAgentsPage ? "/agents" : "/"} />

            <div
              className="hidden md:flex items-center rounded-full p-[3px] border"
              style={{
                borderColor: "var(--line)",
                background: "var(--bg-elev-1)",
              }}
            >
              <Link
                href="/"
                className={`relative px-3.5 py-1.5 text-[11px] font-bold tracking-wide rounded-full transition-all duration-300 ${
                  !isAgentsPage
                    ? "text-white shadow-[0_4px_14px_rgba(32,71,255,0.32)]"
                    : "text-[var(--fg-muted)] hover:text-[var(--fg)]"
                }`}
                style={
                  !isAgentsPage
                    ? { backgroundImage: "var(--grad)", backgroundSize: "200% 100%" }
                    : undefined
                }
              >
                FOR BUSINESS
              </Link>
              <Link
                href="/agents"
                className={`relative px-3.5 py-1.5 text-[11px] font-bold tracking-wide rounded-full transition-all duration-300 ${
                  isAgentsPage
                    ? "text-white shadow-[0_4px_14px_rgba(32,71,255,0.32)]"
                    : "text-[var(--fg-muted)] hover:text-[var(--fg)]"
                }`}
                style={
                  isAgentsPage
                    ? { backgroundImage: "var(--grad)", backgroundSize: "200% 100%" }
                    : undefined
                }
              >
                FOR AGENTS
              </Link>
            </div>
          </div>

          {/* Center — nav links */}
          <div className="hidden lg:flex items-center gap-0.5 text-[13px]">
            {!isAgentsPage ? (
              <>
                <Link href="/#how-it-works" className="px-3 py-1.5 text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors duration-200">
                  How It Works
                </Link>

                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter("services")}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    type="button"
                    className={`flex items-center gap-1 px-3 py-1.5 transition-colors duration-200 ${
                      isServicePage ? "text-[var(--fg)]" : "text-[var(--fg-muted)] hover:text-[var(--fg)]"
                    }`}
                  >
                    Services
                    <svg
                      className={`w-3 h-3 transition-transform duration-300 ${activeDropdown === "services" ? "rotate-180" : ""}`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path d="M6 9l6 6 6-6" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[560px] origin-top transition-all duration-300 ${
                      activeDropdown === "services"
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
                  >
                    <div
                      className="rounded-2xl border p-5 grid grid-cols-2 gap-6 shadow-[0_20px_60px_rgba(10,18,38,0.12)]"
                      style={{
                        borderColor: "var(--line-strong)",
                        background: "var(--glass-bg-strong)",
                        backdropFilter: "blur(22px) saturate(180%)",
                        WebkitBackdropFilter: "blur(22px) saturate(180%)",
                      }}
                    >
                      <div>
                        <div className="label mb-3">By solution</div>
                        <ul className="space-y-px">
                          {solutions.map((item) => (
                            <li key={item.label}>
                              <Link
                                href={item.href}
                                onClick={() => setActiveDropdown(null)}
                                className="block px-2.5 py-2 text-[13.5px] text-[var(--fg-muted)] hover:text-[var(--fg)] hover:bg-[var(--bg-elev-2)] rounded-lg transition-all duration-200"
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
                                className="block px-2.5 py-2 text-[13.5px] text-[var(--fg-muted)] hover:text-[var(--fg)] hover:bg-[var(--bg-elev-2)] rounded-lg transition-all duration-200"
                              >
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <Link href="/#faq" className="px-3 py-1.5 text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors duration-200">
                  FAQs
                </Link>
                <Link href="/contact" className="px-3 py-1.5 text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors duration-200">
                  Contact
                </Link>
              </>
            ) : (
              <>
                <Link href="/agents#how-to-start" className="px-3 py-1.5 text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors duration-200">
                  How It Works
                </Link>

                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter("opportunities")}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    type="button"
                    className="flex items-center gap-1 px-3 py-1.5 text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors duration-200"
                  >
                    Opportunities
                    <svg
                      className={`w-3 h-3 transition-transform duration-300 ${activeDropdown === "opportunities" ? "rotate-180" : ""}`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path d="M6 9l6 6 6-6" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  <div
                    className={`absolute top-full left-0 mt-3 w-[360px] origin-top transition-all duration-300 ${
                      activeDropdown === "opportunities"
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
                  >
                    <div
                      className="rounded-2xl border p-3 shadow-[0_20px_60px_rgba(34,22,8,0.16)]"
                      style={{
                        borderColor: "var(--line-strong)",
                        background: "var(--glass-bg-strong)",
                        backdropFilter: "blur(22px) saturate(180%)",
                        WebkitBackdropFilter: "blur(22px) saturate(180%)",
                      }}
                    >
                      <div className="label px-2.5 mb-2">Remote roles</div>
                      <ul className="space-y-px">
                        {opportunities.map((item) => (
                          <li key={item.label}>
                            <Link
                              href={item.href}
                              onClick={() => setActiveDropdown(null)}
                              className="flex items-center justify-between gap-3 px-2.5 py-2 text-[13.5px] text-[var(--fg-muted)] hover:text-[var(--fg)] hover:bg-[var(--bg-elev-2)] rounded-lg transition-all duration-200"
                            >
                              <span>{item.label}</span>
                              <span className="mono text-[12px] gradient-text font-bold">{item.pay}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-2 pt-2 border-t" style={{ borderColor: "var(--line)" }}>
                        <Link
                          href="/agents/opportunities"
                          onClick={() => setActiveDropdown(null)}
                          className="block px-2.5 py-1.5 text-[13px] gradient-text font-semibold hover:underline underline-offset-4"
                        >
                          View all roles →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <Link href="/agents#faq" className="px-3 py-1.5 text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors duration-200">
                  FAQs
                </Link>
                <Link href="/agents#requirements" className="px-3 py-1.5 text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors duration-200">
                  Requirements
                </Link>
              </>
            )}
          </div>

          {/* Right — single brand CTA */}
          <div className="hidden md:flex items-center">
            <Link href={cta.href} className="btn btn-brand">
              {cta.label}
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M5 12h14M13 6l6 6-6 6" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-[var(--fg)] rounded-full hover:bg-[var(--bg-elev-2)] transition-colors"
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
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-400 ease-out ${
            isOpen ? "max-h-[640px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-5 pb-5 pt-3 border-t border-[var(--line)]">
            <div
              className="flex items-center rounded-full p-[3px] mb-4 border w-fit"
              style={{ borderColor: "var(--line)", background: "var(--bg-elev-1)" }}
            >
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className={`px-3.5 py-1.5 text-[11px] font-bold tracking-wide rounded-full transition-all ${
                  !isAgentsPage ? "text-white" : "text-[var(--fg-muted)]"
                }`}
                style={!isAgentsPage ? { backgroundImage: "var(--grad)" } : undefined}
              >
                FOR BUSINESS
              </Link>
              <Link
                href="/agents"
                onClick={() => setIsOpen(false)}
                className={`px-3.5 py-1.5 text-[11px] font-bold tracking-wide rounded-full transition-all ${
                  isAgentsPage ? "text-white" : "text-[var(--fg-muted)]"
                }`}
                style={isAgentsPage ? { backgroundImage: "var(--grad)" } : undefined}
              >
                FOR AGENTS
              </Link>
            </div>

            <ul className="flex flex-col">
              {(!isAgentsPage
                ? [
                    { label: "How It Works", href: "/#how-it-works" },
                    { label: "Services", href: "/services/call-center-outsourcing" },
                    { label: "FAQs", href: "/#faq" },
                    { label: "Contact", href: "/contact" },
                  ]
                : [
                    { label: "How It Works", href: "/agents#how-to-start" },
                    { label: "Opportunities", href: "/agents/opportunities" },
                    { label: "FAQs", href: "/agents#faq" },
                    { label: "Requirements", href: "/agents#requirements" },
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
              href={cta.href}
              onClick={() => setIsOpen(false)}
              className="btn btn-brand btn-lg w-full justify-center mt-5"
            >
              {cta.label}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
