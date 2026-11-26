import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  FlowerHoldingBunnySvg,
  PeekingBunnySvg,
  RibbonCertificateBunnySvg,
  WashiTape,
} from './CuteIllustrations';

const CELEBRATION_EMOJIS = ['🌷', '🌼', '🌸', '🐰', '💗', '✨', '🎀', '🐇'];

export default function SillyButtonAndCertificate() {
  const [sillyStage, setSillyStage] = useState<number>(0);
  const [stamped, setStamped] = useState<boolean>(false);

  const handleSillyClick = () => {
    setSillyStage((prev) => (prev >= 3 ? 0 : prev + 1));
  };

  const stageText =
    sillyStage === 0
      ? 'Psst… seriusan, jangan diteken ya.'
      : sillyStage === 1
      ? 'I told you not to click it 😭'
      : sillyStage === 2
      ? 'Fine. You win. 🌷'
      : "Here's a flower for you. 🌼";

  const buttonLabel =
    sillyStage === 0
      ? 'Do NOT click this button.'
      : sillyStage === 1
      ? 'Okay… click me again.'
      : sillyStage === 2
      ? 'Click one last time 🌷'
      : 'Yay! Klik lagi kalau mau ulang 🐰';

  return (
    <>
      {/* SECTION 6: THE SILLY BUTTON */}
      <section id="silly-button" className="relative py-20 px-4 sm:px-6 overflow-hidden">
        <div className="max-w-3xl mx-auto">
          <div className="relative rounded-[36px] bg-gradient-to-b from-[#FFF0F5] to-[#FFFDF9] border-2 border-[#FFD6E0] p-8 sm:p-12 text-center shadow-[0_14px_38px_rgba(244,114,150,0.1)] overflow-hidden min-h-[340px] flex flex-col items-center justify-center">
            <span className="text-sm font-semibold text-[#8C6D63] mb-2">
              Totally Serious Warning · 🚨🐰
            </span>

            <AnimatePresence mode="wait">
              <motion.h2
                key={sillyStage}
                initial={{ opacity: 0, y: 8, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="font-hand text-3xl sm:text-5xl font-bold text-[#4A352F] mb-7 text-balance"
              >
                {stageText}
              </motion.h2>
            </AnimatePresence>

            {/* Big Silly Button */}
            <motion.button
              type="button"
              onClick={handleSillyClick}
              whileHover={{ scale: 1.06, rotate: sillyStage === 0 ? -1.5 : 1.5 }}
              whileTap={{ scale: 0.93 }}
              className={`relative z-20 cursor-pointer rounded-full px-8 py-4 text-base sm:text-lg font-bold shadow-[0_10px_24px_rgba(74,53,47,0.12)] border-2 border-[#4A352F]/20 transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#FF9EB5]/60 ${
                sillyStage === 0
                  ? 'bg-[#FF8FAB] hover:bg-[#FB7A9B] text-[#4A352F]'
                  : sillyStage === 1
                  ? 'bg-[#FFF3C4] hover:bg-[#FDE68A] text-[#4A352F]'
                  : sillyStage === 2
                  ? 'bg-[#D8E8D4] hover:bg-[#C6DFC0] text-[#4A352F]'
                  : 'bg-[#FFD6E0] hover:bg-[#FFC2D1] text-[#4A352F]'
              }`}
            >
              {buttonLabel}
            </motion.button>

            {/* Bunny popping up from bottom holding a flower (Stage >= 1) */}
            <AnimatePresence>
              {sillyStage >= 1 && (
                <motion.div
                  initial={{ y: 120, opacity: 0 }}
                  animate={{ y: 16, opacity: 1 }}
                  exit={{ y: 120, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                  className="pointer-events-none mt-4 relative z-10 flex items-end justify-center gap-4"
                >
                  <FlowerHoldingBunnySvg className="w-28 h-32 sm:w-32 sm:h-36" />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Lots of flowers and little bunnies bursting on Stage 3 */}
            <AnimatePresence>
              {sillyStage === 3 && (
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                  {Array.from({ length: 14 }).map((_, i) => {
                    const leftPct = 6 + ((i * 7.1) % 88);
                    const delay = (i % 5) * 0.08;
                    const emoji = CELEBRATION_EMOJIS[i % CELEBRATION_EMOJIS.length];
                    return (
                      <motion.span
                        key={i}
                        initial={{ y: 260, opacity: 0, scale: 0.5 }}
                        animate={{
                          y: [-10, -170 - (i % 4) * 30],
                          opacity: [0, 1, 1, 0],
                          scale: [0.6, 1.25, 1],
                          rotate: [0, i % 2 === 0 ? 18 : -18],
                        }}
                        transition={{ duration: 2.2, delay, ease: 'easeOut' }}
                        style={{ left: `${leftPct}%`, bottom: '10%' }}
                        className="absolute text-2xl sm:text-3xl select-none"
                      >
                        {emoji}
                      </motion.span>
                    );
                  })}

                  <motion.div
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 8, opacity: 1 }}
                    transition={{ delay: 0.15, type: 'spring' }}
                    className="absolute bottom-0 left-4 sm:left-10"
                  >
                    <PeekingBunnySvg className="w-16 h-14 sm:w-20 sm:h-16" coatColor="#F5E4D3" />
                  </motion.div>

                  <motion.div
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 8, opacity: 1 }}
                    transition={{ delay: 0.25, type: 'spring' }}
                    className="absolute bottom-0 right-4 sm:right-10"
                  >
                    <PeekingBunnySvg className="w-16 h-14 sm:w-20 sm:h-16" coatColor="#FFFDF9" />
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* SECTION 7: FRIENDSHIP CERTIFICATE */}
      <section id="certificate" className="relative py-20 px-4 sm:px-6 bg-[#FEF9EF]/70">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
            className="relative rounded-[32px] bg-[#FFFDF9] border-4 border-double border-[#E5B94C] p-6 sm:p-12 shadow-[0_18px_48px_rgba(74,53,47,0.09)]"
          >
            {/* Washi Tape Corners */}
            <WashiTape className="absolute -top-3.5 left-10" color="#FFF3C4" rotate={-7} />
            <WashiTape className="absolute -top-3.5 right-10" color="#FFD6E0" rotate={6} />

            {/* Inner Scallop / Dashed Frame */}
            <div className="rounded-[24px] border-2 border-dashed border-[#FFD6E0] p-6 sm:p-10 text-center">
              <div className="text-xs font-semibold tracking-widest uppercase text-[#8C6D63] mb-2">
                Award of Wholesome Friendship · 🎀
              </div>

              <h2 className="font-hand text-4xl sm:text-5xl font-bold text-[#4A352F] mb-6 text-balance">
                Official Friendship Certificate
              </h2>

              <p className="text-sm sm:text-base text-[#785A52] mb-3">
                This certificate proudly confirms that:
              </p>

              {/* Recipient Name */}
              <div className="my-4 inline-block px-6 py-2 rounded-2xl bg-[#FFF0F5] border border-[#FFD6E0]">
                <p className="font-hand text-4xl sm:text-5xl font-bold text-[#4A352F]">
                  Adzan My Ndut
                </p>
              </div>

              <p className="text-base sm:text-lg text-[#5C4033] font-medium mt-2 mb-8">
                has successfully become my friend.
              </p>

              {/* Certificate Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto mb-8 text-left">
                <div className="rounded-2xl bg-[#FFF9E6] border border-[#FDE68A] p-4">
                  <p className="text-xs font-semibold text-[#8C6D63] mb-1">Friendship status:</p>
                  <p className="text-xl font-bold text-[#D97706] tracking-wider">★★★★★</p>
                </div>

                <div className="rounded-2xl bg-[#F2F8F0] border border-[#C6DFC0] p-4">
                  <p className="text-xs font-semibold text-[#6D8F68] mb-1">
                    Officially certified as:
                  </p>
                  <p className="text-base sm:text-lg font-bold text-[#4A352F]">
                    A Very Cool Human™
                  </p>
                </div>
              </div>

              {/* Footer Row with Date and Bunny Seal */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-5 border-t border-dashed border-[#EAD8CD]">
                <div className="text-center sm:text-left">
                  <p className="text-xs font-semibold text-[#8C6D63]">Tanggal Diterbitkan</p>
                  <p className="font-hand text-2xl sm:text-3xl font-bold text-[#4A352F]">
                    Thu 26 November 2026 ♡
                  </p>
                </div>

                {/* Clickable Ribbon Bunny Seal */}
                <motion.button
                  type="button"
                  onClick={() => setStamped((prev) => !prev)}
                  whileHover={{ scale: 1.07, rotate: 4 }}
                  whileTap={{ scale: 0.94 }}
                  title="Klik stempel kelinci"
                  className="relative cursor-pointer flex flex-col items-center focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#FDE68A] rounded-full p-1"
                >
                  <RibbonCertificateBunnySvg className="w-24 h-24 sm:w-28 sm:h-28" />
                  <span className="text-[11px] font-semibold text-[#8C6D63] -mt-1">
                    {stamped ? 'Bestie Verified! 🐾💗' : 'Tap stempel kelinci 🎀'}
                  </span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
