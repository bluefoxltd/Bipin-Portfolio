import React, { useState } from 'react';
import { Wifi, Bluetooth, Moon, Sun, Volume2, SunMedium, Radio, Sparkles } from 'lucide-react';
import { sounds } from '../utils/soundEffects';

interface ControlCenterProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
}

export const ControlCenter: React.FC<ControlCenterProps> = ({
  isOpen,
  onClose,
  darkMode,
  onToggleDarkMode,
  soundEnabled,
  onToggleSound,
}) => {
  const [brightness, setBrightness] = useState<number>(90);
  const [volume, setVolume] = useState<number>(80);
  const [wifiActive, setWifiActive] = useState<boolean>(true);
  const [bluetoothActive, setBluetoothActive] = useState<boolean>(true);

  if (!isOpen) return null;

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="fixed top-9 right-3 w-80 p-3.5 rounded-2xl mac-glass shadow-2xl z-50 text-slate-800 dark:text-slate-100 select-none border border-white/30 space-y-3 transition-all"
    >
      {/* Top 2x2 Network Grid */}
      <div className="grid grid-cols-2 gap-2.5">
        {/* Connectivity Card */}
        <div className="p-2.5 rounded-xl bg-white/70 dark:bg-slate-800/80 border border-black/5 dark:border-white/10 space-y-2">
          {/* Wi-Fi */}
          <div
            onClick={() => setWifiActive(!wifiActive)}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors ${wifiActive ? 'bg-blue-600 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-500'}`}>
              <Wifi size={13} />
            </div>
            <div>
              <div className="text-xs font-semibold leading-tight">Wi-Fi</div>
              <div className="text-[10px] text-slate-400 leading-tight">
                {wifiActive ? 'BlueFox_5G' : 'Off'}
              </div>
            </div>
          </div>

          {/* Bluetooth */}
          <div
            onClick={() => setBluetoothActive(!bluetoothActive)}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors ${bluetoothActive ? 'bg-blue-600 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-500'}`}>
              <Bluetooth size={13} />
            </div>
            <div>
              <div className="text-xs font-semibold leading-tight">Bluetooth</div>
              <div className="text-[10px] text-slate-400 leading-tight">
                {bluetoothActive ? 'AirPods Pro' : 'Off'}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Toggles: Dark Mode & Sound */}
        <div className="grid grid-rows-2 gap-2">
          <div
            onClick={() => {
              sounds.playClick();
              onToggleDarkMode();
            }}
            className="p-2 rounded-xl bg-white/70 dark:bg-slate-800/80 border border-black/5 dark:border-white/10 flex items-center gap-2 cursor-pointer hover:bg-white dark:hover:bg-slate-800 transition-colors"
          >
            <div className={`w-7 h-7 rounded-full flex items-center justify-center ${darkMode ? 'bg-blue-600 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-700'}`}>
              {darkMode ? <Moon size={13} /> : <Sun size={13} />}
            </div>
            <div className="text-xs font-semibold">
              {darkMode ? 'Dark Mode' : 'Light Mode'}
            </div>
          </div>

          <div
            onClick={() => {
              sounds.playClick();
              onToggleSound();
            }}
            className="p-2 rounded-xl bg-white/70 dark:bg-slate-800/80 border border-black/5 dark:border-white/10 flex items-center gap-2 cursor-pointer hover:bg-white dark:hover:bg-slate-800 transition-colors"
          >
            <div className={`w-7 h-7 rounded-full flex items-center justify-center ${soundEnabled ? 'bg-purple-600 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-500'}`}>
              <Volume2 size={13} />
            </div>
            <div className="text-xs font-semibold">
              {soundEnabled ? 'Sound On' : 'Muted'}
            </div>
          </div>
        </div>
      </div>

      {/* Display Brightness Slider */}
      <div className="p-2.5 rounded-xl bg-white/70 dark:bg-slate-800/80 border border-black/5 dark:border-white/10 space-y-1.5">
        <div className="flex items-center justify-between text-xs font-semibold">
          <span>Display</span>
          <span className="font-mono text-[10px] opacity-70">{brightness}%</span>
        </div>
        <div className="flex items-center gap-2">
          <SunMedium size={14} className="text-slate-400" />
          <input
            type="range"
            min="20"
            max="100"
            value={brightness}
            onChange={(e) => setBrightness(Number(e.target.value))}
            className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />
        </div>
      </div>

      {/* Sound Volume Slider */}
      <div className="p-2.5 rounded-xl bg-white/70 dark:bg-slate-800/80 border border-black/5 dark:border-white/10 space-y-1.5">
        <div className="flex items-center justify-between text-xs font-semibold">
          <span>Sound</span>
          <span className="font-mono text-[10px] opacity-70">{volume}%</span>
        </div>
        <div className="flex items-center gap-2">
          <Volume2 size={14} className="text-slate-400" />
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-600"
          />
        </div>
      </div>

      {/* Now Playing Widget */}
      <div className="p-2.5 rounded-xl bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-black/5 dark:border-white/10 flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs shadow-sm">
          BF
        </div>
        <div className="flex-1 truncate">
          <div className="text-xs font-semibold truncate">Midnight Vibe Coding</div>
          <div className="text-[10px] text-slate-400 truncate">Bipin Chapagain · Lofi</div>
        </div>
        <Sparkles size={14} className="text-purple-500 animate-pulse" />
      </div>
    </div>
  );
};
