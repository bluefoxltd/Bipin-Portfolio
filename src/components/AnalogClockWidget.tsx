import React, { useEffect, useState } from 'react';

interface AnalogClockWidgetProps {
  timezone?: string;
  className?: string;
}

export const AnalogClockWidget: React.FC<AnalogClockWidgetProps> = ({
  className = ""
}) => {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  const secondDeg = seconds * 6;
  const minuteDeg = minutes * 6 + seconds * 0.1;
  const hourDeg = (hours % 12) * 30 + minutes * 0.5;

  // Format date text: "Oct 14"
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const dateStr = `${monthNames[time.getMonth()]} ${time.getDate()}`;

  return (
    <div
      className={`relative w-56 h-56 md:w-64 md:h-64 rounded-full p-2 select-none transition-transform hover:scale-[1.02] ${className}`}
      style={{
        background: 'rgba(255, 255, 255, 0.45)',
        backdropFilter: 'blur(20px) saturate(180%)',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.12), inset 0 1px 2px rgba(255, 255, 255, 0.8), inset 0 -2px 6px rgba(0, 0, 0, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.5)'
      }}
    >
      <div className="relative w-full h-full rounded-full flex items-center justify-center">
        {/* Dial hour marks */}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => {
          const angle = (num * 30 - 90) * (Math.PI / 180);
          const radius = 88; // radius in px inside dial
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <div
              key={num}
              className="absolute text-slate-700/80 font-medium text-xs md:text-sm tracking-tight"
              style={{
                transform: `translate(${x}px, ${y}px)`
              }}
            >
              {num}
            </div>
          );
        })}

        {/* Center info: Bikram Sambat Date & Nepal Timezone */}
        <div className="absolute top-[60%] flex flex-col items-center pointer-events-none text-center">
          <span className="text-[11px] font-bold text-slate-800 tracking-wide">
            २०८३ असोज २८
          </span>
          <span className="text-[9px] text-slate-600 font-semibold tracking-tight">
            2083 BS · Nepal (NPT)
          </span>
        </div>

        {/* Hour Hand */}
        <div
          className="absolute w-1.5 h-16 bg-slate-800 rounded-full origin-bottom shadow-sm transition-transform duration-200"
          style={{
            bottom: '50%',
            transform: `rotate(${hourDeg}deg)`,
            transformOrigin: '50% 100%'
          }}
        />

        {/* Minute Hand */}
        <div
          className="absolute w-1 h-22 bg-slate-700 rounded-full origin-bottom shadow-sm transition-transform duration-200"
          style={{
            bottom: '50%',
            transform: `rotate(${minuteDeg}deg)`,
            transformOrigin: '50% 100%'
          }}
        />

        {/* Second Hand (Orange like macOS design) */}
        <div
          className="absolute w-[2px] h-26 bg-amber-600 rounded-full origin-bottom transition-transform duration-75"
          style={{
            bottom: '50%',
            transform: `rotate(${secondDeg}deg)`,
            transformOrigin: '50% 100%'
          }}
        />

        {/* Center Pin */}
        <div className="absolute w-3 h-3 bg-amber-600 rounded-full ring-2 ring-white shadow-sm z-10" />
      </div>
    </div>
  );
};
