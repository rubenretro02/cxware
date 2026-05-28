import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClientBody } from "./ClientBody";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CXware — Workforce Operations for Modern Contact Centers",
  description:
    "CXware synchronizes evolving AI agents and human teams into one automated, scalable workforce. Cut contact center cost by up to 45% without losing CSAT.",
  keywords:
    "customer support, outsourcing, BPO, contact center, workforce operations, AI agents, 1099 agents",
  openGraph: {
    title: "CXware — Workforce Operations for Modern Contact Centers",
    description:
      "Synchronize AI and human agents into one automated, scalable workforce.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
