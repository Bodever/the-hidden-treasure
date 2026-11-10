/**
 * Audio synthesis & Web Speech API integration for The Hidden Treasure
 * Uses zero external audio files - 100% self-contained via Web Audio API & SpeechSynthesis
 */

class StoryAudioManager {
  private ctx: AudioContext | null = null;
  private ambienceGain: GainNode | null = null;
  private noiseNode: AudioNode | null = null;
  private droneOsc: OscillatorNode | null = null;
  private isAmbiencePlaying = false;
  private volume = 0.4;
  private isMuted = false;

  // Speech synthesis
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private onSpeechStateChange?: (speaking: boolean, paused: boolean) => void;

  public init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
  }

  public setVolume(vol: number) {
    this.volume = Math.max(0, Math.min(1, vol));
    if (this.ambienceGain && this.ctx) {
      this.ambienceGain.gain.setTargetAtTime(
        this.isMuted ? 0 : this.volume * 0.25,
        this.ctx.currentTime,
        0.1
      );
    }
  }

  public getVolume() {
    return this.volume;
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    this.setVolume(this.volume);
    if (this.isMuted && typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      this.onSpeechStateChange?.(false, false);
    }
    return this.isMuted;
  }

  public getMuted() {
    return this.isMuted;
  }

  public startAmbience() {
    this.init();
    if (!this.ctx || this.isAmbiencePlaying) return;

    try {
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }

      // 1. Pink-filtered noise generator for soft desert wind
      const bufferSize = this.ctx.sampleRate * 2;
      const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;

      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.06;
        b6 = white * 0.115926;
      }

      const whiteNoise = this.ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      // Filter: warm desert breeze lowpass
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(380, this.ctx.currentTime);
      filter.Q.setValueAtTime(1.5, this.ctx.currentTime);

      // Low harmonic drone (Abbasid night warmth)
      const drone = this.ctx.createOscillator();
      drone.type = 'sine';
      drone.frequency.setValueAtTime(110, this.ctx.currentTime); // A2

      const droneGain = this.ctx.createGain();
      droneGain.gain.setValueAtTime(0.04, this.ctx.currentTime);

      this.ambienceGain = this.ctx.createGain();
      this.ambienceGain.gain.setValueAtTime(
        this.isMuted ? 0 : this.volume * 0.25,
        this.ctx.currentTime
      );

      whiteNoise.connect(filter);
      filter.connect(this.ambienceGain);

      drone.connect(droneGain);
      droneGain.connect(this.ambienceGain);

      this.ambienceGain.connect(this.ctx.destination);

      whiteNoise.start();
      drone.start();

      this.noiseNode = whiteNoise;
      this.droneOsc = drone;
      this.isAmbiencePlaying = true;
    } catch {
      // Audio autoplay may be blocked until first user interaction
    }
  }

  public stopAmbience() {
    if (this.droneOsc) {
      try {
        this.droneOsc.stop();
        this.droneOsc.disconnect();
      } catch {}
      this.droneOsc = null;
    }
    if (this.noiseNode) {
      try {
        (this.noiseNode as AudioScheduledSourceNode).stop?.();
        this.noiseNode.disconnect();
      } catch {}
      this.noiseNode = null;
    }
    this.isAmbiencePlaying = false;
  }

  public isPlayingAmbience() {
    return this.isAmbiencePlaying;
  }

  // Play a pleasant ancient chime or page-turn sound
  public playPageTurn() {
    this.init();
    if (!this.ctx || this.isMuted) return;

    try {
      if (this.ctx.state === 'suspended') this.ctx.resume();
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(320, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(440, this.ctx.currentTime + 0.12);

      gain.gain.setValueAtTime(this.volume * 0.15, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.18);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.19);
    } catch {}
  }

  public playChoiceSound() {
    this.init();
    if (!this.ctx || this.isMuted) return;

    try {
      if (this.ctx.state === 'suspended') this.ctx.resume();
      const notes = [440, 554.37, 659.25]; // A major ancient chord
      notes.forEach((freq, idx) => {
        const osc = this.ctx!.createOscillator();
        const gain = this.ctx!.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, this.ctx!.currentTime + idx * 0.05);

        gain.gain.setValueAtTime(this.volume * 0.12, this.ctx!.currentTime + idx * 0.05);
        gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx!.currentTime + 0.5 + idx * 0.05);

        osc.connect(gain);
        gain.connect(this.ctx!.destination);

        osc.start(this.ctx!.currentTime + idx * 0.05);
        osc.stop(this.ctx!.currentTime + 0.6 + idx * 0.05);
      });
    } catch {}
  }

  // Text-To-Speech (SpeechSynthesis API)
  public setSpeechListener(cb: (speaking: boolean, paused: boolean) => void) {
    this.onSpeechStateChange = cb;
  }

  public speakText(text: string, lang = 'en-US') {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

    window.speechSynthesis.cancel();
    if (this.isMuted) return;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = 0.95; // calm, natural storytelling pace
    utterance.pitch = 1.0;

    // Pick a natural English voice if available
    const voices = window.speechSynthesis.getVoices();
    const naturalVoice = voices.find(
      (v) => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Daniel') || v.name.includes('David'))
    ) || voices.find((v) => v.lang.startsWith('en'));

    if (naturalVoice) {
      utterance.voice = naturalVoice;
    }

    utterance.onstart = () => {
      this.onSpeechStateChange?.(true, false);
    };

    utterance.onend = () => {
      this.onSpeechStateChange?.(false, false);
      this.currentUtterance = null;
    };

    utterance.onerror = () => {
      this.onSpeechStateChange?.(false, false);
      this.currentUtterance = null;
    };

    this.currentUtterance = utterance;
    window.speechSynthesis.speak(utterance);
  }

  public pauseSpeech() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      if (window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
        window.speechSynthesis.pause();
        this.onSpeechStateChange?.(true, true);
      }
    }
  }

  public resumeSpeech() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
        this.onSpeechStateChange?.(true, false);
      }
    }
  }

  public stopSpeech() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      this.currentUtterance = null;
      this.onSpeechStateChange?.(false, false);
    }
  }
}

export const storyAudio = new StoryAudioManager();
