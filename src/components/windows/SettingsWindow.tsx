import React from 'react';
import { Monitor, Volume2, Moon, Sun, Sliders, Check, Sparkles, Image as ImageIcon } from 'lucide-react';
import { WallpaperId, SystemSettings } from '../../types/os';
import { sounds } from '../../utils/soundEffects';

interface SettingsWindowProps {
  settings: SystemSettings;
  onUpdateSettings: (newSettings: Partial<SystemSettings>) => void;
}

export const SettingsWindow: React.FC<SettingsWindowProps> = ({
  settings,
  onUpdateSettings,
}) => {
  const wallpapers: { id: WallpaperId; name: string; preview: string; isDefault?: boolean }[] = [
    {
      id: 'bipin_desk',
      name: "Bipin's Creative Studio (Default)",
      preview: '/src/assets/images/bipin_desk_portrait_1791987295213.jpg',
      isDefault: true
    },
    {
      id: 'coastal',
      name: "Kopu's Seaside Cafe",
      preview: '/src/assets/images/macos_coastal_wallpaper_1791984786042.jpg'
    },
    {
      id: 'framer_showcase',
      name: "Framer Portfolio Showcase",
      preview: 'https://framerusercontent.com/images/zRQQpx0shzwwJ4uBXBND3yibyLQ.webp?width=600'
    },
    {
      id: 'sonoma',
      name: "SMM Growth Canvas",
      preview: '/src/assets/images/smm_growth_banner_1791984783621.jpg'
    },
    {
      id: 'dark',
      name: "Midnight Obsidian",
      preview: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'gradient',
      name: "Aurora Gradient",
      preview: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=400&q=80'
    }
  ];

  return (
    <div className="p-6 md:p-8 bg-neutral-950 min-h-full font-sans text-slate-100 select-none">
      <div className="max-w-3xl mx-auto space-y-7">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
              <Sliders size={22} className="text-blue-400" />
              <span>System Settings</span>
            </h1>
            <p className="text-xs text-slate-400 mt-1">
              Personalize your macOS BlueFox desktop environment, wallpapers, appearance, and audio feedback.
            </p>
          </div>
          <div className="px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-300 text-[11px] font-semibold flex items-center gap-1.5">
            <Sparkles size={12} />
            macOS Sequoia
          </div>
        </div>

        {/* Desktop Wallpaper Section */}
        <div className="bg-neutral-900/90 backdrop-blur-2xl rounded-2xl p-6 border border-white/10 shadow-xl space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Monitor size={16} className="text-blue-400" />
              <h2 className="text-sm font-bold text-white">
                Desktop Wallpaper
              </h2>
            </div>
            <span className="text-[11px] text-slate-400">
              Click to instantly set wallpaper
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {wallpapers.map((wp) => {
              const isSelected = settings.wallpaper === wp.id;
              return (
                <div
                  key={wp.id}
                  onClick={() => {
                    sounds.playClick();
                    onUpdateSettings({ wallpaper: wp.id });
                  }}
                  className={`group cursor-pointer rounded-2xl overflow-hidden border-2 transition-all relative ${
                    isSelected
                      ? 'border-blue-500 shadow-xl shadow-blue-500/20 scale-102 ring-2 ring-blue-500/40'
                      : 'border-white/10 hover:border-white/30 bg-neutral-800/50'
                  }`}
                >
                  <div className="aspect-video w-full bg-neutral-800 relative overflow-hidden">
                    <img
                      src={wp.preview}
                      alt={wp.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    
                    {wp.isDefault && (
                      <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-blue-600/90 text-white font-extrabold text-[9px] uppercase tracking-wider shadow">
                        Default
                      </div>
                    )}

                    {isSelected && (
                      <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-lg">
                        <Check size={14} strokeWidth={3} />
                      </div>
                    )}
                  </div>
                  <div className="p-2.5 bg-neutral-900/95 text-[11px] font-medium text-slate-200 flex items-center justify-between gap-1 truncate">
                    <span className="truncate">{wp.name}</span>
                    {isSelected && (
                      <span className="text-[10px] text-blue-400 font-bold shrink-0">Active</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Appearance & Sound Controls */}
        <div className="bg-neutral-900/90 backdrop-blur-2xl rounded-2xl p-6 border border-white/10 shadow-xl space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <Sliders size={16} className="text-blue-400" />
            <h2 className="text-sm font-bold text-white">
              Environment Preferences
            </h2>
          </div>

          {/* Dark Mode Toggle */}
          <div className="flex items-center justify-between py-2 border-b border-white/5">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
              {settings.darkMode ? <Moon size={15} className="text-blue-400" /> : <Sun size={15} className="text-amber-400" />}
              <span>Dark Appearance</span>
            </div>
            <button
              onClick={() => {
                sounds.playClick();
                onUpdateSettings({ darkMode: !settings.darkMode });
              }}
              className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors ${
                settings.darkMode ? 'bg-blue-600 justify-end' : 'bg-neutral-700 justify-start'
              }`}
            >
              <div className="bg-white w-4 h-4 rounded-full shadow-md" />
            </button>
          </div>

          {/* Sound Effects Toggle */}
          <div className="flex items-center justify-between py-2 border-b border-white/5">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
              <Volume2 size={15} className="text-blue-400" />
              <span>System Sound Effects</span>
            </div>
            <button
              onClick={() => {
                const nextVal = !settings.soundEnabled;
                sounds.setMuted(!nextVal);
                onUpdateSettings({ soundEnabled: nextVal });
                if (nextVal) sounds.playClick();
              }}
              className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors ${
                settings.soundEnabled ? 'bg-blue-600 justify-end' : 'bg-neutral-700 justify-start'
              }`}
            >
              <div className="bg-white w-4 h-4 rounded-full shadow-md" />
            </button>
          </div>

          {/* Dock Magnification */}
          <div className="flex items-center justify-between py-2">
            <div className="text-xs font-semibold text-slate-200">
              <span>Dock Hover Magnification</span>
            </div>
            <button
              onClick={() => {
                sounds.playClick();
                onUpdateSettings({ dockMagnification: !settings.dockMagnification });
              }}
              className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors ${
                settings.dockMagnification ? 'bg-blue-600 justify-end' : 'bg-neutral-700 justify-start'
              }`}
            >
              <div className="bg-white w-4 h-4 rounded-full shadow-md" />
            </button>
          </div>
        </div>

        {/* Wallpaper Custom File Advice */}
        <div className="p-4 rounded-2xl bg-blue-950/30 border border-blue-500/20 text-xs text-blue-200 flex items-center gap-3">
          <ImageIcon size={20} className="text-blue-400 shrink-0" />
          <div>
            <span className="font-bold text-white">Default Wallpaper Set: </span>
            Bipin Chapagain's Creative Studio desk portrait is active as your primary desktop background across all views.
          </div>
        </div>

      </div>
    </div>
  );
};
