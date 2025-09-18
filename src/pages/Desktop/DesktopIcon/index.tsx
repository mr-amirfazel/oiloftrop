import type { FC } from "react";

interface DesktopIconProps {
  icon: string;
  label: string;
  onDoubleClick?: () => void;
}

export const DesktopIcon: FC<DesktopIconProps> = ({ icon, label, onDoubleClick }) => {
  return (
    <div
      className="w-20 flex flex-col items-center text-white select-none cursor-pointer group"
      onDoubleClick={onDoubleClick}
    >
      <img src={icon} alt={label} className="w-12 h-12" />
      <span className="mt-1 text-sm text-center group-hover:bg-white/20 rounded px-1">
        {label}
      </span>
    </div>
  );
};
