import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, User, Bell } from "lucide-react";
import { motion } from "framer-motion";

export default function TopNavBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [islogin, setIslogin] = useState(true); // for demo
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

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

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-10">
          {[
            { label: "Home", link: "/home" },
            { label: "About Us", link: "/AboutUs" },
            { label: "Help", link: "/Help" },
            { label: "Chats", link: "/chat" },
          ].map((item) => (
            <Link
              key={item.label}
              to={item.link}
              className="text-[15px] font-medium text-gray-800 hover:text-blue-600 transition-all duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center space-x-6">
          {/* Notification Bell */}
          <Link
            to="/notifications"
            className="relative text-gray-700 hover:text-blue-600 transition-all duration-200"
          >
            <Bell className="h-5 w-5" />
            {/* Notification Badge */}
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-semibold rounded-full px-1.5 py-[1px]">
              2
            </span>
          </Link>

          {/* Login or User Dropdown */}
          {islogin ? (
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center space-x-2 text-gray-800 hover:text-blue-600 transition-all duration-200"
              >
                <User className="h-6 w-6 bg-gray-200 rounded-full p-1" />
                <span className="font-medium text-[15px]">Bhavesh Rathod</span>
                <ChevronDown className="h-4 w-4" />
              </button>

              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute right-0 mt-3 w-48 bg-white border border-gray-100 rounded-md shadow-lg py-2"
                >
                  <Link
                    to="/Myprofile"
                    className="block px-4 py-2 text-[15px] text-gray-700 hover:bg-gray-50"
                  >
                    Profile
                  </Link>
                  <Link
                    to="/settings"
                    className="block px-4 py-2 text-[15px] text-gray-700 hover:bg-gray-50"
                  >
                    Settings
                  </Link>
                  <button
                    onClick={() => {
                      setIslogin(false);
                      setIsDropdownOpen(false);
                      navigate("/home");
                    }}
                    className="block w-full text-left px-4 py-2 text-[15px] text-gray-700 hover:bg-gray-50"
                  >
                    Logout
                  </button>
                </motion.div>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              className="px-5 py-2 rounded-md text-[15px] font-medium text-white bg-blue-600 hover:bg-blue-700 transition"
            >
              Login
            </Link>
          )}

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-blue-600"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden mt-2 bg-white border-t border-gray-100 shadow-md px-8 py-6 text-gray-800"
        >
          <ul className="space-y-4">
            {[
              { label: "Home", link: "/home" },
              { label: "About Us", link: "/AboutUs" },
              { label: "Help", link: "/Help" },
              { label: "Chats", link: "/chat" },
              { label: "Notifications", link: "/notifications" },
            ].map((item) => (
              <li key={item.label}>
                <Link
                  to={item.link}
                  className="block text-[16px] font-medium hover:text-blue-600 transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.nav>
      )}
    </header>
  );
}
