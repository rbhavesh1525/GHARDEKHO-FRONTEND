import React, { useState } from "react";
import { EyeOff, Eye, Trash2, MapPin, Building2 } from "lucide-react";

export default function TotalPropertiesList() {

  // Dummy properties for now
  const [properties, setProperties] = useState([
    {
      id: 1,
      title: "Luxury 3BHK Apartment",
      location: "Mumbai, Andheri West",
      price: "1.2 Cr",
      image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
      hidden: false,
    },
    {
      id: 2,
      title: "Modern Villa with Pool",
      location: "Delhi, Hauz Khas",
      price: "3.5 Cr",
      image: "https://images.unsplash.com/photo-1600607687920-4f00f9f5b56d",
      hidden: false,
    },
    {
      id: 3,
      title: "Compact 1BHK Studio",
      location: "Pune, Baner",
      price: "45 Lakh",
      image: "https://images.unsplash.com/photo-1560448071-7c8fcd48f5ae",
      hidden: true,
    },
  ]);

  // DELETE
  const deleteProperty = (id) => {
    setProperties((prev) => prev.filter((p) => p.id !== id));
  };

  // HIDE / UNHIDE
  const toggleHide = (id) => {
    setProperties((prev) =>
      prev.map((p) => (p.id === id ? { ...p, hidden: !p.hidden } : p))
    );
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-900/10">

      <h2 className="text-2xl font-bold text-blue-900 mb-6">
        Properties List
      </h2>

      {/* LIST */}
      <div className="space-y-4">
        {properties.map((p) => (
          <div
            key={p.id}
            className="flex items-center justify-between bg-white border border-blue-900/10 rounded-xl p-4 shadow-sm hover:shadow-md transition cursor-pointer"
          >
            {/* LEFT: IMAGE + DETAILS */}
            <div className="flex items-center gap-4">
              <img
                src={p.image}
                alt={p.title}
                className="w-20 h-20 rounded-xl object-cover border border-blue-900/20"
              />

              <div>
                <p className="text-lg font-semibold text-slate-900">
                  {p.title}
                </p>
                <p className="text-sm text-slate-500 flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-orange-500" /> {p.location}
                </p>
                <p className="text-blue-900 font-semibold mt-1">
                  ₹{p.price}
                </p>
              </div>
            </div>

            {/* RIGHT: ACTION BUTTONS */}
            <div className="flex items-center gap-3">

              {/* HIDE / UNHIDE */}
              <button
                onClick={() => toggleHide(p.id)}
                className={`px-3 py-2 rounded-lg border flex items-center gap-2 transition
                  ${
                    p.hidden
                      ? "border-orange-500 text-orange-600 hover:bg-orange-50"
                      : "border-blue-900 text-blue-900 hover:bg-blue-50"
                  }
                `}
              >
                {p.hidden ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                <span className="text-sm">{p.hidden ? "Unhide" : "Hide"}</span>
              </button>

              {/* DELETE */}
              <button
                onClick={() => deleteProperty(p.id)}
                className="px-3 py-2 rounded-lg border border-red-600 text-red-600 hover:bg-red-50 flex items-center gap-2 transition"
              >
                <Trash2 className="w-4 h-4" />
                <span className="text-sm">Delete</span>
              </button>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
