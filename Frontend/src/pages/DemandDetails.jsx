import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axiosinstance from "../Helper/axiosinstance";
import ProfileDemandCard from "../components/ProfileDemandCard"; // Import card to reuse below

const DemandDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {id}= useParams();
  
 

  const { crop, duration, quantity, rate, cropImage} = location.state; // Get demand details from state
  const [allDemands, setAllDemands] = useState([]); // Store all demands

  // Fetch all demands from the backend
  const fetchAllDemands = async () => {
    try {
       
      const response = await axiosinstance.get(`/api/farmerBid/getBidsByDemandId/${id}`);
      setAllDemands(response.data);
      console.log()

    } catch (error) {
      console.error("Error fetching demands:", error);
    }
  };

  useEffect(() => {
 fetchAllDemands(); // Fetch all demands when the page loads
  }, []);

  const handleAccept = () => {
    console.log("Accepted");
    // Add logic for accepting the demand (e.g., backend call)
  };

  const handleReject = () => {
    console.log("Rejected");
    // Add logic for rejecting the demand (e.g., backend call)
  };

  const handleContact = () => {
    navigate(`/contact`, { state: { crop } }); // Navigate to a contact page (optional)
  };

  return (
    <div className="bg-gradient-to-r from-gray-900 via-black to-blue-900 min-h-screen text-white py-12">
      <div className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
        {/* Demand Details */}
        <img
          src={cropImage}
          alt={crop}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <h2 className="text-3xl font-bold text-cyan-400 mb-4">{crop}</h2>
        <p className="text-gray-300 mb-2">
          <span className="font-semibold">Duration:</span> {duration}
        </p>
        <p className="text-gray-300 mb-2">
          <span className="font-semibold">Quantity:</span> {quantity} tons
        </p>
        <p className="text-gray-300 mb-4">
          <span className="font-semibold">Rate:</span> ₹{rate} per ton
        </p>

        {/* Action Buttons */}
        <div className="flex space-x-4">
          <button
            onClick={handleAccept}
            className="w-1/3 bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded-lg transition"
          >
            Accept
          </button>
          <button
            onClick={handleReject}
            className="w-1/3 bg-red-500 hover:bg-red-600 text-white font-bold py-2 rounded-lg transition"
          >
            Reject
          </button>
          <button
            onClick={handleContact}
            className="w-1/3 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-lg transition"
          >
            Contact
          </button>
        </div>
      </div>

      {/* Other Demands */}
      <div className="max-w-3xl mx-auto mt-12">
        <h3 className="text-xl font-semibold text-cyan-400 mb-6">Other Demands</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {allDemands.length > 0 ? (
            allDemands.map((demand) => (
              <ProfileDemandCard
                key={demand._id}
                crop={demand.crop}
                duration={demand.duration}
                quantity={demand.quantity}
                rate={demand.rate}
                cropImage={demand.cropImage}
                demandId={demand._id}
              />
            ))
          ) : (
            <p className="text-gray-400">No other demands available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DemandDetails;
