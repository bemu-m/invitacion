import { useState } from 'react';
import { UserPlus, Trash2, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import useScrollReveal from '../hooks/useScrollReveal';
import adornoImg from '../assets/images/ador_esquina_arriba_izquierda.png';

const SHEETS_URL   = 'https://script.google.com/macros/s/AKfycbxzYj2JPy0HIrhfuma2nKTmLfHxl9lFER5ZwBbRtqhJ_iXzBmk0at8YvFmIfraS7k1JJw/exec';
const WHATSAPP_NUM = '529613017335';

const EMAILJS_SERVICE_ID  = 'service_ti1a28g';
const EMAILJS_TEMPLATE_ID = 'template_pcrwcqh';
const EMAILJS_PUBLIC_KEY  = 'cupA8UWLwsU9jUvcN';

const inputClass = "w-full bg-transparent border-b border-[#c9a84c]/30 py-3 text-sm text-[#2d4a38] placeholder-[#ACC8B4] font-light tracking-wide focus:outline-none focus:border-[#c9a84c]/70 transition-colors duration-300";

export default function Confirmation() {
  const [titleRef, titleVisible] = useScrollReveal();
  const [formRef, formVisible]   = useScrollReveal();

  const [nombre, setNombre]         = useState('');
  const [asistencia, setAsistencia] = useState('');
  const [telefono, setTelefono]     = useState('');
  const [integrantes, setIntegrantes] = useState([]);
  const [nuevoIntegrante, setNuevoIntegrante] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [status, setStatus] = useState('idle');

  const agregarIntegrante = () => {
    const nombre = nuevoIntegrante.trim();
    if (!nombre) return;
    setIntegrantes([...integrantes, nombre]);
    setNuevoIntegrante('');
  };

  const eliminarIntegrante = (index) => {
    setIntegrantes(integrantes.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    if (!nombre || !asistencia) return;
    setStatus('sending');

    const integrantesStr = integrantes.length > 0 ? integrantes.join(', ') : '—';

    const payload = {
      nombre,
      asistencia,
      integrantes: integrantesStr,
      telefono: telefono || '—',
    };

    try {
      await fetch(SHEETS_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          nombre,
          asistencia,
          integrantes: integrantesStr,
          telefono: telefono || '—',
        },
        EMAILJS_PUBLIC_KEY
      );

      const mensaje = encodeURIComponent(
        `Hola! Te confirmo mi asistencia a los XV Años de Valeria\n\n` +
        `Nombre: ${nombre}\n` +
        `Asistencia: ${asistencia}\n` +
        `Integrantes: ${integrantesStr}\n` +
        `Teléfono: ${telefono || '—'}`
      );
      window.open(`https://wa.me/${WHATSAPP_NUM}?text=${mensaje}`, '_blank');

      setStatus('success');
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section className="relative bg-[#f4f9f6] py-20 px-6 overflow-hidden">

      <img src={adornoImg} alt="" aria-hidden="true" className="absolute top-0 left-0 w-28 pointer-events-none select-none" style={{ opacity: 0.6 }} />
      <img src={adornoImg} alt="" aria-hidden="true" className="absolute top-0 right-0 w-28 pointer-events-none select-none" style={{ opacity: 0.6, transform: 'scaleX(-1)' }} />
      <img src={adornoImg} alt="" aria-hidden="true" className="absolute bottom-0 left-0 w-28 pointer-events-none select-none" style={{ opacity: 0.6, transform: 'scaleY(-1)' }} />
      <img src={adornoImg} alt="" aria-hidden="true" className="absolute bottom-0 right-0 w-28 pointer-events-none select-none" style={{ opacity: 0.6, transform: 'scale(-1,-1)' }} />

      <div className="max-w-sm mx-auto">

        <div
          ref={titleRef}
          className="text-center mb-12"
          style={{ opacity: titleVisible ? 1 : 0, transform: titleVisible ? 'translateY(0)' : 'translateY(30px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}
        >
          <p className="text-[10px] tracking-[0.4em] uppercase text-[#c9a84c] mb-3">Confirma tu lugar</p>
          <h2 className="text-5xl font-light italic text-[#2d4a38]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Asistencia
          </h2>
          <div className="flex items-center gap-3 max-w-[160px] mx-auto mt-4 mb-4">
            <span className="flex-1 h-px bg-[#c9a84c]/30" />
            <span className="text-[#c9a84c] text-[10px]">✦</span>
            <span className="flex-1 h-px bg-[#c9a84c]/30" />
          </div>
          <p className="text-xs font-light text-[#7A9E87] tracking-wide">
            Responde antes del <span className="text-[#c9a84c]">15 de julio, 2026</span>
          </p>
        </div>

        {status === 'success' ? (
          <div
            className="text-center py-16 border border-[#c9a84c]/20 px-8 bg-white/60"
            style={{ opacity: 1, transition: 'opacity 0.5s ease' }}
          >
            <span className="text-4xl block mb-4 text-[#c9a84c]">✦</span>
            <h3 className="text-2xl font-light italic text-[#2d4a38] mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              ¡Gracias!
            </h3>
            <p className="text-xs text-[#7A9E87] font-light tracking-wide">
              Tu confirmación fue recibida. ¡Nos vemos en la fiesta!
            </p>
          </div>
        ) : (
          <div
            ref={formRef}
            className="border border-[#c9a84c]/20 p-8 space-y-8 bg-white/60"
            style={{ opacity: formVisible ? 1 : 0, transform: formVisible ? 'translateY(0)' : 'translateY(30px)', transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s' }}
          >

            <div>
              <label className="block text-[9px] tracking-[0.3em] uppercase text-[#c9a84c]/70 mb-2">Nombre completo *</label>
              <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Nombre y apellidos"
                className={inputClass}
              />
            </div>

            <div>
              <label className="block text-[9px] tracking-[0.3em] uppercase text-[#c9a84c]/70 mb-4">¿Confirmas tu asistencia? *</label>
              <div className="flex gap-4">
                {['Sí', 'No'].map((op) => (
                  <button
                    key={op}
                    type="button"
                    onClick={() => setAsistencia(op)}
                    className={`flex-1 py-2.5 text-xs tracking-[0.2em] uppercase border transition-all duration-300 ${
                      asistencia === op
                        ? 'border-[#c9a84c] text-[#c9a84c] bg-[#c9a84c]/10'
                        : 'border-[#c9a84c]/20 text-[#ACC8B4] hover:border-[#c9a84c]/40'
                    }`}
                  >
                    {op}
                  </button>
                ))}
              </div>
            </div>

            {asistencia === 'Sí' && (
              <>
                <div>
                  <label className="block text-[9px] tracking-[0.3em] uppercase text-[#c9a84c]/70 mb-3">
                    Integrantes que asistirán
                  </label>

                  <div className="flex gap-2 mb-3">
                    <input
                      type="text"
                      value={nuevoIntegrante}
                      onChange={(e) => setNuevoIntegrante(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && agregarIntegrante()}
                      placeholder="Nombre del integrante"
                      className={inputClass}
                    />
                    <button
                      type="button"
                      onClick={() => { agregarIntegrante(); setDropdownOpen(true); }}
                      className="flex-shrink-0 w-10 h-10 border border-[#c9a84c]/40 flex items-center justify-center text-[#c9a84c] hover:bg-[#c9a84c]/10 transition-all duration-300 self-end mb-0.5"
                    >
                      <UserPlus size={15} />
                    </button>
                  </div>

                  {integrantes.length > 0 && (
                    <div
                      className="border border-[#c9a84c]/15 bg-white divide-y divide-[#c9a84c]/10"
                      style={{ animation: 'fadeIn 0.3s ease' }}
                    >
                      {integrantes.map((nombre, i) => (
                        <div key={i} className="flex items-center justify-between px-4 py-2.5">
                          <div className="flex items-center gap-3">
                            <span className="text-[#c9a84c]/40 text-[10px]">{i + 1}</span>
                            <span className="text-xs text-[#2d4a38] font-light tracking-wide">{nombre}</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => eliminarIntegrante(i)}
                            className="text-[#ACC8B4]/50 hover:text-red-400 transition-colors duration-200"
                          >
                            <Trash2 size={13} />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-[9px] tracking-[0.3em] uppercase text-[#c9a84c]/70 mb-2">Número de teléfono</label>
                  <input
                    type="tel"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    placeholder="+52 961 000 0000"
                    className={inputClass}
                  />
                </div>
              </>
            )}

            <button
              type="button"
              onClick={handleSubmit}
              disabled={status === 'sending' || !nombre || !asistencia}
              className="w-full py-4 border border-[#c9a84c]/50 text-[#c9a84c] text-[10px] tracking-[0.35em] uppercase hover:bg-[#c9a84c]/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-3"
            >
              <Send size={13} />
              {status === 'sending' ? 'Enviando...' : 'Confirmar asistencia'}
            </button>

            {status === 'error' && (
              <p className="text-center text-[10px] text-red-400/70 tracking-wide">
                Hubo un error. Intenta de nuevo.
              </p>
            )}

          </div>
        )}
      </div>
    </section>
  );
}