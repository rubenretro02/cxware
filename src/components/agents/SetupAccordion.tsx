"use client";

import { useState } from "react";

type Item = {
  label: string;
  title: string;
  body: string;
  icon: React.ReactNode;
};

const items: Item[] = [
  {
    label: "Workspace",
    title: "A quiet, professional space",
    body: "A distraction-free workspace with no background noise during live interactions, a door you can close so customers never hear the rest of your household, reliable electricity, and room to keep your equipment permanently set up.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    ),
  },
  {
    label: "Internet",
    title: "Hard-wired and fast",
    body: "A wired Ethernet connection with at least 25 Mbps download and 5 Mbps upload. Wi-Fi, satellite, and mobile hotspots don't qualify for live programs — voice quality depends on a stable wire.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
    ),
  },
  {
    label: "Computer",
    title: "A machine that keeps up",
    body: "Modern multi-core processor (6 cores recommended), 16 GB RAM, and Windows 11 Home, Pro, or Workstations. Some programs also support macOS — the listing tells you before you commit.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    ),
  },
  {
    label: "Displays",
    title: "Full HD, sometimes two",
    body: "1920 × 1080 resolution or higher. Several programs require dual monitors for working tickets and knowledge bases side by side — you'll see this requirement in the program listing.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 6h16M4 6a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2M4 6V5a1 1 0 011-1h14a1 1 0 011 1v1M9 20h6m-3-4v4" />
    ),
  },
  {
    label: "Headset",
    title: "Corded, noise-cancelling, USB",
    body: "A corded USB headset with noise cancellation is required for every voice program. Bluetooth and analog (3.5mm) headsets introduce latency and noise, so they aren't supported.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 18v-6a9 9 0 0118 0v6M3 18a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H5a2 2 0 00-2 2v3zm18 0a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h1a2 2 0 012 2v3z" />
    ),
  },
  {
    label: "Browser",
    title: "Chrome or Edge, current",
    body: "The latest version of Chrome or Edge, kept up to date. Program tools are tested against current releases, so outdated browsers are the most common cause of avoidable tech issues.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-7c2 3 2 11 0 14m-7-7h14" />
    ),
  },
  {
    label: "Security",
    title: "Locked down by default",
    body: "Active firewall and antivirus, automatic OS updates enabled, full-disk encryption, a screen lock, and two-factor authentication on your phone. Programs handling payments or health data verify this before every shift.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    ),
  },
];

export default function SetupAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.label}
            className={`card-light overflow-hidden !translate-y-0 transition-all duration-300 ${
              isOpen ? "shadow-[var(--shadow-elev-2)] border-[var(--line-strong)]" : ""
            }`}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="w-full flex items-center gap-4 px-5 sm:px-6 py-4 text-left group"
            >
              <span
                className={`w-10 h-10 rounded-[var(--r-md)] flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                  isOpen ? "text-white" : "text-[var(--brand-blue)]"
                }`}
                style={{
                  background: isOpen ? "var(--grad-135)" : "var(--brand-blue-soft)",
                  boxShadow: isOpen ? "var(--shadow-brand-soft)" : "none",
                }}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {item.icon}
                </svg>
              </span>

              <span className="flex-1 min-w-0">
                <span className="mono block text-[10.5px] uppercase tracking-[0.16em] text-[var(--fg-dim)] mb-0.5">
                  {item.label}
                </span>
                <span className="block text-[16px] font-semibold text-[var(--fg)] tracking-[-0.01em]">
                  {item.title}
                </span>
              </span>

              <span
                className={`w-8 h-8 rounded-full border border-[var(--line)] flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:border-[var(--brand-purple)] ${
                  isOpen ? "rotate-180 bg-[var(--bg-elev-2)]" : ""
                }`}
              >
                <svg className="w-3.5 h-3.5 text-[var(--fg-muted)]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M6 9l6 6 6-6" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>

            <div
              className="grid transition-[grid-template-rows] duration-[450ms]"
              style={{
                gridTemplateRows: isOpen ? "1fr" : "0fr",
                transitionTimingFunction: "var(--ease-cinema)",
              }}
            >
              <div className="overflow-hidden">
                <p className="px-5 sm:px-6 pb-5 pl-[76px] sm:pl-[80px] text-[14.5px] text-[var(--fg-muted)] leading-[1.6] text-pretty max-w-[72ch]">
                  {item.body}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
