import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from 'lucide-react';

export const CalendarWidget: React.FC = () => {
  // Bikram Sambat Months
  const bsMonths = [
    { np: 'बैशाख', en: 'Baishakh', days: 31 },
    { np: 'जेठ', en: 'Jestha', days: 31 },
    { np: 'असार', en: 'Ashadh', days: 32 },
    { np: 'साउन', en: 'Shrawan', days: 31 },
    { np: 'भदौ', en: 'Bhadra', days: 31 },
    { np: 'असोज', en: 'Ashwin', days: 30 },
    { np: 'कात्तिक', en: 'Kartik', days: 30 },
    { np: 'मङ्सिर', en: 'Mangsir', days: 29 },
    { np: 'पुस', en: 'Poush', days: 29 },
    { np: 'माघ', en: 'Magh', days: 30 },
    { np: 'फागुन', en: 'Falgun', days: 30 },
    { np: 'चैत', en: 'Chaitra', days: 30 },
  ];

  // Devanagari numbers helper
  const toDevanagari = (num: number): string => {
    const devanagariDigits = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];
    return num
      .toString()
      .split('')
      .map((d) => (d >= '0' && d <= '9' ? devanagariDigits[parseInt(d, 10)] : d))
      .join('');
  };

  // Bikram Sambat current state (2083 BS, Ashwin/Kartik)
  const [bsYear, setBsYear] = useState<number>(2083);
  const [bsMonthIdx, setBsMonthIdx] = useState<number>(5); // 5 is Ashwin (असोज)
  const [useDevanagari, setUseDevanagari] = useState<boolean>(true);

  // Today in BS: 2083 Ashwin 28 (equivalent to Oct 14, 2026)
  const todayBs = {
    year: 2083,
    monthIdx: 5,
    day: 28,
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (bsMonthIdx === 0) {
      setBsYear(bsYear - 1);
      setBsMonthIdx(11);
    } else {
      setBsMonthIdx(bsMonthIdx - 1);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (bsMonthIdx === 11) {
      setBsYear(bsYear + 1);
      setBsMonthIdx(0);
    } else {
      setBsMonthIdx(bsMonthIdx + 1);
    }
  };

  const currentMonth = bsMonths[bsMonthIdx];
  const daysInCurrentMonth = currentMonth.days;

  // Weekdays in Nepali BS: आइत, सोम, मङ्गल, बुध, बिही, शुक्र, शनि
  const weekdaysNp = ['आइत', 'सोम', 'मङ्गल', 'बुध', 'बिही', 'शुक्र', 'शनि'];
  const weekdaysEn = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  // Calculate starting weekday offset for the month
  const startingDayOffset = (bsMonthIdx * 3 + (bsYear - 2080) * 2 + 3) % 7;

  const days: { day: number; isCurrentMonth: boolean; isToday: boolean }[] = [];

  // Leading empty / prev month slots
  const prevMonthDays = bsMonthIdx === 0 ? bsMonths[11].days : bsMonths[bsMonthIdx - 1].days;
  for (let i = startingDayOffset - 1; i >= 0; i--) {
    days.push({
      day: prevMonthDays - i,
      isCurrentMonth: false,
      isToday: false,
    });
  }

  // Current month days
  for (let i = 1; i <= daysInCurrentMonth; i++) {
    const isToday =
      bsYear === todayBs.year &&
      bsMonthIdx === todayBs.monthIdx &&
      i === todayBs.day;

    days.push({
      day: i,
      isCurrentMonth: true,
      isToday,
    });
  }

  // Trailing next month slots
  const totalSlots = days.length > 35 ? 42 : 35;
  const remaining = totalSlots - days.length;
  for (let i = 1; i <= remaining; i++) {
    days.push({
      day: i,
      isCurrentMonth: false,
      isToday: false,
    });
  }

  return (
    <div
      className="w-52 sm:w-60 p-3 rounded-2xl select-none transition-transform hover:scale-[1.02] shadow-xl text-white"
      style={{
        background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.85) 0%, rgba(99, 102, 241, 0.9) 100%)',
        backdropFilter: 'blur(24px)',
        border: '1px solid rgba(255, 255, 255, 0.28)',
        boxShadow: '0 16px 32px rgba(109, 40, 217, 0.28), inset 0 1px 1px rgba(255, 255, 255, 0.4)'
      }}
    >
      {/* Header with BS Year & Month */}
      <div className="flex items-center justify-between mb-2">
        <div>
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-purple-200 block">
              {useDevanagari ? `${toDevanagari(bsYear)} वि.सं.` : `${bsYear} B.S.`}
            </span>
            <button
              onClick={() => setUseDevanagari(!useDevanagari)}
              className="text-[9px] px-1 py-0.2 bg-white/20 hover:bg-white/30 rounded text-purple-100 font-medium transition-colors"
              title="Toggle Devanagari / English numerals"
            >
              {useDevanagari ? 'EN' : 'ने'}
            </button>
          </div>
          <span className="text-sm font-bold tracking-tight text-white flex items-center gap-1">
            <span>{currentMonth.np}</span>
            <span className="text-xs font-normal text-purple-200">({currentMonth.en})</span>
          </span>
        </div>

        <div className="flex items-center gap-1 bg-white/20 rounded-lg p-0.5">
          <button
            onClick={handlePrev}
            className="p-1 hover:bg-white/20 rounded text-white/90 hover:text-white transition-colors"
            title="अघिल्लो महिना (Previous Month)"
          >
            <ChevronLeft size={13} />
          </button>
          <button
            onClick={handleNext}
            className="p-1 hover:bg-white/20 rounded text-white/90 hover:text-white transition-colors"
            title="अर्को महिना (Next Month)"
          >
            <ChevronRight size={13} />
          </button>
        </div>
      </div>

      {/* Weekdays row */}
      <div className="grid grid-cols-7 gap-1 text-center mb-1">
        {weekdaysNp.map((d, idx) => (
          <span
            key={idx}
            className={`text-[9px] font-semibold ${
              idx === 6 ? 'text-rose-300 font-bold' : idx === 0 ? 'text-amber-200' : 'text-purple-200'
            }`}
            title={weekdaysEn[idx]}
          >
            {d}
          </span>
        ))}
      </div>

      {/* Days Grid */}
      <div className="grid grid-cols-7 gap-1 text-center">
        {days.map((item, idx) => {
          let dayStyle = 'text-white/40';
          if (item.isCurrentMonth) {
            dayStyle = (idx % 7 === 6)
              ? 'text-rose-200 font-semibold hover:bg-white/20' // Saturday holiday in Nepal
              : 'text-white font-medium hover:bg-white/20';
          }
          if (item.isToday) {
            dayStyle = 'bg-white text-purple-900 font-extrabold rounded-full shadow-md ring-2 ring-purple-300';
          }

          const displayNum = useDevanagari ? toDevanagari(item.day) : item.day;

          return (
            <div
              key={idx}
              className={`h-6 w-6 mx-auto flex items-center justify-center text-[10px] rounded-md transition-all ${dayStyle}`}
            >
              {displayNum}
            </div>
          );
        })}
      </div>

      {/* Footer Tithi / Today indicator */}
      <div className="mt-2 pt-1.5 border-t border-white/20 flex items-center justify-between text-[9px] text-purple-100">
        <span>नेपाली पात्रो (B.S.)</span>
        <span className="font-semibold text-white">
          आज: {useDevanagari ? `${toDevanagari(todayBs.day)} ${currentMonth.np}` : `${todayBs.day} ${currentMonth.en}`}
        </span>
      </div>
    </div>
  );
};
