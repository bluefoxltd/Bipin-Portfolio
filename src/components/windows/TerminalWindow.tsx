import React, { useState, useRef, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

interface TerminalLine {
  type: 'input' | 'output' | 'system';
  content: string | React.ReactNode;
}

export const TerminalWindow: React.FC = () => {
  const [history, setHistory] = useState<TerminalLine[]>([
    {
      type: 'system',
      content: 'Welcome to macOS BlueFox Edition Terminal (zsh 5.9)\nType "help" to see available commands or "neofetch" for system telemetry.\n'
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) {
      setHistory(prev => [...prev, { type: 'input', content: '' }]);
      return;
    }

    const newHistory = [...history, { type: 'input' as const, content: trimmed }];
    const lower = trimmed.toLowerCase();

    if (lower === 'clear') {
      setHistory([]);
      return;
    } else if (lower === 'help') {
      newHistory.push({
        type: 'output',
        content: `Available commands:
  • neofetch   - Display system specs and BlueFox identity
  • about      - Learn about Bipin Chapagain
  • skills     - Print creative and technical skill matrix
  • projects   - List flagship applications and design works
  • smm        - View social media marketing subscription tiers
  • contact    - Display official contact channels & WhatsApp
  • resume     - Read resume summary in terminal
  • whoami     - Current user session
  • date       - Local time in Kathmandu, Nepal
  • clear      - Clear terminal screen`
      });
    } else if (lower === 'neofetch') {
      newHistory.push({
        type: 'output',
        content: (
          <div className="flex flex-col sm:flex-row gap-4 font-mono text-xs my-2 text-slate-200">
            <div className="text-blue-400 select-none">
              <pre>{`
    /\\_/\\  
   ( o.o ) 
    > ^ <  
   BLUE FOX
              `}</pre>
            </div>
            <div className="space-y-0.5">
              <div><span className="text-blue-400 font-bold">bipin</span>@<span className="text-purple-400 font-bold">bluefox-mac</span></div>
              <div className="text-slate-500">----------------------</div>
              <div><span className="text-yellow-400">OS:</span> macOS BlueFox Edition (Sonoma/Tahoe)</div>
              <div><span className="text-yellow-400">Host:</span> Apple MacBook Pro M3 Max</div>
              <div><span className="text-yellow-400">Kernel:</span> Darwin 24.1.0 (Vibe-Kernel)</div>
              <div><span className="text-yellow-400">Role:</span> Creative UI/UX Designer & Vibe Coder</div>
              <div><span className="text-yellow-400">Agency:</span> Blue Fox Pvt Ltd (Founder)</div>
              <div><span className="text-yellow-400">Shell:</span> zsh 5.9 (x86_64-apple-darwin)</div>
              <div><span className="text-yellow-400">Location:</span> Itahari / Kathmandu, Nepal (NPT +5:45)</div>
              <div><span className="text-yellow-400">Memory:</span> 64 GB Unified LPDDR5</div>
            </div>
          </div>
        )
      });
    } else if (lower === 'about') {
      newHistory.push({
        type: 'output',
        content: `Bipin Chapagain is a Creative UI/UX Designer & Vibe Coder.
Founder at Blue Fox Pvt Ltd.
Specializing in Figma, Framer interactive web design, React/Tailwind frontend, and scalable SMM packages.
Location: Itahari / Kathmandu, Nepal
Framer Site: http://bipin.framer.ai/`
      });
    } else if (lower === 'skills') {
      newHistory.push({
        type: 'output',
        content: `Creative: Figma (98%), Framer (95%), Photoshop (92%), Illustrator (90%), Premiere (86%)
Vibe Coding: React 19 (90%), Tailwind CSS v4 (96%), TypeScript (88%), Next.js (86%)
Marketing: Social Media Marketing (94%), Meta Ads (90%), Content Strategy (88%)`
      });
    } else if (lower === 'projects') {
      newHistory.push({
        type: 'output',
        content: `1. Blue Fox Agency Experience (Agency / Framer) -> http://bipin.framer.ai/
2. macOS OS Interactive Portfolio (React 19 / TypeScript / Tailwind)
3. EditItAll Creative Suite (Photo, Vector, PDF, Word, Sheet, Slide) -> https://edititall.com
4. Social Growth Matrix & SMM Packages (Facebook / Instagram / Meta Ads)
5. Framer Micro-Interaction Masterclass`
      });
    } else if (lower === 'smm') {
      newHistory.push({
        type: 'output',
        content: `SOCIAL MEDIA PACKAGES (Blue Fox Pvt Ltd):
  [1] Starter:  Rs 8,000 / month  (FB/IG, Copywriting, 5 Banners, 1 Festive)
  [2] Basic:    Rs 15,000 / month [Best Value] (10 Banners, 2 Reels, $20 Ad Budget)
  [3] Standard: Rs 28,000 / month (15 Banners, 4 Reels + Voiceover, $30 Ad Budget)
  [4] Premium:  Rs 32,000 / month (20 Banners, 8 Reels, LinkedIn/FB/IG, $50 Ad Budget)
To order: WhatsApp +977-9742290123`
      });
    } else if (lower === 'contact') {
      newHistory.push({
        type: 'output',
        content: `Phone / WhatsApp: +977-9742290123
Email: bipinxettry2019@gmail.com
Address: Itahari, Sunsari, Nepal
Website: www.bipin.framer.ai
Instagram: https://www.instagram.com/bpnxetry/
Facebook: https://www.facebook.com/profile.php?id=61578128660414
LinkedIn: https://www.linkedin.com/in/bipinchapagain
GitHub: https://github.com/bluefoxltd`
      });
    } else if (lower === 'resume' || lower === 'cat resume.pdf' || lower === 'cat resume') {
      newHistory.push({
        type: 'output',
        content: `=== RESUME: BIPIN CHAPAGAIN ===
Role: Product / Visual / UI / Graphic Designer
Phone: +977-9742290123
Email: bipinxettry2019@gmail.com
Location: Itahari, Sunsari, Nepal
Website: www.bipin.framer.ai
Type 'open resume' or click the Resume icon on desktop for full PDF.`
      });
    } else if (lower === 'whoami') {
      newHistory.push({
        type: 'output',
        content: 'bipin'
      });
    } else if (lower.startsWith('sudo')) {
      newHistory.push({
        type: 'output',
        content: 'User bipin is already authorized with full creative administrator privileges.'
      });
    } else if (lower === 'date') {
      newHistory.push({
        type: 'output',
        content: new Date().toLocaleString('en-US', { timeZone: 'Asia/Kathmandu' }) + ' (NPT Nepal Time)'
      });
    } else {
      newHistory.push({
        type: 'output',
        content: `zsh: command not found: ${trimmed}. Type "help" for valid commands.`
      });
    }

    setHistory(newHistory);
    setInputVal('');
  };

  return (
    <div
      onClick={() => document.getElementById('terminal-input')?.focus()}
      className="p-4 bg-slate-950 text-emerald-400 font-mono text-xs h-full overflow-y-auto flex flex-col select-text"
    >
      <div className="space-y-2">
        {history.map((line, idx) => (
          <div key={idx}>
            {line.type === 'input' && (
              <div className="flex items-center gap-2 text-slate-300">
                <span className="text-blue-400 font-bold">bipin@bluefox-mac</span>
                <span className="text-purple-400">~</span>
                <span className="text-emerald-400">%</span>
                <span>{line.content}</span>
              </div>
            )}
            {line.type === 'output' && (
              <div className="text-slate-300 whitespace-pre-wrap pl-2 leading-relaxed">
                {line.content}
              </div>
            )}
            {line.type === 'system' && (
              <div className="text-slate-400 whitespace-pre-wrap">
                {line.content}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Input row */}
      <div className="flex items-center gap-2 text-slate-300 mt-2">
        <span className="text-blue-400 font-bold">bipin@bluefox-mac</span>
        <span className="text-purple-400">~</span>
        <span className="text-emerald-400">%</span>
        <input
          id="terminal-input"
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleCommand(inputVal);
            }
          }}
          autoFocus
          className="flex-1 bg-transparent border-0 outline-none text-emerald-300 font-mono text-xs focus:ring-0 p-0"
        />
      </div>

      <div ref={bottomRef} />
    </div>
  );
};
