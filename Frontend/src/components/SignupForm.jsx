
import { useState } from "react"
import { useDispatch } from "react-redux"
import { AuthSignup } from "./../Redux/Auth/AuthSlice"

export default function SignupForm({ onSwitch }) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState("industry")
  const dispatch = useDispatch()

  const handleSignup = async (e) => {
    e.preventDefault()
    const resp = await dispatch(AuthSignup({ name, email, password, role }))
    console.log("signup resp", resp)
    if (resp?.payload === 201) {
      onSwitch()
    }
  }

  return (
    <div className="min-h-screen w-full pt-20 flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-black p-8">
      <div className="relative w-full">
        {/* Animated stars */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-gray-300 rounded-full"
              style={{
                width: Math.random() * 3 + 1 + "px",
                height: Math.random() * 3 + 1 + "px",
                top: Math.random() * 100 + "%",
                left: Math.random() * 100 + "%",
                animation: `twinkle ${Math.random() * 5 + 5}s linear infinite`,
              }}
            />
          ))}
        </div>

        {/* Floating planet */}
        <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-40 h-40 animate-float">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#4B5563"
              d="M47.1,-57.8C59.9,-47.4,68.5,-31.6,71.8,-14.6C75.1,2.4,73.1,20.7,64.7,35.3C56.3,49.9,41.5,60.8,25.3,66.2C9.1,71.6,-8.5,71.4,-24.1,65.4C-39.7,59.4,-53.3,47.6,-62.2,32.5C-71.1,17.4,-75.3,-1,-71.2,-17.1C-67.1,-33.2,-54.8,-47,-40.8,-57.3C-26.7,-67.6,-13.4,-74.4,1.8,-76.6C17,-78.8,34.3,-68.2,47.1,-57.8Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        <div className="bg-gray-800 bg-opacity-50 p-8 rounded-2xl shadow-xl backdrop-blur-md relative z-10 transform transition duration-500 hover:scale-105 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-100 mb-6 text-center">Join the Journey</h2>
          <form onSubmit={handleSignup} className="space-y-6">
            <div>
              <label className="block text-gray-300 text-sm mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="w-full px-4 py-3 bg-gray-700 bg-opacity-50 text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
                type="text"
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-gray-300 text-sm mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="w-full px-4 py-3 bg-gray-700 bg-opacity-50 text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-gray-300 text-sm mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="w-full px-4 py-3 bg-gray-700 bg-opacity-50 text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-gray-300 text-sm mb-2" htmlFor="role">
                Select Role
              </label>
              <select
                id="role"
                className="w-full px-4 py-3 bg-gray-700 bg-opacity-50 text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="industry">Industry</option>
                <option value="farmer">Farmer</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-gray-700 to-blue-800 text-gray-100 py-3 rounded-lg font-semibold text-lg hover:from-gray-800 hover:to-blue-900 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign Up
            </button>
          </form>
          <p className="mt-6 text-gray-400 text-center">
            Already have an account?{" "}
            <button onClick={onSwitch} className="text-blue-300 hover:underline focus:outline-none">
              Log in here
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}