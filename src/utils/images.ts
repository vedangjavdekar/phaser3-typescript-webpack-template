function importAll(r) {
	let images = {};
	r.keys().map((item, index) => {
		const filename = item.replace("./", "");
		const imageName = filename.split(".")[0];
		images[imageName] = r(item);
	});
	return images;
}

const images = importAll(
	//@ts-ignore
	require.context("../assets/images", false, /\.(png|jpe?g|svg|mp4)$/)
);

export { images };
