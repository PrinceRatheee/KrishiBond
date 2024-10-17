
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-gray-100">
      <div className="text-center">
        <motion.h1
          className="text-9xl font-extrabold tracking-widest text-gray-300"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          404
        </motion.h1>
        <motion.div
          className="bg-blue-500 px-2 text-sm rounded rotate-12 absolute"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Page Not Found
        </motion.div>
        <motion.div
          className="text-xl font-mono tracking-wide mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          Oops! The page you're looking for doesn't exist.
        </motion.div>
        <motion.button
          className="mt-8"
          onClick={() => navigate("/")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <span className="relative inline-block text-sm font-medium text-blue-300 group focus:outline-none focus:ring">
            <span className="absolute inset-0 transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-blue-700 group-hover:translate-x-0 group-hover:translate-y-0"></span>
            <span className="relative block px-8 py-3 bg-gray-900 border border-current">
              Go Back Home
            </span>
          </span>
        </motion.button>
      </div>
    </div>
  )
}