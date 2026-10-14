import React, { useState, useEffect, useRef } from 'react';
import { MenuBar } from './components/MenuBar';
import { Dock } from './components/Dock';
import { WindowFrame } from './components/WindowFrame';
import { AnalogClockWidget } from './components/AnalogClockWidget';
import { CalendarWidget } from './components/CalendarWidget';
import { WeatherWidget } from './components/WeatherWidget';
import { SiriWidget } from './components/SiriWidget';
import { DesktopIcon } from './components/DesktopIcon';
import { SpotlightSearch } from './components/SpotlightSearch';
import { ControlCenter } from './components/ControlCenter';
import { LaunchpadModal } from './components/LaunchpadModal';
import { AppleStartupLoader } from './components/AppleStartupLoader';
import {
  ProjectsIcon,
  SkillsIcon,
  ExperienceIcon,
  AboutIcon,
  BlueFoxAgencyIcon,
  ChatGPTIcon,
  DeepSeekIcon,
  GeminiIcon,
  ResumePDFIcon,
  WhatsAppIcon,
  PhotoEditorIcon,
  VectorEditorIcon,
  SpreadsheetIcon,
  DocumentEditorIcon,
  PresentationEditorIcon,
  SMMPackageIcon,
  NotesJournalIcon,
  FinderFaceIcon,
  SettingsGearIcon,
  CreativeSuiteStackIcon,
  TerminalAppIcon,
  SpotifyIcon,
} from './components/icons/AppIcons';

// Window content views
import { AboutWindow } from './components/windows/AboutWindow';
import { ResumeWindow } from './components/windows/ResumeWindow';
import { SMMPackagesWindow } from './components/windows/SMMPackagesWindow';
import { ProjectsWindow } from './components/windows/ProjectsWindow';
import { SkillsWindow } from './components/windows/SkillsWindow';
import { ExperienceWindow } from './components/windows/ExperienceWindow';
import { ToolsSuiteWindow } from './components/windows/ToolsSuiteWindow';
import { ToolViewerWindow } from './components/windows/ToolViewerWindow';
import { TerminalWindow } from './components/windows/TerminalWindow';
import { SpotifyWindow } from './components/windows/SpotifyWindow';
import { WhatsAppWindow } from './components/windows/WhatsAppWindow';
import { NotesWindow } from './components/windows/NotesWindow';
import { FinderWindow } from './components/windows/FinderWindow';
import { SettingsWindow } from './components/windows/SettingsWindow';

import { AppId, WindowState, SystemSettings } from './types/os';
import { PORTFOLIO_DATA } from './data/portfolioData';
import { sounds } from './utils/soundEffects';

