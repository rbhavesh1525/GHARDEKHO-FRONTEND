import React, { useState, useEffect } from "react";
import GharDekhoLogo from "../assets/Images/GharDekho-Bg.png"; // replace with your actual logo
import { Link } from "react-router-dom";
const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [progress, setProgress] = useState(0);

  // Calculate progress dynamically
  useEffect(() => {
    const filledFields = Object.values(formData).filter((val) => val.trim() !== "").length;
    const progressValue = (filledFields / Object.keys(formData).length) * 100;
    setProgress(progressValue);
  }, [formData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-900 to-blue-950 text-white">
      
      {/* Logo */}
      <div className="mb-8 text-center">
        <img
          src={GharDekhoLogo}
          alt="Ghar Dekho Logo"
          className="w-20 h-20 mx-auto rounded-full shadow-md border border-white"
        />
        <h1 className="text-3xl font-bold mt-3 tracking-wide">Ghar Dekho</h1>
      </div>

      {/* Signup Box */}
      <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl shadow-lg w-[90%] max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Create Account</h2>

        {/* Progress Bar */}
        <div className="w-full h-2 bg-white/20 rounded-full mb-6 overflow-hidden">
          <div
            className="h-2 bg-blue-500 transition-all duration-500 ease-in-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-transparent border border-white/30 rounded-md placeholder-gray-300 text-white focus:outline-none focus:border-blue-400 transition duration-300"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-transparent border border-white/30 rounded-md placeholder-gray-300 text-white focus:outline-none focus:border-blue-400 transition duration-300"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-transparent border border-white/30 rounded-md placeholder-gray-300 text-white focus:outline-none focus:border-blue-400 transition duration-300"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-transparent border border-white/30 rounded-md placeholder-gray-300 text-white focus:outline-none focus:border-blue-400 transition duration-300"
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-transparent border border-white/30 rounded-md placeholder-gray-300 text-white focus:outline-none focus:border-blue-400 transition duration-300"
          />

          <button
            type="submit"
            className="mt-2 bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white font-semibold py-3 rounded-md cursor-pointer shadow-md hover:shadow-blue-500/30"
          >
            Sign Up
          </button>
        </form>

        {/* Already Registered */}
        <div className="mt-6 text-center text-sm">
          <p className="text-gray-300">
            Already have an account?{" "}
            <Link to="/Login">
            <span className="text-blue-400 hover:text-blue-500 font-semibold cursor-pointer transition">
              Login
            </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
