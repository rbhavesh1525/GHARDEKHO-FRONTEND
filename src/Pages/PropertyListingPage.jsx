import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { propertyListings } from "../DummyData/PropertyListing";
import PropertyFilterSidebar from "../Components/PropertyFilterSidebar";
import TopNavBar from "../Components/TopNavbar";
import { Button } from "@/Components/ui/button";

function PropertyListingPage() {
  const navigate = useNavigate();
  const { type } = useParams();

  // DEFAULT FILTERS
  const [selectedType, setSelectedType] = useState(type || "");
  const [budget, setBudget] = useState("");
  const [minArea, setMinArea] = useState("");
  const [selectedFacilities, setSelectedFacilities] = useState([]);

  // ⭐ EXTRACT NUMERIC PRICE FROM RANGE STRING
  const extractPriceNumber = (range) => {
    if (!range) return 0;

    const match = range.match(/\d[\d,]*/);
    return match ? parseInt(match[0].replace(/,/g, "")) : 0;
  };

  // ⭐ EXTRACT NUMERIC AREA FROM RANGE
  const extractAreaNumber = (range) => {
    if (!range) return 0;

    const match = range.match(/\d[\d,]*/);
    return match ? parseInt(match[0].replace(/,/g, "")) : 0;
  };

  // ⭐ CLEAR ALL FILTERS
  const clearFilters = () => {
    setSelectedType("");
    setBudget("");
    setMinArea("");
    setSelectedFacilities([]);
  };

  // ⭐ FILTER PROPERTIES
  const filteredProperties = propertyListings.filter((p) => {
    const matchesType = !selectedType || p.type === selectedType;

    const lowestPrice = extractPriceNumber(p.priceRange);
    const matchesBudget = !budget || lowestPrice <= parseInt(budget);

    const lowestArea = extractAreaNumber(p.areaRange);
    const matchesArea = !minArea || lowestArea >= parseInt(minArea);

    const matchesFacilities =
      selectedFacilities.length === 0 ||
      selectedFacilities.every((f) => p.facilities.includes(f));

    return matchesType && matchesBudget && matchesArea && matchesFacilities;
  });

  return (
    <>
      <TopNavBar />

      <div className="min-h-screen flex bg-gray-50 mt-17">

        {/* FILTER SIDEBAR */}
        <PropertyFilterSidebar
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          budget={budget}
          setBudget={setBudget}
          minArea={minArea}
          setMinArea={setMinArea}
          selectedFacilities={selectedFacilities}
          setSelectedFacilities={setSelectedFacilities}
          clearFilters={clearFilters}
        />

        {/* MAIN CONTENT */}
        <main className="flex-1 p-10 overflow-y-auto">

          {/* PAGE TITLE */}
          <h1 className="text-4xl font-bold text-[#0B2A55] mb-8 text-center">
            {selectedType ? (
              <>
                <span className="text-[#FF6B1A] capitalize">{selectedType}</span>{" "}
                Properties
              </>
            ) : (
              "All Industrial Properties"
            )}
          </h1>

          {/* LISTINGS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {filteredProperties.length > 0 ? (
              filteredProperties.map((p) => (
                <div
                  key={p.id}
                  className="bg-white rounded-2xl border border-[#0B2A55]/20 shadow-md 
                             hover:shadow-xl transition-all cursor-pointer p-4 flex flex-col"
                  onClick={() => navigate(`/propertydetails?id=${p.id}`)}
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

                  {/* AREA */}
                  <p className="text-gray-600 text-sm mt-1">
                    {p.areaRange}
                  </p>

                  {/* PRICE */}
                  <p className="text-[#0B2A55] font-bold text-lg mt-3">
                    {p.priceRange}
                  </p>

                  {/* BUTTONS */}
                  <div className="grid grid-cols-2 gap-3 mt-auto pt-3">
                    <Button
                      className="border-[2px] border-[#0B2A55] text-[#0B2A55] 
                                 bg-white hover:bg-[#0B2A55]/10 rounded-xl cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/propertydetails?id=${p.id}`);
                      }}
                    >
                      View Details
                    </Button>

                    <Button
                      className="bg-blue-900 hover:bg-blue-950 text-white rounded-xl cursor-pointer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Contact
                    </Button>
                  </div>

                </div>
              ))
            ) : (
              <p className="text-gray-600 text-lg">No industrial properties found.</p>
            )}
          </div>
        </main>
      </div>
    </>
  );
}

export default PropertyListingPage;
