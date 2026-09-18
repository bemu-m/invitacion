import useScrollReveal from '../hooks/useScrollReveal';

const padrinos = [
  'Aaron Vázquez Hernández',
  'Laura Gabriela Ramos López',
  'Karen Ramos Cruz',
];

export default function Padrinos() {
  const [ref, visible] = useScrollReveal();

  return (
    <section className="relative bg-[#fdf8f5] py-20 px-6 overflow-hidden">
      <div
        ref={ref}
        className="max-w-sm mx-auto flex flex-col items-center text-center"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.8s ease, transform 0.8s ease',
        }}
      >
        <p className="text-[10px] tracking-[0.4em] uppercase text-[#c9a15b] mb-3">
          Con cariño y gratitud
        </p>
        <h2
          className="text-5xl font-light italic text-[#5b3f38] mb-6"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Mis Padrinos
        </h2>

        <div className="flex items-center gap-3 max-w-[160px] mx-auto mb-10">
          <span className="flex-1 h-px bg-[#c9a15b]/30" />
          <span className="text-[#c9a15b] text-[10px]">✦</span>
          <span className="flex-1 h-px bg-[#c9a15b]/30" />
        </div>

        <div className="space-y-5">
          {padrinos.map((nombre) => (
            <p
              key={nombre}
              className="text-2xl font-light italic text-[#5b3f38]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {nombre}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}