import React, { useEffect, useState } from "react";
import DemandCard from "../components/DemandCard";
import axios from "axios";
import axiosinstance from "../Helper/axiosinstance";

const AllDemands = () => {
  const [demands, setDemands] = useState([]);

  // Fetch company demands from the backend
  useEffect(() => {
    const fetchDemands = async () => {
      try {
        const response = await axiosinstance.get("/api/companydemand/get");
        setDemands(response.data);
        console.log("Demands:", response.data);
      } catch (error) {
        console.error("Error fetching demands:", error);
      }
    };

    fetchDemands();
  }, []);

  return (
    <div className="bg-gradient-to-r from-gray-900 via-black to-blue-900 min-h-screen text-white py-16 px-8 flex-col">
      <h2 className="text-4xl font-bold text-cyan-400 text-center mb-12">
       Bid Now and Earn More !!
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {demands.length > 0 ? (
          demands.map((demand) => (
            <DemandCard  key={demand._id} demand={demand} />
          ))
        ) : (
          <p className="text-center text-gray-400 col-span-full">
            No demands found.
          </p>
        )}
      </div>
      {/*design a button of lighblue color broad width */}
      
    </div>
  );
};

export default AllDemands;
