import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ButterflySvg,
  CloudSvg,
  DaisySvg,
  SittingBunnySvg,
  SparkleSvg,
  TulipSvg,
} from './CuteIllustrations';

interface BurstParticle {
  id: number;
  emoji: string;
  x: number;
  y: number;
  rotate: number;
}

const SPARKLES = [
  { id: 1, top: '16%', left: '14%', delay: '0s', color: '#FBBF24' },
  { id: 2, top: '24%', right: '16%', delay: '0.7s', color: '#F472B6' },
  { id: 3, top: '52%', left: '8%', delay: '1.3s', color: '#F59E0B' },
  { id: 4, top: '44%', right: '11%', delay: '0.4s', color: '#FB7185' },
  { id: 5, top: '72%', left: '20%', delay: '1.8s', color: '#A7C4A0' },
  { id: 6, top: '68%', right: '22%', delay: '1.1s', color: '#FBBF24' },
];

export default function HeroSection({ onExplore }: { onExplore: () => void }) {
  const [isJumping, setIsJumping] = useState(false);
  const [bursts, setBursts] = useState<BurstParticle[]>([]);
  const [hasClicked, setHasClicked] = useState(false);

  const handleHeroClick = () => {
    setIsJumping(true);
    setHasClicked(true);

    const emojis = ['💗', '🌷', '🌼', '✨', '🌸', '🐰', '🎀'];
    const now = Date.now();
    const newParticles: BurstParticle[] = Array.from({ length: 16 }).map((_, idx) => {
      const angle = (idx / 16) * Math.PI * 2;
      const dist = 75 + Math.random() * 90;
      return {
        id: now + idx,
        emoji: emojis[idx % emojis.length],
        x: Math.cos(angle) * dist,
        y: Math.sin(angle) * dist - 30,
        rotate: Math.random() * 60 - 30,
      };
    });

    setBursts(newParticles);

    setTimeout(() => setIsJumping(false), 950);
    setTimeout(() => {
      setBursts([]);
      onExplore();
    }, 1050);
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col items-center justify-center px-4 pt-12 pb-16 overflow-hidden bg-gradient-to-b from-[#FFF0F5] via-[#FFFBF5] to-[#FEF9EF]"
    >
      {/* Floating Clouds */}
      <div className="pointer-events-none absolute top-10 left-[6%] opacity-85 animate-cloud">
        <CloudSvg className="w-24 sm:w-32 h-auto" />
      </div>
      <div
        className="pointer-events-none absolute top-16 right-[7%] opacity-80 animate-cloud"
        style={{ animationDelay: '2.5s' }}
      >
        <CloudSvg className="w-20 sm:w-28 h-auto" />
      </div>

      {/* Random Twinkling Sparkles */}
      {SPARKLES.map((sp) => (
        <div
          key={sp.id}
          className="pointer-events-none absolute animate-sparkle"
          style={{
            top: sp.top,
            left: sp.left,
            right: sp.right,
            animationDelay: sp.delay,
          }}
        >
          <SparkleSvg className="w-5 h-5 sm:w-6 sm:h-6" color={sp.color} />
        </div>
      ))}

      {/* Fluttering Butterflies */}
      <div className="pointer-events-none absolute top-28 left-[18%] sm:left-[24%] animate-butterfly">
        <ButterflySvg className="w-9 h-9 sm:w-11 sm:h-11" wingColor="#FFF3C4" accentColor="#FFD6E0" />
      </div>
      <div
        className="pointer-events-none absolute top-36 right-[16%] sm:right-[23%] animate-butterfly"
        style={{ animationDelay: '3.1s' }}
      >
        <ButterflySvg className="w-8 h-8 sm:w-10 sm:h-10" wingColor="#FFD6E0" accentColor="#D8E8D4" />
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto"
      >
        {/* Bunny sitting among swaying flowers */}
        <div className="relative flex items-end justify-center mb-3 pt-4">
          {/* Left swaying flowers */}
          <div className="animate-sway -mr-5 mb-2">
            <TulipSvg className="w-11 h-20 sm:w-14 sm:h-24" petalColor="#FF9EB5" />
          </div>
          <div className="animate-sway-slow -mr-4 mb-1">
            <DaisySvg className="w-10 h-18 sm:w-12 sm:h-20" />
          </div>

          {/* Center Cute Blinking & Jumping Bunny */}
          <div className="relative z-10">
            <SittingBunnySvg className="w-40 h-40 sm:w-48 sm:h-48" isJumping={isJumping} />

            {/* Heart & Flower Burst Overlay */}
            <AnimatePresence>
              {bursts.map((p) => (
                <motion.span
                  key={p.id}
                  initial={{ opacity: 1, scale: 0.4, x: 0, y: 0 }}
                  animate={{ opacity: 0, scale: 1.35, x: p.x, y: p.y, rotate: p.rotate }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.95, ease: 'easeOut' }}
                  className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl sm:text-3xl select-none"
                >
                  {p.emoji}
                </motion.span>
              ))}
            </AnimatePresence>
          </div>

          {/* Right swaying flowers */}
          <div className="animate-sway -ml-4 mb-1">
            <DaisySvg className="w-10 h-18 sm:w-12 sm:h-20" centerColor="#FF9EB5" />
          </div>
          <div className="animate-sway-slow -ml-5 mb-2">
            <TulipSvg className="w-11 h-20 sm:w-14 sm:h-24" petalColor="#FDE68A" petalShade="#F59E0B" />
          </div>
        </div>

        {/* Soft meadow ground curve */}
        <div className="w-64 sm:w-80 h-4 bg-[#D8E8D4]/75 rounded-full -mt-4 mb-7 blur-[1px]" />

        {/* Headline */}
        <h1 className="font-hand text-5xl sm:text-6xl md:text-7xl font-bold text-[#4A352F] tracking-tight leading-tight text-balance mb-3">
          Hi, friend! 🐰🌷
        </h1>

        {/* Subtext */}
        <p className="text-lg sm:text-xl text-[#785A52] font-medium max-w-md mb-8 leading-relaxed">
          Surprise! gw cuma mau bilang kaloooo…
        </p>

        {/* Big Playful CTA Button */}
        <motion.button
          type="button"
          onClick={handleHeroClick}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.96 }}
          className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#FF9EB5] hover:bg-[#F787A4] text-[#4A352F] font-semibold text-base sm:text-lg shadow-[0_8px_24px_rgba(244,114,150,0.28)] border-2 border-[#4A352F]/15 transition-colors cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#FF9EB5]/50"
        >
          <span>Klik kalau kamu mau tahu ♡</span>
          <span className="text-xl transition-transform duration-200 group-hover:scale-125 group-hover:rotate-12">
            🌷
          </span>
        </motion.button>

        {hasClicked && (
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 text-sm text-[#6D8F68] font-medium"
          >
            Yey! Scroll ke bawah sebentar ya… 🐇✨
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}
