import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { mostVisitedProperties } from "../DummyData/MostVisitedProperties";
import { MapPin, Maximize, Zap, ArrowUpDown } from "lucide-react";
import { Button } from "@/Components/ui/button";
import { useNavigate } from "react-router-dom";
import { WhyGharDekho } from "@/Components/CompIndex";


export default function MostVisitedProperties() {
  const navigate = useNavigate();

  /* CAROUSEL SETTINGS */
  const carouselRef = useRef(null);
  const CARD_WIDTH = 370;
  const GAP = 36;
  const SCROLL = CARD_WIDTH + GAP;

  const [isHovered, setIsHovered] = useState(false);

  /* AUTO SLIDE */
  useEffect(() => {
    if (!carouselRef.current) return;

    let interval = setInterval(() => {
      if (!isHovered) {
        const c = carouselRef.current;

        c.scrollBy({ left: SCROLL, behavior: "smooth" });

        if (c.scrollLeft + c.clientWidth >= c.scrollWidth - SCROLL) {
          setTimeout(() => {
            c.scrollTo({ left: 0, behavior: "smooth" });
          }, 400);
        }
      }
    }, 2200);

    return () => clearInterval(interval);
  }, [isHovered]);

  /* ⭐ Insert Ad Cards */
  const dataWithAds = [];
  mostVisitedProperties.forEach((item, index) => {
    dataWithAds.push(item);
    if ((index + 1) % 3 === 0) {
      dataWithAds.push({ isAd: true, id: `ad-${index}` });
    }
  });

  /* PRICE FORMATTER */
  const formatPrice = (price) => {
    if (price >= 10000000) return `₹${(price / 10000000).toFixed(2)} Cr`;
    if (price >= 100000) return `₹${(price / 100000).toFixed(2)} L`;
    return `₹${price.toLocaleString()}`;
  };

  return (
    <>
    <div className="px-6 md:px-16 lg:px-36 py-16">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900">
          🔥 Most Visited Industrial Properties
        </h2>

        <button
          onClick={() => navigate("/allproperties")}
          className="text-blue-900 font-semibold underline hover:text-orange-600 text-lg"
        >
          Explore all properties →
        </button>
      </div>

      {/* CAROUSEL */}
      <div
        ref={carouselRef}
        className="flex gap-12 overflow-x-hidden relative py-2"
        style={{ scrollBehavior: "smooth" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {dataWithAds.map((item) => {
          /* AD CARD */
          if (item.isAd) {
            return (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.03 }}
                className="flex-shrink-0 w-[370px] h-[370px]
                bg-gradient-to-br from-orange-500 to-yellow-400 
                rounded-3xl shadow-xl p-6
                flex flex-col justify-center items-center text-white"
              >
                <h3 className="text-3xl font-extrabold drop-shadow">Sponsored Ad</h3>
                <p className="mt-3 text-center text-lg opacity-95">
                  Promote your industrial property here.
                  Reach 10,000+ verified buyers monthly.
                </p>
                <Button className="mt-6 bg-white text-orange-600 rounded-xl hover:bg-slate-100">
                  Promote Now
                </Button>
              </motion.div>
            );
          }

          const p = item;

          return (
            <motion.div
              key={p.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-3xl shadow-lg border border-blue-900/20 
              overflow-hidden cursor-pointer flex-shrink-0"
              style={{ width: `${CARD_WIDTH}px` }}
            >
              {/* IMAGE */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={p.images?.[0]}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />

                {p.featured && (
                  <span className="absolute top-4 left-4 bg-orange-500 text-white text-xs px-3 py-1 rounded-md shadow">
                    Featured
                  </span>
                )}
              </div>

              {/* BODY */}
              <div className="p-5">
                <h3 className="text-xl font-semibold text-blue-900 line-clamp-1">
                  {p.title}
                </h3>

                {/* LOCATION */}
                <div className="flex items-center text-gray-600 mt-1 mb-3">
                  <MapPin className="w-4 h-4 mr-1 text-orange-500" />
                  <span className="text-sm line-clamp-1">{p.location}</span>
                </div>

                {/* INDUSTRIAL DETAILS */}
                <div className="flex justify-start gap-6 text-sm text-gray-700 mb-4">

                  <div className="flex items-center gap-1">
                    <Maximize className="w-4 h-4 text-blue-900" />
                    <span>{p.builtUpArea}</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <Zap className="w-4 h-4 text-blue-900" />
                    <span>{p.powerLoad}</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <ArrowUpDown className="w-4 h-4 text-blue-900" />
                    <span>{p.height}</span>
                  </div>
                </div>

                {/* PRICE */}
                <span className="text-3xl font-bold bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
                  {formatPrice(p.priceValue)}
                </span>

                {/* BUTTONS */}
                <div className="grid grid-cols-2 gap-3 mt-5">
                  <Button
                    className="rounded-xl border-[2px] border-blue-900 text-blue-900 bg-white hover:bg-blue-50"
                    onClick={() => navigate(`/propertydetails?id=${p.id}`)}
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
    <WhyGharDekho />
    </>
  );
}
