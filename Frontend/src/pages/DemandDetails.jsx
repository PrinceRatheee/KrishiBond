import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axiosinstance from "../Helper/axiosinstance";
import ProfileDemandCard from "../components/ProfileDemandCard"; // Import card to reuse for bid display
import abi from "../FundManagerJSON/FundManager.json";
import { ethers } from "ethers";
const DemandDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams(); // Get demand ID from the URL

  //Blockchain Integration
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });
  const [account, setAccount] = useState("Not connected");
  useEffect(() => {
    const template = async () => {
      const contractAddres = import.meta.env.VITE_HARDHAT_DEPLOYED_NETWORK;

      const contractABI = abi.abi;
      //Metamask part
      //1. In order do transactions on goerli testnet
      //2. Metmask consists of infura api which actually help in connectig to the blockhain
      try {
        if (!window.ethereum) {
          alert("Please install Metamask to use this application.");
          return;
        }
        const { ethereum } = window;
        const account = await ethereum.request({
          method: "eth_requestAccounts",
        });

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });
        setAccount(account);

        const provider = new ethers.providers.Web3Provider(ethereum); //read the Blockchain
        const signer = provider.getSigner(); //write the blockchain

        const contract = new ethers.Contract(
          contractAddres,
          contractABI,
          signer
        );
        console.log("contract instance", contract);
        setState({ provider, signer, contract });
      } catch (error) {
        console.log(error);
      }
    };
    template();
  }, []);

  //Blockchain Integration
  const { crop, duration, quantity, rate, cropImage } = location.state; // Get demand details from state
  const [bids, setBids] = useState([]); // Store all bids

  // Fetch all bids on the same demand from the backend
  const fetchAllBids = async () => {
    try {
      const response = await axiosinstance.get(
        `/api/farmerBid/getBidsByDemandId/${id}`
      );
      console.log("setBidws---", response.data);
      setBids(response.data);
    } catch (error) {
      console.error("Error fetching bids:", error);
    }
  };

  useEffect(() => {
    fetchAllBids(); // Fetch all bids when the page loads
  }, []);

  const handleAccept = async (bidId, event) => {
    event.preventDefault();
    const contract = state.contract;
    const amount = { value: ethers.utils.parseEther("20") };
    console.log("Accepted");
    const transaction = await contract.depositFunds(
      "0xFABB0ac9d68B0B445fB7357272Ff202C5651694a",
      amount
    );
    await transaction.wait();
    // alert("Transaction is successul");
    const response = await axiosinstance.post(
      `/api/farmerBid/approveBidsByCompany/${bidId}`
    );
    console.log("fhggdfyu7u7i3");
    if (response.status === 200) {
      console.log("Bid Accepted");
    } else {
      console.log("Error accepting bid");
    }
    window.location.reload();
  };

  const handleReject = () => {
    console.log("Rejected");
    // Add logic for rejecting a bid (e.g., backend call)
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
      </div>

      {/* Other Bids Section */}
      <div className="max-w-3xl mx-auto mt-12">
        <h3 className="text-xl font-semibold text-cyan-400 mb-6">
          Other Bids on This Demand
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {bids.length > 0 ? (
            bids.map((bid) => (
              <div
                key={bid._id}
                className="bg-gray-700 p-4 rounded-lg shadow-md"
              >
                <h4 className="text-2xl text-cyan-400 mb-2">Bid from Farmer</h4>
                <p className="text-gray-300">
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
                <p className="text-gray-400">
                  <span className="font-semibold">Submitted On:</span>{" "}
                  {new Date(bid.createdAt).toLocaleString()}
                </p>

                {/* Action Buttons */}
                {bid.status === "approved" ? (
                  <>
                    <div className="flex space-x-4 mt-4">
                    <button
                        
                        className="w-1/3 bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded-lg transition"
                      >
                        Approved
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex space-x-4 mt-4">
                      <button
                        onClick={(event) => handleAccept(bid._id, event)}
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
                  </>
                )}
              </div>
            ))
          ) : (
            <p className="text-gray-400">No bids available for this demand.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DemandDetails;
