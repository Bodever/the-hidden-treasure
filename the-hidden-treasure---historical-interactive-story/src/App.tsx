/**
 * THE HIDDEN TREASURE - A Historical Interactive Story
 * Prepared by: Abdullah Ali Khairallah
 * School English Storytelling Project (1st-Year Secondary School)
 */

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  INITIAL_STORY_STATE,
  getScene,
  makeChoice,
  restartStory,
} from './story/engine';
import { StoryState } from './story/types';
import { AudioBar } from './components/AudioBar';
import { ChapterHeader } from './components/ChapterHeader';
import { SceneIllustration } from './components/SceneIllustration';
import { StoryPassage } from './components/StoryPassage';
import { StoryChoices } from './components/StoryChoices';
import { EndingScreen } from './components/EndingScreen';
import { TitleScreen } from './components/TitleScreen';
import { CharacterModal } from './components/CharacterModal';
import { GlossaryModal } from './components/GlossaryModal';
import { ExportModal } from './components/ExportModal';
import { storyAudio } from './utils/audio';
import { Feather, FileDown, BookOpen } from 'lucide-react';

export default function App() {
  const [storyState, setStoryState] = useState<StoryState>(() => {
    return { ...INITIAL_STORY_STATE };
  });

  // Autostart support via query params (useful for automated testing and skipping intro)
  const [showTitleScreen, setShowTitleScreen] = useState(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      return params.get('autostart') !== '1';
    }
    return true;
  });

  const [showArabic, setShowArabic] = useState<boolean>(true);
  const [fontScale, setFontScale] = useState<'sm' | 'base' | 'lg'>('base');

  const [isCharactersOpen, setIsCharactersOpen] = useState(false);
  const [isGlossaryOpen, setIsGlossaryOpen] = useState(false);
  const [isExportOpen, setIsExportOpen] = useState(false);

  // Get current scene
  const currentScene = useMemo(() => {
    return getScene(storyState.currentSceneId, storyState.choices);
  }, [storyState.currentSceneId, storyState.choices]);

  // Aggregate current scene's English text for speech narration
  const chapterNarrationText = useMemo(() => {
    const title = `${currentScene.chapterTitleEn}. Location: ${currentScene.locationEn}. `;
    const body = currentScene.paragraphs.map((p) => {
      const speaker = p.speakerName ? `${p.speakerName.en} said: ` : '';
      return `${speaker}${p.en}`;
    }).join(' ');
    return title + body;
  }, [currentScene]);

  // Stop speech synthesis if scene changes
  useEffect(() => {
    storyAudio.stopSpeech();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [storyState.currentSceneId, showTitleScreen]);

  const handleSelectChoice = (choiceId: string) => {
    const nextState = makeChoice(storyState, choiceId);
    setStoryState(nextState);
  };

  const handleRestart = () => {
    storyAudio.playPageTurn();
    setStoryState(restartStory());
    setShowTitleScreen(true);
  };

  return (
    <div className="min-h-screen bg-[#110b06] text-[#f5ebd7] font-sans flex flex-col selection:bg-[#d4af37] selection:text-[#110b06]">
      {/* Audio & Settings Control Bar */}
      <AudioBar
        currentTextToNarrate={chapterNarrationText}
        showArabic={showArabic}
        onToggleArabic={() => setShowArabic((prev) => !prev)}
        fontScale={fontScale}
        onChangeFontScale={setFontScale}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full flex flex-col justify-between">
        {showTitleScreen ? (
          <TitleScreen
            onStart={() => setShowTitleScreen(false)}
            onOpenCharacters={() => setIsCharactersOpen(true)}
            onOpenGlossary={() => setIsGlossaryOpen(true)}
          />
        ) : (
          <div className="w-full">
            {/* Chapter Progress & Navigation Header */}
            <ChapterHeader
              scene={currentScene}
              onOpenCharacters={() => setIsCharactersOpen(true)}
              onOpenGlossary={() => setIsGlossaryOpen(true)}
              onRestart={handleRestart}
            />

            {/* Chapter Story Reader or Ending Screen */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentScene.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.4 }}
                >
                  {currentScene.isEnding ? (
                    <EndingScreen
                      scene={currentScene}
                      choices={storyState.choices}
                      onRestart={handleRestart}
                      showArabic={showArabic}
                      onExport={() => setIsExportOpen(true)}
                    />
                  ) : (
                    <div>
                      {/* Atmospheric Scene Illustration */}
                      <SceneIllustration
                        illustrationKey={currentScene.illustrationKey}
                        chapterNumber={currentScene.chapterNumber}
                      />

                      {/* Bilingual Story Passages */}
                      <StoryPassage
                        paragraphs={currentScene.paragraphs}
                        showArabic={showArabic}
                        fontScale={fontScale}
                      />

                      {/* Interactive Choices */}
                      <StoryChoices
                        choices={currentScene.choices || []}
                        onSelectChoice={handleSelectChoice}
                        showArabic={showArabic}
                        isEnding={currentScene.isEnding}
                      />
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        )}
      </main>

      {/* Persistent Author Credit & School Project Footer */}
      <footer className="w-full bg-[#0d0704] border-t border-[#3f2917] py-6 px-4 text-center text-xs select-none">
        <div className="max-w-4xl mx-auto space-y-2">
          <div className="flex items-center justify-center gap-2 text-[#d4af37]">
            <Feather className="w-4 h-4" />
            <span className="font-['Cinzel'] tracking-widest uppercase font-bold">
              School English Storytelling Project
            </span>
          </div>

          <p className="font-['Cinzel'] text-sm sm:text-base font-extrabold text-[#ffd700]">
            Prepared by: Abdullah Ali Khairallah
          </p>

          <p className="font-['Amiri'] text-sm sm:text-base text-[#d8c3aa]" dir="rtl">
            إعداد الطالب: عبدالله علي خيرالله • الصف الأول الثانوي
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-[#a89582]">
            <button
              onClick={() => setIsExportOpen(true)}
              className="hover:text-[#ffd700] transition-colors flex items-center gap-1 cursor-pointer"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Download Manuscript / Report</span>
            </button>
            <span>•</span>
            <button
              onClick={() => setIsGlossaryOpen(true)}
              className="hover:text-[#ffd700] transition-colors flex items-center gap-1 cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Abbasid Era Glossary</span>
            </button>
            <span>•</span>
            <button
              onClick={() => setIsCharactersOpen(true)}
              className="hover:text-[#ffd700] transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>Characters Guide</span>
            </button>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <CharacterModal
        isOpen={isCharactersOpen}
        onClose={() => setIsCharactersOpen(false)}
      />
      <GlossaryModal
        isOpen={isGlossaryOpen}
        onClose={() => setIsGlossaryOpen(false)}
      />
      <ExportModal
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
        currentState={storyState}
      />
    </div>
  );
}
