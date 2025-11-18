import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Building2, Layers } from "lucide-react";
import { Button } from "@/Components/ui/button";

import { ProjectsData } from "../DummyData/Projectsdata";
import ProjectFilterSidebar from "../Components/ProjectFilterSidebar";
import { MostVisitedProperties } from "./PageIndex";

export default function Projects() {
  const [filters, setFilters] = useState({
    floors: "",
    towers: "",
    units: "",
    area: "",
    budget: "",
    security: [],
  });

  const clearFilters = () => {
    setFilters({
      floors: "",
      towers: "",
      units: "",
      area: "",
      budget: "",
      security: [],
    });
  };

  const filtered = ProjectsData.filter((p) => {
    const f = filters;

    const matchesFloors = !f.floors || p.floors >= Number(f.floors);
    const matchesTowers = !f.towers || p.towers >= Number(f.towers);
    const matchesUnits = !f.units || p.units >= Number(f.units);
    const matchesArea = !f.area || parseInt(p.area) >= Number(f.area);
    const matchesBudget = !f.budget || p.price <= Number(f.budget);
    const matchesSecurity =
      f.security.length === 0 ||
      f.security.every((s) => p.facilities.includes(s));

    return (
      matchesFloors &&
      matchesTowers &&
      matchesUnits &&
      matchesArea &&
      matchesBudget &&
      matchesSecurity
    );
  });

  return (
    <>
    <div className="flex bg-gray-50 min-h-screen pt-16">

      {/* Sidebar */}
      <ProjectFilterSidebar
        filters={filters}
        setFilters={setFilters}
        clearFilters={clearFilters}
      />

      {/* Right side */}
      <main className="flex-1 ml-[260px] p-10">
        <h1 className="text-4xl font-bold text-[#0B2A55] mb-10">
          <span className="text-[#FF6B1A] ">Big Projects</span> in Pune
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {filtered.map((p) => (
            <motion.div
              key={p.id}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl overflow-hidden border border-[#0B2A55]/20 shadow-sm hover:shadow-xl transition cursor-pointer"
            >
              {/* Image */}
              <div className="h-56 overflow-hidden">
                <motion.img
                  src={p.image}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.12 }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              {/* Content */}
              <div className="p-6">

                {/* Title */}
                <h2 className="text-2xl font-semibold text-[#0B2A55] mb-1 line-clamp-1">
                  {p.title}
                </h2>

                {/* Location */}
                <p className="flex items-center gap-2 text-gray-600 mb-4">
                  <MapPin className="w-4 h-4 text-[#FF6B1A]" />
                  {p.location}
                </p>

                {/* ONLY Towers + Floors */}
                <div className="space-y-2 text-sm text-[#0B2A55]">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#FF6B1A]" />
                    <strong>Towers:</strong> {p.towers}
                  </div>

                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#FF6B1A]" />
                    <strong>Floors:</strong> {p.floors}
                  </div>
                </div>

                {/* BUTTONS */}
                <div className="grid grid-cols-2 gap-3 mt-6">
                  <Button
                    className="border-[2px] border-[#0B2A55] text-[#0B2A55] bg-white rounded-xl hover:bg-[#0B2A55]/10"
                  >
                    View Details
                  </Button>

                  <Button
                    className="bg-[#FF6B1A] hover:bg-[#e75f15] text-white rounded-xl"
                  >
                    Contact
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}

        </div>

        
      </main>
    </div>
  
    
    </>
  );
}
