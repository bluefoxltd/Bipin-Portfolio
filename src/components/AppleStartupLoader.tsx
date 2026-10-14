import React, { useState, useEffect } from 'react';

interface AppleStartupLoaderProps {
  onComplete: () => void;
}

export const AppleStartupLoader: React.FC<AppleStartupLoaderProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'boot' | 'hello' | 'fadeout'>('boot');
  const [progress, setProgress] = useState<number>(0);

  // Realistic Apple macOS Startup Chime using Web Audio API
  const playAppleChime = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      if (ctx.state === 'suspended') ctx.resume();

      // Iconic Apple F# Major Chime Harmonics (F#2, C#3, F#3, A#3, C#4, F#4, A#4)
      const frequencies = [92.50, 138.59, 185.00, 233.08, 277.18, 369.99, 466.16];

      const masterFilter = ctx.createBiquadFilter();
      masterFilter.type = 'lowpass';
      masterFilter.frequency.setValueAtTime(3200, ctx.currentTime);
      masterFilter.frequency.exponentialRampToValueAtTime(1400, ctx.currentTime + 3.0);

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.25, ctx.currentTime);

      masterFilter.connect(masterGain);
      masterGain.connect(ctx.destination);

      frequencies.forEach((freq, i) => {
        const osc1 = ctx.createOscillator();
        const gain1 = ctx.createGain();
        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(freq, ctx.currentTime);

        const osc2 = ctx.createOscillator();
        const gain2 = ctx.createGain();
        osc2.type = 'triangle';
        osc2.frequency.setValueAtTime(freq + (i % 2 === 0 ? 0.4 : -0.3), ctx.currentTime);

        const startTime = ctx.currentTime + 0.04 + i * 0.008;
        const decayTime = 2.8 + i * 0.2;

        gain1.gain.setValueAtTime(0.001, startTime);
        gain1.gain.exponentialRampToValueAtTime(0.09 / (i * 0.4 + 1), startTime + 0.06);
        gain1.gain.exponentialRampToValueAtTime(0.0001, startTime + decayTime);

        gain2.gain.setValueAtTime(0.001, startTime);
        gain2.gain.exponentialRampToValueAtTime(0.04 / (i * 0.4 + 1), startTime + 0.07);
        gain2.gain.exponentialRampToValueAtTime(0.0001, startTime + decayTime);

        osc1.connect(gain1);
        gain1.connect(masterFilter);

        osc2.connect(gain2);
        gain2.connect(masterFilter);

        osc1.start(startTime);
        osc1.stop(startTime + decayTime + 0.1);
        osc2.start(startTime);
        osc2.stop(startTime + decayTime + 0.1);
      });
    } catch {
      // Audio autoplay policy fallback
    }
  };

  useEffect(() => {
    // Play chime on start
    playAppleChime();

    // Progress bar fill animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            setPhase('hello');
          }, 350);
          return 100;
        }
        const increment = prev < 40 ? 4.5 : prev < 85 ? 5.5 : 3.5;
        return Math.min(100, prev + increment);
      });
    }, 45);

    return () => clearInterval(progressInterval);
  }, []);

  // Hello phase timer: animate cursive "hello." then transition to desktop
  useEffect(() => {
    if (phase === 'hello') {
      const timer = setTimeout(() => {
        setPhase('fadeout');
        setTimeout(onComplete, 700);
      }, 2300);

      return () => clearTimeout(timer);
    }
  }, [phase, onComplete]);

  return (
    <div
      onClick={() => {
        setPhase('fadeout');
        setTimeout(onComplete, 350);
      }}
      className={`fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center select-none transition-opacity duration-700 cursor-pointer ${
        phase === 'fadeout' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* 1. Authentic Apple Boot Loader (Apple Logo with Animated Metallic Glow + macOS Progress Bar) */}
      {phase === 'boot' && (
        <div className="flex flex-col items-center animate-in fade-in duration-500">
          {/* Animated Apple Logo with metallic light sheen sweep */}
          <div className="relative w-20 h-24 mb-14 flex items-center justify-center">
            {/* Apple Logo SVG */}
            <svg
              width="72"
              height="86"
              viewBox="0 0 170 170"
              className="text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.25)] transition-transform duration-700"
              fill="currentColor"
            >
              <defs>
                <linearGradient id="appleSheen" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
                  <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
                  <stop offset="100%" stopColor="#d1d5db" stopOpacity="0.9" />
                </linearGradient>
              </defs>
              <path
                fill="url(#appleSheen)"
                d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.63-7.74-11.78-14.11-6.19-9.5-11.04-20.2-14.54-32.08-3.5-11.88-5.25-23.3-5.25-34.25 0-14.4 3.66-26.4 10.98-36 7.32-9.6 16.59-14.48 27.81-14.64 5.37 0 11.09 1.48 17.16 4.45 6.07 2.97 10.08 4.45 12.02 4.45 1.76 0 5.79-1.48 12.08-4.45 6.29-2.97 11.96-4.37 17.02-4.2 12.58.55 22.7 5.28 30.36 14.2-11.08 6.74-16.51 15.93-16.29 27.57.22 9.17 3.86 16.89 10.92 23.16 7.06 6.27 15.5 9.77 25.32 10.5-2.22 6.53-4.99 13.06-8.3 19.59zM119.22 31.84c0-7.39 2.68-14.42 8.04-21.09 5.36-6.67 12.08-10.75 20.16-12.25.11 1.09.16 2.07.16 2.94 0 7.39-2.82 14.5-8.46 21.33-5.64 6.83-12.44 10.75-20.4 11.76-.22-.87-.33-1.77-.33-2.69z"
              />
            </svg>
            {/* Ambient subtle pulsing radial glow */}
            <div className="absolute inset-0 bg-white/10 rounded-full blur-xl animate-pulse pointer-events-none" />
          </div>

          {/* Authentic macOS Minimal Progress Bar */}
          <div className="w-56 sm:w-64 h-1.5 bg-[#242426] rounded-full overflow-hidden p-0.5 border border-white/15 shadow-inner">
            <div
              className="h-full bg-white rounded-full transition-all duration-100 ease-out shadow-[0_0_10px_rgba(255,255,255,0.9)]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      {/* 2. 100% Original Apple Animated "hello." Cursive Calligraphy Logo */}
      {phase === 'hello' && (
        <div className="flex flex-col items-center justify-center text-center p-6 animate-in zoom-in-95 fade-in duration-500">
          <style>{`
            @keyframes appleHelloDraw {
              0% {
                stroke-dashoffset: 1600;
                fill-opacity: 0;
              }
              75% {
                stroke-dashoffset: 0;
                fill-opacity: 0.1;
              }
              100% {
                stroke-dashoffset: 0;
                fill-opacity: 1;
              }
            }
            @keyframes appleDotPop {
              0%, 75% {
                transform: scale(0);
                opacity: 0;
              }
              100% {
                transform: scale(1);
                opacity: 1;
              }
            }
            .apple-hello-path {
              stroke-dasharray: 1600;
              stroke-dashoffset: 1600;
              animation: appleHelloDraw 1.7s cubic-bezier(0.42, 0, 0.2, 1) forwards;
            }
            .apple-hello-dot {
              transform-origin: 432px 135px;
              animation: appleDotPop 1.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
            }
          `}</style>

          {/* Authentic Apple Cursive "hello." Vector SVG with handwriting stroke animation */}
          <div className="w-[320px] sm:w-[480px] md:w-[620px] h-[160px] sm:h-[220px] md:h-[260px] filter drop-shadow-[0_4px_35px_rgba(255,255,255,0.4)]">
            <svg
              viewBox="0 0 500 200"
              className="w-full h-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="helloGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="60%" stopColor="#f3f4f6" />
                  <stop offset="100%" stopColor="#9ca3af" />
                </linearGradient>
              </defs>

              {/* Cursive "hello" continuous handwriting stroke path */}
              <path
                d="M 50 148 C 65 130, 80 85, 96 42 C 103 24, 114 18, 120 22 C 127 27, 125 45, 115 75 L 98 144 C 95 155, 96 160, 104 158 C 114 154, 118 132, 122 110 C 128 78, 145 74, 156 82 C 166 90, 166 112, 158 136 C 154 150, 158 156, 168 152 C 178 147, 186 135, 192 120 C 196 110, 198 98, 204 96 C 210 94, 214 100, 212 110 C 206 134, 196 156, 210 156 C 220 156, 228 144, 236 128 C 248 100, 260 52, 272 26 C 278 14, 288 12, 292 18 C 296 24, 292 42, 282 72 L 264 140 C 260 154, 266 158, 276 154 C 288 148, 298 132, 306 114 C 318 86, 330 46, 342 22 C 348 12, 358 10, 362 16 C 366 22, 362 40, 352 70 L 334 138 C 330 154, 336 158, 346 154 C 358 148, 370 134, 378 116 C 386 98, 396 86, 408 86 C 420 86, 426 98, 422 114 C 416 138, 396 156, 382 152 C 372 148, 372 132, 378 116 C 384 102, 398 94, 412 94 C 418 94, 422 98, 424 104 C 428 118, 436 124, 448 124"
                stroke="url(#helloGradient)"
                strokeWidth="7"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                className="apple-hello-path"
              />

              {/* The signature Apple period / dot at the end of "hello." */}
              <circle
                cx="464"
                cy="148"
                r="5.5"
                fill="url(#helloGradient)"
                className="apple-hello-dot"
              />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};
