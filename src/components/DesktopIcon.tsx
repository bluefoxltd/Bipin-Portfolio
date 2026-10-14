import React from 'react';
import { sounds } from '../utils/soundEffects';

interface DesktopIconProps {
  id: string;
  name: string;
  icon: React.ReactNode;
  isSelected?: boolean;
  onSelect?: () => void;
  onDoubleClick?: () => void;
  badge?: string;
}

export const DesktopIcon: React.FC<DesktopIconProps> = ({
  name,
  icon,
  isSelected,
  onSelect,
  onDoubleClick,
  badge,
}) => {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        onSelect?.();
      }}
      onDoubleClick={(e) => {
        e.stopPropagation();
        sounds.playOpen();
        onDoubleClick?.();
      }}
      className={`w-20 md:w-22 p-1.5 rounded-xl flex flex-col items-center text-center cursor-pointer select-none transition-all duration-150 group relative ${
        isSelected
          ? 'bg-blue-500/25 ring-1 ring-blue-400/60 backdrop-blur-sm'
          : 'hover:bg-white/15 dark:hover:bg-black/20'
      }`}
    >
      {/* Badge if present */}
      {badge && (
        <span className="absolute -top-1 -right-1 z-10 px-1.5 py-0.2 bg-amber-500 text-black font-extrabold text-[8px] rounded-full uppercase shadow">
          {badge}
        </span>
      )}

      {/* Icon Graphic */}
      <div className="w-13 h-13 md:w-14 md:h-14 flex items-center justify-center filter drop-shadow-md group-hover:scale-105 transition-transform">
        {icon}
      </div>

      {/* Icon Label with shadow for high readability against wallpaper */}
      <span
        className={`text-[11px] md:text-xs font-medium mt-1 leading-tight line-clamp-2 px-1 rounded transition-colors ${
          isSelected
            ? 'bg-blue-600 text-white shadow-sm'
            : 'text-slate-900 dark:text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)] font-medium'
        }`}
      >
        {name}
      </span>
    </div>
  );
};
