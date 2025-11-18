import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  FolderKanban,
  Megaphone,
  ArrowRight,
  Building,
} from "lucide-react";

export default function AdminSidebar() {
  const { pathname } = useLocation();

  const menuItems = [
    { name: "Dashboard", icon: <LayoutDashboard />, link: "/adminhome" },
    { name: "Users", icon: <Users />, link: "/adminUsers" },
    { name: "Projects", icon: <FolderKanban />, link: "/adminProjects" },
    { name: "Properties", icon: <Building />, link: "/adminProperties" },
    { name: "Manage Ads", icon: <Megaphone />, link: "/adminManageAds" },
  ];

  return (
    <aside className="w-[260px] fixed top-0 left-0 h-full bg-white px-6 py-10 border-r border-gray-200">

      {/* LOGO */}
      <div className="flex flex-col items-center gap-2 mb-10">
        <LayoutDashboard className="w-10 h-10 text-orange-500" />
        <h2 className="text-xl font-bold text-gray-900">RealEstatePro</h2>
      </div>

      {/* MENU */}
      <nav className="flex flex-col gap-4">
        {menuItems.map((item, idx) => {
          const isActive = pathname === item.link;

          return (
            <Link
              key={idx}
              to={item.link}
              className={`
                flex items-center justify-between w-full px-4 py-3 rounded-xl border
                transition-all cursor-pointer
                ${
                  isActive
                    ? "bg-orange-500 border-orange-500 text-white shadow-md"
                    : "bg-white border-gray-200 text-gray-800 hover:bg-gray-50"
                }
              `}
            >
              {/* Left: Icon + Text */}
              <div className="flex items-center gap-3 text-[15px] font-medium">
                <span
                  className={`${
                    isActive ? "text-white" : "text-orange-500"
                  } w-5 h-5`}
                >
                  {item.icon}
                </span>
                {item.name}
              </div>

              {/* Arrow */}
              <ArrowRight
                className={`w-4 h-4 ${
                  isActive ? "text-white" : "text-gray-400"
                }`}
              />
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
