// src/Components/ProjectFilterSidebar.jsx

import React from "react";
import {
  Layers,
  Building2,
  Grid3X3,
  Home,
  ShieldCheck,
} from "lucide-react";

export default function ProjectFilterSidebar({ filters, setFilters, clearFilters }) {
  const floorOptions = [5, 10, 15, 20, 25];
  const towerOptions = [2, 4, 6, 8, 10];
  const unitOptions = [200, 500, 800, 1000, 1500, 2000];

  const securityOptions = [
    "24/7 Security",
    "CCTV Surveillance",
    "Fire Safety System",
    "Gated Community",
    "Visitor Parking",
  ];

  const toggleSecurity = (item) => {
    const alreadySelected = filters.security.includes(item);

    setFilters({
      ...filters,
      security: alreadySelected
        ? filters.security.filter((x) => x !== item)
        : [...filters.security, item],
    });
  };

  return (
    <aside
      className="
        hidden lg:block 
        w-[260px]
        fixed left-0 top-16
        h-full
        bg-white shadow-md
        border-r border-[#0B2A55]/20
        p-5
        overflow-y-auto
      "
    >
      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-[#0B2A55]">Filter Projects</h2>

        {/* SMALL CLEAR SECTION TEXT BUTTON */}
        <span
          onClick={clearFilters}
          className="text-xs text-[#FF6B1A] font-semibold cursor-pointer hover:underline"
        >
          Clear
        </span>
      </div>

      {/* FLOORS */}
      <div className="mb-6">
        <label className="text-sm font-semibold text-[#0B2A55] flex items-center gap-2 mb-2">
          <Layers className="w-4 h-4 text-[#FF6B1A]" />
          Floors (Minimum)
        </label>

        <div className="flex flex-wrap gap-2">
          {floorOptions.map((num) => (
            <button
              key={num}
              onClick={() =>
                setFilters({ ...filters, floors: num === filters.floors ? "" : num })
              }
              className={`
                px-3 py-1 text-sm rounded-lg border 
                ${
                  filters.floors === num
                    ? "bg-[#FF6B1A] text-white border-[#FF6B1A]"
                    : "bg-white border-[#0B2A55]/30 text-[#0B2A55]"
                }
                hover:bg-[#FF6B1A]/20 transition cursor-pointer
              `}
            >
              {num}+
            </button>
          ))}
        </div>
      </div>

      {/* TOWERS */}
      <div className="mb-6">
        <label className="text-sm font-semibold text-[#0B2A55] flex items-center gap-2 mb-2">
          <Building2 className="w-4 h-4 text-[#FF6B1A]" />
          Towers (Minimum)
        </label>

        <div className="flex flex-wrap gap-2">
          {towerOptions.map((num) => (
            <button
              key={num}
              onClick={() =>
                setFilters({ ...filters, towers: num === filters.towers ? "" : num })
              }
              className={`
                px-3 py-1 text-sm rounded-lg border 
                ${
                  filters.towers === num
                    ? "bg-[#FF6B1A] text-white border-[#FF6B1A]"
                    : "bg-white border-[#0B2A55]/30 text-[#0B2A55]"
                }
                hover:bg-[#FF6B1A]/20 transition cursor-pointer
              `}
            >
              {num}+
            </button>
          ))}
        </div>
      </div>

      {/* UNITS */}
      <div className="mb-6">
        <label className="text-sm font-semibold text-[#0B2A55] flex items-center gap-2 mb-2">
          <Grid3X3 className="w-4 h-4 text-[#FF6B1A]" />
          Units (Minimum)
        </label>

        <div className="flex flex-wrap gap-2">
          {unitOptions.map((num) => (
            <button
              key={num}
              onClick={() =>
                setFilters({ ...filters, units: num === filters.units ? "" : num })
              }
              className={`
                px-3 py-1 text-sm rounded-lg border 
                ${
                  filters.units === num
                    ? "bg-[#FF6B1A] text-white border-[#FF6B1A]"
                    : "bg-white border-[#0B2A55]/30 text-[#0B2A55]"
                }
                hover:bg-[#FF6B1A]/20 transition cursor-pointer
              `}
            >
              {num}+
            </button>
          ))}
        </div>
      </div>

      {/* AREA */}
      <div className="mb-6">
        <label className="text-sm font-semibold text-[#0B2A55] flex items-center gap-2 mb-2">
          <Home className="w-4 h-4 text-[#FF6B1A]" />
          Area (Acres)
        </label>

        <input
          type="number"
          value={filters.area}
          onChange={(e) => setFilters({ ...filters, area: e.target.value })}
          placeholder="e.g. 10"
          className="w-full px-3 py-2 border rounded-lg border-[#0B2A55]/30 focus:border-[#FF6B1A] outline-none"
        />
      </div>

      {/* BUDGET MIN/MAX */}
      <div className="mb-6">
        <label className="text-sm font-semibold text-[#0B2A55] mb-2">Budget</label>

        <div className="flex gap-2">
          <input
            type="number"
            placeholder="Min"
            value={filters.minBudget || ""}
            onChange={(e) =>
              setFilters({ ...filters, minBudget: e.target.value })
            }
            className="w-1/2 px-3 py-2 border rounded-lg border-[#0B2A55]/30"
          />
          <input
            type="number"
            placeholder="Max"
            value={filters.budget}
            onChange={(e) =>
              setFilters({ ...filters, budget: e.target.value })
            }
            className="w-1/2 px-3 py-2 border rounded-lg border-[#0B2A55]/30"
          />
        </div>
      </div>

      {/* SECURITY CHECKBOXES */}
      <div className="mb-6">
        <label className="text-sm font-semibold text-[#0B2A55] flex items-center gap-2 mb-2">
          <ShieldCheck className="w-4 h-4 text-[#FF6B1A]" />
          Security / Facilities
        </label>

        <div className="space-y-2">
          {securityOptions.map((sec) => (
            <label key={sec} className="flex items-center gap-2 text-[#0B2A55] text-sm">
              <input
                type="checkbox"
                checked={filters.security.includes(sec)}
                onChange={() => toggleSecurity(sec)}
                className="accent-[#FF6B1A]"
              />
              {sec}
            </label>
          ))}
        </div>
      </div>

      {/* LARGE CLEAR FILTERS BUTTON */}
      <button
        onClick={clearFilters}
        className="w-full bg-[#FF6B1A] text-white py-2 rounded-lg hover:bg-[#e45c16] transition font-semibold mt-6"
      >
        Clear Filters
      </button>

    </aside>
  );
}
