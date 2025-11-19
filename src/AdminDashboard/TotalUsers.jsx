import React from "react";
import {
  Search,
  SlidersHorizontal,
  ArrowDownUp,
  Users,
  UserCheck
} from "lucide-react";
import TotalUsersList from "./TotalUsersList";

export default function TotalUsersTopBar() {
  return (
    <div className="mb-6 border-amber-700">

      {/* GRID → 2 cards + search area */}
      <div className="grid grid-cols-[auto_auto_1fr] items-start gap-5">

        {/* --- CARD 1: TOTAL USERS --- */}
        <div className="bg-white shadow-sm border border-blue-900/10 rounded-xl px-5 py-4 min-w-[300px]">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-orange-500" />
            <p className="text-sm font-semibold text-gray-700">Total Users</p>
          </div>

          <p className="text-xl font-bold text-orange-500 mt-1">201</p>
          <p className="text-green-500 text-xs mt-1">
            +40% compared to last month
          </p>
        </div>

        {/* --- CARD 2: ACTIVE USERS --- */}
        <div className="bg-white shadow-sm border border-blue-900/10 rounded-xl px-5 py-4 min-w-[300px]">
          <div className="flex items-center gap-2">
            <UserCheck className="w-5 h-5 text-orange-500" />
            <p className="text-sm font-semibold text-gray-700">
              Active Users
            </p>
          </div>

          <p className="text-xl font-bold text-orange-500 mt-1">20</p>
          <p className="text-green-500 text-xs mt-1">
            +40% compared to last month
          </p>
        </div>

        {/* --- SEARCH + SORT + FILTER --- */}
        <div className="flex flex-col items-end space-y-3 w-full">

          {/* SEARCH INPUT ROW */}
          <div className="w-full max-w-[420px] flex items-center gap-3">
            <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 flex-1">
              <Search className="text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search Users"
                className="bg-transparent outline-none ml-3 w-full text-sm"
              />
            </div>

            <button className="bg-orange-500 hover:bg-orange-600 transition text-white rounded-full p-3 shadow cursor-pointer">
              <Search className="w-4 h-4" />
            </button>
          </div>

          {/* BUTTON ROW */}
          <div className="w-full max-w-[410px] flex items-center gap-3">

            {/* SORT */}
            <button className="border border-gray-200 text-gray-700 rounded-lg px-4 py-2 bg-white flex items-center gap-2 cursor-pointer">
              <ArrowDownUp className="w-4 h-4 text-orange-500" />
              Sort By
            </button>

            {/* FILTER */}
            <button className="border border-gray-200 text-gray-700 rounded-lg px-4 py-2 bg-white flex items-center gap-2 cursor-pointer">
              <SlidersHorizontal className="w-4 h-4 text-orange-500" />
              Filter
            </button>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <TotalUsersList />
      </div>
    </div>
  );
}
