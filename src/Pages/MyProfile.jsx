import React, { useState } from "react";
import { MyProperties, Notifications,Profile } from "./PageIndex";
import { Help, Settings, MyProfileSidebar } from "@/Components/CompIndex";
// import Security from "./Security";

export default function MyProfile() {
  const [activeTab, setActiveTab] = useState("profile");

  const renderContent = () => {
  switch (activeTab) {
    case "profile":
      return <Profile />;
    case "my-properties":
      return <MyProperties />;
    case "help":
      return <Help />;
    case "notifications":
      return <Notifications />;
    case "security":
      return <div>Security section (coming soon)</div>;
    case "settings":
      return <Settings />;
    default:
      return <Profile />;
  }
};


  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Left Sidebar */}
      <MyProfileSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Right Side Dynamic Content */}
      <div className="flex-1 p-6 overflow-y-auto">{renderContent()}</div>
    </div>
  );
}
