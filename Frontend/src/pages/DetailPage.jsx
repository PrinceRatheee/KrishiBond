/* eslint-disable no-unused-vars */
import { useState } from "react";
import CompanyDetails from "./../components/CompanyDetails";
import KisanDetails from "./../components/KisanDetails";

const DetailPage = () => {
  const [role , setrole] = useState("industry");

  return (
    <div className="min-h-screen flex items-center justify-center">
      {role === "industry" ? <CompanyDetails /> : <KisanDetails />}
    </div>
  );
};

export default DetailPage;
