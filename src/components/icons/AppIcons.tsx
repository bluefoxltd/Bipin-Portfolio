import React from 'react';

// ============================================================================
// CONTENT-ACCURATE APP ICONS FOR MAC OS PORTFOLIO
// Every icon has distinct branding & content-accurate artwork
// ============================================================================

/** 1. Projects Showcase Icon: Artboard, Figma canvas & Behance portfolio */
export const ProjectsIcon: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => (
  <div className={`rounded-2xl bg-gradient-to-tr from-violet-600 via-indigo-600 to-purple-500 p-2 flex items-center justify-center text-white shadow-xl relative overflow-hidden group ${className}`}>
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/30 via-transparent to-transparent pointer-events-none" />
    <svg viewBox="0 0 48 48" className="w-7 h-7 text-white drop-shadow-md" fill="none" stroke="currentColor">
      {/* Artboard Frame */}
      <rect x="6" y="6" width="36" height="36" rx="6" strokeWidth="2.5" className="fill-white/10" />
      {/* Portfolio Showcase Grid / Curves */}
      <path d="M6 30 L18 18 L28 28 L36 20 L42 26" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="16" cy="14" r="3" fill="currentColor" />
      {/* Mini Behance "B" accent */}
      <path d="M26 36 L38 36" strokeWidth="2" strokeLinecap="round" stroke="currentColor" />
    </svg>
    <span className="absolute bottom-1 right-1.5 text-[8px] font-black uppercase tracking-wider text-white/90 bg-black/30 px-1 rounded">
      PORTFOLIO
    </span>
  </div>
);

