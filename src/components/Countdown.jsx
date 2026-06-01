import { useEffect, useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const EVENT_DATE = new Date('2026-08-01T20:00:00');

function getTimeLeft() {
  const diff = EVENT_DATE - new Date();
  if (diff <= 0) return { days: 0, hours: 0, mins: 0, secs: 0 };
  return {
    days:  Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    mins:  Math.floor((diff / (1000 * 60)) % 60),
    secs:  Math.floor((diff / 1000) % 60),
  };
}

function Digit({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 border border-[#c9a84c]/30 flex items-center justify-center mb-2 bg-white">
        <span className="text-3xl font-light text-[#ACC8B4]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span className="text-[9px] tracking-[0.25em] uppercase text-[#7A9E87]">{label}</span>
    </div>
  );
}

const DIAS = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];

function Calendario() {
  const year  = 2026;
  const month = 7;
  const eventDay = 1;

  const firstDay = new Date(year, month, 1).getDay();
  const offset   = firstDay === 0 ? 6 : firstDay - 1;
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells = [];
  for (let i = 0; i < offset; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  return (
    <div className="w-full mt-10">
      <p className="text-[10px] tracking-[0.4em] uppercase text-[#c9a84c] mb-2">El gran día</p>
      <p className="text-2xl font-light italic text-[#2d4a38] mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
        Agosto
      </p>

      <div className="grid grid-cols-7 gap-y-2 w-full">
        {DIAS.map((d) => (
          <div key={d} className="text-[9px] tracking-widest uppercase text-[#ACC8B4] text-center py-1">
            {d}
          </div>
        ))}
        {cells.map((day, i) => (
          <div key={i} className="flex items-center justify-center h-8">
            {day ? (
              <span
                className={`text-xs w-7 h-7 flex items-center justify-center rounded-full transition-all ${
                  day === eventDay
                    ? 'border border-[#c9a84c]/60 text-[#c9a84c] font-medium'
                    : 'text-[#5a7a65] font-light'
                }`}
              >
                {day}
              </span>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Countdown() {
  const [time, setTime]   = useState(getTimeLeft());
  const [ref, visible]    = useScrollReveal();

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative bg-[#f4f9f6] py-24 px-6 overflow-hidden">
      <div
        ref={ref}
        className="relative z-10 max-w-sm mx-auto flex flex-col items-center text-center"
        style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(40px)', transition: 'opacity 0.8s ease, transform 0.8s ease' }}
      >

        <p className="text-xs tracking-[0.25em] uppercase text-[#5a7a65] leading-relaxed mb-2" style={{ fontFamily: "'Jost', sans-serif" }}>
          Acompáñame en este día tan especial junto a
        </p>
        <h2 className="text-3xl font-light italic text-[#2d4a38] mb-10" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          Familia Maldonado Vera
        </h2>

        <div className="flex items-center gap-3 w-full max-w-[200px] mb-10">
          <span className="flex-1 h-px bg-[#c9a84c]/30" />
          <span className="text-[#c9a84c] text-xs">✦</span>
          <span className="flex-1 h-px bg-[#c9a84c]/30" />
        </div>

        <p className="text-[10px] tracking-[0.4em] uppercase text-[#c9a84c] mb-6">Faltan</p>

        <div className="flex gap-4 items-start">
          <Digit value={time.days}  label="días" />
          <span className="text-[#c9a84c]/40 text-2xl mt-3 font-light">:</span>
          <Digit value={time.hours} label="horas" />
          <span className="text-[#c9a84c]/40 text-2xl mt-3 font-light">:</span>
          <Digit value={time.mins}  label="mins" />
          <span className="text-[#c9a84c]/40 text-2xl mt-3 font-light">:</span>
          <Digit value={time.secs}  label="segs" />
        </div>

        <Calendario />

      </div>
    </section>
  );
}