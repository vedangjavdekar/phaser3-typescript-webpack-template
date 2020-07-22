import ResizeManager from "../utils/ResizeManager";

export default class BootScene extends Phaser.Scene {
	constructor() {
		super("BootScene");
	}

	init() {
		this.scale.on("resize", ResizeManager.resize, this);
		ResizeManager.resize();
	}

	preload() {}

	create() {
		this.scene.start("LoadScene");
	}
}
