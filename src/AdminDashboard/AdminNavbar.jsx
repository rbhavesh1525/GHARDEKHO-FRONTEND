import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, User, ChevronDown } from "lucide-react";

export default function AdminNavbar({ isLoggedIn = false, userRole = "user" }) {
  const [dropdown, setDropdown] = useState(false);
  const [mobile, setMobile] = useState(false);

  const menuItems = [
    { name: "Home", link: "/adminhome" },
    { name: "Help", link: "/adminHelp" },
    { name: "Post Property", link: "/adminPostProperty" },
  ];

  return (
    <header className="w-full bg-white shadow-md border-b border-blue-900/10 fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link to="/adminhome" className="flex items-center gap-1 cursor-pointer">
          <span className="text-2xl font-extrabold text-blue-900 tracking-tight">
            Ghar
          </span>
          <span className="text-2xl font-extrabold text-orange-500">
            Dekho
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.link}
              className="relative text-[16px] font-medium text-slate-700 hover:text-blue-900 transition group cursor-pointer"
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 h-[2px] bg-blue-900 rounded-full w-0 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

          {/* User Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdown(!dropdown)}
              className="flex items-center gap-2 text-slate-800 hover:text-blue-900 transition cursor-pointer"
            >
              <User className="w-6 h-6 bg-slate-200 p-1 rounded-full" />
              <ChevronDown className="w-4 h-4" />
            </button>

            {dropdown && (
              <div className="absolute right-0 mt-3 w-52 bg-white border border-blue-900/20 shadow-xl rounded-xl py-2 animate-fadeIn">
                <Link
                  to="/adminProfile"
                  className="block px-4 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-900 rounded-md"
                >
                  My Profile
                </Link>

                <Link
                  to="/adminsetting"
                  className="block px-4 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-900 rounded-md"
                >
                  Settings
                </Link>

                <button
                  className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 rounded-md"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMobile(!mobile)}>
          {mobile ? (
            <X className="h-7 w-7 text-blue-900" />
          ) : (
            <Menu className="h-7 w-7 text-blue-900" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobile && (
        <div className="md:hidden bg-white border-t border-blue-900/10 shadow-lg flex flex-col p-4 space-y-4 animate-slideDown">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.link}
              className="text-lg text-slate-700 hover:text-blue-900 transition"
            >
              {item.name}
            </Link>
          ))}

          <hr />

          <button className="flex items-center gap-2 text-red-600 text-lg hover:bg-red-50 px-3 py-2 rounded-md">
            Logout
          </button>
        </div>
      )}
    </header>
  );
}
