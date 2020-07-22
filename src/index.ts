import "phaser";
import "./assets/styles/styles.scss";
import BootScene from "./scenes/BootScene";
import LoadScene from "./scenes/LoadScene";
import SFXScene from "./scenes/SFXScene";
import MenuScene from "./scenes/MenuScene";

let game: Phaser.Game;

const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	backgroundColor: 0xcdcdcd,
	width: window.innerWidth,
	height: window.innerHeight,
	//@ts-ignore
	pixelArt: true,
	scene: [BootScene, LoadScene, SFXScene, MenuScene],
};

window.onload = function () {
	window.focus();
	game = new Phaser.Game(config);
};

export { game };
