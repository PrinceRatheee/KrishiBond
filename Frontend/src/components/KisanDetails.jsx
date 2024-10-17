

import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { FarmerDetail, updateFarmer } from '../Redux/Farmer/FarmerSlice'
import axiosinstance from './../Helper/axiosinstance'

export default function KisanDetails() {
  const Name = useSelector((state) => state?.auth?.data?.name)
  const Email = useSelector((state) => state.auth?.data?.email)

  const [name, setName] = useState(Name)
  const [email, setEmail] = useState(Email)
  const [contact, setContact] = useState('')
  const [address, setAddress] = useState('')
  const [farmSize, setFarmSize] = useState(0)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = { name, email, contact, address, farmSize }
    const resp = dispatch(FarmerDetail(data))
    console.log('resp on submit', resp)
    dispatch(updateFarmer(data))
    navigate('/')
  }

  const handleFarmSize = (e) => {
    setFarmSize(parseFloat(e.target.value))
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-black pt-4  p-8">
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

        

        <div className="bg-gray-800 bg-opacity-50 p-8 rounded-2xl shadow-xl backdrop-blur-md relative z-10 transform transition duration-500 hover:scale-105 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-100 mb-6 text-center">Farm Details</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
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
              />
            </div>
            <div>
              <label className="block text-gray-300 text-sm mb-2" htmlFor="contact">
                Contact
              </label>
              <input
                className="w-full px-4 py-3 bg-gray-700 bg-opacity-50 text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
                type="text"
                id="contact"
                placeholder="Enter your contact details"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-gray-300 text-sm mb-2" htmlFor="address">
                Address
              </label>
              <input
                className="w-full px-4 py-3 bg-gray-700 bg-opacity-50 text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
                type="text"
                id="address"
                placeholder="Enter your address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-gray-300 text-sm mb-2" htmlFor="farmSize">
                Farm Size (acres)
              </label>
              <input
                className="w-full px-4 py-3 bg-gray-700 bg-opacity-50 text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
                type="number"
                id="farmSize"
                placeholder="Enter your farm size"
                value={farmSize}
                onChange={handleFarmSize}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-gray-700 to-blue-800 text-gray-100 py-3 rounded-lg font-semibold text-lg hover:from-gray-800 hover:to-blue-900 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Submit Details
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}