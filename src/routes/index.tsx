import type { FC } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { DesktopLayout } from "../components/DesktopLayout";
import { HomePage } from "../pages/Desktop";
import { LockLayout } from "../pages/Lock";


export const Routing: FC = () => {
    return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LockLayout />} />

        {/* Desktop Layout */}
        <Route path="/desktop" element={<DesktopLayout />}>
            <Route index element={<HomePage />} />
            <Route path="projects" element={<h2>Projects</h2>} />
            <Route path="about" element={<h2>About Me</h2>} />
        </Route>

        {/* Admin Layout */}
        <Route path="/admin" element={<h2>Admin</h2>}>
            <Route index element={<h2>Dashboard</h2>} />
            <Route path="users" element={<h2>Users</h2>} />
        </Route>

        {/* Catch-all → redirect to lock screen */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
    )

}