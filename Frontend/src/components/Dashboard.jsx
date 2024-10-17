import React from 'react'
import FarmerProfile from './FarmerProfile';
import IndustryProfile from './IndustryProfile';

function Dashboard() {
    const role="farmer";
  return (
    <div>
        {role==="farmer"?<FarmerProfile/>:<IndustryProfile/>}
    </div>
  )
}

export default Dashboard