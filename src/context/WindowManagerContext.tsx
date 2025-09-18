// src/context/WindowManagerContext.tsx
import React, { createContext, useContext, useRef, useState } from "react";
import type { FC, ReactNode } from "react";
import { WindowShell } from "../components/WindowShell";

export type WindowConfig = {
  id: string; // logical id (e.g. "about", "projects")
  title: string;
  component: ReactNode;
  allowMultiple?: boolean;
  width?: number;
  height?: number;
  image: React.ImgHTMLAttributes<HTMLImageElement>["src"];
};

export type WindowInstance = WindowConfig & {
  instanceId: string; // unique instance
  position: { x: number; y: number };
  size: { width: number; height: number };
  minimized?: boolean;
  maximized?: boolean;
  // optional prev state to restore from maximize
  _prev?: { position: { x: number; y: number }; size: { width: number; height: number } };
};

type WindowManagerContextType = {
  windows: WindowInstance[];
  openWindow: (cfg: WindowConfig) => string; // returns instanceId
  closeWindow: (instanceId: string) => void;
  bringToFront: (instanceId: string) => void;
  updateWindow: (instanceId: string, patch: Partial<WindowInstance>) => void;
  minimizeWindow: (instanceId: string) => void;
  toggleMaximize: (instanceId: string) => void;
};

const WindowManagerContext = createContext<WindowManagerContextType | undefined>(undefined);

export const useWindowManager = (): WindowManagerContextType => {
  const ctx = useContext(WindowManagerContext);
  if (!ctx) throw new Error("useWindowManager must be used inside WindowManagerProvider");
  return ctx;
};

export const WindowManagerProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [windows, setWindows] = useState<WindowInstance[]>([]);
  const counter = useRef(1);

  // openWindow: if allowMultiple is false and an instance exists, bring it to front
  const openWindow = (cfg: WindowConfig) => {
    if (!cfg.allowMultiple) {
      const existing = windows.find((w) => w.id === cfg.id);
      if (existing) {
        bringToFront(existing.instanceId);
        return existing.instanceId;
      }
    }

    const instanceId = `${cfg.id}-${counter.current++}`;
    const size = { width: cfg.width ?? 640, height: cfg.height ?? 420 };
    const position = { x: 60 + windows.length * 24, y: 60 + windows.length * 24 };
    const instance: WindowInstance = {
      ...cfg,
      instanceId,
      position,
      size,
      minimized: false,
      maximized: false,
    };

    setWindows((prev) => [...prev, instance]);
    return instanceId;
  };

  const closeWindow = (instanceId: string) => {
    setWindows((prev) => prev.filter((w) => w.instanceId !== instanceId));
  };

  const bringToFront = (instanceId: string) => {
    setWindows((prev) => {
      const idx = prev.findIndex((w) => w.instanceId === instanceId);
      if (idx === -1) return prev;
      const copy = prev.slice();
      const [win] = copy.splice(idx, 1);
      copy.push(win); // render last -> top
      return copy;
    });
  };

  const updateWindow = (instanceId: string, patch: Partial<WindowInstance>) => {
    setWindows((prev) => prev.map((w) => (w.instanceId === instanceId ? { ...w, ...patch } : w)));
  };

  const minimizeWindow = (instanceId: string) => updateWindow(instanceId, { minimized: true });

  const toggleMaximize = (instanceId: string) => {
    setWindows((prev) =>
      prev.map((w) => {
        if (w.instanceId !== instanceId) return w;
        if (!w.maximized) {
          // store prev and maximize to "fill" area (provider won't know taskbar height precisely;
          // we default to window.innerHeight for a simple demo; adjust if you have taskbar height)
          return {
            ...w,
            _prev: { position: { ...w.position }, size: { ...w.size } },
            position: { x: 0, y: 0 },
            size: { width: window.innerWidth, height: window.innerHeight - 50 },
            maximized: true,
          };
        } else {
          // restore
          return {
            ...w,
            maximized: false,
            position: w._prev?.position ?? w.position,
            size: w._prev?.size ?? w.size,
            _prev: undefined,
          };
        }
      })
    );
  };

  const ctxValue: WindowManagerContextType = {
    windows,
    openWindow,
    closeWindow,
    bringToFront,
    updateWindow,
    minimizeWindow,
    toggleMaximize,
  };

  // Provider also renders the windows overlay so windows are visually tied to the provider area
  return (
    <WindowManagerContext.Provider value={ctxValue}>
      <div className="relative h-full w-full">
        {children}
        {/* windows overlay */}
        <div className="absolute inset-0 pointer-events-none">
          {windows.map((win) => (
            <WindowShell
              key={win.instanceId}
              instance={win}
              onClose={() => closeWindow(win.instanceId)}
              onBringToFront={() => bringToFront(win.instanceId)}
              onUpdatePosition={(pos) => updateWindow(win.instanceId, { position: pos })}
              onUpdateSize={(size) => updateWindow(win.instanceId, { size })}
              onToggleMaximize={() => 
                toggleMaximize(win.instanceId)
                }
              onMinimize={() => 
                updateWindow(win.instanceId, { minimized: true })
            }
            >
              {win.component}
            </WindowShell>
          ))}
        </div>
      </div>
    </WindowManagerContext.Provider>
  );
};
