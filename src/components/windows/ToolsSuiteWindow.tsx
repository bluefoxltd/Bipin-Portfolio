import React from 'react';
import { ExternalLink, ArrowRight, Sparkles, Laptop, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import {
  PhotoEditorIcon,
  VectorEditorIcon,
  ResumePDFIcon,
  SpreadsheetIcon,
  DocumentEditorIcon,
  PresentationEditorIcon
} from '../icons/AppIcons';

interface ToolsSuiteWindowProps {
  onLaunchTool: (toolId: string) => void;
}

export const ToolsSuiteWindow: React.FC<ToolsSuiteWindowProps> = ({ onLaunchTool }) => {
  const creativeTools = [
    {
      id: "photo-editor",
      title: "Photo Editor",
      icon: <PhotoEditorIcon className="w-10 h-10" />,
      shortCode: "Ps",
      colorBg: "bg-teal-950/80 text-teal-300 border-teal-500/40",
      description: "Layers, blend modes, brushes, selections, curves and 55+ filters.",
      url: "https://edititall.com/photo-editor/app"
    },
    {
      id: "vector-editor",
      title: "Vector Editor",
      icon: <VectorEditorIcon className="w-10 h-10" />,
      shortCode: "Ai",
      colorBg: "bg-amber-950/80 text-amber-300 border-amber-500/40",
      description: "Pen tool, Pathfinder booleans, layers, smart guides and SVG import/export.",
      url: "https://edititall.com/vector-editor/app"
    },
    {
      id: "pdf-editor",
      title: "PDF Editor",
      icon: <ResumePDFIcon className="w-10 h-10" />,
      shortCode: "Pd",
      colorBg: "bg-rose-950/80 text-rose-300 border-rose-500/40",
      description: "Reorder, rotate and merge pages; highlight, annotate and export a real PDF.",
      url: "https://edititall.com/photo-editor/app"
    },
    {
      id: "image-tools",
      title: "Image Tools",
      icon: (
        <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow">
          <Sparkles size={20} />
        </div>
      ),
      shortCode: "It",
      colorBg: "bg-indigo-950/80 text-indigo-300 border-indigo-500/40",
      description: "Compress JPEG, PNG, WebP and AVIF; convert HEIC, RAW, TIFF, PSD and 20+ formats.",
      url: "https://edititall.com/photo-editor/app"
    }
  ];

  const officeTools = [
    {
      id: "spreadsheet",
      title: "Spreadsheet",
      icon: <SpreadsheetIcon className="w-10 h-10" />,
      shortCode: "Sh",
      colorBg: "bg-emerald-950/80 text-emerald-300 border-emerald-500/40",
      description: "Formulas, ranges and instant recalculation, right in your browser.",
      url: "https://edititall.com/sheet-editor/app"
    },
    {
      id: "document",
      title: "Document",
      icon: <DocumentEditorIcon className="w-10 h-10" />,
      shortCode: "Wd",
      colorBg: "bg-blue-950/80 text-blue-300 border-blue-500/40",
      description: "Write and format rich text with real page layout — nothing is uploaded.",
      url: "https://edititall.com/word-editor/app"
    },
    {
      id: "presentation",
      title: "Presentation",
      icon: <PresentationEditorIcon className="w-10 h-10" />,
      shortCode: "Sl",
      colorBg: "bg-amber-950/80 text-amber-300 border-amber-500/40",
      description: "Design slides with shapes and snap-align guides, then present.",
      url: "https://edititall.com/slides-editor/app"
    },
    {
      id: "vscode",
      title: "VS Code Web",
      icon: (
        <div className="w-10 h-10 rounded-2xl bg-[#007ACC] flex items-center justify-center text-white shadow">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.27a.999.999 0 0 0 0 1.459l3.418 3.27-3.418 3.27a1 1 0 0 0 0 1.46l1.322 1.21a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.94-2.377A1.5 1.5 0 0 0 24 19.985V4.015a1.5 1.5 0 0 0-.85-1.428zM18 16.96L9.62 12 18 7.04v9.92z" />
          </svg>
        </div>
      ),
      shortCode: "Vs",
      colorBg: "bg-sky-950/80 text-sky-300 border-sky-500/40",
      description: "Online code editor with syntax highlighting, extensions, and terminal.",
      url: "https://vscode.dev/"
    }
  ];

  return (
    <div className="p-6 md:p-8 bg-neutral-950 min-h-full font-sans text-slate-100 select-auto">
      {/* Intro Header */}
      <div className="max-w-4xl mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2">
          <Sparkles size={12} />
          Creative & Office Ecosystem
        </div>
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
          Creative Tools & Editors
        </h1>
        <p className="text-xs md:text-sm text-slate-300 mt-1">
          Zero-installation, browser-based creative and productivity workspace utilized by Bipin Chapagain for daily design, document authoring, and vibe coding.
        </p>
      </div>

      {/* Creative Tools Section */}
      <div className="mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {creativeTools.map((tool) => (
            <div
              key={tool.id}
              className="bg-neutral-900/80 backdrop-blur-xl rounded-2xl p-5 border border-white/10 shadow-xl hover:shadow-2xl transition-all flex flex-col justify-between group hover:border-blue-500/50"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 shrink-0 flex items-center justify-center">
                    {tool.icon}
                  </div>
                  <h3 className="font-bold text-base text-white group-hover:text-blue-400 transition-colors">
                    {tool.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed min-h-[48px]">
                  {tool.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => onLaunchTool(tool.id)}
                  className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1.5 transition-colors"
                >
                  <span>Launch in Studio</span>
                  <ArrowRight size={13} />
                </button>
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white p-1 transition-colors"
                  title="Open external web app"
                >
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Office Editors Section (Matching image.png) */}
      <div>
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <span>Office Editors</span>
          <span className="text-xs font-mono font-normal text-slate-400 px-2 py-0.5 rounded-full bg-white/5 border border-white/10">
            EditItAll & VS Code
          </span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {officeTools.map((tool) => (
            <div
              key={tool.id}
              className="bg-neutral-900/80 backdrop-blur-xl rounded-2xl p-5 border border-white/10 shadow-xl hover:shadow-2xl transition-all flex flex-col justify-between group hover:border-emerald-500/50"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 shrink-0 flex items-center justify-center">
                    {tool.icon}
                  </div>
                  <h3 className="font-bold text-base text-white group-hover:text-emerald-400 transition-colors">
                    {tool.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed min-h-[48px]">
                  {tool.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => onLaunchTool(tool.id)}
                  className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5 transition-colors"
                >
                  <span>Launch in Studio</span>
                  <ArrowRight size={13} />
                </button>
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white p-1 transition-colors"
                  title="Open external web app"
                >
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
