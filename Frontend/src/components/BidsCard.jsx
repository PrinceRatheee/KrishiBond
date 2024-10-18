/* eslint-disable react/prop-types */
import axiosinstance from "./../Helper/axiosinstance";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function BidCard({
  companyname,
  appliedRate,
  duration,
  quantity,
  status,
  bidID,
  deliveryStart,
  delivered,
}) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [deliver, setDeliver] = useState(
    deliveryStart ? (delivered ? "Delivered" : "Delivering") : "Deliver Start"
  );

  // Handle delivery start/update
  const handleDeliver = async () => {
    try {
      if (deliveryStart && !delivered) {
        setDeliver("Delivering");
      } else if (!deliveryStart) {
        setLoading(true);
        const response = await axiosinstance.post(
          `/api/farmerBid/startDelivery/${bidID}`
        );
        if (response.status === 200) {
          setDeliver("Delivering");
          console.log("Start Delivery");
          setLoading(false);
        }
      } else {
        setDeliver("Delivered");
      }
    } catch (error) {
      console.error("Error starting delivery", error);
    }
  };

  // Handle bid cancellation
  const handleCancel = async () => {
    try {
      if (status === "pending") {
        const resp = await axiosinstance.get(
          `/api/farmerBid/updateBidsByUserID/${bidID}`
        );
        console.log(resp);
      } else {
        navigate("/profile/cancel");
      }
    } catch (error) {
      console.error("Error cancelling bid", error);
    }
  };

  // Don't render if status is 'cancelled'
  if (status === "cancelled") {
    return null;
  }

  return (
    <div>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
        <h3 className="text-2xl font-semibold text-cyan-400 mb-2">
          {companyname}
        </h3>
        <p className="text-gray-300">
          <span className="font-semibold">Duration:</span> {duration}
        </p>
        <p className="text-gray-300">
          <span className="font-semibold">Quantity:</span> {quantity} tons
        </p>
        <p className="text-gray-300">
          <span className="font-semibold">Rate:</span> ₹{appliedRate} per ton
        </p>
        <p className="text-gray-300">
          <span className="font-semibold">Status:</span> {status}
        </p>

        {/* Cancel Button */}
        <button
          onClick={handleCancel}
          className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 rounded-lg transition"
        >
          Cancel
        </button>

        {/* Deliver Button (Only show when approved) */}
        {status === "approved" && (
          <button
            onClick={handleDeliver}
            className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded-lg transition"
          >
            {deliver}
          </button>
        )}
      </div>
    </div>
  );
}

export default BidCard;
