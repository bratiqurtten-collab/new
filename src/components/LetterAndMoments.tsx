import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  FlowerHoldingBunnySvg,
  PeekingBunnySvg,
  SparkleSvg,
  WashiTape,
} from './CuteIllustrations';

interface InteractiveWordProps {
  children: React.ReactNode;
  reaction: string;
  highlightClass?: string;
}

function InteractiveWord({
  children,
  reaction,
  highlightClass = 'bg-[#FFEBF0] text-[#4A352F] border-b-2 border-[#FF9EB5]',
}: InteractiveWordProps) {
  const [popId, setPopId] = useState<number | null>(null);

  const handleTrigger = () => {
    setPopId(Date.now());
    setTimeout(() => setPopId(null), 1100);
  };

  return (
    <span className="relative inline-block mx-0.5">
      <motion.button
        type="button"
        onClick={handleTrigger}
        whileHover={{ scale: 1.07, rotate: -1.5 }}
        whileTap={{ scale: 0.94 }}
        className={`inline-block px-1.5 py-0.5 rounded-md font-semibold cursor-pointer transition-colors ${highlightClass}`}
      >
        {children}
      </motion.button>
      <AnimatePresence>
        {popId !== null && (
          <motion.span
            key={popId}
            initial={{ opacity: 0, y: 4, scale: 0.7 }}
            animate={{ opacity: 1, y: -26, scale: 1.08 }}
            exit={{ opacity: 0, y: -38, scale: 0.8 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-2 z-20 whitespace-nowrap rounded-full bg-[#FFF3C4] px-2.5 py-0.5 text-xs font-semibold text-[#4A352F] shadow-sm border border-[#4A352F]/10"
          >
            {reaction}
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}

interface MomentCard {
  id: number;
  emoji: string;
  title: string;
  paragraphs: string[];
  note: string;
  bgTint: string;
  borderTint: string;
  petalShape: string;
  coatColor: string;
}

const FRIENDSHIP_CARDS: MomentCard[] = [
  {
    id: 1,
    emoji: '🐰',
    title: 'Random Talks',
    paragraphs: [
      'Gw suka banget sama obrolan random kita.',
      'Kadang awalnya cuma ngomongin satu hal, tau-tau udah pindah ke lima topik yang nggak ada hubungannya 😭',
      'Tapi anehnya selalu nyambung.',
      'Dari obrolan nggak penting sampai cerita yang tiba-tiba serius, semuanya somehow jadi seru kalau sama lu.',
    ],
    note: 'hehe 🐰',
    bgTint: 'bg-[#FFF0F5]',
    borderTint: 'border-[#FFD6E0]',
    petalShape: 'rounded-[32px_48px_36px_44px]',
    coatColor: '#FFFDF9',
  },
  {
    id: 2,
    emoji: '🌷',
    title: 'Little Moments',
    paragraphs: [
      'Kadang yang paling gw inget justru bukan hal-hal besar.',
      'Tapi obrolan kecil, ketawa random, saling ngejek, atau momen ketika kita cuma duduk dan nggak ngapa-ngapain.',
      'Hal-hal kecil kayak gitu ternyata bisa jadi kenangan yang bikin gw senyum sendiri. 🌷',
    ],
    note: 'iyaa, ini beneran',
    bgTint: 'bg-[#FFF9E6]',
    borderTint: 'border-[#FDE68A]',
    petalShape: 'rounded-[44px_32px_46px_34px]',
    coatColor: '#F5E4D3',
  },
  {
    id: 3,
    emoji: '🌼',
    title: 'Laughs',
    paragraphs: [
      'Gw nggak ngerti kenapa kita bisa ketawa selama itu cuma gara-gara sesuatu yang sebenarnya nggak lucu.',
      'Kadang malah makin dilarang ketawa, makin nggak bisa berhenti. 😭',
      'Mungkin humor kita memang agak rusak.',
      'Tapi yaudah, yang penting kita bahagia. 🐰',
    ],
    note: 'jangan geer dulu 😭',
    bgTint: 'bg-[#F2F8F0]',
    borderTint: 'border-[#C6DFC0]',
    petalShape: 'rounded-[38px_46px_32px_44px]',
    coatColor: '#FFFDF9',
  },
  {
    id: 4,
    emoji: '🎀',
    title: 'Just Being Us',
    paragraphs: [
      'Gw suka karena sama lu gw nggak perlu terlalu mikirin harus keliatan kayak gimana.',
      'Bisa ngomong random. Bisa jadi aneh. Bisa bercanda receh. Bisa diem. Bisa jadi diri sendiri.',
      'Dan itu nyaman. Thank you for making friendship feel easy. 🎀',
    ],
    note: "you know it's true 🌷",
    bgTint: 'bg-[#FFF0F5]',
    borderTint: 'border-[#FBCFE8]',
    petalShape: 'rounded-[46px_34px_42px_36px]',
    coatColor: '#F3DEC9',
  },
  {
    id: 5,
    emoji: '🦋',
    title: 'Thanks for Listening',
    paragraphs: [
      'Kadang gw cuma butuh seseorang buat dengerin cerita gw tanpa harus langsung kasih solusi.',
      'Dan makasih karena lu mau dengerin.',
      'Walaupun ceritanya kadang panjang, random, muter-muter, dan mungkin bikin lu mikir: “Ini orang sebenarnya mau cerita apa sih?” 😭',
      'Makasih udah tetap dengerin.',
    ],
    note: 'friendship approved!',
    bgTint: 'bg-[#FFF9E6]',
    borderTint: 'border-[#FDE68A]',
    petalShape: 'rounded-[34px_44px_38px_46px]',
    coatColor: '#FFFDF9',
  },
  {
    id: 6,
    emoji: '🌱',
    title: 'Growing Together',
    paragraphs: [
      'Kayaknya seru ya kalau suatu hari nanti kita bisa lihat ke belakang dan bilang, “Gila, ternyata kita udah sejauh ini.”',
      'Semoga nanti kita masih bisa saling cerita tentang hidup masing-masing, ketawa soal hal-hal random, dan saling support meskipun hidup kita terus berubah.',
      'Nggak harus selalu bareng setiap saat. Yang penting, semoga pertemanan ini tetap punya tempat kecil di hidup kita. 🌱',
    ],
    note: 'insert emotional bunny here 🥺',
    bgTint: 'bg-[#F2F8F0]',
    borderTint: 'border-[#C6DFC0]',
    petalShape: 'rounded-[42px_36px_46px_32px]',
    coatColor: '#F5E4D3',
  },
];

export default function LetterAndMoments() {
  const [activeCardId, setActiveCardId] = useState<number | null>(null);

  return (
    <>
      {/* SECTION 2: A LITTLE MESSAGE */}
      <section id="letter" className="relative py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="relative paper-lined rounded-[32px] border-2 border-[#EAD8CD] p-7 sm:p-12 shadow-[0_14px_40px_rgba(74,53,47,0.08)]"
          >
            {/* Washi Tape Decorations */}
            <WashiTape
              className="absolute -top-3.5 left-8 sm:left-14"
              color="#FFD6E0"
              rotate={-6}
            />
            <WashiTape
              className="absolute -top-3.5 right-8 sm:right-14"
              color="#D8E8D4"
              rotate={5}
            />

            {/* Header Row with Bunny Holding Flower */}
            <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between gap-4 mb-6 border-b border-dashed border-[#E2CEC2] pb-5">
              <div>
                <p className="text-xs font-semibold tracking-wide text-[#8C6D63] mb-1">
                  A little note from a friend · 💌
                </p>
                <h2 className="font-hand text-3xl sm:text-5xl font-bold text-[#4A352F] text-balance">
                  Thank You for Being My Friend 🌼
                </h2>
              </div>
              <motion.div
                whileHover={{ rotate: [-2, 3, -2], scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="shrink-0"
              >
                <FlowerHoldingBunnySvg className="w-24 h-28 sm:w-28 sm:h-32" />
              </motion.div>
            </div>

            {/* Letter Copy with Interactive Words */}
            <div className="space-y-5 text-base sm:text-[17px] leading-[1.85] text-[#4A352F]">
              <p>
                Honestly, gw cuma mau bilang{' '}
                <InteractiveWord reaction="makasih banyakk 🌷">makasih</InteractiveWord>.
              </p>

              <p>Makasih karena lu udah mau temenan sama gw.</p>

              <p>
                Makasih karena sudah mau{' '}
                <InteractiveWord
                  reaction="seru bangettt 🐰"
                  highlightClass="bg-[#FFF3C4] text-[#4A352F] border-b-2 border-[#F59E0B]/60"
                >
                  ngobrol, bercanda
                </InteractiveWord>
                , dengerin{' '}
                <InteractiveWord
                  reaction="yang ga jelas itu 😭"
                  highlightClass="bg-[#E5F2E1] text-[#4A352F] border-b-2 border-[#7C9D78]"
                >
                  cerita random
                </InteractiveWord>{' '}
                gw, dan tetep mau ngadepin{' '}
                <InteractiveWord reaction="ehehe maap 🎀">
                  tingkah gw yang kadang aneh
                </InteractiveWord>{' '}
                hehe.
              </p>

              <p>
                Gw sebenernya{' '}
                <InteractiveWord
                  reaction="tsundere dikit 👀"
                  highlightClass="bg-[#FFF3C4] text-[#4A352F] border-b-2 border-[#F59E0B]/60"
                >
                  gengsi
                </InteractiveWord>{' '}
                bilangnya, tapi gw{' '}
                <InteractiveWord reaction="beneran seneng! 💗">
                  senang banget
                </InteractiveWord>{' '}
                bisa kenal terus temenan sama lu.
              </p>

              <p>
                Semoga pertemanan kita bisa terus jadi salah satu hal kecil yang bikin hari-hari
                kita{' '}
                <InteractiveWord
                  reaction="aamiin! ✨🌼"
                  highlightClass="bg-[#E5F2E1] text-[#4A352F] border-b-2 border-[#7C9D78]"
                >
                  lebih menyenangkan
                </InteractiveWord>
                . 🐰🌷
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-dashed border-[#E2CEC2] flex flex-wrap items-center justify-between gap-3 text-sm text-[#785A52]">
              <span className="italic">Psst… coba klik kata-kata yang di-highlight di atas ✨</span>
              <span className="font-hand text-2xl text-[#4A352F] font-semibold">
                — temanmu yang agak aneh 🐇
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: THINGS I LIKE ABOUT OUR FRIENDSHIP (6 FLOWER/PETAL CARDS) */}
      <section id="moments" className="relative py-20 px-4 sm:px-6 bg-[#FFF5F7]/65">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-sm font-semibold text-[#8C6D63] mb-2">
              Little Scrapbook Memories · 🐇🎀
            </span>
            <h2 className="font-hand text-4xl sm:text-5xl font-bold text-[#4A352F] text-balance mb-3">
              Things I Like About Our Friendship
            </h2>
            <p className="text-sm sm:text-base text-[#785A52]">
              Sentuh atau klik tiap kelopak kartu di bawah ini buat lihat kelinci kecilnya ngintip!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-12 pt-4">
            {FRIENDSHIP_CARDS.map((card, index) => {
              const isActive = activeCardId === card.id;

              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  onMouseEnter={() => setActiveCardId(card.id)}
                  onMouseLeave={() => setActiveCardId((prev) => (prev === card.id ? null : prev))}
                  onClick={() => setActiveCardId((prev) => (prev === card.id ? null : card.id))}
                  className="relative group cursor-pointer"
                >
                  {/* Peeking Bunny & Blooming Flowers behind card */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 22, scale: 0.85 }}
                        animate={{ opacity: 1, y: -38, scale: 1 }}
                        exit={{ opacity: 0, y: 18, scale: 0.85 }}
                        transition={{ type: 'spring', stiffness: 320, damping: 20 }}
                        className="pointer-events-none absolute -top-3 right-6 z-0 flex items-end gap-1"
                      >
                        <motion.span
                          initial={{ scale: 0, rotate: -10 }}
                          animate={{ scale: 1, rotate: 4 }}
                          className="mb-7 -mr-2 rounded-2xl bg-[#FFFDF9] px-3 py-1 text-xs font-semibold text-[#4A352F] shadow-sm border border-[#4A352F]/15 whitespace-nowrap"
                        >
                          {card.note}
                        </motion.span>
                        <PeekingBunnySvg className="w-20 h-16" coatColor={card.coatColor} />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Blooming Corner Flowers on Active */}
                  <AnimatePresence>
                    {isActive && (
                      <>
                        <motion.span
                          initial={{ scale: 0, rotate: -30 }}
                          animate={{ scale: 1.15, rotate: 0 }}
                          exit={{ scale: 0 }}
                          className="pointer-events-none absolute -top-3 -left-2 z-20 text-2xl select-none"
                        >
                          🌸
                        </motion.span>
                        <motion.span
                          initial={{ scale: 0, rotate: 20 }}
                          animate={{ scale: 1.15, rotate: 0 }}
                          exit={{ scale: 0 }}
                          className="pointer-events-none absolute -bottom-3 -right-2 z-20 text-2xl select-none"
                        >
                          🌼
                        </motion.span>
                        <motion.div
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0 }}
                          className="pointer-events-none absolute top-4 right-4 z-20"
                        >
                          <SparkleSvg className="w-5 h-5" color="#F59E0B" />
                        </motion.div>
                      </>
                    )}
                  </AnimatePresence>

                  {/* Petal Card Container */}
                  <motion.article
                    animate={{
                      scale: isActive ? 1.03 : 1,
                      y: isActive ? -4 : 0,
                    }}
                    transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                    className={`relative z-10 h-full ${card.bgTint} ${card.petalShape} border-2 ${card.borderTint} p-7 shadow-[0_10px_28px_rgba(74,53,47,0.06)] flex flex-col justify-between`}
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="flex items-center justify-center w-11 h-11 rounded-2xl bg-white/80 text-2xl shadow-xs border border-[#4A352F]/10">
                          {card.emoji}
                        </span>
                        <h3 className="font-hand text-3xl font-bold text-[#4A352F]">
                          {card.title}
                        </h3>
                      </div>

                      <div className="space-y-2.5 text-[14.5px] leading-relaxed text-[#5C4033]">
                        {card.paragraphs.map((line, i) => (
                          <p key={i}>{line}</p>
                        ))}
                      </div>
                    </div>

                    <div className="mt-5 pt-3 border-t border-[#4A352F]/10 flex items-center justify-between text-xs text-[#8C6D63]">
                      <span>Kartu {card.id} dari 6</span>
                      <span className="font-medium">
                        {isActive ? '🐰 lagi ngintip!' : 'tap / hover ✨'}
                      </span>
                    </div>
                  </motion.article>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
