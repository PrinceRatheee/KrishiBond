'use client'

import React from "react"
import { motion } from "framer-motion"
import {  Zap, Lock, Eye, CheckCircle, ShieldCheck, Wallet } from "lucide-react"



const features= [
  {
    title: "Direct Access",
    description: "Farmers can sell their crops directly to consumers without middlemen.",
    icon: Zap,
    gradient: "from-purple-500 to-indigo-600",
  },
  {
    title: "Smart Contracts",
    description: "Secure payments with blockchain-based smart contracts.",
    icon: Lock,
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    title: "Transparency",
    description: "Every transaction is transparent and recorded on the blockchain ledger.",
    icon: Eye,
    gradient: "from-pink-500 to-rose-600",
  },
  {
    title: "Assured Payment to Farmers",
    description: "Payments are released to farmers upon successful delivery, ensuring no payment delays.",
    icon: CheckCircle,
    gradient: "from-green-500 to-lime-600",
  },
  {
    title: "Credibility Check and Score",
    description: "Both farmers and companies are rated based on their history, ensuring trustworthiness in transactions.",
    icon: ShieldCheck,
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    title: "Farmer Protection Funds",
    description: "A portion of each transaction is stored in a protection fund for future security and damage compensation.",
    icon: Wallet,
    gradient: "from-yellow-500 to-orange-600",
  },
]

const FeatureCard = ({ feature, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
    className={`bg-gradient-to-br ${feature.gradient} p-1 rounded-2xl shadow-lg`}
  >
    <div className="bg-gray-900 p-6 rounded-2xl h-full">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 200, damping: 10 }}
        className="flex flex-col items-center text-center"
      >
        <feature.icon className="w-12 h-12 mb-4 text-white" />
        <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
        <p className="text-gray-300 text-sm">{feature.description}</p>
      </motion.div>
    </div>
  </motion.div>
)

export default function Features() {
  return (
    <section className="py-20 px-4 bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0iIzE3MTcxNyI+PC9yZWN0Pgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxLjUiIGZpbGw9IiMzNDM0MzQiPjwvY2lyY2xlPgo8L3N2Zz4=')] opacity-10"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
            Our Features
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Discover how our platform revolutionizes the agricultural marketplace
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}