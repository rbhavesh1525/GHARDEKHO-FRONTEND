import React from "react";

function PropertyFilterSidebar({
  selectedType,
  setSelectedType,
  budget,
  setBudget,
  range,
  setRange,
  clearFilters,
}) {
  const propertyTypes = [
    "1rk",
    "1room",
    "1bhk",
    "2bhk",
    "3bhk",
    "bungalow",
    "villa",
    "independent flat",
  ];

  return (
    <aside className="w-64 bg-white shadow-md p-6 border-r border-gray-200 sticky top-0 h-screen">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800">Filters</h2>
        <button
          onClick={clearFilters}
          className="text-sm text-blue-600 hover:text-blue-800 transition"
        >
          Clear
        </button>
      </div>

      {/* 🔹 Property Type (as cards/buttons) */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-600 mb-3">
          Property Type
        </h3>
        <div className="flex flex-wrap gap-2">
          {propertyTypes.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-3 py-1.5 rounded-lg border text-sm capitalize transition-all duration-200 ${
                selectedType === type
                  ? "bg-blue-600 text-white border-blue-600"
                  : "border-gray-300 hover:bg-blue-100 text-gray-700"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* 🔹 Budget Filter */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-600 mb-2">
          Max Budget (₹)
        </h3>
        <input
          type="number"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          placeholder="Enter amount"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-gray-700"
        />
      </div>

      {/* 🔹 Distance Range */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-600 mb-2">
          Distance (KM)
        </h3>
        <input
          type="range"
          min="1"
          max="20"
          value={range}
          onChange={(e) => setRange(e.target.value)}
          className="w-full accent-blue-600"
        />
        <p className="text-sm text-gray-600 mt-1">{range} km</p>
      </div>
    </aside>
  );
}

export default PropertyFilterSidebar;
