import React, { useState } from 'react';
import { Send, Phone, Video, MoreVertical, MessageCircle, ExternalLink, CheckCheck, Smile } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

export const WhatsAppWindow: React.FC = () => {
  const [messages, setMessages] = useState<Array<{ sender: 'bipin' | 'user'; text: string; time: string }>>([
    {
      sender: 'bipin',
      text: "Namaste! 👋 I'm Bipin Chapagain, Founder & Creative Lead at Blue Fox Pvt Ltd. Welcome to my macOS OS portfolio!",
      time: "11:08 AM"
    },
    {
      sender: 'bipin',
      text: "Whether you need a custom UI/UX design in Figma, a high-converting Framer website, or our monthly SMM Packages (starting at Rs 8,000/mo), feel free to message me directly!",
      time: "11:09 AM"
    }
  ]);
  const [inputText, setInputText] = useState('');

  const quickQuestions = [
    "I'd like to book an SMM Package",
    "Can you design my brand in Figma?",
    "Need a Framer web app built",
    "What are your retainer rates?"
  ];

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    const userText = text.trim();
    const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    setMessages(prev => [...prev, { sender: 'user', text: userText, time: timeStr }]);
    setInputText('');

    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        {
          sender: 'bipin',
          text: `Thanks for your interest! Let's connect directly on my personal WhatsApp at +977-9742290123 so we can finalize details and start right away. Click the green button below to launch our direct chat!`,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    }, 600);
  };

  const handleDirectLaunch = () => {
    const text = encodeURIComponent(
      inputText ? inputText : "Hi Bipin, I'm reaching out from your macOS Portfolio to discuss working together!"
    );
    window.open(`https://wa.me/9779742290123?text=${text}`, '_blank');
  };

  return (
    <div className="flex flex-col h-full bg-[#EFEAE2] dark:bg-slate-950 font-sans select-auto text-slate-900 dark:text-slate-100">
      {/* Header Bar */}
      <div className="h-14 px-4 bg-[#075E54] dark:bg-slate-900 text-white flex items-center justify-between shadow-md shrink-0 select-none">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img
              src="/src/assets/images/bipin_desk_portrait_1791987295213.jpg"
              alt="Bipin Chapagain"
              className="w-10 h-10 rounded-full object-cover border-2 border-white/50"
              referrerPolicy="no-referrer"
            />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 rounded-full ring-2 ring-white" />
          </div>

          <div>
            <div className="font-bold text-sm tracking-tight flex items-center gap-1.5">
              <span>Bipin Chapagain</span>
              <span className="text-[10px] font-normal opacity-80">(Blue Fox)</span>
            </div>
            <div className="text-[11px] text-emerald-200">
              Online · +977-9742290123
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleDirectLaunch}
            className="px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-colors"
            title="Launch WhatsApp app"
          >
            <MessageCircle size={14} />
            <span>Open WhatsApp Web</span>
            <ExternalLink size={12} />
          </button>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {/* Verified encryption notice */}
        <div className="text-center my-2">
          <span className="inline-block px-3 py-1 rounded-lg bg-[#FFEECD] dark:bg-slate-800 text-[#54656F] dark:text-slate-300 text-[11px] shadow-sm">
            🔒 Direct channel to Bipin Chapagain · Phone: +977-9742290123
          </span>
        </div>

        {messages.map((m, idx) => (
          <div
            key={idx}
            className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
          >
            <div
              className={`p-3 rounded-2xl max-w-[82%] text-xs shadow-sm leading-relaxed relative ${
                m.sender === 'user'
                  ? 'bg-[#E7FFDB] dark:bg-emerald-900 text-slate-900 dark:text-white rounded-br-none'
                  : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 rounded-bl-none'
              }`}
            >
              <p>{m.text}</p>
              <div className="flex items-center justify-end gap-1 mt-1 text-[9px] text-slate-400 dark:text-slate-400">
                <span>{m.time}</span>
                {m.sender === 'user' && <CheckCheck size={12} className="text-blue-500" />}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Prompts Chips */}
      <div className="px-4 py-2 bg-white/70 dark:bg-slate-900/80 border-t border-black/5 dark:border-white/5 flex gap-2 overflow-x-auto select-none">
        {quickQuestions.map((q, i) => (
          <button
            key={i}
            onClick={() => handleSend(q)}
            className="whitespace-nowrap px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-[11px] font-medium transition-colors border border-slate-200 dark:border-slate-700 shrink-0"
          >
            {q}
          </button>
        ))}
      </div>

      {/* Input Row */}
      <div className="p-3 bg-white dark:bg-slate-900 border-t border-black/5 dark:border-white/10 flex items-center gap-2">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend(inputText)}
          placeholder="Type a message to Bipin..."
          className="flex-1 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 text-xs px-4 py-2.5 rounded-full border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-emerald-500"
        />
        <button
          onClick={() => handleSend(inputText)}
          className="p-2.5 bg-[#075E54] hover:bg-[#128C7E] text-white rounded-full transition-colors shadow-sm"
        >
          <Send size={15} />
        </button>
      </div>
    </div>
  );
};
