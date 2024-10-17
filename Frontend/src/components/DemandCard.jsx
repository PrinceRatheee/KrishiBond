import React from "react";

const DemandCard = ({ demand }) => {
  const { companyID, crop, duration, quantity, rate } = demand;

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
      <h3 className="text-2xl font-semibold text-cyan-400 mb-2">
        Company ID: {companyID}
      </h3>
      <p className="text-gray-300">
        <span className="font-semibold">Crop:</span> {crop}
      </p>
      <p className="text-gray-300">
        <span className="font-semibold">Duration:</span> {duration}
      </p>
      <p className="text-gray-300">
        <span className="font-semibold">Quantity:</span> {quantity} tons
      </p>
      <p className="text-gray-300">
        <span className="font-semibold">Rate:</span> ₹{rate} per ton
      </p>
    </div>
  );
};

export default DemandCard;
