import React, { useState } from "react";
import { Building2, Users, MessageCircle } from "lucide-react";
import TotalProperties from "./TotalProperties";
import TotalUsers from "./TotalUsers";
import UserChats from "./UserChats";
import AdminTabs from "./AdminTabs";
import AdminNavbar from "./AdminNavbar";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("properties");

  const tabs = [
    { id: "properties", label: "Properties", icon: Building2 },
    { id: "users", label: "Users", icon: Users },
    { id: "chats", label: "Chats", icon: MessageCircle },
  ];

  return (
    <>
      <AdminNavbar />
      <AdminTabs />

      <div className="w-full p-10 bg-[#f7f9fc] min-h-screen">

        {/* TAB BUTTONS */}
        <div className="flex gap-4 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex items-center gap-2 px-6 py-3 rounded-xl font-medium 
                border transition-all duration-200 shadow-sm
                ${
                  activeTab === tab.id
                    ? "bg-[#0A1E5E] text-white border-[#0A1E5E] shadow-lg scale-[1.03]"
                    : "bg-white text-slate-700 border-slate-300 hover:bg-slate-100 hover:shadow-md"
                }
              `}
            >
              <tab.icon
                className={`w-4 h-4 ${
                  activeTab === tab.id ? "text-white" : "text-slate-700"
                }`}
              />
              {tab.label}
            </button>
          ))}
        </div>

        {/* RENDER SELECTED COMPONENT */}
        <div className="mt-4">
          {activeTab === "properties" && <TotalProperties />}
          {activeTab === "users" && <TotalUsers />}
          {activeTab === "chats" && <UserChats />}
        </div>
      </div>
    </>
  );
}
