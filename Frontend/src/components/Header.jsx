import React from "react";

const Header = () => (
  <header className="p-6 flex justify-between items-center bg-black bg-opacity-70 shadow-lg">
    <h1 className="text-4xl font-extrabold text-cyan-400">Kisan Bond</h1>
    <nav className="space-x-6">
      <a href="#" className="text-lg hover:text-cyan-300 transition">Home</a>
      <a href="#" className="text-lg hover:text-cyan-300 transition">About</a>
      <a href="#" className="text-lg hover:text-cyan-300 transition">Marketplace</a>
      <a href="#" className="text-lg hover:text-cyan-300 transition">Contact</a>
    </nav>
  </header>
);

export default Header;
