
import Hero from "../components/Hero";
import Features from "../components/Features";
import Steps from "../components/Steps";
import FAQ from "../components/FAQ";

const Home = () => (
  <div className="bg-gradient-to-r from-gray-900 via-black to-blue-900 min-h-screen text-white">
    
    <Hero />
    <Features />
    <Steps />
    <FAQ/>
    
  </div>
);

export default Home;
