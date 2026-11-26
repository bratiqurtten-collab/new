import React from 'react';
import { motion } from 'motion/react';

export function WashiTape({
  className = '',
  color = '#FFD6E0',
  rotate = -3,
}: {
  className?: string;
  color?: string;
  rotate?: number;
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none select-none h-7 w-24 opacity-85 shadow-xs ${className}`}
      style={{
        backgroundColor: color,
        transform: `rotate(${rotate}deg)`,
        clipPath:
          'polygon(2% 0%, 98% 2%, 100% 25%, 97% 50%, 100% 75%, 98% 100%, 2% 98%, 0% 74%, 3% 50%, 0% 22%)',
        backgroundImage:
          'repeating-linear-gradient(45deg, rgba(255,255,255,0.22) 0px, rgba(255,255,255,0.22) 6px, transparent 6px, transparent 12px)',
      }}
    />
  );
}

export function SparkleSvg({
  className = 'w-5 h-5',
  color = '#F59E0B',
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 2C12.7 7.2 16.8 11.3 22 12C16.8 12.7 12.7 16.8 12 22C11.3 16.8 7.2 12.7 2 12C7.2 11.3 11.3 7.2 12 2Z"
        fill={color}
      />
    </svg>
  );
}

export function CloudSvg({ className = 'w-28 h-16' }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 80" fill="none" className={className} aria-hidden="true">
      <path
        d="M32 64H106C119.255 64 130 54.1503 130 42C130 30.8654 120.996 21.6621 109.261 20.2007C104.769 10.6143 94.6612 4 82.9 4C68.021 4 55.6911 14.3775 53.3095 28.0558C50.4716 26.7438 47.2784 26 43.9 26C31.2527 26 21 35.402 21 47C21 48.0375 21.0822 49.0578 21.241 50.0561C15.9636 52.0085 12.2 56.867 12.2 62.5C12.2 63.0114 12.2307 63.5162 12.2907 64H32Z"
        fill="#FFFFFF"
        fillOpacity="0.92"
        stroke="#F3E2D8"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TulipSvg({
  className = 'w-14 h-24',
  petalColor = '#FF9EB5',
  petalShade = '#F47296',
}: {
  className?: string;
  petalColor?: string;
  petalShade?: string;
}) {
  return (
    <svg viewBox="0 0 64 110" fill="none" className={className} aria-hidden="true">
      {/* Stem */}
      <path
        d="M32 45C32 65 31 85 32 106"
        stroke="#7C9D78"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      {/* Leaves */}
      <path
        d="M31 88C20 82 13 71 14 58C23 62 30 72 31 88Z"
        fill="#A7C4A0"
        stroke="#6D8F68"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M32 82C43 76 50 66 49 54C40 58 33 68 32 82Z"
        fill="#BCE0B4"
        stroke="#6D8F68"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* Tulip Cup */}
      <path
        d="M17 24C17 15 21 9 25 14C28 10 32 6 32 6C32 6 36 10 39 14C43 9 47 15 47 24C47 38 40 46 32 46C24 46 17 38 17 24Z"
        fill={petalColor}
        stroke="#4A352F"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path
        d="M25 14C29 22 30 34 32 45C34 34 35 22 39 14"
        stroke={petalShade}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function DaisySvg({
  className = 'w-14 h-24',
  petalColor = '#FFFDF9',
  centerColor = '#FCD34D',
}: {
  className?: string;
  petalColor?: string;
  centerColor?: string;
}) {
  return (
    <svg viewBox="0 0 68 108" fill="none" className={className} aria-hidden="true">
      {/* Stem */}
      <path
        d="M34 44C35 66 33 86 34 105"
        stroke="#7C9D78"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M34 78C23 74 17 65 19 55C27 59 33 66 34 78Z"
        fill="#BCE0B4"
        stroke="#6D8F68"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* Petals */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <ellipse
          key={angle}
          cx="34"
          cy="18"
          rx="6.2"
          ry="12.5"
          fill={petalColor}
          stroke="#4A352F"
          strokeWidth="1.8"
          transform={`rotate(${angle} 34 31)`}
        />
      ))}
      {/* Center */}
      <circle cx="34" cy="31" r="8.5" fill={centerColor} stroke="#4A352F" strokeWidth="2" />
      <circle cx="31.5" cy="29" r="1.3" fill="#4A352F" />
      <circle cx="36.5" cy="29" r="1.3" fill="#4A352F" />
      <path
        d="M31.5 33C32.7 34.4 35.3 34.4 36.5 33"
        stroke="#4A352F"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ButterflySvg({
  className = 'w-10 h-10',
  wingColor = '#FDE68A',
  accentColor = '#F9A8D4',
}: {
  className?: string;
  wingColor?: string;
  accentColor?: string;
}) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <g className="animate-wing">
        <path
          d="M23 23C16 11 5 11 7 21C8 26 16 27 23 24Z"
          fill={wingColor}
          stroke="#4A352F"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M25 23C32 11 43 11 41 21C40 26 32 27 25 24Z"
          fill={wingColor}
          stroke="#4A352F"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M23 25C16 26 11 33 15 37C19 40 23 34 23 26Z"
          fill={accentColor}
          stroke="#4A352F"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M25 25C32 26 37 33 33 37C29 40 25 34 25 26Z"
          fill={accentColor}
          stroke="#4A352F"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </g>
      <rect x="22.5" y="16" width="3" height="17" rx="1.5" fill="#4A352F" />
      <path d="M23 16C21 12 18 11 17 12" stroke="#4A352F" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M25 16C27 12 30 11 31 12" stroke="#4A352F" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function SittingBunnySvg({
  className = 'w-44 h-44',
  coatColor = '#FFFDF9',
  earInner = '#FFD6E0',
  isJumping = false,
}: {
  className?: string;
  coatColor?: string;
  earInner?: string;
  isJumping?: boolean;
}) {
  return (
    <motion.svg
      viewBox="0 0 180 180"
      fill="none"
      className={className}
      aria-label="Kelinci lucu duduk di antara bunga"
      animate={
        isJumping
          ? { y: [0, -28, 0, -18, 0], rotate: [0, -4, 4, -2, 0] }
          : { y: [0, -4, 0] }
      }
      transition={
        isJumping
          ? { duration: 0.9, ease: 'easeOut' }
          : { duration: 3.4, repeat: Infinity, ease: 'easeInOut' }
      }
    >
      {/* Shadow */}
      <ellipse cx="90" cy="162" rx="44" ry="8" fill="#4A352F" fillOpacity="0.08" />

      {/* Left Ear */}
      <motion.g
        animate={{ rotate: [-2, 3, -2] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformOrigin: '72px 62px' }}
      >
        <ellipse
          cx="68"
          cy="38"
          rx="14"
          ry="34"
          transform="rotate(-12 68 38)"
          fill={coatColor}
          stroke="#4A352F"
          strokeWidth="3"
        />
        <ellipse
          cx="68"
          cy="40"
          rx="7"
          ry="22"
          transform="rotate(-12 68 40)"
          fill={earInner}
        />
      </motion.g>

      {/* Right Ear */}
      <motion.g
        animate={{ rotate: [2, -4, 2] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformOrigin: '108px 62px' }}
      >
        <ellipse
          cx="112"
          cy="38"
          rx="14"
          ry="34"
          transform="rotate(12 112 38)"
          fill={coatColor}
          stroke="#4A352F"
          strokeWidth="3"
        />
        <ellipse
          cx="112"
          cy="40"
          rx="7"
          ry="22"
          transform="rotate(12 112 40)"
          fill={earInner}
        />
      </motion.g>

      {/* Tail */}
      <circle cx="132" cy="140" r="12" fill={coatColor} stroke="#4A352F" strokeWidth="3" />

      {/* Body */}
      <path
        d="M52 135C52 107 68 92 90 92C112 92 128 107 128 135C128 152 114 160 90 160C66 160 52 152 52 135Z"
        fill={coatColor}
        stroke="#4A352F"
        strokeWidth="3"
      />

      {/* Head */}
      <ellipse
        cx="90"
        cy="82"
        rx="38"
        ry="31"
        fill={coatColor}
        stroke="#4A352F"
        strokeWidth="3"
      />

      {/* Rosy Cheeks */}
      <ellipse cx="66" cy="89" rx="7.5" ry="4.5" fill="#FFACC5" fillOpacity="0.7" />
      <ellipse cx="114" cy="89" rx="7.5" ry="4.5" fill="#FFACC5" fillOpacity="0.7" />

      {/* Blinking Eyes */}
      <g className="animate-blink" style={{ transformOrigin: '90px 80px' }}>
        <circle cx="74" cy="79" r="3.6" fill="#4A352F" />
        <circle cx="75.2" cy="77.6" r="1.2" fill="#FFFFFF" />
        <circle cx="106" cy="79" r="3.6" fill="#4A352F" />
        <circle cx="107.2" cy="77.6" r="1.2" fill="#FFFFFF" />
      </g>

      {/* Cute Nose & Mouth */}
      <ellipse cx="90" cy="86" rx="3.4" ry="2.4" fill="#F48FB1" />
      <path
        d="M84 91C86 94 89 93 90 90C91 93 94 94 96 91"
        stroke="#4A352F"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Cute Paws */}
      <ellipse cx="74" cy="126" rx="8" ry="11" transform="rotate(-14 74 126)" fill={coatColor} stroke="#4A352F" strokeWidth="2.6" />
      <ellipse cx="106" cy="126" rx="8" ry="11" transform="rotate(14 106 126)" fill={coatColor} stroke="#4A352F" strokeWidth="2.6" />

      {/* Little Ribbon Bow */}
      <path d="M90 106L78 100V112L90 106Z" fill="#FF9EB5" stroke="#4A352F" strokeWidth="2" strokeLinejoin="round" />
      <path d="M90 106L102 100V112L90 106Z" fill="#FF9EB5" stroke="#4A352F" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="90" cy="106" r="3.5" fill="#F47296" stroke="#4A352F" strokeWidth="1.8" />
    </motion.svg>
  );
}

export function FlowerHoldingBunnySvg({ className = 'w-32 h-36' }: { className?: string }) {
  return (
    <svg viewBox="0 0 150 165" fill="none" className={className} aria-label="Kelinci kecil memegang bunga">
      {/* Ears */}
      <ellipse cx="56" cy="34" rx="11" ry="27" transform="rotate(-10 56 34)" fill="#F9EFE6" stroke="#4A352F" strokeWidth="2.8" />
      <ellipse cx="56" cy="36" rx="5.5" ry="17" transform="rotate(-10 56 36)" fill="#FFD6E0" />
      <ellipse cx="94" cy="34" rx="11" ry="27" transform="rotate(10 94 34)" fill="#F9EFE6" stroke="#4A352F" strokeWidth="2.8" />
      <ellipse cx="94" cy="36" rx="5.5" ry="17" transform="rotate(10 94 36)" fill="#FFD6E0" />

      {/* Body */}
      <path d="M44 126C44 102 58 88 75 88C92 88 106 102 106 126C106 142 94 148 75 148C56 148 44 142 44 126Z" fill="#F9EFE6" stroke="#4A352F" strokeWidth="2.8" />

      {/* Head */}
      <ellipse cx="75" cy="74" rx="32" ry="26" fill="#F9EFE6" stroke="#4A352F" strokeWidth="2.8" />

      {/* Cheeks */}
      <ellipse cx="54" cy="80" rx="6" ry="3.6" fill="#FFACC5" fillOpacity="0.7" />
      <ellipse cx="96" cy="80" rx="6" ry="3.6" fill="#FFACC5" fillOpacity="0.7" />

      {/* Happy Eyes */}
      <path d="M58 72C60 69 64 69 66 72" stroke="#4A352F" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M84 72C86 69 90 69 92 72" stroke="#4A352F" strokeWidth="2.6" strokeLinecap="round" />

      {/* Nose & Smile */}
      <ellipse cx="75" cy="77" rx="2.8" ry="2" fill="#F48FB1" />
      <path d="M70 81C72 84 74 83 75 80.5C76 83 78 84 80 81" stroke="#4A352F" strokeWidth="2" strokeLinecap="round" />

      {/* Flower held by bunny */}
      <path d="M88 128L108 94" stroke="#6D8F68" strokeWidth="3.2" strokeLinecap="round" />
      <path d="M98 112C108 111 114 105 113 98C105 100 100 105 98 112Z" fill="#A7C4A0" stroke="#6D8F68" strokeWidth="1.8" />
      <path d="M101 84C101 76 108 72 112 77C117 72 123 78 120 86C117 94 111 97 107 95C102 93 101 88 101 84Z" fill="#FF9EB5" stroke="#4A352F" strokeWidth="2.2" />

      {/* Paws holding stem */}
      <ellipse cx="64" cy="118" rx="8" ry="10" transform="rotate(-18 64 118)" fill="#F9EFE6" stroke="#4A352F" strokeWidth="2.5" />
      <ellipse cx="89" cy="118" rx="8" ry="10" transform="rotate(20 89 118)" fill="#F9EFE6" stroke="#4A352F" strokeWidth="2.5" />
    </svg>
  );
}

export function PeekingBunnySvg({
  className = 'w-20 h-16',
  coatColor = '#FFFDF9',
}: {
  className?: string;
  coatColor?: string;
}) {
  return (
    <svg viewBox="0 0 110 86" fill="none" className={className} aria-hidden="true">
      {/* Ears */}
      <ellipse cx="36" cy="24" rx="9" ry="21" transform="rotate(-10 36 24)" fill={coatColor} stroke="#4A352F" strokeWidth="2.5" />
      <ellipse cx="36" cy="25" rx="4.5" ry="13" transform="rotate(-10 36 25)" fill="#FFD6E0" />
      <ellipse cx="74" cy="24" rx="9" ry="21" transform="rotate(10 74 24)" fill={coatColor} stroke="#4A352F" strokeWidth="2.5" />
      <ellipse cx="74" cy="25" rx="4.5" ry="13" transform="rotate(10 74 25)" fill="#FFD6E0" />

      {/* Head */}
      <path d="M22 76C22 48 36 38 55 38C74 38 88 48 88 76" fill={coatColor} stroke="#4A352F" strokeWidth="2.6" strokeLinecap="round" />

      {/* Eyes & Blush */}
      <circle cx="42" cy="57" r="3" fill="#4A352F" />
      <circle cx="68" cy="57" r="3" fill="#4A352F" />
      <ellipse cx="34" cy="63" rx="5" ry="3" fill="#FFACC5" fillOpacity="0.7" />
      <ellipse cx="76" cy="63" rx="5" ry="3" fill="#FFACC5" fillOpacity="0.7" />
      <ellipse cx="55" cy="62" rx="2.5" ry="1.8" fill="#F48FB1" />
      <path d="M51 66C53 68 55 67 55 65C55 67 57 68 59 66" stroke="#4A352F" strokeWidth="1.8" strokeLinecap="round" />

      {/* Little paws resting on edge */}
      <ellipse cx="33" cy="76" rx="8" ry="5.5" fill={coatColor} stroke="#4A352F" strokeWidth="2.4" />
      <ellipse cx="77" cy="76" rx="8" ry="5.5" fill={coatColor} stroke="#4A352F" strokeWidth="2.4" />
    </svg>
  );
}

export function RibbonCertificateBunnySvg({ className = 'w-28 h-28' }: { className?: string }) {
  return (
    <svg viewBox="0 0 130 130" fill="none" className={className} aria-label="Kelinci dengan pita kecil sebagai stempel sertifikat">
      {/* Scalloped Seal Background */}
      <circle cx="65" cy="65" r="56" fill="#FFF3C4" stroke="#E5B94C" strokeWidth="2.5" strokeDasharray="6 4" />
      <circle cx="65" cy="65" r="47" fill="#FFFDF9" stroke="#F8A5C2" strokeWidth="2" />

      {/* Bunny Ears */}
      <ellipse cx="52" cy="36" rx="7.5" ry="18" transform="rotate(-10 52 36)" fill="#FFFDF9" stroke="#4A352F" strokeWidth="2.4" />
      <ellipse cx="52" cy="37" rx="3.8" ry="11" transform="rotate(-10 52 37)" fill="#FFD6E0" />
      <ellipse cx="78" cy="36" rx="7.5" ry="18" transform="rotate(10 78 36)" fill="#FFFDF9" stroke="#4A352F" strokeWidth="2.4" />
      <ellipse cx="78" cy="37" rx="3.8" ry="11" transform="rotate(10 78 37)" fill="#FFD6E0" />

      {/* Head */}
      <ellipse cx="65" cy="67" rx="25" ry="20" fill="#FFFDF9" stroke="#4A352F" strokeWidth="2.4" />

      {/* Eyes & Smile */}
      <circle cx="55" cy="65" r="2.6" fill="#4A352F" />
      <circle cx="75" cy="65" r="2.6" fill="#4A352F" />
      <ellipse cx="49" cy="71" rx="4.5" ry="2.6" fill="#FFACC5" fillOpacity="0.7" />
      <ellipse cx="81" cy="71" rx="4.5" ry="2.6" fill="#FFACC5" fillOpacity="0.7" />
      <ellipse cx="65" cy="70" rx="2.2" ry="1.6" fill="#F48FB1" />
      <path d="M61 74C63 76.5 67 76.5 69 74" stroke="#4A352F" strokeWidth="1.8" strokeLinecap="round" />

      {/* Cute Bow */}
      <path d="M65 89L52 83V95L65 89Z" fill="#FF8FAB" stroke="#4A352F" strokeWidth="2" strokeLinejoin="round" />
      <path d="M65 89L78 83V95L65 89Z" fill="#FF8FAB" stroke="#4A352F" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="65" cy="89" r="3.4" fill="#FB6F92" stroke="#4A352F" strokeWidth="1.8" />
    </svg>
  );
}

export function SunsetBunnyPairSvg({ className = 'w-64 h-44' }: { className?: string }) {
  return (
    <svg viewBox="0 0 260 170" fill="none" className={className} aria-label="Dua kelinci kecil duduk berdampingan menikmati sunset">
      {/* Ground grass patch */}
      <ellipse cx="130" cy="152" rx="108" ry="14" fill="#9BB892" fillOpacity="0.45" />

      {/* Bunny 1 (White/Cream) */}
      <g>
        <ellipse cx="80" cy="52" rx="10" ry="26" transform="rotate(-12 80 52)" fill="#FFFDF9" stroke="#4A352F" strokeWidth="2.8" />
        <ellipse cx="80" cy="53" rx="5" ry="16" transform="rotate(-12 80 53)" fill="#FFD6E0" />
        <ellipse cx="106" cy="52" rx="10" ry="26" transform="rotate(10 106 52)" fill="#FFFDF9" stroke="#4A352F" strokeWidth="2.8" />
        <ellipse cx="106" cy="53" rx="5" ry="16" transform="rotate(10 106 53)" fill="#FFD6E0" />
        <circle cx="66" cy="136" r="10" fill="#FFFDF9" stroke="#4A352F" strokeWidth="2.6" />
        <path d="M66 130C66 105 78 92 94 92C110 92 122 105 122 130C122 144 110 150 94 150C78 150 66 144 66 130Z" fill="#FFFDF9" stroke="#4A352F" strokeWidth="2.8" />
        <ellipse cx="94" cy="84" rx="28" ry="23" fill="#FFFDF9" stroke="#4A352F" strokeWidth="2.8" />
        <circle cx="84" cy="82" r="2.6" fill="#4A352F" />
        <circle cx="104" cy="82" r="2.6" fill="#4A352F" />
        <ellipse cx="76" cy="87" rx="5" ry="3" fill="#FFACC5" fillOpacity="0.7" />
        <ellipse cx="111" cy="87" rx="5" ry="3" fill="#FFACC5" fillOpacity="0.7" />
        <path d="M89 89C91 91.5 97 91.5 99 89" stroke="#4A352F" strokeWidth="1.8" strokeLinecap="round" />
      </g>

      {/* Bunny 2 (Light Warm Brown) */}
      <g>
        <ellipse cx="152" cy="54" rx="10" ry="25" transform="rotate(-10 152 54)" fill="#F3DEC9" stroke="#4A352F" strokeWidth="2.8" />
        <ellipse cx="152" cy="55" rx="5" ry="15" transform="rotate(-10 152 55)" fill="#FFD6E0" />
        <ellipse cx="178" cy="54" rx="10" ry="25" transform="rotate(12 178 54)" fill="#F3DEC9" stroke="#4A352F" strokeWidth="2.8" />
        <ellipse cx="178" cy="55" rx="5" ry="15" transform="rotate(12 178 55)" fill="#FFD6E0" />
        <circle cx="194" cy="136" r="10" fill="#F3DEC9" stroke="#4A352F" strokeWidth="2.6" />
        <path d="M138 130C138 105 150 92 166 92C182 92 194 105 194 130C194 144 182 150 166 150C150 150 138 144 138 130Z" fill="#F3DEC9" stroke="#4A352F" strokeWidth="2.8" />
        <ellipse cx="166" cy="85" rx="28" ry="23" fill="#F3DEC9" stroke="#4A352F" strokeWidth="2.8" />
        <circle cx="156" cy="83" r="2.6" fill="#4A352F" />
        <circle cx="176" cy="83" r="2.6" fill="#4A352F" />
        <ellipse cx="149" cy="88" rx="5" ry="3" fill="#FFACC5" fillOpacity="0.7" />
        <ellipse cx="184" cy="88" rx="5" ry="3" fill="#FFACC5" fillOpacity="0.7" />
        <path d="M161 90C163 92.5 169 92.5 171 90" stroke="#4A352F" strokeWidth="1.8" strokeLinecap="round" />
      </g>

      {/* Cute little heart floating between them */}
      <motion.path
        d="M130 62C127 57 119 58 119 64C119 70 130 76 130 76C130 76 141 70 141 64C141 58 133 57 130 62Z"
        fill="#FF9EB5"
        stroke="#4A352F"
        strokeWidth="1.8"
        animate={{ y: [0, -6, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
      />
    </svg>
  );
}
