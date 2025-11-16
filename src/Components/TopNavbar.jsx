import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, User, Bell } from "lucide-react";
import { motion } from "framer-motion";

export default function TopNavBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const isLogin = true;
  const loggedInUser = {
    name: "Bhavesh",
    role: "admin",
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link to="/home" className="flex items-center gap-2 cursor-pointer">
          <img
            src="https://cdn-icons-png.flaticon.com/512/727/727606.png"
            alt="logo"
            className="h-8 w-8"
          />
          <span className="text-2xl font-semibold text-gray-800">
            <span className="text-blue-600">Ghar</span>{" "}
            <span className="text-orange-500">Dekho</span>
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center space-x-10">
          <Link className="text-[16px] hover:text-blue-900 cursor-pointer" to="/home">
            Home
          </Link>
          <Link className="text-[16px] hover:text-blue-900 cursor-pointer" to="/AboutUs">
            About Us
          </Link>
          <Link className="text-[16px] hover:text-blue-900 cursor-pointer" to="/Help">
            Help
          </Link>
          <Link className="text-[16px] hover:text-blue-900 cursor-pointer" to="/chat">
            Chats
          </Link>
        </nav>

        {/* Right Side */}
        <div className="flex items-center space-x-6">

          {/* Upload Button 🚀 */}
          <button
            onClick={() => navigate("/postproperty")}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-xl 
                       font-semibold shadow-md transition-all duration-300 hidden md:block"
          >
            Upload for FREE
          </button>

          {/* Notifications */}
          <Link to="/notifications" className="relative cursor-pointer">
            <Bell className="h-5 w-5 text-gray-700 hover:text-blue-900 transition" />
            <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[10px] px-1.5 rounded-full">
              2
            </span>
          </Link>

          {/* User Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 text-gray-800 hover:text-blue-900 transition cursor-pointer"
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
                  className="block px-4 py-2 hover:bg-blue-50 cursor-pointer text-gray-700"
                >
                  My Profile
                </Link>

                <Link
                  to="/Settings"
                  className="block px-4 py-2 hover:bg-blue-50 cursor-pointer text-gray-700"
                >
                  Settings
                </Link>

                {/* Admin Panel */}
                <Link
                  to="/adminhome"
                  className="block px-4 py-2 hover:bg-orange-50 cursor-pointer text-orange-600 font-medium"
                >
                  Admin Panel
                </Link>

                <button
                  onClick={() => navigate("/")}
                  className="block w-full text-left px-4 py-2 hover:bg-red-50 cursor-pointer text-red-600"
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
