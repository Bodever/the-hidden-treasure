import { StoryState, StoryScene, PlayerChoices } from './types';
import { STORY_SCENES } from './storyData';

export const INITIAL_STORY_STATE: StoryState = {
  currentSceneId: 'intro_baghdad',
  choices: {
    visitedSceneIds: ['intro_baghdad'],
  },
  history: ['intro_baghdad'],
  isCompleted: false,
};

export function getScene(sceneId: string, choices: PlayerChoices): StoryScene {
  if (sceneId === 'eval_ending') {
    // Determine which ending to route to based on decision1 and decision2
    const { decision1, decision2 } = choices;

    if (decision1 === 'compassion' && decision2 === 'wisdom') {
      return STORY_SCENES['ending_legacy'];
    } else if (decision1 === 'haste' && decision2 === 'gold') {
      return STORY_SCENES['ending_ruin'];
    } else {
      // Mixed decisions lead to the nuanced compromise ending
      return STORY_SCENES['ending_compromise'];
    }
  }

  const scene = STORY_SCENES[sceneId];
  if (!scene) {
    return STORY_SCENES['intro_baghdad'];
  }
  return scene;
}

export function makeChoice(
  state: StoryState,
  choiceId: string
): StoryState {
  const currentScene = getScene(state.currentSceneId, state.choices);
  const choice = currentScene.choices?.find((c) => c.id === choiceId);

  if (!choice) {
    return state;
  }

  const updatedChoices: PlayerChoices = {
    ...state.choices,
    visitedSceneIds: [...state.choices.visitedSceneIds],
  };

  if (choice.recordChoiceKey && choice.recordChoiceValue) {
    if (choice.recordChoiceKey === 'decision1') {
      updatedChoices.decision1 = choice.recordChoiceValue as 'compassion' | 'haste';
    } else if (choice.recordChoiceKey === 'decision2') {
      updatedChoices.decision2 = choice.recordChoiceValue as 'wisdom' | 'gold';
    }
  }

  let nextSceneId = choice.nextSceneId;
  if (nextSceneId === 'eval_ending') {
    // Resolve the actual ending scene ID
    const endingScene = getScene('eval_ending', updatedChoices);
    nextSceneId = endingScene.id;
  }

  if (!updatedChoices.visitedSceneIds.includes(nextSceneId)) {
    updatedChoices.visitedSceneIds.push(nextSceneId);
  }

  const nextScene = STORY_SCENES[nextSceneId];
  const isCompleted = Boolean(nextScene?.isEnding);

  return {
    currentSceneId: nextSceneId,
    choices: updatedChoices,
    history: [...state.history, nextSceneId],
    isCompleted,
  };
}

export function restartStory(): StoryState {
  return { ...INITIAL_STORY_STATE };
}

export function calculateProgress(sceneId: string): number {
  switch (sceneId) {
    case 'intro_baghdad':
      return 15;
    case 'desert_crossing':
      return 35;
    case 'branch1_compassion':
    case 'branch1_haste':
      return 60;
    case 'the_ancient_vault':
      return 85;
    case 'ending_legacy':
    case 'ending_ruin':
    case 'ending_compromise':
      return 100;
    default:
      return 20;
  }
}
