/* eslint-disable react/prop-types */
import axiosinstance from "./../Helper/axiosinstance";
import { useNavigate } from 'react-router-dom';

function BidCard({
  companyname,
  appliedRate,
  duration,
  quantity,
  status,
  bidID,
}) {
  const navigate = useNavigate();
  const handleCancel = async () => {

    if (status == "pending") {
      const resp = await axiosinstance.get(
        `/api/farmerBid/updateBidsByUserID/${bidID}`
      );
      console.log(resp);
    } else {
      navigate("/profile/cancel");
    }
  };
  return (
    <div>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
        {/* Crop Image */}
        {/* Crop Info */}
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

        {/* Checkout Button */}
        <button
          onClick={handleCancel}
          className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 rounded-lg transition"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default BidCard;