export default function App() {
  const [settings, setSettings] = useState<SystemSettings>({
    wallpaper: 'bipin_desk',
    darkMode: false,
    soundEnabled: true,
    dockMagnification: true,
    timezone: 'Asia/Kathmandu',
  });

  const [isBooting, setIsBooting] = useState<boolean>(true);

  const [windows, setWindows] = useState<Record<string, WindowState>>({
    smm: {
      id: 'smm',
      title: 'Social Media Packages — Blue Fox Pvt Ltd',
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 10,
      position: { x: 70, y: 50 },
      size: { width: 940, height: 620 }
    },
    resume: {
      id: 'resume',
      title: 'resume.pdf — Bipin Chapagain',
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 11,
      position: { x: 90, y: 55 },
      size: { width: 860, height: 600 }
    },
    about: {
      id: 'about',
      title: 'About Bipin Chapagain',
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 12,
      position: { x: 110, y: 65 },
      size: { width: 840, height: 580 }
    },
    projects: {
      id: 'projects',
      title: 'Projects & Case Studies',
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 10,
      position: { x: 120, y: 70 },
      size: { width: 880, height: 580 }
    },
    skills: {
      id: 'skills',
      title: 'Skills & Tools Ecosystem',
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 10,
      position: { x: 130, y: 75 },
      size: { width: 820, height: 560 }
    },
    experience: {
      id: 'experience',
      title: 'Experience & Agency Journey',
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 10,
      position: { x: 140, y: 80 },
      size: { width: 820, height: 560 }
    },
    tools: {
      id: 'tools',
      title: 'Creative Tools & Office Suite',
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 10,
      position: { x: 100, y: 60 },
      size: { width: 890, height: 580 }
    },
    'photo-editor': {
      id: 'photo-editor',
      title: 'Photo Editor (EditItAll)',
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 10,
      position: { x: 80, y: 45 },
      size: { width: 920, height: 600 }
    },
    'vector-editor': {
      id: 'vector-editor',
      title: 'Vector Editor (EditItAll)',
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 10,
      position: { x: 95, y: 55 },
      size: { width: 920, height: 600 }
    },
    spreadsheet: {
      id: 'spreadsheet',
      title: 'Spreadsheet Editor (EditItAll)',
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 10,
      position: { x: 85, y: 50 },
      size: { width: 920, height: 600 }
    },
    document: {
      id: 'document',
      title: 'Document Editor (EditItAll)',
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 10,
      position: { x: 90, y: 52 },
      size: { width: 920, height: 600 }
    },
    presentation: {
      id: 'presentation',
      title: 'Presentation Editor (EditItAll)',
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 10,
      position: { x: 100, y: 58 },
      size: { width: 920, height: 600 }
    },
    vscode: {
      id: 'vscode',
      title: 'Visual Studio Code Web',
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 10,
      position: { x: 60, y: 40 },
      size: { width: 960, height: 620 }
    },
    terminal: {
      id: 'terminal',
      title: 'Terminal — zsh',
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 10,
      position: { x: 140, y: 110 },
      size: { width: 720, height: 460 }
    },
    spotify: {
      id: 'spotify',
      title: 'Spotify — Blue Fox Beats',
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 10,
      position: { x: 130, y: 80 },
      size: { width: 780, height: 500 }
    },
    whatsapp: {
      id: 'whatsapp',
      title: 'WhatsApp — Bipin Chapagain (+977-9742290123)',
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 10,
      position: { x: 150, y: 70 },
      size: { width: 740, height: 520 }
    },
    notes: {
      id: 'notes',
      title: 'Notes & Journal — Vibe Coding',
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 10,
      position: { x: 110, y: 70 },
      size: { width: 760, height: 500 }
    },
    finder: {
      id: 'finder',
      title: 'Finder',
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 10,
      position: { x: 80, y: 60 },
      size: { width: 780, height: 490 }
    },
    settings: {
      id: 'settings',
      title: 'System Settings',
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 10,
      position: { x: 160, y: 75 },
      size: { width: 720, height: 520 }
    }
  });

  const [topZIndex, setTopZIndex] = useState<number>(20);
  const [activeAppId, setActiveAppId] = useState<string | null>('finder');
  const [selectedIconId, setSelectedIconId] = useState<string | null>(null);

  // Overlays
  const [isSpotlightOpen, setIsSpotlightOpen] = useState<boolean>(false);
  const [isControlCenterOpen, setIsControlCenterOpen] = useState<boolean>(false);
  const [isLaunchpadOpen, setIsLaunchpadOpen] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  // Dark mode effect
  useEffect(() => {
    if (settings.darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [settings.darkMode]);

  // Global hotkeys (Cmd+K for Spotlight)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        sounds.playClick();
        setIsSpotlightOpen(prev => !prev);
      }
      if (e.key === 'Escape') {
        setIsSpotlightOpen(false);
        setIsControlCenterOpen(false);
        setIsLaunchpadOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const openApp = (appId: string) => {
    sounds.playOpen();
    if (appId === 'launchpad') {
      setIsLaunchpadOpen(true);
      return;
    }
    if (appId === 'trash') {
      sounds.playClose();
      return;
    }

    const nextZ = topZIndex + 1;
    setTopZIndex(nextZ);
    setActiveAppId(appId);

    setWindows(prev => {
      const target = prev[appId];
      if (!target) return prev;
      return {
        ...prev,
        [appId]: {
          ...target,
          isOpen: true,
          isMinimized: false,
          zIndex: nextZ
        }
      };
    });
  };

  const closeWindow = (appId: string) => {
    setWindows(prev => ({
      ...prev,
      [appId]: { ...prev[appId], isOpen: false }
    }));
    if (activeAppId === appId) {
      setActiveAppId(null);
    }
  };

  const minimizeWindow = (appId: string) => {
    setWindows(prev => ({
      ...prev,
      [appId]: { ...prev[appId], isMinimized: true }
    }));
  };

  const maximizeWindow = (appId: string) => {
    setWindows(prev => ({
      ...prev,
      [appId]: { ...prev[appId], isMaximized: !prev[appId].isMaximized }
    }));
  };

  const focusWindow = (appId: string) => {
    const nextZ = topZIndex + 1;
    setTopZIndex(nextZ);
    setActiveAppId(appId);
    setWindows(prev => ({
      ...prev,
      [appId]: { ...prev[appId], zIndex: nextZ }
    }));
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  // Open apps list for Dock
  const openAppIds = Object.values(windows)
    .filter(w => w.isOpen && !w.isMinimized)
    .map(w => w.id);

  // Active App Title for MenuBar
  const activeWindow = activeAppId ? windows[activeAppId] : null;
  const menuBarTitle = activeWindow?.isOpen ? activeWindow.title.split('—')[0].trim() : 'Finder';

  // Desktop Icons Configuration with content-accurate, distinct logos
  const desktopIcons = [
    // Column 1
    {
      id: 'youtube',
      name: 'YouTube',
      icon: (
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-red-600 to-rose-700 flex items-center justify-center text-white shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
          </svg>
        </div>
      ),
      action: () => openApp('projects')
    },
    {
      id: 'skills',
      name: 'Skills & Tools',
      icon: <SkillsIcon className="w-12 h-12" />,
      action: () => openApp('skills')
    },
    {
      id: 'chatgpt',
      name: 'ChatGPT',
      icon: <ChatGPTIcon className="w-12 h-12" />,
      action: () => openApp('notes')
    },
    {
      id: 'figma',
      name: 'Figma',
      icon: (
        <div className="w-12 h-12 rounded-2xl bg-[#1E1E1E] flex items-center justify-center text-white shadow-xl relative overflow-hidden border border-white/10">
          <div className="grid grid-cols-2 gap-0.5 w-6 h-8">
            <span className="w-3 h-3 bg-[#F24E1E] rounded-l-full" />
            <span className="w-3 h-3 bg-[#FF7262] rounded-r-full" />
            <span className="w-3 h-3 bg-[#A259FF] rounded-l-full" />
            <span className="w-3 h-3 bg-[#1ABCFE] rounded-full" />
            <span className="w-3 h-3 bg-[#0ACF83] rounded-bl-full" />
          </div>
        </div>
      ),
      action: () => openApp('skills')
    },
    {
      id: 'journal',
      name: 'Journal',
      icon: <NotesJournalIcon className="w-12 h-12" />,
      action: () => openApp('notes')
    },

    // Column 2
    {
      id: 'experience',
      name: 'Experience',
      icon: <ExperienceIcon className="w-12 h-12" />,
      action: () => openApp('experience')
    },
    {
      id: 'codex',
      name: 'Codex Dev',
      icon: (
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-slate-900 via-indigo-950 to-slate-900 border border-indigo-500/40 flex items-center justify-center text-cyan-400 shadow-xl font-mono font-bold text-xs">
          &lt;/&gt;
        </div>
      ),
      action: () => openApp('vscode')
    },
    {
      id: 'devlyhub',
      name: 'Blue Fox Agency',
      badge: 'Agency',
      icon: <BlueFoxAgencyIcon className="w-12 h-12" />,
      action: () => openApp('about')
    },
    {
      id: 'blog',
      name: 'Design Articles',
      icon: (
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-rose-500 to-amber-600 flex items-center justify-center text-white shadow-xl p-2 relative overflow-hidden">
          <svg viewBox="0 0 24 24" className="w-7 h-7 text-white" fill="none" stroke="currentColor">
            <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      ),
      action: () => openApp('notes')
    },
    {
      id: 'github',
      name: 'GitHub',
      icon: (
        <div className="w-12 h-12 rounded-2xl bg-slate-950 border border-slate-700/80 flex items-center justify-center text-white shadow-xl">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
        </div>
      ),
      action: () => window.open(PORTFOLIO_DATA.personal.github, '_blank')
    },

    // Column 3
    {
      id: 'deepseek',
      name: 'DeepSeek',
      icon: <DeepSeekIcon className="w-12 h-12" />,
      action: () => openApp('terminal')
    },
    {
      id: 'resume',
      name: 'Resume.pdf',
      badge: 'PDF',
      icon: <ResumePDFIcon className="w-12 h-12" />,
      action: () => openApp('resume')
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      badge: '+977',
      icon: <WhatsAppIcon className="w-12 h-12" />,
      action: () => openApp('whatsapp')
    },
    {
      id: 'gemini',
      name: 'Gemini AI',
      icon: <GeminiIcon className="w-12 h-12" />,
      action: () => openApp('smm')
    },
    {
      id: 'about',
      name: 'About Bipin',
      icon: <AboutIcon className="w-12 h-12" />,
      action: () => openApp('about')
    },

    // Column 4
    {
      id: 'linkedin',
      name: 'LinkedIn',
      icon: (
        <div className="w-12 h-12 rounded-2xl bg-[#0077B5] flex items-center justify-center text-white shadow-xl font-bold text-base">
          in
        </div>
      ),
      action: () => window.open(PORTFOLIO_DATA.personal.linkedin, '_blank')
    },
    {
      id: 'instagram',
      name: 'Instagram',
      icon: (
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 via-pink-600 to-purple-700 flex items-center justify-center text-white shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </div>
      ),
      action: () => window.open(PORTFOLIO_DATA.personal.instagram, '_blank')
    },
    {
      id: 'projects',
      name: 'Projects Showcase',
      icon: <ProjectsIcon className="w-12 h-12" />,
      action: () => openApp('projects')
    },
    {
      id: 'netflix',
      name: 'Netflix',
      icon: (
        <div className="w-12 h-12 rounded-2xl bg-black border border-red-900/50 flex items-center justify-center text-[#E50914] shadow-xl font-serif font-black text-2xl">
          N
        </div>
      ),
      action: () => openApp('spotify')
    },
    {
      id: 'vscode',
      name: 'VS Code Web',
      icon: (
        <div className="w-12 h-12 rounded-2xl bg-[#007ACC] flex items-center justify-center text-white shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.27a.999.999 0 0 0 0 1.459l3.418 3.27-3.418 3.27a1 1 0 0 0 0 1.46l1.322 1.21a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.94-2.377A1.5 1.5 0 0 0 24 19.985V4.015a1.5 1.5 0 0 0-.85-1.428zM18 16.96L9.62 12 18 7.04v9.92z" />
          </svg>
        </div>
      ),
      action: () => openApp('vscode')
    },

    // Special Offer Desktop Icon: SMM Growth Package
    {
      id: 'smm-packages',
      name: 'SMM Package',
      badge: '★ Best Offer',
      icon: <SMMPackageIcon className="w-12 h-12" />,
      action: () => openApp('smm')
    },

    // Creative & Office Suite Apps (Content-Accurate Distinct Icons)
    {
      id: 'photo-editor-app',
      name: 'Photo Editor',
      icon: <PhotoEditorIcon className="w-12 h-12" />,
      action: () => openApp('photo-editor')
    },
    {
      id: 'vector-editor-app',
      name: 'Vector Editor',
      icon: <VectorEditorIcon className="w-12 h-12" />,
      action: () => openApp('vector-editor')
    },
    {
      id: 'sheet-editor-app',
      name: 'Spreadsheet',
      icon: <SpreadsheetIcon className="w-12 h-12" />,
      action: () => openApp('spreadsheet')
    },
    {
      id: 'doc-editor-app',
      name: 'Document',
      icon: <DocumentEditorIcon className="w-12 h-12" />,
      action: () => openApp('document')
    },
    {
      id: 'slides-editor-app',
      name: 'Presentation',
      icon: <PresentationEditorIcon className="w-12 h-12" />,
      action: () => openApp('presentation')
    }
  ];

  // Wallpaper styling
  const wallpaperBackground =
    settings.wallpaper === 'bipin_desk'
      ? `url(/src/assets/images/bipin_desk_portrait_1791987295213.jpg)`
      : settings.wallpaper === 'coastal'
      ? `url(/src/assets/images/macos_coastal_wallpaper_1791984786042.jpg)`
      : settings.wallpaper === 'framer_showcase'
      ? `url(https://framerusercontent.com/images/zRQQpx0shzwwJ4uBXBND3yibyLQ.webp)`
      : settings.wallpaper === 'sonoma'
      ? `url(/src/assets/images/smm_growth_banner_1791984783621.jpg)`
      : settings.wallpaper === 'dark'
      ? `url(https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1920&q=80)`
      : `radial-gradient(ellipse at 80% 20%, #4c1d95, #1e1b4b 60%, #030712 100%)`;

  return (
    <div
      onClick={() => {
        setSelectedIconId(null);
        setIsControlCenterOpen(false);
      }}
      className="relative w-screen h-screen overflow-hidden font-sans select-none"
      style={{
        backgroundImage: wallpaperBackground,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Apple iOS / macOS Startup Boot Sequence & "hello" Animation */}
      {isBooting && (
        <AppleStartupLoader onComplete={() => setIsBooting(false)} />
      )}

      {/* Top macOS Menu Bar */}
      <MenuBar
        activeAppTitle={menuBarTitle}
        darkMode={settings.darkMode}
        onToggleDarkMode={() => setSettings(s => ({ ...s, darkMode: !s.darkMode }))}
        onOpenSpotlight={() => setIsSpotlightOpen(true)}
        onToggleControlCenter={() => setIsControlCenterOpen(prev => !prev)}
        onOpenApp={openApp}
        isFullscreen={isFullscreen}
        onToggleFullscreen={toggleFullscreen}
        onReplayBoot={() => setIsBooting(true)}
      />

      {/* Control Center Popover */}
      <ControlCenter
        isOpen={isControlCenterOpen}
        onClose={() => setIsControlCenterOpen(false)}
        darkMode={settings.darkMode}
        onToggleDarkMode={() => setSettings(s => ({ ...s, darkMode: !s.darkMode }))}
        soundEnabled={settings.soundEnabled}
        onToggleSound={() => {
          const next = !settings.soundEnabled;
          sounds.setMuted(!next);
          setSettings(s => ({ ...s, soundEnabled: next }));
        }}
      />

      {/* Spotlight Search Overlay */}
      <SpotlightSearch
        isOpen={isSpotlightOpen}
        onClose={() => setIsSpotlightOpen(false)}
        onOpenApp={openApp}
      />

      {/* Fullscreen Launchpad Modal */}
      <LaunchpadModal
        isOpen={isLaunchpadOpen}
        onClose={() => setIsLaunchpadOpen(false)}
        onOpenApp={openApp}
        apps={desktopIcons.map(d => ({ id: d.id, name: d.name, icon: d.icon }))}
      />

      {/* Desktop Main Workspace Area */}
      <div className="absolute inset-0 pt-9 pb-20 px-4 md:px-8 overflow-hidden pointer-events-auto">
        {/* Desktop Widgets Area: Top Right Calendar & Weather, with Clock right-aligned directly below Weather */}
        <div className="absolute top-11 right-4 md:right-8 flex flex-col items-end gap-3 z-0 pointer-events-auto">
          <div className="flex flex-col sm:flex-row items-end gap-3">
            <CalendarWidget />
            <WeatherWidget />
          </div>
          {/* Analog Clock Widget: Right-aligned below weather */}
          <div className="flex justify-end">
            <AnalogClockWidget className="w-52 h-52 sm:w-56 sm:h-56" />
          </div>
        </div>

        {/* Desktop App Icons Columns (matching desktop ui.png left side layout) */}
        <div className="relative z-10 grid grid-flow-col grid-rows-5 md:grid-rows-5 gap-y-2 gap-x-2 w-max max-h-[calc(100vh-140px)] overflow-x-auto pointer-events-auto">
          {desktopIcons.map((item) => (
            <DesktopIcon
              key={item.id}
              id={item.id}
              name={item.name}
              icon={item.icon}
              badge={item.badge}
              isSelected={selectedIconId === item.id}
              onSelect={() => setSelectedIconId(item.id)}
              onDoubleClick={() => item.action()}
            />
          ))}
        </div>
      </div>

      {/* Siri Interactive Assistant Orb (Bottom Right) */}
      <SiriWidget onOpenApp={openApp} />

      {/* Open Window Frames System */}

      {/* 1. SMM Packages Window (Special Developer Offer) */}
      <WindowFrame
        id="smm"
        title="Social Media Packages — Blue Fox Pvt Ltd"
        icon={<SMMPackageIcon className="w-4 h-4" />}
        isOpen={windows.smm.isOpen}
        isMinimized={windows.smm.isMinimized}
        isMaximized={windows.smm.isMaximized}
        zIndex={windows.smm.zIndex}
        initialPosition={{ x: 60, y: 45 }}
        initialSize={{ width: 980, height: 640 }}
        onClose={() => closeWindow('smm')}
        onMinimize={() => minimizeWindow('smm')}
        onMaximize={() => maximizeWindow('smm')}
        onFocus={() => focusWindow('smm')}
      >
        <SMMPackagesWindow />
      </WindowFrame>

      {/* 2. Resume.pdf Window */}
      <WindowFrame
        id="resume"
        title="resume.pdf — Bipin Chapagain"
        icon={<ResumePDFIcon className="w-4 h-4" />}
        isOpen={windows.resume.isOpen}
        isMinimized={windows.resume.isMinimized}
        isMaximized={windows.resume.isMaximized}
        zIndex={windows.resume.zIndex}
        initialPosition={{ x: 80, y: 50 }}
        initialSize={{ width: 880, height: 620 }}
        onClose={() => closeWindow('resume')}
        onMinimize={() => minimizeWindow('resume')}
        onMaximize={() => maximizeWindow('resume')}
        onFocus={() => focusWindow('resume')}
      >
        <ResumeWindow />
      </WindowFrame>

      {/* 3. About Window */}
      <WindowFrame
        id="about"
        title="About Bipin Chapagain — Creative UI/UX Designer & Vibe Coder"
        icon={<AboutIcon className="w-4 h-4" />}
        isOpen={windows.about.isOpen}
        isMinimized={windows.about.isMinimized}
        isMaximized={windows.about.isMaximized}
        zIndex={windows.about.zIndex}
        initialPosition={{ x: 100, y: 60 }}
        initialSize={{ width: 860, height: 600 }}
        onClose={() => closeWindow('about')}
        onMinimize={() => minimizeWindow('about')}
        onMaximize={() => maximizeWindow('about')}
        onFocus={() => focusWindow('about')}
      >
        <AboutWindow />
      </WindowFrame>

      {/* 4. Projects Window */}
      <WindowFrame
        id="projects"
        title="Projects & Works — Blue Fox Agency"
        icon={<ProjectsIcon className="w-4 h-4" />}
        isOpen={windows.projects.isOpen}
        isMinimized={windows.projects.isMinimized}
        isMaximized={windows.projects.isMaximized}
        zIndex={windows.projects.zIndex}
        initialPosition={{ x: 110, y: 65 }}
        initialSize={{ width: 890, height: 600 }}
        onClose={() => closeWindow('projects')}
        onMinimize={() => minimizeWindow('projects')}
        onMaximize={() => maximizeWindow('projects')}
        onFocus={() => focusWindow('projects')}
      >
        <ProjectsWindow />
      </WindowFrame>

      {/* 5. Skills Window */}
      <WindowFrame
        id="skills"
        title="Skills & Software Toolchain — Bipin Chapagain"
        icon={<SkillsIcon className="w-4 h-4" />}
        isOpen={windows.skills.isOpen}
        isMinimized={windows.skills.isMinimized}
        isMaximized={windows.skills.isMaximized}
        zIndex={windows.skills.zIndex}
        initialPosition={{ x: 120, y: 70 }}
        initialSize={{ width: 840, height: 580 }}
        onClose={() => closeWindow('skills')}
        onMinimize={() => minimizeWindow('skills')}
        onMaximize={() => maximizeWindow('skills')}
        onFocus={() => focusWindow('skills')}
      >
        <SkillsWindow />
      </WindowFrame>

      {/* 6. Experience Window */}
      <WindowFrame
        id="experience"
        title="Experience & Milestones — Blue Fox Pvt Ltd"
        icon={<ExperienceIcon className="w-4 h-4" />}
        isOpen={windows.experience.isOpen}
        isMinimized={windows.experience.isMinimized}
        isMaximized={windows.experience.isMaximized}
        zIndex={windows.experience.zIndex}
        initialPosition={{ x: 130, y: 75 }}
        initialSize={{ width: 840, height: 580 }}
        onClose={() => closeWindow('experience')}
        onMinimize={() => minimizeWindow('experience')}
        onMaximize={() => maximizeWindow('experience')}
        onFocus={() => focusWindow('experience')}
      >
        <ExperienceWindow />
      </WindowFrame>

      {/* 7. Tools Suite Overview Window */}
      <WindowFrame
        id="tools"
        title="Creative Tools & Office Suite (EditItAll)"
        icon={<CreativeSuiteStackIcon className="w-4 h-4" />}
        isOpen={windows.tools.isOpen}
        isMinimized={windows.tools.isMinimized}
        isMaximized={windows.tools.isMaximized}
        zIndex={windows.tools.zIndex}
        initialPosition={{ x: 90, y: 55 }}
        initialSize={{ width: 900, height: 600 }}
        onClose={() => closeWindow('tools')}
        onMinimize={() => minimizeWindow('tools')}
        onMaximize={() => maximizeWindow('tools')}
        onFocus={() => focusWindow('tools')}
      >
        <ToolsSuiteWindow onLaunchTool={(toolId) => openApp(toolId)} />
      </WindowFrame>

      {/* 8. Photo Editor Window */}
      <WindowFrame
        id="photo-editor"
        title="Photo Editor — EditItAll"
        icon={<PhotoEditorIcon className="w-4 h-4" />}
        isOpen={windows['photo-editor'].isOpen}
        isMinimized={windows['photo-editor'].isMinimized}
        isMaximized={windows['photo-editor'].isMaximized}
        zIndex={windows['photo-editor'].zIndex}
        initialPosition={{ x: 75, y: 40 }}
        initialSize={{ width: 940, height: 620 }}
        onClose={() => closeWindow('photo-editor')}
        onMinimize={() => minimizeWindow('photo-editor')}
        onMaximize={() => maximizeWindow('photo-editor')}
        onFocus={() => focusWindow('photo-editor')}
      >
        <ToolViewerWindow
          toolId="photo-editor"
          name="Photo Editor"
          url="https://edititall.com/photo-editor/app"
          description="Layers, blend modes, brushes, selections, curves and 55+ filters."
        />
      </WindowFrame>

      {/* 9. Vector Editor Window */}
      <WindowFrame
        id="vector-editor"
        title="Vector Editor — EditItAll"
        icon={<VectorEditorIcon className="w-4 h-4" />}
        isOpen={windows['vector-editor'].isOpen}
        isMinimized={windows['vector-editor'].isMinimized}
        isMaximized={windows['vector-editor'].isMaximized}
        zIndex={windows['vector-editor'].zIndex}
        initialPosition={{ x: 85, y: 45 }}
        initialSize={{ width: 940, height: 620 }}
        onClose={() => closeWindow('vector-editor')}
        onMinimize={() => minimizeWindow('vector-editor')}
        onMaximize={() => maximizeWindow('vector-editor')}
        onFocus={() => focusWindow('vector-editor')}
      >
        <ToolViewerWindow
          toolId="vector-editor"
          name="Vector Editor"
          url="https://edititall.com/vector-editor/app"
          description="Pen tool, Pathfinder booleans, layers, smart guides and SVG import/export."
        />
      </WindowFrame>

      {/* 10. Spreadsheet Window */}
      <WindowFrame
        id="spreadsheet"
        title="Spreadsheet Editor — EditItAll"
        icon={<SpreadsheetIcon className="w-4 h-4" />}
        isOpen={windows.spreadsheet.isOpen}
        isMinimized={windows.spreadsheet.isMinimized}
        isMaximized={windows.spreadsheet.isMaximized}
        zIndex={windows.spreadsheet.zIndex}
        initialPosition={{ x: 80, y: 50 }}
        initialSize={{ width: 940, height: 620 }}
        onClose={() => closeWindow('spreadsheet')}
        onMinimize={() => minimizeWindow('spreadsheet')}
        onMaximize={() => maximizeWindow('spreadsheet')}
        onFocus={() => focusWindow('spreadsheet')}
      >
        <ToolViewerWindow
          toolId="spreadsheet"
          name="Spreadsheet"
          url="https://edititall.com/sheet-editor/app"
          description="Formulas, ranges and instant recalculation, right in your browser."
        />
      </WindowFrame>

      {/* 11. Document Window */}
      <WindowFrame
        id="document"
        title="Document Editor — EditItAll"
        icon={<DocumentEditorIcon className="w-4 h-4" />}
        isOpen={windows.document.isOpen}
        isMinimized={windows.document.isMinimized}
        isMaximized={windows.document.isMaximized}
        zIndex={windows.document.zIndex}
        initialPosition={{ x: 90, y: 55 }}
        initialSize={{ width: 940, height: 620 }}
        onClose={() => closeWindow('document')}
        onMinimize={() => minimizeWindow('document')}
        onMaximize={() => maximizeWindow('document')}
        onFocus={() => focusWindow('document')}
      >
        <ToolViewerWindow
          toolId="document"
          name="Document"
          url="https://edititall.com/word-editor/app"
          description="Write and format rich text with real page layout — nothing is uploaded."
        />
      </WindowFrame>

      {/* 12. Presentation Window */}
      <WindowFrame
        id="presentation"
        title="Presentation Editor — EditItAll"
        icon={<PresentationEditorIcon className="w-4 h-4" />}
        isOpen={windows.presentation.isOpen}
        isMinimized={windows.presentation.isMinimized}
        isMaximized={windows.presentation.isMaximized}
        zIndex={windows.presentation.zIndex}
        initialPosition={{ x: 95, y: 58 }}
        initialSize={{ width: 940, height: 620 }}
        onClose={() => closeWindow('presentation')}
        onMinimize={() => minimizeWindow('presentation')}
        onMaximize={() => maximizeWindow('presentation')}
        onFocus={() => focusWindow('presentation')}
      >
        <ToolViewerWindow
          toolId="presentation"
          name="Presentation"
          url="https://edititall.com/slides-editor/app"
          description="Design slides with shapes and snap-align guides, then present."
        />
      </WindowFrame>

      {/* 13. VS Code Web Window */}
      <WindowFrame
        id="vscode"
        title="Visual Studio Code Web"
        icon={<div className="w-4 h-4 rounded bg-[#007ACC] flex items-center justify-center text-white text-[9px] font-bold">&gt;</div>}
        isOpen={windows.vscode.isOpen}
        isMinimized={windows.vscode.isMinimized}
        isMaximized={windows.vscode.isMaximized}
        zIndex={windows.vscode.zIndex}
        initialPosition={{ x: 60, y: 35 }}
        initialSize={{ width: 980, height: 640 }}
        onClose={() => closeWindow('vscode')}
        onMinimize={() => minimizeWindow('vscode')}
        onMaximize={() => maximizeWindow('vscode')}
        onFocus={() => focusWindow('vscode')}
      >
        <ToolViewerWindow
          toolId="vscode"
          name="VS Code"
          url="https://vscode.dev/"
          description="Online development environment with full code editor and terminal."
        />
      </WindowFrame>

      {/* 14. Terminal Window */}
      <WindowFrame
        id="terminal"
        title="Terminal — bipin@bluefox-mac"
        icon={<TerminalAppIcon className="w-4 h-4" />}
        isOpen={windows.terminal.isOpen}
        isMinimized={windows.terminal.isMinimized}
        isMaximized={windows.terminal.isMaximized}
        zIndex={windows.terminal.zIndex}
        initialPosition={{ x: 140, y: 100 }}
        initialSize={{ width: 720, height: 460 }}
        onClose={() => closeWindow('terminal')}
        onMinimize={() => minimizeWindow('terminal')}
        onMaximize={() => maximizeWindow('terminal')}
        onFocus={() => focusWindow('terminal')}
      >
        <TerminalWindow />
      </WindowFrame>

      {/* 15. Spotify Window */}
      <WindowFrame
        id="spotify"
        title="Spotify — Blue Fox Lo-Fi Sessions"
        icon={<SpotifyIcon className="w-4 h-4" />}
        isOpen={windows.spotify.isOpen}
        isMinimized={windows.spotify.isMinimized}
        isMaximized={windows.spotify.isMaximized}
        zIndex={windows.spotify.zIndex}
        initialPosition={{ x: 120, y: 80 }}
        initialSize={{ width: 780, height: 500 }}
        onClose={() => closeWindow('spotify')}
        onMinimize={() => minimizeWindow('spotify')}
        onMaximize={() => maximizeWindow('spotify')}
        onFocus={() => focusWindow('spotify')}
      >
        <SpotifyWindow />
      </WindowFrame>

      {/* 16. WhatsApp Window */}
      <WindowFrame
        id="whatsapp"
        title="WhatsApp — Bipin Chapagain (+977-9742290123)"
        icon={<WhatsAppIcon className="w-4 h-4" />}
        isOpen={windows.whatsapp.isOpen}
        isMinimized={windows.whatsapp.isMinimized}
        isMaximized={windows.whatsapp.isMaximized}
        zIndex={windows.whatsapp.zIndex}
        initialPosition={{ x: 130, y: 65 }}
        initialSize={{ width: 750, height: 530 }}
        onClose={() => closeWindow('whatsapp')}
        onMinimize={() => minimizeWindow('whatsapp')}
        onMaximize={() => maximizeWindow('whatsapp')}
        onFocus={() => focusWindow('whatsapp')}
      >
        <WhatsAppWindow />
      </WindowFrame>

      {/* 17. Notes & Journal Window */}
      <WindowFrame
        id="notes"
        title="Notes & Journal — Vibe Coding & Marketing"
        icon={<NotesJournalIcon className="w-4 h-4" />}
        isOpen={windows.notes.isOpen}
        isMinimized={windows.notes.isMinimized}
        isMaximized={windows.notes.isMaximized}
        zIndex={windows.notes.zIndex}
        initialPosition={{ x: 110, y: 70 }}
        initialSize={{ width: 780, height: 520 }}
        onClose={() => closeWindow('notes')}
        onMinimize={() => minimizeWindow('notes')}
        onMaximize={() => maximizeWindow('notes')}
        onFocus={() => focusWindow('notes')}
      >
        <NotesWindow />
      </WindowFrame>

      {/* 18. Finder Window */}
      <WindowFrame
        id="finder"
        title="Finder"
        icon={<FinderFaceIcon className="w-4 h-4" />}
        isOpen={windows.finder.isOpen}
        isMinimized={windows.finder.isMinimized}
        isMaximized={windows.finder.isMaximized}
        zIndex={windows.finder.zIndex}
        initialPosition={{ x: 90, y: 60 }}
        initialSize={{ width: 780, height: 490 }}
        onClose={() => closeWindow('finder')}
        onMinimize={() => minimizeWindow('finder')}
        onMaximize={() => maximizeWindow('finder')}
        onFocus={() => focusWindow('finder')}
      >
        <FinderWindow onOpenFile={(appId) => openApp(appId)} />
      </WindowFrame>

      {/* 19. Settings Window */}
      <WindowFrame
        id="settings"
        title="System Settings"
        icon={<SettingsGearIcon className="w-4 h-4" />}
        isOpen={windows.settings.isOpen}
        isMinimized={windows.settings.isMinimized}
        isMaximized={windows.settings.isMaximized}
        zIndex={windows.settings.zIndex}
        initialPosition={{ x: 150, y: 75 }}
        initialSize={{ width: 740, height: 520 }}
        onClose={() => closeWindow('settings')}
        onMinimize={() => minimizeWindow('settings')}
        onMaximize={() => maximizeWindow('settings')}
        onFocus={() => focusWindow('settings')}
      >
        <SettingsWindow
          settings={settings}
          onUpdateSettings={(newSettings) => setSettings(s => ({ ...s, ...newSettings }))}
        />
      </WindowFrame>

      {/* Bottom Frosted macOS Glass Dock */}
      <Dock
        openApps={openAppIds}
        activeAppId={activeAppId}
        onOpenApp={openApp}
        magnification={settings.dockMagnification}
      />
    </div>
  );
}
