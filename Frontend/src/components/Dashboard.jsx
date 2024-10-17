import React, { Suspense, useState } from "react";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { IoChatboxOutline } from "react-icons/io5"; // Correcting to use IoChatboxOutline icon
import FarmerProfile from "./FarmerProfile";
import IndustryProfile from "./IndustryProfile";
import { useSelector } from "react-redux";
import { IoLogOutOutline } from "react-icons/io5";
import { Toaster } from "react-hot-toast";
import Loading from "./Loading";
import Messages from "./Messages";
import { FaUser } from "react-icons/fa"; // Importing the user icon


function Dashboard() {
  const [ShowNavbar, setShowNavbar] = useState(true);
  const [activeView, setActiveView] = useState("profile"); // State to track the current view
  const role = useSelector((state) => state.auth.role);
  const user = useSelector((state) => state.auth.user); // Assuming user information is in the Redux state
  const ImgUrl = useSelector((state) => state.auth.profileImage); // Assuming there's a profile image in state
  
  const navabarOption = [
    { name: "Profile", view: "profile", icon: <FaUser /> }, // Profile icon
    { name: "Messages", view: "chat", icon: <IoChatboxOutline /> }, // Messages icon
  ]; // Modify nav options to control view

  return (
    <>
      {true && (
        <div className="min-h-fit flex  px-[14px] max-lg:flex-col max-lg:px-0 relative">
          <div className="">
            {ShowNavbar ? (
              <RxHamburgerMenu
                size={30}
                className={`lg:hidden ml-3 z-30 absolute cursor-pointer top-3`}
                onClick={() => setShowNavbar(!ShowNavbar)}
              />
            ) : (
              <RxCross1
                size={30}
                className={`ml-3 lg:hidden z-30 absolute cursor-pointer top-3`}
                onClick={() => setShowNavbar(!ShowNavbar)}
              />
            )}
          </div>
          <div
            className={`leftside w-[20%] min-h-screen bg-[#cdf5fd] flex flex-col items-center justify-between rounded-lg py-10 max-lg:w-1/2 top-18 ${
              ShowNavbar ? "max-lg:hidden" : "max-lg:absolute z-20"
            }`}
          >
            <div className="profile_section flex flex-col gap-16 justify-center items-center max-lg:gap-4">
              <div className="flex flex-col justify-center items-center gap-3 min-h-52 ">
                <img
                  src={ImgUrl}
                  alt={user?.name}
                  width={100}
                  height={100}
                  className="cursor-pointer rounded-full aspect-square bg-gray-300"
                />
                <button className="px-5 bg-[#ffffff99] rounded-lg" onClick={() => setActiveView("profile")}>
                  Edit
                </button>
              </div>
              <div className="w-full">
                <ul className="w-full flex flex-col gap-5">
                  {navabarOption &&
                    navabarOption.map((item, key) => (
                      <button
                        key={key}
                        className={`${
                          activeView === item.view ? "bg-[#ffffff99]" : ""
                        } px-2 py-2 flex items-center hover:bg-white gap-2 rounded-lg transition-all`}
                        onClick={() => setActiveView(item.view)} // Update active view on click
                      >
                        {item.icon}
                        <span className="font-semibold capitalize">{item.name}</span>
                      </button>
                    ))}
                </ul>
              </div>
            </div>
            <button className="flex gap-2 mt-10">
              <IoLogOutOutline size={35} />
              <span className="capitalize font-bold text-2xl">logout</span>
            </button>
          </div>

          {/* Main content area */}
          <Suspense fallback={<Loading />}>
            <div className="rightside w-full min-h-screen bg-[#cdf5fd80] max-lg:p-3">
              {activeView === "profile" && <FarmerProfile />}
              {activeView === "chat" && <Messages />}
              {/* Add more views as needed */}
            </div>
          </Suspense>
          <Toaster />
        </div>
      )}
    </>
  );
}

export default Dashboard;
