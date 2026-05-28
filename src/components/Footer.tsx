"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import BrandMark from "./BrandMark";

export default function Footer() {
  const pathname = usePathname();
  const isAgentsPage = pathname === "/agents" || pathname.startsWith("/agents/");

  return (
    <footer className="border-t border-[var(--line)] pt-16 pb-10 bg-[var(--bg-inset)]">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-8">
        <div className="grid grid-cols-12 gap-x-8 gap-y-12 mb-14">
          {/* Brand + newsletter */}
          <div className="col-span-12 lg:col-span-5 space-y-6">
            <BrandMark href={isAgentsPage ? "/agents" : "/"} className="!h-auto" />
            <p className="text-[14.5px] text-[var(--fg-muted)] leading-[1.55] max-w-[42ch]">
              {isAgentsPage
                ? "Monthly notes on remote support careers, brand training, and the operational details that make great agents. No spam."
                : "Monthly notes on workforce ops, AI in support, and the operational details that move CSAT. No spam."}
            </p>
            <form className="flex max-w-md gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                required
                placeholder="you@company.com"
                className="flex-1 bg-[var(--bg)] border border-[var(--line-strong)] rounded-[var(--r-md)] px-4 py-2.5 text-[14px] text-[var(--fg)] placeholder:text-[var(--fg-faint)] focus:outline-none focus:border-[var(--brand-purple)] transition-colors duration-200"
              />
              <button type="submit" className="btn btn-brand">
                Subscribe
              </button>
            </form>
          </div>

          <FooterCol
            title="Platform"
            items={[
              { label: "How it works", href: "#how-it-works" },
              { label: "Services", href: "/services/call-center-outsourcing" },
              { label: "For agents", href: "/agents" },
              { label: "FAQ", href: "#faq" },
              { label: "Contact", href: "/contact" },
            ]}
          />
          <FooterCol
            title="Solutions"
            items={[
              { label: "Customer service", href: "/services/customer-service-outsourcing" },
              { label: "Healthcare support", href: "/services/healthcare-support" },
              { label: "Insurance sales", href: "/services/insurance" },
              { label: "Tax support", href: "/services/tax-support" },
              { label: "24/7 help desk", href: "/services/help-desk" },
            ]}
          />
          <FooterCol
            title="Industries"
            items={[
              { label: "Insurance", href: "/services/insurance" },
              { label: "Healthcare", href: "/services/healthcare-industry" },
              { label: "Retail", href: "/services/retail" },
              { label: "Finance & banking", href: "/services/finance-banking" },
              { label: "Telecommunications", href: "/services/telecommunications" },
            ]}
          />
        </div>

        <div className="pt-8 border-t border-[var(--line)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="mono text-[12px] text-[var(--fg-faint)]">
            © 2025 WingCX Agent Solutions — All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-[13px]">
            <Link href="#" className="text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors duration-200">
              Privacy
            </Link>
            <Link href="#" className="text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors duration-200">
              Terms
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <SocialIcon href="#" label="Twitter">
              <path d="M22.46 5.92c-.77.34-1.6.57-2.46.67.88-.53 1.56-1.37 1.88-2.37-.83.49-1.75.85-2.72 1.04C18.34 4.42 17.24 4 16 4c-2.5 0-4.55 2.05-4.55 4.55 0 .36.04.71.12 1.04C7.69 9.4 4.07 7.46 1.64 4.5c-.39.67-.62 1.45-.62 2.29 0 1.58.8 2.97 2.02 3.79-.74-.02-1.44-.23-2.05-.57v.06c0 2.2 1.57 4.04 3.65 4.46-.38.1-.78.16-1.2.16-.29 0-.58-.03-.86-.08.58 1.81 2.26 3.13 4.25 3.17C5.25 19.13 3.37 19.83 1.32 19.83c-.35 0-.7-.02-1.04-.06C2.26 21 4.66 21.75 7.23 21.75c8.66 0 13.4-7.18 13.4-13.4 0-.2-.01-.41-.02-.61.92-.66 1.72-1.5 2.35-2.45z" />
            </SocialIcon>
            <SocialIcon href="#" label="LinkedIn">
              <path d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8 19H5V8h3v11zM6.5 6.73C5.53 6.73 4.75 5.94 4.75 4.97s.78-1.76 1.75-1.76 1.75.79 1.75 1.76S7.47 6.73 6.5 6.73zM20 19h-3v-5.6c0-3.37-4-3.11-4 0V19h-3V8h3v1.77c1.4-2.59 7-2.78 7 2.48V19z" />
            </SocialIcon>
            <SocialIcon href="mailto:contact@wingcx.com" label="Email">
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeWidth={1.5} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </SocialIcon>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div className="col-span-6 md:col-span-3 lg:col-span-2">
      <h4 className="label mb-4">{title}</h4>
      <ul className="space-y-2.5">
        {items.map((it) => (
          <li key={it.label}>
            <Link
              href={it.href}
              className="text-[13.5px] text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors duration-200"
            >
              {it.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="w-9 h-9 rounded-full border border-[var(--line)] flex items-center justify-center text-[var(--fg-muted)] hover:text-[var(--fg)] hover:border-[var(--brand-purple)] hover:bg-[var(--bg-elev-2)] transition-all duration-200"
    >
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        {children}
      </svg>
    </a>
  );
}
