import React from "react";
import { motion } from "framer-motion";
import { User, Building2, Heart, Award } from "lucide-react";
import { TestimonialsSection } from "./CompIndex";
import { MostVisitedProperties } from "@/Pages/PageIndex";
import image from "../assets/Images/GharDekho-Bg.png"

export default function WhyGharDekho() {
  // STATIC VALUES – YOU CAN CHANGE THEM
  const counts = {
    users: "50,000",
    properties: "12,500",
    families: "8,000",
    years: "15",
  };

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

          {/* LEFT SIDE – STATIC IMAGE (DOWNLOAD IMAGE HERE) */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={image}  
                alt="House Model"
                className="rounded-3xl w-full h-[380px] object-cover"
              />
            </div>

            {/* Floating Satisfaction Badge */}
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

          {/* RIGHT SIDE – STATIC NUMBERS */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-blue-600">Ghar Dekho</span>
            </h2>

            <p className="text-gray-600 text-lg mb-10 max-w-xl">
              We’re committed to helping you find your dream home with exceptional service
              and a vast selection of properties.
            </p>

            <div className="grid grid-cols-2 gap-6">

              {/* Card 1 */}
              <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all">
                <User className="w-8 h-8 text-blue-600 mb-3" />
                <p className="text-3xl font-bold text-gray-900">{counts.users}+</p>
                <p className="text-gray-500 text-sm">Trusted Users</p>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all">
                <Building2 className="w-8 h-8 text-orange-500 mb-3" />
                <p className="text-3xl font-bold text-gray-900">{counts.properties}+</p>
                <p className="text-gray-500 text-sm">Properties Listed</p>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all">
                <Heart className="w-8 h-8 text-pink-600 mb-3" />
                <p className="text-3xl font-bold text-gray-900">{counts.families}+</p>
                <p className="text-gray-500 text-sm">Happy Families</p>
              </div>

              {/* Card 4 */}
              <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all">
                <Award className="w-8 h-8 text-indigo-600 mb-3" />
                <p className="text-3xl font-bold text-gray-900">{counts.years}+</p>
                <p className="text-gray-500 text-sm">Years of Excellence</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <MostVisitedProperties />
      <TestimonialsSection />
    </>
  );
}
