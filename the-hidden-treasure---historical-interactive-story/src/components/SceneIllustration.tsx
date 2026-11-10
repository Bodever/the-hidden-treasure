import React from 'react';
import { motion } from 'motion/react';

interface SceneIllustrationProps {
  illustrationKey: string;
  chapterNumber: number;
}

export const SceneIllustration: React.FC<SceneIllustrationProps> = ({ illustrationKey, chapterNumber }) => {
  return (
    <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden border border-[#523d29] shadow-2xl bg-[#170f08] select-none group">
      {/* Decorative Antique Arabesque Corners */}
      <div className="absolute top-2 left-2 z-20 w-6 h-6 border-t-2 border-l-2 border-[#d4af37]/60 pointer-events-none" />
      <div className="absolute top-2 right-2 z-20 w-6 h-6 border-t-2 border-r-2 border-[#d4af37]/60 pointer-events-none" />
      <div className="absolute bottom-2 left-2 z-20 w-6 h-6 border-b-2 border-l-2 border-[#d4af37]/60 pointer-events-none" />
      <div className="absolute bottom-2 right-2 z-20 w-6 h-6 border-b-2 border-r-2 border-[#d4af37]/60 pointer-events-none" />

      {/* Floating dust/stars particles overlay */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#d4af37]/40"
            style={{
              width: (i % 3) + 2 + 'px',
              height: (i % 3) + 2 + 'px',
              left: `${(i * 17) % 94 + 3}%`,
              top: `${(i * 23) % 80 + 10}%`,
            }}
            animate={{
              y: [0, -18, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + (i % 4),
              repeat: Infinity,
              ease: 'easeInOut',
              delay: (i * 0.4) % 3,
            }}
          />
        ))}
      </div>

      {/* Vignette overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#120d09] via-transparent to-[#120d09]/40 z-10 pointer-events-none" />

      {/* Scene Renderers */}
      {illustrationKey === 'baghdad_market' && <BaghdadMarketScene />}
      {illustrationKey === 'desert_caravan' && <DesertCaravanScene />}
      {illustrationKey === 'storm_dunes' && <StormDunesScene />}
      {illustrationKey === 'vault_chamber' && <VaultChamberScene />}
      {illustrationKey === 'ending_legacy' && <EndingLegacyScene />}
      {illustrationKey === 'ending_ruin' && <EndingRuinScene />}
      {illustrationKey === 'ending_compromise' && <EndingCompromiseScene />}

      {/* Chapter Stamp Badge */}
      <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1 rounded bg-[#1a120b]/85 border border-[#8c6b39]/50 backdrop-blur-xs">
        <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
        <span className="font-['Cinzel'] text-xs tracking-widest text-[#d4af37] font-bold">
          CHAPTER {chapterNumber}
        </span>
      </div>
    </div>
  );
};

// 1. Baghdad Market & River Scene
const BaghdadMarketScene: React.FC = () => (
  <svg viewBox="0 0 800 450" className="w-full h-full object-cover">
    <defs>
      <linearGradient id="skyBaghdad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#3d1e11" />
        <stop offset="50%" stopColor="#8c4b23" />
        <stop offset="100%" stopColor="#e3a04a" />
      </linearGradient>
      <linearGradient id="tigrisRiver" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#1e2d2f" />
        <stop offset="50%" stopColor="#3b5249" />
        <stop offset="100%" stopColor="#1e2d2f" />
      </linearGradient>
      <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#ffea9f" stopOpacity="1" />
        <stop offset="60%" stopColor="#f59e0b" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#d97706" stopOpacity="0" />
      </radialGradient>
    </defs>

    {/* Sky */}
    <rect width="800" height="450" fill="url(#skyBaghdad)" />

    {/* Setting Sun */}
    <motion.circle
      cx="400"
      cy="200"
      r="80"
      fill="url(#sunGlow)"
      animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
    />
    <circle cx="400" cy="200" r="42" fill="#fff5d0" />

    {/* Distant Baghdad Skyline / Minarets & Domes */}
    <g fill="#2b140d" opacity="0.85">
      {/* Grand Caliphal Dome */}
      <path d="M 330 250 Q 400 170 470 250 Z" />
      <rect x="396" y="150" width="8" height="25" fill="#2b140d" />
      <polygon points="400,140 395,150 405,150" fill="#d4af37" />

      {/* Minarets */}
      <rect x="260" y="160" width="16" height="100" />
      <polygon points="268,140 258,160 278,160" fill="#2b140d" />
      <rect x="520" y="170" width="14" height="90" />
      <polygon points="527,150 519,170 535,170" fill="#2b140d" />

      {/* Distant Walls and Arches */}
      <rect x="180" y="220" width="120" height="40" />
      <path d="M 210 240 Q 225 220 240 240 Z" fill="#4d2417" />
      <rect x="490" y="225" width="140" height="35" />
    </g>

    {/* River Tigris */}
    <path d="M 0 255 Q 400 245 800 255 L 800 310 L 0 310 Z" fill="url(#tigrisRiver)" />
    {/* Water reflection ripples */}
    <motion.path
      d="M 360 265 H 440 M 340 275 H 460 M 380 285 H 420"
      stroke="#f5d061"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.6"
      animate={{ opacity: [0.3, 0.7, 0.3], x: [-5, 5, -5] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    />

    {/* River Boat (Abbasid Dhow / Mashoof) */}
    <g transform="translate(480, 260)">
      <path d="M 0 16 Q 30 24 60 16 Q 40 28 0 16 Z" fill="#1b120c" />
      <line x1="30" y1="16" x2="30" y2="-10" stroke="#1b120c" strokeWidth="2" />
      <polygon points="30,-8 50,14 30,14" fill="#eed9b3" opacity="0.8" />
    </g>

    {/* Foreground: Booksellers Souk Architecture */}
    <g fill="#170c06">
      {/* Stone arcade pillars */}
      <rect x="0" y="270" width="800" height="180" />
      {/* Archways */}
      <path d="M 40 270 Q 150 200 260 270 Z" fill="#2d170c" />
      <path d="M 280 270 Q 390 200 500 270 Z" fill="#2d170c" />
      <path d="M 520 270 Q 630 200 740 270 Z" fill="#2d170c" />

      {/* Market Awning Stripes */}
      <path d="M 20 270 L 260 270 L 250 290 L 10 290 Z" fill="#991b1b" />
      <path d="M 40 270 L 80 270 L 70 290 L 30 290 Z" fill="#fef3c7" />
      <path d="M 120 270 L 160 270 L 150 290 L 110 290 Z" fill="#fef3c7" />
      <path d="M 200 270 L 240 270 L 230 290 L 190 290 Z" fill="#fef3c7" />

      {/* Book scrolls & manuscripts on display */}
      <rect x="310" y="320" width="80" height="20" rx="3" fill="#c29b62" />
      <rect x="320" y="312" width="60" height="12" rx="3" fill="#ecd9b0" />
      <circle cx="340" cy="305" r="8" fill="#d4af37" />

      {/* Hanging Brass Lantern with flickering flame */}
      <g transform="translate(145, 230)">
        <line x1="10" y1="0" x2="10" y2="25" stroke="#d4af37" strokeWidth="2" />
        <polygon points="5,25 15,25 18,45 2,45" fill="#854d0e" stroke="#d4af37" strokeWidth="1" />
        <motion.circle
          cx="10"
          cy="36"
          r="4"
          fill="#ffea00"
          animate={{ scale: [1, 1.3, 0.9, 1.2, 1], opacity: [0.7, 1, 0.6, 0.95, 0.7] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </g>
    </g>

    {/* Date Palm Tree Silhouettes */}
    <g transform="translate(40, 180)" fill="#1c0e07">
      <path d="M 15 120 Q 25 60 10 0 Q 30 60 25 120 Z" />
      {/* Palm fronds */}
      <path d="M 10 5 Q -25 -10 -40 20" stroke="#1c0e07" strokeWidth="4" fill="none" />
      <path d="M 10 5 Q 0 -30 20 -40" stroke="#1c0e07" strokeWidth="4" fill="none" />
      <path d="M 10 5 Q 35 -20 60 -5" stroke="#1c0e07" strokeWidth="4" fill="none" />
      <path d="M 10 5 Q 40 10 50 35" stroke="#1c0e07" strokeWidth="4" fill="none" />
    </g>
  </svg>
);

// 2. Desert Caravan Scene
const DesertCaravanScene: React.FC = () => (
  <svg viewBox="0 0 800 450" className="w-full h-full object-cover">
    <defs>
      <linearGradient id="skyDesert" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#451a03" />
        <stop offset="40%" stopColor="#9a3412" />
        <stop offset="85%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#fef3c7" />
      </linearGradient>
      <linearGradient id="duneBack" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#b45309" />
        <stop offset="100%" stopColor="#78350f" />
      </linearGradient>
      <linearGradient id="duneMid" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#d97706" />
        <stop offset="100%" stopColor="#92400e" />
      </linearGradient>
      <linearGradient id="duneFront" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#451a03" />
      </linearGradient>
    </defs>

    <rect width="800" height="450" fill="url(#skyDesert)" />

    {/* Desert Sun with shimmering rays */}
    <circle cx="620" cy="110" r="45" fill="#fef08a" />
    <motion.circle
      cx="620"
      cy="110"
      r="70"
      fill="#fef08a"
      opacity="0.3"
      animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.45, 0.2] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    />

    {/* Back Dune */}
    <path d="M 0 250 Q 220 180 500 260 T 800 240 L 800 450 L 0 450 Z" fill="url(#duneBack)" />

    {/* Mid Dune */}
    <path d="M 0 310 Q 320 220 620 330 T 800 290 L 800 450 L 0 450 Z" fill="url(#duneMid)" />

    {/* Ancient Stone Milestone Marker */}
    <g transform="translate(180, 240)" fill="#3e1f0e">
      <path d="M 15 0 L 30 15 L 30 90 L 0 90 L 0 15 Z" />
      <polygon points="15,-10 0,15 30,15" fill="#522a13" />
      {/* Ancient inscribed markings */}
      <line x1="8" y1="30" x2="22" y2="30" stroke="#d4af37" strokeWidth="2" />
      <line x1="8" y1="45" x2="22" y2="45" stroke="#d4af37" strokeWidth="2" />
      <circle cx="15" cy="62" r="3" fill="#d4af37" />
    </g>

    {/* Camel Caravan Silhouette moving left to right */}
    <g transform="translate(290, 230)" fill="#1c0b05">
      {/* Guide (Harith / Yusuf) on lead camel */}
      <motion.g
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Lead Camel */}
        <path d="M 60 70 Q 75 50 80 40 Q 82 25 78 20 Q 88 20 86 35 Q 85 45 92 55 Q 115 55 125 70 Q 135 60 145 65 Q 155 70 150 90 L 145 140 L 138 140 L 140 100 L 115 100 L 112 140 L 105 140 L 110 90 L 80 90 L 75 140 L 68 140 L 72 85 L 60 70 Z" />
        {/* Rider (Yusuf / Harith) with Abbasid turban and staff */}
        <circle cx="108" cy="46" r="7" fill="#1c0b05" />
        <path d="M 103 40 Q 108 34 115 40 Z" fill="#d4af37" />
        <rect x="104" y="52" width="10" height="18" rx="2" fill="#1c0b05" />
        <line x1="114" y1="46" x2="125" y2="78" stroke="#1c0b05" strokeWidth="2" />
      </motion.g>

      {/* Lead rope */}
      <path d="M 150 90 Q 185 105 210 95" stroke="#451a03" strokeWidth="1.5" strokeDasharray="3,2" fill="none" />

      {/* Second Pack Camel (Loaded with chests and water skins) */}
      <motion.g
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
        transform="translate(140, 10)"
      >
        <path d="M 60 70 Q 75 50 80 40 Q 82 25 78 20 Q 88 20 86 35 Q 85 45 92 55 Q 115 55 125 70 Q 135 60 145 65 Q 155 70 150 90 L 145 130 L 138 130 L 140 95 L 115 95 L 112 130 L 105 130 L 110 85 L 80 85 L 75 130 L 68 130 L 72 80 L 60 70 Z" />
        {/* Heavy Packs and Flasks */}
        <rect x="95" y="60" width="28" height="20" rx="3" fill="#854d0e" stroke="#1c0b05" strokeWidth="2" />
        <ellipse cx="128" cy="74" rx="8" ry="12" fill="#713f12" />
      </motion.g>

      {/* Third Camel with Merchant Qasim */}
      <motion.g
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        transform="translate(280, 20)"
      >
        <path d="M 60 70 Q 75 50 80 40 Q 82 25 78 20 Q 88 20 86 35 Q 85 45 92 55 Q 115 55 125 70 Q 135 60 145 65 Q 155 70 150 90 L 145 120 L 138 120 L 140 90 L 115 90 L 112 120 L 105 120 L 110 80 L 80 80 L 75 120 L 68 120 L 72 75 L 60 70 Z" />
        <circle cx="108" cy="46" r="9" fill="#1c0b05" />
        <rect x="102" y="54" width="14" height="18" fill="#1c0b05" />
      </motion.g>
    </g>

    {/* Foremost Sand Dune */}
    <path d="M 0 380 Q 250 330 500 400 T 800 350 L 800 450 L 0 450 Z" fill="url(#duneFront)" />
  </svg>
);

// 3. Sandstorm / Haboob Scene
const StormDunesScene: React.FC = () => (
  <svg viewBox="0 0 800 450" className="w-full h-full object-cover">
    <defs>
      <linearGradient id="skyStorm" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#1a0c06" />
        <stop offset="50%" stopColor="#451a03" />
        <stop offset="100%" stopColor="#78350f" />
      </linearGradient>
      <linearGradient id="haboobWall" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#291206" />
        <stop offset="50%" stopColor="#54250c" />
        <stop offset="100%" stopColor="#7c2d12" />
      </linearGradient>
    </defs>

    <rect width="800" height="450" fill="url(#skyStorm)" />

    {/* Towering Haboob Wall (Sandstorm) */}
    <motion.path
      d="M -50 0 Q 200 40 400 10 Q 600 -10 850 30 L 850 450 L -50 450 Z"
      fill="url(#haboobWall)"
      animate={{ x: [-20, 20, -20] }}
      transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
    />

    {/* Swirling storm wind streaks */}
    {[...Array(8)].map((_, i) => (
      <motion.line
        key={i}
        x1="-100"
        y1={60 + i * 45}
        x2="900"
        y2={40 + i * 45}
        stroke="#ca8a04"
        strokeWidth={1.5 + (i % 3)}
        strokeDasharray="80 140"
        opacity="0.4"
        animate={{ strokeDashoffset: [0, -400] }}
        transition={{ duration: 1.8 + i * 0.2, repeat: Infinity, ease: 'linear' }}
      />
    ))}

    {/* Jagged Canyon Rock Formations */}
    <polygon points="40,450 110,220 180,450" fill="#261007" />
    <polygon points="140,450 200,180 260,450" fill="#1f0c05" />
    <polygon points="650,450 710,240 780,450" fill="#261007" />

    {/* Struggling traveler silhouette sheltering from the wind */}
    <g transform="translate(360, 310)" fill="#120603">
      <ellipse cx="40" cy="50" rx="35" ry="18" />
      <circle cx="15" cy="35" r="10" />
      <path d="M 22 30 Q 35 15 50 28" stroke="#d4af37" strokeWidth="3" fill="none" />
      <line x1="5" y1="52" x2="70" y2="52" stroke="#ca8a04" strokeWidth="2" />
    </g>
  </svg>
);

// 4. Subterranean Vault Scene (Qasr al-Zill)
const VaultChamberScene: React.FC = () => (
  <svg viewBox="0 0 800 450" className="w-full h-full object-cover">
    <defs>
      <radialGradient id="torchGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#fef08a" stopOpacity="0.9" />
        <stop offset="40%" stopColor="#f59e0b" stopOpacity="0.45" />
        <stop offset="100%" stopColor="#78350f" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="chestAura" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#ffd700" stopOpacity="0.8" />
        <stop offset="50%" stopColor="#b45309" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#1e1008" stopOpacity="0" />
      </radialGradient>
    </defs>

    {/* Dark Stone Chamber Base */}
    <rect width="800" height="450" fill="#130904" />

    {/* Ancient Abbasid Horseshoe Arch */}
    <path
      d="M 120 450 L 120 220 Q 120 70 400 70 Q 680 70 680 220 L 680 450"
      stroke="#3d2111"
      strokeWidth="28"
      fill="none"
    />
    <path
      d="M 160 450 L 160 230 Q 160 105 400 105 Q 640 105 640 230 L 640 450"
      stroke="#59321c"
      strokeWidth="8"
      strokeDasharray="16 10"
      fill="none"
    />

    {/* Wall Inscriptions (Kufic Calligraphy styling) */}
    <g stroke="#92400e" strokeWidth="2" opacity="0.6">
      <path d="M 240 150 H 320 V 165 H 280 V 180 H 340" />
      <path d="M 460 150 H 540 V 165 H 500 V 180 H 560" />
      {/* Astrolabe star circles on wall */}
      <circle cx="400" cy="140" r="28" fill="none" stroke="#d4af37" strokeWidth="1.5" />
      <circle cx="400" cy="140" r="14" fill="none" stroke="#d4af37" strokeWidth="1" />
      <line x1="372" y1="140" x2="428" y2="140" stroke="#d4af37" strokeWidth="1" />
      <line x1="400" y1="112" x2="400" y2="168" stroke="#d4af37" strokeWidth="1" />
    </g>

    {/* Left Wall Torch with animated glow */}
    <g transform="translate(140, 200)">
      <line x1="0" y1="0" x2="25" y2="30" stroke="#78350f" strokeWidth="5" />
      <motion.circle
        cx="0"
        cy="0"
        r="60"
        fill="url(#torchGlow)"
        animate={{ scale: [1, 1.25, 0.95, 1.15, 1], opacity: [0.7, 0.95, 0.65, 0.9, 0.7] }}
        transition={{ duration: 1.6, repeat: Infinity }}
      />
      <polygon points="-6,10 6,10 0,-15" fill="#f59e0b" />
      <polygon points="-3,5 3,5 0,-10" fill="#fef08a" />
    </g>

    {/* Right Wall Torch with animated glow */}
    <g transform="translate(660, 200)">
      <line x1="0" y1="0" x2="-25" y2="30" stroke="#78350f" strokeWidth="5" />
      <motion.circle
        cx="0"
        cy="0"
        r="60"
        fill="url(#torchGlow)"
        animate={{ scale: [1.1, 0.95, 1.2, 1, 1.1], opacity: [0.8, 0.65, 0.95, 0.7, 0.8] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      />
      <polygon points="-6,10 6,10 0,-15" fill="#f59e0b" />
      <polygon points="-3,5 3,5 0,-10" fill="#fef08a" />
    </g>

    {/* Central Stone Pedestal */}
    <polygon points="260,450 300,340 500,340 540,450" fill="#24130a" stroke="#4a2715" strokeWidth="3" />

    {/* The Ancient Treasure Chest (Cedar & Ironbound) */}
    <g transform="translate(310, 260)">
      {/* Golden Aura of Mystery */}
      <motion.circle
        cx="90"
        cy="50"
        r="90"
        fill="url(#chestAura)"
        animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Open Chest Body */}
      <rect x="20" y="45" width="140" height="65" rx="5" fill="#451a03" stroke="#d4af37" strokeWidth="3" />
      {/* Iron corner straps */}
      <rect x="20" y="45" width="14" height="65" fill="#78350f" />
      <rect x="146" y="45" width="14" height="65" fill="#78350f" />
      <rect x="83" y="45" width="14" height="65" fill="#78350f" />

      {/* Gold Coins spilling over */}
      <circle cx="55" cy="46" r="7" fill="#ffd700" stroke="#b45309" strokeWidth="1" />
      <circle cx="68" cy="43" r="8" fill="#ffd700" stroke="#b45309" strokeWidth="1" />
      <circle cx="82" cy="46" r="7" fill="#ffd700" stroke="#b45309" strokeWidth="1" />
      <circle cx="60" cy="40" r="7" fill="#fef08a" />

      {/* The Sealed Cedar Cylinders (Ancient Scrolls) */}
      <rect x="100" y="32" width="40" height="15" rx="4" fill="#a16207" stroke="#d4af37" strokeWidth="2" transform="rotate(-15 100 32)" />
      <rect x="92" y="38" width="45" height="14" rx="4" fill="#ca8a04" stroke="#d4af37" strokeWidth="2" transform="rotate(-8 92 38)" />
      {/* Caliphal Red Wax Seal */}
      <circle cx="115" cy="45" r="5" fill="#b91c1c" />

      {/* Open Lid */}
      <path d="M 15 45 Q 90 -5 165 45 L 155 35 Q 90 -12 25 35 Z" fill="#582104" stroke="#d4af37" strokeWidth="2" />
    </g>
  </svg>
);

// 5. Ending 1: Legacy Scene (The Water of Life & Bayt al-Hikma)
const EndingLegacyScene: React.FC = () => (
  <svg viewBox="0 0 800 450" className="w-full h-full object-cover">
    <defs>
      <linearGradient id="skyLegacy" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#1e3a5f" />
        <stop offset="60%" stopColor="#0284c7" />
        <stop offset="100%" stopColor="#38bdf8" />
      </linearGradient>
      <linearGradient id="waterAqueduct" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#0369a1" />
        <stop offset="50%" stopColor="#38bdf8" />
        <stop offset="100%" stopColor="#0284c7" />
      </linearGradient>
    </defs>

    <rect width="800" height="450" fill="url(#skyLegacy)" />

    {/* Radiant Morning Sun */}
    <circle cx="400" cy="120" r="55" fill="#fef08a" />
    <motion.circle
      cx="400"
      cy="120"
      r="85"
      fill="#fef08a"
      opacity="0.35"
      animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.5, 0.25] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    />

    {/* Bayt al-Hikma Grand Arches in the background */}
    <g fill="#fde68a" opacity="0.85">
      <rect x="220" y="150" width="360" height="150" fill="#f5d061" />
      <path d="M 280 240 Q 340 160 400 240 Z" fill="#1e3a5f" />
      <path d="M 400 240 Q 460 160 520 240 Z" fill="#1e3a5f" />
      <polygon points="400,100 210,155 590,155" fill="#ca8a04" />
    </g>

    {/* Lush Green Oasis Palms */}
    <g fill="#14532d">
      {/* Left Palm Trees */}
      <path d="M 60 450 Q 80 320 50 220 Q 100 320 80 450 Z" fill="#451a03" />
      <circle cx="50" cy="210" r="45" fill="#15803d" />
      <circle cx="90" cy="230" r="38" fill="#166534" />

      {/* Right Palm Trees */}
      <path d="M 740 450 Q 720 320 750 220 Q 700 320 720 450 Z" fill="#451a03" />
      <circle cx="750" cy="210" r="45" fill="#15803d" />
      <circle cx="710" cy="230" r="38" fill="#166534" />
    </g>

    {/* Flowing Fresh Water Aqueduct / Canal */}
    <path d="M 0 350 Q 400 320 800 350 L 800 450 L 0 450 Z" fill="url(#waterAqueduct)" />
    {/* Animated shimmering water ripple */}
    <motion.path
      d="M 120 380 Q 240 370 360 380 T 600 380"
      stroke="#ffffff"
      strokeWidth="2.5"
      fill="none"
      opacity="0.7"
      animate={{ x: [-20, 20, -20], opacity: [0.4, 0.9, 0.4] }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
    />

    {/* Scholar Scroll & Astrolabe symbol in foreground */}
    <g transform="translate(350, 310)">
      <rect x="0" y="20" width="100" height="30" rx="6" fill="#fef3c7" stroke="#d4af37" strokeWidth="3" />
      <line x1="15" y1="28" x2="85" y2="28" stroke="#854d0e" strokeWidth="2" />
      <line x1="15" y1="36" x2="70" y2="36" stroke="#854d0e" strokeWidth="2" />
      <line x1="15" y1="44" x2="78" y2="44" stroke="#854d0e" strokeWidth="2" />
      <circle cx="50" cy="10" r="16" fill="#d4af37" stroke="#78350f" strokeWidth="2" />
      <circle cx="50" cy="10" r="6" fill="#fff" />
    </g>
  </svg>
);

// 6. Ending 2: Ruin Scene (The Heavy Burden)
const EndingRuinScene: React.FC = () => (
  <svg viewBox="0 0 800 450" className="w-full h-full object-cover">
    <defs>
      <linearGradient id="skyRuin" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#0f0704" />
        <stop offset="60%" stopColor="#451a03" />
        <stop offset="100%" stopColor="#78350f" />
      </linearGradient>
    </defs>

    <rect width="800" height="450" fill="url(#skyRuin)" />

    {/* Pale Bleak Sun in the dust */}
    <circle cx="300" cy="140" r="35" fill="#fde047" opacity="0.4" />

    {/* Harsh Windswept Dunes */}
    <path d="M 0 260 Q 300 200 800 280 L 800 450 L 0 450 Z" fill="#2d1306" />
    <path d="M 0 330 Q 450 250 800 340 L 800 450 L 0 450 Z" fill="#1f0c03" />

    {/* Swirling Dust Streaks */}
    <motion.line
      x1="0"
      y1="180"
      x2="800"
      y2="140"
      stroke="#b45309"
      strokeWidth="2"
      strokeDasharray="40 80"
      animate={{ strokeDashoffset: [0, -300] }}
      transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
    />

    {/* Broken Chest & Spilled Gold Buried in the Sand */}
    <g transform="translate(380, 310)">
      {/* Sunk chest */}
      <polygon points="20,40 100,20 120,60 40,80" fill="#3f1a07" stroke="#120602" strokeWidth="2" />
      {/* Buried gold coins scattered in dirt */}
      <circle cx="35" cy="70" r="6" fill="#eab308" opacity="0.8" />
      <circle cx="50" cy="76" r="7" fill="#ca8a04" opacity="0.7" />
      <circle cx="68" cy="68" r="6" fill="#a16207" opacity="0.6" />
      <circle cx="85" cy="74" r="5" fill="#78350f" opacity="0.5" />
    </g>

    {/* Solitary wanderer in the distance */}
    <g transform="translate(200, 240)" fill="#0f0502">
      <circle cx="10" cy="10" r="5" />
      <rect x="7" y="15" width="7" height="25" />
      <line x1="5" y1="20" x2="2" y2="40" stroke="#0f0502" strokeWidth="2" />
    </g>
  </svg>
);

// 7. Ending 3: Compromise Scene (The Divided Heart)
const EndingCompromiseScene: React.FC = () => (
  <svg viewBox="0 0 800 450" className="w-full h-full object-cover">
    <defs>
      <linearGradient id="skyCompromise" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#1e1b4b" />
        <stop offset="60%" stopColor="#431407" />
        <stop offset="100%" stopColor="#9a3412" />
      </linearGradient>
    </defs>

    <rect width="800" height="450" fill="url(#skyCompromise)" />

    {/* Starry Night Sky with Crescent Moon */}
    <circle cx="580" cy="90" r="24" fill="#fef08a" />
    <circle cx="587" cy="86" r="22" fill="#1e1b4b" />

    {/* Merchant Caravanserai Gate at Dusk */}
    <g fill="#271107">
      <rect x="140" y="160" width="520" height="290" />
      {/* Archway looking out to desert stars */}
      <path d="M 280 450 L 280 270 Q 400 180 520 270 L 520 450 Z" fill="#150a04" />
      {/* Lantern at gate */}
      <circle cx="400" cy="240" r="12" fill="#f59e0b" opacity="0.8" />
    </g>

    {/* Foreground: Merchant's Brass Scales (Gold on one side, single Scroll on the other) */}
    <g transform="translate(330, 310)">
      {/* Scale Beam & Stand */}
      <line x1="70" y1="20" x2="70" y2="90" stroke="#d4af37" strokeWidth="4" />
      <polygon points="50,90 90,90 70,80" fill="#a16207" />
      {/* Slightly tilted beam */}
      <line x1="20" y1="35" x2="120" y2="25" stroke="#d4af37" strokeWidth="3" />

      {/* Left Pan (Gold coins) */}
      <line x1="20" y1="35" x2="20" y2="60" stroke="#ca8a04" strokeWidth="1.5" />
      <path d="M 5 60 Q 20 70 35 60 Z" fill="#ca8a04" />
      <circle cx="16" cy="56" r="4" fill="#ffd700" />
      <circle cx="24" cy="55" r="4" fill="#ffd700" />

      {/* Right Pan (Parchment scroll) */}
      <line x1="120" y1="25" x2="120" y2="50" stroke="#ca8a04" strokeWidth="1.5" />
      <path d="M 105 50 Q 120 60 135 50 Z" fill="#ca8a04" />
      <rect x="110" y="42" width="18" height="6" rx="2" fill="#fef3c7" />
    </g>
  </svg>
);
