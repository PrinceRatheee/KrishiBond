
import CompanyDashboard from './CompanyDashboard'
import FarmerDashboard from './FarmerDashboard'
import { useSelector } from 'react-redux'

function Dashboard() {
    const role=useSelector((state)=>state.auth.data.role);
    
  return (
    <>
    {role==="farmer"?<FarmerDashboard/> :<CompanyDashboard/>}
    </>
  )
}

export default Dashboard