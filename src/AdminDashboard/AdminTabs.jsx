import React from "react";
import { Users, Building2, TrendingUp, MessageCircle } from "lucide-react";

export default function AdminStatsCards() {
  const cards = [
    {
      title: "Total Users",
      value: 4,
      icon: Users,
      color: "bg-blue-900/10 text-blue-900",
    },
    {
      title: "Total Properties",
      value: 17,
      icon: Building2,
      color: "bg-green-600/10 text-green-700",
    },
    {
      title: "Active Listings",
      value: 17,
      icon: TrendingUp,
      color: "bg-purple-700/10 text-purple-700",
    },
    {
      title: "Total Chats",
      value: 4,
      icon: MessageCircle,
      color: "bg-orange-500/10 text-orange-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 mt-24 px-20">
      {cards.map((card, index) => (
        <div
          key={index}
          className="
            bg-white p-7 rounded-2xl shadow-lg border border-blue-900/10 
            hover:shadow-xl hover:-translate-y-1 transition-all duration-300
          "
        >
          {/* Icon Container */}
          <div
            className={`${card.color} w-14 h-14 rounded-xl flex items-center justify-center mb-5`}
          >
            <card.icon className="w-8 h-8" />
          </div>

          {/* Number */}
          <h2 className="text-4xl font-extrabold text-blue-900 tracking-tight">
            {card.value}
          </h2>

          {/* Title */}
          <p className="text-slate-600 text-sm mt-1">{card.title}</p>
        </div>
      ))}
    </div>
  );
}
