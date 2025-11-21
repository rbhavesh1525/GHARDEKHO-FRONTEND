import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PopularPropertyOwnerData } from "../DummyData/PopularOwnerProperties";
import { MapPin, Image, Ruler, Map } from "lucide-react";
import { Button } from "@/Components/ui/button";
import { useNavigate } from "react-router-dom";

export default function PopularOwnerProperties() {
  const navigate = useNavigate();

  /* ROTATING HEADING */
  const rotatingWords = ["property", "factories", "lands", "projects"];
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  /* PERFECT CAROUSEL SETTINGS */
  const carouselRef = useRef(null);
  const CARD_WIDTH = 370;        // fixed final width
  const GAP = 46;                // tailwind gap-6 → 24px
  const SCROLL = CARD_WIDTH + GAP;
  const [isHovered, setIsHovered] = useState(false);

  /* AUTO SLIDER */
  useEffect(() => {
    if (!carouselRef.current) return;

    let interval = setInterval(() => {
      if (!isHovered) {
        carouselRef.current.scrollBy({ left: SCROLL, behavior: "smooth" });

        const c = carouselRef.current;
        if (c.scrollLeft + c.clientWidth >= c.scrollWidth - SCROLL) {
          setTimeout(() => {
            c.scrollTo({ left: 0, behavior: "smooth" });
          }, 400);
        }
      }
    }, 2200);

    return () => clearInterval(interval);
  }, [isHovered]);

  /* PRICE FORMATTER */
  const formatPrice = (price) => {
    if (price >= 10000000) return `₹${(price / 10000000).toFixed(2)} Cr`;
    if (price >= 100000) return `₹${(price / 100000).toFixed(2)} L`;
    return `₹${price.toLocaleString()}`;
  };

  return (
    <div className="px-6 md:px-16 lg:px-36 py-14">

      {/* 🔥 Rotating Heading */}
<div className="flex items-center justify-between">
  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 flex gap-2">
    <span>Amazing</span>

    {/* Dynamic auto width — no fixed size now */}
    <div className="relative inline-block h-10">
  
  {/* Invisible span to TAKE WIDTH of the current word */}
  <span className="opacity-0 font-bold">
    {rotatingWords[wordIndex]}
  </span>

  {/* Animated visible word */}
  <AnimatePresence mode="wait">
    <motion.span
      key={wordIndex}
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 40, opacity: 0 }}
      transition={{ duration: 0.45 }}
      className="absolute top-0 left-0 text-orange-500 font-bold whitespace-nowrap"
    >
      {rotatingWords[wordIndex]}
    </motion.span>
  </AnimatePresence>
</div>


    <span>for you</span>
  </div>

  {/* 🔥 Add animation + cursor pointer */}
  <button
    onClick={() => navigate("/allproperties")}
    className="text-blue-900 font-semibold underline text-lg cursor-pointer 
               hover:text-orange-600 transition-all hover:translate-x-1"
  >
    Explore all properties →
  </button>
</div>


      {/* 🔥 PERFECT CAROUSEL */}
      <div
        ref={carouselRef}
        className="flex gap-12 mt-12 overflow-x-hidden overflow-y-hidden relative"
        style={{ scrollBehavior: "smooth" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {PopularPropertyOwnerData.map((p) => (
          <motion.div
            key={p.id}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-3xl shadow-lg border border-blue-900/20 overflow-hidden
                       cursor-pointer flex-shrink-0"
            style={{ width: `${CARD_WIDTH}px` }}   // FIXED WIDTH
          >
            {/* Image */}
            <div className="relative h-56 overflow-hidden">
              <motion.img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.12 }}
                transition={{ duration: 0.4 }}
              />

              {p.featured && (
                <span className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 
                                 text-xs font-semibold rounded-md shadow">
                  Featured
                </span>
              )}

              <span className="absolute top-4 right-4 bg-black/60 text-white text-xs px-3 py-1 
                               rounded-md flex items-center gap-1">
                <Image className="w-3 h-3" /> {p.imagesCount}
              </span>
            </div>

            {/* Content */}
            <div className="px-4 py-5">
              <h3 className="text-xl font-semibold text-blue-900 line-clamp-1">
                {p.title}
              </h3>

              <div className="flex items-center text-gray-600 mt-1 mb-3">
                <MapPin className="w-4 h-4 mr-1 text-orange-500" />
                <span className="text-sm line-clamp-1">{p.location}</span>
              </div>

              <div className="flex flex-col gap-2 text-sm text-gray-700 mb-4">
                <div className="flex items-center gap-2">
                  <Ruler className="w-4 h-4 text-blue-900" />
                  <span className="font-semibold">Factory Size:</span>
                  {p.factorySize}
                </div>

                <div className="flex items-center gap-2">
                  <Map className="w-4 h-4 text-blue-900" />
                  <span className="font-semibold">Land Area:</span>
                  {p.landArea}
                </div>
              </div>

              <span className="text-3xl font-bold bg-gradient-to-r from-blue-900 to-blue-700 
                               bg-clip-text text-transparent">
                {formatPrice(p.priceValue)}
              </span>

              <div className="grid grid-cols-2 gap-3 mt-5">
                <Button
                  className="rounded-xl border-[2px] border-blue-900 text-blue-900 bg-white
                             hover:bg-blue-50 cursor-pointer"
                  onClick={() => navigate(`/propertydetails?id=${p.id}`)}
                >
                  View Details
                </Button>

               <Button
  className="bg-blue-900 hover:bg-blue-800 text-white rounded-xl cursor-pointer"
  onClick={() => navigate(`/propertydetails?id=${p.id}`)}
>
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
