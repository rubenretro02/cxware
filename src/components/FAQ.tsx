"use client";

import { useState } from "react";
import Link from "next/link";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What services does CXware provide?",
      answer: "We offer professional customer support solutions across industries, including retail, healthcare, insurance, tax, and more—customized to meet your business needs.",
    },
    {
      question: "How does CXware ensure quality in customer interactions?",
      answer: "Our agents go through thorough training, are closely monitored, and follow your brand guidelines to deliver consistent, high-quality support.",
    },
    {
      question: "Can CXware handle support for my specific industry?",
      answer: "Yes! We work with businesses across multiple sectors and tailor our solutions to align with your unique industry requirements.",
    },
    {
      question: "Is your support available 24/7?",
      answer: "Absolutely. We provide round-the-clock customer support to ensure your customers are always taken care of—no matter the time zone.",
    },
    {
      question: "How do I get started with CXware?",
      answer: "Getting started is easy! Contact us through our website or schedule a consultation, and we'll design a support solution just for your business.",
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
              Still curious? We&apos;ve answered the most common business questions.
            </p>
            <Link href="#contact" className="text-[#C873E5] font-medium hover:underline">
              Have more questions? Contact us
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
