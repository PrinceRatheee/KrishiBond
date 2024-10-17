import React from "react";

const steps = [
  {
    title: "Register on the Platform",
    description: "Farmers create an account by providing their details and verifying identity.",
  },
  {
    title: "Upload Crop Information",
    description: "Farmers list their available crops with quantity, price, and delivery options.",
  },
  {
    title: "Receive Buyer Orders",
    description: "View and accept orders placed by buyers directly through the platform.",
  },
  {
    title: "Secure Payment via Smart Contracts",
    description: "Payment is held in escrow and released after successful delivery confirmation.",
  },
  {
    title: "Deliver the Crop",
    description: "Coordinate delivery with the buyer using platform-provided tracking options.",
  },
  {
    title: "Get Paid Instantly",
    description: "Receive payment directly to your wallet once the transaction is completed.",
  },
];

const Steps = () => (
  <section className="py-16 px-6 bg-gray-900">
    <h2 className="text-4xl font-bold text-cyan-400 text-center mb-12">
      How to Use the Platform
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {steps.map((step, index) => (
        <div
          key={index}
          className="bg-gray-800 p-6 rounded-lg shadow-md hover:scale-105 transition-transform"
        >
          <h3 className="text-xl font-semibold text-cyan-300 mb-2">
            {index + 1}. {step.title}
          </h3>
          <p className="text-gray-300">{step.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Steps;
