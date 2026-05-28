"use client";

import Link from "next/link";

export default function BrandMark({
  className = "",
  href = "/",
}: {
  className?: string;
  href?: string;
}) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-2.5 shrink-0 group ${className}`}
      aria-label="WingCX home"
    >
      <WingMark className="w-7 h-7 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-[6deg]" />
      <span className="text-[19px] font-bold tracking-[-0.025em] leading-none">
        <span className="text-[var(--fg)]">Wing</span>
        <span className="gradient-text">CX</span>
      </span>
    </Link>
  );
}

/**
 * WingMark — a stylised wing sweeping over a headset earcup.
 * Reads cleanly at any size (favicon → display). The wing communicates
 * remote / freedom; the earcup anchors customer-support identity.
 */
function WingMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="wing-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2047FF" />
          <stop offset="100%" stopColor="#C873E5" />
        </linearGradient>
      </defs>
      {/* three feather strokes sweeping right */}
      <path
        d="M3 20 Q 11 6, 28 8"
        stroke="url(#wing-grad)"
        strokeWidth="2.4"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M5 23 Q 12 11, 25 13"
        stroke="url(#wing-grad)"
        strokeWidth="2.0"
        strokeLinecap="round"
        fill="none"
        opacity="0.75"
      />
      <path
        d="M8 26 Q 14 17, 22 19"
        stroke="url(#wing-grad)"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
      {/* headset earcup — anchored at the wing's base */}
      <circle cx="6" cy="22" r="2.5" fill="url(#wing-grad)" />
      {/* small accent dot suggesting microphone */}
      <circle cx="11" cy="27" r="1.1" fill="url(#wing-grad)" opacity="0.85" />
    </svg>
  );
}
