const quickSort = (arr) => {
	const length = arr.length;
	// Base Case
	if (length <= 1) {
		// Array length is 0 or 1
		return arr;
	}

	const PIVOT = arr[0];
	const GREATER = [];
	const LESSER = [];

	for (let i = 1; i < length; i++){
		if (arr[i] < PIVOT) {
			LESSER.push(arr[i]);
		} else {
			GREATER.push(arr[i]);
		}
	};

	let sorted = quickSort(LESSER);
	sorted.push(PIVOT);
	sorted = sorted.concat(quickSort(GREATER));

	return sorted;
};

let ar = [0, 5, 3, 2, 2]
// Array before Sort
console.log(ar)
ar = quickSort(ar)
// Array after sort
console.log(ar)