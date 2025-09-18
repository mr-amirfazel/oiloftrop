import type { ReactNode } from "react";

export interface DesktopIconModel {
    id: string;
    title: string;
    image: React.ImgHTMLAttributes<HTMLImageElement>["src"],
    component: React.ComponentType;
}