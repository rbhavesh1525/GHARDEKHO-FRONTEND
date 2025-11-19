import React from "react";
import { TrendingUp, Eye, Home, MessageSquare, BarChart3 } from "lucide-react";
import { SemiCircleProgress } from "@/Components/CompIndex";
import AdminAnalytics from "./AdminAnalytics";  // if needed

export default function DashboardHome() {
  return (
    <div>
      {/* METRICS SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT — BIG SEMI CIRCLE CARD */}
        <div className="bg-white border shadow rounded-3xl p-5 flex flex-col justify-start items-center h-[220px]">
          <SemiCircleProgress value={70} size={150} />
          <p className="text-2xl font-bold text-orange-500 mt-1">2056</p>
          <p className="text-gray-600 text-xs -mt-1">Properties</p>
        </div>

        {/* RIGHT — CARDS */}
        <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-4">

          <MetricCard 
            icon={<Eye className="text-orange-500 w-5 h-5" />} 
            title="Total Views" 
            value="201" 
          />

          <MetricCard 
            icon={<Home className="text-orange-500 w-5 h-5" />} 
            title="Total Properties" 
            value="2056" 
          />

          <MetricCard 
            icon={<MessageSquare className="text-orange-500 w-5 h-5" />} 
            title="Total Inquiry" 
            value="256" 
          />

          <MetricCard 
            icon={<TrendingUp className="text-orange-500 w-5 h-5" />} 
            title="Total Searches" 
            value="256" 
          />

          <MetricCard 
            icon={<Home className="text-orange-500 w-5 h-5" />} 
            title="Active Listings" 
            value="2056" 
          />

          <MetricCard 
            icon={<BarChart3 className="text-orange-500 w-5 h-5" />} 
            title="Growth Rate" 
            value="+12%" 
          />

        </div>
      </div>

      {/* ANALYTICS SECTION */}
      <div className="mt-10">
        <AdminAnalytics />
      </div>
    </div>
  );
}

function MetricCard({ icon, title, value }) {
  return (
    <div className="bg-white rounded-xl shadow border p-4 flex flex-col gap-1 min-h-[100px]">
      {icon}
      <p className="text-gray-500 text-xs">{title}</p>
      <p className="font-bold text-lg text-orange-500">{value}</p>
    </div>
  );
}
