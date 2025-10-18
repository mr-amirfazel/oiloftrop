// src/components/WindowShell.tsx
import type { FC } from "react";
import { useRef } from "react";
import type { WindowInstance } from "../../context/WindowManagerContext";

import maximize from '../../assets/images/maximize.png';
import maxmin from '../../assets/images/maxmin.png';
import close from '../../assets/images/close.png';
import minimize from '../../assets/images/minimize.png';


type Props = {
  instance: WindowInstance;
  children: React.ReactNode;
  onClose: () => void;
  onBringToFront: () => void;
  onUpdatePosition: (pos: { x: number; y: number }) => void;
  onUpdateSize: (size: { width: number; height: number }) => void;
  onToggleMaximize: () => void;
  onMinimize: () => void;
};

export const WindowShell: FC<Props> = ({
  instance,
  children,
  onClose,
  onBringToFront,
  onUpdatePosition,
  onUpdateSize,
  onToggleMaximize,
  onMinimize,
}) => {
  const nodeRef = useRef<HTMLDivElement | null>(null);

  if (instance.minimized) return null; // not showing when minimized (taskbar can show minimized state later)

  const startDrag = (e: React.PointerEvent) => {
    e.stopPropagation();
    onBringToFront();

    const startX = e.clientX;
    const startY = e.clientY;
    const initLeft = instance.position.x;
    const initTop = instance.position.y;

    const onMove = (ev: PointerEvent) => {
      const nx = initLeft + ev.clientX - startX;
      const ny = initTop + ev.clientY - startY;
      onUpdatePosition({ x: Math.max(0, nx), y: Math.max(0, ny) });
    };
    const onUp = () => {
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerup", onUp);
    };
    document.addEventListener("pointermove", onMove);
    document.addEventListener("pointerup", onUp);
  };

  const startResize = (e: React.PointerEvent) => {
    e.stopPropagation();
    onBringToFront();

    const startX = e.clientX;
    const startY = e.clientY;
    const initW = instance.size.width;
    const initH = instance.size.height;

    const onMove = (ev: PointerEvent) => {
      const nw = Math.max(200, initW + ev.clientX - startX);
      const nh = Math.max(120, initH + ev.clientY - startY);
      onUpdateSize({ width: nw, height: nh });
    };
    const onUp = () => {
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerup", onUp);
    };
    document.addEventListener("pointermove", onMove);
    document.addEventListener("pointerup", onUp);
  };

  const style: React.CSSProperties = instance.maximized
    ? {
        position: "absolute",
        left: 0,
        top: 0,
        width: instance.size.width,
        height: instance.size.height,
        zIndex: '20'
      }
    : {
        position: "absolute",
        left: instance.position.x,
        top: instance.position.y,
        width: instance.size.width,
        height: instance.size.height,
        zIndex: '20'
      };

  return (
    <div
      ref={nodeRef}
      onPointerDown={() => onBringToFront()}
      style={style}
      className="pointer-events-auto bg-white/95 dark:bg-neutral-900 rounded-xl shadow-2xl border border-white/10 overflow-hidden"
    >
      {/* Title bar */}
      <div
        className="flex items-center justify-between px-3 py-2 bg-gray-800 cursor-move select-none text-white"
        onPointerDown={startDrag}
      >
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-sm flex items-center justify-center text-xs">
            <img src={instance.image} alt="window icon" />
          </div>
          <div className="font-medium text-sm">{instance.title}</div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onMinimize();
            }}
            className="w-8 h-8 rounded hover:bg-gray-600 flex items-center justify-center"
            title="Minimize"
          >
            <img className="invert-100 w-5 h-5" src={minimize} alt="close" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleMaximize();
            }}
            className="w-8 h-8 rounded hover:bg-gray-600 flex items-center justify-center"
            title="Maximize"
          >
            <img className="invert-100 w-5 h-5 " src={instance.maximized ? maximize : maxmin} alt="maximize"  />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="w-8 h-8 rounded hover:bg-red-500 hover:text-white flex items-center justify-center"
            title="Close"
          >
            <img className="invert-100 w-5 h-5" src={close} alt="close" />
          </button>
        </div>
      </div>

      {/* Content area */}
      <div className=" overflow-auto h-[calc(100%-48px)] bg-white">
        {children}
      </div>

      {/* resizer */}
      <div
        onPointerDown={startResize}
        className="absolute right-2 bottom-2 w-4 h-4 cursor-se-resize rounded bg-transparent"
      />
    </div>
  );
};
