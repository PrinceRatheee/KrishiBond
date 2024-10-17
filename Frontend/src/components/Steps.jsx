'use client'

import React from "react"
import { motion } from "framer-motion"

const steps = [
  {
    title: "Register on the Platform",
    description: "Farmers create an account by providing their details and verifying identity.",
    icon: "👤",
  },
  {
    title: "Upload Crop Information",
    description: "Farmers list their available crops with quantity, price, and delivery options.",
    icon: "🌾",
  },
  {
    title: "Receive Buyer Orders",
    description: "View and accept orders placed by buyers directly through the platform.",
    icon: "📦",
  },
  {
    title: "Secure Payment via Smart Contracts",
    description: "Payment is held in escrow and released after successful delivery confirmation.",
    icon: "🔒",
  },
  {
    title: "Deliver the Crop",
    description: "Coordinate delivery with the buyer using platform-provided tracking options.",
    icon: "🚚",
  },
  {
    title: "Get Paid Instantly",
    description: "Receive payment directly to your wallet once the transaction is completed.",
    icon: "💰",
  },
]

const StepCard = ({ step, index }) => {
  const isEven = index % 2 === 0
  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={`flex items-center ${isEven ? "justify-end" : "justify-start"} mb-16`}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        className={`w-full md:w-2/3 bg-gray-800 p-6 rounded-lg shadow-lg ${
          isEven ? "md:mr-12" : "md:ml-12"
        }`}
      >
        <div className="flex items-center mb-4">
          <div className="text-4xl mr-4">{step.icon}</div>
          <h3 className="text-2xl font-bold text-cyan-300">
            {index + 1}. {step.title}
          </h3>
        </div>
        <p className="text-gray-300">{step.description}</p>
      </motion.div>
    </motion.div>
  )
}

const ConnectingLine = () => (
  <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-cyan-500 transform -translate-x-1/2 hidden md:block" />
)

export default function Steps() {
  return (
    <section className="py-20 px-4 bg-gray-900 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
          How to Use the Platform
        </h2>
        <p className="text-xl text-gray-300">Follow these simple steps to get started</p>
      </motion.div>

      <div className="max-w-5xl mx-auto relative">
        <ConnectingLine />
        {steps.map((step, index) => (
          <StepCard key={index} step={step} index={index} />
        ))}
      </div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: steps.length * 0.2 }}
        className="text-center mt-12"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg"
        >
          Get Started Now
        </motion.button>
      </motion.div>
    </section>
  )
}