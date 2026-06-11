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
      <WingMark className="w-[30px] h-[30px] transition-transform duration-300 ease-out group-hover:scale-105" />
      <span className="text-[19px] font-bold tracking-[-0.03em] leading-none flex items-baseline">
        <span className="text-[var(--fg)]">Wing</span>
        <span className="gradient-text">CX</span>
      </span>
    </Link>
  );
}

/**
 * WingMark — contained app-icon style brand mark.
 * A gradient squircle tile carrying a white wing of three ascending
 * feather strokes; the bottom stroke terminates in a dot that reads
 * as a person/mic — the human inside the system. Crisp from favicon
 * to display size.
 */
function WingMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="wing-tile-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2047FF" />
          <stop offset="100%" stopColor="#C873E5" />
        </linearGradient>
        <linearGradient id="wing-sheen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* gradient tile */}
      <rect x="1" y="1" width="30" height="30" rx="8.5" fill="url(#wing-tile-grad)" />
      {/* top sheen for depth */}
      <rect x="1" y="1" width="30" height="15" rx="8.5" fill="url(#wing-sheen)" />

      {/* wing — three ascending feather strokes, white */}
      <path
        d="M7.5 19.5 Q 14 9.5, 25.5 10.5"
        stroke="#FFFFFF"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M9 22.5 Q 14.5 14.5, 22.5 15"
        stroke="#FFFFFF"
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
        opacity="0.78"
      />
      <path
        d="M11 25.5 Q 15 19.5, 19.5 19.8"
        stroke="#FFFFFF"
        strokeWidth="1.9"
        strokeLinecap="round"
        fill="none"
        opacity="0.55"
      />
    </svg>
  );
}
