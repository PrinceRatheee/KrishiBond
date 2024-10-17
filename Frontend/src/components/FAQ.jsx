'use client'

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

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
]

const FAQItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      className="mb-4 last:mb-0"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div
        className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 rounded-lg overflow-hidden shadow-lg"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <motion.button
          className="w-full py-6 px-6 flex justify-between items-center text-left focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.h3 
            className="text-xl font-semibold text-cyan-300"
            layout
          >
            {question}
          </motion.h3>
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-cyan-300 flex-shrink-0 ml-4"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </motion.div>
        </motion.button>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="content"
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { opacity: 1, height: "auto" },
                collapsed: { opacity: 0, height: 0 }
              }}
              transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
            >
              <motion.div 
                className="px-6 pb-6"
                variants={{ collapsed: { y: -10 }, open: { y: 0 } }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-gray-300 leading-relaxed">{answer}</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}

export default function FAQ() {
  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
            Frequently Asked Questions
          </span>
        </h2>
        <motion.div 
          className="space-y-6"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          initial="hidden"
          animate="show"
        >
          {faqData.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} index={index} />
          ))}
        </motion.div>
      </motion.div>
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <p className="text-gray-400 mb-4">Still have questions?</p>
        <motion.button
          className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-3 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Support
        </motion.button>
      </motion.div>
    </section>
  )
}