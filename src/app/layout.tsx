import type { Metadata } from "next";
import "./globals.css";
import { ClientBody } from "./ClientBody";

export const metadata: Metadata = {
  title: "CXware Agent Solutions - Smart Support Starts Here",
  description: "At CXware, we combine human expertise with strong values to deliver support that goes beyond the script. Cut costs by up to 45% with our expert outsourcing solutions.",
  keywords: "customer support, outsourcing, BPO, contact center, remote agents, US-based agents, 1099 contractors",
  openGraph: {
    title: "CXware Agent Solutions",
    description: "Smart Support Starts with CXware. Cut operational costs by up to 45% with expert customer service outsourcing.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
