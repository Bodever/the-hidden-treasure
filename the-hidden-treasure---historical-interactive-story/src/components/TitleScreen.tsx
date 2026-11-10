import React from 'react';
import { motion } from 'motion/react';
import { Compass, Users, BookOpen, Sparkles, Feather, ScrollText } from 'lucide-react';
import { storyAudio } from '../utils/audio';

interface TitleScreenProps {
  onStart: () => void;
  onOpenCharacters: () => void;
  onOpenGlossary: () => void;
}

export const TitleScreen: React.FC<TitleScreenProps> = ({
  onStart,
  onOpenCharacters,
  onOpenGlossary,
}) => {
  const handleStart = () => {
    storyAudio.playPageTurn();
    onStart();
  };

  return (
    <div className="relative min-h-[92vh] flex flex-col items-center justify-center px-4 py-12 text-center select-none overflow-hidden">
      {/* Background Decorative Arch Motif & Glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-b from-[#d4af37]/8 via-[#8c4b23]/10 to-transparent blur-3xl" />
      </div>

      {/* Outer Parchment Container with Antique Arabesque Corners */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 w-full max-w-3xl p-6 sm:p-10 md:p-12 rounded-3xl bg-gradient-to-b from-[#1f130a]/95 via-[#180e07]/95 to-[#120a04]/98 border border-[#78542b] shadow-[0_20px_60px_rgba(0,0,0,0.85)] backdrop-blur-md"
      >
        {/* Antique Corner Filigree */}
        <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-[#d4af37]/70 pointer-events-none" />
        <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-[#d4af37]/70 pointer-events-none" />
        <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-[#d4af37]/70 pointer-events-none" />
        <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-[#d4af37]/70 pointer-events-none" />

        {/* School Project Header Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2a1a0f] border border-[#8c6b39]/60 text-[#ffd700] text-xs font-['Cinzel'] tracking-widest uppercase mb-6 shadow-inner">
          <Feather className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>School English Storytelling Project • 9th-Century Abbasid Era</span>
        </div>

        {/* Large Cinematic Title */}
        <h1 className="font-['Cinzel'] text-3xl sm:text-5xl md:text-6xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-b from-[#fef08a] via-[#e2b755] to-[#9a671f] drop-shadow-md">
          THE HIDDEN TREASURE
        </h1>

        {/* Subtitle */}
        <p className="font-['Cinzel'] text-sm sm:text-lg tracking-[0.25em] text-[#d4af37] uppercase font-semibold mt-2">
          A Historical Interactive Story
        </p>

        {/* Arabic Subtitle */}
        <p className="font-['Amiri'] text-xl sm:text-2xl text-[#d8c3aa] font-bold mt-2" dir="rtl">
          الكنز الدفين • رواية تاريخية تفاعلية
        </p>

        {/* Prominent Author Credit */}
        <div className="my-6 py-3.5 px-6 rounded-2xl bg-[#26160b]/90 border border-[#b8860b]/50 inline-block shadow-md">
          <div className="flex items-center justify-center gap-2 text-xs font-['Cinzel'] tracking-widest text-[#d4af37] uppercase mb-1">
            <ScrollText className="w-3.5 h-3.5" />
            <span>AUTHOR CREDIT</span>
          </div>
          <p className="font-['Cinzel'] text-lg sm:text-2xl font-extrabold text-[#ffd700] tracking-wide">
            Prepared by: Abdullah Ali Khairallah
          </p>
          <p className="font-['Amiri'] text-base sm:text-lg text-[#ecd9b0] font-bold" dir="rtl">
            إعداد: عبدالله علي خيرالله
          </p>
          <p className="text-[11px] sm:text-xs text-[#a89582] mt-1 font-['Cinzel'] tracking-wider">
            1st-Year Secondary School (الصف الأول الثانوي)
          </p>
        </div>

        {/* Story Premise Synopsis */}
        <p className="font-['Cormorant_Garamond'] text-base sm:text-lg text-[#e6d5bf] max-w-xl mx-auto leading-relaxed italic mb-8">
          "Join Yusuf, the veteran guide Harith, and the merchant Qasim as they journey into the uncharted Syrian desert.
          Face moral dilemmas where every decision shapes whether you discover fleeting gold, or an eternal legacy that lives beyond the sands."
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleStart}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-[#d4af37] via-[#ffd700] to-[#b8860b] text-[#120d09] font-['Cinzel'] font-black text-sm sm:text-base tracking-widest flex items-center justify-center gap-3 shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:shadow-[0_0_35px_rgba(212,175,55,0.6)] transition-all cursor-pointer"
          >
            <Compass className="w-5 h-5 text-[#120d09]" />
            <span>BEGIN THE ADVENTURE</span>
          </motion.button>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenCharacters}
              className="flex-1 sm:flex-initial px-4 py-3.5 rounded-xl bg-[#2b190d] hover:bg-[#3d2413] border border-[#8c6b39] text-[#f5ebd7] font-['Cinzel'] font-semibold text-xs sm:text-sm tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <Users className="w-4 h-4 text-[#d4af37]" />
              <span>Characters</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenGlossary}
              className="flex-1 sm:flex-initial px-4 py-3.5 rounded-xl bg-[#2b190d] hover:bg-[#3d2413] border border-[#8c6b39] text-[#f5ebd7] font-['Cinzel'] font-semibold text-xs sm:text-sm tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-[#d4af37]" />
              <span>Glossary</span>
            </motion.button>
          </div>
        </div>

        {/* Feature Highlights Pills */}
        <div className="mt-10 pt-6 border-t border-[#4a3421] grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-[#a89582]">
          <div className="flex items-center justify-center gap-1.5 p-2 rounded-lg bg-[#190f07]">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>2 Major Decisions</span>
          </div>
          <div className="flex items-center justify-center gap-1.5 p-2 rounded-lg bg-[#190f07]">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>3 Unique Endings</span>
          </div>
          <div className="flex items-center justify-center gap-1.5 p-2 rounded-lg bg-[#190f07]">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Parallel Arabic</span>
          </div>
          <div className="flex items-center justify-center gap-1.5 p-2 rounded-lg bg-[#190f07]">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>5-Min Experience</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
