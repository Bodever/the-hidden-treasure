export type CharacterId = 'yusuf' | 'harith' | 'qasim' | 'narrator';

export interface PassageParagraph {
  id: string;
  speaker?: CharacterId;
  speakerName?: {
    en: string;
    ar: string;
  };
  en: string;
  ar: string;
}

export interface StoryChoice {
  id: string;
  textEn: string;
  textAr: string;
  nextSceneId: string;
  recordChoiceKey?: string;
  recordChoiceValue?: string;
}

export interface StoryScene {
  id: string;
  chapterNumber: number;
  chapterTitleEn: string;
  chapterTitleAr: string;
  locationEn: string;
  locationAr: string;
  illustrationKey: 'baghdad_market' | 'desert_caravan' | 'storm_dunes' | 'ancient_caravanserai' | 'vault_chamber' | 'ending_legacy' | 'ending_ruin' | 'ending_compromise';
  paragraphs: PassageParagraph[];
  choices?: StoryChoice[];
  isEnding?: boolean;
  endingType?: 'legacy' | 'ruin' | 'compromise';
  endingTitleEn?: string;
  endingTitleAr?: string;
  moralLessonEn?: string;
  moralLessonAr?: string;
}

export interface PlayerChoices {
  decision1?: 'compassion' | 'haste';
  decision2?: 'wisdom' | 'gold';
  visitedSceneIds: string[];
}

export interface StoryState {
  currentSceneId: string;
  choices: PlayerChoices;
  history: string[];
  isCompleted: boolean;
}
