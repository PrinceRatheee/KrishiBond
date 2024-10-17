import React, { useEffect, useState } from 'react'

function FarmerProfile() {
  const [bids, setBids] = useState([]);

  // Fetch company demands from the backend
  useEffect(() => {
    const fetchBids = async () => {
      try {
        const response = await axiosinstance.get("/api/companydemand/get");
        setBids(response.data);
        console.log("Bids fetched in farmer profile:", response.data);
      } catch (error) {
        console.error("Error fetching demands:", error);
      }
    };

    fetchBids();
  }, []);

  return (
    <div>FarmerProfile</div>
  )
}

export default FarmerProfile