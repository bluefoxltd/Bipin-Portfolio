import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import { sounds } from '../utils/soundEffects';

interface LaunchpadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenApp: (appId: string) => void;
  apps: Array<{
    id: string;
    name: string;
    icon: React.ReactNode;
    category?: string;
  }>;
}

export const LaunchpadModal: React.FC<LaunchpadModalProps> = ({
  isOpen,
  onClose,
  onOpenApp,
  apps,
}) => {
  const [search, setSearch] = useState('');

  if (!isOpen) return null;

  const filtered = search.trim()
    ? apps.filter(a => a.name.toLowerCase().includes(search.toLowerCase()))
    : apps;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-2xl flex flex-col items-center p-6 md:p-12 animate-in fade-in duration-200 select-none text-white"
    >
      {/* Search Bar */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-sm mb-12 flex items-center gap-2.5 px-4 py-2 bg-white/15 rounded-xl border border-white/20 text-xs backdrop-blur-md"
      >
        <Search size={14} className="text-white/60" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Launchpad..."
          autoFocus
          className="w-full bg-transparent border-0 outline-none text-white placeholder:text-white/50 text-xs"
        />
        {search && (
          <button onClick={() => setSearch('')}>
            <X size={12} className="text-white/60" />
          </button>
        )}
      </div>

      {/* App Grid */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-w-5xl w-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-6 md:gap-8 justify-items-center overflow-y-auto max-h-[70vh] p-2"
      >
        {filtered.map((app) => (
          <div
            key={app.id}
            onClick={() => {
              sounds.playOpen();
              onOpenApp(app.id);
              onClose();
            }}
            className="flex flex-col items-center text-center cursor-pointer group hover:scale-110 transition-transform"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center drop-shadow-xl">
              {app.icon}
            </div>
            <span className="text-xs font-medium mt-2 text-white/90 group-hover:text-white truncate max-w-[90px]">
              {app.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
