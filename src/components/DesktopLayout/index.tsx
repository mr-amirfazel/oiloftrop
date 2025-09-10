import type { FC } from "react";
import { Outlet } from "react-router-dom";
import { Taskbar } from "./Taskbar";

export const DesktopLayout:FC = () => {
    return (
        <main
      className="h-screen w-screen bg-cover bg-center flex flex-col"
      style={{ backgroundImage: "url('/wallpapers/windows11-desktop.jpg')" }}
    >
      {/* Desktop content area */}
      <div className="flex-1 p-4">
        <Outlet />
      </div>

      {/* Taskbar at bottom */}
      <Taskbar />
    </main>
    )
}