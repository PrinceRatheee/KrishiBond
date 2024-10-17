"use client"

import { useState } from "react"
import { useDispatch } from "react-redux"
import { AuthLogin } from "./../Redux/Auth/AuthSlice"
import { useNavigate } from "react-router-dom"
import { updateFarmer } from "../Redux/Farmer/FarmerSlice"
import { updateCompany } from "../Redux/Company/CompanySlice"

export default function LoginForm({ onSwitch }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    const resp = await dispatch(AuthLogin({ email, password }))
    console.log(" resp", resp)

    if (resp?.payload?.data?.sendUser?.role === "industry") {
      navigate("/detail")
      dispatch(updateCompany(resp.payload.data))
    } else if (resp?.payload?.data?.sendUser?.role === "farmer") {
      navigate("/detail")
      dispatch(updateFarmer(resp.payload.data))
    }
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-black p-4">
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

        {/* Floating astronaut */}
        <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-40 h-40 animate-float">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#4B5563"
              d="M69.5,-23.3C77.5,0.7,63.5,33.3,40.8,49.7C18.2,66.1,-13.1,66.4,-36.9,51.5C-60.7,36.6,-77,6.4,-70.2,-19.4C-63.5,-45.2,-33.7,-66.6,-3.6,-65.7C26.5,-64.8,61.5,-47.3,69.5,-23.3Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        <div className="bg-gray-800 bg-opacity-50 p-8 rounded-2xl shadow-xl backdrop-blur-md relative z-10 transform transition duration-500 hover:scale-105 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-100 mb-6 text-center">Welcome Back</h2>
          <form onSubmit={handleLogin} className="space-y-6">
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
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-gray-700 to-blue-800 text-gray-100 py-3 rounded-lg font-semibold text-lg hover:from-gray-800 hover:to-blue-900 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Login
            </button>
          </form>
          <p className="mt-6 text-gray-400 text-center">
            Don't have an account?{" "}
            <button onClick={onSwitch} className="text-blue-300 hover:underline focus:outline-none">
              Sign up here
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}