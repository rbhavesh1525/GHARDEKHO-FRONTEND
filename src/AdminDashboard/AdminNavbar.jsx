import React, { useState, useRef, useEffect } from "react";
import { Search, Bell, ChevronDown, LogOut, HelpCircle, Settings } from "lucide-react";

export default function AdminNavbar() {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef();

  // CLOSE DROPDOWN WHEN CLICKED OUTSIDE
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenMenu(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header
      className="
        fixed top-0 left-[260px] 
        w-[calc(100%-260px)] 
        bg-white border-b border-gray-200 z-50
      "
    >
      <div className="w-full px-6 py-4 flex items-center justify-between">

        {/* LEFT SIDE */}
        <div>
          <h1 className="text-xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-sm text-gray-500 -mt-1">{formattedDate}</p>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-6">

          <Search className="w-6 h-6 text-orange-500 cursor-pointer hover:scale-110 transition" />

          <div className="relative">
            <Bell className="w-6 h-6 text-orange-500 cursor-pointer hover:scale-110 transition" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-600 rounded-full"></span>
          </div>

          {/* PROFILE SECTION */}
          <div className="relative" ref={menuRef}>
            <div
              onClick={() => setOpenMenu(!openMenu)}
              className="flex items-center gap-3 cursor-pointer hover:opacity-90 transition"
            >
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="profile"
                className="w-10 h-10 rounded-full object-cover border border-orange-500"
              />

              <div className="text-right">
                <p className="text-[15px] font-semibold text-gray-900">Aman Rathod</p>
                <p className="text-sm text-gray-500 -mt-1">Admin</p>
              </div>

              <ChevronDown
                className={`w-5 h-5 text-gray-700 transition ${
                  openMenu ? "rotate-180" : ""
                }`}
              />
            </div>

            {/* DROPDOWN MENU */}
            {openMenu && (
              <div
                className="absolute right-0 mt-3 w-48 bg-white rounded-xl shadow-xl border border-gray-200 animate-slideDown origin-top-right"
              >
                <ul className="py-2">

                  {/* SETTINGS */}
                  <li className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 cursor-pointer transition">
                    <Settings className="w-4 h-4" />
                    Settings
                  </li>

                  {/* HELP */}
                  <li className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 cursor-pointer transition">
                    <HelpCircle className="w-4 h-4" />
                    Help
                  </li>

                  <div className="my-1 border-t border-gray-200"></div>

                  {/* LOGOUT */}
                  <li className="flex items-center gap-3 px-4 py-2 text-red-600 hover:bg-red-50 cursor-pointer transition">
                    <LogOut className="w-4 h-4" />
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

      </div>
    </header>
  );
}
