import React, { useState } from 'react';
import { sounds } from '../utils/soundEffects';
import {
  FinderFaceIcon,
  LaunchpadRocketIcon,
  SMMPackageIcon,
  CreativeSuiteStackIcon,
  ResumePDFIcon,
  WhatsAppIcon,
  TerminalAppIcon,
  SpotifyIcon,
  SettingsGearIcon,
  TrashAppIcon
} from './icons/AppIcons';

interface DockProps {
  openApps: string[];
  activeAppId: string | null;
  onOpenApp: (appId: string) => void;
  magnification?: boolean;
}

export const Dock: React.FC<DockProps> = ({
  openApps,
  activeAppId,
  onOpenApp,
  magnification = true,
}) => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const dockApps = [
    {
      id: 'finder',
      name: 'Finder',
      icon: <FinderFaceIcon />
    },
    {
      id: 'launchpad',
      name: 'Launchpad',
      icon: <LaunchpadRocketIcon />
    },
    {
      id: 'smm',
      name: 'SMM Packages (Offer)',
      badge: 'Offer',
      icon: <SMMPackageIcon />
    },
    {
      id: 'tools',
      name: 'Tools & Editors',
      icon: <CreativeSuiteStackIcon />
    },
    {
      id: 'resume',
      name: 'Resume.pdf',
      icon: <ResumePDFIcon />
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp (+977-9742290123)',
      icon: <WhatsAppIcon />
    },
    {
      id: 'terminal',
      name: 'Terminal',
      icon: <TerminalAppIcon />
    },
    {
      id: 'spotify',
      name: 'Spotify Lo-Fi',
      icon: <SpotifyIcon />
    },
    {
      id: 'settings',
      name: 'Settings',
      icon: <SettingsGearIcon />
    },
    {
      id: 'trash',
      name: 'Trash',
      icon: <TrashAppIcon />
    }
  ];

  return (
    <div className="fixed bottom-2.5 left-1/2 -translate-x-1/2 z-40 select-none">
      <div className="px-3 py-2 rounded-2xl mac-dock-glass flex items-end gap-2.5 transition-all">
        {dockApps.map((app, idx) => {
          const isOpen = openApps.includes(app.id);
          const isHovered = hoveredIdx === idx;

          // Scale calculation for smooth magnification
          let scale = 1;
          if (magnification && hoveredIdx !== null) {
            const dist = Math.abs(hoveredIdx - idx);
            if (dist === 0) scale = 1.35;
            else if (dist === 1) scale = 1.18;
            else if (dist === 2) scale = 1.05;
          }

          return (
            <div
              key={app.id}
              className="relative flex flex-col items-center group cursor-pointer"
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              onClick={() => {
                sounds.playOpen();
                onOpenApp(app.id);
              }}
            >
              {/* Tooltip on hover */}
              {isHovered && (
                <div className="absolute -top-10 px-3 py-1 rounded-lg bg-black/80 backdrop-blur-md text-white text-[11px] font-medium whitespace-nowrap shadow-xl pointer-events-none z-50">
                  {app.name}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black/80 rotate-45" />
                </div>
              )}

              {/* Icon Container with magnification */}
              <div
                className="w-12 h-12 md:w-13 md:h-13 transition-transform duration-150 origin-bottom"
                style={{
                  transform: `scale(${scale}) translateY(${scale > 1 ? -(scale - 1) * 16 : 0}px)`
                }}
              >
                {app.icon}
              </div>

              {/* Running App Indicator Dot */}
              <div className="h-1.5 mt-1 flex items-center justify-center">
                {isOpen && (
                  <span className="w-1 h-1 rounded-full bg-slate-900 dark:bg-white shadow-sm" />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
