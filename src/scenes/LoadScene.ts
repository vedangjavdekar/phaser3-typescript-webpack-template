import SCENES from "../utils/SCENES";
import { images } from "../utils/images";
import ResizeManager from "../utils/ResizeManager";
import { SOUNDS } from "./SFXScene";
import { sounds } from "../utils/sounds";
import GameEventEmitter, {
	GAME_EVENTS,
} from "../classes/singletons/GameEventEmitter";

const RM = ResizeManager;

const width = ResizeManager.referenceScreenSize.width;
const height = ResizeManager.referenceScreenSize.height;

export default class extends Phaser.Scene {
	constructor() {
		super(SCENES.LOAD);
	}

	init() {
		console.log("in load scene");
	}

	preload() {
		for (let key of Object.keys(images)) {
			this.load.image(key, images[key]);
		}

		this.load.audio(SOUNDS.BUTTON_CLICK, [
			sounds[`${SOUNDS.BUTTON_CLICK}.mp3`],
			sounds[`${SOUNDS.BUTTON_CLICK}.ogg`],
		]);
	}

	create() {
		this.scene.start(SCENES.MENU);
		this.scene.launch(SCENES.SFX);
	}
}
