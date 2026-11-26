import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DaisySvg, SittingBunnySvg, SparkleSvg, TulipSvg } from './CuteIllustrations';

const GARDEN_MESSAGES = [
  "I'm glad I met you 🌷",
  'Thanks for being here 🐰',
  'Friendship level: 🌷🌷🌷🌷🌷',
  '10/10 would choose you as a friend again.',
  'Please stay weird forever.',
  'Thanks for making ordinary days less boring.',
];

interface GardenFlower {
  id: number;
  type: 'tulip' | 'daisy';
  color?: string;
  shade?: string;
  center?: string;
  positionClass: string;
}

const GARDEN_FLOWERS: GardenFlower[] = [
  {
    id: 1,
    type: 'tulip',
    color: '#FF9EB5',
    shade: '#F47296',
    positionClass: 'top-8 left-[10%] sm:left-[14%]',
  },
  {
    id: 2,
    type: 'daisy',
    center: '#FCD34D',
    positionClass: 'top-14 right-[10%] sm:right-[15%]',
  },
  {
    id: 3,
    type: 'daisy',
    center: '#FF9EB5',
    positionClass: 'bottom-12 left-[8%] sm:left-[12%]',
  },
  {
    id: 4,
    type: 'tulip',
    color: '#FDE68A',
    shade: '#F59E0B',
    positionClass: 'bottom-10 right-[9%] sm:right-[14%]',
  },
  {
    id: 5,
    type: 'tulip',
    color: '#FBCFE8',
    shade: '#EC4899',
    positionClass: 'top-1/2 -translate-y-1/2 left-[4%] sm:left-[7%]',
  },
  {
    id: 6,
    type: 'daisy',
    center: '#A7C4A0',
    positionClass: 'top-1/2 -translate-y-1/2 right-[4%] sm:right-[7%]',
  },
];

interface EnvelopeItem {
  id: string;
  emoji: string;
  label: string;
  tint: string;
  flapTint: string;
  message: string[];
}

const ENVELOPES: EnvelopeItem[] = [
  {
    id: 'sad',
    emoji: '🥺',
    label: "When you're sad",
    tint: 'bg-[#FFF0F5] border-[#FFD6E0]',
    flapTint: '#FFD6E0',
    message: [
      "Hey, it's okay.",
      "You don't have to have everything figured out today.",
      'Take a little break, breathe, and remember that someone is rooting for you. 🐰🌷',
    ],
  },
  {
    id: 'tired',
    emoji: '😴',
    label: "When you're tired",
    tint: 'bg-[#FFF9E6] border-[#FDE68A]',
    flapTint: '#FDE68A',
    message: [
      'Istirahat dulu ya.',
      "Lu udah ngelakuin yang terbaik hari ini, even if it doesn't feel like it.",
      'Minum air, rebahan bentar, dan pelan-pelan aja besok. ☁️🌼',
    ],
  },
  {
    id: 'bad-day',
    emoji: '🌧️',
    label: 'When you had a bad day',
    tint: 'bg-[#F2F8F0] border-[#C6DFC0]',
    flapTint: '#D8E8D4',
    message: [
      'Hari ini boleh kok kalau kerasa berat atau nyebelin.',
      'Kalau mau cerita, gw siap dengerin. Kalau mau diem dulu juga gapapa.',
      "Bad days don't last forever, ya! 🌱✨",
    ],
  },
  {
    id: 'silly',
    emoji: '😂',
    label: 'When you need something silly',
    tint: 'bg-[#FFF0F5] border-[#FBCFE8]',
    flapTint: '#FBCFE8',
    message: [
      'Congratulations!',
      'You have officially been selected as my friend.',
      'Unfortunately, there is no cancellation button.',
      'Good luck. 🐰',
    ],
  },
  {
    id: 'reminder',
    emoji: '🌷',
    label: 'When you need a reminder',
    tint: 'bg-[#FFF9E6] border-[#FDE68A]',
    flapTint: '#FFE3B3',
    message: [
      'Just a little reminder:',
      'Kehadiran lu bikin hari-hari di sekitar lu jadi jauh lebih hangat dan seru.',
      "Makasih udah jadi diri lu sendiri. I'm really glad we're friends! 🌷💗",
    ],
  },
];

