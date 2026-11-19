/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowUpRight,
  Calendar,
  Check,
  FileDown,
  Instagram,
  Linkedin,
  LoaderCircle,
  Menu,
  Pause,
  Play,
  RotateCcw,
  Send,
  X,
  Youtube,
} from 'lucide-react';

const SPARK_CONFIG = {
  sparkColor: '#F0F6FC',
  glowColor: '#D8ECF8',
  glowStdDeviation: 1.5,
  glowOpacity: 0.25,
  jitterScale: 0.8,
  baseStrokeWidth: 2,
  sparkStrokeWidth: 2,
  arcMinIntervalMs: 5000,
  arcMaxIntervalMs: 8000,
  arcDurationMs: 180,
};

const pathL = 'M 122 20 L 122 78 Q 122 92 136 92 L 158 92';
const pathFirstO = 'M 244 48 A 35 35 0 1 0 244 64';
const pathSlashHero = 'M 259 12 L 241 146';
const pathSecondO = 'M 262 64 A 35 35 0 1 0 262 48';
const pathP = 'M 348 92 L 348 20 L 376 20 A 18 18 0 0 1 376 56 L 348 56';
const pathSlashTitle = 'M 256 12 L 244 100';

const valImg = '/assets/Valentina-BIrzog3g.webp';
const gabImg = '/assets/Gabriele-dC9VqZ5B.PNG';

const UPCOMING_LOOPS = [
  {
    date: '1 Dicembre',
    format: 'Online su YouTube',
    title: 'Webinar gratuito online su YouTube',
    href: 'https://luma.com/i9b5nz0f',
  },
  {
    date: '13 Dicembre',
    format: 'In presenza',
    title: 'Workshop full day in presenza',
    href: 'https://luma.com/8zesa7cn',
  },
];

const INSTAGRAM_POSTS = [
  {
    url: 'https://www.instagram.com/imvalentinapalazzo/p/DbdM0R8Dg4O/',
    embedUrl: 'https://www.instagram.com/p/DbdM0R8Dg4O/embed/',
    author: '@imvalentinapalazzo',
    type: 'Post',
  },
  {
    url: 'https://www.instagram.com/gabripapparella/reel/DfmubtqNExU/',
    embedUrl: 'https://www.instagram.com/reel/DfmubtqNExU/embed/',
    author: '@gabripapparella',
    type: 'Reel',
  },
  {
    url: 'https://www.instagram.com/imvalentinapalazzo/reel/DfaQhWnOwRT/',
    embedUrl: 'https://www.instagram.com/reel/DfaQhWnOwRT/embed/',
    author: '@imvalentinapalazzo',
    type: 'Reel',
  },
  {
    url: 'https://www.instagram.com/p/Dbuv5kYDnpo/?img_index=1',
    embedUrl: 'https://www.instagram.com/p/Dbuv5kYDnpo/embed/',
    author: 'Instagram',
    type: 'Post',
  },
];

