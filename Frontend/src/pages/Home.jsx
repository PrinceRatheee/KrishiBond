import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Footer from "../components/Footer";

const Home = () => (
  <div className="bg-gradient-to-r from-gray-900 via-black to-blue-900 min-h-screen text-white">
    <Header />
    <Hero />
    <Features />
    <Footer />
  </div>
);

export default Home;
