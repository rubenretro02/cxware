"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "wingcx-cookie-consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        // small delay so the banner doesn't fight the page entrance
        const t = setTimeout(() => setVisible(true), 1200);
        return () => clearTimeout(t);
      }
    } catch {
      // storage unavailable (private mode) — stay hidden rather than nag every load
    }
  }, []);

  const choose = (value: "accepted" | "essential") => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ value, date: new Date().toISOString() }),
      );
    } catch {
      // ignore storage failures
    }
    setLeaving(true);
    setTimeout(() => setVisible(false), 450);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      aria-live="polite"
      className="fixed bottom-4 inset-x-3 sm:inset-x-auto sm:right-5 sm:bottom-5 z-[60] max-w-[440px]"
      style={{
        animation: leaving
          ? "cookie-out 450ms var(--ease-cinema) forwards"
          : "cookie-in 600ms var(--ease-cinema) both",
      }}
    >
      <div
        className="rounded-2xl border p-5 shadow-[0_20px_60px_rgba(10,18,38,0.16)]"
        style={{
          borderColor: "var(--line-strong)",
          background: "var(--glass-bg-strong)",
          backdropFilter: "blur(22px) saturate(180%)",
          WebkitBackdropFilter: "blur(22px) saturate(180%)",
        }}
      >
        <div className="flex items-start gap-3.5">
          <div className="icon-box-secondary flex-shrink-0 !w-10 !h-10">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.75}
                d="M21 12a9 9 0 1 1-9-9c0 2 1.5 3.5 3.5 3.5 0 2 1.5 3.5 3.5 3.5.7 0 1.4-.2 2-.6Z"
              />
              <circle cx="9" cy="10" r="1.1" fill="currentColor" stroke="none" />
              <circle cx="13.5" cy="14.5" r="1.1" fill="currentColor" stroke="none" />
              <circle cx="8.5" cy="15.5" r="1.1" fill="currentColor" stroke="none" />
            </svg>
          </div>
          <div className="min-w-0">
            <p className="text-[14px] font-semibold text-[var(--fg)] mb-1">We value your privacy</p>
            <p className="text-[13px] text-[var(--fg-muted)] leading-[1.55]">
              We use cookies to keep the site running, measure performance, and improve your
              experience. Read our{" "}
              <Link href="/privacy#cookies" className="gradient-text font-semibold hover:underline underline-offset-2">
                Cookie Policy
              </Link>
              .
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5 mt-4">
          <button type="button" onClick={() => choose("accepted")} className="btn btn-brand flex-1 justify-center">
            Accept all
          </button>
          <button type="button" onClick={() => choose("essential")} className="btn btn-ghost flex-1 justify-center">
            Essential only
          </button>
        </div>
      </div>
    </div>
  );
}
