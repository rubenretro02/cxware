"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function AgentFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Is CXware legit?",
      answer: "Absolutely. CXware has been helping connect brands with top customer service professionals for over 3 years. We've facilitated millions of customer interactions and work with recognized companies across multiple industries.",
    },
    {
      question: "Do I need to pay to get started?",
      answer: "No! CXware is completely free to join. You never pay us anything. We connect you with opportunities and you earn money for your work.",
    },
    {
      question: "What if I messed up on my application?",
      answer: "Don't worry! You can reach out to our support team and we'll help you update your application. We want to make sure your profile accurately represents your skills and experience.",
    },
    {
      question: "I haven't heard back. Where can I check my status?",
      answer: "You can log into your agent portal to check your application status at any time. If you've been waiting more than 5 business days, feel free to reach out to our support team.",
    },
    {
      question: "How do I get paid?",
      answer: "Agents are paid weekly via direct deposit. You'll see your earnings in your agent dashboard and payments are processed every Friday for the previous week's work.",
    },
  ];

  return (
    <section id="faq" className="py-24" style={{ background: "var(--agent-bg-primary)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          <ScrollReveal direction="left">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "var(--agent-text-heading)" }}>
                Frequently Asked
                <br />
                Questions
              </h2>
              <p className="text-lg mb-6" style={{ color: "var(--agent-text-secondary)" }}>
                {"Still curious? We've answered the most common agent questions."}
              </p>
              <Link href="#apply" className="text-[#2047FF] font-medium hover:underline">
                Have more questions? Apply and ask during onboarding
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={faq.question}
                  className="pb-4"
                  style={{ borderBottom: "1px solid var(--agent-border)" }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-lg font-medium pr-4" style={{ color: "var(--agent-text-heading)" }}>{faq.question}</span>
                    <span className={`flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-[#2047FF] to-[#7C3AED] flex items-center justify-center transition-transform duration-300 ${openIndex === index ? "rotate-45" : ""}`}>
                      <svg className="w-4 h-4 text-[var(--agent-bg-card)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                    <p className="pb-4" style={{ color: "var(--agent-text-secondary)" }}>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
