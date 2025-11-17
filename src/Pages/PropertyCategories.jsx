import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import category1 from "../assets/Images/category1.jpg";
import category2 from "../assets/Images/category2.jpg"
import category3 from "../assets/Images/category3.jpg"
import category4 from "../assets/Images/category4.jpg"

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
      image:category2,
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
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-semibold text-gray-900">
          We've got properties in Pune for everyone
        </h2>
        <div className="w-14 h-[3px] bg-red-500 mt-2 mb-10"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
{data.map((item, index) => (
  <Link to={item.link} key={index}>
    <div className="relative rounded-xl overflow-hidden cursor-pointer shadow-md bg-gray-200 group">

      {/* IMAGE ONLY ZOOMS */}
      <div className="w-full h-48 bg-gray-300 overflow-hidden">
        <motion.img
          src={item.image}
          alt=""
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 0.4 }}
        />
      </div>

      {/* BLACK GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

      {/* TEXT FIXED */}
      <div className="absolute bottom-4 left-4 text-white select-none">
        <h3 className="text-2xl font-bold drop-shadow-md">
          {item.title}
        </h3>
        <p className="text-lg drop-shadow-md">
          {item.subtitle}
        </p>

        {/* ONLY SHOW EXPLORE IF NOT CARD 3 */}
        {index !== 2 && (
          <div className="mt-1 flex items-center gap-1 text-sm underline">
            Explore{" "}
            <motion.span
              whileHover={{ x: 6 }}
              transition={{ duration: 0.3 }}
              className="inline-block"
            >
              →
            </motion.span>
          </div>
        )}
      </div>

    </div>
  </Link>
))}


        </div>
      </div>
    </section>
  );
}
