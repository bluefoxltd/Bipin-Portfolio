import React, { useState, useEffect, useRef } from 'react';
import { Search, ArrowRight, AppWindow, Folder, Sparkles, MessageCircle, FileText, Code } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { sounds } from '../utils/soundEffects';
import {
  ProjectsIcon,
  SkillsIcon,
  ExperienceIcon,
  AboutIcon,
  ResumePDFIcon,
  WhatsAppIcon,
  SpotifyIcon,
  TerminalAppIcon,
  SettingsGearIcon,
  PhotoEditorIcon,
  VectorEditorIcon,
  SpreadsheetIcon,
  DocumentEditorIcon,
  PresentationEditorIcon,
  SMMPackageIcon,
  CreativeSuiteStackIcon
} from './icons/AppIcons';

interface SpotlightSearchProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenApp: (appId: string) => void;
}

export const SpotlightSearch: React.FC<SpotlightSearchProps> = ({
  isOpen,
  onClose,
  onOpenApp,
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const allItems = [
    { id: 'smm', title: 'SMM Packages (Special Offer)', category: 'Offer', type: 'app', desc: 'Social Media growth packages from Rs 8,000/mo' },
    { id: 'resume', title: 'Resume.pdf', category: 'Document', type: 'doc', desc: 'Bipin Chapagain CV, Experience, & Education' },
    { id: 'about', title: 'About Bipin Chapagain', category: 'Profile', type: 'app', desc: 'Bio, creative direction, vibe coding philosophy' },
    { id: 'projects', title: 'Projects Showcase', category: 'Portfolio', type: 'folder', desc: 'Framer apps, web platforms, design systems' },
    { id: 'skills', title: 'Skills & Tools', category: 'Expertise', type: 'folder', desc: 'Figma, Framer, React, Tailwind, Meta Ads' },
    { id: 'experience', title: 'Experience & Agency', category: 'Career', type: 'folder', desc: 'Blue Fox Pvt Ltd Founder & milestones' },
    { id: 'tools', title: 'Creative & Office Tools Suite', category: 'Suite', type: 'app', desc: 'Photo Editor, Vector, Sheets, Word, Slides' },
    { id: 'photo-editor', title: 'Photo Editor', category: 'Tool', type: 'tool', desc: 'Layers, curves, blend modes and 55+ filters' },
    { id: 'vector-editor', title: 'Vector Editor', category: 'Tool', type: 'tool', desc: 'Pen tool, booleans, SVG import/export' },
    { id: 'spreadsheet', title: 'Spreadsheet Editor', category: 'Tool', type: 'tool', desc: 'Formulas, ranges and data calculation' },
    { id: 'document', title: 'Document Editor', category: 'Tool', type: 'tool', desc: 'Rich text writer and layout' },
    { id: 'presentation', title: 'Presentation Editor', category: 'Tool', type: 'tool', desc: 'Slide decks and shape alignment' },
    { id: 'vscode', title: 'VS Code Web', category: 'Developer', type: 'tool', desc: 'Full-featured online development IDE' },
    { id: 'whatsapp', title: 'WhatsApp (+977-9742290123)', category: 'Contact', type: 'chat', desc: 'Direct chat with Bipin Chapagain' },
    { id: 'terminal', title: 'Terminal (zsh)', category: 'Utility', type: 'app', desc: 'System telemetry, neofetch, commands' },
    { id: 'spotify', title: 'Spotify Lo-fi Player', category: 'Media', type: 'app', desc: 'Procedural synth lo-fi beats' },
    { id: 'settings', title: 'System Settings', category: 'System', type: 'app', desc: 'Wallpapers, themes, and sound toggles' }
  ];

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
      setQuery('');
    }
  }, [isOpen]);

  const filtered = query.trim()
    ? allItems.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.desc.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      )
    : allItems.slice(0, 7);

  const handleSelect = (item: typeof allItems[0]) => {
    sounds.playOpen();
    onOpenApp(item.id);
    onClose();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev + 1) % filtered.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev - 1 + filtered.length) % filtered.length);
    } else if (e.key === 'Enter') {
      if (filtered[selectedIndex]) {
        handleSelect(filtered[selectedIndex]);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-start justify-center pt-[18vh] bg-black/45 backdrop-blur-md p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-xl rounded-2xl mac-glass shadow-2xl border border-white/40 overflow-hidden text-slate-800 dark:text-slate-100 flex flex-col"
      >
        {/* Search Input */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-black/5 dark:border-white/10">
          <Search size={18} className="text-slate-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
            placeholder="Spotlight Search — Type app, project, or tool..."
            className="w-full bg-transparent border-0 outline-none text-base placeholder:text-slate-400 font-medium focus:ring-0 p-0 text-slate-900 dark:text-white"
          />
          <kbd className="hidden sm:inline-block px-2 py-0.5 text-[10px] bg-black/10 dark:bg-white/10 rounded font-mono text-slate-500 dark:text-slate-400">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="p-6 text-center text-xs text-slate-400">
              No matching items found. Try searching for "SMM", "Figma", "Resume", or "WhatsApp".
            </div>
          ) : (
            filtered.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => handleSelect(item)}
                onMouseEnter={() => setSelectedIndex(idx)}
                className={`flex items-center justify-between p-2.5 rounded-xl cursor-pointer transition-colors ${
                  idx === selectedIndex
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'hover:bg-black/5 dark:hover:bg-white/5 text-slate-700 dark:text-slate-200'
                }`}
              >
                <div className="flex items-center gap-3 truncate">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 overflow-hidden">
                    {item.id === 'smm' ? <SMMPackageIcon className="w-7 h-7" /> :
                     item.id === 'resume' ? <ResumePDFIcon className="w-7 h-7" /> :
                     item.id === 'about' ? <AboutIcon className="w-7 h-7" /> :
                     item.id === 'projects' ? <ProjectsIcon className="w-7 h-7" /> :
                     item.id === 'skills' ? <SkillsIcon className="w-7 h-7" /> :
                     item.id === 'experience' ? <ExperienceIcon className="w-7 h-7" /> :
                     item.id === 'tools' ? <CreativeSuiteStackIcon className="w-7 h-7" /> :
                     item.id === 'photo-editor' ? <PhotoEditorIcon className="w-7 h-7" /> :
                     item.id === 'vector-editor' ? <VectorEditorIcon className="w-7 h-7" /> :
                     item.id === 'spreadsheet' ? <SpreadsheetIcon className="w-7 h-7" /> :
                     item.id === 'document' ? <DocumentEditorIcon className="w-7 h-7" /> :
                     item.id === 'presentation' ? <PresentationEditorIcon className="w-7 h-7" /> :
                     item.id === 'whatsapp' ? <WhatsAppIcon className="w-7 h-7" /> :
                     item.id === 'terminal' ? <TerminalAppIcon className="w-7 h-7" /> :
                     item.id === 'spotify' ? <SpotifyIcon className="w-7 h-7" /> :
                     item.id === 'settings' ? <SettingsGearIcon className="w-7 h-7" /> :
                     item.type === 'doc' ? <FileText size={16} /> :
                     <AppWindow size={16} />}
                  </div>
                  <div className="truncate">
                    <div className="text-xs font-semibold truncate leading-tight">
                      {item.title}
                    </div>
                    <div className={`text-[10px] truncate leading-tight ${
                      idx === selectedIndex ? 'text-blue-100' : 'text-slate-400'
                    }`}>
                      {item.desc}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                    idx === selectedIndex
                      ? 'bg-white/20 text-white'
                      : 'bg-slate-200/60 dark:bg-slate-800 text-slate-500'
                  }`}>
                    {item.category}
                  </span>
                  <ArrowRight size={13} className={idx === selectedIndex ? 'opacity-100' : 'opacity-0'} />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
