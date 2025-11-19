import React from "react";
import { Search, SlidersHorizontal, ArrowDownUp, Home, Building2 } from "lucide-react";
import TotalPropertiesList from "./TotalPropertiesList";

export default function TotalProperties({ onListProperty }) {
  return (
    <div className="mb-6">

      {/* --- TOP SECTION --- */}
      <div className="grid grid-cols-[auto_auto_1fr] items-start gap-5">

        {/* CARD: TOTAL PROPERTIES */}
        <div className="bg-white shadow-sm border border-blue-900/10 rounded-xl px-5 py-4 min-w-[300px]">
          <div className="flex items-center gap-2">
            <Building2 className="w-5 h-5 text-orange-500" />
            <p className="text-sm font-semibold text-gray-700">Total Properties</p>
          </div>
          <p className="text-xl font-bold text-orange-500 mt-1">201</p>
          <p className="text-green-500 text-xs mt-1">+40% compared to last month</p>
        </div>

        {/* CARD: NEW PROPERTIES */}
        <div className="bg-white shadow-sm border border-blue-900/10 rounded-xl px-5 py-4 min-w-[300px]">
          <div className="flex items-center gap-2">
            <Home className="w-5 h-5 text-orange-500" />
            <p className="text-sm font-semibold text-gray-700">New Properties</p>
          </div>
          <p className="text-xl font-bold text-orange-500 mt-1">20</p>
          <p className="text-green-500 text-xs mt-1">+40% compared to last month</p>
        </div>

        {/* SEARCH + ACTION BUTTONS */}
        <div className="flex flex-col items-end space-y-3 w-full">
          <div className="w-full max-w-[420px] flex items-center gap-3">
            <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 flex-1">
              <Search className="text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search Properties"
                className="bg-transparent outline-none ml-3 w-full text-sm"
              />
            </div>

            <button className="bg-orange-500 hover:bg-orange-600 transition text-white rounded-full p-3 shadow">
              <Search className="w-4 h-4" />
            </button>
          </div>

          <div className="w-full max-w-[410px] flex items-center gap-3">
            <button
              onClick={onListProperty}
              className="bg-orange-500 hover:bg-orange-600 transition text-white px-5 py-2 rounded-lg font-medium flex items-center gap-2 shadow"
            >
              <Home className="w-4 h-4" />
              List Property
            </button>

            <button className="border border-gray-200 text-gray-700 rounded-lg px-4 py-2 bg-white flex items-center gap-2">
              <ArrowDownUp className="w-4 h-4 text-orange-500" />
              Sort By
            </button>

            <button className="border border-gray-200 text-gray-700 rounded-lg px-4 py-2 bg-white flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-orange-500" />
              Filter
            </button>
          </div>
        </div>
      </div>

      {/* 🔥 LIST AREA BELOW TOP SECTION */}
      <div className="mt-8">
        <TotalPropertiesList />
      </div>

    </div>
  );
}
