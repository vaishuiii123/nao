import {
  LayoutDashboard,
  FileText,
  CircleDot,
  Users,
  Mail,
  Settings,
  ClipboardList,
} from "lucide-react";
import { NavLink } from "react-router-dom";

type Props = { collapsed: boolean };

export default function Sidebar({ collapsed }: Props) {
  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: <LayoutDashboard size={20} /> },
    { name: "NAO Consultation", path: "/nao-consultation", icon: <FileText size={20} /> },
    { name: "Field Creation", path: "/field-creation", icon: <CircleDot size={20} /> },
    { name: "General Master", path: "/general-master", icon: <CircleDot size={20} /> },
    { name: "Team Member", path: "/team-member", icon: <Users size={20} /> },
    { name: "Email Template", path: "/email-template", icon: <Mail size={20} /> },
    { name: "Audit Trail", path: "/audit-trail", icon: <ClipboardList size={22} /> },
    { name: "Setting", path: "/setting", icon: <Settings size={20} /> },
  ];

  return (
    /* Outer wrapper: gives “gap” from top/left like your screenshot */
    <aside className="p-4 bg-transparent">
      {/* Sidebar card */}
      <div
        className={`
          min-h-[calc(100vh-2rem)]
          transition-all duration-300
          ${collapsed ? "w-16" : "w-56"}
          bg-[#d4d5d8]  /* light lavender */
          rounded-[28px]
          border border-white/60
          shadow-sm
          px-3 py-4
        `}
      >
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `
                flex items-center
                ${collapsed ? "justify-center" : "justify-start"}
                gap-3
                px-3 py-2
                rounded-full
                transition-all
                ${
                  isActive
                    ? "bg-[#941b3a] text-white shadow-sm"
                    : "text-[#1f1f1f] hover:bg-white/40"
                }
              `}
            >
              {/* Icon */}
              <span
                className={`
                  flex items-center justify-center
                  ${collapsed ? "" : "w-8"}
                `}
              >
                {item.icon}
              </span>

              {/* Text */}
              {!collapsed && (
                <span className="font-medium text-[15px]">{item.name}</span>
              )}
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
}