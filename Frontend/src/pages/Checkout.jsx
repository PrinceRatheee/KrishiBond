import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axiosinstance from "../Helper/axiosinstance";
import { useSelector } from "react-redux";

const Checkout = () => {
  const location = useLocation();
  const { demand } = location.state;
  console.log("demand", demand); // Extract demand details from state
  const userId = useSelector((state) => state.auth.data.id); // Get user ID from Redux
  const [id, setid] = useState(demand?.companyID);

  const [company, setcompany] = useState("");
  console.log(id);
  console.log("id", userId);
  //   console.log('user',userId);
  const [bids, setBids] = useState([]); // Store list of bids
  const [isBidMade, setIsBidMade] = useState(false); // Check if the user already made a bid
  const [isPopupOpen, setIsPopupOpen] = useState(false); // Control popup visibility
  const [isPopupVisible, setIsPopupVisible] = useState(false); // Popup notification

  const [bidDetails, setBidDetails] = useState({
    appliedRate: "",
    quantity: "",
    duration: "",
  }); // Store bid form inputs

  // Handle input change for the bid form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBidDetails((prev) => ({ ...prev, [name]: value }));
  };

  // Fetch bids from the backend
  const fetchBids = async () => {
    try {
      const response = await axiosinstance.get(
        `/api/farmerBid/getBidsByDemandId/${demand._id}`
      );
      console.log("resp data", response.data);
      setBids(response.data);

      // Set companyID if it exists
      // const companyID = response?.data[0]?.appliedFor[0]?.companyID;
      // if (companyID) {
      //   setid(companyID); // Set companyID in state
      // }
      // Check if the user already made a bid
      const userBid = response.data.find((bid) => bid.user === userId);
      if (userBid) setIsBidMade(true);
    } catch (error) {
      console.error("Error fetching bids:", error);
    }
  };

  // Submit a new bid
  const handleSubmitBid = async () => {
    try {
      const response = await axiosinstance.post(
        `/api/farmerBid/createBidForFarmer/${demand._id}`,
        {
          user: userId,
          appliedRate: bidDetails.appliedRate,
          quantity: bidDetails.quantity,
          duration: bidDetails.duration,
        }
      );

      // Add the new bid to the list and close the popup
      setBids((prevBids) => [...prevBids, response.data]);
      setBidDetails({ appliedRate: "", quantity: "", duration: "" });
      setIsPopupOpen(false);
      setIsBidMade(true);
      setIsPopupVisible(true);

      // Hide the popup notification after 2 seconds
      setTimeout(() => setIsPopupVisible(false), 2000);
    } catch (error) {
      console.error("Error submitting bid:", error);
    }
  };

  const fetchCompanyDetails = async (companyId) => {
    try {
      const details = await axiosinstance.get(
        `/api/auth/user/getCompanydetails/${companyId}`
      );
      console.log("Company details: ", details.data);
      setcompany(details.data); // Store company details in state
    } catch (error) {
      console.error("Error fetching company details:", error);
    }
  };

  // Fetch bids on component mount
  useEffect(() => {
    fetchBids();
  }, []);

  useEffect(() => {
    if (id) {
      fetchCompanyDetails(id); // Call only when id is set
    }
  }, [id]);

  return (
    <div className="bg-gradient-to-r from-gray-900 via-black to-blue-900 min-h-screen text-white py-12">
      <div className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
        {/* Image and Demand Details */}
        <img
          src={demand.cropImage}
          alt={demand.crop}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />

        <h2 className="text-3xl font-bold text-cyan-400 text-center mb-4">
          {demand.crop}
        </h2>
        <p className="text-gray-300 text-center mb-6">
          Demand by:{" "}{company?.company.name} <span className="font-semibold">{}</span>
        </p>
        <div className="text-gray-300 mb-8 space-y-2">
          <p>
            <span className="font-semibold">Duration:</span> {demand.duration}
          </p>
          <p>
            <span className="font-semibold">Quantity:</span> {demand.quantity}{" "}
            tons
          </p>
          <p>
            <span className="font-semibold">Rate:</span> ₹{demand.rate} per ton
          </p>
        </div>

        {/* Add Bid Button */}
        <button
          onClick={() => setIsPopupOpen(true)}
          disabled={isBidMade}
          className={`w-full ${
            isBidMade
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-cyan-500 hover:bg-cyan-600"
          } text-white font-bold py-2 rounded-lg transition`}
        >
          {isBidMade ? "Bid Already Submitted" : "Add Bid"}
        </button>

        {/* Bid Form Popup */}
        {isPopupOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
              <h3 className="text-2xl font-semibold text-cyan-400 mb-4">
                Submit Your Bid
              </h3>

              <input
                type="number"
                name="appliedRate"
                value={bidDetails.appliedRate}
                onChange={handleChange}
                placeholder="Enter your bid rate"
                className="w-full p-3 rounded-lg bg-gray-900 text-white mb-4"
              />
              <input
                type="number"
                name="quantity"
                value={bidDetails.quantity}
                onChange={handleChange}
                placeholder="Enter quantity"
                className="w-full p-3 rounded-lg bg-gray-900 text-white mb-4"
              />
              <input
                type="text"
                name="duration"
                value={bidDetails.duration}
                onChange={handleChange}
                placeholder="Enter duration (e.g., 10 days)"
                className="w-full p-3 rounded-lg bg-gray-900 text-white mb-4"
              />

              <button
                onClick={handleSubmitBid}
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 rounded-lg transition"
              >
                Submit Bid
              </button>
            </div>
          </div>
        )}

        {/* Popup Notification */}
        {isPopupVisible && (
          <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-2 rounded-lg shadow-lg transition-all">
            Bid Submitted Successfully!
          </div>
        )}
      </div>

      {/* Bids Section */}
      <div className="max-w-3xl mx-auto mt-12">
        <h3 className="text-xl font-semibold text-cyan-400 mb-6">
          Submitted Bids
        </h3>
        <div className="space-y-4">
          {bids.length > 0 ? (
            bids.map((bid) => (
              <div
                key={bid._id}
                className="bg-gray-700 p-4 rounded-lg shadow-md flex justify-between items-center"
              >
                <div>
                  <p className="text-white">
                    <span className="font-semibold">Bid Rate:</span> ₹
                    {bid.appliedRate}
                  </p>
                  <p className="text-gray-300">
                    <span className="font-semibold">Quantity:</span>{" "}
                    {bid.quantity} tons
                  </p>
                  <p className="text-gray-300">
                    <span className="font-semibold">Duration:</span>{" "}
                    {bid.duration}
                  </p>
                </div>
                <p className="text-gray-400">
                  {new Date(bid.createdAt).toLocaleString()}
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-400">No bids submitted yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
