/* eslint-disable react/prop-types */

function BidCard({companyname,appliedRate,duration,quantity,status}) {


    // const { cropImage, crop, duration, quantity, rate, _id } = demand;
  return (
    <div>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
        {/* Crop Image */}
        {/* Crop Info */}
        <h3 className="text-2xl font-semibold text-cyan-400 mb-2">{companyname}</h3>
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
        //   onClick={handleCheckout}
          className="mt-4 w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 rounded-lg transition"
        >
          View
        </button>
      </div>
    </div>
  );
}

export default BidCard;
