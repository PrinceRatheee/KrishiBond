import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Steps from "../components/Steps";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";

const Home = () => (
  <div className="bg-gradient-to-r from-gray-900 via-black to-blue-900 min-h-screen text-white">
    <Header />
    <Hero />
    <Features />
    <Steps />
    <FAQ/>
    <Footer />
  </div>
);

export default Home;
