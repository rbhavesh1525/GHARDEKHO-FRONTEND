import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { propertyListings } from "../DummyData/PropertyListing";
import PropertyFilterSidebar from "../Components/PropertyFilterSidebar";
import TopNavBar from "../Components/TopNavbar";
import { Button } from "@/Components/ui/button";

function PropertyListingPage() {
  const { type } = useParams();
  const navigate = useNavigate();

  // Default should be ALL
  const [selectedType, setSelectedType] = useState("");
  const [budget, setBudget] = useState("");
  const [range, setRange] = useState(10);

  // 🔄 CLEAR ALL FILTERS
  const clearFilters = () => {
    setBudget("");
    setRange(10);
    setSelectedType("");
  };

  // 🧠 PROPERTY FILTER FUNCTION
  const filteredProperties = propertyListings.filter((p) => {
    const matchesType = !selectedType || p.type === selectedType;

    const priceNumber = parseInt(p.price.replace(/\D/g, ""));
    const matchesBudget = !budget || priceNumber <= parseInt(budget);

    const matchesDistance = parseInt(p.distance) <= range;

    return matchesType && matchesBudget && matchesDistance;
  });

  return (
    <>
      <TopNavBar />

      <div className="min-h-screen flex bg-gray-50 mt-17">

        {/* SIDEBAR */}
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
        <main className="flex-1 p-10 overflow-y-auto">

          {/* PAGE HEADING */}
          <h1 className="text-4xl font-bold text-[#0B2A55] mb-8 text-center">
            {selectedType ? (
              <span>
                <span className="text-[#FF6B1A]">{selectedType}</span> Properties
              </span>
            ) : (
              "All Properties"
            )}
          </h1>

          {/* PROPERTY GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {filteredProperties.length > 0 ? (
              filteredProperties.map((p) => (
                <div
                  key={p.id}
                  className="bg-white rounded-2xl border border-[#0B2A55]/20 shadow-md 
                             hover:shadow-xl transition-all cursor-pointer p-4 flex flex-col"
                >
                  {/* IMAGE */}
                  <div className="h-48 rounded-xl overflow-hidden mb-4">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>

                  {/* TITLE */}
                  <h2 className="text-xl font-semibold text-[#0B2A55] line-clamp-1">
                    {p.title}
                  </h2>

                  <p className="text-gray-600 text-sm mt-1">{p.location}</p>

                  {/* PRICE + AREA */}
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-[#0B2A55] font-bold text-lg">
                      {p.price}
                    </span>

                    <span className="text-gray-500 text-sm">{p.area}</span>
                  </div>

                  {/* DISTANCE */}
                  <p className="text-xs text-gray-500 mt-1 mb-4">
                    Distance: {p.distance}
                  </p>

                  {/* BUTTONS */}
                  <div className="grid grid-cols-2 gap-3 mt-auto pt-2">
                    <Button
                      className="border-[2px] border-[#0B2A55] text-[#0B2A55] 
                                 bg-white hover:bg-[#0B2A55]/10 rounded-xl cursor-pointer"
                      onClick={() => navigate(`/propertydetails?id=${p.id}`)}
                    >
                      View Details
                    </Button>

                    <Button
                      className="bg-blue-900 hover:bg-blue-950 text-white  
                                 rounded-xl cursor-pointer"
                    >
                      Contact
                    </Button>
                  </div>
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
