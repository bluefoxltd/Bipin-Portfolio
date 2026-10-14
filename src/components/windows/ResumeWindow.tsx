import React, { useState } from 'react';
import {
  Download,
  Printer,
  Copy,
  Check,
  ExternalLink,
  MessageCircle,
  Mail,
  MapPin,
  Phone,
  Award,
  Briefcase,
  GraduationCap,
  Code,
  Shield,
  Sparkles,
  Layers
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { SoftwareLogo } from './SkillsWindow';

export const ResumeWindow: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = `BIPIN CHAPAGAIN - Product / Visual / UI / Graphic Designer
Phone/WhatsApp: +977-9742290123
Email: bipinxettry2019@gmail.com
Address: Itahari, Sunsari, Nepal
Website: www.bipin.framer.ai
GitHub: https://github.com/bluefoxltd`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex flex-col h-full bg-neutral-950 text-slate-100 font-sans select-auto">
      {/* Top Action Ribbon - macOS dark brushed glass */}
      <div className="h-12 px-6 bg-neutral-900/90 backdrop-blur-md border-b border-white/10 flex items-center justify-between gap-4 shrink-0 select-none">
        <div className="flex items-center gap-2 text-xs">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
          <span className="font-bold text-white tracking-wide">Bipin 2026.pdf</span>
          <span className="text-slate-400 hidden sm:inline">· Official Resume & Credentials · Itahari, Sunsari, Nepal</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="px-3 py-1.5 text-xs font-medium rounded-lg bg-white/10 hover:bg-white/15 text-slate-200 transition-colors flex items-center gap-1.5 border border-white/10"
          >
            {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
            <span>{copied ? 'Copied' : 'Copy Info'}</span>
          </button>

          <button
            onClick={handlePrint}
            className="px-3 py-1.5 text-xs font-medium rounded-lg bg-white/10 hover:bg-white/15 text-slate-200 transition-colors flex items-center gap-1.5 border border-white/10"
          >
            <Printer size={13} />
            <span className="hidden sm:inline">Print / PDF</span>
          </button>

          <a
            href="https://wa.me/9779742290123?text=Hi%20Bipin,%20I%20reviewed%20your%20Bipin%202026.pdf%20CV%20and%20would%20love%20to%20discuss%20a%20design%20role!"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition-colors flex items-center gap-1.5 shadow-md"
          >
            <MessageCircle size={13} />
            <span>Hire Bipin</span>
          </a>
        </div>
      </div>

      {/* Document Container - Sleek Dark macOS Frosted Canvas (No stark white cards) */}
      <div className="flex-1 overflow-y-auto p-4 md:p-8 flex justify-center bg-gradient-to-b from-neutral-950 via-slate-950 to-neutral-900">
        <div className="w-full max-w-4xl bg-neutral-900/80 backdrop-blur-2xl shadow-2xl rounded-3xl p-6 md:p-10 border border-white/15 text-slate-100">
          
          {/* Header section matching Bipin 2026.pdf */}
          <div className="border-b border-white/10 pb-6 mb-6">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              
              {/* Left Column: Follow Me & Contact */}
              <div className="space-y-2 text-xs text-slate-300">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-blue-400 block mb-1.5">
                  CONTACT & SOCIALS
                </span>
                <div className="flex items-center gap-2 text-slate-200">
                  <Phone size={13} className="text-emerald-400" />
                  <span className="font-semibold">{PORTFOLIO_DATA.personal.whatsappPhone}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <Mail size={13} className="text-blue-400" />
                  <span>{PORTFOLIO_DATA.personal.email}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <MapPin size={13} className="text-rose-400" />
                  <span>{PORTFOLIO_DATA.personal.address}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <ExternalLink size={13} className="text-purple-400" />
                  <a
                    href="http://bipin.framer.ai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline font-semibold"
                  >
                    {PORTFOLIO_DATA.contactInfo.website}
                  </a>
                </div>
              </div>

              {/* Right Column: Name, Title & Photo */}
              <div className="flex items-start gap-4 md:text-right">
                <div>
                  <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white">
                    {PORTFOLIO_DATA.personal.name}
                  </h1>
                  <p className="text-xs md:text-sm font-bold text-blue-400 mt-1 uppercase tracking-wider">
                    {PORTFOLIO_DATA.personal.title}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Itahari, Sunsari, Nepal
                  </p>
                </div>
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden shadow-xl ring-2 ring-blue-500/40 shrink-0 bg-neutral-800">
                  <img
                    src="https://framerusercontent.com/images/B71N7auZ3OgQdiZzOANotZXcapE.jpeg?width=960"
                    alt="Bipin Chapagain"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Profile Section - Refined dark translucent container (No white box) */}
          <div className="mb-8 p-5 rounded-2xl bg-white/5 border border-white/10">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-blue-400 mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500 shadow-sm shadow-blue-500" />
              PROFILE SUMMARY
            </h2>
            <p className="text-xs md:text-sm text-slate-200 leading-relaxed font-normal">
              {PORTFOLIO_DATA.personal.profileSummary}
            </p>
          </div>

          {/* Two-Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Left Column: Education, Skills with Logos (NO percentage circles), Languages, Other Training, Achievements */}
            <div className="md:col-span-5 space-y-7 border-r-0 md:border-r md:border-white/10 md:pr-6">
              
              {/* Education */}
              <div>
                <h3 className="text-xs font-extrabold uppercase tracking-widest text-slate-200 mb-3 flex items-center gap-2">
                  <GraduationCap size={15} className="text-blue-400" />
                  EDUCATION
                </h3>
                <div className="space-y-3 text-xs">
                  {PORTFOLIO_DATA.education.map((edu, i) => (
                    <div key={i} className="pl-3 border-l-2 border-blue-500 bg-white/5 p-2.5 rounded-r-xl border-t border-b border-r border-white/5">
                      <div className="font-bold text-white">
                        {edu.institution}
                      </div>
                      <div className="text-blue-400 font-medium">
                        {edu.degree}
                      </div>
                      <div className="text-[11px] font-mono text-slate-400 mt-0.5">
                        {edu.year} · {edu.details}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills with Logos & Proficiency (NO percentage circle / line, logos clearly visible) */}
              <div>
                <h3 className="text-xs font-extrabold uppercase tracking-widest text-slate-200 mb-3 flex items-center gap-2">
                  <Code size={15} className="text-blue-400" />
                  SKILLS & PROFICIENCY
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {PORTFOLIO_DATA.cvSoftwareSkills.map((sk) => (
                    <div
                      key={sk.name}
                      className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center gap-3 transition-colors"
                    >
                      {/* Authentic Software Logo */}
                      <SoftwareLogo name={sk.name} className="w-9 h-9 text-xs" />
                      
                      <div className="min-w-0 flex-1">
                        <div className="text-xs font-bold text-white truncate">
                          {sk.name}
                        </div>
                        <div className="text-[10px] text-blue-400 font-medium">
                          {sk.category}
                        </div>
                        <div className="text-[10px] text-slate-400 truncate">
                          {sk.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Languages - Clearly visible texts NOT on white box */}
              <div>
                <h3 className="text-xs font-extrabold uppercase tracking-widest text-slate-200 mb-2.5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400" />
                  LANGUAGES
                </h3>
                <div className="flex flex-wrap gap-2 text-xs">
                  {PORTFOLIO_DATA.languages.map((l) => (
                    <div
                      key={l.name}
                      className="px-3 py-1.5 rounded-xl bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-500/30 text-slate-100 font-medium flex items-center gap-2 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span className="font-semibold text-white">{l.name}</span>
                      <span className="text-[11px] text-emerald-300">({l.fluency})</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Other Training */}
              <div>
                <h3 className="text-xs font-extrabold uppercase tracking-widest text-slate-200 mb-2.5 flex items-center gap-2">
                  <Shield size={14} className="text-emerald-400" />
                  OTHER TRAINING
                </h3>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {PORTFOLIO_DATA.trainings.map((t, idx) => (
                    <li key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-white/5 border border-white/5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                      <span className="text-slate-200">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Achievements & Certifications */}
              <div>
                <h3 className="text-xs font-extrabold uppercase tracking-widest text-slate-200 mb-3 flex items-center gap-2">
                  <Award size={15} className="text-amber-400" />
                  ACHIEVEMENTS & CERTIFICATIONS
                </h3>
                <div className="space-y-2.5 text-xs">
                  {PORTFOLIO_DATA.certifications.map((cert, idx) => (
                    <div key={idx} className="p-2.5 rounded-xl bg-amber-950/20 border border-amber-500/30 text-slate-200">
                      <div className="font-bold text-white">
                        {cert.title}
                      </div>
                      <div className="text-[11px] text-amber-300 font-medium">
                        {cert.organization}
                      </div>
                      <div className="text-[10px] font-mono text-slate-400 mt-0.5">
                        {cert.date}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Experience in Full Detail & Interests */}
            <div className="md:col-span-7 space-y-7">
              {/* Experience */}
              <div>
                <h3 className="text-xs font-extrabold uppercase tracking-widest text-slate-200 mb-4 flex items-center gap-2">
                  <Briefcase size={15} className="text-blue-400" />
                  EXPERIENCE
                </h3>

                <div className="space-y-6">
                  {PORTFOLIO_DATA.experience.map((exp) => (
                    <div key={exp.id} className="relative pl-4 border-l-2 border-blue-500/50 bg-white/5 p-4 rounded-r-2xl border-t border-b border-r border-white/5">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                        <h4 className="text-sm font-bold text-white">
                          {exp.company}
                        </h4>
                        <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded-md bg-blue-500/20 text-blue-300 border border-blue-500/30 w-max">
                          {exp.period}
                        </span>
                      </div>
                      <div className="text-xs font-bold text-blue-400 mb-2">
                        {exp.role}
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {exp.description}
                      </p>
                      <ul className="mt-2.5 space-y-1.5">
                        {exp.highlights.map((h, i) => (
                          <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                            <span className="text-blue-400 font-bold mt-0.5">›</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interests & Disciplines - Visible texts NOT on white box */}
              <div className="pt-4 border-t border-white/10">
                <h3 className="text-xs font-extrabold uppercase tracking-widest text-slate-200 mb-3 flex items-center gap-2">
                  <Sparkles size={14} className="text-purple-400" />
                  INTERESTS & DISCIPLINES
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                  {PORTFOLIO_DATA.interests.map((int, i) => (
                    <div
                      key={i}
                      className="px-3 py-2 rounded-xl bg-purple-950/30 hover:bg-purple-900/40 border border-purple-500/30 text-purple-200 font-medium flex items-center gap-2 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                      <span className="truncate">{int}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
