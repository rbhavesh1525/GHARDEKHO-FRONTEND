import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { propertyListings } from "../DummyData/PropertyListing";
import PropertyFilterSidebar from "../Components/PropertyFilterSideBar";
import TopNavBar from "../Components/TopNavbar";

function PropertyListingPage() {
  const { type } = useParams();
  const [budget, setBudget] = useState("");
  const [selectedType, setSelectedType] = useState(type);
  const [range, setRange] = useState(10);

  // 🔄 Clear All Filters
  const clearFilters = () => {
    setBudget("");
    setRange(10);
    setSelectedType(type);
  };

  // 🧠 Filter logic
  const filteredProperties = propertyListings.filter((p) => {
    const matchesType = !selectedType || p.type === selectedType;
    const matchesBudget =
      !budget || parseInt(p.price.replace(/\D/g, "")) <= parseInt(budget);
    const matchesDistance = parseInt(p.distance) <= range;
    return matchesType && matchesBudget && matchesDistance;
  });

  return (
    <>
    <TopNavBar/>
    <div className="min-h-screen flex bg-gray-50 pt-16">
      {/* Sidebar */}
      <PropertyFilterSidebar
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        budget={budget}
        setBudget={setBudget}
        range={range}
        setRange={setRange}
        clearFilters={clearFilters}
      />

      {/* Property Cards */}
      <main className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold text-gray-800 capitalize mb-8">
          {selectedType ? `${selectedType} Properties` : "All Properties"}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.length > 0 ? (
            filteredProperties.map((p) => (
              <div
                key={p.id}
                className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 cursor-pointer"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="rounded-md h-44 w-full object-cover mb-3"
                />
                <h2 className="text-lg font-semibold text-gray-800">
                  {p.title}
                </h2>
                <p className="text-gray-500 text-sm">{p.location}</p>

                <div className="flex justify-between items-center mt-3 text-sm">
                  <span className="text-blue-600 font-bold">{p.price}</span>
                  <span className="text-gray-500">{p.area}</span>
                </div>
                <p className="text-xs text-gray-400 mt-1">
                  Distance: {p.distance}
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No properties found.</p>
          )}
        </div>
      </main>
    </div>
    </>
  );
}

export default PropertyListingPage;
