import React, { useState } from "react";
import { Search, MapPin, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  const [searchData, setSearchData] = useState({
    city: "",
    area: "",
    propertyType: "",
    purpose: "",
  });

  const handleSearch = () => {
    console.log(searchData);
  };

  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-screen pt-24 md:pt-28 pb-16 overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Soft overlay for readability */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-[3px]" />

      <div className="relative z-10 max-w-5xl mx-auto text-center px-4">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
        >
          Find Your <span className="text-blue-600">Dream Home</span>
        </motion.h1>

        <p className="text-gray-700 text-lg mb-10">
          Discover the perfect property for rent or sale in your desired
          location
        </p>

        {/* Search Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="bg-white/90 shadow-lg rounded-2xl px-6 py-8 border border-gray-100 max-w-4xl mx-auto backdrop-blur-md"
        >
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
            {/* City */}
            <div>
              <label className="text-sm text-gray-700 font-medium mb-1 block">
                City
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3.5 h-4 w-4 text-blue-500" />
                <input
                  type="text"
                  placeholder="Enter city"
                  value={searchData.city}
                  onChange={(e) =>
                    setSearchData({ ...searchData, city: e.target.value })
                  }
                  className="w-full h-10 pl-9 pr-3 rounded-md border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
            </div>

            {/* Area */}
            <div>
              <label className="text-sm text-gray-700 font-medium mb-1 block">
                Area
              </label>
              <div className="relative">
                <Building2 className="absolute left-3 top-3.5 h-4 w-4 text-blue-500" />
                <input
                  type="text"
                  placeholder="Enter area"
                  value={searchData.area}
                  onChange={(e) =>
                    setSearchData({ ...searchData, area: e.target.value })
                  }
                  className="w-full h-10 pl-9 pr-3 rounded-md border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
            </div>

            {/* Property Type */}
            <div>
              <label className="text-sm text-gray-700 font-medium mb-1 block">
                Property Type
              </label>
              <select
                value={searchData.propertyType}
                onChange={(e) =>
                  setSearchData({
                    ...searchData,
                    propertyType: e.target.value,
                  })
                }
                className="w-full h-10 rounded-md border border-gray-200 px-3 text-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="">Select type</option>
                <option value="flat">Flat</option>
                <option value="villa">Villa</option>
                <option value="bungalow">Bungalow</option>
              </select>
            </div>

            {/* Purpose */}
            <div>
              <label className="text-sm text-gray-700 font-medium mb-1 block">
                Looking For
              </label>
              <select
                value={searchData.purpose}
                onChange={(e) =>
                  setSearchData({ ...searchData, purpose: e.target.value })
                }
                className="w-full h-10 rounded-md border border-gray-200 px-3 text-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="">Rent or Sell</option>
                <option value="rent">Rent</option>
                <option value="sell">Sell</option>
              </select>
            </div>

            {/* Search Button */}
            <div className="pt-6 md:pt-0">
              <Button
                onClick={handleSearch}
                className="h-10 w-full md:w-auto px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md flex items-center justify-center gap-2 shadow-md"
              >
                <Search className="h-4 w-4" />
                Search
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
