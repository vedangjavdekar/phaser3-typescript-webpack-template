import GameEventEmitter, {
	GAME_EVENTS,
} from "../classes/singletons/GameEventEmitter";
import SCENES from "../utils/SCENES";

export const SOUNDS = {
	BUTTON_CLICK: "buttonclick",
};

export default class SFXScene extends Phaser.Scene {
	private sounds: Array<Phaser.Sound.HTML5AudioSound>;
	private soundOn: boolean;
	private musicOn: boolean;

	constructor() {
		super(SCENES.SFX);
		this.sounds = [];
		this.soundOn = true;
		this.musicOn = true;
	}

	init() {
		console.log("SFX running");
		GameEventEmitter.instance.addListener(
			GAME_EVENTS.playSound,
			this.playSound,
			this
		);

		GameEventEmitter.instance.addListener(
			GAME_EVENTS.pauseSound,
			this.pauseSound,
			this
		);

		GameEventEmitter.instance.addListener(
			GAME_EVENTS.toggleSound,
			this.toggleSound,
			this
		);

		GameEventEmitter.instance.addListener(
			GAME_EVENTS.toggleMusic,
			this.toggleMusic,
			this
		);
	}
	preload() {
		for (let key in SOUNDS) {
			this.sounds[SOUNDS[key]] = <Phaser.Sound.HTML5AudioSound>(
				this.sound.add(SOUNDS[key])
			);
		}
	}

	playSound(name, config) {
		this.sounds[name].play(config);
	}

	pauseSound(name, paused = true) {
		if (!paused) {
			this.sounds[name].resume();
			return;
		}

		if (this.sounds[name].isPlaying && paused) {
			this.sounds[name].pause();
		}
	}

	toggleSound() {
		this.soundOn = !this.soundOn;
	}

	toggleMusic() {
		this.musicOn = !this.musicOn;
	}
}
