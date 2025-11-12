import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { WhyGharDekho } from "@/Components/CompIndex";
import { Home, Building, Building2, Castle, Warehouse } from "lucide-react";


// 🏠 Property categories (you can replace with dummyData later)
const categories = [
  {
    name: "1BHK",
    icon: Home,
    color: "from-blue-500 to-blue-600",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500",
  },
  {
    name: "2BHK",
    icon: Building,
    color: "from-indigo-500 to-indigo-600",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500",
  },
  {
    name: "3BHK",
    icon: Building2,
    color: "from-purple-500 to-purple-600",
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=500",
  },
  {
    name: "Bungalow",
    icon: Warehouse,
    color: "from-amber-500 to-amber-600",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500",
  },
  {
    name: "Villa",
    icon: Castle,
    color: "from-rose-500 to-rose-600",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=500",
  },
];

export default function PropertyCategories() {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryName) => {
    navigate(`/properties/${categoryName.toLowerCase()}`);
  };

  return (
    <>

    <section className="py-20 px-6 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* 🔹 Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Browse by <span className="text-blue-600">Property Type</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Find your perfect home from our wide range of properties
          </p>
        </div>

        {/* 🔹 Property Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ duration: 0.3 }}
              onClick={() => handleCategoryClick(category.name)}
              className="group cursor-pointer"
            >
              {/* Card */}
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${category.image})` }}
                ></div>

                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-70 group-hover:opacity-80 transition-opacity duration-300`}
                ></div>

                {/* Card Content */}
                <div className="relative flex flex-col items-center justify-center h-full text-white text-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    <category.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                  <p className="text-sm opacity-90">Explore Properties</p>
                </div>

                {/* Subtle Border Hover Glow */}
                <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/30 rounded-2xl transition-all duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
        <WhyGharDekho/>
    </>
  );
}
