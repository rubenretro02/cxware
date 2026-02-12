"use client";

import { useState } from "react";
import Link from "next/link";

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
    <section id="faq" className="py-24" style={{ background: 'var(--bg-white)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <h2 className="text-4xl md:text-5xl font-bold text-[#FFFFFF] mb-4">
              Frequently Asked
              <br />
              Questions
            </h2>
            <p className="text-lg text-[#8B92A5] mb-6">
              Still curious? We&apos;ve answered the most common agent questions.
            </p>
            <Link href="#apply" className="text-[#C873E5] font-medium hover:underline">
              Have more questions? Apply and ask during onboarding
            </Link>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className="border-b border-white/10 pb-4"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between py-4 text-left"
                >
                  <span className="text-lg font-medium text-[#FFFFFF] pr-4">{faq.question}</span>
                  <span className={`flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-[#2047FF] to-[#C873E5] flex items-center justify-center transition-transform ${openIndex === index ? 'rotate-45' : ''}`}>
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-[#8B92A5] pb-4">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
