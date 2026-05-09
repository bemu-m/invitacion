import { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

// ─── CONFIGURACIÓN EMAILJS ────────────────────────────────────────────────────
// 1. Crea cuenta en https://www.emailjs.com (plan gratuito sirve)
// 2. Crea un Email Service (Gmail recomendado)
// 3. Crea un Email Template con estas variables: {{nombre}}, {{asistencia}}, {{invitados}}
// 4. Reemplaza los tres valores de abajo con tus datos reales
const EMAILJS_SERVICE_ID  = 'TU_SERVICE_ID';   // ej: 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'TU_TEMPLATE_ID';  // ej: 'template_xyz456'
const EMAILJS_PUBLIC_KEY  = 'TU_PUBLIC_KEY';   // ej: 'aBcDeFgH...'
// ─────────────────────────────────────────────────────────────────────────────

const inputClass = `
  w-full bg-transparent border-b border-[#c8b48c]/20 py-3 px-0
  text-sm text-[#e8e0d0] placeholder-[#554e45] font-light tracking-wide
  focus:outline-none focus:border-[#c8b48c]/60 transition-colors duration-300
`;

export default function RSVP() {
  const [titleRef, titleVisible] = useScrollReveal();
  const [formRef, formVisible] = useScrollReveal();

  const [form, setForm] = useState({ nombre: '', asistencia: '', invitados: '1' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.nombre || !form.asistencia) return;

    setStatus('sending');

    try {
      // Carga EmailJS dinámicamente para no necesitar instalación extra
      const emailjs = await import('https://cdn.jsdelivr.net/npm/@emailjs/browser@4/+esm');
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          nombre:     form.nombre,
          asistencia: form.asistencia,
          invitados:  form.asistencia === 'Sí' ? form.invitados : '0',
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section id="rsvp" className="relative bg-[#0d0d0d] py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#1a1408_0%,_#0d0d0d_60%)] opacity-50" />

      <div className="relative z-10 max-w-sm mx-auto">

        {/* Título */}
        <div
          ref={titleRef}
          className="text-center mb-12"
          style={{ opacity: titleVisible ? 1 : 0, transform: titleVisible ? 'translateY(0)' : 'translateY(30px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}
        >
          <p className="text-[10px] tracking-[0.4em] uppercase text-[#c8b48c] mb-3">Confirma tu lugar</p>
          <h2 className="text-5xl font-light text-[#f0e8d8] italic" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            RSVP
          </h2>
          <div className="flex items-center gap-3 max-w-[160px] mx-auto mt-4 mb-4">
            <span className="flex-1 h-px bg-[#c8b48c]/30" />
            <span className="text-[#c8b48c] text-[10px]">✦</span>
            <span className="flex-1 h-px bg-[#c8b48c]/30" />
          </div>
          <p className="text-xs font-light text-[#a09080] tracking-wide">
            Responde antes del <span className="text-[#c8b48c]">15 de julio, 2026</span>
          </p>
        </div>

        {/* Formulario */}
        {status === 'success' ? (
          <div
            className="text-center py-16 border border-[#c8b48c]/20 px-8"
            style={{ opacity: 1, transition: 'opacity 0.5s ease' }}
          >
            <span className="text-4xl block mb-4">✦</span>
            <h3 className="text-2xl font-light text-[#f0e8d8] italic mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              ¡Gracias!
            </h3>
            <p className="text-xs text-[#a09080] font-light tracking-wide">
              Tu confirmación fue recibida. ¡Nos vemos en la fiesta!
            </p>
          </div>
        ) : (
          <div
            ref={formRef}
            style={{ opacity: formVisible ? 1 : 0, transform: formVisible ? 'translateY(0)' : 'translateY(30px)', transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s' }}
          >
            <div className="border border-[#c8b48c]/15 p-8 space-y-8">

              {/* Nombre */}
              <div>
                <label className="block text-[9px] tracking-[0.3em] uppercase text-[#c8b48c]/60 mb-2">
                  Tu nombre completo *
                </label>
                <input
                  type="text"
                  name="nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  placeholder="Escribe tu nombre"
                  className={inputClass}
                  required
                />
              </div>

              {/* Asistencia */}
              <div>
                <label className="block text-[9px] tracking-[0.3em] uppercase text-[#c8b48c]/60 mb-4">
                  ¿Asistirás? *
                </label>
                <div className="flex gap-4">
                  {['Sí', 'No'].map((op) => (
                    <button
                      key={op}
                      type="button"
                      onClick={() => setForm({ ...form, asistencia: op })}
                      className={`flex-1 py-2.5 text-xs tracking-[0.2em] uppercase border transition-all duration-300 ${
                        form.asistencia === op
                          ? 'border-[#c8b48c] text-[#c8b48c] bg-[#c8b48c]/10'
                          : 'border-[#c8b48c]/20 text-[#554e45] hover:border-[#c8b48c]/40'
                      }`}
                    >
                      {op}
                    </button>
                  ))}
                </div>
              </div>

              {/* Número de invitados (solo si asiste) */}
              {form.asistencia === 'Sí' && (
                <div style={{ animation: 'fadeIn 0.4s ease' }}>
                  <label className="block text-[9px] tracking-[0.3em] uppercase text-[#c8b48c]/60 mb-2">
                    ¿Cuántos asistirán?
                  </label>
                  <select
                    name="invitados"
                    value={form.invitados}
                    onChange={handleChange}
                    className={inputClass + ' cursor-pointer'}
                  >
                    {[1, 2, 3, 4].map((n) => (
                      <option key={n} value={n} className="bg-[#111] text-[#e8e0d0]">
                        {n} {n === 1 ? 'persona' : 'personas'}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Botón submit */}
              <button
                type="button"
                onClick={handleSubmit}
                disabled={status === 'sending' || !form.nombre || !form.asistencia}
                className="w-full py-4 border border-[#c8b48c]/40 text-[#c8b48c] text-[10px] tracking-[0.35em] uppercase hover:bg-[#c8b48c]/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
              >
                {status === 'sending' ? 'Enviando...' : 'Confirmar asistencia'}
              </button>

              {status === 'error' && (
                <p className="text-center text-[10px] text-red-400/70 tracking-wide">
                  Hubo un error. Intenta de nuevo o escríbenos directamente.
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
