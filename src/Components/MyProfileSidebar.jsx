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
    <aside className="w-64 bg-white shadow-md border-r border-gray-200 p-5 pt-22">
      {/* <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-blue-600">GharDekho</h2>
      </div> */}

      <nav className="space-y-2">
        {menuItems.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`flex items-center w-full gap-3 px-4 py-3 rounded-lg transition-all ${
              activeTab === id
                ? "bg-blue-100 text-blue-700 font-medium"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <Icon className="w-5 h-5" />
            {label}
          </button>
        ))}
      </nav>

      <hr className="my-6 border-gray-300" />

      <button
        onClick={handleLogout}
        className="flex items-center gap-3 text-red-600 px-4 py-3 rounded-lg hover:bg-red-50 transition-all w-full"
      >
        <LogOut className="w-5 h-5" />
        Logout
      </button>
    </aside>
  );
}
