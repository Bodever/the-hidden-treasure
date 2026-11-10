import React from 'react';
import { motion } from 'motion/react';
import { StoryChoice } from '../story/types';
import { Compass, Sparkles } from 'lucide-react';
import { storyAudio } from '../utils/audio';

interface StoryChoicesProps {
  choices: StoryChoice[];
  onSelectChoice: (choiceId: string) => void;
  showArabic: boolean;
  isEnding?: boolean;
}

export const StoryChoices: React.FC<StoryChoicesProps> = ({
  choices,
  onSelectChoice,
  showArabic,
  isEnding,
}) => {
  if (!choices || choices.length === 0) return null;

  const handleChoice = (id: string) => {
    storyAudio.playChoiceSound();
    onSelectChoice(id);
  };

  const isDecision = choices.length > 1;

  return (
    <div className="mt-8 pt-6 border-t border-[#523d29]">
      {/* Title banner for critical decisions */}
      {isDecision && (
        <div className="flex items-center justify-center gap-2 mb-4 text-center">
          <Sparkles className="w-4 h-4 text-[#d4af37] animate-pulse" />
          <span className="font-['Cinzel'] text-xs sm:text-sm tracking-widest uppercase font-bold text-[#d4af37]">
            The Path Ahead • مفترق الطرق
          </span>
          <Sparkles className="w-4 h-4 text-[#d4af37] animate-pulse" />
        </div>
      )}

      {/* Choice Buttons */}
      <div
        className={`grid gap-4 ${
          isDecision ? 'grid-cols-1 md:grid-cols-2' : 'max-w-xl mx-auto'
        }`}
      >
        {choices.map((choice, index) => (
          <motion.button
            key={choice.id}
            whileHover={{ scale: 1.015, y: -2 }}
            whileTap={{ scale: 0.985 }}
            onClick={() => handleChoice(choice.id)}
            className={`relative group text-left p-5 sm:p-6 rounded-xl border transition-all duration-300 shadow-lg cursor-pointer ${
              isDecision
                ? 'bg-gradient-to-br from-[#26170d] via-[#1f1209] to-[#150a04] border-[#8c6b39]/60 hover:border-[#ffd700] hover:shadow-[0_0_20px_rgba(212,175,55,0.22)]'
                : 'bg-gradient-to-r from-[#3e2715] to-[#2b180a] border-[#d4af37] text-center hover:shadow-[0_0_25px_rgba(212,175,55,0.3)]'
            }`}
          >
            {/* Subtle glow border accent */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#d4af37]/0 via-[#d4af37]/5 to-[#d4af37]/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

            {/* Corner motif */}
            <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-[#d4af37]/40 group-hover:border-[#ffd700]" />
            <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-[#d4af37]/40 group-hover:border-[#ffd700]" />

            <div className="relative z-10 flex flex-col justify-between h-full">
              <div>
                {isDecision && (
                  <div className="flex items-center gap-2 mb-2.5">
                    <span className="w-6 h-6 rounded-full bg-[#3d2412] border border-[#d4af37]/50 text-[#d4af37] flex items-center justify-center font-['Cinzel'] text-xs font-bold">
                      {index === 0 ? 'I' : 'II'}
                    </span>
                    <span className="font-['Cinzel'] text-[11px] tracking-wider text-[#d4af37]/80 uppercase">
                      Choice {index + 1}
                    </span>
                  </div>
                )}

                {/* English Choice Text */}
                <p className="font-['Cormorant_Garamond'] text-base sm:text-lg font-bold text-[#f5ebd7] group-hover:text-[#ffd700] leading-snug transition-colors">
                  {choice.textEn}
                </p>

                {/* Arabic Translation beneath Choice */}
                {showArabic && (
                  <p
                    className="font-['Amiri'] text-sm sm:text-base text-[#cfbeaa] group-hover:text-[#fef08a] mt-2.5 pt-2 border-t border-[#3e2717] text-right leading-relaxed"
                    dir="rtl"
                  >
                    {choice.textAr}
                  </p>
                )}
              </div>

              {!isDecision && (
                <div className="mt-3 flex items-center justify-center gap-2 text-xs font-['Cinzel'] tracking-wider text-[#d4af37]">
                  <Compass className="w-4 h-4 animate-spin-slow" />
                  <span>{isEnding ? 'BEGIN NEW EXPLORATION' : 'CONTINUE THE JOURNEY'}</span>
                </div>
              )}
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
};
