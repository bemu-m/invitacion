import useScrollReveal from '../hooks/useScrollReveal';

export default function Footer() {
  const [ref, visible] = useScrollReveal();

  return (
    <footer className="bg-[#0a0a0a] py-16 px-6 border-t border-[#c8b48c]/10">
      <div
        ref={ref}
        className="max-w-sm mx-auto flex flex-col items-center text-center"
        style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}
      >
        <span className="text-[#c8b48c]/40 text-2xl mb-4">✦</span>
        <h3 className="text-3xl font-light text-[#f0e8d8] italic mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          Valeria Maldonado
        </h3>
        <p className="text-[9px] tracking-[0.4em] uppercase text-[#554e45] mb-6">
          XV Años · 1 agosto 2026
        </p>
        <div className="flex items-center gap-3 max-w-[120px] mx-auto">
          <span className="flex-1 h-px bg-[#c8b48c]/20" />
          <span className="text-[#c8b48c]/20 text-[10px]">✦</span>
          <span className="flex-1 h-px bg-[#c8b48c]/20" />
        </div>
      </div>
    </footer>
  );
}
