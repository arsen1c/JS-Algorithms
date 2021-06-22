function ThreeSixNine(number) {
	const exceptions = [3,6,9];
	const arr = [];
	// Basic Solution
	for (let x = 1; x < number + 1; x++) {
		if (x % 3 === 0 || x.toString().includes('3') || x.toString().includes('6') || x.toString().includes('9') ) {
			arr.push('clap');
			continue;
		}
		arr.push(x.toString());
	} ;

	return arr;
}

console.log(ThreeSixNine(16));