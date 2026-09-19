import { MapPin } from "lucide-react";
import useScrollReveal from "../hooks/useScrollReveal";
import adornoImg from "../assets/images/ador_esquina_arriba_izquierda.png";
import vale2 from "../assets/images/pau.jpeg";

export default function Ubication() {
  const [ref, visible] = useScrollReveal();
  const [refFoto, visibleFoto] = useScrollReveal();

  return (
    <section className="relative bg-white overflow-hidden">
      <div
        ref={ref}
        className="relative px-6 py-16"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >
        <img
          src={adornoImg}
          alt=""
          aria-hidden="true"
          className="absolute top-0 left-0 w-28 pointer-events-none select-none"
          style={{ opacity: 0.7 }}
        />
        <img
          src={adornoImg}
          alt=""
          aria-hidden="true"
          className="absolute top-0 right-0 w-28 pointer-events-none select-none"
          style={{ opacity: 0.7, transform: "scaleX(-1)" }}
        />

        <div className="max-w-sm mx-auto flex flex-col items-center text-center">
          <p className="text-[10px] tracking-[0.4em] uppercase text-[#c9a15b] mb-3 mt-8">
            Lugar del evento
          </p>
          <h2
            className="text-5xl font-light italic text-[#5b3f38] mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Recepción
          </h2>

          <div className="flex items-center gap-3 w-full max-w-[160px] mb-8">
            <span className="flex-1 h-px bg-[#c9a15b]/30" />
            <span className="text-[#c9a15b] text-[10px]">✦</span>
            <span className="flex-1 h-px bg-[#c9a15b]/30" />
          </div>

          <p className="text-[10px] tracking-[0.3em] uppercase text-[#c9a15b] mb-1">
            5:30 PM
          </p>
          <p className="text-base font-light tracking-widest text-[#5b3f38] uppercase mb-1">
            Salón Villa Florencia
          </p>
          <p className="text-xs italic text-[#8c6f68] mb-8">
            Dirección del lugar
          </p>

          <a
            href="https://share.google/8XEq3jAqPhjD0Mug1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-2.5 border border-[#c9a15b]/50 text-[#c9a15b] text-[9px] tracking-[0.3em] uppercase hover:bg-[#c9a15b]/10 transition-all duration-300 mb-10"
          >
            <MapPin size={12} />
            Ver ubicación
          </a>

          <div
            className="w-full rounded overflow-hidden border border-[#c9a15b]/20"
            style={{ height: "220px" }}
          >
            <iframe
              title="Ubicación del evento"
              src="https://www.google.com/maps?q=Sal%C3%B3n+De+Eventos+Villa+Florencia,+16.6786786,-93.7309847&z=17&output=embed"
              width="100%"
              height="220"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <div
        ref={refFoto}
        className="relative w-full px-6 pb-16"
        style={{
          opacity: visibleFoto ? 1 : 0,
          transform: visibleFoto ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s",
        }}
      >
        <div className="relative max-w-xs mx-auto">
          <div
            className="overflow-hidden"
            style={{
              aspectRatio: "3/4",
              borderRadius: "50% 50% 8px 8px / 35% 35% 8px 8px",
              border: "1.5px solid #c9a15b50",
              boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
            }}
          >
            <img
              src={vale2}
              alt="Valeria"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
