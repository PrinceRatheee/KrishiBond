
import { useState } from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { CompanyDetail, updateCompany } from "../Redux/Company/CompanySlice"

export default function CompanyDetails() {
  const Company = useSelector((state) => state.company.Company)
  const [contact, setContact] = useState("")
  const [address, setAddress] = useState("")
  const [gst, setGst] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = {
      name: Company?.sendUser?.name,
      email: Company?.sendUser?.email,
      contact,
      address,
      GSTNumber: gst,
    }
    const resp = await dispatch(CompanyDetail(data))
    console.log("resp on submit", resp.payload.data.success)
    if (resp.payload.data.success) {
      console.log('company update')
      dispatch(updateCompany(data))
      navigate("/")
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

        {/* Floating company icon */}
        {/* <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-40 h-40 animate-float">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 21H21" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5 21V7L13 3V21" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M19 21V11L13 7" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 9V9.01" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 13V13.01" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 17V17.01" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div> */}

        <div className="bg-gray-800 bg-opacity-50 p-8 rounded-2xl shadow-xl backdrop-blur-md relative z-10 transform transition duration-500 hover:scale-105 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-100 mb-6 text-center">Company Details</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
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
              <label className="block text-gray-300 text-sm mb-2" htmlFor="gst">
                GSTIN
              </label>
              <input
                className="w-full px-4 py-3 bg-gray-700 bg-opacity-50 text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
                type="text"
                id="gst"
                placeholder="Enter your GSTIN"
                value={gst}
                onChange={(e) => setGst(e.target.value)}
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