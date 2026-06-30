import { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';
import vale1 from '../assets/images/vale1.webp';

export default function Galeria() {
    const [ref, visible] = useScrollReveal();
    const audioRef = useRef(null);
    const [playing, setPlaying] = useState(false);
    const [muted, setMuted] = useState(false);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const onTimeUpdate = () => setProgress((audio.currentTime / audio.duration) * 100 || 0);
        const onLoaded = () => setDuration(audio.duration);

        audio.addEventListener('timeupdate', onTimeUpdate);
        audio.addEventListener('loadedmetadata', onLoaded);
        return () => {
            audio.removeEventListener('timeupdate', onTimeUpdate);
            audio.removeEventListener('loadedmetadata', onLoaded);
        };
    }, []);

    const togglePlay = () => {
        const audio = audioRef.current;
        if (playing) { audio.pause(); setPlaying(false); }
        else { audio.play(); setPlaying(true); }
    };

    const toggleMute = () => {
        audioRef.current.muted = !muted;
        setMuted(!muted);
    };

    const handleSeek = (e) => {
        const audio = audioRef.current;
        const rect = e.currentTarget.getBoundingClientRect();
        const pct = (e.clientX - rect.left) / rect.width;
        audio.currentTime = pct * audio.duration;
    };

    const formatTime = (s) => {
        if (!s || isNaN(s)) return '0:00';
        const m = Math.floor(s / 60);
        const sec = Math.floor(s % 60);
        return `${m}:${sec.toString().padStart(2, '0')}`;
    };

    return (
        <section className="relative bg-white px-6 overflow-hidden">
            <audio ref={audioRef} src="/audio/audio.mp3" preload="metadata" />

            <div
                ref={ref}
                className="max-w-sm mx-auto flex flex-col items-center text-center"
                style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(40px)', transition: 'opacity 0.8s ease, transform 0.8s ease', }}>
                <div className="relative w-full mb-10">
                    <div
                        className="w-full overflow-hidden bg-[#f4f9f6]"
                        style={{ borderRadius: '50% 50% 8px 8px / 40% 40% 8px 8px', border: '1.5px solid #c9a84c40', aspectRatio: '3/4', }}>
                        <img src={vale1} alt="Valeria" className="w-full h-full object-cover" />
                    </div>
                </div>
                <p className="text-xs tracking-[0.18em] uppercase text-[#5a7a65] leading-relaxed mb-8 max-w-[260px]" style={{ fontFamily: "'Jost', sans-serif" }} >
                    Acuérdate de tu Creador en los días de tu juventud, antes que vengan los días malos, y lleguen los años de los cuales digas: No tengo en ellos contentamiento. Eclesiastés 12:1 
                </p>

                <div className="flex items-center gap-3 w-full max-w-[200px] mb-8">
                    <span className="flex-1 h-px bg-[#c9a84c]/30" />
                    <span className="text-[#c9a84c] text-xs">✦</span>
                    <span className="flex-1 h-px bg-[#c9a84c]/30" />
                </div>

                <p className="text-[9px] tracking-[0.35em] uppercase text-[#c9a84c]/70 mb-5">
                    Dale play
                </p>

                <div className="w-full border border-[#c9a84c]/25 bg-white px-6 py-5 space-y-4"
                    style={{ boxShadow: '0 4px 24px rgba(201,168,76,0.08)' }}>
                    <div
                        className="w-full h-px bg-[#c9a84c]/15 relative cursor-pointer group" onClick={handleSeek} >
                        <div
                            className="absolute top-0 left-0 h-full bg-[#c9a84c]/60 transition-all duration-100"
                            style={{ width: `${progress}%` }} />
                        <div
                            className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#c9a84c] opacity-0 group-hover:opacity-100 transition-opacity"
                            style={{ left: `${progress}%`, transform: 'translate(-50%, -50%)' }}
                        />
                    </div>

                    <div className="flex justify-between text-[9px] tracking-widest text-[#ACC8B4]">
                        <span>{formatTime(audioRef.current?.currentTime)}</span>
                        <span>{formatTime(duration)}</span>
                    </div>

                    <div className="flex items-center justify-center gap-6">

                        <button
                            onClick={toggleMute} className="text-[#c9a84c]/50 hover:text-[#c9a84c] transition-colors duration-200" >
                            {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                        </button>

                        <button
                            onClick={togglePlay}
                            className="w-12 h-12 rounded-full border border-[#c9a84c]/40 flex items-center justify-center text-[#c9a84c] hover:bg-[#c9a84c]/10 transition-all duration-300"
                            style={{ boxShadow: '0 2px 12px rgba(201,168,76,0.15)' }} >
                            {playing
                                ? <Pause size={18} />
                                : <Play size={18} className="ml-0.5" />
                            }
                        </button>
                        <div className="w-4" />
                    </div>
                </div>

            </div>
        </section>
    );
}