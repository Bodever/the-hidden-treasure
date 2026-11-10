import React from 'react';
import { motion } from 'motion/react';
import { StoryScene, PlayerChoices } from '../story/types';
import { Trophy, RotateCcw, Award, CheckCircle, FileDown, BookOpen, Compass, HeartHandshake } from 'lucide-react';
import { SceneIllustration } from './SceneIllustration';

interface EndingScreenProps {
  scene: StoryScene;
  choices: PlayerChoices;
  onRestart: () => void;
  showArabic: boolean;
  onExport: () => void;
}

export const EndingScreen: React.FC<EndingScreenProps> = ({
  scene,
  choices,
  onRestart,
  showArabic,
  onExport,
}) => {
  const getEndingBadge = () => {
    switch (scene.endingType) {
      case 'legacy':
        return {
          titleEn: 'The Scholar’s Legacy • True Treasure',
          titleAr: 'إرث الحكمة • الكنز الحقيقي الأبدي',
          color: 'from-amber-500/20 to-emerald-500/20 border-[#d4af37]',
          textGrad: 'from-[#fef08a] via-[#ffd700] to-[#b45309]',
          icon: Award,
          tag: 'Virtue & Eternal Knowledge',
        };
      case 'ruin':
        return {
          titleEn: 'The Golden Calamity • Lost in the Sands',
          titleAr: 'هلاك الذهب • الضياع في رمال الصحراء',
          color: 'from-red-950/40 to-amber-950/40 border-red-700/60',
          textGrad: 'from-red-300 via-amber-200 to-red-400',
          icon: Trophy,
          tag: 'Greed & Disillusionment',
        };
      case 'compromise':
      default:
        return {
          titleEn: 'The Merchant’s Compromise • A Divided Soul',
          titleAr: 'مساومة التاجر • سلامة الجسد وحسرة الفؤاد',
          color: 'from-amber-900/30 to-blue-900/30 border-[#ca8a04]',
          textGrad: 'from-[#fde68a] to-[#cbd5e1]',
          icon: Compass,
          tag: 'Pragmatism & Lingering Regret',
        };
    }
  };

  const badge = getEndingBadge();
  const Icon = badge.icon;

  return (
    <div className="max-w-4xl mx-auto space-y-8 py-6 select-none">
      {/* Top Ending Header Banner */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        className={`p-6 sm:p-8 rounded-2xl bg-gradient-to-b ${badge.color} border text-center relative overflow-hidden shadow-2xl`}
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#120d09]/80 border border-[#d4af37]/50 text-[#d4af37] text-xs font-['Cinzel'] tracking-widest uppercase mb-3">
          <Icon className="w-4 h-4 text-[#ffd700]" />
          <span>{badge.tag}</span>
        </div>

        <h1
          className={`font-['Cinzel'] text-2xl sm:text-4xl font-extrabold tracking-wider bg-gradient-to-r ${badge.textGrad} bg-clip-text text-transparent`}
        >
          {scene.endingTitleEn}
        </h1>

        {showArabic && (
          <h2 className="font-['Amiri'] text-xl sm:text-2xl text-[#d4af37] font-bold mt-2" dir="rtl">
            {scene.endingTitleAr}
          </h2>
        )}
      </motion.div>

      {/* Visual Scene Illustration */}
      <SceneIllustration
        illustrationKey={scene.illustrationKey}
        chapterNumber={scene.chapterNumber}
      />

      {/* Ending Story Passages */}
      <div className="space-y-4">
        {scene.paragraphs.map((p, idx) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="p-5 rounded-xl bg-[#1d120a]/90 border border-[#543b24] shadow-md"
          >
            <p className="font-['Cormorant_Garamond'] text-base sm:text-lg text-[#f5ebd7] font-medium leading-relaxed">
              {p.en}
            </p>
            {showArabic && (
              <p
                className="font-['Amiri'] text-sm sm:text-base text-[#cfbeaa] mt-2.5 pt-2 border-t border-[#3e2717] text-right leading-relaxed"
                dir="rtl"
              >
                {p.ar}
              </p>
            )}
          </motion.div>
        ))}
      </div>

      {/* Moral Reflection Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-6 rounded-2xl bg-[#24160c] border border-[#d4af37]/60 shadow-xl relative overflow-hidden"
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 rounded-lg bg-[#3d2715] text-[#ffd700]">
            <HeartHandshake className="w-5 h-5" />
          </div>
          <div>
            <span className="font-['Cinzel'] text-xs uppercase tracking-widest text-[#d4af37] font-bold">
              Moral Revelation & Theme • العبرة والحكمة
            </span>
            <h3 className="font-['Cinzel'] text-lg font-bold text-[#fff]">
              The Deeper Meaning of the Treasure
            </h3>
          </div>
        </div>

        <p className="font-['Cormorant_Garamond'] text-base sm:text-lg text-[#ffd700] italic leading-relaxed">
          "{scene.moralLessonEn}"
        </p>
        {showArabic && (
          <p
            className="font-['Amiri'] text-base text-[#e5d4be] mt-2 text-right leading-relaxed"
            dir="rtl"
          >
            "{scene.moralLessonAr}"
          </p>
        )}
      </motion.div>

      {/* Choice History Summary */}
      <div className="p-5 rounded-xl bg-[#170e07] border border-[#4a3421]">
        <h4 className="font-['Cinzel'] text-xs sm:text-sm tracking-wider uppercase text-[#d4af37] font-bold mb-3 flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-[#d4af37]" />
          <span>Your Choices in this Journey • سجل قراراتك</span>
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="p-3 rounded-lg bg-[#22150b] border border-[#3f2a18]">
            <span className="text-[#a89582] block mb-1">Decision 1: At the Sunken Well</span>
            <span className="font-semibold text-[#f5ebd7]">
              {choices.decision1 === 'compassion'
                ? 'Halted caravan to splint Harith’s leg & shared water'
                : 'Urged caravan through the night for speed & safety'}
            </span>
            <span className="block font-['Amiri'] text-[#d4af37] mt-1 text-right">
              {choices.decision1 === 'compassion'
                ? 'إيثار رعاية حارث ومداواته وتقاسم الماء'
                : 'مواصلة السير ليلاً لحفظ السبق'}
            </span>
          </div>

          <div className="p-3 rounded-lg bg-[#22150b] border border-[#3f2a18]">
            <span className="text-[#a89582] block mb-1">Decision 2: In the Vault of Qasr al-Zill</span>
            <span className="font-semibold text-[#f5ebd7]">
              {choices.decision2 === 'wisdom'
                ? 'Protected the scientific scrolls of water & medicine'
                : 'Abandoned scrolls to carry maximum gold bullion'}
            </span>
            <span className="block font-['Amiri'] text-[#d4af37] mt-1 text-right">
              {choices.decision2 === 'wisdom'
                ? 'حماية أسطوانات العلم والري والطب'
                : 'ترك المخطوطات وحمل سبائك الذهب'}
            </span>
          </div>
        </div>
      </div>

      {/* Action Buttons: Restart Journey & Export Project */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={onRestart}
          className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-[#120d09] font-['Cinzel'] font-bold text-sm tracking-wider flex items-center justify-center gap-2 shadow-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
          <span>EXPLORE ANOTHER PATH • رحلة جديدة</span>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={onExport}
          className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#2b190d] hover:bg-[#3d2413] border border-[#8c6b39] text-[#f5ebd7] font-['Cinzel'] font-bold text-sm tracking-wider flex items-center justify-center gap-2 shadow-md cursor-pointer"
        >
          <FileDown className="w-4 h-4 text-[#d4af37]" />
          <span>DOWNLOAD MANUSCRIPT • تحميل التقرير</span>
        </motion.button>
      </div>

      {/* Author Credit Section */}
      <div className="p-6 rounded-2xl bg-[#140b05] border border-[#523d29] text-center space-y-2 mt-8">
        <div className="flex items-center justify-center gap-2 text-[#d4af37] text-xs font-['Cinzel'] tracking-widest uppercase">
          <BookOpen className="w-4 h-4" />
          <span>School English Storytelling Project</span>
        </div>
        <p className="font-['Cinzel'] text-base sm:text-lg font-bold text-[#ffd700]">
          Prepared by: Abdullah Ali Khairallah
        </p>
        <p className="font-['Amiri'] text-base text-[#cfbeaa]" dir="rtl">
          إعداد الطالب: عبدالله علي خيرالله
        </p>
        <p className="text-xs text-[#a38c73] pt-1">
          1st-Year Secondary School (الصف الأول الثانوي) • Abbasid Historical Interactive Adventure
        </p>
      </div>
    </div>
  );
};
