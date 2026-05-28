"use client";

import Link from "next/link";

type Brand = "cxware" | "wingcx";

export default function BrandMark({
  brand,
  className = "",
}: {
  brand: Brand;
  className?: string;
}) {
  if (brand === "cxware") {
    return (
      <Link href="/" className={`flex items-center shrink-0 group ${className}`}>
        <img
          src="https://ext.same-assets.com/405996721/472180092.webp"
          alt="CXware"
          className="h-7 w-auto transition-transform duration-300 group-hover:scale-105"
        />
      </Link>
    );
  }

  // WingCX wordmark — bold sans, "CX" in brand gradient, tiny wing accent
  return (
    <Link href="/agents" className={`flex items-center gap-2 shrink-0 group ${className}`}>
      <svg
        className="w-6 h-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-8deg]"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="wing-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2047FF" />
            <stop offset="100%" stopColor="#C873E5" />
          </linearGradient>
        </defs>
        {/* Stylised wing — two strokes sweeping right */}
        <path
          d="M3 22 Q 10 4, 28 8 Q 18 14, 9 23 Z"
          fill="url(#wing-grad)"
        />
        <path
          d="M14 24 Q 19 14, 29 14 Q 24 21, 17 26 Z"
          fill="url(#wing-grad)"
          opacity="0.55"
        />
      </svg>
      <span className="text-[20px] font-bold tracking-[-0.025em] leading-none">
        <span className="text-[var(--fg)]">Wing</span>
        <span className="gradient-text">CX</span>
      </span>
    </Link>
  );
}
