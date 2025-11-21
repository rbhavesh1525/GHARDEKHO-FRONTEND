import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import category1 from "../assets/Images/category1.jpg";
import category2 from "../assets/Images/category2.jpg";
import category3 from "../assets/Images/category3.jpg";
import category4 from "../assets/Images/category4.jpg";

import { PopularOwnerProperties, MostVisitedProperties } from "./PageIndex";

export default function PropertyCategories() {
  const data = [
    {
      title: "21090",
      subtitle: "Owner Properties",
      image: category1,
      link: "/owner-properties",
    },
    {
      title: "Projects",
      subtitle: "",
      image: category2,
      link: "/projects",
    },
    {
      title: "",
      subtitle: "",
      image: category3,
      link: "/offers",
    },
    {
      title: "7236",
      subtitle: "Budget Homes",
      image: category4,
      link: "/budget-homes",
    },
  ];

  return (
    <>
      <section className="w-full py-16">
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <h2 className="text-3xl font-semibold text-gray-900">
            We've got properties in Pune for everyone
          </h2>
          <div className="w-14 h-[3px] bg-red-500 mt-2 mb-10"></div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

           {data.map((item, index) => (
  <Link to={item.link} key={index}>
    <motion.div
      className="relative rounded-xl cursor-pointer shadow-md bg-gray-200"
    >
      {/* IMAGE ZOOM */}
      <motion.div
        className="w-full h-48 overflow-hidden"
        whileHover={{ scale: 1.2 }} // <- This is the key part!
        initial={{ scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <img
          src={item.image}
          alt=""
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* DARK GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

      {/* TEXT */}
      <div className="absolute bottom-4 left-4 text-white">
        <h3 className="text-2xl font-bold drop-shadow-md">{item.title}</h3>
        <p className="text-lg drop-shadow-md">{item.subtitle}</p>
        {index !== 2 && (
          <motion.div
            className="mt-1 flex items-center gap-1 text-sm underline"
            whileHover={{ x: 6 }}
            initial={{ x: 0 }}
            transition={{ duration: 0.3 }}
          >
            Explore
            <motion.span
              whileHover={{ x: 10 }}
              initial={{ x: 0 }}
              transition={{ duration: 0.3 }}
            >
              →
            </motion.span>
          </motion.div>
        )}
      </div>
    </motion.div>
  </Link>
))}


          </div>
        </div>
      </section>

      {/* Other Components */}
      <PopularOwnerProperties />
      <MostVisitedProperties />
    </>
  );
}