function BreathingSection() {
  const [isRunning, setIsRunning] = useState(true);
  const [time, setTime] = useState(0); // in seconds, 0 to 10
  const [cycles, setCycles] = useState(0);

  useEffect(() => {
    if (!isRunning) return;
    const intervalMs = 50;
    const interval = setInterval(() => {
      setTime((prev) => {
        const next = prev + intervalMs / 1000;
        if (next >= 10) {
          setCycles((c) => c + 1);
          return 0;
        }
        return next;
      });
    }, intervalMs);

    return () => clearInterval(interval);
  }, [isRunning]);

  const isInhale = time < 4;
  const phaseLabel = isInhale ? 'Inspira' : 'Espira';
  const secondsLeft = isInhale ? Math.ceil(4 - time) : Math.ceil(10 - time);

  // Cosine easing for smooth organic expansion and contraction
  // 0 to 4s: scale 0.68 to 1.18
  // 4 to 10s: scale 1.18 down to 0.68
  let scale = 0.68;
  if (isInhale) {
    const p = time / 4;
    scale = 0.68 + 0.5 * (0.5 - 0.5 * Math.cos(Math.PI * p));
  } else {
    const p = (time - 4) / 6;
    scale = 1.18 - 0.5 * (0.5 - 0.5 * Math.cos(Math.PI * p));
  }

  // 10-second total cycle progress (0% to 100%)
  const totalProgress = (time / 10) * 100;
  const circumference = 2 * Math.PI * 140; // ~879.64

  const handleReset = () => {
    setTime(0);
    setCycles(0);
  };

  return (
    <section
      id="provalo-adesso"
      className="py-20 md:py-28 px-5 sm:px-8 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Title */}
        <div className="mb-8 max-w-2xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white mb-3 font-title">
            Provalo adesso
          </h2>
          <p className="text-base sm:text-lg text-white/80 font-normal">
            4 secondi inspiro · 6 secondi espiro
          </p>
          <p className="text-base sm:text-lg text-white mt-4 max-w-2xl mx-auto leading-relaxed font-normal">
            Sincronizza il tuo respiro con la sfera. L'espirazione prolungata
            attiva il nervo vago, invia al cervello il segnale biologico per
            uscire dal pilota automatico e fa{' '}
            <strong className="font-bold text-white">altre due cose</strong>{' '}
            molto importanti. Vuoi scoprirle? Ne parliamo nei nostri{' '}
            <strong className="font-bold text-white">webinar gratuiti</strong>
          </p>
        </div>

        {/* Breathing Sphere Stage */}
        <div className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center my-6 select-none">
          {/* Atmospheric background glow */}
          <div
            className="absolute inset-0 rounded-full bg-gradient-to-tr from-sky-400/15 via-white/10 to-transparent blur-3xl transition-opacity duration-500 pointer-events-none"
            style={{
              opacity: isInhale ? 0.85 : 0.4,
              transform: `scale(${scale * 1.3})`,
            }}
          />

          {/* SVG Orbit and Progress Rings */}
          <svg
            viewBox="0 0 320 320"
            className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
          >
            {/* Outer static hairline ring */}
            <circle
              cx="160"
              cy="160"
              r="140"
              fill="none"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="1"
            />
            {/* Dynamic progress ring */}
            <circle
              cx="160"
              cy="160"
              r="140"
              fill="none"
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="1.5"
              strokeDasharray={circumference}
              strokeDashoffset={
                circumference - (circumference * totalProgress) / 100
              }
              strokeLinecap="round"
              transform="rotate(-90 160 160)"
            />

            {/* Orbiting dashed streams scaling with breath */}
            <circle
              cx="160"
              cy="160"
              r="112"
              fill="none"
              stroke="rgba(216,236,248,0.3)"
              strokeWidth="1.2"
              strokeDasharray="6 14"
              className="spark-stream-b"
              style={{
                transformOrigin: '160px 160px',
                transform: `scale(${scale})`,
              }}
            />
            <circle
              cx="160"
              cy="160"
              r="86"
              fill="none"
              stroke="rgba(255,255,255,0.25)"
              strokeWidth="1"
              strokeDasharray="4 12"
              className="spark-stream-a"
              style={{
                transformOrigin: '160px 160px',
                transform: `scale(${scale})`,
              }}
            />
          </svg>

          {/* Central Bioluminescent Breathing Sphere */}
          <div
            className="relative rounded-full flex flex-col items-center justify-center transition-transform duration-75 ease-out shadow-2xl"
            style={{
              width: '180px',
              height: '180px',
              transform: `scale(${scale})`,
              background:
                'radial-gradient(circle at 35% 32%, rgba(255, 255, 255, 0.95) 0%, rgba(216, 236, 248, 0.7) 26%, rgba(15, 23, 42, 0.9) 70%, rgba(5, 6, 8, 0.98) 100%)',
              border: '1.5px solid rgba(255, 255, 255, 0.45)',
              boxShadow: isInhale
                ? '0 0 55px rgba(216, 236, 248, 0.55), inset 0 0 35px rgba(255, 255, 255, 0.4)'
                : '0 0 25px rgba(216, 236, 248, 0.2), inset 0 0 20px rgba(255, 255, 255, 0.2)',
            }}
          >
            {/* Specular line sheen sweep inside sphere */}
            <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none opacity-40">
              <div className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/50 to-transparent line-sheen-sweep" />
            </div>

            {/* Central Typography and Countdown */}
            <div className="relative z-10 text-center flex flex-col items-center justify-center">
              <span
                className="font-title text-xl sm:text-2xl font-bold tracking-tight text-white drop-shadow-md select-none transition-all duration-300"
                style={{ fontFamily: "'Comfortaa', sans-serif" }}
              >
                {phaseLabel}
              </span>
              <span className="font-mono text-sm sm:text-base font-semibold text-white/80 mt-1 tabular-nums">
                {secondsLeft}s
              </span>
            </div>
          </div>
        </div>

        {/* Phase Pill Indicators */}
        <div className="flex items-center gap-3 my-6 text-xs font-mono">
          <div
            className={`px-4 py-1.5 rounded-full border transition-all duration-300 ${
              isInhale
                ? 'bg-white/15 border-white text-white shadow-[0_0_15px_rgba(255,255,255,0.25)]'
                : 'bg-transparent border-white/15 text-white/40'
            }`}
          >
            Inspiro · 4s
          </div>
          <span className="text-white/20">·</span>
          <div
            className={`px-4 py-1.5 rounded-full border transition-all duration-300 ${
              !isInhale
                ? 'bg-white/15 border-white text-white shadow-[0_0_15px_rgba(255,255,255,0.25)]'
                : 'bg-transparent border-white/15 text-white/40'
            }`}
          >
            Espiro · 6s
          </div>
        </div>

        {/* Controls and Cycle Counter */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => setIsRunning(!isRunning)}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/40 hover:border-white bg-[#0a0d12] hover:bg-white/10 text-xs text-white font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white cursor-pointer"
            aria-label={
              isRunning ? 'Metti in pausa il respiro' : 'Riprendi il respiro'
            }
          >
            {isRunning ? (
              <>
                <Pause className="w-3.5 h-3.5" />
                <span>Pausa</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5" />
                <span>Avvia</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/20 hover:border-white/50 text-xs text-white/70 hover:text-white transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white cursor-pointer"
            aria-label="Ricomincia il ciclo di respirazione"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>

          {cycles > 0 && (
            <span className="text-xs font-mono text-white/50 pl-2">
              Cicli: {cycles}
            </span>
          )}
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [arcActive, setArcActive] = useState(false);
  const [arcPath, setArcPath] = useState('');
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    messaggio: '',
    privacy: false,
  });
  const [errors, setErrors] = useState<{
    nome?: string;
    email?: string;
    privacy?: string;
  }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [cookieModalOpen, setCookieModalOpen] = useState(false);

  const arcTimerRef = useRef<NodeJS.Timeout | null>(null);
  const arcTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const getRandomArcPath = () =>
    `M 244 56 Q 253 ${56 + (Math.random() - 0.5) * 8} 262 56`;

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    mediaQuery.addEventListener('change', handleMotionChange);

    const scheduleArc = () => {
      if (mediaQuery.matches) return;
      const delay =
        Math.floor(
          Math.random() *
            (SPARK_CONFIG.arcMaxIntervalMs - SPARK_CONFIG.arcMinIntervalMs)
        ) + SPARK_CONFIG.arcMinIntervalMs;

      arcTimerRef.current = setTimeout(() => {
        setArcPath(getRandomArcPath());
        setArcActive(true);
        arcTimeoutRef.current = setTimeout(() => {
          setArcActive(false);
          scheduleArc();
        }, SPARK_CONFIG.arcDurationMs);
      }, delay);
    };

    if (!mediaQuery.matches) {
      scheduleArc();
    }

    return () => {
      mediaQuery.removeEventListener('change', handleMotionChange);
      if (arcTimerRef.current) clearTimeout(arcTimerRef.current);
      if (arcTimeoutRef.current) clearTimeout(arcTimeoutRef.current);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { nome?: string; email?: string; privacy?: string } = {};

    if (!formData.nome.trim()) {
      newErrors.nome = 'Inserisci il tuo nome';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Inserisci la tua email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Inserisci un indirizzo email valido';
    }

    if (!formData.privacy) {
      newErrors.privacy = 'È necessario acconsentire al trattamento dei dati';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      setIsSubmitting(true);
      try {
        const response = await fetch(
          'https://formsubmit.co/ajax/vale.palazzo@gmail.com',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
            body: JSON.stringify({
              nome: formData.nome,
              email: formData.email,
              messaggio: formData.messaggio || '(Nessun messaggio fornito)',
              _subject: `Iscrizione workshop LO/OP da ${formData.nome}`,
              _replyto: formData.email,
            }),
          }
        );

        if (!response.ok) {
          window.location.href = `mailto:vale.palazzo@gmail.com?subject=Iscrizione%20Workshop%20LO%2FOP&body=${encodeURIComponent(
            `Nome: ${formData.nome}\nEmail: ${formData.email}\nMessaggio: ${formData.messaggio}`
          )}`;
        }
        setIsSuccess(true);
      } catch {
        window.location.href = `mailto:vale.palazzo@gmail.com?subject=Iscrizione%20Workshop%20LO%2FOP&body=${encodeURIComponent(
          `Nome: ${formData.nome}\nEmail: ${formData.email}\nMessaggio: ${formData.messaggio}`
        )}`;
        setIsSuccess(true);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="min-h-screen lab-ambient-bg text-white font-sans selection:bg-white selection:text-black flex flex-col justify-between">
      {/* Top Header */}
      <header className="sticky top-0 z-50 bg-[#06080b]/85 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-8">
          <a
            href="#hero"
            className="font-title text-sm tracking-wider font-bold text-white hover:text-white/80 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded-full px-2 py-1"
          >
            LO/OP
          </a>

          <nav
            aria-label="Navigazione principale"
            className="hidden md:flex items-center gap-6 lg:gap-8 text-xs tracking-wide text-white/70"
          >
            <a
              href="#cose"
              className="hover:text-white transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded-full px-2 py-1"
            >
              Cos'è
            </a>
            <a
              href="#perche"
              className="hover:text-white transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded-full px-2 py-1"
            >
              Perché
            </a>
            <a
              href="#provalo-adesso"
              className="hover:text-white transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded-full px-2 py-1"
            >
              Provalo
            </a>
            <a
              href="#prossimi-loop"
              className="hover:text-white transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded-full px-2 py-1"
            >
              Prossimi loop
            </a>
            <a
              href="#chi-siamo"
              className="hover:text-white transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded-full px-2 py-1"
            >
              Chi siamo
            </a>
            <a
              href="#brochure"
              className="hover:text-white transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded-full px-2 py-1"
            >
              Brochure
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-4 shrink-0">
            <a
              href="#contatti"
              className="text-xs font-medium px-5 py-2 rounded-full border border-white/70 text-white hover:bg-white hover:text-black transition-all whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
            >
              Contatti
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white/80 hover:text-white rounded-full border border-white/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
            aria-expanded={mobileMenuOpen}
            aria-label={
              mobileMenuOpen ? 'Chiudi menu' : 'Apri menu di navigazione'
            }
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <nav
            aria-label="Menu mobile"
            className="md:hidden bg-[#07090d] border-b border-white/10 px-6 py-6 flex flex-col gap-4 text-sm tracking-wide"
          >
            <a
              href="#cose"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white/80 hover:text-white py-1"
            >
              Cos'è
            </a>
            <a
              href="#perche"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white/80 hover:text-white py-1"
            >
              Perché
            </a>
            <a
              href="#provalo-adesso"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white/80 hover:text-white py-1"
            >
              Provalo
            </a>
            <a
              href="#prossimi-loop"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white/80 hover:text-white py-1"
            >
              Prossimi loop
            </a>
            <a
              href="#chi-siamo"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white/80 hover:text-white py-1"
            >
              Chi siamo
            </a>
            <a
              href="#brochure"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white/80 hover:text-white py-1"
            >
              Brochure
            </a>
            <a
              href="#contatti"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-block text-center mt-2 px-6 py-3 rounded-full border border-white text-white hover:bg-white hover:text-black transition-all"
            >
              Scrivici
            </a>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative pt-16 pb-24 md:pt-28 md:pb-36 px-5 sm:px-8"
      >
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <div className="w-[88%] sm:w-[70%] md:w-[50vw] max-w-2xl mx-auto mb-10">
            <svg
              viewBox="0 0 500 156"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto overflow-visible select-none"
              role="img"
              aria-label="LO/OP, longevity optimized"
            >
              <defs>
                <filter
                  id="spark-filter"
                  x="-20%"
                  y="-20%"
                  width="140%"
                  height="140%"
                  filterUnits="userSpaceOnUse"
                >
                  <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.09"
                    numOctaves={2}
                    result="noise"
                  />
                  <feDisplacementMap
                    in="SourceGraphic"
                    in2="noise"
                    scale={SPARK_CONFIG.jitterScale}
                    xChannelSelector="R"
                    yChannelSelector="G"
                    result="jittered"
                  />
                  <feGaussianBlur
                    in="jittered"
                    stdDeviation={SPARK_CONFIG.glowStdDeviation}
                    result="blurred"
                  />
                  <feFlood
                    floodColor={SPARK_CONFIG.glowColor}
                    floodOpacity={SPARK_CONFIG.glowOpacity}
                    result="glowFlood"
                  />
                  <feComposite
                    in="glowFlood"
                    in2="blurred"
                    operator="in"
                    result="coloredGlow"
                  />
                  <feMerge>
                    <feMergeNode in="coloredGlow" />
                    <feMergeNode in="jittered" />
                  </feMerge>
                </filter>
              </defs>
              <g
                stroke="#FFFFFF"
                strokeWidth={SPARK_CONFIG.baseStrokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.95"
              >
                <path d={pathL} />
                <path d={pathFirstO} />
                <path d={pathSlashHero} strokeWidth="1.8" />
                <path d={pathSecondO} />
                <path d={pathP} />
              </g>
              {!prefersReducedMotion && (
                <g
                  stroke={SPARK_CONFIG.sparkColor}
                  strokeWidth={SPARK_CONFIG.sparkStrokeWidth}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  filter="url(#spark-filter)"
                  fill="none"
                >
                  <path
                    d={pathL}
                    strokeDasharray="16 110"
                    className="spark-stream-a"
                  />
                  <path
                    d={pathFirstO}
                    strokeDasharray="24 180"
                    className="spark-stream-b"
                  />
                  <path
                    d={pathSlashHero}
                    strokeDasharray="18 130"
                    className="spark-stream-c"
                  />
                  <path
                    d={pathSecondO}
                    strokeDasharray="24 180"
                    className="spark-stream-a"
                  />
                  <path
                    d={pathP}
                    strokeDasharray="20 160"
                    className="spark-stream-b"
                  />
                  {arcActive && arcPath && (
                    <path
                      d={arcPath}
                      stroke={SPARK_CONFIG.sparkColor}
                      strokeWidth={SPARK_CONFIG.sparkStrokeWidth + 0.4}
                      className="spark-arc-active"
                    />
                  )}
                </g>
              )}
              <text
                x="226"
                y="132"
                textAnchor="end"
                className="select-none font-title"
                fill="#E2E8F0"
                fontSize="20"
                fontWeight="300"
                letterSpacing="0.03em"
                style={{ fontFamily: "'Comfortaa', sans-serif" }}
              >
                Longevity
              </text>
              <text
                x="260"
                y="132"
                textAnchor="start"
                className="select-none font-title"
                fill="#E2E8F0"
                fontSize="20"
                fontWeight="300"
                letterSpacing="0.03em"
                style={{ fontFamily: "'Comfortaa', sans-serif" }}
              >
                Optimized
              </text>
            </svg>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4 max-w-2xl text-balance">
            Break the loop. Play the long game.
          </h1>

          <p className="text-base sm:text-lg text-white/70 max-w-2xl mb-10 leading-relaxed font-normal">
            Il tuo cervello funziona in pilota automatico. LO/OP ti insegna a
            riprendere i comandi, con abitudini e respirazione per aggiungere
            anni buoni alla tua vita.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full max-w-xl">
            <a
              href="#brochure"
              className="px-8 py-3.5 bg-white text-black font-medium text-sm tracking-wide rounded-full border-2 border-white hover:bg-transparent hover:text-white transition-all duration-200 text-center whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
            >
              Scarica la brochure
            </a>
            <a
              href="#prossimi-loop"
              className="px-8 py-3.5 bg-transparent text-white font-medium text-sm tracking-wide rounded-full border border-white/35 hover:border-white hover:bg-white/5 transition-all duration-200 text-center whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
            >
              Scopri i prossimi appuntamenti
            </a>
          </div>
        </div>
      </section>

      {/* Animated divider */}
      <div className="relative w-full h-[1px] bg-white/10 overflow-hidden">
        <div className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/35 to-transparent line-sheen-sweep" />
      </div>

      {/* Automatismo Quote Section */}
      <section className="py-20 md:py-28 px-5 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6 font-title text-balance leading-tight">
              Sai già cosa fare per tenerti in salute. Ma non riesci ad essere
              costante.
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed font-normal">
              Noi ti diamo gli strumenti per riprendere il controllo delle tue
              routine.
            </p>
          </div>
        </div>
      </section>

      {/* Animated divider */}
      <div className="relative w-full h-[1px] bg-white/10 overflow-hidden">
        <div className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/35 to-transparent line-sheen-sweep" />
      </div>

      {/* Cos'è Section */}
      <section id="cose" className="py-20 md:py-28 px-5 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 flex flex-col items-center justify-center text-center">
            <h2 className="sr-only">Cos'è LO/OP</h2>
            <div
              className="font-title text-2xl sm:text-3xl md:text-4xl font-normal text-white/90 tracking-tight mb-3 select-none"
              style={{ fontFamily: "'Comfortaa', sans-serif" }}
            >
              Cos'è
            </div>
            <div
              className="w-[180px] sm:w-[220px] md:w-[250px] max-w-xs mx-auto"
              aria-hidden="true"
            >
              <svg
                viewBox="109 6 280 96"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto overflow-visible select-none"
                role="img"
                aria-label="LO/OP"
              >
                <defs>
                  <filter
                    id="spark-filter-title"
                    x="-20%"
                    y="-20%"
                    width="140%"
                    height="140%"
                    filterUnits="userSpaceOnUse"
                  >
                    <feTurbulence
                      type="fractalNoise"
                      baseFrequency="0.09"
                      numOctaves={2}
                      result="noise"
                    />
                    <feDisplacementMap
                      in="SourceGraphic"
                      in2="noise"
                      scale={SPARK_CONFIG.jitterScale}
                      xChannelSelector="R"
                      yChannelSelector="G"
                      result="jittered"
                    />
                    <feGaussianBlur
                      in="jittered"
                      stdDeviation={SPARK_CONFIG.glowStdDeviation}
                      result="blurred"
                    />
                    <feFlood
                      floodColor={SPARK_CONFIG.glowColor}
                      floodOpacity={SPARK_CONFIG.glowOpacity}
                      result="glowFlood"
                    />
                    <feComposite
                      in="glowFlood"
                      in2="blurred"
                      operator="in"
                      result="coloredGlow"
                    />
                    <feMerge>
                      <feMergeNode in="coloredGlow" />
                      <feMergeNode in="jittered" />
                    </feMerge>
                  </filter>
                </defs>
                <g
                  stroke="#FFFFFF"
                  strokeWidth="2.0"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.95"
                >
                  <path d={pathL} />
                  <path d={pathFirstO} />
                  <path d={pathSlashTitle} strokeWidth="1.8" />
                  <path d={pathSecondO} />
                  <path d={pathP} />
                </g>
                {!prefersReducedMotion && (
                  <g
                    stroke={SPARK_CONFIG.sparkColor}
                    strokeWidth="2.0"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    filter="url(#spark-filter-title)"
                    fill="none"
                  >
                    <path
                      d={pathL}
                      strokeDasharray="16 110"
                      className="spark-stream-a"
                    />
                    <path
                      d={pathFirstO}
                      strokeDasharray="24 180"
                      className="spark-stream-b"
                    />
                    <path
                      d={pathSlashTitle}
                      strokeDasharray="16 110"
                      className="spark-stream-c"
                    />
                    <path
                      d={pathSecondO}
                      strokeDasharray="24 180"
                      className="spark-stream-a"
                    />
                    <path
                      d={pathP}
                      strokeDasharray="20 160"
                      className="spark-stream-b"
                    />
                  </g>
                )}
              </svg>
            </div>
          </div>

          <div className="relative overflow-hidden bg-[#090d14]/85 border border-white/20 synaptic-callout rounded-2xl p-6 sm:p-8 mb-8 text-center max-w-3xl mx-auto shadow-xl">
            <div className="absolute top-0 left-0 right-0 h-[2px] card-specular-edge" />
            <div className="absolute inset-0 pointer-events-none opacity-25">
              <div className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent line-sheen-sweep" />
            </div>
            <p className="font-title text-lg sm:text-xl md:text-2xl font-semibold text-white tracking-tight leading-relaxed text-balance relative z-10">
              Due approcci scientifici, un solo obiettivo: la tua salute e la
              tua longevità
            </p>
          </div>

          <div className="text-base sm:text-lg text-white/80 leading-relaxed max-w-3xl mx-auto text-center font-normal">
            <p>
              LO/OP è un workshop di behaviour change e respirazione. Capisci
              come funziona un'abitudine, dove intervenire per eliminarla o
              sostituirla e capisci come regolare il tuo sistema nervoso
              allenando il respiro. Teoria, dati ed esercizi pratici, con un
              piano da portare a casa.
            </p>
          </div>
        </div>
      </section>

      {/* Animated divider */}
      <div className="relative w-full h-[1px] bg-white/10 overflow-hidden">
        <div className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/35 to-transparent line-sheen-sweep-delayed" />
      </div>

      {/* Perché Section */}
      <section id="perche" className="py-20 md:py-28 px-5 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
              Perché abitudini e respiro
            </h2>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed font-normal max-w-3xl">
              Respirare è l'azione automatica più frequente che facciamo ogni
              giorno, e lo facciamo tutti (si spera). Usiamo il respiro come
              base per capire il funzionamento del nostro pilota automatico e
              applicare metodi di behaviour change che possano scalare su altri
              comportamenti da modificare: camminare di più, mangiare più sano,
              dormire meglio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative group overflow-hidden bg-[#090c10]/75 border border-white/10 hover:border-white/25 rounded-2xl p-7 flex flex-col items-center text-center justify-center transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-[1.5px] card-specular-edge" />
              <h3 className="text-lg font-semibold text-white mb-3 text-center">
                I tuoi goal
              </h3>
              <p className="text-sm text-white/70 leading-relaxed font-normal text-center">
                Hai degli obiettivi che vorresti raggiungere, ma è difficile
                uscire dall'automatismo e ricordarsi di lavorarci ogni giorno
              </p>
            </div>

            <div className="relative group overflow-hidden bg-[#090c10]/75 border border-white/10 hover:border-white/25 rounded-2xl p-7 flex flex-col items-center text-center justify-center transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-[1.5px] card-specular-edge" />
              <h3 className="text-lg font-semibold text-white mb-3 text-center">
                Il respiro
              </h3>
              <p className="text-sm text-white/70 leading-relaxed font-normal text-center">
                Respirare è automatico, ma è l'unica funzione automatica che
                possiamo prendere in mano: per questo è il punto d'ingresso per
                cambiare tutto il resto.
              </p>
            </div>

            <div className="relative group overflow-hidden bg-[#090c10]/75 border border-white/10 hover:border-white/25 rounded-2xl p-7 flex flex-col items-center text-center justify-center transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-[1.5px] card-specular-edge" />
              <h3 className="text-lg font-semibold text-white mb-3 text-center">
                Le abitudini
              </h3>
              <p className="text-sm text-white/70 leading-relaxed font-normal text-center">
                Non possiamo agire sul risultato: possiamo agire sul
                comportamento che ci porta al risultato.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Animated divider */}
      <div className="relative w-full h-[1px] bg-white/10 overflow-hidden">
        <div className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/35 to-transparent line-sheen-sweep" />
      </div>

      {/* Provalo adesso - Breathing Sphere Section */}
      <BreathingSection />

      {/* Animated divider */}
      <div className="relative w-full h-[1px] bg-white/10 overflow-hidden">
        <div className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/35 to-transparent line-sheen-sweep-delayed" />
      </div>

      {/* Contrasting Highlight Ribbon */}
      <section className="w-full bg-[#d5d9df] text-[#090c10] py-12 sm:py-16 md:py-20 px-5 sm:px-8 relative z-10 shadow-lg border-y border-black/5">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-title text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-[#090c10] text-balance leading-snug">
            I tuoi comportamenti di oggi creano il te di domani
          </p>
        </div>
      </section>

      {/* I prossimi loop Section */}
      <section
        id="prossimi-loop"
        className="scroll-mt-16 py-20 md:py-28 px-5 sm:px-8"
      >
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white mb-3">
              I prossimi loop
            </h2>
            <p className="text-base sm:text-lg text-white/70 font-normal max-w-2xl">
              Scegli il prossimo appuntamento dal vivo o online e riserva il tuo
              posto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {UPCOMING_LOOPS.map((event) => (
              <div
                key={event.href}
                className="relative group overflow-hidden bg-[#090c10]/75 border border-white/10 hover:border-white/25 rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300"
              >
                <div className="absolute top-0 left-0 right-0 h-[1.5px] card-specular-edge" />
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white/60 mb-4">
                    <Calendar className="w-3.5 h-3.5 text-white/70 shrink-0" />
                    <span className="tabular-nums">{event.date}</span>
                    <span aria-hidden="true">·</span>
                    <span>{event.format}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6 leading-snug text-balance">
                    {event.title}
                  </h3>
                </div>

                <div>
                  <a
                    href={event.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium text-sm tracking-wide border-2 border-white hover:bg-transparent hover:text-white transition-all duration-200 whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
                  >
                    <span>Registrati qui</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Animated divider */}
      <div className="relative w-full h-[1px] bg-white/10 overflow-hidden">
        <div className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/35 to-transparent line-sheen-sweep" />
      </div>

      {/* Chi siamo Section */}
      <section
        id="chi-siamo"
        className="scroll-mt-16 py-20 md:py-28 px-5 sm:px-8"
      >
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white">
              Chi siamo
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Valentina Palazzo */}
            <div className="relative group overflow-hidden bg-[#080b0f]/80 border border-white/10 hover:border-white/25 rounded-2xl p-6 sm:p-8 flex flex-col transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-[1.5px] card-specular-edge" />
              <div className="w-full aspect-[2/3] bg-[#0b0e14] border border-white/15 rounded-xl mb-6 overflow-hidden relative shadow-lg">
                <img
                  src={valImg}
                  alt="Valentina Palazzo - behavioural designer al tavolo di lavoro del workshop"
                  className="w-full h-full object-cover object-bottom group-hover:scale-[1.01] transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = '/asset/Valentina.webp';
                  }}
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Valentina Palazzo
              </h3>
              <p className="text-sm text-white/75 leading-relaxed font-normal">
                Behavioural Designer e CEO. Usa behavioural design e
                gamification per costruire abitudini che reggono.
              </p>
            </div>

            {/* Gabriele Papparella */}
            <div className="relative group overflow-hidden bg-[#080b0f]/80 border border-white/10 hover:border-white/25 rounded-2xl p-6 sm:p-8 flex flex-col transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-[1.5px] card-specular-edge" />
              <div className="w-full aspect-[2/3] bg-[#0b0e14] border border-white/15 rounded-xl mb-6 overflow-hidden relative shadow-lg">
                <img
                  src={gabImg}
                  alt="Gabriele Papparella - istruttore avanzato Oxygen Advantage, coach di longevity e breathwork"
                  className="w-full h-full object-cover object-top group-hover:scale-[1.01] transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = '/asset/Gabriele.PNG';
                  }}
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Gabriele Papparella
              </h3>
              <p className="text-sm text-white/75 leading-relaxed font-normal">
                Istruttore avanzato Oxygen Advantage. Coach del respiro,
                Performance & Longevità
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Animated divider */}
      <div className="relative w-full h-[1px] bg-white/10 overflow-hidden">
        <div className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/35 to-transparent line-sheen-sweep" />
      </div>

      {/* Instagram Video & Posts Section */}
      <section
        id="instagram"
        className="scroll-mt-16 py-20 md:py-28 px-5 sm:px-8"
      >
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white mb-3">
              Video e post da Instagram
            </h2>
            <p className="text-base sm:text-lg text-white/70 font-normal max-w-2xl">
              Pillole pratiche, esercizi di respirazione e spunti di behaviour
              change direttamente dai nostri profili.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {INSTAGRAM_POSTS.map((item) => (
              <div
                key={item.url}
                className="relative group overflow-hidden bg-[#080b0f]/80 border border-white/10 hover:border-white/25 rounded-2xl p-4 sm:p-5 flex flex-col transition-all duration-300"
              >
                <div className="absolute top-0 left-0 right-0 h-[1.5px] card-specular-edge" />
                <div className="flex items-center justify-between gap-4 mb-4 px-1">
                  <div className="flex items-center gap-2 text-xs font-mono text-white/70 min-w-0">
                    <Instagram className="w-3.5 h-3.5 text-white/70 shrink-0" />
                    <span className="truncate">{item.author}</span>
                    <span aria-hidden="true">·</span>
                    <span className="shrink-0">{item.type}</span>
                  </div>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-white/60 hover:text-white transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded-full px-2 py-0.5"
                  >
                    <span>Apri</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="w-full overflow-hidden rounded-xl border border-white/15 bg-white">
                  <iframe
                    src={item.embedUrl}
                    title={`${item.author} - ${item.type} Instagram`}
                    className="w-full h-[500px] sm:h-[540px] border-0 block"
                    loading="lazy"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Animated divider */}
      <div className="relative w-full h-[1px] bg-white/10 overflow-hidden">
        <div className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/35 to-transparent line-sheen-sweep-delayed" />
      </div>

      {/* Brochure Section */}
      <section id="brochure" className="py-20 md:py-28 px-5 sm:px-8">
        <div className="relative overflow-hidden max-w-4xl mx-auto bg-[#080b0f]/80 border border-white/10 rounded-2xl p-8 sm:p-12 text-center">
          <div className="absolute top-0 left-0 right-0 h-[1.5px] card-specular-edge" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white mb-8">
            Scarica la brochure del workshop
          </h2>
          <div className="inline-flex flex-col items-center">
            <a
              href="/LO%20OP%20%C2%B7%20Brochure.pdf"
              download="LO OP · Brochure.pdf"
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-white text-black font-medium text-sm tracking-wide border-2 border-white hover:bg-transparent hover:text-white transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
            >
              <FileDown className="w-4 h-4" />
              <span>Scarica il PDF</span>
            </a>
          </div>
        </div>
      </section>

      {/* Animated divider */}
      <div className="relative w-full h-[1px] bg-white/10 overflow-hidden">
        <div className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/35 to-transparent line-sheen-sweep" />
      </div>

      {/* Contatti Section */}
      <section id="contatti" className="py-20 md:py-28 px-5 sm:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="mb-10 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white mb-3">
              Scrivici
            </h2>
            <p className="text-sm text-white/60 font-normal">
              Scrivici per ricevere informazioni su posti e disponibilità per i
              prossimi moduli.
            </p>
          </div>

          {isSuccess ? (
            <div className="relative overflow-hidden bg-[#080b0f]/85 border border-white/20 rounded-2xl p-8 sm:p-10 text-center">
              <div className="absolute top-0 left-0 right-0 h-[1.5px] card-specular-edge" />
              <div className="w-11 h-11 rounded-full border border-white mx-auto flex items-center justify-center mb-4">
                <Check className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Richiesta inviata con successo
              </h3>
              <p className="text-sm text-white/70 max-w-md mx-auto mb-6 leading-relaxed font-normal">
                Grazie {formData.nome}, il tuo messaggio è stato inoltrato a
                Valentina Palazzo. Ti risponderemo all'indirizzo {formData.email}{' '}
                con tutti i dettagli.
              </p>
              <button
                type="button"
                onClick={() => {
                  setIsSuccess(false);
                  setFormData({
                    nome: '',
                    email: '',
                    messaggio: '',
                    privacy: false,
                  });
                }}
                className="text-xs text-white/60 hover:text-white underline underline-offset-4"
              >
                Invia un'altra richiesta
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div>
                <label
                  htmlFor="contact-nome"
                  className="block text-xs text-white/80 mb-2 uppercase tracking-wider font-medium"
                >
                  Nome <span className="text-white/40">*</span>
                </label>
                <input
                  id="contact-nome"
                  type="text"
                  value={formData.nome}
                  onChange={(e) => {
                    setFormData({ ...formData, nome: e.target.value });
                    if (errors.nome) setErrors({ ...errors, nome: '' });
                  }}
                  placeholder="Nome e cognome"
                  className="w-full bg-[#0a0d12] border border-white/20 focus:border-white rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus-visible:outline-none transition-colors"
                />
                {errors.nome && (
                  <p className="text-xs text-white/80 mt-1.5">{errors.nome}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-xs text-white/80 mb-2 uppercase tracking-wider font-medium"
                >
                  Email <span className="text-white/40">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: '' });
                  }}
                  placeholder="nome@dominio.it"
                  className="w-full bg-[#0a0d12] border border-white/20 focus:border-white rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus-visible:outline-none transition-colors"
                />
                {errors.email && (
                  <p className="text-xs text-white/80 mt-1.5">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="contact-messaggio"
                  className="block text-xs text-white/80 mb-2 uppercase tracking-wider font-medium"
                >
                  Messaggio{' '}
                  <span className="text-white/40">(opzionale)</span>
                </label>
                <textarea
                  id="contact-messaggio"
                  rows={4}
                  value={formData.messaggio}
                  onChange={(e) =>
                    setFormData({ ...formData, messaggio: e.target.value })
                  }
                  placeholder="Domande specifiche, obiettivi o moduli di interesse..."
                  className="w-full bg-[#0a0d12] border border-white/20 focus:border-white rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus-visible:outline-none transition-colors resize-y"
                />
              </div>

              <div className="pt-2">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={formData.privacy}
                    onChange={(e) => {
                      setFormData({ ...formData, privacy: e.target.checked });
                      if (errors.privacy) setErrors({ ...errors, privacy: '' });
                    }}
                    className="mt-0.5 h-4 w-4 rounded-md bg-[#0a0d12] border border-white/30 checked:bg-white checked:border-white focus:ring-0 focus:outline-none cursor-pointer"
                  />
                  <span className="text-xs text-white/70 leading-relaxed group-hover:text-white/90 transition-colors">
                    Dichiaro di aver letto la{' '}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setCookieModalOpen(true);
                      }}
                      className="underline underline-offset-2 hover:text-white"
                    >
                      privacy e cookie policy
                    </button>{' '}
                    e acconsento al trattamento dei dati personali per ricevere
                    informazioni sul workshop LO/OP.
                  </span>
                </label>
                {errors.privacy && (
                  <p className="text-xs text-white/80 mt-1.5">
                    {errors.privacy}
                  </p>
                )}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-full bg-white text-black font-semibold text-sm tracking-wide border-2 border-white hover:bg-transparent hover:text-white transition-all duration-200 flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <LoaderCircle className="w-4 h-4 animate-spin" />
                      <span>Inoltro in corso...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Invia</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#040608]/90 py-16 px-5 sm:px-8 mt-auto">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-white/10">
            <div>
              <span className="font-title text-base font-bold tracking-wider text-white">
                LO/OP
              </span>
              <p className="font-title text-xs text-white/50 mt-0.5">
                Longevity Optimized
              </p>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-xs text-white/60 tracking-wide font-medium">
                Seguici:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  aria-label="Seguici su Instagram [URL da inserire]"
                  className="p-2.5 rounded-full border border-white/20 text-white/80 hover:text-white hover:border-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  aria-label="Seguici su LinkedIn [URL da inserire]"
                  className="p-2.5 rounded-full border border-white/20 text-white/80 hover:text-white hover:border-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  aria-label="Seguici su YouTube [URL da inserire]"
                  className="p-2.5 rounded-full border border-white/20 text-white/80 hover:text-white hover:border-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="text-xs text-white/50 leading-relaxed max-w-3xl border-l border-white/20 pl-4 py-1">
            <p>
              Contenuti a scopo educativo, non sostituiscono il parere medico.
              Alcune pratiche di respirazione non sono adatte a tutti (es.
              gravidanza, epilessia, problemi cardiovascolari): in caso di dubbi
              chiedi al tuo medico.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-4 border-t border-white/10 font-mono text-xs text-white/50">
            <div>© LO/OP {new Date().getFullYear()}</div>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <span>Valentina Palazzo - P.IVA: 13006440013</span>
              <span className="hidden sm:inline opacity-30">·</span>
              <span>Gabriele Papparella - P.IVA: 02982530301</span>
            </div>
            <div>
              <button
                type="button"
                onClick={() => setCookieModalOpen(true)}
                className="hover:text-white transition-colors underline underline-offset-2"
              >
                cookie policy
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Cookie & Privacy Policy Modal */}
      {cookieModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-modal-title"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div className="bg-[#0b0e14] border border-white/20 rounded-2xl max-w-md w-full p-6 sm:p-8 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/15 pb-3">
              <h3
                id="cookie-modal-title"
                className="font-semibold text-white text-base"
              >
                Informativa Cookie & Privacy
              </h3>
              <button
                type="button"
                onClick={() => setCookieModalOpen(false)}
                className="text-white/60 hover:text-white p-1 rounded-full"
                aria-label="Chiudi finestra modale"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="text-xs text-white/75 space-y-3 leading-relaxed">
              <p>
                Questo sito utilizza esclusivamente cookie tecnici necessari al
                corretto funzionamento e alla navigazione delle sezioni.
              </p>
              <p>
                Nessun dato di tracciamento o cookie di profilazione di terze
                parti viene installato. I dati inseriti nel modulo di contatto
                sono inoltrati per esclusiva finalità di risposta alle richieste
                informative sul workshop LO/OP a vale.palazzo@gmail.com.
              </p>
              <p className="font-mono text-[11px] text-white/50">
                Valentina Palazzo - P.IVA: 13006440013 · Gabriele Papparella -
                P.IVA: 02982530301
              </p>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => setCookieModalOpen(false)}
                className="px-6 py-2 rounded-full bg-white text-black text-xs font-medium hover:bg-white/80 transition-colors font-mono"
              >
                Chiudi
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
