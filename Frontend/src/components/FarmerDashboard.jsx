

import React, { Suspense, useState } from "react"
import { useSelector } from "react-redux"
import { Toaster } from "react-hot-toast"
import { RxCross1, RxHamburgerMenu } from "react-icons/rx"
import { IoChatboxOutline, IoLogOutOutline } from "react-icons/io5"
import { FaUser } from "react-icons/fa"
import FarmerProfile from "./FarmerProfile"
import IndustryProfile from "./IndustryProfile"
import Loading from "./Loading"
import Messages from "./Messages"

export default function FarmerDashboard() {
  const [showNavbar, setShowNavbar] = useState(true)
  const [activeView, setActiveView] = useState("profile")
  const role = useSelector((state) => state.auth.role)
  const user = useSelector((state) => state.auth.user)
  const imgUrl = useSelector((state) => state.auth.profileImage)

  const navbarOptions = [
    { name: "Profile", view: "profile", icon: <FaUser className="w-5 h-5" /> },
    { name: "Messages", view: "chat", icon: <IoChatboxOutline className="w-5 h-5" /> },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-gray-100">
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar */}
        <aside
          className={`w-full lg:w-64 bg-gray-800 bg-opacity-50 backdrop-blur-md transform transition-transform duration-300 ease-in-out ${
            showNavbar ? "translate-x-0" : "-translate-x-full"
          } lg:relative lg:translate-x-0 fixed inset-y-0 left-0 z-30 overflow-y-auto`}
        >
          <div className="flex flex-col h-full px-4 py-8">
            <div className="flex flex-col items-center mb-8">
              <img
                src={imgUrl || "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAPFBMVEXk5ueutLepsLPo6uursbXJzc/p6+zj5ea2u76orrKvtbi0ubzZ3N3O0dPAxcfg4uPMz9HU19i8wcPDx8qKXtGiAAAFTElEQVR4nO2d3XqzIAyAhUD916L3f6+f1m7tVvtNINFg8x5tZ32fQAIoMcsEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQTghAJD1jWtnXJPP/54IgNzZQulSmxvTH6oYXX4WS+ivhTbqBa1r26cvCdCu6i0YXbdZ0o4A1rzV+5IcE3YE+z58T45lqo7g1Aa/JY5tgoqQF3qb382x7lNzBLcxft+O17QUYfQI4IIeklKsPSN4i6LKj/7Zm8n99RbHJpEw9gEBXNBpKIYLJqKYRwjOikf//r+J8ZsVuacbqCMNleI9TqGLGqMzhnVdBOdd6F/RlrFijiCoVMk320CBIahUxTWI0KKEcJqKbMdpdJb5QvdHq6wCI5qhKlgGMS/RBHkubWDAE+QZxB4xhCyDiDkLZxgGEVdQldzSKbTIhmZkFkSEPcVvmBn2SMuZB9od7fQDsMiDdKJjFUSCQarM5WirZ3C2TT/htYnyPcPfgrFHWz0BI74gr6J/IZiGUxAZGQLqmvQLTrtE/Go4YxhVRIpEw+sww1IIcqr5NKmUUzLF3d4/qPkYIp2T/obPuemlojFUR4t9Q2Vojhb7BmgElWHzLPH8hucfpefPNFTVgs9h1AdU/Pin96vwWbWdf+X9Absn3OdO34aMdsDnP8WgKYisTqI6CkNGqZQo1XA6Ef6AU32SJzOcBukHPF07/xNSgmHKa5BOhtezv6mA/rYJpwXNAnbRZ1XuF3BzDcO3vpA3+ny2909gbqE4hhD3LIPhLLyBNhPZvbZ3B+3tPYa18A7auSlXQayKwTPNLKDcuOB0xPYKDPFTkWsevQPRZ1J8Hji9I1KQ34r7hZhrwNwOZ97QxNx0drwn4QI0wQk1DcEsfKCWKdxVvxPSNUIp/knmAXT+nT+Ko3+0H96rcNb3m1fx7MBTJdeBJ7uFcWsc0wvgAsC4pROW0l2inbAmIBv/7GZmuhQH6API2rr8T0e6yuZJ+80A9LZeG62T3tik31XwxtwZcizKuTHkMjB1WdZde4Kmic/A5ZI3rr1ae21d08PlVHYfAaxw9G9CYRbJ+8ZdbTcMRV1XM3VdF0M32vtoTdZ0+u29s0OttJ5bz64UwinjaFMVY9vkqc3KKSxN21Xl+0L4Q3Vuv1tYl0pqnX6ms4XetFz7gdZVAgUEoJntfOUe4ZwsHd9FzqQ3Vv6xe41l0XJcqcKl6TZvlv7ClAW3BsqQW4X7ypApB8dmTgK4IX5wvqIVj33HtD2qSG4BqznxdIefL27Y4sahi0MdIdvUsDva8agGGbCtITmCY31MHD2O0uIdh/0rJDQ1VX5Zdxz3rR2QDbv6qXl9vudzqQtGm1Jv9LDXOsfvvB7VcZ8PDKD0mQ1VHPYQ9O+Yj4hR1IUD8rBnn3ho2m8oQMxbCFiKlL2ioSW5heeJqegED52CzxCtcGD3Kv8Wms9EYLyUhwaFIhSMBClevWEmiK/Iaogu4H7sg6ppQhQG8RUqivuTGOAJOg6FfgW0q0M0PQMRMEgXaeNf3SYDZ8PIMI0+wHgr/MgN7wYwpiLjCCqM6ydUDZLQiB6nDdNC8SDyig3jPPpFXGcC9O8BUBDVmgBY59E7Md/35Loe/UVEECEJwYggJjELZ4J71SaQSBeC02n4Da29CayJNA28SAhd2CQyC1Xw6pSmGSINQVuMhAZp4DClan9MgmkDDNmezqwS8sgtlXK/EPBhoaSmYVC/F7IO1jQEdHOlabpKh3+jzLQSTUiq4X2I+Ip/zU8rlaqAvkS21ElR+gqu3zbjjL+hIAiCIAiCIAiCIAiCsCf/AKrfVhSbvA+DAAAAAElFTkSuQmCC"}
                alt={user?.name || "User"}
                className="w-24 h-24 rounded-full border-4 border-blue-500 shadow-lg mb-4"
              />
              <h2 className="text-xl font-bold">{user?.name || "User Name"}</h2>
              <button
                className="mt-2 px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
                onClick={() => setActiveView("profile")}
              >
                Edit Profile
              </button>
            </div>
            <nav className="flex-1">
              <ul className="space-y-2">
                {navbarOptions.map((item, index) => (
                  <li key={index}>
                    <button
                      className={`w-full flex items-center px-4 py-2 rounded-md transition-colors ${
                        activeView === item.view
                          ? "bg-blue-700 text-white"
                          : "text-gray-300 hover:bg-gray-700"
                      }`}
                      onClick={() => setActiveView(item.view)}
                    >
                      {item.icon}
                      <span className="ml-3">{item.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
            <button className="flex items-center px-4 py-2 mt-auto text-gray-300 hover:bg-gray-700 rounded-md transition-colors">
              <IoLogOutOutline className="w-5 h-5 mr-3" />
              <span>Logout</span>
            </button>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-6">
          <div className="lg:hidden mb-4">
            <button
              className="p-2 rounded-md bg-gray-800 text-gray-200"
              onClick={() => setShowNavbar(!showNavbar)}
            >
              {showNavbar ? <RxCross1 size={24} /> : <RxHamburgerMenu size={24} />}
            </button>
          </div>
          <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg shadow-xl p-6">
            <Suspense fallback={<Loading />}>
              {activeView === "profile" && <FarmerProfile />}
              {activeView === "chat" && <Messages />}
            </Suspense>
          </div>
        </main>
      </div>
      <Toaster />
    </div>
  )
}