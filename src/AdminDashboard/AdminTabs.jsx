import React from "react";
import { Users, Building2, TrendingUp, MessageCircle } from "lucide-react";

export default function AdminStatsCards() {
  const cards = [
    {
      title: "Total Users",
      value: 4,
      icon: Users,
      bg: "bg-blue-600",
    },
    {
      title: "Total Properties",
      value: 17,
      icon: Building2,
      bg: "bg-green-600",
    },
    {
      title: "Active Listings",
      value: 17,
      icon: TrendingUp,
      bg: "bg-purple-600",
    },
    {
      title: "Total Chats",
      value: 4,
      icon: MessageCircle,
      bg: "bg-orange-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 mt-22 px-20">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 hover:shadow-lg transition"
        >
          <div className={`${card.bg} w-12 h-12 rounded-xl flex items-center justify-center mb-6`}>
            <card.icon className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900">{card.value}</h2>
          <p className="text-slate-600 mt-1 text-sm">{card.title}</p>
        </div>
      ))}
    </div>
  );
}
