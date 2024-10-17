import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import axiosinstance from "../Helper/axiosinstance";
const CompanyDemandForm = () => {
  const companyID = useSelector((state) => state?.company.Company.sendUser.id);
  console.log(companyID);
  const [formData, setFormData] = useState({
    crop: "",
    duration: "",
    quantity: "",
    rate: "",
  });

  const [message, setMessage] = useState(""); // Success message
  const [error, setError] = useState(""); // Error message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    const { crop, duration, quantity, rate } = formData;
    if (!companyID || !crop || !duration || !quantity || !rate) {
      setError("All fields are required.");
      return;
    }

    // Prepare data for backend
    const data = { companyID, ...formData };

    try {
      await axiosinstance.post(`/api/companydemand/create`, data);
      setMessage("Demand submitted successfully!");
      setError("");
      setFormData({ crop: "", duration: "", quantity: "", rate: "" }); // Reset form
    } catch (err) {
      setError("Failed to submit demand. Please try again.");
    }
  };

  return (
    <div className="bg-gradient-to-r from-gray-900 via-black to-blue-900 min-h-screen text-white flex justify-center items-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-cyan-400 text-center mb-6">
          Submit Company Demand
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && <p className="text-red-500">{error}</p>}
          {message && <p className="text-green-500">{message}</p>}

          <input
            type="text"
            name="crop"
            placeholder="Crop"
            value={formData.crop}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-900 text-white"
          />

          <input
            type="text"
            name="duration"
            placeholder="Duration (in months)"
            value={formData.duration}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-900 text-white"
          />

          <input
            type="number"
            name="quantity"
            placeholder="Quantity (in tons)"
            value={formData.quantity}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-900 text-white"
          />

          <input
            type="number"
            name="rate"
            placeholder="Rate (per ton)"
            value={formData.rate}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-900 text-white"
          />

          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 rounded-lg transition"
          >
            Submit Demand
          </button>
        </form>
      </div>
    </div>
  );
};

export default CompanyDemandForm;
