import type { ReactNode } from "react";

export interface DesktopIconModel {
    id: string;
    title: string;
    image: React.ImgHTMLAttributes<HTMLImageElement>["src"],
    component: React.ComponentType;
}

export interface TimelineItem {
    image: string
    title: string;       // e.g. "Software Engineer"
    subtitle?: string;   // e.g. "Google"
    period: string;      // e.g. "2021 - Present"
    description?: string;
}

export interface StartMenuIconModel {
    id: string;
    title: string;
    image: React.ImgHTMLAttributes<HTMLImageElement>["src"],
    onClick?: Function,
    component?: React.ComponentType
}
  