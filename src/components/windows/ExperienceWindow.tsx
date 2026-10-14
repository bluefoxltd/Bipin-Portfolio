import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle, ExternalLink, MessageCircle, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

export const ExperienceWindow: React.FC = () => {
  return (
    <div className="p-6 md:p-8 bg-slate-50 dark:bg-slate-900 min-h-full font-sans text-slate-800 dark:text-slate-100 select-auto">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles size={12} />
            Professional Milestones
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Experience & Leadership History
          </h1>
          <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 mt-1">
            Track record across the Blue Fox Enterprise Ecosystem, industrial print manufacturing at Lakhan Traders, and food packaging design at Vinayak Stickers & Printers.
          </p>
        </div>

        {/* Timeline with Glossy Shine Cards */}
        <div className="space-y-6">
          {PORTFOLIO_DATA.experience.map((exp) => (
            <div
              key={exp.id}
              className="relative p-6 rounded-3xl transition-all duration-300 backdrop-blur-2xl bg-white/80 dark:bg-slate-800/80 border border-white/60 dark:border-white/15 shadow-xl hover:shadow-2xl overflow-hidden group"
              style={{
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05), inset 0 1px 1px rgba(255, 255, 255, 0.8), inset 0 -1px 2px rgba(0, 0, 0, 0.05)'
              }}
            >
              {/* Glass Specular Shine Overlay */}
              <div
                className="absolute inset-0 pointer-events-none rounded-3xl opacity-60 group-hover:opacity-100 transition-opacity"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.05) 50%, rgba(0, 0, 0, 0.02) 100%)'
                }}
              />

              <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200/70 dark:border-white/10 pb-3 mb-4">
                <div>
                  <h2 className="text-base font-extrabold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {exp.company}
                  </h2>
                  <div className="text-xs font-bold text-blue-600 dark:text-blue-400 flex items-center gap-2 mt-0.5">
                    <span>{exp.role}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400 font-normal">
                      <MapPin size={11} /> {exp.location}
                    </span>
                  </div>
                </div>

                <div className="px-3.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900 text-xs font-mono font-bold text-blue-700 dark:text-blue-300 self-start sm:self-center shrink-0 shadow-sm">
                  {exp.period}
                </div>
              </div>

              <p className="relative z-10 text-xs text-slate-700 dark:text-slate-300 leading-relaxed mb-4 font-normal">
                {exp.description}
              </p>

              <div className="relative z-10 space-y-2">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 dark:text-slate-400 block">
                  Key Responsibilities & Deliverables
                </span>
                <ul className="space-y-2">
                  {exp.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="text-xs text-slate-600 dark:text-slate-300 flex items-start gap-2.5">
                      <CheckCircle size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Agency Info Banner with Glassy Finish */}
        <div className="p-6 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-base font-bold">
              Blue Fox Ecosystem · Lead Management & Services
            </h3>
            <p className="text-xs text-blue-100 mt-1 max-w-xl">
              Spanning Blue Fox Pvt Ltd (Design & SMM Lead Management), Blue Fox Academy (Design Instruction), and Blue Fox Hoster (Technical Infrastructure & Web Support).
            </p>
          </div>

          <a
            href="https://wa.me/9779742290123?text=Hi%20Bipin,%20I'd%20like%20to%20collaborate%20with%20Blue%20Fox%20Pvt%20Ltd!"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-2xl bg-white text-blue-700 hover:bg-blue-50 text-xs font-bold flex items-center gap-1.5 shrink-0 shadow-md transition-colors"
          >
            <MessageCircle size={14} />
            <span>Inquire on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
