import type { FC } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const LockLayout: FC = () => {
  const navigate = useNavigate();
  const [unlocked, setUnlocked] = useState(false);

  const handleUnlock = () => {
    // Fake unlock, just navigate to desktop
    setUnlocked(true);
    navigate("/desktop");
  };

  return (
    <div
      className="h-screen w-screen bg-cover bg-center flex flex-col justify-around items-center text-white"
      style={{ backgroundImage: "url(https://wallpapers.com/images/hd/windows11-default-wallpaper-t0lowpw8c7d967vb.jpg)" }}
    >
      {/* Time + Date */}
      <div className="text-center ">
        <h1 className="text-7xl font-light">{new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</h1>
        <p className="text-2xl">{new Date().toLocaleDateString()}</p>
      </div>

      {/* Unlock section */}
      <div
        className="bg-black/40 p-6 rounded-2xl backdrop-blur-md text-center cursor-pointer"
        onClick={handleUnlock}
      >
        <img
          src="/avatar.png"
          alt="profile"
          className="w-20 h-20 rounded-full mx-auto mb-4"
        />
        <p className="text-xl">Fuzzy West Side</p>
        <p className="text-sm opacity-70">Click to unlock</p>
      </div>
    </div>
  );
};
