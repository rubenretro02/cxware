"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

const faqs = [
  {
    question: "What does CXware actually do?",
    answer:
      "We run the workforce ops layer for customer support: forecasting, matching certified agents to your brand, scheduling, payments, and live quality monitoring — across voice, chat, and back-office.",
  },
  {
    question: "How is quality maintained across so many agents?",
    answer:
      "Agents complete brand-specific certification before going live, and every interaction is sampled with AI-assisted QA. Your dashboard shows scorecards in real time.",
  },
  {
    question: "Which industries do you serve?",
    answer:
      "Retail, healthcare, insurance, financial services, telecom, travel, utilities, and tax. Compliance posture is industry-aware (PCI-DSS, HIPAA, SOC II, HITRUST, GDPR).",
  },
  {
    question: "Is coverage really 24/7?",
    answer:
      "Yes. Agents span time zones so coverage is continuous, including overnight, weekends, and seasonal peaks without overtime markup.",
  },
  {
    question: "How long until we're live?",
    answer:
      "Most partners are live in under three weeks: one week discovery and forecast, one week brand certification, then a monitored launch.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-28 lg:py-36 border-t border-[var(--line)] relative overflow-hidden">
      <div className="aurora-blob w-[400px] h-[400px] top-[10%] left-[20%]" style={{ opacity: 0.10 }} />

      <div className="relative mx-auto max-w-[1400px] px-5 lg:px-8">
        <div className="grid grid-cols-12 gap-x-8 gap-y-12">
          <ScrollReveal variant="up" className="col-span-12 lg:col-span-4 lg:sticky lg:top-32 lg:self-start space-y-5">
            <h2 className="text-[clamp(1.9rem,3.6vw,2.8rem)] font-bold leading-[1.04] tracking-[-0.025em] text-balance">
              Frequently <span className="gradient-text">asked.</span>
            </h2>
            <p className="text-[15.5px] text-[var(--fg-muted)] leading-[1.55] max-w-[36ch]">
              Couldn't find your answer? Talk to us — we usually reply same-day.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-[14px] gradient-text font-semibold hover:underline underline-offset-4"
            >
              Contact the team →
            </Link>
          </ScrollReveal>

          <ScrollReveal as="div" variant="stagger" className="col-span-12 lg:col-span-7 lg:col-start-6">
            <ul className="border-t border-[var(--line)]">
              {faqs.map((faq, index) => {
                const open = openIndex === index;
                return (
                  <li key={faq.question} className="border-b border-[var(--line)]">
                    <button
                      type="button"
                      onClick={() => setOpenIndex(open ? null : index)}
                      className="w-full flex items-start justify-between gap-6 py-6 text-left group"
                    >
                      <span className="text-[17px] lg:text-[18px] font-semibold tracking-[-0.01em] text-[var(--fg)] group-hover:gradient-text transition-all">
                        {faq.question}
                      </span>
                      <span
                        className="shrink-0 mt-1 w-8 h-8 rounded-full flex items-center justify-center text-white transition-transform duration-300 ease-[var(--ease-cinema)]"
                        style={{
                          background: open ? "var(--grad)" : "rgba(255,255,255,0.05)",
                          boxShadow: open ? "0 4px 16px rgba(32,71,255,0.3)" : "none",
                          transform: open ? "rotate(45deg)" : "rotate(0deg)",
                        }}
                      >
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path d="M12 5v14M5 12h14" strokeWidth={1.75} strokeLinecap="round" />
                        </svg>
                      </span>
                    </button>
                    <div
                      className="grid transition-[grid-template-rows] duration-400 ease-[var(--ease-cinema)]"
                      style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
                    >
                      <div className="overflow-hidden">
                        <p className="pb-6 pr-12 text-[15px] text-[var(--fg-muted)] leading-[1.6] text-pretty">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
