import test from 'node:test';
import assert from 'node:assert/strict';
import {
  INITIAL_STORY_STATE,
  makeChoice,
  getScene,
  restartStory,
  calculateProgress,
} from './engine';

test('initial story starts at intro_baghdad with 15% progress', () => {
  const state = INITIAL_STORY_STATE;
  assert.equal(state.currentSceneId, 'intro_baghdad');
  assert.equal(calculateProgress(state.currentSceneId), 15);
  assert.equal(state.isCompleted, false);

  const scene = getScene(state.currentSceneId, state.choices);
  assert.equal(scene.chapterNumber, 1);
  assert.equal(scene.choices?.length, 1);
});

test('branching: compassion + wisdom leads to Ending 1 (Scholar Legacy)', () => {
  let state = INITIAL_STORY_STATE;

  // 1. Leave Baghdad
  state = makeChoice(state, 'c_start_journey');
  assert.equal(state.currentSceneId, 'desert_crossing');

  // 2. Decision 1: choose compassion
  state = makeChoice(state, 'c_compassion');
  assert.equal(state.currentSceneId, 'branch1_compassion');
  assert.equal(state.choices.decision1, 'compassion');

  // 3. Move to vault
  state = makeChoice(state, 'c_proceed_fortress_1');
  assert.equal(state.currentSceneId, 'the_ancient_vault');

  // 4. Decision 2: choose wisdom (scrolls over pure gold)
  state = makeChoice(state, 'c_choice_wisdom');
  assert.equal(state.currentSceneId, 'ending_legacy');
  assert.equal(state.choices.decision2, 'wisdom');
  assert.equal(state.isCompleted, true);
  assert.equal(calculateProgress(state.currentSceneId), 100);

  const finalScene = getScene(state.currentSceneId, state.choices);
  assert.equal(finalScene.endingType, 'legacy');
});

test('branching: haste + gold leads to Ending 2 (Golden Ruin)', () => {
  let state = INITIAL_STORY_STATE;

  state = makeChoice(state, 'c_start_journey');
  // Decision 1: choose haste
  state = makeChoice(state, 'c_haste');
  assert.equal(state.currentSceneId, 'branch1_haste');
  assert.equal(state.choices.decision1, 'haste');

  state = makeChoice(state, 'c_proceed_fortress_2');
  assert.equal(state.currentSceneId, 'the_ancient_vault');

  // Decision 2: choose gold
  state = makeChoice(state, 'c_choice_gold');
  assert.equal(state.currentSceneId, 'ending_ruin');
  assert.equal(state.choices.decision2, 'gold');
  assert.equal(state.isCompleted, true);

  const finalScene = getScene(state.currentSceneId, state.choices);
  assert.equal(finalScene.endingType, 'ruin');
});

test('branching: compassion + gold leads to Ending 3 (Merchant Compromise)', () => {
  let state = INITIAL_STORY_STATE;

  state = makeChoice(state, 'c_start_journey');
  state = makeChoice(state, 'c_compassion');
  state = makeChoice(state, 'c_proceed_fortress_1');
  state = makeChoice(state, 'c_choice_gold');

  assert.equal(state.currentSceneId, 'ending_compromise');
  assert.equal(state.isCompleted, true);

  const finalScene = getScene(state.currentSceneId, state.choices);
  assert.equal(finalScene.endingType, 'compromise');
});

test('restartStory resets state to beginning', () => {
  let state = INITIAL_STORY_STATE;
  state = makeChoice(state, 'c_start_journey');
  state = restartStory();

  assert.equal(state.currentSceneId, 'intro_baghdad');
  assert.equal(state.isCompleted, false);
  assert.equal(state.choices.decision1, undefined);
});
