import React from "react";
import {
  User,
  Home,
  HelpCircle,
  Shield,
  Bell,
  Settings,
  LogOut,
} from "lucide-react";

export default function MyProfileSidebar({ activeTab, setActiveTab }) {
  const menuItems = [
    { id: "profile", label: "My Profile", icon: User },
    { id: "my-properties", label: "My Properties", icon: Home },
    { id: "help", label: "Help", icon: HelpCircle },
    { id: "security", label: "Security", icon: Shield },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <aside
      className="fixed top-[58px] left-0 h-[calc(100vh-70px)] w-64 
                 bg-white shadow-md border-r border-gray-200 p-5 
                 flex flex-col justify-between overflow-y-auto"
    >
      {/* Navigation Section */}
      <nav className="space-y-2">
        {menuItems.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`flex items-center w-full gap-3 px-4 py-3 rounded-lg transition-all text-[15px] ${
              activeTab === id
                ? "bg-blue-100 text-blue-700 font-semibold"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <Icon className="w-5 h-5" />
            {label}
          </button>
        ))}
      </nav>

      {/* Logout Button */}
      <div className="mt-6 border-t border-gray-200 pt-4">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 text-red-600 px-4 py-3 rounded-lg hover:bg-red-50 transition-all w-full text-[15px]"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>
    </aside>
  );
}
