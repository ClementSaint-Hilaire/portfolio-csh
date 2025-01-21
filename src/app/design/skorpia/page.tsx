"use client";

import { BentoCard, BentoGrid } from "@/components/magicui/bento-case";
import { useState } from "react";

const features = [
  { link: "/design/case/skorpia/1.png", id: 1, isFullWidth: true },
  { link: "/design/case/skorpia/2.png", id: 2, isFullWidth: false },
  { link: "/design/case/skorpia/2.png", id: 3, isFullWidth: false },
];

const FAQAccordion = () => {
  const [openSection, setOpenSection] = useState<number | null>(null); // Typage explicite de l'état

  const toggleSection = (section: number) => {
    setOpenSection(openSection === section ? null : section);
  };

  const faqs = [
    {
      id: 1,
      question: "What is Skorpia?",
      answer: `Skorpia offers web, gaming, and dedicated server rentals tailored for different use cases.`,
    },
    {
      id: 2,
      question: "How can I contact support?",
      answer: `You can contact support via the help section on our website or by emailing support@skorpia.fr.`,
    },
    {
      id: 3,
      question: "What payment methods are accepted?",
      answer: `We accept credit cards, PayPal, and other payment methods depending on your region.`,
    },
  ];

  return (
    <div className="w-full">
      {faqs.map((faq) => (
        <div key={faq.id} className="border-b border-gray-200 dark:border-gray-700">
          <button
            onClick={() => toggleSection(faq.id)}
            className={`flex items-center justify-between w-full py-5 font-medium text-left ${
              openSection === faq.id
                ? "text-gray-900 dark:text-white"
                : "text-gray-500 dark:text-gray-400"
            }`}
          >
            <span>{faq.question}</span>
            <svg
              className={`w-3 h-3 transform ${
                openSection === faq.id ? "rotate-180" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
          <div
            className={`overflow-hidden transition-[max-height] duration-300 ${
              openSection === faq.id ? "max-h-screen" : "max-h-0"
            }`}
          >
            <div className="py-5 text-gray-500 dark:text-gray-400">
              <p>{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default function Page() {
  return (
    <div className="flex flex-col md:flex-row w-full max-w-[1400px] mx-auto gap-[32px] py-[50px] md:pt-0">
      <div className="flex flex-col w-1/3">
        <FAQAccordion />
      </div>
      <div className="flex flex-col w-full md:w-2/3">
        <BentoGrid>
          {features.map((feature) => (
            <BentoCard key={feature.id} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
}