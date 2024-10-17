import React from 'react'

function CompanyDemands() {
    const [demands, setDemands] = useState([]);

  // Fetch company demands from the backend
  useEffect(() => {
    const fetchDemands = async () => {
      try {
        const response = await axiosinstance.get("/api/companydemand/get");
        setDemands(response.data);
        console.log("Demands:", response.data);
      } catch (error) {
        console.error("Error fetching demands:", error);
      }
    };

    fetchDemands();
  }, []);
  return (
    <div>CompanyDemands</div>
  )
}

export default CompanyDemands