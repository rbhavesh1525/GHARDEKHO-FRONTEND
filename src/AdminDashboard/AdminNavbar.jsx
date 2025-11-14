import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, User, ChevronDown } from "lucide-react";
import AdminSetting from "./AdminSetting";
import AdminProfile from "./AdminProfile";

export default function AdminNavbar({ isLoggedIn = false, userRole = "user" }) {
  const [dropdown, setDropdown] = useState(false);
  const [mobile, setMobile] = useState(false);

  const menuItems = [
    { name: "Home", link: "/adminhome" },
    { name: "Help", link: "/adminHelp" },
    { name: "Post Property", link: "/adminPostProperty" },
  ];

  return (
    <header className="w-full bg-white shadow-md border-b border-gray-200 fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link to="/adminhome" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-blue-600">Ghar</span>
          <span className="text-2xl font-bold text-orange-500">Dekho</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.link}
              className="relative text-[15px] font-medium text-gray-800 hover:text-blue-600 transition group cursor-pointer"
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

          {/* User Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdown(!dropdown)}
              className="flex items-center gap-2 text-gray-800 hover:text-blue-600 transition cursor-pointer"
            >
              <User className="w-5 h-5 bg-gray-200 p-1 rounded-full" />
              <ChevronDown className="w-4 h-4" />
            </button>

            {dropdown && (
              <div className="absolute right-0 mt-3 w-44 bg-white border shadow-md rounded-md py-2">

                <Link
                  to="/adminProfile"
                  className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  My Profile
                </Link>

                <Link
                  to="/adminsetting"
                  className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  Settings
                </Link>

               

                <button
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-600"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMobile(!mobile)}>
          {mobile ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobile && (
        <div className="md:hidden bg-white shadow-md border-t flex flex-col p-4 space-y-4">
          {menuItems.map((item) => (
            <Link key={item.name} to={item.link} className="text-lg">
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
