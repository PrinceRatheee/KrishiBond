
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";

const Footer = () => (
  <footer className="bg-black bg-opacity-90 py-12">
    <div className="container mx-auto  text-center text-white">
      <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
      <p className="text-gray-400">Connect with us on social media</p>
      <div className="flex justify-center space-x-8 mt-6">
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" className="text-cyan-400 hover:text-cyan-300 transition" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faTwitter} size="2x" className="text-cyan-400 hover:text-cyan-300 transition" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faFacebook} size="2x" className="text-cyan-400 hover:text-cyan-300 transition" />
        </a>
      </div>
      <p className="text-gray-500 mt-6">
        © 2024 AgriChain. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
