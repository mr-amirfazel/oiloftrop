import { FC, useEffect, useState } from "react";


export const Taskbar: FC = () => {
  const [time, setTime] = useState<string>("");
  const [date, setDate] = useState<string>("");

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
            src="https://img.icons8.com/?size=100&id=TuXN3JNUBGOT&format=png&color=000000"
            alt="Start"
            className="w-6 h-6"
          />
        </button>

        {/* Search button */}
        <button className="w-9 h-9 flex items-center justify-center hover:bg-white/20 rounded-md transition">
          🔍
        </button>
      </div>

      {/* Right side system tray */}
      <div className="flex items-center gap-4 ml-auto text-white">
        {/* Wi-Fi */}
        <span className="text-lg">📶</span>

        {/* Battery */}
        <span className="text-lg">🔋</span>

        {/* Time + Date */}
        <div className="flex flex-col items-end leading-tight">
          <span className="text-sm font-medium tracking-tight">{time}</span>
          <span className="text-[11px] opacity-80">{date}</span>
        </div>
      </div>
    </div>
  );
};
