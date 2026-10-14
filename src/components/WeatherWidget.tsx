import React, { useState } from 'react';
import { Sun, Droplets, Wind, MapPin } from 'lucide-react';

export const WeatherWidget: React.FC = () => {
  const [locationIndex, setLocationIndex] = useState<number>(0);

  // Itahari as the primary default location
  const locations = [
    {
      city: "ITAHARI, SUNSARI",
      country: "NEPAL",
      temp: "32°",
      condition: "Mostly Sunny",
      highLow: "H:34° L:23°",
      humidity: "64%",
      wind: "10 km/h"
    },
    {
      city: "BHAISEPATI, LALITPUR",
      country: "NEPAL",
      temp: "26°",
      condition: "Clear Sky",
      highLow: "H:28° L:16°",
      humidity: "55%",
      wind: "8 km/h"
    },
    {
      city: "KATHMANDU",
      country: "NEPAL",
      temp: "27°",
      condition: "Sunny & Pleasant",
      highLow: "H:29° L:17°",
      humidity: "58%",
      wind: "9 km/h"
    }
  ];

  const current = locations[locationIndex];

  const toggleLocation = () => {
    setLocationIndex((prev) => (prev + 1) % locations.length);
  };

  return (
    <div
      onClick={toggleLocation}
      title="Click to toggle (Itahari / Bhaisepati / Kathmandu)"
      className="w-48 sm:w-56 p-3 rounded-2xl select-none cursor-pointer transition-transform hover:scale-[1.02] shadow-xl text-white relative overflow-hidden group"
      style={{
        background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.9) 0%, rgba(234, 88, 12, 0.95) 100%)',
        backdropFilter: 'blur(24px)',
        border: '1px solid rgba(255, 255, 255, 0.28)',
        boxShadow: '0 16px 32px rgba(234, 88, 12, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.4)'
      }}
    >
      {/* Top Location */}
      <div className="flex items-center justify-between text-orange-100 text-[10px] font-semibold tracking-wider">
        <span className="flex items-center gap-1 truncate">
          <MapPin size={10} className="text-white shrink-0" />
          <span className="truncate">{current.city}</span>
        </span>
        <span className="text-[9px] opacity-80 group-hover:opacity-100 transition-opacity shrink-0 ml-1">
          {current.country}
        </span>
      </div>

      {/* Main Temperature & Sun Graphic */}
      <div className="flex items-center justify-between my-1">
        <div>
          <div className="text-3xl font-extrabold tracking-tight text-white leading-none">
            {current.temp}
          </div>
          <div className="text-xs font-semibold text-orange-50 mt-1">
            {current.condition}
          </div>
          <div className="text-[10px] text-orange-200 font-mono mt-0.5">
            {current.highLow}
          </div>
        </div>

        {/* Animated Sun Icon */}
        <div className="relative">
          <div className="w-12 h-12 rounded-full bg-amber-300/40 animate-pulse flex items-center justify-center">
            <Sun className="w-8 h-8 text-amber-200 fill-amber-300 drop-shadow-md animate-[spin_12s_linear_infinite]" />
          </div>
        </div>
      </div>

      {/* Footer weather metrics */}
      <div className="mt-2 pt-2 border-t border-white/20 flex items-center justify-between text-[10px] text-orange-100 font-medium">
        <div className="flex items-center gap-1">
          <Droplets size={11} className="text-white/80" />
          <span>HUMIDITY</span>
          <span className="font-bold text-white ml-0.5">{current.humidity}</span>
        </div>
        <div className="flex items-center gap-1">
          <Wind size={11} className="text-white/80" />
          <span>WIND</span>
          <span className="font-bold text-white ml-0.5">{current.wind}</span>
        </div>
      </div>
    </div>
  );
};
