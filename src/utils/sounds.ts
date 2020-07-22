function importAll(r) {
	let sounds = {};
	r.keys().map((item, index) => {
		sounds[item.replace("./", "")] = r(item);
	});
	return sounds;
}

const sounds = importAll(
	//@ts-ignore
	require.context("../assets/audio", false, /\.(mp3|ogg)$/)
);

export { sounds };
