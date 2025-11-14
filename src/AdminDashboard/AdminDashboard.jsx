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
    <AdminNavbar/>
    <AdminTabs/>
    <div className="w-full p-15">
      {/* TAB BUTTONS */}
      <div className="flex gap-4 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              flex items-center gap-2 px-6 py-3 rounded-xl font-medium 
              border transition
              ${activeTab === tab.id 
                ? "bg-blue-900 text-white border-blue-900 shadow-md" 
                : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
              }
            `}
          >
            <tab.icon className="w-4 h-4" />
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
