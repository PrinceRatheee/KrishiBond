/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {FarmerLogin} from '../Redux/Farmer/FarmerSlice'
import { useNavigate } from 'react-router-dom';
const LoginForm = ({ onSwitch }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const resp = await dispatch(FarmerLogin({ email, password}));
    console.log(' resp' , resp);

    if(resp?.payload?.data?.sendUser?.role === 'industry'){
      navigate('/');
    }else if(resp?.payload?.data?.sendUser?.role === 'farmer'){
      navigate('/');
    }
   
  };


  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-3xl font-semibold text-white mb-6">Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label className="block text-gray-300 text-sm mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="w-full px-3 py-2 text-gray-900 rounded-lg"
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 text-sm mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="w-full px-3 py-2 text-gray-900 rounded-lg"
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Role Selection Dropdown */}
       

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-purple-700 transition duration-300"
        >
          Login
        </button>
      </form>

      <p className="mt-4 text-gray-400">
        Don’t have an account?{' '}
        <button onClick={onSwitch} className="text-blue-400 hover:underline">
          Sign up here
        </button>
      </p>
    </div>
  );
};

export default LoginForm;
