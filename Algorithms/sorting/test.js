const selectionSort = (arr) => {

	// Loop through the array
	// left side should be the sorted and right be the unsotred


	// Dont mutate the original array
	let array = [...arr];
	const length = array.length;

	for (let x = 0; x < length - 1; x++) {
		let min = x; // assuming current element is the lowest

		// Check the adjacent element and compare with current element
		// if adjacent element is lower than current min, set min to adjacent index
		for (let y = x + 1; y < length; y++) {
			if (array[y] < array[min]) {
				min = y; // change current min number if smaller num is found	
			}
		}

		// If currnet min !== intial min, exchange the positions
		if (min !== x) {
			[array[x], array[min]] = [array[min], array[x]];
		}
	};

	return array;
}

console.log(selectionSort([3,5,8,1]));