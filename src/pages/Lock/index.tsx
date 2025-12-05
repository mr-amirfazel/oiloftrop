import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { pfp } from "@/constants/about";

export const LockLayout: FC = () => {
  const navigate = useNavigate();
  const [time, setTime] = useState(new Date());
  const [unlocking, setUnlocking] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000 * 60);
    return () => clearInterval(interval);
  }, []);

  const handleUnlock = () => {
    setUnlocking(true);
    setTimeout(() => {
      navigate("/desktop");
    }, 800); 
  };

  return (
    <AnimatePresence>
      {!unlocking && (
        <motion.div
          className="h-screen w-screen bg-cover bg-center relative text-white"
          style={{ backgroundImage: "url(https://wallpapers.com/images/hd/windows11-default-wallpaper-t0lowpw8c7d967vb.jpg)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Overlay dim */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Clock + Date */}
          <motion.div
            className="absolute top-1/4 left-1/2 -translate-x-1/2 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h1 className="text-7xl font-light drop-shadow-md">
              {time.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </h1>
            <p className="text-2xl drop-shadow-sm">
              {time.toLocaleDateString(undefined, {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </p>
          </motion.div>

          {/* Unlock Box */}
          <motion.div
            className="absolute bottom-20 left-1/2 -translate-x-1/2 
                       bg-black/40 p-6 rounded-2xl backdrop-blur-md 
                       text-center cursor-pointer hover:bg-black/50 
                       transition-colors"
            onClick={handleUnlock}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={pfp}
              alt="profile"
              className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-white/50"
            />
            <p className="text-xl font-medium">Fuzzy West Side</p>
            <p className="text-sm opacity-70">Click to unlock</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
