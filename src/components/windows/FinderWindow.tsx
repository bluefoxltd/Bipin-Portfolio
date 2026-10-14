import React, { useState } from 'react';
import { Folder, FileText, AppWindow, Image, HardDrive, Download, ChevronRight, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import {
  ProjectsIcon,
  SkillsIcon,
  ExperienceIcon,
  AboutIcon,
  ResumePDFIcon,
  PhotoEditorIcon,
  VectorEditorIcon,
  SpreadsheetIcon,
  DocumentEditorIcon,
  PresentationEditorIcon,
  SMMPackageIcon,
  CreativeSuiteStackIcon
} from '../icons/AppIcons';

interface FinderWindowProps {
  onOpenFile: (appId: string) => void;
}

export const FinderWindow: React.FC<FinderWindowProps> = ({ onOpenFile }) => {
  const [currentFolder, setCurrentFolder] = useState<'recents' | 'applications' | 'desktop' | 'documents'>('desktop');

  const sidebarItems = [
    { id: 'desktop', label: 'Desktop', icon: <HardDrive size={14} className="text-blue-500" /> },
    { id: 'applications', label: 'Applications', icon: <AppWindow size={14} className="text-purple-500" /> },
    { id: 'documents', label: 'Documents', icon: <FileText size={14} className="text-amber-500" /> },
    { id: 'recents', label: 'Downloads', icon: <Download size={14} className="text-emerald-500" /> },
  ];

  const desktopFiles = [
    { id: 'about', name: 'About Me', type: 'Folder', size: '2.4 MB' },
    { id: 'resume', name: 'resume.pdf', type: 'PDF Document', size: '1.2 MB' },
    { id: 'smm', name: 'SMM Packages.app', type: 'Application', size: '18.4 MB' },
    { id: 'projects', name: 'Projects', type: 'Folder', size: '42 MB' },
    { id: 'skills', name: 'Skills & Tools', type: 'Folder', size: '12 MB' },
    { id: 'experience', name: 'Experience', type: 'Folder', size: '8.1 MB' },
    { id: 'tools', name: 'Creative Tools Suite', type: 'Application', size: '34 MB' },
    { id: 'photo-editor', name: 'Photo Editor.app', type: 'Application', size: '4.8 MB' },
    { id: 'vector-editor', name: 'Vector Editor.app', type: 'Application', size: '5.2 MB' },
    { id: 'spreadsheet', name: 'Spreadsheet.app', type: 'Application', size: '3.6 MB' },
    { id: 'document', name: 'Document.app', type: 'Application', size: '3.1 MB' },
    { id: 'presentation', name: 'Presentation.app', type: 'Application', size: '4.2 MB' },
    { id: 'vscode', name: 'VS Code.app', type: 'Application', size: '84 MB' },
  ];

  return (
    <div className="flex h-full bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 font-sans select-none">
      {/* Sidebar */}
      <div className="w-48 bg-slate-100/90 dark:bg-slate-950/80 border-r border-slate-200 dark:border-slate-800 p-3 space-y-4 shrink-0">
        <div>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2 block mb-1">
            Favorites
          </span>
          <div className="space-y-0.5">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentFolder(item.id as typeof currentFolder)}
                className={`w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  currentFolder === item.id
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200/60 dark:hover:bg-slate-800'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2 block mb-1">
            BlueFox Cloud
          </span>
          <div className="px-2 text-[11px] text-slate-500 space-y-1">
            <div className="flex items-center justify-between">
              <span>Status</span>
              <span className="text-emerald-500 font-medium">Synced</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Storage</span>
              <span>1.2 TB / 2 TB</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Files View */}
      <div className="flex-1 flex flex-col">
        {/* Navigation Breadcrumb */}
        <div className="h-10 px-4 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
          <span>Macintosh HD</span>
          <ChevronRight size={12} />
          <span>Users</span>
          <ChevronRight size={12} />
          <span>bipin</span>
          <ChevronRight size={12} />
          <span className="font-semibold text-slate-900 dark:text-white capitalize">{currentFolder}</span>
        </div>

        {/* Files Grid */}
        <div className="flex-1 p-4 overflow-y-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 content-start">
          {desktopFiles.map((f) => (
            <div
              key={f.id}
              onDoubleClick={() => onOpenFile(f.id)}
              onClick={() => onOpenFile(f.id)}
              className="p-3 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-950/30 border border-transparent hover:border-blue-200 dark:hover:border-blue-900 flex flex-col items-center text-center cursor-pointer transition-all group"
            >
              <div className="w-12 h-12 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                {f.id === 'about' ? <AboutIcon className="w-10 h-10" /> :
                 f.id === 'resume' ? <ResumePDFIcon className="w-10 h-10" /> :
                 f.id === 'smm' ? <SMMPackageIcon className="w-10 h-10" /> :
                 f.id === 'projects' ? <ProjectsIcon className="w-10 h-10" /> :
                 f.id === 'skills' ? <SkillsIcon className="w-10 h-10" /> :
                 f.id === 'experience' ? <ExperienceIcon className="w-10 h-10" /> :
                 f.id === 'tools' ? <CreativeSuiteStackIcon className="w-10 h-10" /> :
                 f.id === 'photo-editor' ? <PhotoEditorIcon className="w-10 h-10" /> :
                 f.id === 'vector-editor' ? <VectorEditorIcon className="w-10 h-10" /> :
                 f.id === 'spreadsheet' ? <SpreadsheetIcon className="w-10 h-10" /> :
                 f.id === 'document' ? <DocumentEditorIcon className="w-10 h-10" /> :
                 f.id === 'presentation' ? <PresentationEditorIcon className="w-10 h-10" /> :
                 f.id === 'vscode' ? (
                   <div className="w-10 h-10 rounded-2xl bg-[#007ACC] flex items-center justify-center text-white shadow">
                     <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                       <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.27a.999.999 0 0 0 0 1.459l3.418 3.27-3.418 3.27a1 1 0 0 0 0 1.46l1.322 1.21a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.94-2.377A1.5 1.5 0 0 0 24 19.985V4.015a1.5 1.5 0 0 0-.85-1.428zM18 16.96L9.62 12 18 7.04v9.92z" />
                     </svg>
                   </div>
                 ) : (
                   <Folder size={40} className="fill-blue-400 text-blue-600" />
                 )}
              </div>
              <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 truncate w-full group-hover:text-blue-600">
                {f.name}
              </span>
              <span className="text-[10px] text-slate-400 mt-0.5">{f.type}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
