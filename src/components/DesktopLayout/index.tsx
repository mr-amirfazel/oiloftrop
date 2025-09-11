import type { FC } from "react";
import { Outlet } from "react-router-dom";
import { Taskbar } from "./Taskbar";

export const DesktopLayout:FC = () => {
    return (
        <main
      className="h-screen w-screen bg-cover bg-center flex flex-col"
      style={{ backgroundImage: "url(https://4kwallpapers.com/images/wallpapers/windows-11-dark-mode-blue-stock-official-3840x2160-5630.jpg)" }}
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