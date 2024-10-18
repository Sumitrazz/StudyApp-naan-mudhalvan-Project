import React, { useState } from 'react';

import axiosInstance from '../../../utils/axiosInstance';
import { useNavigate } from 'react-router-dom'; // Assuming react-router-dom is being used for navigation

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    type: '',
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('/users/register', formData); // Update this URL based on your backend
      if (response.status === 201) {
        alert('Registration successful');
        navigate('/login'); // Redirect to login after successful registration
      }
    } catch (err) {
      setError('Registration failed. Please try again.');
      console.error('Error registering user:', err);
    }
  };

  return (
    <div className="w-full md:w-3/4 lg:w-1/3 mx-auto mt-28 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-6">Register</h1>

      {error && <p className="text-red-500">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-sm font-semibold mb-1" htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-semibold mb-1" htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-semibold mb-1" htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Type (Dropdown for selecting type) */}
        <div>
          <label className="block text-sm font-semibold mb-1" htmlFor="type">Type</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          >
            <option value="">Select Type</option>
            <option value="Student">Student</option>
            <option value="Instructor">Instructor</option>
            <option value="Administrator">administrator</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
