/* eslint-disable react/prop-types */
import { useState } from 'react';

const SignupForm = ({ onSwitch, onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Company'); 
  const handleSignup = (e) => {
    e.preventDefault();
    onSubmit({ name, email, password ,role});
  };
  

  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-3xl font-semibold text-white mb-6">Sign Up</h2>
      <form onSubmit={handleSignup}>
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
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
        <div className="mb-6">
          <label className="block text-gray-300 text-sm mb-2" htmlFor="role">
            Select Role
          </label>
          <select
            id="role"
            className="w-full px-3 py-2 text-gray-900 rounded-lg"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="Company">Company</option>
            <option value="Farmer">Farmer</option>
          </select>
        </div>
        <div className="mb-6">
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
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-300"
        >
          Sign Up
        </button>
      </form>
      <p className="mt-4 text-gray-400">
        Already have an account?{' '}
        <button onClick={onSwitch} className="text-blue-400 hover:underline">
          Log in here
        </button>
      </p>
    </div>
  );
};

export default SignupForm;