/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useEffect } from "react";
import { updateCompany } from "../Redux/Company/CompanySlice";
import { CompanyDetail } from "./../Redux/Company/CompanySlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const CompanyDetails = () => {
  const Company = useSelector((state) => state.company.Company);
  const [contact, setContact] = useState("");
  const [Address, setAddress] = useState("");
  const [gst, setGst] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit =async  (e) => {
    e.preventDefault();
    const data = {
      name: Company?.sendUser?.name,
      email: Company?.sendUser?.email,
      contact,
      address: Address,
      GSTNumber: gst,
    };
    const resp = await dispatch(CompanyDetail(data));
    console.log("resp on submit", resp.payload.data.success);
    if(resp.payload.data.success){
      console.log('company update')
      dispatch(updateCompany(data));
      navigate("/");
    }
  };

  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-3xl font-semibold text-white mb-6">
        Company Details
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-300 text-sm mb-2" htmlFor="name">
            Contact
          </label>
          <input
            className="w-full px-3 py-2 text-gray-900 rounded-lg"
            type="text"
            id="name"
            placeholder="Enter your Contact Detail"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 text-sm mb-2" htmlFor="email">
            Address
          </label>
          <input
            className="w-full px-3 py-2 text-gray-900 rounded-lg"
            type="text"
            id="address"
            placeholder="Enter your Address"
            value={Address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-300 text-sm mb-2" htmlFor="role">
            GSTIN.
          </label>
          <input
            className="w-full px-3 py-2 text-gray-900 rounded-lg"
            type="text"
            id="farmsize"
            placeholder="Enter your GSTIN"
            value={gst}
            onChange={(e) => setGst(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-300"
        >
          Submit Details
        </button>
      </form>
    </div>
  );
};

export default CompanyDetails;
