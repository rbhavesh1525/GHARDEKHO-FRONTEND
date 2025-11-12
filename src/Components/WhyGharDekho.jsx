import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { User, Building2, Heart, Award } from "lucide-react";
import { TestimonialsSection } from "./CompIndex";

export default function WhyGharDekho() {
  const [counts, setCounts] = useState({
    users: 0,
    properties: 0,
    families: 0,
    years: 0,
  });

  // Number animation effect
  useEffect(() => {
    const targets = {
      users: 50000,
      properties: 12500,
      families: 8000,
      years: 15,
    };
    const duration = 2000;
    const interval = 30;
    const steps = duration / interval;

    const timers = Object.keys(targets).map((key) => {
      let count = 0;
      const increment = targets[key] / steps;
      return setInterval(() => {
        count += increment;
        if (count >= targets[key]) {
          clearInterval(timers[key]);
          count = targets[key];
        }
        setCounts((prev) => ({ ...prev, [key]: Math.floor(count) }));
      }, interval);
    });

    return () => timers.forEach(clearInterval);
  }, []);

  const floatAnim = {
    y: [0, -10, 0],
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
    },
  };

  return (
    <>
    <section className="bg-gradient-to-b from-blue-50 to-white py-20 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side - Image with Floating Badge */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80"
              alt="House Model"
              className="rounded-3xl w-full h-[380px] object-cover"
            />
          </motion.div>

          {/* Floating satisfaction badge */}
          <motion.div
            animate={floatAnim}
            className="absolute bottom-6 right-8 bg-white shadow-lg rounded-2xl px-6 py-3 flex items-center gap-3"
          >
            <div className="bg-yellow-100 text-yellow-600 p-2 rounded-lg">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xl font-bold text-gray-900">98%</p>
              <p className="text-sm text-gray-500">Customer Satisfaction</p>
            </div>
          </motion.div>
        </div>

        {/* Right Side - Text and Stats */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Why Choose <span className="text-blue-600">Ghar Dekho</span>
          </motion.h2>

          <p className="text-gray-600 text-lg mb-10 max-w-xl">
            We’re committed to helping you find your dream home with exceptional
            service and a vast selection of properties.
          </p>

          <div className="grid grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all"
            >
              <User className="w-8 h-8 text-blue-600 mb-3" />
              <p className="text-3xl font-bold text-gray-900">
                {counts.users.toLocaleString()}+
              </p>
              <p className="text-gray-500 text-sm">Trusted Users</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all"
            >
              <Building2 className="w-8 h-8 text-orange-500 mb-3" />
              <p className="text-3xl font-bold text-gray-900">
                {counts.properties.toLocaleString()}+
              </p>
              <p className="text-gray-500 text-sm">Properties Listed</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all"
            >
              <Heart className="w-8 h-8 text-pink-600 mb-3" />
              <p className="text-3xl font-bold text-gray-900">
                {counts.families.toLocaleString()}+
              </p>
              <p className="text-gray-500 text-sm">Happy Families</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all"
            >
              <Award className="w-8 h-8 text-indigo-600 mb-3" />
              <p className="text-3xl font-bold text-gray-900">
                {counts.years}+
              </p>
              <p className="text-gray-500 text-sm">Years of Excellence</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
    <TestimonialsSection/>
    </>
  );
}
