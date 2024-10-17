/* eslint-disable no-unused-vars */
import { useState } from 'react';

const KisanDetails = () => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [Address, setAddress] = useState('');
  const [Farmsize, setFarmsize] = useState('Company'); 
  const handleSignup = (e) => {
    e.preventDefault();
    //onSubmit({  Address,Farmsize,contact});
  };


  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-3xl font-semibold text-white mb-6">Farm Details</h2>
      <form onSubmit={handleSignup}>
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
           Farm Size
          </label>
          <input
            className="w-full px-3 py-2 text-gray-900 rounded-lg"
            type="number"
            id="farmsize"
            placeholder="Enter your Farm-Size"
            value={Address}
            onChange={(e) => setFarmsize(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-300"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default KisanDetails;
