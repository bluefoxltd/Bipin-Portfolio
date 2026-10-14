import React, { useState, useRef, useEffect } from 'react';
import { X, Sparkles, Send, MessageCircle, ExternalLink, Mail } from 'lucide-react';
import { sounds } from '../utils/soundEffects';
import { answerSiriQuery, SiriResponse } from '../services/siriKnowledge';

interface SiriWidgetProps {
  onOpenApp?: (appId: string) => void;
}

interface MessageItem {
  sender: 'siri' | 'user';
  text: string;
  action?: SiriResponse['action'];
  secondaryAction?: SiriResponse['secondaryAction'];
}

export const SiriWidget: React.FC<SiriWidgetProps> = ({ onOpenApp }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<MessageItem[]>([
    {
      sender: 'siri',
      text: `Hello! I'm Siri, trained with complete in-depth knowledge about Bipin Chapagain (Bipin Xettry). Ask me anything about his work at Blue Fox & Lakhan Traders, SMM pricing packages, packaging & UI/UX design, education, tools, or how to contact him directly.`
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  const quickPrompts = [
    { label: "Blue Fox & Lakhan", query: "Tell me about your experience at Blue Fox and Lakhan Traders" },
    { label: "Contact & Email", query: "What is Bipin's official email and WhatsApp number?" },
    { label: "SMM Packages", query: "What are the SMM packages and pricing?" },
    { label: "Packaging Design", query: "Tell me about his packaging and food branding work" },
    { label: "Software & Tools", query: "What tools and software skills does Bipin use?" },
    { label: "Education & Certs", query: "What is Bipin's education and certifications?" },
  ];

  useEffect(() => {
    if (isOpen) {
      chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isThinking]);

  const handleSend = (text: string) => {
    if (!text.trim() || isThinking) return;
    sounds.playClick();

    const userMsg = text.trim();
    setMessages(prev => [...prev, { sender: 'user', text: userMsg }]);
    setInputText('');
    setIsThinking(true);

    setTimeout(() => {
      const response = answerSiriQuery(userMsg);
      setMessages(prev => [
        ...prev,
        {
          sender: 'siri',
          text: response.text,
          action: response.action,
          secondaryAction: response.secondaryAction
        }
      ]);
      setIsThinking(false);
      sounds.playSuccess();
    }, 450);
  };

  const renderActionButton = (action?: SiriResponse['action']) => {
    if (!action) return null;

    if (action.appId && onOpenApp) {
      return (
        <button
          onClick={() => {
            onOpenApp(action.appId!);
            setIsOpen(false);
          }}
          className="inline-flex items-center gap-1.5 px-3 py-1 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-[11px] font-medium shadow-sm transition-colors cursor-pointer"
        >
          <Sparkles size={11} />
          {action.label}
        </button>
      );
    }

    if (action.url) {
      const isEmail = action.url.startsWith('mailto:');
      const isWa = action.url.includes('wa.me');
      return (
        <a
          href={action.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-1.5 px-3 py-1 text-white rounded-lg text-[11px] font-medium shadow-sm transition-colors cursor-pointer ${
            isEmail ? 'bg-blue-600 hover:bg-blue-700' : isWa ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-slate-700 hover:bg-slate-800'
          }`}
        >
          {isEmail ? <Mail size={11} /> : <MessageCircle size={11} />}
          {action.label}
          <ExternalLink size={10} />
        </a>
      );
    }

    return null;
  };

  return (
    <>
      {/* Siri Glowing Orb Button */}
      <button
        onClick={() => {
          sounds.playOpen();
          setIsOpen(!isOpen);
        }}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-30 group cursor-pointer focus:outline-none"
        title="Activate Siri / AI Assistant (Trained on Bipin Chapagain)"
      >
        <div className="relative w-12 h-12 md:w-14 md:h-14 flex items-center justify-center">
          {/* Animated colorful Siri Aura */}
          <div
            className="absolute inset-0 rounded-full animate-siri-glow opacity-80 group-hover:opacity-100 transition-opacity blur-md"
            style={{
              background: 'radial-gradient(circle, rgba(168,85,247,0.9) 0%, rgba(59,130,246,0.8) 50%, rgba(236,72,153,0.7) 100%)'
            }}
          />
          <div
            className="relative w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-lg border border-white/40 overflow-hidden"
            style={{
              background: 'radial-gradient(circle at 35% 35%, #9333ea, #3b82f6 50%, #ec4899 90%, #06b6d4 100%)',
              boxShadow: '0 8px 24px rgba(147, 51, 234, 0.45)'
            }}
          >
            <Sparkles className="w-5 h-5 text-white animate-spin [animation-duration:8s]" />
          </div>
        </div>
      </button>

      {/* Siri Interactive Assistant Window */}
      {isOpen && (
        <div
          className="fixed bottom-22 right-4 md:right-8 w-[92vw] max-w-sm rounded-2xl mac-glass shadow-2xl z-40 overflow-hidden border border-white/30 flex flex-col transition-all text-slate-800 dark:text-slate-100"
          style={{ maxHeight: '520px' }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-pink-600/20 border-b border-black/5 dark:border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center">
                <Sparkles size={11} className="text-white" />
              </div>
              <div>
                <span className="text-xs font-semibold tracking-tight block">Siri Assistant · Bipin Chapagain</span>
                <span className="text-[9px] text-slate-500 dark:text-slate-400 block -mt-0.5">Trained with full website knowledge</span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X size={14} />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-3 text-xs">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`p-3 rounded-2xl max-w-[88%] leading-relaxed whitespace-pre-line ${
                    m.sender === 'user'
                      ? 'bg-blue-600 text-white rounded-br-none shadow-sm'
                      : 'bg-white/85 dark:bg-slate-800/90 text-slate-800 dark:text-slate-100 rounded-bl-none shadow-sm border border-black/5 dark:border-white/10'
                  }`}
                >
                  {m.text}
                </div>

                {/* Response Actions */}
                {(m.action || m.secondaryAction) && (
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {renderActionButton(m.action)}
                    {renderActionButton(m.secondaryAction)}
                  </div>
                )}
              </div>
            ))}

            {isThinking && (
              <div className="flex items-center gap-1.5 p-2 text-slate-400 text-xs">
                <Sparkles size={12} className="animate-spin text-purple-400" />
                <span>Siri is thinking...</span>
              </div>
            )}
            <div ref={chatBottomRef} />
          </div>

          {/* Quick Prompts */}
          <div className="px-3 py-1.5 flex gap-1.5 overflow-x-auto border-t border-black/5 dark:border-white/5 bg-slate-50/50 dark:bg-slate-900/50">
            {quickPrompts.map((q, i) => (
              <button
                key={i}
                onClick={() => handleSend(q.query)}
                className="whitespace-nowrap px-2.5 py-1 text-[10px] rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors shrink-0 cursor-pointer"
              >
                {q.label}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <div className="p-2 bg-white/70 dark:bg-slate-900/80 border-t border-black/5 dark:border-white/10 flex items-center gap-1.5">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend(inputText)}
              placeholder="Ask anything about Bipin's work, experience, rates..."
              className="flex-1 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 text-xs px-3 py-1.5 rounded-xl border border-transparent focus:border-blue-500 focus:outline-none"
            />
            <button
              onClick={() => handleSend(inputText)}
              disabled={!inputText.trim()}
              className="p-1.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 disabled:opacity-40 transition-colors cursor-pointer"
            >
              <Send size={13} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
