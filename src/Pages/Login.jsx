import React from "react";
import { X } from "lucide-react";
import GharDekhoLogo from "../assets/Images/GharDekho-Bg.png";

export default function LoginModal({ open, onClose, onOpenSignup }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[9999] p-4">

      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white hover:text-orange-400 transition cursor-pointer"
      >
        <X className="h-7 w-7" />
      </button>

      {/* Login Box */}
      <div className="bg-white p-8 rounded-2xl shadow-xl w-[90%] max-w-sm border border-blue-900/20">

        {/* Logo */}
        <div className="text-center mb-6">
          <img
            src={GharDekhoLogo}
            alt="Ghar Dekho"
            className="w-20 h-20 rounded-full mx-auto shadow-md border border-blue-900/20"
          />
          <h1 className="text-blue-900 text-2xl font-bold mt-2">
            Ghar <span className="text-orange-500">Dekho</span>
          </h1>
        </div>

        {/* Heading */}
        <h2 className="text-blue-900 text-xl font-semibold mb-6 text-center">
          Login to Your Account
        </h2>

        {/* Form */}
        <form className="space-y-5">

          <input
            type="email"
            placeholder="Email address"
            className="w-full px-4 py-3 border border-blue-900/30 rounded-lg text-blue-900 
                       shadow-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border border-blue-900/30 rounded-lg text-blue-900 
                       shadow-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
          />

          <button
            type="submit"
            className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 rounded-lg 
                       font-semibold shadow-md cursor-pointer flex items-center justify-center gap-2 transition"
          >
            Login
          </button>
        </form>

        {/* Bottom Links */}
        <div className="text-center mt-6 text-sm">

          <p className="text-gray-600 cursor-pointer hover:text-orange-500 transition">
            Forgot password?
          </p>

          <p className="mt-2 text-gray-700">
            Don’t have an account?{" "}
            <span
              onClick={() => {
                onClose();
                onOpenSignup();
              }}
              className="text-orange-500 hover:text-orange-600 font-semibold cursor-pointer transition"
            >
              Sign up
            </span>
          </p>

        </div>
      </div>
    </div>
  );
}
