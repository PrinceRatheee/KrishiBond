/* eslint-disable no-unused-vars */
import { useState } from "react";
import CompanyDetails from "./../components/CompanyDetails";
import KisanDetails from "./../components/KisanDetails";
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const DetailPage = () => {
  const role = useSelector((state)=> state?.auth?.role);
  const isDetails = useSelector((state) => state?.auth?.data.detailsReceived)
  const navigate = useNavigate()
  console.log(isDetails)
  useEffect(() => {

if(isDetails === true){
  navigate('/')
}
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDetails]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      {role === "industry" ? <CompanyDetails /> : <KisanDetails />}
    </div>
  );
};

export default DetailPage;
