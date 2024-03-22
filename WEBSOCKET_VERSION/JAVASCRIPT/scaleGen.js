function getScale(root, key) {
	let arr = [];
	if (key === 'major') {
	    let one = root;
		let two = (9 / 8) * root;
		let three = (5 / 4) * root;
		let four = (4 / 3) * root;
		let five = (3 / 2) * root;
		let six = (5 / 3) * root;
		let seven = (15 / 8) * root;
		let octave = 2 * one;
		arr.push(one, two, three, four, five, six, seven, octave);
	} else if (key == 'minor') {
		let one = root;
		let two = (9 / 8) * root;
		let three = (6 / 5) * root;
		let four = (4 / 3) * root;
		let five = (3 / 2) * root;
		let six = (8 / 5) * root;
		let seven = (9 / 5) * root;
		let octave = 2 * one;
		arr.push(one, two, three, four, five, six, seven, octave);
	}
	return arr;
}
