/* eslint-disable no-unused-vars */
import React,{useState,useEffect} from 'react'
import DemandCard from "./DemandCard"
import axiosinstance from "../Helper/axiosinstance";
import ProfileDemandCard from './ProfileDemandCard';
import { useSelector } from 'react-redux';

function CompanyProfile() {
  const [demands, setDemands] = useState([]);
  // const[demandId,setDemandId]=useState();
  // Fetch company demands from the backend
  const id=useSelector((state)=>state.auth.data.id);
  useEffect(() => {
    const fetchDemands = async () => {
      try {
        const response = await axiosinstance.get(`/api/companydemand/get/${id}`);
        setDemands(response.data);
       // console.log("Demands:", response.data);

      } catch (error) {
        console.error("Error fetching demands:", error);
      }
    };

    fetchDemands();
  }, []);
  return (
    <div className='flex-col '>
        <div className="bg-gradient-to-r from-gray-900 via-black to-blue-900 min-h-screen text-white py-16 px-8 flex-col">
      <h2 className="text-4xl font-bold text-cyan-400 text-center mb-12">
        Your Listings
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {demands.length > 0 ? (
          demands.map((demand,index) => (
            // <DemandCard  key={demand._id} demand={demand} />
            <ProfileDemandCard key={index} demandId={demand._id} crop={demand.crop} duration={demand.duration} rate={demand.rate}
              quantity={demand.quantity}
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

export default CompanyProfile