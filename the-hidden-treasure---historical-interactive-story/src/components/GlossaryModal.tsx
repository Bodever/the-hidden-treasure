import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, BookOpen } from 'lucide-react';
import { HISTORICAL_GLOSSARY } from '../story/storyData';

interface GlossaryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GlossaryModal: React.FC<GlossaryModalProps> = ({ isOpen, onClose }) => {
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
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <h2 className="font-['Cinzel'] text-xl sm:text-2xl font-bold text-[#d4af37] tracking-wider">
                  Abbasid Historical Glossary • معجم العصر العباسي
                </h2>
                <p className="text-xs sm:text-sm text-[#c7b299]">
                  Historical and scientific vocabulary for Saudi Secondary School English Project
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-[#27170c] hover:bg-[#3d2413] text-[#d4af37] border border-[#8c6b39]/40 transition-colors"
              aria-label="Close glossary modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Terms Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {HISTORICAL_GLOSSARY.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#23170d] border border-[#523d29] hover:border-[#d4af37]/60 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-['Cinzel'] text-sm sm:text-base font-bold text-[#d4af37]">
                      {item.termEn}
                    </h3>
                    <span className="font-['Amiri'] text-base text-[#ecd9b0] font-bold shrink-0">
                      {item.termAr}
                    </span>
                  </div>
                  <p className="text-xs text-[#cfbeaa] leading-relaxed mb-3">
                    {item.meaningEn}
                  </p>
                </div>
                <p className="font-['Amiri'] text-xs text-[#b8a186] leading-relaxed pt-2 border-t border-[#3e2717] text-right">
                  {item.meaningAr}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center text-xs text-[#9d856e]">
            English Storytelling Project • 1st-Year Secondary School (الصف الأول الثانوي)
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
