import React from "react";

const Hero = () => (
  <section className="flex flex-col items-center justify-center text-center py-32 h-[78vh]">
    <h2 className="text-5xl font-bold mb-4">
      Revolutionizing Agriculture with Blockchain
    </h2>
    <p className="text-lg text-gray-300 max-w-2xl">
      Connect directly with farmers, ensure fair prices, and enjoy transparent transactions powered by blockchain technology.
    </p>
    <div className="mt-8 space-x-4">
      <a
        href="#"
        className="px-6 py-3 bg-cyan-500 text-white rounded-lg shadow-md hover:bg-cyan-600 transition"
      >
        Explore Marketplace
      </a>
      <a
        href="#"
        className="px-6 py-3 bg-gray-800 text-gray-300 rounded-lg shadow-md hover:bg-gray-700 transition"
      >
        Learn More
      </a>
    </div>
  </section>
);

export default Hero;
