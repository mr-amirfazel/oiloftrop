import type { FC } from "react";

export const Taskbar: FC = () => {
  return (
    <div className="h-[70px] bg-black/50 backdrop-blur-md flex justify-center items-center gap-6">
      <button className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30">
        ⊞
      </button>
      <button className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30">
        🗂
      </button>
      <button className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30">
        🌐
      </button>
    </div>
  );
};
