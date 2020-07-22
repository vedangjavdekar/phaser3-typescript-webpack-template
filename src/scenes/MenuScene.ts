import SCENES from "../utils/SCENES";
import ResizeManager from "../utils/ResizeManager";
import GameEventEmitter, {
	GAME_EVENTS,
} from "../classes/singletons/GameEventEmitter";
import { SOUNDS } from "./SFXScene";

const RM = ResizeManager;
const width = RM.referenceScreenSize.width;
const height = RM.referenceScreenSize.height;

export default class extends Phaser.Scene {
	constructor() {
		super(SCENES.MENU);
	}

	create() {
		const center = {
			x: RM.getX(width / 2),
			y: RM.getY(height / 2),
		};

		this.add.image(center.x, center.y, "background");

		this.add
			.text(center.x, center.y, "Hello World", {
				font: `${RM.getFontSize(64)}px gameFont`,
			})
			.setOrigin(0.5)
			.setInteractive()
			.on("pointerdown", () => {
				GameEventEmitter.instance.emit(
					GAME_EVENTS.playSound,
					SOUNDS.BUTTON_CLICK
				);
			});
	}
}
