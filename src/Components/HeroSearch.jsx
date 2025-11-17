import React, { useState, useEffect } from "react";
import { Search, MapPin, Building2, Home, IndianRupee } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/Components/ui/button";

import Ad1 from "../assets/Images/GharDekho-BG.png";
import Ad2 from "../assets/Images/GharDekho-BG.png"; 
import Ad3 from "../assets/Images/GharDekho-BG.png";
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

  // ---- Advertisement Carousel ----
  const ads = [Ad1, Ad2, Ad3];
  const [currentAd, setCurrentAd] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAd((prev) => (prev + 1) % ads.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

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
    className="flex flex-wrap justify-center lg:justify-start gap-6 mt-6 lg:pl-36"
  >
    {tabs.map((tab) => (
      <button
        key={tab}
        onClick={() => setActiveTab(tab)}
        className={`text-[16px] pb-1 border-b-2 transition cursor-pointer ${
          activeTab === tab
            ? "text-orange-600 border-orange-500"
            : "text-gray-700 border-transparent hover:text-blue-900"
        }`}
      >
        {tab}
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

    {/* Property Type */}
    <div className="flex items-center gap-2 flex-[1] cursor-pointer">

      <Home className="text-orange-500 w-5 h-5" />
      <select
        className="bg-transparent outline-none cursor-pointer"
        value={searchData.propertyType}
        onChange={(e) => setSearchData({ ...searchData, propertyType: e.target.value })}
      >
        <option value="">Property Type</option>
        <option value="flat">Flat</option>
        <option value="villa">Villa</option>
        <option value="bungalow">Bungalow</option>
      </select>
    </div>

    <div className="hidden md:block w-px h-6 bg-gray-300" />

    {/* Budget */}
  <div className="flex items-center gap-2 flex-[1] cursor-pointer">

      <IndianRupee className="text-orange-500 w-5 h-5" />
      <select
        className="bg-transparent outline-none cursor-pointer"
        value={searchData.purpose}
        onChange={(e) =>
          setSearchData({ ...searchData, purpose: e.target.value })
        }
      >
        <option>Budget</option>
        <option>₹10k - ₹20k</option>
        <option>₹20k - ₹50k</option>
        <option>₹50k+</option>
      </select>
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


        {/* RIGHT SIDE AD CAROUSEL */}
       {/* RIGHT SIDE AD CAROUSEL (NOW COMPONENT) */}
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
