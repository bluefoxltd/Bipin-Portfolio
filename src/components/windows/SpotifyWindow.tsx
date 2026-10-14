import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, SkipForward, SkipBack, Volume2, VolumeX, Heart, Shuffle, Repeat } from 'lucide-react';

interface Track {
  title: string;
  artist: string;
  duration: string;
  chords: number[];
  color: string;
}

export const SpotifyWindow: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const [isLiked, setIsLiked] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const noteTimerRef = useRef<number | null>(null);

  const playlist: Track[] = [
    {
      title: "Midnight Vibe Coding",
      artist: "Bipin Chapagain · Lofi Sessions",
      duration: "2:45",
      chords: [261.63, 329.63, 392.00, 523.25], // C Major
      color: "from-blue-600 to-indigo-900"
    },
    {
      title: "Framer Springs & Espresso",
      artist: "Blue Fox Chillhop",
      duration: "3:12",
      chords: [220.00, 261.63, 329.63, 440.00], // A Minor
      color: "from-purple-600 to-pink-900"
    },
    {
      title: "Kathmandu Golden Hour",
      artist: "Nepal Beats Collective",
      duration: "2:58",
      chords: [174.61, 220.00, 261.63, 349.23], // F Major
      color: "from-amber-600 to-orange-900"
    },
    {
      title: "Design System Flow State",
      artist: "Synthetix & Bipin",
      duration: "3:30",
      chords: [196.00, 246.94, 293.66, 392.00], // G Major
      color: "from-emerald-600 to-teal-900"
    }
  ];

  const currentTrack = playlist[currentTrackIndex];

  // Procedural Synth to play soothing lo-fi chords
  const playProceduralChord = (notes: number[]) => {
    if (isMuted) return;
    try {
      if (!audioCtxRef.current) {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioCtxRef.current = new AudioContextClass();
      }
      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }

      const ctx = audioCtxRef.current;
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        // Warm electric piano tone
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        const startTime = ctx.currentTime + idx * 0.05;
        gain.gain.setValueAtTime(0.0001, startTime);
        gain.gain.exponentialRampToValueAtTime(0.04, startTime + 0.1);
        gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 1.8);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(startTime);
        osc.stop(startTime + 1.9);
      });
    } catch {
      // Audio autoplay restrictions
    }
  };

  useEffect(() => {
    let interval: number;
    if (isPlaying) {
      // Trigger a gentle chord every 2.4 seconds
      playProceduralChord(currentTrack.chords);
      noteTimerRef.current = window.setInterval(() => {
        playProceduralChord(currentTrack.chords);
      }, 2400);

      // Advance progress bar
      interval = window.setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            handleNext();
            return 0;
          }
          return prev + 0.5;
        });
      }, 500);
    } else {
      if (noteTimerRef.current) clearInterval(noteTimerRef.current);
    }

    return () => {
      clearInterval(interval);
      if (noteTimerRef.current) clearInterval(noteTimerRef.current);
    };
  }, [isPlaying, currentTrackIndex, isMuted]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % playlist.length);
    setProgress(0);
  };

  const handlePrev = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
    setProgress(0);
  };

  return (
    <div className="flex flex-col h-full bg-slate-950 text-white font-sans select-none">
      {/* Main Track Display */}
      <div className="flex-1 flex flex-col md:flex-row items-center p-6 gap-6 bg-gradient-to-b from-slate-900 to-slate-950 overflow-y-auto">
        {/* Album Artwork */}
        <div className={`w-40 h-40 md:w-52 md:h-52 rounded-2xl bg-gradient-to-br ${currentTrack.color} shadow-2xl flex flex-col items-center justify-center p-4 text-center shrink-0 border border-white/10 relative overflow-hidden group`}>
          <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />
          <div className="relative z-10">
            <span className="text-[10px] tracking-widest uppercase font-semibold text-white/70 block">
              BLUE FOX AUDIO
            </span>
            <span className="text-base font-bold text-white mt-1 block">
              {currentTrack.title}
            </span>
            <div className="mt-3 flex items-center justify-center gap-1">
              {[1, 2, 3, 4, 5].map((bar) => (
                <div
                  key={bar}
                  className={`w-1 bg-white/80 rounded-full transition-all ${
                    isPlaying ? 'animate-pulse' : 'h-2'
                  }`}
                  style={{
                    height: isPlaying ? `${12 + (bar * 7) % 20}px` : '6px',
                    animationDuration: `${0.6 + bar * 0.2}s`
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Track Details & Playlist */}
        <div className="flex-1 w-full">
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-xs text-emerald-400 font-semibold tracking-wider uppercase">
                PLAYING FROM PLAYLIST
              </span>
              <h2 className="text-xl md:text-2xl font-extrabold tracking-tight mt-0.5">
                {currentTrack.title}
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                {currentTrack.artist}
              </p>
            </div>

            <button
              onClick={() => setIsLiked(!isLiked)}
              className="p-2 text-slate-400 hover:text-emerald-400 transition-colors"
            >
              <Heart size={18} className={isLiked ? "fill-emerald-500 text-emerald-500" : ""} />
            </button>
          </div>

          {/* Playlist preview list */}
          <div className="space-y-1.5 mt-4">
            {playlist.map((track, i) => (
              <div
                key={i}
                onClick={() => {
                  setCurrentTrackIndex(i);
                  setProgress(0);
                  setIsPlaying(true);
                }}
                className={`px-3 py-2 rounded-xl flex items-center justify-between text-xs cursor-pointer transition-colors ${
                  i === currentTrackIndex
                    ? 'bg-white/10 text-emerald-400 font-medium'
                    : 'hover:bg-white/5 text-slate-400 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] w-4">{i + 1}</span>
                  <div>
                    <span className="font-medium text-white block">{track.title}</span>
                    <span className="text-[10px] text-slate-400">{track.artist}</span>
                  </div>
                </div>
                <span className="font-mono text-[11px] text-slate-500">{track.duration}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Player Controls */}
      <div className="h-20 bg-slate-900 border-t border-white/10 px-6 flex items-center justify-between gap-4 shrink-0">
        <div className="hidden sm:block w-48 truncate">
          <div className="text-xs font-semibold truncate">{currentTrack.title}</div>
          <div className="text-[11px] text-slate-400 truncate">{currentTrack.artist}</div>
        </div>

        {/* Center Controls */}
        <div className="flex-1 max-w-md flex flex-col items-center gap-1.5">
          <div className="flex items-center gap-4">
            <button
              onClick={handlePrev}
              className="p-1 text-slate-400 hover:text-white transition-colors"
            >
              <SkipBack size={16} />
            </button>
            <button
              onClick={togglePlay}
              className="w-9 h-9 rounded-full bg-white text-black hover:scale-105 transition-transform flex items-center justify-center shadow-lg"
            >
              {isPlaying ? <Pause size={16} className="fill-black" /> : <Play size={16} className="fill-black ml-0.5" />}
            </button>
            <button
              onClick={handleNext}
              className="p-1 text-slate-400 hover:text-white transition-colors"
            >
              <SkipForward size={16} />
            </button>
          </div>

          {/* Progress bar */}
          <div className="w-full flex items-center gap-2 text-[10px] text-slate-400 font-mono">
            <span>0:{(Math.floor(progress * 1.5) % 60).toString().padStart(2, '0')}</span>
            <div className="flex-1 h-1 bg-slate-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-white hover:bg-emerald-500 transition-all rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span>{currentTrack.duration}</span>
          </div>
        </div>

        {/* Right audio volume toggle */}
        <div className="flex items-center gap-2 w-48 justify-end text-slate-400">
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="p-1 hover:text-white transition-colors"
          >
            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </button>
          <span className="text-[11px] font-mono text-slate-400">
            {isMuted ? 'Muted' : 'Sound Active'}
          </span>
        </div>
      </div>
    </div>
  );
};
