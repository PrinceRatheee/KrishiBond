'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp, Crop, TrendingUp, FileText, Truck, DollarSign, AlertTriangle, Cloud, Brain, Briefcase } from 'lucide-react'

export default function Component() {
  const [expandedStep, setExpandedStep] = useState(null)

  const steps = [
    { 
      title: "Farmer Registration", 
      description: "Farmers register and login to the platform",
      icon: <Crop className="w-8 h-8 text-blue-300" />,
      details: "Our secure registration process ensures that only verified farmers can participate. We collect essential information to tailor the experience and match farmers with relevant opportunities."
    },
    { 
      title: "Bid for Demands", 
      description: "Farmers can bid for industry demands",
      icon: <TrendingUp className="w-8 h-8 text-green-300" />,
      details: "Our advanced bidding system allows farmers to compete fairly for industry demands. Real-time market data and predictive analytics help farmers make informed decisions."
    },
    { 
      title: "Smart Contract Creation", 
      description: "Smart contracts are created between farmers and industry",
      icon: <FileText className="w-8 h-8 text-yellow-300" />,
      details: "Blockchain-based smart contracts ensure transparency and trust. These contracts automatically execute when predefined conditions are met, protecting both farmers and industry partners."
    },
    { 
      title: "Delivery Options", 
      description: "Various delivery options are provided",
      icon: <Truck className="w-8 h-8 text-red-300" />,
      details: "We offer flexible delivery options to suit different needs. From farm-gate pickup to centralized collection points, we ensure efficient and timely delivery of produce."
    },
    { 
      title: "Payment Process", 
      description: "Payments are released to farmers with protection funds",
      icon: <DollarSign className="w-8 h-8 text-purple-300" />,
      details: "Our secure payment system ensures timely and fair compensation. A portion of each transaction is allocated to a protection fund, providing financial security for farmers."
    },
    { 
      title: "Issue Handling", 
      description: "System manages delivery issues and cancellations",
      icon: <AlertTriangle className="w-8 h-8 text-orange-300" />,
      details: "Our robust issue resolution system handles disputes, cancellations, and delivery problems efficiently. We aim for fair outcomes that maintain trust in the platform."
    },
    { 
      title: "Climate Conditions", 
      description: "Climate conditions are factored into the process",
      icon: <Cloud className="w-8 h-8 text-cyan-300" />,
      details: "We integrate real-time climate data and long-term forecasts to help manage risks. This information is used in contract terms and to provide early warnings to farmers."
    },
    { 
      title: "ML Model Integration", 
      description: "Machine Learning models scan and validate data",
      icon: <Brain className="w-8 h-8 text-indigo-300" />,
      details: "Our advanced ML models analyze vast amounts of data to detect patterns, predict yields, and identify potential issues before they become problems."
    },
    { 
      title: "Government Oversight", 
      description: "Government officials approve inspections and manage compensation",
      icon: <Briefcase className="w-8 h-8 text-pink-300" />,
      details: "We work closely with government agencies to ensure compliance with regulations. Official oversight provides an additional layer of trust and security for all participants."
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 50
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black p-8">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-5xl mx-auto"
      >
        <motion.h1 
          className="text-5xl font-bold text-center text-blue-200 mb-12"
          variants={itemVariants}
        >
          Agricultural Supply Chain Platform
        </motion.h1>
        
        {steps.map((step, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className={`flex items-center mb-16 ${index % 2 === 0 ? 'flex-row item-left text-left justify-start' : 'flex-row-reverse item-left text-left justify-end'}`}
          >
            <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
              <div className="flex items-center mb-2 justify-end">
                {index % 2 === 0 && step.icon}
                <h2 className="text-2xl font-bold text-blue-300 mx-2">{step.title}</h2>
                {index % 2 !== 0 && step.icon}
              </div>
              <p className="text-gray-400 mb-2">{step.description}</p>
              <button
                onClick={() => setExpandedStep(expandedStep === index ? null : index)}
                className="text-blue-400 hover:text-blue-300 transition-colors duration-200 flex items-center"
              >
                {expandedStep === index ? (
                  <>
                    <span className="mr-1">Less</span>
                    <ChevronUp className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    <span className="mr-1">More</span>
                    <ChevronDown className="w-4 h-4" />
                  </>
                )}
              </button>
              <AnimatePresence>
                {expandedStep === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-500 mt-2"
                  >
                    {step.details}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
              {index + 1}
            </div>
            <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}>
              <div className="h-2 bg-blue-600 rounded-full"></div>
            </div>
          </motion.div>
        ))}

        <motion.button
          className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 mx-auto block text-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          variants={itemVariants}
        >
          Get Started
        </motion.button>
      </motion.div>
    </div>
  )
}