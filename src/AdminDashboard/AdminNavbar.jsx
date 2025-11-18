import React from "react";
import { Search, Bell } from "lucide-react";

export default function AdminNavbar() {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <header
      className="
        fixed top-0 left-[260px] 
        w-[calc(100%-260px)] 
        bg-white border-b border-gray-200 z-50
      "
    >
      <div className="w-full px-6 py-4 flex items-center justify-between">

        {/* LEFT SIDE — Dashboard Name */}
        <div>
          <h1 className="text-xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-sm text-gray-500 -mt-1">{formattedDate}</p>
        </div>

        {/* RIGHT SIDE — Icons + Profile */}
        <div className="flex items-center gap-6">

          <Search className="w-6 h-6 text-orange-500 cursor-pointer hover:scale-110 transition" />

          <div className="relative">
            <Bell className="w-6 h-6 text-orange-500 cursor-pointer hover:scale-110 transition" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-600 rounded-full"></span>
          </div>

          <div className="flex items-center gap-3">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="profile"
              className="w-10 h-10 rounded-full object-cover"
            />

            <div>
              <p className="text-[15px] font-semibold text-gray-900">Aman Rathod</p>
              <p className="text-sm text-gray-500 -mt-1">Admin</p>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
}
