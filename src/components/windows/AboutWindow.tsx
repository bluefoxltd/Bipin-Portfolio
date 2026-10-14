import React from 'react';
import { MessageCircle, Mail, MapPin, ExternalLink, Sparkles, Palette, TrendingUp, Award, Layers, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

export const AboutWindow: React.FC = () => {
  return (
    <div className="p-6 md:p-8 bg-neutral-950 min-h-full font-sans text-slate-100 select-auto">
      <div className="max-w-4xl mx-auto space-y-7">
        
        {/* Hero Card - macOS Frosted Dark Glass (No white card) */}
        <div className="flex flex-col md:flex-row items-center gap-8 bg-neutral-900/90 backdrop-blur-2xl p-6 md:p-8 rounded-3xl border border-white/15 shadow-2xl">
          {/* Portrait Avatar */}
          <div className="relative shrink-0">
            <div className="w-36 h-36 md:w-44 md:h-44 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-blue-500/30 bg-neutral-800">
              <img
                src="https://framerusercontent.com/images/B71N7auZ3OgQdiZzOANotZXcapE.jpeg?width=960"
                alt="Bipin Chapagain"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 px-3 py-1 rounded-full bg-emerald-600 text-white font-bold text-[10px] shadow-lg flex items-center gap-1.5 border border-white/20">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              Available for Work
            </div>
          </div>

          {/* Intro Text */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles size={12} />
              About Bipin Chapagain
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">
              {PORTFOLIO_DATA.personal.name}
            </h1>
            <p className="text-sm font-semibold text-blue-400 mt-1">
              {PORTFOLIO_DATA.personal.title}
            </p>
            <p className="text-xs text-slate-400 mt-0.5 flex items-center justify-center md:justify-start gap-1">
              <MapPin size={12} className="text-rose-400" />
              {PORTFOLIO_DATA.personal.location}
            </p>
            <p className="text-xs md:text-sm text-slate-300 mt-3 leading-relaxed">
              {PORTFOLIO_DATA.personal.profileSummary}
            </p>

            {/* Quick CTAs */}
            <div className="mt-5 flex flex-wrap items-center justify-center md:justify-start gap-3">
              <a
                href={PORTFOLIO_DATA.personal.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-2 shadow-lg transition-colors"
              >
                <MessageCircle size={14} />
                WhatsApp (+977-9742290123)
              </a>

              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-slate-100 text-xs font-semibold flex items-center gap-2 border border-white/10 transition-colors"
              >
                <Mail size={14} />
                Send Email
              </a>

              <a
                href={PORTFOLIO_DATA.personal.framerSite}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-xs font-semibold flex items-center gap-2 text-slate-200 transition-colors"
              >
                <span>Framer Portfolio</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>

        {/* 3 Core Experience Pillars - Translucent dark cards (no white cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-5 rounded-2xl bg-neutral-900/80 backdrop-blur-xl border border-white/10 shadow-xl">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-3 border border-blue-500/30">
              <Palette size={20} />
            </div>
            <h3 className="text-sm font-bold text-white mb-1">
              UX/UI & Product Design
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Figma design systems, high-fidelity prototypes, user journey mapping, and fluid web experiences created with Framer.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-neutral-900/80 backdrop-blur-xl border border-white/10 shadow-xl">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center mb-3 border border-purple-500/30">
              <Layers size={20} />
            </div>
            <h3 className="text-sm font-bold text-white mb-1">
              Packaging & Print Production
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Industrial vector die-lines, food packaging, Pantone calibration, CNC laser cutting, and DTF apparel printing engineered for mass production.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-neutral-900/80 backdrop-blur-xl border border-white/10 shadow-xl">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3 border border-emerald-500/30">
              <TrendingUp size={20} />
            </div>
            <h3 className="text-sm font-bold text-white mb-1">
              SMM & Brand Scaling
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Social Media Packages starting from Rs 8,000/mo, graphical banners, viral Reels direction, and Meta Ads management.
            </p>
          </div>
        </div>

        {/* Certifications Badge Bar */}
        <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-500/15 via-blue-500/15 to-purple-500/15 border border-white/15 backdrop-blur-xl flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-white">
              <Award size={16} className="text-amber-400" />
              <span>Certified Qualifications</span>
            </div>
            <p className="text-xs text-slate-300 mt-1">
              International Certified Career Coach (USA) · Design Thinking Professional (GSDC) · Critical Infrastructure Protection (OPSWAT)
            </p>
          </div>
          <a
            href={PORTFOLIO_DATA.personal.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shrink-0 transition-colors shadow-md"
          >
            Inquire for Roles
          </a>
        </div>
      </div>
    </div>
  );
};
