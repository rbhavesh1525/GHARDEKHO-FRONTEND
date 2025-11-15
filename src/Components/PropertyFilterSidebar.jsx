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
    <aside className="w-64 bg-white shadow-xl p-6 border-r border-blue-900/20 h-screen sticky top-16 rounded-r-2xl">

      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-2xl font-bold text-blue-900">Filters</h2>
        <button
          onClick={clearFilters}
          className="text-sm font-semibold text-orange-500 hover:text-orange-600 transition"
        >
          Clear
        </button>
      </div>

      {/* Property Type */}
      <div className="mb-8">
        <h3 className="text-sm font-semibold text-blue-900 mb-3">
          Property Type
        </h3>

        <div className="flex flex-wrap gap-2">
          {propertyTypes.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-3 py-1.5 rounded-lg text-sm capitalize border transition-all ${
                selectedType === type
                  ? "bg-blue-900 text-white border-blue-900 shadow-md"
                  : "border-gray-300 text-gray-700 hover:bg-blue-50"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Budget */}
      <div className="mb-8">
        <h3 className="text-sm font-semibold text-blue-900 mb-2">
          Max Budget (₹)
        </h3>
        <input
          type="number"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          placeholder="Enter amount"
          className="w-full px-3 py-2 border rounded-md text-gray-800 
                     border-blue-900/30 focus:ring-2 focus:ring-orange-500 
                     focus:outline-none shadow-sm"
        />
      </div>

      {/* Distance */}
      <div className="mb-2">
        <h3 className="text-sm font-semibold text-blue-900 mb-2">
          Distance (KM)
        </h3>
        <input
          type="range"
          min="1"
          max="20"
          value={range}
          onChange={(e) => setRange(e.target.value)}
          className="w-full accent-orange-500"
        />
        <p className="text-sm text-gray-700 mt-1 font-medium">
          {range} km
        </p>
      </div>
    </aside>
  );
}

export default PropertyFilterSidebar;
