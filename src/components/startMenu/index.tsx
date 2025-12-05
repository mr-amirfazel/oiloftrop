import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPowerOff } from "react-icons/fa";

import windows from '../../assets/images/Windows.png';
import { startMenuItems } from "@/constants/start";
import { useWindowManager } from "@/context/WindowManagerContext";
import { pfp } from "@/constants/about";

export const StartMenu = () => {
  const [open, setOpen] = useState(false);
  const { openWindow } = useWindowManager();

  const openById = (id: string) => {
      const window = startMenuItems.filter(item => item.id == id);
      if(window.length == 0) return;
      const Comp = window[0].component!;
      openWindow({...window[0], component: <Comp />, allowMultiple: false, width:1350, height:850})
    };

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
            className="absolute bottom-14 left-0 w-[600px] h-[550px] p-4 rounded-2xl bg-blue-900/90 backdrop-blur-xl border border-white/30 shadow-xl flex flex-col justify-between"
          >
            {/* Profile */}
            <div className="flex items-center gap-3 mb-4 ">
              {/* <FaUserCircle className="text-3xl text-white/80" />
               */}
               <div className="flex-shrink-0">
              <img
                className="w-10 h-10 rounded-full ring-4 ring-white/20 shadow-md"
                src={pfp}
                alt="Amirfazel"
              />
            </div>
              <div className="flex flex-row gap-4">
                <p className="font-semibold text-white">Amirfazel</p> 
                <p className="font-semibold text-white">-</p> 
                <p className="font-semibold text-white">Software Engineer</p>
              </div>
            </div>

            {/* Pinned Apps */}
            <div className="grid grid-cols-3 gap-4 mb-4 self-stretch flex-1 ">
              {startMenuItems.map(item => (
                <button onClick={() => item?.component ? openById(item.id) : item?.onClick!()} className="flex flex-col items-center gap-1 text-white hover:scale-105 transition cursor-pointer">
                <img src={item.image} alt=""  className="w-10 h-10"/>
                <span className="text-xs">{item.title}</span>
              </button>
              ))}
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
