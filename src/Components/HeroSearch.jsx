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
      className="relative flex flex-col items-center justify-center min-h-screen pt-32 pb-20 overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Soft Overlay */}
      <div className="absolute inset-0 bg-white/75 backdrop-blur-[2px]" />

      <div className="relative z-10 max-w-6xl mx-auto text-center px-6">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4"
        >
          Discover Your <span className="text-blue-700">Perfect Home</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-lg md:text-xl text-gray-700 mb-12 max-w-2xl mx-auto"
        >
          Search properties for rent or sale tailored to your preferred city,
          area, and lifestyle.
        </motion.p>

        {/* Search Card */}
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-white/95 shadow-xl rounded-3xl px-10 py-10 border border-gray-200 
                       max-w-5xl mx-auto backdrop-blur-md"
        >
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-end">

            {/* City */}
            <div>
              <label className="text-sm text-gray-700 font-semibold mb-2 block">
                City
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-4 h-5 w-5 text-blue-600" />
                <input
                  type="text"
                  placeholder="Enter city"
                  value={searchData.city}
                  onChange={(e) =>
                    setSearchData({ ...searchData, city: e.target.value })
                  }
                  className="w-full h-12 pl-11 pr-3 rounded-lg border border-gray-300 text-gray-900
                  focus:ring-2 focus:ring-blue-600 outline-none shadow-sm"
                />
              </div>
            </div>

            {/* Area */}
            <div>
              <label className="text-sm text-gray-700 font-semibold mb-2 block">
                Area
              </label>
              <div className="relative">
                <Building2 className="absolute left-3 top-4 h-5 w-5 text-blue-600" />
                <input
                  type="text"
                  placeholder="Enter area"
                  value={searchData.area}
                  onChange={(e) =>
                    setSearchData({ ...searchData, area: e.target.value })
                  }
                  className="w-full h-12 pl-11 pr-3 rounded-lg border border-gray-300 text-gray-900
                  focus:ring-2 focus:ring-blue-600 outline-none shadow-sm"
                />
              </div>
            </div>

            {/* Property Type */}
            <div>
              <label className="text-sm text-gray-700 font-semibold mb-2 block">
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
                className="w-full h-12 rounded-lg border border-gray-300 px-3 shadow-sm
                focus:ring-2 focus:ring-blue-600 outline-none"
              >
                <option value="">Select type</option>
                <option value="flat">Flat</option>
                <option value="villa">Villa</option>
                <option value="bungalow">Bungalow</option>
              </select>
            </div>

            {/* Purpose */}
            <div>
              <label className="text-sm text-gray-700 font-semibold mb-2 block">
                Looking For
              </label>
              <select
                value={searchData.purpose}
                onChange={(e) =>
                  setSearchData({ ...searchData, purpose: e.target.value })
                }
                className="w-full h-12 rounded-lg border border-gray-300 px-3 shadow-sm
                focus:ring-2 focus:ring-blue-600 outline-none"
              >
                <option value="">Rent or Sell</option>
                <option value="rent">Rent</option>
                <option value="sell">Sell</option>
              </select>
            </div>

            {/* Search Button */}
            <div className="pt-2">
              <Button
                onClick={handleSearch}
                className="h-12 w-full md:w-auto px-8 bg-blue-600 hover:bg-blue-700 text-white 
                font-semibold rounded-lg flex items-center justify-center gap-2 shadow-lg"
              >
                <Search className="h-5 w-5" />
                Search
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
