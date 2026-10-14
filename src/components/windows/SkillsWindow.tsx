import React, { useState } from 'react';
import { Layers, Palette, Code, Sparkles, CheckCircle2, Shield, Wrench, ArrowRight } from 'lucide-react';

interface ToolDetail {
  id: string;
  name: string;
  categoryTag: 'design' | 'dev' | 'print';
  categoryLabel: string;
  usedFor: string;
  services: string[];
  tagline: string;
}

// Authentic Official Software SVG Logos Component
export const SoftwareLogo: React.FC<{ name: string; className?: string }> = ({ name, className = "" }) => {
  const lower = name.toLowerCase();

  if (lower.includes('photoshop')) {
    return (
      <div className={`w-10 h-10 rounded-xl bg-[#001E36] border border-[#31A8FF]/50 flex items-center justify-center font-bold text-sm text-[#31A8FF] shadow-md select-none shrink-0 ${className}`}>
        Ps
      </div>
    );
  }
  if (lower.includes('illustrator')) {
    return (
      <div className={`w-10 h-10 rounded-xl bg-[#330000] border border-[#FF9A00]/50 flex items-center justify-center font-bold text-sm text-[#FF9A00] shadow-md select-none shrink-0 ${className}`}>
        Ai
      </div>
    );
  }
  if (lower.includes('corel')) {
    return (
      <div className={`w-10 h-10 rounded-xl bg-[#006837] border border-[#39B54A]/50 flex items-center justify-center font-bold text-xs text-white shadow-md select-none shrink-0 ${className}`}>
        CDR
      </div>
    );
  }
  if (lower.includes('figma')) {
    return (
      <div className={`w-10 h-10 rounded-xl bg-[#1E1E1E] border border-white/20 flex items-center justify-center shadow-md select-none shrink-0 ${className}`}>
        <div className="grid grid-cols-2 gap-0.5 w-4 h-6">
          <span className="w-2 h-2 bg-[#F24E1E] rounded-l-full" />
          <span className="w-2 h-2 bg-[#FF7262] rounded-r-full" />
          <span className="w-2 h-2 bg-[#A259FF] rounded-l-full" />
          <span className="w-2 h-2 bg-[#1ABCFE] rounded-full" />
          <span className="w-2 h-2 bg-[#0ACF83] rounded-bl-full" />
        </div>
      </div>
    );
  }
  if (lower.includes('krita')) {
    return (
      <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 via-pink-500 to-amber-400 p-0.5 shadow-md select-none shrink-0 ${className}`}>
        <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center font-bold text-xs text-white">
          Kr
        </div>
      </div>
    );
  }
  if (lower.includes('premiere')) {
    return (
      <div className={`w-10 h-10 rounded-xl bg-[#00005B] border border-[#EA77FF]/50 flex items-center justify-center font-bold text-sm text-[#EA77FF] shadow-md select-none shrink-0 ${className}`}>
        Pr
      </div>
    );
  }
  if (lower.includes('after effects')) {
    return (
      <div className={`w-10 h-10 rounded-xl bg-[#00005B] border border-[#9999FF]/50 flex items-center justify-center font-bold text-sm text-[#9999FF] shadow-md select-none shrink-0 ${className}`}>
        Ae
      </div>
    );
  }
  if (lower.includes('framer')) {
    return (
      <div className={`w-10 h-10 rounded-xl bg-black border border-white/25 flex items-center justify-center text-white shadow-md select-none shrink-0 ${className}`}>
        <svg width="16" height="22" viewBox="0 0 14 21" fill="currentColor">
          <path d="M0 0h14v7H7zm0 7h7l7 7H0zm7 7v7l-7-7z" />
        </svg>
      </div>
    );
  }
  if (lower.includes('react')) {
    return (
      <div className={`w-10 h-10 rounded-xl bg-[#20232A] border border-[#61DAFB]/50 flex items-center justify-center text-[#61DAFB] shadow-md select-none shrink-0 ${className}`}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <ellipse cx="12" cy="12" rx="10" ry="4" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
      </div>
    );
  }
  if (lower.includes('tailwind')) {
    return (
      <div className={`w-10 h-10 rounded-xl bg-[#0B1120] border border-[#38BDF8]/50 flex items-center justify-center text-[#38BDF8] shadow-md select-none shrink-0 ${className}`}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
        </svg>
      </div>
    );
  }
  if (lower.includes('typescript') || lower.includes('ts')) {
    return (
      <div className={`w-10 h-10 rounded-xl bg-[#3178C6] flex items-center justify-center font-bold text-sm text-white shadow-md select-none shrink-0 ${className}`}>
        TS
      </div>
    );
  }
  if (lower.includes('python')) {
    return (
      <div className={`w-10 h-10 rounded-xl bg-[#273244] border border-[#FFD43B]/50 flex items-center justify-center font-bold text-xs text-[#FFD43B] shadow-md select-none shrink-0 ${className}`}>
        Py
      </div>
    );
  }
  if (lower.includes('security') || lower.includes('ethical')) {
    return (
      <div className={`w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-500/50 flex items-center justify-center text-emerald-400 shadow-md select-none shrink-0 ${className}`}>
        <Shield size={20} />
      </div>
    );
  }
  if (lower.includes('vscode')) {
    return (
      <div className={`w-10 h-10 rounded-xl bg-[#007ACC] flex items-center justify-center text-white shadow-md select-none shrink-0 ${className}`}>
        <Code size={20} />
      </div>
    );
  }

  return (
    <div className={`w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-xs shadow-md select-none shrink-0 ${className}`}>
      {name.slice(0, 2).toUpperCase()}
    </div>
  );
};

export const SkillsWindow: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'design' | 'dev' | 'print'>('all');

  const toolsList: ToolDetail[] = [
    {
      id: "figma",
      name: "Figma",
      categoryTag: "design",
      categoryLabel: "UI/UX & Product Architecture",
      tagline: "Collaborative interface and design token systems",
      usedFor: "Crafting end-to-end user journeys, wireframes, auto-layout UI component libraries, and interactive click-through prototypes for mobile apps and web platforms.",
      services: [
        "Interactive UI/UX Prototypes & Wireframing",
        "Design Systems & Component Libraries with Tokens",
        "Responsive Mobile App & Dashboard Interface Layouts",
        "Developer-ready Handoff Specs & Design Audits"
      ]
    },
    {
      id: "framer",
      name: "Framer",
      categoryTag: "design",
      categoryLabel: "Interactive Web & Micro-Interactions",
      tagline: "No-code and code-override interactive web engine",
      usedFor: "Building high-performance, fluid interactive websites featuring spring animation physics, scroll transformations, custom code overrides, and CMS architecture.",
      services: [
        "Custom Framer Website Design & Development",
        "Interactive Micro-Interactions & Physics Transitions",
        "Responsive Dynamic Landing Pages & Portfolios",
        "SEO Optimization & Custom Domain Deployment"
      ]
    },
    {
      id: "photoshop",
      name: "Adobe Photoshop",
      categoryTag: "design",
      categoryLabel: "Visual Design & Photo Manipulation",
      tagline: "Raster composition and commercial packaging visuals",
      usedFor: "Complex multi-layer raster photo manipulation, high-resolution product packaging mockups, color grading, social media banner art, and visual retouching.",
      services: [
        "High-End Photo Composite & Digital Retouching",
        "Commercial Food Packaging & Realistic 3D Mockups",
        "High-Converting Social Media Banners & Creative Sets",
        "Color Correction & Dynamic Creative Compositing"
      ]
    },
    {
      id: "illustrator",
      name: "Adobe Illustrator",
      categoryTag: "print",
      categoryLabel: "Vector Engineering & Pre-Press",
      tagline: "Precision vectors, brand identities & die-lines",
      usedFor: "Precision vector pathing for CNC cutting, custom die-lines, bleed management, Pantone CMYK calibration, brand marks, and mass-production label presses.",
      services: [
        "Brand Identity, Logo Marks & Vector Iconography",
        "Industrial Vector Die-Lines & Registration Marks",
        "Regulatory Food Packaging Labels & Nutrition Layouts",
        "Pantone & CMYK Color Calibration for Mass Printing"
      ]
    },
    {
      id: "coreldraw",
      name: "CorelDraw",
      categoryTag: "print",
      categoryLabel: "Industrial Print & Laser CNC",
      tagline: "Commercial printing, signage & DTF vectorization",
      usedFor: "Industrial manufacturing preparation, precision CNC laser cutting templates, custom apparel DTF transfers, signage layouts, and step-and-repeat imposition.",
      services: [
        "CNC Laser Cutting & Engraving Vector Layouts",
        "Custom Apparel DTF Transfer Artwork Setup",
        "Step-and-Repeat Imposition to Minimize Substrate Waste",
        "Large-Format Commercial Signage & Vinyl Graphics"
      ]
    },
    {
      id: "krita",
      name: "Krita",
      categoryTag: "design",
      categoryLabel: "Digital Art & Conceptual Illustration",
      tagline: "Freehand digital painting and custom textures",
      usedFor: "Digital concept art, illustrative brand accents, custom character designs, and hand-drawn raster elements that give interfaces bespoke warmth.",
      services: [
        "Concept Art & Digital Illustration",
        "Custom Brand Mascot & Character Design",
        "Hand-Drawn Textures & Organic Visual Accents"
      ]
    },
    {
      id: "premiere",
      name: "Adobe Premiere Pro",
      categoryTag: "design",
      categoryLabel: "Video Editing & Short-Form Reels",
      tagline: "Timeline video editing and commercial pacing",
      usedFor: "Short-form viral Reels/TikTok editing, pacing, dynamic captions, voice-over audio synchronization, and promotional video commercials for brands.",
      services: [
        "Viral Instagram Reels & Short-Form Video Production",
        "Promotional Product Commercials & Ad Creative Cuts",
        "Voice-over Synchronization & Dynamic Subtitles",
        "Color Grading & Audio Pacing for High Retention"
      ]
    },
    {
      id: "after-effects",
      name: "Adobe After Effects",
      categoryTag: "design",
      categoryLabel: "Motion Graphics & Animation",
      tagline: "Kinetic typography and visual effects",
      usedFor: "Motion design, animated brand marks, kinetic typography, UI animation mockups, and visual transitions that elevate digital experiences.",
      services: [
        "Logo Animation & Brand Intro Sequences",
        "Kinetic Typography for Commercial Ad Campaigns",
        "UI Animation Showcases & Micro-interaction Reels"
      ]
    },
    {
      id: "react",
      name: "React 19 & Next.js",
      categoryTag: "dev",
      categoryLabel: "Frontend Architecture & Vibe Coding",
      tagline: "Modern component-driven web applications",
      usedFor: "Structuring fast, accessible, reactive web applications with modular components, hooks, server state, and fluid responsive layouts.",
      services: [
        "Custom Single Page Applications (SPA) & Web Apps",
        "Interactive Dashboard & Operating System Simulators",
        "Clean Reusable Component Architectures",
        "High Performance Web Prototyping & API Integration"
      ]
    },
    {
      id: "tailwind",
      name: "Tailwind CSS v4",
      categoryTag: "dev",
      categoryLabel: "Styling & Responsive UI Systems",
      tagline: "Utility-first design with glassmorphism",
      usedFor: "Rapid, pixel-accurate styling, custom glassmorphism design tokens, dark/light theme systems, and responsive fluid viewports.",
      services: [
        "Pixel-Perfect Responsive Styling for All Screens",
        "macOS Glassmorphism & Modern Aesthetic Interfaces",
        "Dark & Light Theme Mode Architecture",
        "Zero-Bloat Minimal CSS Delivery"
      ]
    },
    {
      id: "typescript",
      name: "TypeScript",
      categoryTag: "dev",
      categoryLabel: "Type Safety & Enterprise Logic",
      tagline: "Strict typed JavaScript development",
      usedFor: "Enforcing reliable type contracts, robust UI state models, bug-free component interfaces, and clean code maintainability.",
      services: [
        "Type-Safe Frontend Architecture & State Management",
        "API Schema Modeling & Data Validation",
        "Refactoring & Code Quality Hardening"
      ]
    },
    {
      id: "python",
      name: "Python Programming",
      categoryTag: "dev",
      categoryLabel: "Automation & Scripting",
      tagline: "Workflow automation and data processing",
      usedFor: "Scripting design automation routines, batch asset processing, data normalization, and backend API prototyping.",
      services: [
        "Automated File & Asset Processing Scripts",
        "Data Extraction & Workflow Normalization",
        "Backend Scripting & Prototyping"
      ]
    },
    {
      id: "cyber-security",
      name: "Cyber Security & Critical Infrastructure",
      categoryTag: "dev",
      categoryLabel: "Security Protocols & Protection",
      tagline: "System hardening & infrastructure awareness",
      usedFor: "Applying certified OPSWAT Academy principles of critical infrastructure protection, ethical hacking awareness, and web security best practices.",
      services: [
        "Web Application Security & Vulnerability Auditing",
        "Client Asset Protection & Access Governance",
        "Hardened Hosting & Domain Setup via Blue Fox Hoster"
      ]
    },
    {
      id: "vscode",
      name: "VS Code & Git",
      categoryTag: "dev",
      categoryLabel: "Developer Toolchain & Version Control",
      tagline: "Daily engineering workspace and collaborative Git",
      usedFor: "Daily code authoring, extension tooling, Git branch workflows, repository management on GitHub, and rapid iterative vibe coding.",
      services: [
        "Collaborative Git Repository & Branch Management",
        "CI/CD Build & Deployment Configurations",
        "Rapid Interactive Web Experimentation"
      ]
    }
  ];

  // Active filter logic
  const filteredTools = activeFilter === 'all'
    ? toolsList
    : toolsList.filter(t => t.categoryTag === activeFilter);

  return (
    <div className="p-6 md:p-8 bg-slate-50 dark:bg-slate-900 min-h-full font-sans text-slate-800 dark:text-slate-100 select-auto">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header with Title and Functional Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200/80 dark:border-slate-800 pb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles size={12} />
              Skills & Services Ecosystem
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Software Tools, What It's Used For & Services
            </h1>
            <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 mt-1">
              Comprehensive breakdown of tools mastered by Bipin Chapagain and the specialized commercial services provided with each tool.
            </p>
          </div>

          {/* Working Filter Controls */}
          <div className="flex items-center gap-1.5 p-1.5 bg-slate-200/70 dark:bg-slate-800/90 rounded-2xl shrink-0 backdrop-blur-md border border-slate-300/50 dark:border-white/10 shadow-inner">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all ${
                activeFilter === 'all'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/40 dark:hover:bg-white/10'
              }`}
            >
              All Tools ({toolsList.length})
            </button>
            <button
              onClick={() => setActiveFilter('design')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all ${
                activeFilter === 'design'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/40 dark:hover:bg-white/10'
              }`}
            >
              Design & UI
            </button>
            <button
              onClick={() => setActiveFilter('dev')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all ${
                activeFilter === 'dev'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/40 dark:hover:bg-white/10'
              }`}
            >
              Vibe Coding
            </button>
            <button
              onClick={() => setActiveFilter('print')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all ${
                activeFilter === 'print'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/40 dark:hover:bg-white/10'
              }`}
            >
              Print & Manufacturing
            </button>
          </div>
        </div>

        {/* Tools Grid with Full Card Glassy Shine */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredTools.map((tool) => (
            <div
              key={tool.id}
              className="relative rounded-3xl p-6 transition-all duration-300 group flex flex-col justify-between overflow-hidden backdrop-blur-2xl bg-white/75 dark:bg-slate-800/75 border border-white/60 dark:border-white/15 shadow-xl hover:shadow-2xl hover:border-blue-500/50 hover:-translate-y-1"
              style={{
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.06), inset 0 1px 1px rgba(255, 255, 255, 0.8), inset 0 -1px 2px rgba(0, 0, 0, 0.05)'
              }}
            >
              {/* Glassy Specular Light Overlay */}
              <div
                className="absolute inset-0 pointer-events-none rounded-3xl opacity-60 group-hover:opacity-100 transition-opacity"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.05) 45%, rgba(0, 0, 0, 0.02) 100%)'
                }}
              />

              {/* Card Header: Logo, Name, Category */}
              <div className="relative z-10 mb-4">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-3">
                    <SoftwareLogo name={tool.name} />
                    <div>
                      <h3 className="text-base font-extrabold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {tool.name}
                      </h3>
                      <span className="text-[11px] font-semibold text-blue-600 dark:text-blue-400">
                        {tool.categoryLabel}
                      </span>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-700/80 text-slate-700 dark:text-slate-300 border border-black/5 dark:border-white/10 shrink-0">
                    {tool.categoryTag}
                  </span>
                </div>

                <p className="text-xs italic text-slate-500 dark:text-slate-400">
                  "{tool.tagline}"
                </p>
              </div>

              {/* What It's Used For Section */}
              <div className="relative z-10 mb-4 p-3.5 rounded-2xl bg-slate-100/70 dark:bg-slate-900/60 border border-slate-200/60 dark:border-white/5">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-700 dark:text-slate-300 flex items-center gap-1.5 mb-1.5">
                  <Wrench size={12} className="text-blue-600 dark:text-blue-400" />
                  What It's Used For
                </span>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                  {tool.usedFor}
                </p>
              </div>

              {/* Services Provided Section */}
              <div className="relative z-10 pt-2 border-t border-slate-200/60 dark:border-white/10">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-700 dark:text-slate-300 flex items-center gap-1.5 mb-2">
                  <CheckCircle2 size={12} className="text-emerald-500" />
                  Services Provided With This Tool
                </span>
                <ul className="grid grid-cols-1 gap-1.5">
                  {tool.services.map((svc, sIdx) => (
                    <li
                      key={sIdx}
                      className="text-xs text-slate-600 dark:text-slate-300 flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                      <span className="leading-snug">{svc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Contact / Inquire Banner */}
        <div className="p-6 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-base font-bold">
              Looking for a custom project utilizing these tools?
            </h3>
            <p className="text-xs text-blue-100 mt-1">
              Connect directly with Bipin Chapagain on WhatsApp at +977-9742290123 for packaging, design systems, or Framer websites.
            </p>
          </div>

          <a
            href="https://wa.me/9779742290123?text=Hi%20Bipin,%20I'd%20like%20to%20hire%20you%20for%20a%20project%20using%20your%20software%20toolchain!"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-2xl bg-white text-blue-700 hover:bg-blue-50 font-bold text-xs shadow-md transition-all shrink-0 flex items-center gap-2"
          >
            <span>Inquire on WhatsApp</span>
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </div>
  );
};
