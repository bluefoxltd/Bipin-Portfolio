import React, { useState, useEffect } from 'react';
import {
  Wifi,
  Bluetooth,
  Battery,
  Search,
  Moon,
  Sun,
  Sliders,
  Maximize,
  Minimize,
  SlidersHorizontal,
  Info,
  Power
} from 'lucide-react';
import { sounds } from '../utils/soundEffects';

interface MenuBarProps {
  activeAppTitle: string;
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenSpotlight: () => void;
  onToggleControlCenter: () => void;
  onOpenApp: (appId: string) => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  onReplayBoot?: () => void;
}

export const MenuBar: React.FC<MenuBarProps> = ({
  activeAppTitle,
  darkMode,
  onToggleDarkMode,
  onOpenSpotlight,
  onToggleControlCenter,
  onOpenApp,
  isFullscreen,
  onToggleFullscreen,
  onReplayBoot,
}) => {
  const [timeStr, setTimeStr] = useState<string>('');
  const [showAppleMenu, setShowAppleMenu] = useState<boolean>(false);
  const [showAboutMac, setShowAboutMac] = useState<boolean>(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format: "Wed Oct 14 11:10 AM"
      const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const day = days[now.getDay()];
      const month = months[now.getMonth()];
      const date = now.getDate();
      let hours = now.getHours();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12 || 12;
      const minutes = now.getMinutes().toString().padStart(2, '0');
      setTimeStr(`${day} ${month} ${date} ${hours}:${minutes} ${ampm}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 h-7 z-50 px-3 flex items-center justify-between text-xs select-none backdrop-blur-md bg-white/45 dark:bg-black/50 text-slate-800 dark:text-slate-100 border-b border-white/20 dark:border-white/10 shadow-sm transition-colors">
        {/* Left: Apple Icon + Menu Items */}
        <div className="flex items-center gap-4">
          {/* Apple Logo */}
          <div className="relative">
            <button
              onClick={() => {
                sounds.playClick();
                setShowAppleMenu(!showAppleMenu);
              }}
              className="p-1 hover:bg-black/10 dark:hover:bg-white/15 rounded flex items-center justify-center transition-colors"
              title="Apple Menu"
            >
              <svg width="13" height="15" viewBox="0 0 170 170" fill="currentColor">
                <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.63-7.74-11.78-14.11-6.19-9.5-11.04-20.2-14.54-32.08-3.5-11.88-5.25-23.3-5.25-34.25 0-14.4 3.66-26.4 10.98-36 7.32-9.6 16.59-14.48 27.81-14.64 5.37 0 11.09 1.48 17.16 4.45 6.07 2.97 10.08 4.45 12.02 4.45 1.76 0 5.79-1.48 12.08-4.45 6.29-2.97 11.96-4.37 17.02-4.2 12.58.55 22.7 5.28 30.36 14.2-11.08 6.74-16.51 15.93-16.29 27.57.22 9.17 3.86 16.89 10.92 23.16 7.06 6.27 15.5 9.77 25.32 10.5-2.22 6.53-4.99 13.06-8.3 19.59zM119.22 31.84c0-7.39 2.68-14.42 8.04-21.09 5.36-6.67 12.08-10.75 20.16-12.25.11 1.09.16 2.07.16 2.94 0 7.39-2.82 14.5-8.46 21.33-5.64 6.83-12.44 10.75-20.4 11.76-.22-.87-.33-1.77-.33-2.69z" />
              </svg>
            </button>

            {/* Apple Dropdown Menu */}
            {showAppleMenu && (
              <div
                className="absolute top-8 left-0 w-64 py-2 bg-neutral-900/98 backdrop-blur-2xl rounded-2xl shadow-2xl z-50 text-xs border border-white/20 text-slate-100 divide-y divide-white/10 select-none animate-in fade-in zoom-in-95 duration-100"
                onClick={() => setShowAppleMenu(false)}
              >
                <div className="py-1 px-1.5 space-y-0.5">
                  <button
                    onClick={() => setShowAboutMac(true)}
                    className="w-full text-left px-3 py-1.5 rounded-lg hover:bg-blue-600 hover:text-white transition-colors text-slate-100 font-medium flex items-center justify-between"
                  >
                    <span>About This Mac</span>
                    <span className="text-[10px] text-slate-400"></span>
                  </button>
                  <button
                    onClick={() => onOpenApp('settings')}
                    className="w-full text-left px-3 py-1.5 rounded-lg hover:bg-blue-600 hover:text-white transition-colors text-slate-100 font-medium"
                  >
                    System Settings...
                  </button>
                  <button
                    onClick={() => onOpenApp('smm')}
                    className="w-full text-left px-3 py-1.5 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-semibold text-blue-400 flex items-center justify-between"
                  >
                    <span>★ SMM Packages (Special Offer)</span>
                    <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 font-mono">Offer</span>
                  </button>
                </div>

                <div className="py-1 px-1.5 space-y-0.5">
                  <button
                    onClick={() => onOpenApp('resume')}
                    className="w-full text-left px-3 py-1.5 rounded-lg hover:bg-blue-600 hover:text-white transition-colors text-slate-100 font-medium"
                  >
                    Open Resume.pdf (CV 2026)
                  </button>
                  <button
                    onClick={() => onOpenApp('tools')}
                    className="w-full text-left px-3 py-1.5 rounded-lg hover:bg-blue-600 hover:text-white transition-colors text-slate-100 font-medium"
                  >
                    Creative & Office Suite
                  </button>
                  <button
                    onClick={() => onOpenApp('terminal')}
                    className="w-full text-left px-3 py-1.5 rounded-lg hover:bg-blue-600 hover:text-white transition-colors text-slate-100 font-medium"
                  >
                    Terminal (zsh)
                  </button>
                </div>

                <div className="py-1 px-1.5 space-y-0.5">
                  {onReplayBoot && (
                    <button
                      onClick={() => {
                        sounds.playClick();
                        onReplayBoot();
                      }}
                      className="w-full text-left px-3 py-1.5 rounded-lg hover:bg-blue-600 hover:text-white transition-colors text-slate-100 font-medium flex items-center justify-between"
                    >
                      <span>Replay Apple Boot & "hello"</span>
                      <span className="text-[10px] text-slate-400">⌘R</span>
                    </button>
                  )}
                  <button
                    onClick={() => {
                      sounds.playClose();
                      window.location.reload();
                    }}
                    className="w-full text-left px-3 py-1.5 rounded-lg hover:bg-rose-600 hover:text-white transition-colors text-rose-300 font-medium"
                  >
                    Restart Session...
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Active App Name */}
          <span className="font-bold text-slate-900 dark:text-white tracking-tight">
            {activeAppTitle || 'Finder'}
          </span>

          {/* Standard Menu Dropdowns */}
          <div className="hidden md:flex items-center gap-3 text-slate-700 dark:text-slate-200">
            <button onClick={() => onOpenApp('finder')} className="hover:text-black dark:hover:text-white transition-colors">
              File
            </button>
            <button onClick={() => onOpenApp('about')} className="hover:text-black dark:hover:text-white transition-colors">
              About
            </button>
            <button onClick={() => onOpenApp('projects')} className="hover:text-black dark:hover:text-white transition-colors">
              Projects
            </button>
            <button onClick={() => onOpenApp('skills')} className="hover:text-black dark:hover:text-white transition-colors">
              Skills
            </button>
            <button onClick={() => onOpenApp('smm')} className="hover:text-blue-600 dark:hover:text-blue-400 font-semibold transition-colors">
              SMM Packages
            </button>
            <button onClick={() => onOpenApp('whatsapp')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              WhatsApp
            </button>
          </div>
        </div>

        {/* Right: Controls & Status Indicators */}
        <div className="flex items-center gap-3">
          {/* Dark / Light Mode Toggle */}
          <button
            onClick={onToggleDarkMode}
            className="p-1 hover:bg-black/10 dark:hover:bg-white/15 rounded transition-colors text-slate-700 dark:text-slate-200"
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {darkMode ? <Sun size={13} /> : <Moon size={13} />}
          </button>

          {/* Fullscreen Toggle */}
          <button
            onClick={onToggleFullscreen}
            className="hidden sm:flex p-1 hover:bg-black/10 dark:hover:bg-white/15 rounded transition-colors text-slate-700 dark:text-slate-200"
            title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
          >
            {isFullscreen ? <Minimize size={13} /> : <Maximize size={13} />}
          </button>

          {/* Spotlight Search */}
          <button
            onClick={() => {
              sounds.playClick();
              onOpenSpotlight();
            }}
            className="p-1 hover:bg-black/10 dark:hover:bg-white/15 rounded transition-colors text-slate-700 dark:text-slate-200"
            title="Spotlight Search (Cmd + K)"
          >
            <Search size={13} />
          </button>

          {/* Wi-Fi Icon */}
          <div className="p-1 text-slate-700 dark:text-slate-200" title="Wi-Fi: Connected to BlueFox_5G">
            <Wifi size={13} />
          </div>

          {/* Bluetooth Icon */}
          <div className="p-1 text-slate-700 dark:text-slate-200" title="Bluetooth: Active">
            <Bluetooth size={13} />
          </div>

          {/* Battery Status */}
          <div className="flex items-center gap-1 text-[11px] font-mono text-slate-700 dark:text-slate-200" title="Battery: 87% (Power Adapter Connected)">
            <Battery size={15} className="rotate-90 text-emerald-500" />
            <span className="hidden sm:inline">87%</span>
          </div>

          {/* Control Center Toggle */}
          <button
            onClick={() => {
              sounds.playClick();
              onToggleControlCenter();
            }}
            className="p-1 hover:bg-black/10 dark:hover:bg-white/15 rounded transition-colors text-slate-700 dark:text-slate-200"
            title="Control Center"
          >
            <SlidersHorizontal size={13} />
          </button>

          {/* Clock & Date */}
          <span className="text-[11px] font-medium text-slate-800 dark:text-slate-100 whitespace-nowrap pl-1">
            {timeStr}
          </span>
        </div>
      </header>

      {/* About This Mac Modal */}
      {showAboutMac && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md">
          <div className="w-84 p-6 rounded-3xl bg-neutral-900/98 text-white shadow-2xl border border-white/20 text-center relative select-none animate-in fade-in zoom-in-95 duration-150">
            <button
              onClick={() => setShowAboutMac(false)}
              className="absolute top-4 right-4 w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
            >
              ✕
            </button>
            <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-700 flex items-center justify-center text-white shadow-lg">
              <svg width="32" height="36" viewBox="0 0 170 170" fill="currentColor">
                <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.63-7.74-11.78-14.11-6.19-9.5-11.04-20.2-14.54-32.08-3.5-11.88-5.25-23.3-5.25-34.25 0-14.4 3.66-26.4 10.98-36 7.32-9.6 16.59-14.48 27.81-14.64 5.37 0 11.09 1.48 17.16 4.45 6.07 2.97 10.08 4.45 12.02 4.45 1.76 0 5.79-1.48 12.08-4.45 6.29-2.97 11.96-4.37 17.02-4.2 12.58.55 22.7 5.28 30.36 14.2-11.08 6.74-16.51 15.93-16.29 27.57.22 9.17 3.86 16.89 10.92 23.16 7.06 6.27 15.5 9.77 25.32 10.5-2.22 6.53-4.99 13.06-8.3 19.59zM119.22 31.84c0-7.39 2.68-14.42 8.04-21.09 5.36-6.67 12.08-10.75 20.16-12.25.11 1.09.16 2.07.16 2.94 0 7.39-2.82 14.5-8.46 21.33-5.64 6.83-12.44 10.75-20.4 11.76-.22-.87-.33-1.77-.33-2.69z" />
              </svg>
            </div>
            <h2 className="text-lg font-bold text-white">macOS BlueFox Edition</h2>
            <p className="text-xs text-slate-400 mb-4">Version 15.2 (Bipin Chapagain Studio)</p>
            <div className="text-xs text-left space-y-1.5 border-t border-b border-white/10 py-3 text-slate-300">
              <div><span className="font-semibold text-white">Creator:</span> Bipin Chapagain</div>
              <div><span className="font-semibold text-white">Agency:</span> Blue Fox Pvt Ltd</div>
              <div><span className="font-semibold text-white">Role:</span> UI/UX Designer & Vibe Coder</div>
              <div><span className="font-semibold text-white">Chip:</span> Apple M3 Max (Vibe Engine)</div>
              <div><span className="font-semibold text-white">Memory:</span> 64 GB Creative Unified Memory</div>
              <div><span className="font-semibold text-white">Location:</span> Itahari, Sunsari, Nepal</div>
            </div>
            <button
              onClick={() => {
                setShowAboutMac(false);
                onOpenApp('resume');
              }}
              className="mt-4 w-full px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md transition-colors"
            >
              View Full Resume.pdf
            </button>
          </div>
        </div>
      )}
    </>
  );
};
