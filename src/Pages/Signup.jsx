import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import GharDekhoLogo from "../assets/Images/GharDekho-Bg.png";

export default function Signup({ open, onClose, onOpenLogin, onOpenOTP }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const filled = Object.values(formData).filter((v) => v.trim() !== "").length;
    setProgress((filled / Object.keys(formData).length) * 100);
  }, [formData]);

  if (!open) return null;

  const handleSignup = (e) => {
    e.preventDefault();

    // Later you will call backend API here to send OTP
    // For now only open OTP modal
    

    onOpenOTP(formData.phone);  // pass phone to OTP modal
        onClose();     // close signup modal
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[9999] p-4">

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white hover:text-gray-300 cursor-pointer"
      >
        <X className="h-7 w-7"/>
      </button>

      {/* Signup Card */}
      <div className="bg-white p-8 rounded-2xl w-[90%] max-w-md shadow-xl border border-gray-200">

        {/* Logo */}
        <div className="text-center mb-6">
          <img
            src={GharDekhoLogo}
            alt="logo"
            className="w-20 h-20 mx-auto rounded-full border border-gray-300 shadow-md"
          />
          <h1 className="text-gray-800 text-2xl font-bold mt-3">
            Create Account
          </h1>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2 bg-gray-200 rounded-full mb-6 overflow-hidden">
          <div
            className="h-2 bg-blue-600 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSignup}>
  {[
    { name: "name", placeholder: "Full Name" },
    { name: "phone", placeholder: "Phone Number" },
    { name: "email", placeholder: "Email Address" },
    { name: "password", placeholder: "Password", type: "password" },
    { name: "confirmPassword", placeholder: "Confirm Password", type: "password" }
  ].map((field) => (
    <input
      key={field.name}
      type={field.type || "text"}
      name={field.name}
      placeholder={field.placeholder}
      value={formData[field.name]}
      onChange={(e) =>
        setFormData({ ...formData, [field.name]: e.target.value })
      }
      className="w-full px-4 py-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
    />
  ))}

  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-semibold shadow-md cursor-pointer">
    Sign Up
  </button>
</form>


        {/* Already Registered */}
        <div className="text-center mt-6 text-sm text-gray-700">
          Already have an account?{" "}
          <span
            onClick={() => {
              onClose();
              onOpenLogin();
            }}
            className="text-blue-600 hover:text-blue-700 cursor-pointer font-semibold"
          >
            Login
          </span>
        </div>

      </div>
    </div>
  );
}
