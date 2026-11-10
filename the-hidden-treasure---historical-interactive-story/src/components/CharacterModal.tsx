import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, User, Compass, Coins, Scroll } from 'lucide-react';
import { CHARACTERS } from '../story/storyData';

interface CharacterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CharacterModal: React.FC<CharacterModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#1b120a] border border-[#8c6b39] p-6 shadow-2xl text-[#f4ecd8]"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-[#523d29]">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-[#321f10] border border-[#d4af37]/40 text-[#d4af37]">
                <User className="w-6 h-6" />
              </div>
              <div>
                <h2 className="font-['Cinzel'] text-xl sm:text-2xl font-bold text-[#d4af37] tracking-wider">
                  Dramatis Personae • شخصيات الرواية
                </h2>
                <p className="text-xs sm:text-sm text-[#c7b299]">
                  The Three Travelers of the 9th-Century Abbasid Expedition
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-[#27170c] hover:bg-[#3d2413] text-[#d4af37] border border-[#8c6b39]/40 transition-colors"
              aria-label="Close characters modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            {CHARACTERS.map((char) => {
              const Icon = char.id === 'yusuf' ? Scroll : char.id === 'harith' ? Compass : Coins;
              return (
                <div
                  key={char.id}
                  className="rounded-xl bg-[#23170d] border border-[#5a3f28] hover:border-[#d4af37]/60 p-4 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2 rounded-lg bg-[#3d2715] text-[#d4af37]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-['Amiri'] text-lg text-[#d4af37] font-bold">
                        {char.nameAr}
                      </span>
                    </div>

                    <h3 className="font-['Cinzel'] text-base font-bold text-[#f5ebd7]">
                      {char.nameEn}
                    </h3>
                    <p className="text-xs font-semibold text-[#d4af37] mb-2">
                      {char.roleEn} • <span className="font-['Amiri']">{char.roleAr}</span>
                    </p>

                    <p className="text-xs text-[#cfbeaa] leading-relaxed mb-3">
                      {char.bioEn}
                    </p>
                    <p className="font-['Amiri'] text-xs text-[#b8a186] leading-relaxed mb-4 text-right">
                      {char.bioAr}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#3e2717]">
                    <p className="text-xs italic text-[#e6c989] mb-1">
                      {char.quoteEn}
                    </p>
                    <p className="font-['Amiri'] text-xs italic text-[#d4af37]/80 text-right">
                      {char.quoteAr}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer note */}
          <div className="mt-6 p-4 rounded-xl bg-[#140b05] border border-[#4a311b] text-center text-xs text-[#b09a80]">
            <p className="font-['Cinzel'] text-[#d4af37] tracking-wider mb-1">
              HISTORICAL AUTHENTICITY NOTE
            </p>
            <p>
              Set in the golden age of 9th-century Abbasid Baghdad, characters reflect the real interplay
              between scholarly curiosity (Bayt al-Hikma), commercial enterprise (Karkh merchants), and desert Bedouin wisdom.
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
