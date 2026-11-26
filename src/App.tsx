import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import HeroSection from './components/HeroSection';
import LetterAndMoments from './components/LetterAndMoments';
import GardenAndEnvelopes from './components/GardenAndEnvelopes';
import SillyButtonAndCertificate from './components/SillyButtonAndCertificate';
import FinalSunsetSection from './components/FinalSunsetSection';
import { PeekingBunnySvg } from './components/CuteIllustrations';

const AMBIENT_PETALS = [
  { id: 1, left: '7%', duration: '13s', delay: '0s', emoji: '🌸' },
  { id: 2, left: '22%', duration: '16s', delay: '3s', emoji: '🌷' },
  { id: 3, left: '41%', duration: '14s', delay: '6s', emoji: '🌼' },
  { id: 4, left: '65%', duration: '17s', delay: '1.5s', emoji: '🌸' },
  { id: 5, left: '84%', duration: '15s', delay: '4.5s', emoji: '🌱' },
  { id: 6, left: '93%', duration: '18s', delay: '7.5s', emoji: '🌼' },
];

const SURPRISE_ITEMS = Array.from({ length: 34 }).map((_, i) => {
  const icons = ['🌷', '🌼', '🌸', '💗', '✨', '🐰', '🎀', '🐇'];
  return {
    id: i,
    icon: icons[i % icons.length],
    left: `${(i * 3.1 + (i % 3) * 4) % 95}%`,
    delay: (i % 7) * 0.16,
    duration: 2.8 + (i % 4) * 0.65,
    size: i % 3 === 0 ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl',
    rotate: i % 2 === 0 ? 22 : -22,
  };
});

export default function App() {
  const [surpriseActive, setSurpriseActive] = useState(false);

  const scrollToLetter = () => {
    const el = document.getElementById('letter');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const triggerSurprise = () => {
    setSurpriseActive(true);
  };

  useEffect(() => {
    if (!surpriseActive) return;
    const timer = setTimeout(() => {
      setSurpriseActive(false);
    }, 6500);
    return () => clearTimeout(timer);
  }, [surpriseActive]);

  return (
    <div className="relative min-h-screen paper-texture text-[#4A352F] selection:bg-[#FFD6E0] selection:text-[#4A352F]">
      {/* Subtle Ambient Falling Petals */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-30 overflow-hidden opacity-60"
      >
        {AMBIENT_PETALS.map((petal) => (
          <span
            key={petal.id}
            className="animate-petal absolute -top-10 text-base sm:text-lg select-none"
            style={{
              left: petal.left,
              animationDuration: petal.duration,
              animationDelay: petal.delay,
            }}
          >
            {petal.emoji}
          </span>
        ))}
      </div>

      {/* Main Single-Page Experience */}
      <main>
        <HeroSection onExplore={scrollToLetter} />
        <LetterAndMoments />
        <GardenAndEnvelopes />
        <SillyButtonAndCertificate />
        <FinalSunsetSection
          onTriggerSurprise={triggerSurprise}
          surpriseActive={surpriseActive}
        />
      </main>

      {/* Full-Page Surprise Celebration Overlay */}
      <AnimatePresence>
        {surpriseActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 pointer-events-none overflow-hidden"
          >
            {/* Shower of flowers, hearts, sparkles, and bunnies */}
            {SURPRISE_ITEMS.map((item) => (
              <motion.span
                key={item.id}
                initial={{ y: '-12vh', opacity: 0, scale: 0.6 }}
                animate={{
                  y: '112vh',
                  opacity: [0, 1, 1, 0.8, 0],
                  scale: [0.7, 1.2, 1],
                  rotate: [0, item.rotate, -item.rotate],
                }}
                transition={{
                  duration: item.duration,
                  delay: item.delay,
                  ease: 'easeIn',
                }}
                style={{ left: item.left }}
                className={`absolute top-0 select-none ${item.size}`}
              >
                {item.icon}
              </motion.span>
            ))}

            {/* Bouncing little bunnies popping up along the bottom */}
            <div className="absolute bottom-0 inset-x-0 flex items-end justify-around px-4">
              <motion.div
                initial={{ y: 120 }}
                animate={{ y: [120, 0, -10, 0] }}
                exit={{ y: 120 }}
                transition={{ duration: 0.6 }}
              >
                <PeekingBunnySvg className="w-20 h-16 sm:w-28 sm:h-22" coatColor="#FFFDF9" />
              </motion.div>
              <motion.div
                initial={{ y: 120 }}
                animate={{ y: [120, 0, -14, 0] }}
                exit={{ y: 120 }}
                transition={{ duration: 0.65, delay: 0.1 }}
              >
                <PeekingBunnySvg className="w-24 h-20 sm:w-32 sm:h-26" coatColor="#F5E4D3" />
              </motion.div>
              <motion.div
                initial={{ y: 120 }}
                animate={{ y: [120, 0, -10, 0] }}
                exit={{ y: 120 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="hidden sm:block"
              >
                <PeekingBunnySvg className="w-24 h-20 sm:w-28 sm:h-22" coatColor="#FFFDF9" />
              </motion.div>
            </div>

            {/* Gentle Floating Thank You Toast + Dismiss */}
            <div className="pointer-events-auto absolute top-6 left-1/2 -translate-x-1/2 flex items-center gap-3 rounded-full bg-[#FFFDF9]/95 px-5 py-2.5 shadow-lg border-2 border-[#FFD6E0]">
              <span className="font-hand text-2xl font-bold text-[#4A352F] whitespace-nowrap">
                Makasih sudah jadi teman yang seru! 🐰🌷💗
              </span>
              <button
                type="button"
                onClick={() => setSurpriseActive(false)}
                className="px-2.5 py-1 rounded-full bg-[#FFF0F5] hover:bg-[#FFD6E0] text-xs font-semibold text-[#4A352F] cursor-pointer transition-colors"
              >
                ✕
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
