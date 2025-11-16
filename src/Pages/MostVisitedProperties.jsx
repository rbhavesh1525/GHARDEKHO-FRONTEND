import React, { useState } from "react";
import { mostVisitedProperties } from "../DummyData/MostVisitedProperties";
import { Button } from "@/Components/ui/button";
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

  const formatPrice = (price) => {
    if (price >= 10000000) return `₹${(price / 10000000).toFixed(2)} Cr`;
    if (price >= 100000) return `₹${(price / 100000).toFixed(2)} L`;
    return `₹${price.toLocaleString()}`;
  };

  // ⭐ Create an array with ads injected after every 3 properties
  const dataWithAds = [];
  filteredData.forEach((item, index) => {
    dataWithAds.push(item);

    if ((index + 1) % 3 === 0) {
      dataWithAds.push({ isAd: true, id: `ad-${index}` });
    }
  });

  return (
    <div className="px-6 md:px-16 lg:px-24 py-10">

      <h2 className="text-3xl font-bold text-center mb-6 text-blue-900">
        🔥 Most Visited Properties
      </h2>

      {/* Filters */}
      <div className="bg-white shadow border border-blue-900/20 p-4 rounded-lg flex flex-wrap justify-center gap-7 items-center">
        {/* Inputs same as before... */}
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8 place-items-center">
        
        {dataWithAds.map((item) => {
          
          if (item.isAd) {
            return (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.02 }}
                className="w-[360px] h-[360px] bg-gradient-to-br from-orange-500 to-yellow-400 
                text-white rounded-3xl shadow-xl flex flex-col justify-center items-center p-6"
              >
                <h3 className="text-3xl font-extrabold drop-shadow">
                  Sponsored Ad
                </h3>
                <p className="mt-3 text-center text-lg opacity-90">
                  Advertise your property here.  
                  Reach 10,000+ buyers monthly.
                </p>

                <Button className="mt-6 bg-white text-orange-600 font-semibold rounded-xl hover:bg-slate-100">
                  Promote Now
                </Button>
              </motion.div>
            );
          }

          const property = item;
          return (
            <motion.div
              key={property.id}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl 
              transition-all duration-300 w-[360px] border border-blue-900/20"
            >
              {/* IMAGE */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />

                {property.featured && (
                  <span className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 text-xs font-semibold rounded-md shadow">
                    Featured
                  </span>
                )}

                <span className="absolute bottom-4 left-4 bg-blue-900 text-white text-xs px-3 py-1 rounded-md">
                  {property.bhk}
                </span>
              </div>

              {/* CARD BODY */}
              <div className="p-5">
                <h3 className="text-xl font-semibold text-blue-900 line-clamp-1">
                  {property.title}
                </h3>

                <div className="flex items-center text-gray-600 mt-1 mb-3">
                  <MapPin className="w-4 h-4 mr-1 text-orange-500" />
                  <span className="text-sm line-clamp-1">{property.location}</span>
                </div>

                {/* Icons row */}
                <div className="flex justify-start gap-6 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <Bed className="w-4 h-4 text-blue-900" />
                    <span>{property.bedrooms} Beds</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <Bath className="w-4 h-4 text-blue-900" />
                    <span>{property.bathrooms} Baths</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <Maximize className="w-4 h-4 text-blue-900" />
                    <span>{property.area} sqft</span>
                  </div>
                </div>

                <div>
                  <span className="text-3xl font-bold bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
                    {formatPrice(property.priceValue)}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-5">
                  <Button
                    className="rounded-xl border-[2px] border-blue-900 text-blue-900 bg-white hover:bg-blue-50"
                    onClick={() => navigate(`/propertydetails?id=${property.id}`)}
                  >
                    View Details
                  </Button>

                  <Button className="bg-blue-900 hover:bg-blue-800 text-white rounded-xl">
                    Contact
                  </Button>
                </div>
              </div>
            </motion.div>
          );
        })}

      </div>
    </div>
  );
}
