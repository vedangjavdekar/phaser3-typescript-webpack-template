function importAll(r) {
	let data = {};
	r.keys().map((item, index) => {
		data[item.replace("./", "")] = r(item);
	});
	return data;
}

const data = importAll(
	//@ts-ignore
	require.context("../assets/data", false, /\.json$/)
);

export { data };
