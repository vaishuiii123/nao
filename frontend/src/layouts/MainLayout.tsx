import { useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

type Props = {
  user: {
    name: string;
    email: string;
  };
  onLogout: () => void;
};

export default function MainLayout({
  user,
  onLogout,
}: Props) {
  const [collapsed, setCollapsed] = useState(false);

  return (
   
    /* ✅ WHITE PAGE */
    <div className="min-h-screen bg-white flex flex-col bg-[#b4b5b8] ">
      {/* ✅ HEADER */}
      <div className="px-4 pt-3">
        <Header/>
      </div>

      {/* ✅ BODY */}
      <div className="flex flex-1 gap-4">

        {/* ✅ SIDEBAR */}
        <div className="relative">

          <Sidebar collapsed={collapsed} />

          <button
            onClick={() => setCollapsed(!collapsed)}
            className="
              absolute
              top-1/4
              -right-3
              -translate-y-1/2
              bg-white
              border
              rounded-full
              w-7
              h-7
              shadow
            "
          >
            {collapsed ? "→" : "←"}
          </button>

        </div>

        {/* ✅ MAIN CONTENT (where you build everything) */}
        <main className="flex-1 p-4">
          <Outlet />
        </main>

      </div>

    </div>
 
  );
}
