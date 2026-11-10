import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Wind, Play, Pause, Square, Languages, Type } from 'lucide-react';
import { storyAudio } from '../utils/audio';

interface AudioBarProps {
  currentTextToNarrate: string;
  showArabic: boolean;
  onToggleArabic: () => void;
  fontScale: 'sm' | 'base' | 'lg';
  onChangeFontScale: (scale: 'sm' | 'base' | 'lg') => void;
}

export const AudioBar: React.FC<AudioBarProps> = ({
  currentTextToNarrate,
  showArabic,
  onToggleArabic,
  fontScale,
  onChangeFontScale,
}) => {
  const [isAmbienceOn, setIsAmbienceOn] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.4);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isSpeechPaused, setIsSpeechPaused] = useState(false);

  useEffect(() => {
    storyAudio.setSpeechListener((speaking, paused) => {
      setIsSpeaking(speaking);
      setIsSpeechPaused(paused);
    });

    return () => {
      storyAudio.stopSpeech();
      storyAudio.stopAmbience();
    };
  }, []);

  const handleToggleAmbience = () => {
    if (isAmbienceOn) {
      storyAudio.stopAmbience();
      setIsAmbienceOn(false);
    } else {
      storyAudio.startAmbience();
      setIsAmbienceOn(true);
    }
  };

  const handleToggleMute = () => {
    const muted = storyAudio.toggleMute();
    setIsMuted(muted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    storyAudio.setVolume(val);
  };

  const handleNarrate = () => {
    if (isSpeaking) {
      if (isSpeechPaused) {
        storyAudio.resumeSpeech();
      } else {
        storyAudio.pauseSpeech();
      }
    } else {
      storyAudio.speakText(currentTextToNarrate);
    }
  };

  const handleStopNarrate = () => {
    storyAudio.stopSpeech();
  };

  const cycleFontSize = () => {
    if (fontScale === 'sm') onChangeFontScale('base');
    else if (fontScale === 'base') onChangeFontScale('lg');
    else onChangeFontScale('sm');
  };

  return (
    <div className="w-full bg-[#180f08]/90 border-b border-[#523d29] px-4 py-2.5 backdrop-blur-md sticky top-0 z-40 transition-all select-none">
      <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
        {/* Left: Atmospheric Sound Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Desert Ambience Button */}
          <button
            onClick={handleToggleAmbience}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all ${
              isAmbienceOn
                ? 'bg-[#d4af37]/20 border-[#d4af37] text-[#ffd700] shadow-[0_0_10px_rgba(212,175,55,0.25)]'
                : 'bg-[#23170d] border-[#523d29] text-[#cbb69e] hover:border-[#8c6b39]'
            }`}
            title="Toggle authentic desert breeze ambient sound (zero external audio files)"
          >
            <Wind className={`w-3.5 h-3.5 ${isAmbienceOn ? 'animate-pulse text-[#d4af37]' : ''}`} />
            <span className="hidden sm:inline">Desert Breeze</span>
            <span className="sm:hidden">Ambience</span>
            <span className={`text-[10px] px-1 py-0.2 rounded font-bold ${isAmbienceOn ? 'bg-[#d4af37] text-[#120d09]' : 'bg-[#3b2716] text-[#cbb69e]'}`}>
              {isAmbienceOn ? 'ON' : 'OFF'}
            </span>
          </button>

          {/* Volume slider */}
          <div className="hidden md:flex items-center gap-2 bg-[#23170d] px-2.5 py-1 rounded-lg border border-[#523d29]">
            <button
              onClick={handleToggleMute}
              className="text-[#d4af37] hover:text-[#fff] transition-colors"
              aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5 text-red-400" /> : <Volume2 className="w-3.5 h-3.5" />}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              className="w-16 sm:w-20 accent-[#d4af37] cursor-pointer h-1.5 bg-[#452c1a] rounded-lg"
              aria-label="Volume slider"
            />
          </div>
        </div>

        {/* Center: TTS English Narration */}
        <div className="flex items-center gap-1.5 bg-[#23170d] px-2.5 py-1 rounded-lg border border-[#523d29]">
          <button
            onClick={handleNarrate}
            className={`flex items-center gap-1.5 px-2 py-0.5 rounded text-xs font-medium transition-colors ${
              isSpeaking && !isSpeechPaused
                ? 'text-[#ffd700] bg-[#d4af37]/20 font-semibold'
                : 'text-[#d4af37] hover:text-[#fff]'
            }`}
            title="Narrate current chapter aloud in English (Browser Text-to-Speech)"
          >
            {isSpeaking && !isSpeechPaused ? (
              <>
                <Pause className="w-3.5 h-3.5" />
                <span>Pause Audio</span>
              </>
            ) : isSpeaking && isSpeechPaused ? (
              <>
                <Play className="w-3.5 h-3.5" />
                <span>Resume</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">English Narration</span>
                <span className="sm:hidden">Read</span>
              </>
            )}
          </button>

          {isSpeaking && (
            <button
              onClick={handleStopNarrate}
              className="text-red-400 hover:text-red-300 p-1"
              title="Stop narration"
              aria-label="Stop narration"
            >
              <Square className="w-3 h-3 fill-current" />
            </button>
          )}
        </div>

        {/* Right: Bilingual & Font Size Toggles */}
        <div className="flex items-center gap-2">
          {/* Arabic Translation Toggle */}
          <button
            onClick={onToggleArabic}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-xs font-medium transition-colors ${
              showArabic
                ? 'bg-[#3b2716] border-[#d4af37]/60 text-[#f4ecd8]'
                : 'bg-[#23170d] border-[#523d29] text-[#a89582] hover:border-[#8c6b39]'
            }`}
            title="Toggle Arabic translation beneath English text"
          >
            <Languages className="w-3.5 h-3.5 text-[#d4af37]" />
            <span className="font-['Amiri'] font-bold text-xs">
              {showArabic ? 'الترجمة: ظاهرة' : 'الترجمة: مخفية'}
            </span>
          </button>

          {/* Font Scale Button */}
          <button
            onClick={cycleFontSize}
            className="flex items-center gap-1 px-2 py-1.5 rounded-lg bg-[#23170d] border border-[#523d29] text-[#d4af37] hover:border-[#8c6b39] text-xs font-semibold"
            title="Adjust text size"
          >
            <Type className="w-3.5 h-3.5" />
            <span className="uppercase text-[10px]">{fontScale}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
