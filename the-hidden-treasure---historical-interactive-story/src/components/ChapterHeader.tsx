import React from 'react';
import { StoryScene } from '../story/types';
import { calculateProgress } from '../story/engine';
import { Users, BookOpen, RotateCcw, MapPin, Compass } from 'lucide-react';

interface ChapterHeaderProps {
  scene: StoryScene;
  onOpenCharacters: () => void;
  onOpenGlossary: () => void;
  onRestart: () => void;
}

export const ChapterHeader: React.FC<ChapterHeaderProps> = ({
  scene,
  onOpenCharacters,
  onOpenGlossary,
  onRestart,
}) => {
  const progress = calculateProgress(scene.id);

  return (
    <div className="w-full bg-[#180f08]/90 border-b border-[#4a3421] px-4 py-3 select-none">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3">
        {/* Left: Chapter & Location */}
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2 py-0.5 rounded bg-[#352112] border border-[#d4af37]/40 text-[#ffd700] font-['Cinzel'] text-xs font-bold tracking-wider">
              ACT {scene.chapterNumber} OF 5
            </span>
            <div className="flex items-center gap-1 text-[11px] text-[#caa884]">
              <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
              <span className="hidden sm:inline">{scene.locationEn}</span>
              <span className="sm:hidden">{scene.locationEn.split('•')[0]}</span>
            </div>
          </div>

          <h2 className="font-['Cinzel'] text-lg sm:text-xl font-bold text-[#f5ebd7] tracking-wide">
            {scene.chapterTitleEn}
          </h2>
          <p className="font-['Amiri'] text-sm sm:text-base text-[#d4af37] font-semibold" dir="rtl">
            {scene.chapterTitleAr}
          </p>
        </div>

        {/* Right: Actions & Progress */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Quick Buttons */}
          <button
            onClick={onOpenCharacters}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#27170c] hover:bg-[#382314] border border-[#78542b] text-[#f4ecd8] text-xs font-medium transition-colors"
            title="View Characters: Yusuf, Harith, Qasim"
          >
            <Users className="w-3.5 h-3.5 text-[#d4af37]" />
            <span className="hidden sm:inline">Characters</span>
          </button>

          <button
            onClick={onOpenGlossary}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#27170c] hover:bg-[#382314] border border-[#78542b] text-[#f4ecd8] text-xs font-medium transition-colors"
            title="View Abbasid Historical Glossary"
          >
            <BookOpen className="w-3.5 h-3.5 text-[#d4af37]" />
            <span className="hidden sm:inline">Glossary</span>
          </button>

          <button
            onClick={onRestart}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-[#27170c] hover:bg-[#382314] border border-[#78542b] text-[#caa884] hover:text-[#ffd700] text-xs font-medium transition-colors"
            title="Restart adventure from Chapter I"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Restart</span>
          </button>
        </div>
      </div>

      {/* Progress Bar with Milestone Compass */}
      <div className="max-w-5xl mx-auto mt-3">
        <div className="flex items-center justify-between text-[10px] text-[#caa884] mb-1 font-['Cinzel']">
          <span className="flex items-center gap-1">
            <Compass className="w-3 h-3 text-[#d4af37]" />
            <span>Story Progress • مسار القصة</span>
          </span>
          <span className="text-[#ffd700] font-bold">{progress}%</span>
        </div>
        <div className="w-full h-1.5 bg-[#2c1a0e] rounded-full overflow-hidden border border-[#523d29]">
          <div
            className="h-full bg-gradient-to-r from-[#8c6b39] via-[#d4af37] to-[#ffd700] transition-all duration-500 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};
