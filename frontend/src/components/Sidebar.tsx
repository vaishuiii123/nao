import {
  LayoutDashboard,
  FileText,
  CircleDot,
  Users,
  Mail,
  Settings,
} from "lucide-react";

import { NavLink } from "react-router-dom";

type Props = {
  collapsed: boolean;
};

export default function Sidebar({
  collapsed,
}: Props) {

  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <LayoutDashboard size={20} />,
    },
    {
      name: "NAO Consultation",
      path: "/nao-consultation",
      icon: <FileText size={20} />,
    },
    {
      name: "Field Creation",
      path: "/field-creation",
      icon: <CircleDot size={20} />,
    },
    {
      name: "General Master",
      path: "/general-master",
      icon: <CircleDot size={20} />,
    },
    {
      name: "Team Member",
      path: "/team-member",
      icon: <Users size={20} />,
    },
    {
      name: "Email Template",
      path: "/email-template",
      icon: <Mail size={20} />,
    },
    {
      name: "Setting",
      path: "/setting",
      icon: <Settings size={20} />,
    },
  ];

  return (

    <div
      className={`bg-white border-r min-h-screen transition-all duration-300
      ${collapsed ? "w-20" : "w-72"}`}
    >

  

      <nav className="px-3 space-y-2">

        {menuItems.map((item) => (

          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `
              flex items-center gap-4 px-4 py-3 rounded-xl transition-all

              ${
                isActive
                  ? "bg-[#F7E4EA] text-[#98002E]"
                  : "hover:bg-gray-100 text-gray-700"
              }
            `
            }
          >

            {item.icon}

            {!collapsed && (
              <span className="font-medium">
                {item.name}
              </span>
            )}

          </NavLink>

        ))}

      </nav>

    </div>

  );
}