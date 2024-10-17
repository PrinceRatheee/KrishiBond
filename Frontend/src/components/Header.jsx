'use client'

import { useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';  // Import Link
import { useDispatch } from 'react-redux';
import { logout } from "../Redux/Auth/AuthSlice";
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Leaf } from 'lucide-react';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleLogin = () => {
    navigate('/auth')
  }

  const handleLogout = () => {
    console.log('logout hit')
    dispatch(logout())
  }

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Marketplace', href: '/marketplace' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <motion.header 
      className="py-3 px-6 flex justify-between items-center bg-gradient-to-r from-gray-900 via-blue-900 to-black text-gray-200 shadow-md"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div 
        className="flex items-center space-x-2"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        <Leaf className="w-6 h-6 text-blue-400" />
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-gray-300">
          Krishi Bond
        </h1>
      </motion.div>
      <nav className="flex items-center space-x-4">
        {navItems.map((item, index) => (
          <motion.div
            key={item.name}
            className="text-sm relative py-1"
            onHoverStart={() => setHoveredItem(index)}
            onHoverEnd={() => setHoveredItem(null)}
          >
            <Link to={item.href} className="text-gray-200">
              {item.name}
            </Link>
            {hoveredItem === index && (
              <motion.span
                className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400"
                layoutId="underline"
              />
            )}
          </motion.div>
        ))}
        {isLoggedIn ? (
          <motion.button
            className="text-sm bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded-md transition-colors duration-300"
            onClick={handleLogout}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Logout
          </motion.button>
        ) : (
          <motion.button
            className="text-sm bg-blue-700 hover:bg-blue-600 px-3 py-1 rounded-md transition-colors duration-300"
            onClick={handleLogin}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Login
          </motion.button>
        )}
      </nav>
    </motion.header>
  )
}

export default Header;
