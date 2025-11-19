import React from "react";
import { X } from "lucide-react";

export default function PostAdModal({ open, setOpen }) {
  if (!open) return null;

  return (
    <div
      className="
        fixed inset-0 
        bg-black/30 
        backdrop-blur-sm
        flex justify-center items-center 
        z-50
        p-4
      "
    >
      <div
        className="
          bg-white 
          w-full max-w-[500px] 
          max-h-[85vh] 
          p-6 
          rounded-2xl 
          shadow-xl 
          relative 
          overflow-y-auto
        "
      >

        {/* CLOSE BUTTON */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 cursor-pointer"
        >
          <X size={22} />
        </button>

        <h2 className="text-xl font-semibold mb-5 text-gray-800">
          Post Advertisement
        </h2>

        <form className="flex flex-col gap-4 pb-5">

          {/* IMAGE UPLOAD */}
          <div>
            <label className="text-sm font-medium">Upload Image</label>
            <input
              type="file"
              accept="image/*"
              className="w-full mt-1 border rounded-lg px-3 py-2 cursor-pointer"
            />
          </div>

          {/* VIDEO UPLOAD */}
          <div>
            <label className="text-sm font-medium">Upload Video (Optional)</label>
            <input
              type="file"
              accept="video/*"
              className="w-full mt-1 border rounded-lg px-3 py-2 cursor-pointer"
            />
          </div>

          {/* AD DURATION */}
          <div>
            <label className="text-sm font-medium">Run Time (Days)</label>
            <input
              type="number"
              placeholder="Enter number of days"
              className="w-full mt-1 border rounded-lg px-3 py-2"
            />
          </div>

          {/* CATEGORY DROPDOWN */}
          <div>
            <label className="text-sm font-medium">Category</label>
            <select className="w-full mt-1 border rounded-lg px-3 py-2 cursor-pointer">
              <option>Sponsorship</option>
              <option>Promotional</option>
              <option>Personal</option>
            </select>
          </div>

          {/* PLACEMENT DROPDOWN */}
          <div>
            <label className="text-sm font-medium">Display Placement</label>
            <select className="w-full mt-1 border rounded-lg px-3 py-2 cursor-pointer">
              <option>Landing Page Banner</option>
              <option>Homepage Sidebar</option>
              <option>Inside Property Details</option>
              <option>Between Property Listings</option>
              <option>Popup Overlay Ad</option>
            </select>
          </div>

          {/* TITLE */}
          <div>
            <label className="text-sm font-medium">Ad Title</label>
            <input
              type="text"
              placeholder="Enter advertisement title"
              className="w-full mt-1 border rounded-lg px-3 py-2"
            />
          </div>

          {/* DESCRIPTION */}
          <div>
            <label className="text-sm font-medium">Description</label>
            <textarea
              rows={3}
              placeholder="Short description"
              className="w-full mt-1 border rounded-lg px-3 py-2"
            ></textarea>
          </div>

          {/* SUBMIT BUTTON */}
          <button
            className="
              w-full 
              bg-orange-500 
              text-white 
              py-2 
              rounded-lg 
              font-medium 
              hover:bg-orange-600 
              transition 
              cursor-pointer
            "
            type="submit"
          >
            Submit Advertisement
          </button>
        </form>
      </div>
    </div>
  );
}
