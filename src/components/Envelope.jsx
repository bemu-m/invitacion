import { useState } from 'react';

export default function Envelope({ onOpen }) {
  const [state, setState] = useState('idle');

  const handleClick = () => {
    if (state !== 'idle') return;
    setState('opening');
    setTimeout(() => setState('expanding'), 1000);
    setTimeout(() => onOpen(), 1800);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center px-8"
      style={{
        background: 'linear-gradient(135deg, #fbf1ee 0%, #fdf8f5 50%, #f5ebe0 100%)',
        opacity: state === 'expanding' ? 0 : 1,
        transition: state === 'expanding' ? 'opacity 0.9s ease' : 'none',
        pointerEvents: state === 'expanding' ? 'none' : 'auto',
      }}
    >
      <style>{`
        @keyframes floatEnvelope {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-8px); }
        }
        @keyframes sealPulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); box-shadow: 0 4px 20px rgba(201,161,91,0.3); }
          50%       { transform: translate(-50%, -50%) scale(1.05); box-shadow: 0 6px 28px rgba(201,161,91,0.5); }
        }
        @keyframes expandEnvelope {
          0%   { transform: scale(1); opacity: 1; }
          60%  { transform: scale(6); opacity: 0.6; }
          100% { transform: scale(18); opacity: 0; }
        }
        .envelope-flap {
          transform-origin: top center;
          transform: rotateX(0deg);
          transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
        }
        .envelope-opening .envelope-flap,
        .envelope-expanding .envelope-flap {
          transform: rotateX(-180deg);
        }
        .envelope-wrap {
          perspective: 600px;
        }
        .envelope-expanding .envelope-body {
          animation: expandEnvelope 0.9s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}</style>

      <p
        className="text-[10px] tracking-[0.4em] uppercase text-[#c9a15b] mb-10"
        style={{
          opacity: state === 'idle' ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
      >
        Tienes una invitación
      </p>

      <div
        onClick={handleClick}
        className={`relative cursor-pointer select-none envelope-wrap ${
          state === 'opening' || state === 'expanding' ? 'envelope-opening' : ''
        } ${state === 'expanding' ? 'envelope-expanding' : ''}`}
        style={{ width: '300px', height: '210px' }}
      >
        <div className="envelope-body relative" style={{ width: '300px', height: '210px' }}>
          <div
            className="absolute inset-0 rounded-sm"
            style={{
              background: 'linear-gradient(160deg, #fefefe 0%, #f8f0eb 100%)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.08)',
              border: '0.5px solid rgba(201,161,91,0.25)',
              animation: state === 'idle' ? 'floatEnvelope 3s ease-in-out infinite' : 'none',
            }}
          />
          <div
            className="absolute bottom-0 left-0 right-0"
            style={{
              height: '105px',
              background: 'linear-gradient(160deg, #fefefe 0%, #f8f0eb 100%)',
              clipPath: 'polygon(0% 100%, 50% 0%, 100% 100%)',
              zIndex: 3,
            }}
          />
          <div
            className="absolute top-0 left-0 bottom-0"
            style={{
              width: '150px',
              background: 'linear-gradient(135deg, #f5ebe0 0%, #f0e4d8 100%)',
              clipPath: 'polygon(0% 0%, 100% 50%, 0% 100%)',
              zIndex: 2,
            }}
          />
          <div
            className="absolute top-0 right-0 bottom-0"
            style={{
              width: '150px',
              background: 'linear-gradient(225deg, #f5ebe0 0%, #f0e4d8 100%)',
              clipPath: 'polygon(100% 0%, 0% 50%, 100% 100%)',
              zIndex: 2,
            }}
          />
          <div
            className="envelope-flap absolute top-0 left-0 right-0"
            style={{
              height: '110px',
              zIndex: state === 'opening' || state === 'expanding' ? 1 : 4,
              backfaceVisibility: 'hidden',
            }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                background: 'linear-gradient(180deg, #f8f0eb 0%, #f0e4d8 100%)',
                clipPath: 'polygon(0% 0%, 50% 100%, 100% 0%)',
                borderTop: '0.5px solid rgba(201,161,91,0.2)',
              }}
            />
          </div>
          <div
            className="absolute"
            style={{
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 5,
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: 'radial-gradient(circle at 35% 35%, #e8cf9a, #c9a15b 50%, #a67c3d 100%)',
              boxShadow: '0 4px 20px rgba(201,161,91,0.4), inset 0 1px 2px rgba(255,255,255,0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              animation: state === 'idle' ? 'sealPulse 3s ease-in-out infinite' : 'none',
            }}
          >
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '22px', fontStyle: 'italic', color: 'rgba(255,255,255,0.95)', lineHeight: 1, marginBottom: '1px', textShadow: '0 1px 3px rgba(0,0,0,0.2)' }}>
              V
            </span>
            <span style={{ fontSize: '6px', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.8)', textTransform: 'uppercase', fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>
              XV
            </span>
          </div>

        </div>
      </div>

      <div
        className="mt-10 flex flex-col items-center gap-3"
        style={{
          opacity: state === 'idle' ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
      >
        <p className="text-xs font-light text-[#8c6f68] tracking-widest" style={{ fontFamily: "'Jost', sans-serif" }}>
          Toca para abrir
        </p>
        <div style={{ width: '1px', height: '32px', background: 'linear-gradient(to bottom, transparent, #c9a15b, transparent)', animation: 'floatEnvelope 1.5s ease-in-out infinite' }} />
      </div>

    </div>
  );
}