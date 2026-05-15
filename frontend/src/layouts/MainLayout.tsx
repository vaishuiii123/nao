import { useState } from "react";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

type Props = {
  children: React.ReactNode;
  user: {
    name: string;
    email: string;
  };
  onLogout: () => void;
};

export default function MainLayout({
  children,
  user,
  onLogout,
}: Props) {

  const [collapsed, setCollapsed] =
    useState(false);

  return (

    <div className="h-screen flex flex-col bg-[#F5F6FA] overflow-hidden">

      {/* Header */}
      <Header
        user={user}
        onLogout={onLogout}
      />

      {/* Main Body */}
      <div className="flex flex-1 overflow-hidden">

        {/* Sidebar Wrapper */}
        <div
          className={`
            relative
            transition-all duration-300
            ${collapsed ? "w-20" : "w-72"}
          `}
        >

          {/* Sidebar */}
          <Sidebar collapsed={collapsed} />

          {/* Collapse Button */}
          <button
            onClick={() =>
              setCollapsed(!collapsed)
            }
            className="
              absolute
              top-6
              -right-4
              z-50
              bg-white
              border
              shadow-md
              rounded-full
              w-8
              h-8
              flex
              items-center
              justify-center
              text-lg
              hover:bg-gray-100
            "
          >
            {collapsed ? "→" : "←"}
          </button>

        </div>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6">

          {children}

        </main>

      </div>

    </div>

  );
}