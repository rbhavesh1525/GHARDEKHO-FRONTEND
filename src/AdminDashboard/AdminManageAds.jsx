import React, { useState } from "react";
import { Search, SlidersHorizontal, ArrowDownUp, Megaphone } from "lucide-react";
import PostAdModal from "./PostAdModal";

export default function AdminManageAds() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-6">
      {/* TOP ROW: two stat cards on left + search area on the right */}
      <div className="grid grid-cols-[auto_auto_1fr] items-start gap-4">

        {/* CARD 1 */}
        <div className="bg-white rounded-xl border shadow-sm p-4 flex flex-col min-w-[300px]">
          <div className="flex items-center gap-2">
            <Megaphone className="text-orange-500" />
            <h3 className="text-sm font-semibold">Total Live Ads</h3>
          </div>
          <p className="text-2xl font-bold mt-2 text-orange-500">201</p>
          <p className="text-green-500 text-xs mt-2">+40% compared to last month</p>
        </div>

        {/* CARD 2 */}
        <div className="bg-white rounded-xl border shadow-sm p-4 flex flex-col min-w-[300px]">
          <div className="flex items-center gap-2">
            <Megaphone className="text-orange-500" />
            <h3 className="text-sm font-semibold">Ads Revenue</h3>
          </div>
          <p className="text-2xl font-bold mt-2 text-orange-500">20</p>
          <p className="text-green-500 text-xs mt-2">+40% compared to last month</p>
        </div>

        {/* SEARCH + POST BUTTONS COLUMN */}
        <div className="flex flex-col items-end space-y-3">
          {/* SEARCH ROW */}
          <div className="w-full max-w-[420px] flex items-center gap-3">
            {/* big rounded input (takes remaining width) */}
            <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 flex-1">
              <Search className="text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search Properties"
                className="bg-transparent outline-none ml-3 w-full text-sm"
              />
            </div>

            {/* circular orange search button */}
            <button
              type="button"
              className="bg-orange-500 hover:bg-orange-600 transition text-white rounded-full p-3 shadow"
              aria-label="search"
            >
              <Search className="w-4 h-4" />
            </button>
          </div>

          {/* BUTTONS ROW (below search) */}
          <div className="w-full max-w-[410px] flex items-center gap-4">
            {/* Post Ads — large orange */}
            <button
              onClick={() => setOpen(true)}
              className="bg-orange-500 text-white px-5 py-2 rounded-lg font-medium flex items-center gap-2 shadow"
            >
              <Megaphone className="w-4 h-4" />
              Post Ads
            </button>

            {/* Sort By */}
            <button className="border rounded-lg px-4 py-2 bg-white flex items-center gap-2 text-gray-700">
              <ArrowDownUp className="w-4 h-4 text-orange-500" />
              Sort By
            </button>

            {/* Filter */}
            <button className="border rounded-lg px-4 py-2 bg-white flex items-center gap-2 text-gray-700">
              <SlidersHorizontal className="w-4 h-4 text-orange-500" />
              Filter
            </button>
          </div>
        </div>
      </div>

      {/* Title + list area */}
      <h2 className="text-lg font-semibold mt-6 mb-4">Live Ads</h2>
      <div className="text-gray-400">No ads yet...</div>

      {/* Post ad modal */}
      <PostAdModal open={open} setOpen={setOpen} />
    </div>
  );
}
