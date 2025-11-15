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
                 bg-blue-900 text-white shadow-xl border-r border-blue-800
                 p-5 flex flex-col justify-between overflow-y-auto"
    >

      {/* Sidebar Heading */}
      <h2 className="text-xl font-bold mb-4 text-white tracking-wide">
        Dashboard
      </h2>

      {/* Navigation Section */}
      <nav className="space-y-2">
        {menuItems.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`flex items-center w-full gap-3 px-4 py-3 rounded-lg 
                        transition-all text-[15px] cursor-pointer
                        ${
                          activeTab === id
                            ? "bg-blue-800 border-l-4 border-orange-500 text-orange-400 font-semibold"
                            : "hover:bg-blue-800 text-white/90"
                        }`}
          >
            <Icon
              className={`w-5 h-5 transition ${
                activeTab === id ? "text-orange-400" : "text-white"
              }`}
            />
            {label}
          </button>
        ))}
      </nav>

      {/* Logout Button */}
      <div className="mt-6 border-t border-blue-800 pt-4">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 text-red-400 px-4 py-3 rounded-lg 
                     hover:bg-red-900/30 transition-all w-full text-[15px] cursor-pointer"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>
    </aside>
  );
}
