import React from "react";
import {
  LayoutDashboard,
  Users,
  FolderKanban,
  Megaphone,
  UserCircle,
  ArrowRight,
  Building,
} from "lucide-react";

export default function AdminSidebar({ activeTab, setActiveTab }) {

  const menuItems = [
    { name: "Dashboard", icon: <LayoutDashboard /> },
    { name: "Users", icon: <Users /> },
    { name: "Profile", icon: <UserCircle /> },
    { name: "Properties", icon: <Building /> },
    { name: "Manage Ads", icon: <Megaphone /> },
  ];

  return (
    <aside className="w-[260px] fixed top-0 left-0 h-full bg-white px-6 py-10 border-r border-gray-200">

      <div className="flex flex-col items-center gap-2 mb-10">
        <LayoutDashboard className="w-10 h-10 text-orange-500" />
        <h2 className="text-xl font-bold text-gray-900">RealEstatePro</h2>
      </div>

      <nav className="flex flex-col gap-4">
        {menuItems.map((item, idx) => {
          const isActive = activeTab === item.name;

          return (
            <button
              key={idx}
              onClick={() => setActiveTab(item.name)}
              className={`flex items-center justify-between w-full px-4 py-3 rounded-xl border transition-all cursor-pointer ${
                isActive
                  ? "bg-orange-500 border-orange-500 text-white shadow-md"
                  : "bg-white border-gray-200 text-gray-800 hover:bg-gray-50"
              }`}
            >
              <div className="flex items-center gap-3 text-[15px] font-medium">
                <span
                  className={`${isActive ? "text-white" : "text-orange-500"} w-5 h-5`}
                >
                  {item.icon}
                </span>
                {item.name}
              </div>

              <ArrowRight
                className={`w-4 h-4 ${isActive ? "text-white" : "text-gray-400"}`}
              />
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