/** 2. Skills & Tools Icon: Multi-disciplinary creative mastery (Adobe, Figma, Code) */
export const SkillsIcon: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => (
  <div className={`rounded-2xl bg-gradient-to-tr from-emerald-500 via-teal-600 to-cyan-600 p-2 flex items-center justify-center text-white shadow-xl relative overflow-hidden ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-b from-white/25 to-transparent pointer-events-none" />
    <svg viewBox="0 0 48 48" className="w-7 h-7 text-white drop-shadow-md" fill="none" stroke="currentColor">
      {/* Crossed Pen Tool and Magic Wand */}
      <path d="M10 38 L22 26 M14 42 L10 38 L14 34 L18 38 Z" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.2" />
      <path d="M22 26 L34 14 C36 12 40 12 42 14 C44 16 44 20 42 22 L30 34" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Sparkle Nodes */}
      <path d="M36 8 L37.5 12 L41.5 13.5 L37.5 15 L36 19 L34.5 15 L30.5 13.5 L34.5 12 Z" fill="currentColor" stroke="none" />
      <path d="M12 14 L13 16.5 L15.5 17.5 L13 18.5 L12 21 L11 18.5 L8.5 17.5 L11 16.5 Z" fill="currentColor" stroke="none" />
    </svg>
    <span className="absolute bottom-1 text-[8px] font-black tracking-wider text-teal-100 bg-black/25 px-1 rounded">
      SKILLS
    </span>
  </div>
);

/** 3. Work Experience & Career Icon: Executive Briefcase & Career Milestones */
export const ExperienceIcon: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => (
  <div className={`rounded-2xl bg-gradient-to-tr from-amber-600 via-yellow-600 to-amber-500 p-2 flex items-center justify-center text-white shadow-xl relative overflow-hidden ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
    <svg viewBox="0 0 48 48" className="w-7 h-7 text-white drop-shadow-md" fill="none" stroke="currentColor">
      {/* Briefcase Base */}
      <rect x="6" y="14" width="36" height="26" rx="4" strokeWidth="2.5" className="fill-amber-950/20" />
      {/* Handle */}
      <path d="M18 14 V10 C18 8 20 6 22 6 H26 C28 6 30 8 30 10 V14" strokeWidth="2.5" strokeLinecap="round" />
      {/* Center Lock / Badge */}
      <path d="M6 24 H42" strokeWidth="2" strokeDasharray="3 3" opacity="0.6" />
      <circle cx="24" cy="27" r="4" fill="currentColor" />
      <path d="M24 25 V29" stroke="#b45309" strokeWidth="2" strokeLinecap="round" />
    </svg>
    <span className="absolute bottom-1 text-[8px] font-black tracking-wider text-amber-100 bg-amber-950/40 px-1 rounded">
      CAREER
    </span>
  </div>
);

/** 4. About Me Icon: Bipin Chapagain Profile & ID Badge */
export const AboutIcon: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => (
  <div className={`rounded-2xl bg-gradient-to-tr from-sky-500 via-blue-600 to-indigo-700 p-2 flex items-center justify-center text-white shadow-xl relative overflow-hidden ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-b from-white/25 to-transparent pointer-events-none" />
    <svg viewBox="0 0 48 48" className="w-7 h-7 text-white drop-shadow-md" fill="none" stroke="currentColor">
      {/* User Silhouette */}
      <circle cx="24" cy="16" r="7" strokeWidth="2.5" fill="currentColor" fillOpacity="0.2" />
      <path d="M10 38 C10 30 16 26 24 26 C32 26 38 30 38 38" strokeWidth="2.5" strokeLinecap="round" />
      {/* Verified Shield / Star Badge */}
      <circle cx="34" cy="14" r="5" fill="#38bdf8" stroke="white" strokeWidth="1.5" />
      <path d="M32 14 L33.5 15.5 L36.5 12.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
    <span className="absolute bottom-1 text-[8px] font-black tracking-wider text-sky-100 bg-black/25 px-1 rounded">
      BIO
    </span>
  </div>
);

/** 5. Blue Fox Agency / Devlyhub Icon: Glowing Geometric Blue Fox Emblem */
export const BlueFoxAgencyIcon: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => (
  <div className={`rounded-2xl bg-gradient-to-tr from-slate-950 via-blue-950 to-indigo-900 border border-blue-500/30 p-2 flex items-center justify-center text-white shadow-xl relative overflow-hidden ${className}`}>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent" />
    <svg viewBox="0 0 48 48" className="w-7 h-7 text-cyan-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.6)]" fill="currentColor">
      {/* Geometric Blue Fox Face */}
      <path d="M8 12 L18 26 L10 30 Z" opacity="0.9" />
      <path d="M40 12 L30 26 L38 30 Z" opacity="0.9" />
      <path d="M18 26 L24 16 L30 26 L24 38 Z" />
      <path d="M10 30 L18 26 L24 38 Z" opacity="0.75" />
      <path d="M38 30 L30 26 L24 38 Z" opacity="0.75" />
      {/* White Fox Eyes */}
      <circle cx="19" cy="27" r="1.5" fill="white" />
      <circle cx="29" cy="27" r="1.5" fill="white" />
    </svg>
    <span className="absolute bottom-0.5 text-[7px] font-black text-cyan-300 tracking-tighter">
      BLUE FOX
    </span>
  </div>
);

/** 6. ChatGPT Official Icon: OpenAI Emerald Spiral */
export const ChatGPTIcon: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => (
  <div className={`rounded-2xl bg-[#10A37F] p-2 flex items-center justify-center text-white shadow-xl relative overflow-hidden ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
    <svg viewBox="0 0 24 24" className="w-7 h-7 text-white drop-shadow" fill="currentColor">
      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1683a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4947zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1683a.0757.0757 0 0 1-.071 0l-4.8303-2.7866A4.504 4.504 0 0 1 2.3408 7.8956zm16.0993 3.8558L12.5973 8.3829l2.02-1.1636a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.4022-.6862zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.006 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1635a.0804.0804 0 0 1-.038-.0567V6.0748a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.4598a.7948.7948 0 0 0-.3927.6813v6.7219zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
    </svg>
  </div>
);

/** 7. DeepSeek Official Icon: Leaping Blue Whale Emblem */
export const DeepSeekIcon: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => (
  <div className={`rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-500 p-2 flex items-center justify-center text-white shadow-xl relative overflow-hidden ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
    <svg viewBox="0 0 48 48" className="w-7 h-7 text-white drop-shadow" fill="currentColor">
      {/* DeepSeek Whale Silhouette */}
      <path d="M12 28 C12 20 18 14 28 14 C36 14 42 18 42 24 C42 30 36 34 26 34 C20 34 14 32 12 28 Z" />
      <path d="M14 26 C8 24 6 18 8 12 C10 18 14 22 18 24 Z" />
      <path d="M28 14 C32 10 36 8 40 8 C38 12 36 14 34 16 Z" />
      <circle cx="34" cy="22" r="2" fill="#0284c7" />
    </svg>
    <span className="absolute bottom-1 text-[8px] font-black tracking-wider text-cyan-100 bg-black/25 px-1 rounded">
      DEEPSEEK
    </span>
  </div>
);

/** 8. Google Gemini Official Icon: 4-pointed Sparkle Star */
export const GeminiIcon: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => (
  <div className={`rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 p-2 flex items-center justify-center text-white shadow-xl relative overflow-hidden ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-b from-white/25 to-transparent pointer-events-none" />
    <svg viewBox="0 0 24 24" className="w-7 h-7 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]" fill="currentColor">
      <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" />
    </svg>
  </div>
);

/** 9. macOS Preview PDF Resume Icon: Folded corner sheet with red PDF banner */
export const ResumePDFIcon: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => (
  <div className={`rounded-2xl bg-gradient-to-b from-slate-100 to-slate-200 border border-slate-300 shadow-xl flex flex-col items-center justify-between p-1.5 relative overflow-hidden ${className}`}>
    {/* Folded Top-Right Corner */}
    <div className="absolute top-0 right-0 w-4 h-4 bg-slate-300 rounded-bl-md shadow-sm border-b border-l border-slate-400" />
    {/* Document Text Lines */}
    <div className="w-full pt-2 px-1.5 space-y-1">
      <div className="h-1 bg-slate-400/80 rounded w-3/4" />
      <div className="h-0.5 bg-slate-300 rounded w-full" />
      <div className="h-0.5 bg-slate-300 rounded w-5/6" />
      <div className="h-0.5 bg-slate-300 rounded w-4/5" />
    </div>
    {/* Red PDF Banner Ribbon */}
    <div className="w-full bg-rose-600 text-white rounded-md py-0.5 text-center shadow-sm">
      <span className="font-black text-[9px] tracking-wider">PDF</span>
    </div>
  </div>
);

/** 10. Photo Editor (EditItAll / Photoshop Ps): Dark navy with cyan border and Ps badge */
export const PhotoEditorIcon: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => (
  <div className={`rounded-2xl bg-[#001E36] border-2 border-[#31A8FF] p-1.5 flex flex-col items-center justify-center text-[#31A8FF] shadow-xl relative overflow-hidden ${className}`}>
    <div className="absolute top-1 left-2 font-mono text-[7px] text-[#31A8FF]/70 tracking-tighter">PHOTO</div>
    <span className="font-sans font-black text-2xl tracking-tighter mt-1">Ps</span>
    <div className="absolute bottom-1 flex gap-0.5">
      <span className="w-1.5 h-1.5 rounded-full bg-[#31A8FF]" />
      <span className="w-1.5 h-1.5 rounded-full bg-[#00C8FF]" />
    </div>
  </div>
);

/** 11. Vector Editor (EditItAll / Illustrator Ai): Dark charcoal with orange border and Ai badge */
export const VectorEditorIcon: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => (
  <div className={`rounded-2xl bg-[#330000] border-2 border-[#FF9A00] p-1.5 flex flex-col items-center justify-center text-[#FF9A00] shadow-xl relative overflow-hidden ${className}`}>
    <div className="absolute top-1 left-2 font-mono text-[7px] text-[#FF9A00]/70 tracking-tighter">VECTOR</div>
    <span className="font-sans font-black text-2xl tracking-tighter mt-1">Ai</span>
    {/* Pen Anchor point symbol */}
    <div className="absolute bottom-1 flex items-center gap-1">
      <div className="w-1.5 h-1.5 border border-[#FF9A00] bg-transparent" />
      <div className="w-2.5 h-0.5 bg-[#FF9A00]" />
      <div className="w-1.5 h-1.5 border border-[#FF9A00] bg-transparent" />
    </div>
  </div>
);

/** 12. Spreadsheet Editor (EditItAll / Excel Sheets): Forest green with grid and table */
export const SpreadsheetIcon: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => (
  <div className={`rounded-2xl bg-[#107C41] border border-emerald-400/40 p-2 flex flex-col items-center justify-center text-white shadow-xl relative overflow-hidden ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
    <svg viewBox="0 0 24 24" className="w-6 h-6 text-white drop-shadow" fill="none" stroke="currentColor">
      <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2" />
      <line x1="3" y1="9" x2="21" y2="9" strokeWidth="2" />
      <line x1="3" y1="15" x2="21" y2="15" strokeWidth="2" />
      <line x1="9" y1="3" x2="9" y2="21" strokeWidth="2" />
      <line x1="15" y1="3" x2="15" y2="21" strokeWidth="2" />
    </svg>
    <div className="absolute -bottom-0.5 -right-0.5 bg-emerald-900 px-1 rounded-tl text-[8px] font-black">
      XLS
    </div>
  </div>
);

/** 13. Document Editor (EditItAll / Word Pages): Royal blue with document lines */
export const DocumentEditorIcon: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => (
  <div className={`rounded-2xl bg-[#185ABD] border border-blue-400/40 p-2 flex flex-col items-center justify-center text-white shadow-xl relative overflow-hidden ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
    <svg viewBox="0 0 24 24" className="w-6 h-6 text-white drop-shadow" fill="none" stroke="currentColor">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" strokeWidth="2" />
      <polyline points="14 2 14 8 20 8" strokeWidth="2" />
      <line x1="16" y1="13" x2="8" y2="13" strokeWidth="2" strokeLinecap="round" />
      <line x1="16" y1="17" x2="8" y2="17" strokeWidth="2" strokeLinecap="round" />
      <line x1="10" y1="9" x2="8" y2="9" strokeWidth="2" strokeLinecap="round" />
    </svg>
    <div className="absolute -bottom-0.5 -right-0.5 bg-blue-950 px-1 rounded-tl text-[8px] font-black">
      DOC
    </div>
  </div>
);

/** 14. Presentation Editor (EditItAll / Slides Keynote): Vibrant orange with chart presentation */
export const PresentationEditorIcon: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => (
  <div className={`rounded-2xl bg-[#D83B01] border border-orange-400/40 p-2 flex flex-col items-center justify-center text-white shadow-xl relative overflow-hidden ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
    <svg viewBox="0 0 24 24" className="w-6 h-6 text-white drop-shadow" fill="none" stroke="currentColor">
      <rect x="2" y="3" width="20" height="14" rx="2" strokeWidth="2" />
      <line x1="8" y1="21" x2="16" y2="21" strokeWidth="2" strokeLinecap="round" />
      <line x1="12" y1="17" x2="12" y2="21" strokeWidth="2" />
      <path d="M7 10 L10 7 L13 10 L17 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
    <div className="absolute -bottom-0.5 -right-0.5 bg-orange-950 px-1 rounded-tl text-[8px] font-black">
      PPT
    </div>
  </div>
);

/** 15. SMM Packages Growth Rocket Icon: Viral Rocket with Golden Sparkle */
export const SMMPackageIcon: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => (
  <div className={`rounded-2xl bg-gradient-to-tr from-indigo-700 via-purple-600 to-pink-500 p-2 flex items-center justify-center text-white shadow-xl relative overflow-hidden group ${className}`}>
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/30 via-transparent to-transparent pointer-events-none" />
    <svg viewBox="0 0 24 24" className="w-7 h-7 text-white drop-shadow-[0_2px_10px_rgba(244,114,182,0.8)]" fill="none" stroke="currentColor">
      {/* Rocket Ship */}
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" strokeWidth="2" fill="currentColor" fillOpacity="0.3" />
      <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="15.5" cy="8.5" r="1.5" fill="white" />
    </svg>
    <span className="absolute -top-1 -right-1 px-1.5 py-0.2 bg-amber-400 text-slate-900 font-extrabold text-[8px] rounded-full uppercase shadow">
      OFFER
    </span>
  </div>
);

/** 16. Apple Notes / Journal Icon: Yellow legal pad with lined header and pencil */
export const NotesJournalIcon: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => (
  <div className={`rounded-2xl bg-[#FFF9C4] border border-amber-300 shadow-xl flex flex-col justify-between overflow-hidden relative ${className}`}>
    {/* Yellow pad orange top binding */}
    <div className="h-3 bg-[#FFA000] w-full border-b border-amber-600/40 flex items-center px-1">
      <div className="flex gap-1">
        <span className="w-1 h-1 rounded-full bg-amber-800" />
        <span className="w-1 h-1 rounded-full bg-amber-800" />
      </div>
    </div>
    {/* Ruled lines */}
    <div className="p-1 space-y-1 my-auto">
      <div className="h-0.5 bg-amber-300 w-full" />
      <div className="h-0.5 bg-amber-300 w-5/6" />
      <div className="h-0.5 bg-amber-300 w-4/5" />
      <div className="h-0.5 bg-amber-300 w-full" />
    </div>
    <div className="bg-amber-100/90 text-amber-900 text-[8px] font-bold text-center py-0.5">
      NOTES
    </div>
  </div>
);

/** 17. Apple macOS Finder Face: Iconic two-tone smiling Mac face */
export const FinderFaceIcon: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => (
  <div className={`rounded-2xl bg-gradient-to-b from-[#64B5F6] via-[#1E88E5] to-[#1565C0] p-1 flex items-center justify-center shadow-xl relative overflow-hidden ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent pointer-events-none" />
    <svg viewBox="0 0 100 100" className="w-8 h-8 text-white drop-shadow">
      {/* Light blue face half on left */}
      <path d="M 50 15 L 20 15 C 17 15 15 17 15 20 L 15 80 C 15 83 17 85 20 85 L 50 85 Z" fill="#90CAF9" />
      {/* Center line dividing face */}
      <path d="M 50 15 L 50 48 L 40 54 L 50 60 L 50 85" stroke="#0D47A1" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Left Eye */}
      <circle cx="32" cy="40" r="5" fill="#0D47A1" />
      {/* Right Eye */}
      <circle cx="68" cy="40" r="5" fill="#0D47A1" />
      {/* Smile */}
      <path d="M 28 66 Q 50 86 72 66" stroke="#0D47A1" strokeWidth="5" strokeLinecap="round" fill="none" />
    </svg>
  </div>
);

/** 18. Apple macOS Launchpad Rocket Icon */
export const LaunchpadRocketIcon: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => (
  <div className={`rounded-2xl bg-gradient-to-tr from-slate-700 via-slate-800 to-slate-900 p-2 flex items-center justify-center text-white shadow-xl relative overflow-hidden ${className}`}>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent pointer-events-none" />
    <svg viewBox="0 0 24 24" className="w-7 h-7 text-slate-100 drop-shadow" fill="none" stroke="currentColor">
      <path d="M12 2C7 4 4 9 4 15C4 18 6 21 8 22L12 18L16 22C18 21 20 18 20 15C20 9 17 4 12 2Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="fill-white/10" />
      <circle cx="12" cy="9" r="2.5" fill="currentColor" />
    </svg>
  </div>
);

/** 19. Apple macOS Settings Metallic Gear */
export const SettingsGearIcon: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => (
  <div className={`rounded-2xl bg-gradient-to-b from-slate-300 via-slate-400 to-slate-500 p-2 flex items-center justify-center text-slate-900 shadow-xl relative overflow-hidden border border-white/40 ${className}`}>
    <svg viewBox="0 0 24 24" className="w-7 h-7 text-slate-800 drop-shadow-md" fill="none" stroke="currentColor">
      <circle cx="12" cy="12" r="3" strokeWidth="2.5" fill="#cbd5e1" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);

/** 20. Creative Suite Multi-Tool Stack (for Dock Tools) */
export const CreativeSuiteStackIcon: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => (
  <div className={`rounded-2xl bg-gradient-to-tr from-amber-600 via-orange-600 to-rose-600 p-2 flex items-center justify-center text-white shadow-xl relative overflow-hidden ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
    <svg viewBox="0 0 24 24" className="w-7 h-7 text-white drop-shadow" fill="none" stroke="currentColor">
      <polygon points="12 2 2 7 12 12 22 7 12 2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="white" fillOpacity="0.2" />
      <polyline points="2 17 12 22 22 17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="2 12 12 17 22 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);

/** 21. WhatsApp Official Icon */
export const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => (
  <div className={`rounded-2xl bg-[#25D366] p-2 flex items-center justify-center text-white shadow-xl relative overflow-hidden ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
    <svg viewBox="0 0 24 24" className="w-7 h-7 text-white drop-shadow" fill="currentColor">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
    </svg>
  </div>
);

/** 22. Spotify Official Icon */
export const SpotifyIcon: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => (
  <div className={`rounded-2xl bg-[#1DB954] p-2 flex items-center justify-center text-black shadow-xl relative overflow-hidden ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
    <svg viewBox="0 0 24 24" className="w-7 h-7 text-slate-950 drop-shadow" fill="currentColor">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  </div>
);

/** 23. macOS Terminal App Icon */
export const TerminalAppIcon: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => (
  <div className={`rounded-2xl bg-slate-950 border border-slate-700/80 p-2 flex flex-col justify-between text-emerald-400 font-mono shadow-xl relative overflow-hidden ${className}`}>
    <div className="flex items-center gap-1 opacity-70">
      <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
    </div>
    <div className="text-xs font-bold font-mono pl-1 pb-1">
      &gt;_
    </div>
  </div>
);

/** 24. macOS Trash Can Icon */
export const TrashAppIcon: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => (
  <div className={`rounded-2xl bg-gradient-to-tr from-slate-200 to-slate-400 dark:from-slate-700 dark:to-slate-800 p-2 flex items-center justify-center text-slate-700 dark:text-slate-200 shadow-xl relative overflow-hidden border border-white/20 ${className}`}>
    <svg viewBox="0 0 24 24" className="w-7 h-7 text-current drop-shadow" fill="none" stroke="currentColor">
      <polyline points="3 6 5 6 21 6" strokeWidth="2" strokeLinecap="round" />
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="10" y1="11" x2="10" y2="17" strokeWidth="2" strokeLinecap="round" />
      <line x1="14" y1="11" x2="14" y2="17" strokeWidth="2" strokeLinecap="round" />
    </svg>
  </div>
);

