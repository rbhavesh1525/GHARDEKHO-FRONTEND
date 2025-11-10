


import { Link } from "react-router-dom";
import React from "react";
import GharDekhoLogo from "../assets/Images/GharDekho-Bg.png"; 

function Login() {

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-900 to-blue-950">
      
      {/* Logo */}
      <div className="mb-8 text-center">
        <img
          src={GharDekhoLogo}
          alt="Ghar Dekho Logo"
          className="w-20 h-20 mx-auto rounded-full shadow-md border border-white"
        />
        <h1 className="text-white text-3xl font-bold mt-3 tracking-wide">
          Ghar Dekho
        </h1>
      </div>

      {/* Login Box */}
      <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl shadow-lg w-[90%] max-w-sm">
        <h2 className="text-white text-2xl font-semibold mb-6 text-center">
          Login to Your Account
        </h2>

        {/* Input Fields */}
        <form className="flex flex-col space-y-5">
          <div className="relative">
            <input
              type="email"
              id="email"
              placeholder="Email address"
              className="w-full px-4 py-3 text-white placeholder-gray-300 bg-transparent border border-white/30 rounded-md focus:outline-none focus:border-blue-400 transition duration-300"
            />
          </div>

          <div className="relative">
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 text-white placeholder-gray-300 bg-transparent border border-white/30 rounded-md focus:outline-none focus:border-blue-400 transition duration-300"
            />
          </div>

          <button
            type="submit"
            className="mt-2 bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white font-semibold py-3 rounded-md cursor-pointer"
          >
            Login
          </button>
        </form>

        {/* Forgot Password + Signup */}
        <div className="mt-6 text-center text-sm">
          <p className="text-blue-300 hover:text-blue-400 cursor-pointer transition">
            Forgot password?
          </p>
          <p className="mt-2 text-gray-300">
            Don’t have an account?{" "}
            <Link to="/Signup">
            <span className="text-blue-400 hover:text-blue-500 font-semibold cursor-pointer transition">
              Sign up
            </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
