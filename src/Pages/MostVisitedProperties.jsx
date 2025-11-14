import React, { useState } from "react";
import { mostVisitedProperties } from "../DummyData/MostVisitedProperties";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MapPin, Bed, Bath, Maximize } from "lucide-react";
import { useNavigate } from "react-router-dom";


export default function MostVisitedProperties() {
  const [filters, setFilters] = useState({
    area: "",
    budget: "",
    category: "",
    bhk: "",
  });
  const navigate = useNavigate();

  const [filteredData, setFilteredData] = useState(mostVisitedProperties);

  const applyFilters = () => {
    const result = mostVisitedProperties.filter((p) => {
      const matchArea = !filters.area || p.area >= Number(filters.area);
      const matchBudget = !filters.budget || p.priceValue <= Number(filters.budget);
      const matchCategory = !filters.category || p.category === filters.category;
      const matchBhk = !filters.bhk || p.bhk === filters.bhk;

      return matchArea && matchBudget && matchCategory && matchBhk;
    });
    setFilteredData(result);
  };

  // Price Formatter
  const formatPrice = (price) => {
    if (price >= 10000000) return `₹${(price / 10000000).toFixed(2)} Cr`;
    if (price >= 100000) return `₹${(price / 100000).toFixed(2)} L`;
    return `₹${price.toLocaleString()}`;
  };

  return (
    <div className="px-6 md:px-16 lg:px-24 py-10">

      {/* Heading */}
      <h2 className="text-3xl font-bold text-center mb-6">
        🔥 Most Visited Properties
      </h2>

      {/* FILTER SECTION */}
      <div className="bg-white shadow p-4 rounded-lg flex flex-wrap justify-center gap-7 items-center">
        <input
          type="number"
          placeholder="Min Area"
          value={filters.area}
          onChange={(e) => setFilters({ ...filters, area: e.target.value })}
          className="border p-2 rounded-md w-36"
        />
        <input
          type="number"
          placeholder="Max Budget"
          value={filters.budget}
          onChange={(e) => setFilters({ ...filters, budget: e.target.value })}
          className="border p-2 rounded-md w-36"
        />
        <select
          value={filters.category}
          onChange={(e) => setFilters({ ...filters, category: e.target.value })}
          className="border p-2 rounded-md w-36"
        >
          <option value="">Category</option>
          <option value="Rent">Rent</option>
          <option value="Buy">Buy</option>
        </select>
        <select
          value={filters.bhk}
          onChange={(e) => setFilters({ ...filters, bhk: e.target.value })}
          className="border p-2 rounded-md w-36"
        >
          <option value="">BHK</option>
          <option value="1BHK">1BHK</option>
          <option value="2BHK">2BHK</option>
          <option value="3BHK">3BHK</option>
          <option value="Villa">Villa</option>
        </select>

        <Button onClick={applyFilters} className="bg-blue-600 hover:bg-blue-700">
          Filter
        </Button>
      </div>

      {/* PROPERTY CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8 place-items-center">
        {filteredData.map((property) => (
         <motion.div
  key={property.id}
  whileHover={{ y: -6 }}
  className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 w-[360px]"
>
  {/* IMAGE */}
  <div className="relative h-60 overflow-hidden">
    <img
      src={property.image}
      alt={property.title}
      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
    />

    {/* Featured Badge */}
    {property.featured && (
      <span className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 text-xs font-semibold rounded-md shadow">
        Featured
      </span>
    )}

    {/* Heart Icon */}
    <button className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-100">
      <svg
        className="w-5 h-5 text-red-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 
                 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 
                 4.5 0 00-6.364 0z" />
      </svg>
    </button>

    {/* Property Type Tag */}
    <span className="absolute bottom-4 left-4 bg-blue-900 text-white text-xs px-3 py-1 rounded-md">
      {property.bhk}
    </span>
  </div>

  {/* CARD BODY */}
  <div className="p-5">

    {/* Title */}
    <h3 className="text-xl font-semibold text-gray-900 line-clamp-1">
      {property.title}
    </h3>

    {/* Location */}
    <div className="flex items-center text-gray-600 mt-1 mb-3">
      <MapPin className="w-4 h-4 mr-1" />
      <span className="text-sm line-clamp-1">{property.location}</span>
    </div>

    {/* Icons Row */}
    <div className="flex justify-start gap-6 text-sm text-gray-600 mb-4">
      <div className="flex items-center gap-1">
        <Bed className="w-4 h-4" /> 
        <span>{property.bedrooms} Beds</span>
      </div>

      <div className="flex items-center gap-1">
        <Bath className="w-4 h-4" />
        <span>{property.bathrooms} Baths</span>
      </div>

      <div className="flex items-center gap-1">
        <Maximize className="w-4 h-4" />
        <span>{property.area} sqft</span>
      </div>
    </div>

    {/* PRICE */}
    <div>
      <span className="text-3xl font-bold bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
        {formatPrice(property.priceValue)}
      </span>
    </div>

    {/* BUTTONS */}
    <div className="grid grid-cols-2 gap-3 mt-5">
      <Button   className="rounded-xl border-[2px] border-blue-900 text-blue-900 bg-white hover:bg-blue-50"
      onClick={()=>navigate(`/propertydetails?id=${property.id}`)}
      >
        View Details
      </Button>

      <Button className="bg-blue-900 hover:bg-blue-800 text-white rounded-xl">
        Contact
      </Button>
    </div>
  </div>
</motion.div>

        ))}
      </div>
    </div>
  );
}
