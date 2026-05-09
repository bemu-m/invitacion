import useScrollReveal from '../hooks/useScrollReveal';

export default function Hero() {
  const particles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    top: `${(i * 37 + 5) % 100}%`,
    left: `${(i * 53 + 10) % 100}%`,
    size: `${7 + (i % 5)}px`,
    delay: `${(i * 0.3) % 4}s`,
    duration: `${3 + (i % 3)}s`,
  }));

  return (
    <section className="relative min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center overflow-hidden px-6 py-20">

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#1a1408_0%,_#0a0a0a_70%)]" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p) => (
          <span
            key={p.id}
            className="absolute text-[#c8b48c] opacity-20 animate-pulse"
            style={{ top: p.top, left: p.left, fontSize: p.size, animationDelay: p.delay, animationDuration: p.duration }}
          >
            ✦
          </span>
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-sm w-full">

        <div className="relative mb-8">
          <div className="w-52 h-52 rounded-full border border-[#c8b48c]/40 p-1">
            <div className="w-full h-full rounded-full border border-[#c8b48c]/20 overflow-hidden bg-[#1a1408] flex items-center justify-center">
              {/* Reemplaza /foto-valeria.jpg con la foto real */}
              <div className="w-full h-full flex flex-col items-center justify-center text-[#c8b48c]/30">
                <span className="text-5xl mb-2">👸</span>
                <span className="text-[9px] tracking-widest uppercase">Tu foto aquí</span>
              </div>
            </div>
          </div>
          <div className="absolute inset-[-8px] rounded-full border border-[#c8b48c]/15" style={{ animation: 'spin 20s linear infinite' }} />
        </div>

        <p className="text-[10px] tracking-[0.4em] uppercase text-[#c8b48c] mb-4">
          Te invitamos a celebrar
        </p>

        <h1 className="text-9xl font-light leading-none text-[#c8b48c]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          XV
        </h1>
        <p className="italic text-2xl font-light text-[#a09080] tracking-[0.2em] mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          años
        </p>

        <div className="flex items-center gap-3 w-full max-w-[200px] mb-6">
          <span className="flex-1 h-px bg-[#c8b48c]/30" />
          <span className="text-[#c8b48c] text-xs">✦</span>
          <span className="flex-1 h-px bg-[#c8b48c]/30" />
        </div>

        <h2 className="text-5xl font-light text-[#f0e8d8] leading-tight mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          Valeria
        </h2>
        <p className="italic text-2xl font-light text-[#a09080] mb-10" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          Maldonado
        </p>

        <div className="w-full border border-[#c8b48c]/20 p-6 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <span className="text-[#c8b48c] text-sm">📅</span>
            <p className="text-xs tracking-widest font-light text-[#c8bfb0] uppercase">Sábado 1 de agosto, 2026</p>
          </div>
          <div className="flex items-center justify-center gap-3">
            <span className="text-[#c8b48c] text-sm">🕗</span>
            <p className="text-xs tracking-widest font-light text-[#c8bfb0] uppercase">8:00 PM</p>
          </div>
          {/* Cambia esto cuando tengas la dirección */}
          <div className="flex items-center justify-center gap-3">
            <span className="text-[#c8b48c] text-sm">📍</span>
            <p className="text-xs tracking-widest font-light text-[#554e45] italic">Nombre del lugar · Dirección</p>
          </div>
        </div>

        {/* Cambia el href con el link de Google Maps */}
        <a href="#programa" className="mt-6 px-10 py-3 border border-[#c8b48c]/40 text-[#c8b48c] text-[10px] tracking-[0.3em] uppercase hover:bg-[#c8b48c]/10 transition-all duration-300">
          Ver programa
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#c8b48c]/40 animate-bounce">
        <span className="text-[9px] tracking-widest uppercase">Scroll</span>
        <span className="text-xs">↓</span>
      </div>
    </section>
  );
}
