"use client";

import CookieConsent from "@/components/CookieConsent";

export function ClientBody({ children }: { children: React.ReactNode }) {
  return (
    <body className="antialiased" suppressHydrationWarning>
      {children}
      <CookieConsent />
    </body>
  );
}
