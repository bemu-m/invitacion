import useScrollReveal from '../hooks/useScrollReveal';

// Cambia estos datos cuando tengas la info del evento
const eventos = [
  { hora: '8:00 PM', titulo: 'Recepción', lugar: 'Nombre del lugar', direccion: 'Dirección del lugar', icono: '🥂', mapLink: '#' },
  { hora: '9:00 PM', titulo: 'Cena & Baile', lugar: 'Nombre del salón', direccion: 'Dirección del salón', icono: '💃', mapLink: '#' },
];

function EventoItem({ evento, index }) {
  const [ref, visible] = useScrollReveal();
  const isEven = index % 2 === 0;
  return (
    <div ref={ref} className="flex gap-6 items-start"
      style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateX(0)' : `translateX(${isEven ? '-30px' : '30px'})`, transition: `opacity 0.7s ease ${index * 0.15}s, transform 0.7s ease ${index * 0.15}s` }}>
      <div className="flex flex-col items-center pt-1">
        <div className="w-8 h-8 rounded-full border border-[#c9a15b]/40 bg-[#fdf8f5] flex items-center justify-center text-sm flex-shrink-0">
          {evento.icono}
        </div>
        {index < eventos.length - 1 && <div className="w-px flex-1 bg-[#c9a15b]/15 mt-2 min-h-[60px]" />}
      </div>
      <div className="pb-10">
        <p className="text-[10px] tracking-[0.3em] text-[#c9a15b] uppercase mb-1">{evento.hora}</p>
        <h3 className="text-2xl font-light text-[#5b3f38] mb-1 italic" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{evento.titulo}</h3>
        <p className="text-xs text-[#8c6f68] font-light tracking-wide mb-1">{evento.lugar}</p>
        <p className="text-[11px] text-[#cba99f] italic mb-3">{evento.direccion}</p>
        <a href={evento.mapLink} className="text-[9px] tracking-[0.25em] uppercase text-[#c9a15b]/70 border border-[#c9a15b]/25 px-4 py-1.5 hover:bg-[#c9a15b]/10 transition-all duration-300">
          Ver mapa
        </a>
      </div>
    </div>
  );
}

export default function Programa() {
  const [titleRef, titleVisible] = useScrollReveal();
  return (
    <section id="programa" className="relative bg-[#fdf8f5] py-24 px-6">
      <div className="max-w-sm mx-auto">
        <div ref={titleRef} className="text-center mb-16"
          style={{ opacity: titleVisible ? 1 : 0, transform: titleVisible ? 'translateY(0)' : 'translateY(30px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}>
          <p className="text-[10px] tracking-[0.4em] uppercase text-[#c9a15b] mb-3">La noche de</p>
          <h2 className="text-5xl font-light text-[#5b3f38] italic" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Programa</h2>
          <div className="flex items-center gap-3 max-w-[160px] mx-auto mt-4">
            <span className="flex-1 h-px bg-[#c9a15b]/30" />
            <span className="text-[#c9a15b] text-[10px]">✦</span>
            <span className="flex-1 h-px bg-[#c9a15b]/30" />
          </div>
        </div>
        {eventos.map((ev, i) => <EventoItem key={i} evento={ev} index={i} />)}
      </div>
    </section>
  );
}
