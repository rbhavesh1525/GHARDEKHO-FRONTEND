import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, User, Bell } from "lucide-react";
import { motion } from "framer-motion";

export default function TopNavBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  // 🔥 STATIC USER (until backend ready)
  const isLogin = true;
  const loggedInUser = {
    name: "Bhavesh",
    role: "admin" // you can put "user" if needed
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link to="/home" className="flex items-center gap-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/727/727606.png"
            alt="logo"
            className="h-8 w-8"
          />
          <span className="text-2xl font-semibold text-gray-800">
            Ghar <span className="text-blue-600">Dekho</span>
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center space-x-10">
          <Link to="/home" className="text-[16px]">Home</Link>
          <Link to="/AboutUs" className="text-[16px]">About Us</Link>
          <Link to="/Help" className="text-[16px]">Help</Link>
          <Link to="/chat" className="text-[16px]">Chats</Link>
        </nav>

        {/* Right Side */}
        <div className="flex items-center space-x-6">

          {/* Notifications */}
          <Link to="/notifications" className="relative">
            <Bell className="h-5 w-5 text-gray-700" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] px-1.5 rounded-full">2</span>
          </Link>

          {/* User Dropdown (Always visible for now) */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 text-gray-800 hover:text-blue-600 transition cursor-pointer"
            >
              <User className="w-6 h-6 bg-gray-200 p-1 rounded-full" />
              <span className="font-medium">{loggedInUser.name}</span>
              <ChevronDown className="w-4 h-4" />
            </button>
{isDropdownOpen && (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    className="absolute right-0 mt-3 w-48 bg-white border shadow-md rounded-md py-2"
  >
    <Link
      to="/MyProfile"
      className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
    >
      My Profile
    </Link>

    <Link
      to="/Settings"
      className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
    >
      Settings
    </Link>

    {/* Admin Panel */}
    <Link
      to="/adminhome"
      className="block px-4 py-2 hover:bg-gray-100 cursor-pointer text-blue-600 font-medium"
    >
      Admin Panel
    </Link>

    {/* Logout */}
    <button
      onClick={() => navigate("/home")}
      className="block w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-600"
    >
      Logout
    </button>
  </motion.div>
)}

          </div>
        </div>
      </div>
    </header>
  );
}
