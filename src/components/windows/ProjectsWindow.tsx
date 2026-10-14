import React, { useState } from 'react';
import {
  ExternalLink,
  ArrowUpRight,
  Maximize2,
  X
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

export const ProjectsWindow: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'Social Media Design', label: 'Social Media' },
    { id: 'Packaging & Food Branding', label: 'Packaging & Food' },
    { id: 'Product Packaging', label: 'Confectionery Packaging' },
    { id: 'Brand Identity', label: 'Brand Identity' },
    { id: 'Visual Design & Composite', label: 'Visual Posters' },
    { id: 'Commercial Print & Advertising', label: 'Advertising' },
  ];

  const filteredProjects = filter === 'all'
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter(p => p.category === filter);

  return (
    <div className="flex flex-col h-full bg-neutral-950 text-slate-100 font-sans select-auto overflow-hidden">
      
      {/* Top Navigation Ribbon */}
      <div className="h-12 px-4 md:px-6 bg-neutral-900/90 border-b border-white/10 flex items-center justify-between gap-3 text-xs shrink-0 select-none">
        <div className="flex items-center gap-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-sm shadow-blue-500" />
          <span className="font-bold text-white tracking-wide">bipin.framer.ai</span>
          <span className="text-slate-400 hidden sm:inline">· Official 100% Portfolio Showcase</span>
          <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-[10px] font-mono border border-blue-500/30">
            {PORTFOLIO_DATA.projects.length} Works
          </span>
        </div>

        {/* Action Links */}
        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/9779742290123"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-lg bg-emerald-600/20 hover:bg-emerald-600 text-emerald-300 hover:text-white font-semibold flex items-center gap-1.5 border border-emerald-500/30 text-xs transition-colors"
          >
            <span>Inquire on WhatsApp</span>
            <ExternalLink size={11} />
          </a>
          <a
            href="http://bipin.framer.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-slate-200 font-semibold items-center gap-1.5 border border-white/10 text-xs transition-colors"
          >
            <span>bipin.framer.ai</span>
            <ExternalLink size={12} />
          </a>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-6 md:p-8 max-w-7xl mx-auto space-y-6">
          
          {/* Header & Category Filter Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-white/10">
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                Portfolio Works & Behance Cases
              </h1>
              <p className="text-xs md:text-sm text-slate-300 mt-1">
                All 100% original project photos and design systems fetched directly from <span className="text-blue-400 font-semibold">bipin.framer.ai</span>.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-1.5 p-1 bg-white/5 rounded-xl border border-white/10 overflow-x-auto shrink-0 max-w-full">
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setFilter(c.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                    filter === c.id
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid with Authentic Framer Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-neutral-900/80 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden shadow-xl hover:shadow-2xl transition-all group hover:border-blue-500/50 flex flex-col justify-between"
              >
                <div>
                  {/* Project Image Banner */}
                  <div className="relative aspect-[4/3] bg-neutral-950 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-60" />
                    
                    {/* Zoom Modal Trigger */}
                    <button
                      onClick={() => setSelectedImage(project.image)}
                      className="absolute top-3 right-3 p-2 rounded-xl bg-black/60 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/80"
                      title="View Full Resolution Image"
                    >
                      <Maximize2 size={13} />
                    </button>

                    {/* Category Badge */}
                    <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-md border border-white/10 text-[10px] font-semibold text-blue-300">
                      {project.category}
                    </div>
                  </div>

                  {/* Content Details */}
                  <div className="p-5">
                    <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tag Badges */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] text-slate-300 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions Footer */}
                <div className="p-5 pt-0 flex items-center justify-between border-t border-white/5 mt-4">
                  {project.behanceUrl ? (
                    <a
                      href={project.behanceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1.5 transition-colors"
                    >
                      <span>View on Behance</span>
                      <ArrowUpRight size={13} />
                    </a>
                  ) : (
                    <a
                      href={project.liveUrl || "http://bipin.framer.ai/"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1.5 transition-colors"
                    >
                      <span>Live Preview</span>
                      <ArrowUpRight size={13} />
                    </a>
                  )}

                  <a
                    href="https://wa.me/9779742290123"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-emerald-600/20 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-600 hover:text-white transition-colors"
                  >
                    Inquire Similar
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen High-Resolution Image Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] flex flex-col items-center">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-slate-300 p-2 text-sm font-semibold flex items-center gap-1 cursor-pointer"
            >
              <X size={18} /> Close
            </button>
            <img
              src={selectedImage}
              alt="Full resolution artwork preview"
              referrerPolicy="no-referrer"
              className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl object-contain border border-white/20"
            />
          </div>
        </div>
      )}
    </div>
  );
};
