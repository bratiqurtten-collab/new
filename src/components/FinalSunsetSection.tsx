import React from 'react';
import { motion } from 'motion/react';
import { DaisySvg, SunsetBunnyPairSvg, TulipSvg } from './CuteIllustrations';

export default function FinalSunsetSection({
  onTriggerSurprise,
  surpriseActive,
}: {
  onTriggerSurprise: () => void;
  surpriseActive: boolean;
}) {
  return (
    <section
      id="final"
      className="relative py-24 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-[#FEF9EF] via-[#FFE5EC] to-[#FAD4C0]"
    >
      {/* Warm Sunset Glow Orb */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-14 left-1/2 -translate-x-1/2 w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-b from-[#FFF3C4]/85 via-[#FFD6A5]/65 to-transparent blur-xl"
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
        {/* Two Bunnies Sitting Side by Side Amid Sunset Flowers */}
        <div className="relative flex items-end justify-center mb-6">
          <div className="animate-sway -mr-6 mb-2 hidden sm:block">
            <TulipSvg className="w-12 h-20" petalColor="#FF9EB5" />
          </div>
          <div className="animate-sway-slow -mr-4 mb-1">
            <DaisySvg className="w-10 h-16" centerColor="#F59E0B" />
          </div>

          <SunsetBunnyPairSvg className="w-56 h-38 sm:w-68 sm:h-44 relative z-10" />

          <div className="animate-sway -ml-4 mb-1">
            <DaisySvg className="w-10 h-16" centerColor="#FF9EB5" />
          </div>
          <div className="animate-sway-slow -ml-6 mb-2 hidden sm:block">
            <TulipSvg className="w-12 h-20" petalColor="#FDE68A" petalShade="#F59E0B" />
          </div>
        </div>

        {/* Sunset Closing Copy */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="space-y-4 max-w-xl"
        >
          <p className="text-base sm:text-lg text-[#6B4B42] font-medium">
            That&apos;s all I wanted to say…
          </p>

          <h2 className="font-hand text-4xl sm:text-5xl md:text-6xl font-bold text-[#4A352F] text-balance leading-tight">
            Thank you for choosing to be my friend. ♡
          </h2>

          <p className="text-lg sm:text-xl text-[#5C4033] font-medium">
            Let&apos;s make more silly memories together, okay?
          </p>

          <p className="pt-2 font-hand text-2xl sm:text-3xl text-[#785A52]">
            From your slightly weird friend 🐰🌷
          </p>
        </motion.div>

        {/* One Last Surprise Button */}
        <motion.button
          type="button"
          onClick={onTriggerSurprise}
          whileHover={{ scale: 1.06, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#FFFDF9] hover:bg-[#FFF0F5] text-[#4A352F] font-bold text-base sm:text-lg shadow-[0_12px_30px_rgba(74,53,47,0.14)] border-2 border-[#FF9EB5] cursor-pointer transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#FF9EB5]/60"
        >
          <span>{surpriseActive ? 'Lagi hujan bunga & kelinci! 🌸🐰' : 'One last surprise ♡'}</span>
        </motion.button>
      </div>
    </section>
  );
}
