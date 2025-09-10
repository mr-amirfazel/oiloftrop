import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
              src="data:image/jpeg;base64,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"
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
