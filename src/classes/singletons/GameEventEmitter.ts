export const GAME_EVENTS = {
	playSound: "playSound",
	pauseSound: "pauseSound",
	toggleSound: "toggleSound",
	toggleMusic: "toggleMusic",
};

export default class GameEventEmitter extends Phaser.Events.EventEmitter {
	public static instance: GameEventEmitter = new GameEventEmitter();
	private constructor() {
		if (!GameEventEmitter.instance) {
			super();
			GameEventEmitter.instance = this;
		}
		return GameEventEmitter.instance;
	}

	clearEvents() {
		for (let key in GAME_EVENTS) {
			this.removeAllListeners(key);
		}
	}

	clearEvent(eventName) {
		this.removeAllListeners(eventName);
	}
}