export default function GardenAndEnvelopes() {
  const [gardenMessage, setGardenMessage] = useState<string>(
    'Klik bunga-bunga di sekitar kelinci ini ya! 🌸'
  );
  const [msgIndex, setMsgIndex] = useState<number>(0);
  const [sparklingFlowerId, setSparklingFlowerId] = useState<number | null>(null);
  const [tapCount, setTapCount] = useState<number>(0);
  const [openEnvelopeId, setOpenEnvelopeId] = useState<string | null>(null);

  const handleFlowerClick = (flowerId: number) => {
    const nextIdx = (msgIndex + 1 + Math.floor(Math.random() * (GARDEN_MESSAGES.length - 1))) % GARDEN_MESSAGES.length;
    setMsgIndex(nextIdx);
    setGardenMessage(GARDEN_MESSAGES[nextIdx]);
    setSparklingFlowerId(flowerId);
    setTapCount((c) => c + 1);

    setTimeout(() => {
      setSparklingFlowerId((prev) => (prev === flowerId ? null : prev));
    }, 800);
  };

  const selectedEnvelope = ENVELOPES.find((e) => e.id === openEnvelopeId) || null;

  return (
    <>
      {/* SECTION 4: MINI GARDEN */}
      <section id="garden" className="relative py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-sm font-semibold text-[#6D8F68] mb-2">
            Interactive Mini Garden · 🌸🌱
          </span>
          <h2 className="font-hand text-4xl sm:text-5xl font-bold text-[#4A352F] text-balance mb-3">
            Every friendship needs a little garden ♡
          </h2>
          <p className="text-sm sm:text-base text-[#785A52] mb-10">
            Ketuk bunga mana saja untuk memunculkan pesan kecil!
          </p>

          {/* Garden Stage */}
          <div className="relative min-h-[380px] sm:min-h-[420px] rounded-[36px] bg-gradient-to-b from-[#F2F8F0] via-[#EEF7EC] to-[#D8E8D4] border-2 border-[#C2D8BC] shadow-[0_14px_38px_rgba(109,143,104,0.14)] p-6 flex flex-col items-center justify-center overflow-hidden">
            {/* Soft meadow mounds */}
            <div className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 w-[120%] h-28 rounded-[100%] bg-[#C6DFC0]/60" />

            {/* Message Bubble */}
            <AnimatePresence mode="wait">
              <motion.div
                key={gardenMessage + tapCount}
                initial={{ opacity: 0, y: 8, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -6, scale: 0.95 }}
                transition={{ duration: 0.28 }}
                className="relative z-20 mb-4 max-w-sm rounded-2xl bg-[#FFFDF9] px-5 py-3 shadow-sm border-2 border-[#FFD6E0] text-[#4A352F] font-medium text-sm sm:text-base"
              >
                {gardenMessage}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-[#FFFDF9] border-r-2 border-b-2 border-[#FFD6E0] rotate-45" />
              </motion.div>
            </AnimatePresence>

            {/* Center Bunny */}
            <div className="relative z-10 mt-1">
              <SittingBunnySvg className="w-32 h-32 sm:w-40 sm:h-40" />
            </div>

            {/* Interactive Clickable Flowers */}
            {GARDEN_FLOWERS.map((flower) => {
              const isSparkling = sparklingFlowerId === flower.id;

              return (
                <motion.button
                  key={flower.id}
                  type="button"
                  onClick={() => handleFlowerClick(flower.id)}
                  whileHover={{ scale: 1.15, rotate: 6 }}
                  whileTap={{ scale: 0.9, rotate: -10 }}
                  animate={
                    isSparkling
                      ? { rotate: [0, -14, 14, -8, 6, 0], scale: [1, 1.22, 1] }
                      : {}
                  }
                  transition={{ duration: 0.55 }}
                  aria-label={`Klik bunga ${flower.type} nomor ${flower.id}`}
                  className={`absolute ${flower.positionClass} z-20 cursor-pointer p-2 rounded-full focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#FF9EB5]/60`}
                >
                  <div className="relative animate-sway">
                    {flower.type === 'tulip' ? (
                      <TulipSvg
                        className="w-12 h-20 sm:w-14 sm:h-24"
                        petalColor={flower.color}
                        petalShade={flower.shade}
                      />
                    ) : (
                      <DaisySvg
                        className="w-12 h-20 sm:w-14 sm:h-24"
                        centerColor={flower.center}
                      />
                    )}

                    {/* Sparkle Pop */}
                    <AnimatePresence>
                      {isSparkling && (
                        <>
                          <motion.div
                            initial={{ opacity: 0, scale: 0, y: 0 }}
                            animate={{ opacity: 1, scale: 1.2, y: -18, x: -12 }}
                            exit={{ opacity: 0 }}
                            className="pointer-events-none absolute -top-2 left-0"
                          >
                            <SparkleSvg className="w-5 h-5" color="#F59E0B" />
                          </motion.div>
                          <motion.div
                            initial={{ opacity: 0, scale: 0, y: 0 }}
                            animate={{ opacity: 1, scale: 1.1, y: -22, x: 14 }}
                            exit={{ opacity: 0 }}
                            className="pointer-events-none absolute -top-1 right-0"
                          >
                            <SparkleSvg className="w-4 h-4" color="#F47296" />
                          </motion.div>
                        </>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5: OPEN WHEN... */}
      <section id="open-when" className="relative py-20 px-4 sm:px-6 bg-[#FEF9EF]/80">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-sm font-semibold text-[#8C6D63] mb-2">
              Little Envelopes for You · ✉️🎀
            </span>
            <h2 className="font-hand text-4xl sm:text-5xl font-bold text-[#4A352F] text-balance mb-3">
              Open When You Need a Little Smile 💌
            </h2>
            <p className="text-sm sm:text-base text-[#785A52]">
              Pilih salah satu amplop di bawah untuk membukanya.
            </p>
          </div>

          {/* 5 Envelopes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
            {ENVELOPES.map((env) => {
              const isOpen = openEnvelopeId === env.id;

              return (
                <motion.button
                  key={env.id}
                  type="button"
                  onClick={() => setOpenEnvelopeId(isOpen ? null : env.id)}
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className={`relative w-full max-w-xs cursor-pointer rounded-3xl border-2 p-6 text-left shadow-[0_8px_24px_rgba(74,53,47,0.06)] transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#FF9EB5]/50 ${env.tint} ${
                    isOpen ? 'ring-2 ring-[#FF9EB5]' : ''
                  }`}
                >
                  {/* Envelope Visual Top Flap */}
                  <div className="relative h-20 mb-4 rounded-2xl bg-white/80 border border-[#4A352F]/10 overflow-hidden flex items-center justify-center">
                    {/* Flap triangle */}
                    <motion.div
                      animate={{ rotateX: isOpen ? 165 : 0 }}
                      transition={{ duration: 0.45, ease: 'easeInOut' }}
                      style={{
                        transformOrigin: 'top center',
                        backgroundColor: env.flapTint,
                      }}
                      className="absolute inset-x-0 top-0 h-12 rounded-b-[40px] border-b border-[#4A352F]/10"
                    />
                    <motion.span
                      animate={isOpen ? { y: -6, scale: 1.15 } : { y: 2, scale: 1 }}
                      className="relative z-10 text-3xl select-none"
                    >
                      {env.emoji}
                    </motion.span>
                  </div>

                  <p className="font-hand text-2xl font-bold text-[#4A352F] leading-snug">
                    “{env.label}”
                  </p>
                  <p className="mt-1.5 text-xs font-medium text-[#785A52]">
                    {isOpen ? 'Klik untuk tutup amplop' : 'Klik untuk buka surat ✨'}
                  </p>
                </motion.button>
              );
            })}
          </div>

          {/* Opened Letter Reveal Panel */}
          <AnimatePresence mode="wait">
            {selectedEnvelope && (
              <motion.div
                key={selectedEnvelope.id}
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 12, scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                className="mt-10 max-w-2xl mx-auto rounded-[30px] bg-[#FFFDF9] border-2 border-[#FFD6E0] p-7 sm:p-9 shadow-[0_16px_40px_rgba(74,53,47,0.09)] relative"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{selectedEnvelope.emoji}</span>
                    <h3 className="font-hand text-3xl font-bold text-[#4A352F]">
                      {selectedEnvelope.label}
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setOpenEnvelopeId(null)}
                    className="px-3 py-1 rounded-full bg-[#FFF0F5] hover:bg-[#FFD6E0] text-xs font-semibold text-[#4A352F] cursor-pointer transition-colors"
                  >
                    Tutup ✕
                  </button>
                </div>

                <div className="space-y-3 text-base sm:text-[17px] leading-relaxed text-[#5C4033] border-t border-dashed border-[#EAD8CD] pt-4">
                  {selectedEnvelope.message.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
