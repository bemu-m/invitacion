import { MapPin, Clock, Calendar } from 'lucide-react';
import heroFlores from '../assets/images/hero_flores.webp';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-white flex flex-col items-center overflow-hidden pb-20">
      <div className="relative w-full">
        <img src={heroFlores} alt="" className="w-full object-cover object-top" style={{ maxHeight: '420px' }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(255,255,255,0.6) 70%, white 100%)' }} />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-sm w-full px-6 -mt-56">

        <h1 style={{ fontFamily: "'Pinyon Script', cursive", fontSize: '4rem', fontWeight: 400, fontStyle: 'normal', color: '#2d4a38', lineHeight: 1.2, marginBottom: '1.2rem', textShadow: '0 1px 8px rgba(255,255,255,0.9)', }}> Mis<br />XV Años
        </h1>

        <img
          src={require('../assets/images/corona1.png')}
          alt="corona"
          className="w-24 h-auto opacity-70"
        />

        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '3.2rem', fontWeight: 400, fontStyle: 'italic', color: '#c9a84c', lineHeight: 1.1, marginBottom: '0.4rem', letterSpacing: '0.02em', }}>
          Valeria
        </h2>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.5rem', fontWeight: 300, color: '#7A9E87', letterSpacing: '0.15em', marginBottom: '1.8rem', }}>
          Maldonado
        </p>

        <p className="text-sm font-light text-[#5a7a65] leading-relaxed tracking-wide mb-10 max-w-xs">
          La vida encuentra su verdadero sentido cuando Dios guía nuestros pasos y convierte cada sueño en una hermosa realidad.
          Hoy, con el corazón lleno de gratitud y fe, doy gracias por el regalo de la vida y por las personas tan especiales que me acompañan en este camino.
          Para celebrar este momento tan importante, mis quince años, quiero compartir esta gran bendición contigo.
        </p>

      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[9px] tracking-[0.3em] uppercase text-[#c9a84c]/50">Scroll</span>
        <div className="w-px h-10 relative overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-transparent via-[#c9a84c]/60 to-transparent"
            style={{ height: '100%', animation: 'scrollLine 1.5s ease-in-out infinite' }}
          />
        </div>
      </div>

    </section>
  );
}