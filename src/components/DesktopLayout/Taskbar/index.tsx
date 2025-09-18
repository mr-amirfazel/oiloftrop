import { FC, useEffect, useState } from "react";
import { HiMiniWifi } from "react-icons/hi2";
import { BatteryIcon } from "../../BatteryViewer";

import windows from '../../../assets/images/Windows.png';
import { useWindowManager } from "../../../context/WindowManagerContext";

export const Taskbar: FC = () => {
  const [time, setTime] = useState<string>("");
  const [date, setDate] = useState<string>("");

    const ctx = useWindowManager();
  

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      );
      setDate(
        now.toLocaleDateString([], { month: "numeric", day: "numeric", year: "2-digit" })
      );
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[48px] bg-black/30 backdrop-blur-md flex items-center justify-between px-4 fixed bottom-0 left-0 right-0">
      {/* Centered Icons */}
      <div className="absolute left-1/2 -translate-x-1/2 flex gap-6">
        {/* Start button */}
        <button className="w-9 h-9 flex items-center justify-center hover:bg-white/20 rounded-md transition">
          <img
            src={windows}
            alt="Start"
            className="w-9 h-9"
          />
        </button>

        {/* Search button */}
        <button className="w-9 h-9 flex items-center justify-center hover:bg-white/20 rounded-md transition text-xl">
          🔍
        </button>

        <div className="flex gap-3">
          {ctx.windows
          .map(w => 
          <div className="bg-gray-400  cursor-pointer rounded-xs hover:bg-cyan-700" onClick={() => ctx.updateWindow(w.instanceId, {minimized: !w.minimized})}>
            <img className="w-9 h-9" src={w.image}/>
          </div>)}
        </div>
      </div>

      {/* Right side system tray */}
      <div className="flex items-center gap-4 ml-auto text-white">
        {/* Wi-Fi */}
        <span className="text-2xl">
          <HiMiniWifi />
        </span>

        {/* Battery */}
        <span className="text-2xl">
          <BatteryIcon />
        </span>

        {/* Time + Date */}
        <div className="flex flex-col items-end leading-tight">
          <span className="text-sm font-medium tracking-tight">{time}</span>
          <span className="text-[11px] opacity-80">{date}</span>
        </div>
      </div>
    </div>
  );
};
