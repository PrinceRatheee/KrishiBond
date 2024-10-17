import React from "react";

const features = [
  {
    title: "Direct Access",
    description: "Farmers can sell their crops directly to consumers without middlemen.",
  },
  {
    title: "Smart Contracts",
    description: "Secure payments with blockchain-based smart contracts.",
  },
  {
    title: "Transparency",
    description: "Every transaction is transparent and recorded on the blockchain ledger.",
  },
];

const Features = () => (
  <section className="py-16 px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
    {features.map((feature, index) => (
      <div
        key={index}
        className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
      >
        <h3 className="text-2xl font-semibold text-cyan-400 mb-4">
          {feature.title}
        </h3>
        <p className="text-gray-300">{feature.description}</p>
      </div>
    ))}
  </section>
);

export default Features;
