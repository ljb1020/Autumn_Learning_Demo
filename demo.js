const data = ["1a", "2b", "13c", "5a"];

function countMax(data) {
	const map = new Map();

	for (let item of data) {
		// const num = +item.slice(0, item.length - 1);
		// const s = item.slice(-1);
		const num = parseInt(item); // 自动取前面的数字
		const s = item[item.length - 1]; // 最后一个字符

		if (map.has(s)) {
			const obj = map.get(s);
			obj.sum += num;
			obj.count += 1;
		} else {
			map.set(s, { count: 1, sum: num });
		}
	}

	let countMax = 0;
	let sumMax = 0;
	for (const [key, value] of map.entries()) {
		const { count, sum } = value;
		if (count > countMax) {
			countMax = count;
			sumMax = sum;
		}
	}
	return sumMax;
}

console.log(countMax(data));
