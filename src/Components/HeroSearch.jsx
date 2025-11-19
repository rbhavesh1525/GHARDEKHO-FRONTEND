import React, { useState, useEffect } from "react";
import { Search, MapPin, Building2, Home, IndianRupee } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/Components/ui/button";


import LandingPageAdd from "../Pages/LandingPageAdd";



export default function HeroSection() {
  const tabs = ["Buy", "Rent", "PG","New Projects", "Plot", "Commercial", "Post Free Property Ad"];
  const [activeTab, setActiveTab] = useState("Buy");

  const [searchData, setSearchData] = useState({
    city: "",
    area: "",
    propertyType: "",
    purpose: "",
  });


  const [propertyMenu, setPropertyMenu] = useState(false);
const [budgetMenu, setBudgetMenu] = useState(false);

const propertyTypes = [
  "Open Spaces",
  "Buildings",
  "Residential",
  "Factories",
  "Godown",
];

const budgetOptions = [
  "₹10k - ₹20k",
  "₹20k - ₹50k",
  "₹50k - ₹1L",
  "₹1L+",
];

  // ---- Advertisement Carousel ----
 


 

  const handleSearch = () => {
    console.log(searchData);
  };

  return (
    <section className="w-full bg-white pt-28 pb-10 h-[50vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-start justify-between w-full gap-10">

        {/* LEFT SIDE CONTENT */}
       {/* LEFT SIDE CONTENT */}
<div className="w-full lg:w-[75%] flex flex-col 
     items-center lg:items-start 
     lg:pl-16 pt-5">


  {/* Heading */}
  <motion.h1
    initial={{ opacity: 0, y: 25 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    className="text-3xl md:text-4xl font-extrabold text-blue-900 text-center lg:text-left lg:pl-46"
  >
    Discover Your <span className="text-orange-500">Perfect Home</span>
  </motion.h1>

  {/* Tagline */}
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9 }}
    className="text-gray-700 text-base md:text-lg mt-3 text-center lg:text-left max-w-full lg:pl-26"
  >
    Search properties for rent or sale tailored to your preferred city, area, and lifestyle.
  </motion.p>

  {/* Tabs */}
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="flex flex-wrap justify-center lg:justify-start gap-6 mt-6 lg:pl-26"
  >
  {tabs.map((tab) => (
  <button
    key={tab}
    className="relative group text-[16px] cursor-pointer px-1 font-medium"
  >
    {/* Text */}
    <span
      className="
        relative z-10 
        text-blue-900 
        transition-all duration-300 
        group-hover:text-orange-500
      "
    >
      {tab}
    </span>

    {/* Underline Animation */}
    <span
      className="
        absolute left-0 -bottom-1 
        h-[3px] rounded-full 
        bg-orange-500 
        w-0 
        transition-all duration-300 
        group-hover:w-full
      "
    ></span>
  </button>
))}


  </motion.div>

  {/* SEARCH BAR */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="
      w-full 
      bg-white 
      shadow-xl 
      border-2 border-blue-600 
      rounded-full 
      px-6 py-4 
      mt-3 
      flex flex-col md:flex-row 
      items-center 
      gap-12
    "
  >
    {/* City */}
    <div className="flex items-center gap-2 flex-[2] cursor-pointer">

      <MapPin className="text-orange-500 w-5 h-5" />
      <input
        type="text"
        placeholder="Enter City, Locality, Project  "
        value={searchData.city}
        onChange={(e) => setSearchData({ ...searchData, city: e.target.value })}
        className="w-full outline-none text-gray-700"
      />
    </div>

    <div className="hidden md:block w-px h-6 bg-gray-300" />

    <div className="relative">
  <div
    className="flex items-center gap-2 cursor-pointer"
    onClick={() => setPropertyMenu(!propertyMenu)}
  >
    <Home className="text-orange-500 w-5 h-5" />
    <span>{searchData.propertyType || "Property Type"}</span>
  </div>

  {propertyMenu && (
    <div className="absolute bg-white border shadow-xl rounded-xl p-4 top-10 left-0 w-72 z-50 cursor-pointer">

      {/* Close Button */}
      <div className="flex justify-between items-center mb-3">
        
        <button className="cursor-pointer" onClick={() => setPropertyMenu(false)}>✕</button>
      </div>

      {/* Pills */}
      <div className="grid grid-cols-2 gap-3">
        {propertyTypes.map((type) => (
          <button
            key={type}
            onClick={() => {
              setSearchData({ ...searchData, propertyType: type });
              setPropertyMenu(false);
            }}
            className={`px-3 py-2 rounded-xl border transition 
              ${
                searchData.propertyType === type
                  ? "bg-orange-100 border-orange-500 font-semibold"
                  : "border-gray-300 hover:bg-gray-100"
              }`}
          >
            {type}
          </button>
        ))}
      </div>

    </div>
  )}
</div>

    <div className="hidden md:block w-px h-6 bg-gray-300" />

    {/* Budget */}
 <div className="relative">
  <div
    className="flex items-center gap-2 cursor-pointer"
    onClick={() => setBudgetMenu(!budgetMenu)}
  >
    <IndianRupee className="text-orange-500 w-5 h-5" />
    <span>{searchData.purpose || "Budget"}</span>
  </div>

  {budgetMenu && (
    <div className="absolute bg-white border shadow-xl rounded-xl p-4 top-10 left-0 w-72 z-50 cursor-pointer">

      <div className="flex justify-between items-center mb-3 cursor-pointer">

        <button className="cursor-pointer" onClick={() => setBudgetMenu(false)}>✕</button>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {budgetOptions.map((b) => (
          <button
            key={b}
            onClick={() => {
              setSearchData({ ...searchData, purpose: b });
              setBudgetMenu(false);
            }}
            className={`px-3 py-2 rounded-xl border transition 
              ${
                searchData.purpose === b
                  ? "bg-orange-100 border-orange-500 font-semibold"
                  : "border-gray-300 hover:bg-gray-100"
              }`}
          >
            {b}
          </button>
        ))}
      </div>

    </div>
  )}
</div>


    {/* SEARCH BUTTON */}
    <Button
      onClick={handleSearch}
      className="bg-orange-500 hover:bg-orange-600 text-white px-7 py-3 rounded-full flex items-center gap-2 cursor-pointer"
    >
      <Search className="w-5 h-5 text-white" />
      Search
    </Button>
  </motion.div>
</div>


      
{/* RIGHT SIDE AD CAROUSEL (Render Component Instead of Hardcoded Image) */}
<motion.div
  initial={{ opacity: 0, x: 40 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="w-full lg:w-[20%] cursor-pointer pt-4"
>
  <LandingPageAdd />
</motion.div>


      </div>
    </section>
  );
}
