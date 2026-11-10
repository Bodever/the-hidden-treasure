import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download, Printer, Check, FileText } from 'lucide-react';
import { STORY_SCENES, CHARACTERS, HISTORICAL_GLOSSARY } from '../story/storyData';
import { StoryState } from '../story/types';
import { getScene } from '../story/engine';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentState: StoryState;
}

export const ExportModal: React.FC<ExportModalProps> = ({
  isOpen,
  onClose,
  currentState,
}) => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isOpen) return null;

  const currentEnding = getScene(currentState.currentSceneId, currentState.choices);

  const generateReportHtml = () => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>The Hidden Treasure - Project Manuscript</title>
  <style>
    body {
      font-family: 'Times New Roman', serif;
      line-height: 1.6;
      color: #2b180a;
      background: #fbf7ef;
      padding: 40px;
      max-width: 800px;
      margin: 0 auto;
    }
    .header {
      text-align: center;
      border-bottom: 2px solid #8c6b39;
      padding-bottom: 20px;
      margin-bottom: 30px;
    }
    h1 {
      font-size: 26px;
      color: #4a2711;
      margin-bottom: 5px;
      letter-spacing: 1px;
    }
    .author-badge {
      font-size: 16px;
      font-weight: bold;
      color: #8c6b39;
      margin-top: 10px;
    }
    .section-title {
      font-size: 18px;
      font-weight: bold;
      color: #633314;
      border-bottom: 1px solid #d4af37;
      margin-top: 25px;
      padding-bottom: 5px;
    }
    .passage {
      margin-bottom: 15px;
      background: #ffffff;
      padding: 12px;
      border-left: 3px solid #8c6b39;
      border-radius: 4px;
    }
    .en-text {
      font-size: 15px;
      margin-bottom: 6px;
    }
    .ar-text {
      font-family: 'Traditional Arabic', 'Amiri', serif;
      font-size: 16px;
      color: #664d38;
      direction: rtl;
      text-align: right;
    }
    .speaker {
      font-weight: bold;
      color: #8c4b23;
      font-size: 13px;
    }
    .footer {
      text-align: center;
      margin-top: 40px;
      font-size: 12px;
      color: #7c6853;
      border-top: 1px solid #d4af37;
      padding-top: 15px;
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>THE HIDDEN TREASURE</h1>
    <h3>A Historical Interactive Story • 9th-Century Abbasid Era</h3>
    <div class="author-badge">
      Prepared by: Abdullah Ali Khairallah<br>
      إعداد الطالب: عبدالله علي خيرالله
    </div>
    <p>English Storytelling Project • 1st-Year Secondary School (الصف الأول الثانوي)</p>
  </div>

  <div class="section-title">Expedition Dramatis Personae (الشخصيات)</div>
  <ul>
    ${CHARACTERS.map(
      (c) =>
        `<li><strong>${c.nameEn} (${c.nameAr})</strong>: ${c.roleEn} - <em>"${c.quoteEn}"</em></li>`
    ).join('')}
  </ul>

  <div class="section-title">Current Journey Outcome & Choices</div>
  <p><strong>Ending Reached:</strong> ${currentEnding.chapterTitleEn} (${currentEnding.chapterTitleAr})</p>
  <p><strong>Decision 1 (Wadi al-Zill):</strong> ${
    currentState.choices.decision1 === 'compassion'
      ? 'Chose compassion to splint Harith’s leg and share water.'
      : 'Chose haste to force the caravan forward through the night.'
  }</p>
  <p><strong>Decision 2 (Subterranean Vault):</strong> ${
    currentState.choices.decision2 === 'wisdom'
      ? 'Chose to secure the ancient scientific scrolls of water engineering.'
      : 'Chose to carry all the heavy gold bullion and abandon the scrolls.'
  }</p>

  <div class="section-title">Full Story Manuscript (النص الكامل)</div>
  ${Object.values(STORY_SCENES)
    .map(
      (scene) => `
    <h4>${scene.chapterTitleEn} • ${scene.locationEn}</h4>
    ${scene.paragraphs
      .map(
        (p) => `
      <div class="passage">
        ${p.speakerName ? `<div class="speaker">${p.speakerName.en} / ${p.speakerName.ar}:</div>` : ''}
        <div class="en-text">${p.en}</div>
        <div class="ar-text">${p.ar}</div>
      </div>
    `
      )
      .join('')}
  `
    )
    .join('')}

  <div class="section-title">Historical & Scientific Vocabulary (معجم المفردات)</div>
  <ul>
    ${HISTORICAL_GLOSSARY.map(
      (g) =>
        `<li><strong>${g.termEn} (${g.termAr})</strong>: ${g.meaningEn}</li>`
    ).join('')}
  </ul>

  <div class="footer">
    The Hidden Treasure • Prepared by Abdullah Ali Khairallah • Grade 10 English Project
  </div>
</body>
</html>`;
  };

  const handleDownload = () => {
    const htmlContent = generateReportHtml();
    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'The_Hidden_Treasure_Abdullah_Ali_Khairallah.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  const handlePrint = () => {
    const htmlContent = generateReportHtml();
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(htmlContent);
      printWindow.document.close();
      printWindow.focus();
      setTimeout(() => {
        printWindow.print();
      }, 500);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs select-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-xl rounded-2xl bg-[#1b120a] border border-[#8c6b39] p-6 shadow-2xl text-[#f4ecd8]"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-[#523d29]">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-[#321f10] border border-[#d4af37]/40 text-[#d4af37]">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h2 className="font-['Cinzel'] text-xl font-bold text-[#d4af37]">
                  Download Project Manuscript
                </h2>
                <p className="text-xs text-[#cfbeaa]">
                  Prepared by: Abdullah Ali Khairallah
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-[#27170c] hover:bg-[#3d2413] text-[#d4af37] border border-[#8c6b39]/40 transition-colors"
              aria-label="Close export modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Description */}
          <div className="py-5 space-y-3 text-sm text-[#d8c7b3]">
            <p>
              Export the complete bilingual manuscript, character analyses, vocabulary glossary,
              and your current journey's decisions as a clean, ready-to-submit document for teachers and grading.
            </p>
            <div className="p-3 rounded-lg bg-[#24170e] border border-[#4a3421] text-xs space-y-1">
              <div className="flex justify-between">
                <span className="text-[#a89582]">Author:</span>
                <span className="text-[#ffd700] font-bold">Abdullah Ali Khairallah</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#a89582]">Target Level:</span>
                <span className="text-[#f4ecd8]">Saudi 1st-Year Secondary School (الصف الأول الثانوي)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#a89582]">Language Format:</span>
                <span className="text-[#f4ecd8]">English Primary with Parallel Arabic Translation</span>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-3 border-t border-[#523d29]">
            <button
              onClick={handleDownload}
              className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-[#120d09] font-['Cinzel'] font-bold text-xs sm:text-sm tracking-wider flex items-center justify-center gap-2 shadow-md hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all cursor-pointer"
            >
              {downloadSuccess ? (
                <>
                  <Check className="w-4 h-4 text-[#120d09]" />
                  <span>Report Downloaded!</span>
                </>
              ) : (
                <>
                  <FileText className="w-4 h-4 text-[#120d09]" />
                  <span>Download Manuscript Report</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="py-3 px-4 rounded-xl bg-[#29180d] hover:bg-[#382212] border border-[#8c6b39] text-[#f5ebd7] font-['Cinzel'] font-bold text-xs sm:text-sm tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <Printer className="w-4 h-4 text-[#d4af37]" />
              <span>Print / Save PDF</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
