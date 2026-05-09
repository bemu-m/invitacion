import { useEffect, useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const EVENT_DATE = new Date('2026-08-01T20:00:00');

function getTimeLeft() {
  const diff = EVENT_DATE - new Date();
  if (diff <= 0) return { days: 0, hours: 0, mins: 0, secs: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    mins: Math.floor((diff / (1000 * 60)) % 60),
    secs: Math.floor((diff / 1000) % 60),
  };
}

function Digit({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 border border-[#c8b48c]/30 flex items-center justify-center mb-2 bg-[#111]">
        <span className="text-3xl font-light text-[#c8b48c]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span className="text-[9px] tracking-[0.25em] uppercase text-[#554e45]">{label}</span>
    </div>
  );
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft());
  const [ref, visible] = useScrollReveal();

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative bg-[#0d0d0d] py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#1a1408_0%,_#0d0d0d_60%)] opacity-60" />

      <div
        ref={ref}
        className="relative z-10 max-w-sm mx-auto flex flex-col items-center text-center"
        style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(40px)', transition: 'opacity 0.8s ease, transform 0.8s ease' }}
      >
        <p className="text-[10px] tracking-[0.4em] uppercase text-[#c8b48c] mb-3">Faltan</p>
        <h2 className="text-3xl font-light text-[#f0e8d8] mb-2 italic" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          ¡No podemos esperar
        </h2>
        <p className="text-3xl font-light text-[#f0e8d8] mb-10 italic" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          para celebrar contigo!
        </p>

        {/* Galería placeholder polaroids */}
        <div className="relative w-full h-48 mb-12">
          <div
            className="absolute w-32 h-36 bg-[#1a1a18] border border-[#c8b48c]/20 flex flex-col items-center justify-center text-[#c8b48c]/20 text-xs tracking-widest"
            style={{ top: '0', left: '15%', transform: 'rotate(-6deg)', boxShadow: '0 8px 32px rgba(0,0,0,0.6)' }}
          >
            <span className="text-2xl mb-1">📷</span>
            <span className="text-[8px]">FOTO 1</span>
            <div className="h-6" />
          </div>
          <div
            className="absolute w-32 h-36 bg-[#1a1a18] border border-[#c8b48c]/20 flex flex-col items-center justify-center text-[#c8b48c]/20 text-xs tracking-widest"
            style={{ top: '10px', right: '15%', transform: 'rotate(5deg)', boxShadow: '0 8px 32px rgba(0,0,0,0.6)' }}
          >
            <span className="text-2xl mb-1">📷</span>
            <span className="text-[8px]">FOTO 2</span>
            <div className="h-6" />
          </div>
        </div>

        {/* Contador */}
        <div className="flex gap-4 items-start">
          <Digit value={time.days} label="días" />
          <span className="text-[#c8b48c]/40 text-2xl mt-3 font-light">:</span>
          <Digit value={time.hours} label="horas" />
          <span className="text-[#c8b48c]/40 text-2xl mt-3 font-light">:</span>
          <Digit value={time.mins} label="mins" />
          <span className="text-[#c8b48c]/40 text-2xl mt-3 font-light">:</span>
          <Digit value={time.secs} label="segs" />
        </div>
      </div>
    </section>
  );
}
