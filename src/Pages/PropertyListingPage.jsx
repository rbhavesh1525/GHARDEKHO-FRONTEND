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

  // 🧠 Property Filters
  const filteredProperties = propertyListings.filter((p) => {
    const matchesType = !selectedType || p.type === selectedType;

    const priceNumber = parseInt(p.price.replace(/\D/g, ""));
    const matchesBudget =
      !budget || priceNumber <= parseInt(budget);

    const matchesDistance = parseInt(p.distance) <= range;

    return matchesType && matchesBudget && matchesDistance;
  });

  return (
    <>
      <TopNavBar />

      <div className="min-h-screen flex bg-gray-50 mt-20">
        
        {/* LEFT SIDEBAR */}
        <PropertyFilterSidebar
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          budget={budget}
          setBudget={setBudget}
          range={range}
          setRange={setRange}
          clearFilters={clearFilters}
        />

        {/* RIGHT CONTENT */}
        <main className="flex-1 p-8 overflow-y-auto">
          <h1 className="text-4xl font-bold text-blue-900 capitalize mb-8">
            {selectedType ? `${selectedType} Properties` : "All Properties"}
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredProperties.length > 0 ? (
              filteredProperties.map((p) => (
                <div
                  key={p.id}
                  className="bg-white rounded-2xl border border-blue-900/10 shadow-md 
                             hover:shadow-xl transition-all cursor-pointer p-4"
                >
                  {/* Image */}
                  <div className="h-44 rounded-xl overflow-hidden mb-4">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-semibold text-blue-900 line-clamp-1">
                    {p.title}
                  </h2>

                  <p className="text-gray-600 text-sm">{p.location}</p>

                  {/* PRICE + AREA */}
                  <div className="flex justify-between items-center mt-4 text-sm">
                    <span className="text-blue-900 font-bold text-lg">
                      {p.price}
                    </span>
                    <span className="text-gray-500">{p.area}</span>
                  </div>

                  {/* Distance */}
                  <p className="text-xs text-gray-500 mt-1">
                    Distance: {p.distance}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-gray-600 text-lg">No properties found.</p>
            )}
          </div>
        </main>
      </div>
    </>
  );
}

export default PropertyListingPage;
