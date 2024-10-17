/* eslint-disable no-unused-vars */
import { useState } from 'react';
import axiosinstance from './../Helper/axiosinstance';
import { FarmerDetail } from './../Redux/Farmer/FarmerSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {updateFarmer} from '../Redux/Farmer/FarmerSlice'
const KisanDetails = () => {
  const Name = useSelector((state)=>state?.auth?.data?.name)
  const Email = useSelector((state)=> state.auth?.data?.email);

  const [name, setName] = useState(Name);
  const [email, setemail] = useState(Email);
  const [contact, setContact] = useState('');
  const [Address, setAddress] = useState('');
  const [Farmsize, setFarmsize] = useState(0); 
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {name,email, contact,address:Address,farmSize:Farmsize}
    const resp = dispatch(FarmerDetail(data));
    console.log('resp on submit' , resp)
    dispatch(updateFarmer(data))
  };
  const handleFarmsize =(e)=>{
    console.log(e.target.value)
    setFarmsize(
     parseFloat( e.target.value)) 
  }

  
  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-3xl font-semibold text-white mb-6">Farm Details</h2>
      <form onSubmit={handleSubmit}>
      <div className="mb-4">
          <label className="block text-gray-300 text-sm mb-2" htmlFor="name">
            Name 
          </label>
          <input
            className="w-full px-3 py-2 text-gray-900 rounded-lg"
            type="text"
            id="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName((prev)=>({
              ...prev,
              name:e.target.value
            }))}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 text-sm mb-2" htmlFor="email">
            Email 
          </label>
          <input
            className="w-full px-3 py-2 text-gray-900 rounded-lg"
            type="text"
            id="email"
            placeholder="Enter your name"
            value={email}
            onChange={(e) => setemail((prev)=>({
              ...prev,
              name:e.target.value
            }))}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 text-sm mb-2" htmlFor="contact">
            Contact 
          </label>
          <input
            className="w-full px-3 py-2 text-gray-900 rounded-lg"
            type="text"
            id="contact"
            placeholder="Enter your Contact Detail"
            value={contact}
            onChange={(e) => setContact(
              e.target.value
            )}
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
          <label className="block text-gray-300 text-sm mb-2" htmlFor="Farmsize">
           Farm Size (acres)
          </label>
          <input
            className="w-full px-3 py-2 text-gray-900 rounded-lg"
            type="number"
            id="Farmsize"
            placeholder="Enter your Farm-Size"
            value={Farmsize}
            onChange={handleFarmsize}
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

export default KisanDetails;
