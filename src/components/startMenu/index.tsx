import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaUserCircle, FaPowerOff } from "react-icons/fa";
import { SiReact, SiAngular, SiGo } from "react-icons/si";

import windows from '../../assets/images/Windows.png';

export const StartMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* Start Button */}
      <button
        onClick={() => setOpen(!open)}
    
      >
        <img
            src={windows}
            alt="Start"
            className="w-9 h-9"
          />
      </button>

      {/* Start Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 40, x: -200 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-14 left-0 w-[600px] h-[550px] p-4 rounded-2xl bg-blue-900/90 backdrop-blur-xl border border-white/30 shadow-xl"
          >
            {/* Profile */}
            <div className="flex items-center gap-3 mb-4">
              <FaUserCircle className="text-3xl text-white/80" />
              <div>
                <p className="font-semibold text-white">Amirfazel</p>
                <p className="text-sm text-gray-300">Software Engineer</p>
              </div>
            </div>

            {/* Pinned Apps */}
            <div className="grid grid-cols-3 gap-4 mb-4">
              <button className="flex flex-col items-center gap-1 text-white hover:scale-105 transition">
                <SiReact className="text-2xl" />
                <span className="text-xs">About</span>
              </button>
              <button className="flex flex-col items-center gap-1 text-white hover:scale-105 transition">
                <SiAngular className="text-2xl" />
                <span className="text-xs">Projects</span>
              </button>
              <button className="flex flex-col items-center gap-1 text-white hover:scale-105 transition">
                <SiGo className="text-2xl" />
                <span className="text-xs">Resume</span>
              </button>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center">
              <p className="text-gray-300 text-sm">Recommended for you</p>
              <button className="p-2 hover:bg-red-500/20 rounded-full transition">
                <FaPowerOff className="text-red-400" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
