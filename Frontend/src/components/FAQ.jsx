import React, { useState } from "react";

const faqData = [
  {
    question: "What is KrishiBond?",
    answer:
      "KrishiBond is a blockchain-based platform that connects farmers directly with buyers, enabling transparent, secure, and fair transactions.",
  },
  {
    question: "How do farmers get paid?",
    answer:
      "Payments are managed through smart contracts. Funds are held in escrow and released automatically after the buyer confirms delivery.",
  },
  {
    question: "Is there any fee for using KrishiBond?",
    answer:
      "KrishiBond charges a small platform maintenance fee. However, it eliminates middleman costs, ensuring farmers get fair prices.",
  },
  {
    question: "What crops can I sell on the platform?",
    answer:
      "Farmers can list all legally permitted crops. The platform also offers tools to track market demands and competitive prices.",
  },
  {
    question: "Is KrishiBond available in my region?",
    answer:
      "KrishiBond is expanding across regions. Check the marketplace for current availability in your area.",
  },
];

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`border-b border-gray-700 py-4 cursor-pointer transition-all duration-300 ${
        isOpen ? "bg-gray-800" : ""
      }`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <h3 className="text-lg font-semibold text-cyan-300 flex justify-between items-center">
        {question}
        <span className={`transform transition-transform ${isOpen ? "rotate-180" : ""}`}>
          ▼
        </span>
      </h3>
      {isOpen && <p className="mt-2 text-gray-400">{answer}</p>}
    </div>
  );
};

const FAQ = () => (
  <section className="py-16 px-6 bg-gray-900">
    <h2 className="text-4xl font-bold text-cyan-400 text-center mb-12">
      Frequently Asked Questions
    </h2>
    <div className="max-w-3xl mx-auto space-y-4">
      {faqData.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  </section>
);

export default FAQ;
