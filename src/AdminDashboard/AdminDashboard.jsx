import React, { useState } from "react";
import AdminNavbar from "./AdminNavbar";
import AdminSidebar from "./AdminSidebar";

// Import all admin pages
import DashboardHome from "./DashboardHome";
import TotalUsers from "./TotalUsers";
import TotalProperties from "./TotalProperties";
import AdminManageAds from "./AdminManageAds";
import AdminProfile from "./AdminProfile";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("Dashboard");

  return (
    <>
      <AdminNavbar />

      <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* MAIN CONTENT AREA */}
      <div
        className="
          ml-[260px]
          pt-[90px]
          px-10
          pb-10
          bg-[#ffffff]
          min-h-screen
        "
      >
        {/* RENDER BASED ON ACTIVE TAB */}
        {activeTab === "Dashboard" && <DashboardHome />}
        {activeTab === "Users" && <TotalUsers />}
        {activeTab === "Profile" && <AdminProfile />}
        {activeTab === "Properties" && <TotalProperties />}
        {activeTab === "Manage Ads" && <AdminManageAds />}
      </div>
    </>
  );
}
