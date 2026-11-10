import React from 'react';
import { motion } from 'motion/react';
import { PassageParagraph } from '../story/types';
import { User, Compass, Coins, BookOpen } from 'lucide-react';

interface StoryPassageProps {
  paragraphs: PassageParagraph[];
  showArabic: boolean;
  fontScale: 'sm' | 'base' | 'lg';
}

export const StoryPassage: React.FC<StoryPassageProps> = ({
  paragraphs,
  showArabic,
  fontScale,
}) => {
  const getSpeakerBadge = (p: PassageParagraph) => {
    if (!p.speaker || p.speaker === 'narrator') {
      return null;
    }

    const speakerConfigs: Record<
      string,
      {
        bg: string;
        border: string;
        textColor: string;
        icon: React.ComponentType<{ className?: string }>;
      }
    > = {
      yusuf: {
        bg: 'bg-[#2a1a0f]',
        border: 'border-[#b8860b]/60',
        textColor: 'text-[#ffd700]',
        icon: BookOpen,
      },
      harith: {
        bg: 'bg-[#1b261b]',
        border: 'border-[#4ade80]/40',
        textColor: 'text-[#86efac]',
        icon: Compass,
      },
      qasim: {
        bg: 'bg-[#29181c]',
        border: 'border-[#f43f5e]/40',
        textColor: 'text-[#fda4af]',
        icon: Coins,
      },
    };

    const config = speakerConfigs[p.speaker] || speakerConfigs.yusuf;
    const Icon = config.icon;

    return (
      <div
        className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${config.bg} ${config.border} ${config.textColor} mb-2 shadow-xs`}
      >
        <Icon className="w-3.5 h-3.5" />
        <span className="font-['Cinzel'] tracking-wide">{p.speakerName?.en}</span>
        <span className="opacity-40">•</span>
        <span className="font-['Amiri'] font-bold text-xs">{p.speakerName?.ar}</span>
      </div>
    );
  };

  const getEnTextSize = () => {
    switch (fontScale) {
      case 'sm':
        return 'text-sm sm:text-base leading-relaxed';
      case 'lg':
        return 'text-lg sm:text-xl leading-loose';
      case 'base':
      default:
        return 'text-base sm:text-lg leading-relaxed';
    }
  };

  const getArTextSize = () => {
    switch (fontScale) {
      case 'sm':
        return 'text-sm sm:text-base leading-relaxed';
      case 'lg':
        return 'text-lg sm:text-xl leading-loose';
      case 'base':
      default:
        return 'text-base sm:text-lg leading-relaxed';
    }
  };

  return (
    <div className="space-y-6 my-6">
      {paragraphs.map((p, idx) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: idx * 0.08 }}
          className="relative rounded-xl p-4 sm:p-5 bg-[#1b120a]/80 border border-[#4a3421] hover:border-[#8c6b39]/60 transition-all shadow-md group"
        >
          {/* Subtle Arabesque decorative left border accent */}
          <div className="absolute left-0 top-3 bottom-3 w-1 bg-gradient-to-b from-[#d4af37]/70 via-[#8c6b39]/30 to-transparent rounded-r" />

          {/* Speaker label if dialogue */}
          {getSpeakerBadge(p)}

          {/* English story passage */}
          <p
            className={`font-['Cormorant_Garamond'] text-[#f5ebd7] font-medium tracking-normal ${getEnTextSize()}`}
          >
            {p.en}
          </p>

          {/* Arabic translation beneath every story passage */}
          {showArabic && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
              className="mt-3 pt-3 border-t border-[#3e2717] text-right"
            >
              <p
                className={`font-['Amiri'] text-[#d2baa0] leading-relaxed tracking-wide ${getArTextSize()}`}
                dir="rtl"
              >
                {p.ar}
              </p>
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
};
