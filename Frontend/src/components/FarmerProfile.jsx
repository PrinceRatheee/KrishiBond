/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import axiosinstance from './../Helper/axiosinstance';
import { useSelector } from 'react-redux';
import BidCard from './BidsCard';

function FarmerProfile() {

  const userID = useSelector((state)=>state.auth.data.id)
  const [bids, setBids] = useState([]);
  const[demandId,setDemandId]=useState();
  // Fetch company demands from the backend
  useEffect(() => {
    const fetchBids = async () => {
      try {
        const response = await axiosinstance.get(`/api/farmerBid/getBidsByUserId/${userID}`);
        setBids(response.data);
        console.log("Bids fetched in farmer profile:", response.data);
      } catch (error) {
        console.error("Error fetching demands:", error);
      }
    };

    fetchBids();
  }, []);

  return (
    <div className='flex-col '>
    <div className="bg-gradient-to-r from-gray-900 via-black to-blue-900 min-h-screen text-white py-16 px-8 flex-col">
  <h2 className="text-4xl font-bold text-cyan-400 text-center mb-12">
   Your Bids !!
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {bids.length > 0 ? (
      bids.map((bid,index) => (

        <BidCard key={index} duration={bid.duration} quantity={bid.quantity} 
        appliedRate={
          bid.appliedRate
          } status={bid.status}
        />
      ))
    ) : (
      <p className="text-center text-gray-400 col-span-full">
        No demands found.
      </p>
    )}
  </div>
  {/*design a button of lighblue color broad width */}
  
</div>
</div>
  )
}

export default FarmerProfile