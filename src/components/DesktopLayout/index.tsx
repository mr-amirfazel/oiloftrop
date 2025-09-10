import type { FC } from "react";
import { Outlet } from "react-router-dom";
import { Taskbar } from "./Taskbar";

export const DesktopLayout:FC = () => {
    return (
        <main>
            <div className="min-h-[calc(100vh-70px)] bg-gray-200">
                <Outlet />
            </div>
            <Taskbar />
        </main>
    )
}