import React, { useState } from 'react';
import { BookOpen, Sparkles, Plus, Trash2, Edit3 } from 'lucide-react';

interface Note {
  id: string;
  title: string;
  date: string;
  category: string;
  content: string;
}

export const NotesWindow: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: "note-1",
      title: "The Vibe Coding Manifesto",
      date: "Oct 12, 2026",
      category: "Engineering & Vibe",
      content: `Vibe coding isn't about throwing code together without thought; it's about staying in relentless creative flow.
When designing interfaces in Figma or structuring components in React, the feedback loop between thought and visual output should be instantaneous.
Key principles:
1. Motion should feel like physical inertia, never rigid linear transforms.
2. Glassmorphism must have high saturation (saturate 180%) so colors behind sing through clearly.
3. Every button, interaction, and hover state must reward the user's curiosity with tactile response.`
    },
    {
      id: "note-2",
      title: "High-Converting SMM Architecture",
      date: "Oct 8, 2026",
      category: "Marketing Strategy",
      content: `What actually drives results for brands on Meta & Instagram?
• The 3-second hook: If the reel or banner graphic doesn't establish conflict or visual intrigue in 1500ms, users swipe.
• Single-call-to-action clarity: Don't tell them to follow, visit link, comment, and share. Pick ONE goal per creative.
• Consistent typography and color palette across all 20 monthly graphics so the brand dominates memory.`
    },
    {
      id: "note-3",
      title: "Framer Animation Tips & Spring Tokens",
      date: "Sep 28, 2026",
      category: "UI/UX & Framer",
      content: `Optimal spring presets for UI cards:
stiffness: 380, damping: 28, mass: 0.8.
This creates that snappy macOS feel where the card lands cleanly without excessive jitter or sluggish lag.
Pair with subtle backdrop-blur (20px to 32px) for layered macOS-grade depth.`
    }
  ]);

  const [activeNoteId, setActiveNoteId] = useState<string>(notes[0].id);
  const activeNote = notes.find(n => n.id === activeNoteId) || notes[0];

  return (
    <div className="flex h-full bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 font-sans select-auto">
      {/* Sidebar Note List */}
      <div className="w-56 md:w-64 border-r border-slate-200 dark:border-slate-800 flex flex-col bg-slate-50 dark:bg-slate-950 shrink-0 select-none">
        <div className="p-3 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Journal & Notes</span>
          <span className="text-[10px] text-slate-400 font-mono">{notes.length} notes</span>
        </div>

        <div className="flex-1 overflow-y-auto p-2 space-y-1">
          {notes.map((note) => (
            <button
              key={note.id}
              onClick={() => setActiveNoteId(note.id)}
              className={`w-full text-left p-2.5 rounded-xl transition-all ${
                note.id === activeNoteId
                  ? 'bg-amber-100 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200 font-semibold shadow-sm'
                  : 'hover:bg-slate-200/60 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-300'
              }`}
            >
              <div className="text-xs truncate">{note.title}</div>
              <div className="flex items-center justify-between text-[10px] text-slate-400 mt-1 font-normal">
                <span>{note.date}</span>
                <span>{note.category}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Note Reader / Editor Pane */}
      <div className="flex-1 flex flex-col p-6 overflow-y-auto">
        <div className="border-b border-slate-200 dark:border-slate-800 pb-3 mb-4">
          <span className="text-[10px] uppercase font-bold text-amber-600 dark:text-amber-400 tracking-wider">
            {activeNote.category} · {activeNote.date}
          </span>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
            {activeNote.title}
          </h2>
        </div>

        <div className="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-wrap font-sans">
          {activeNote.content}
        </div>
      </div>
    </div>
  );
};
