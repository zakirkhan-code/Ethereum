"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How To Create A Trading Account?",
    answer:
      "You can create a trading account by signing up on our platform and completing the verification process.",
  },
  {
    question: "How To Fund My Trading Account?",
    answer:
      "Go to the wallet section, choose your payment method, and deposit funds securely.",
  },
  {
    question: "How To Withdraw Earnings?",
    answer:
      "Navigate to withdrawals, enter your amount, and confirm the transaction.",
  },
];

export default function HelpCenterFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full border border-white/10 max-w-md shadow-[0_4px_15px_rgba(0,0,0,0.08)] p-4 rounded-lg text-white mt-10">
      
      {/* Header */}
      <h2 className="text-center text-lg font-semibold">Help Center</h2>
      <p className="text-center text-xs opacity-70 mb-4">
        hope it helps you
      </p>

      {/* FAQ List */}
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white/10 rounded-lg overflow-hidden"
          >
            {/* Question */}
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium"
            >
              <span>{faq.question}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Answer */}
            <div
              className={`px-3 text-sm text-white/80 transition-all duration-300 ${
                openIndex === index
                  ? "max-h-40 pb-3 opacity-100"
                  : "max-h-0 opacity-0"
              } overflow-hidden`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
