import useScrollReveal from '../hooks/useScrollReveal';

export default function Footer() {
  const [ref, visible] = useScrollReveal();
  return (
    <footer className="bg-[#FAFAF8] py-16 px-6 border-t border-[#c9a84c]/15">
      <div ref={ref} className="max-w-sm mx-auto flex flex-col items-center text-center"
        style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}>
        <h1 className="text-3xl font-light text-[#2d4a38] italic mb-1" style={{ fontFamily: "'Family Great', cursive" }}>¡Te esperamos!</h1>
        <h3 className="text-3xl font-light text-[#2d4a38] italic mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Valeria Maldonado</h3>
        <p className="text-[9px] tracking-[0.4em] uppercase text-[#ACC8B4] mb-6">XV Años · 1 agosto 2026</p>
        <div className="flex items-center gap-3 max-w-[120px] mx-auto">
          <span className="flex-1 h-px bg-[#c9a84c]/20" />          <span className="flex-1 h-px bg-[#c9a84c]/20" />
        </div>
      </div>
    </footer>
  );
}
