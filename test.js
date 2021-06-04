// Binary Search 
const binarySearch = (arr, item) => {
	// Let lowest be the 1st element in the array
	let low = 0;
	// Let highest element be the last element in the array
	let high = arr.length - 1; 

	// Run the loop until loweset number is lower 
	// than the highest number in the array
	while (low <= high) {
		// Middle element in the array
		let mid = Math.floor((low + high) / 2);

		// If middle element is === item
		// return middle index
		if (arr[mid] === item) {
			return mid;
		}
		// if middle element is more then "item"
		// look in the left part of the middle element
		if (arr[mid] > item) {
			high = mid - 1;
		} else {
			// if middle element is less then "item"
			// look in the right part of the middle element
			low = mid + 1;
		}
	}
	return 'Nothing found';
}

// console.log(binarySearch([1,2,3,4,5,6], 4));


// [+] selectionSort [+]
const selectionSort = (arr) => {
	// Copy the original array
	const array = [...arr];
	const arrLength = array.length;

	// run the loop
	for (let i = 0; i < arrLength; i++) {
		// Let lowest element be the i'th index (iteration number);
		let lowest = i;
		// run another loop which is 1 more in number
		// than the original loop iteration
		for (let j = i + 1; j < arrLength; j++) {
			// check if current LOWEST element is more than the one adjacent
			// to it. If YES then swap em.
			if (array[lowest] > array[j]) {
				lowest = j;
			};
		}

		if (lowest != i) {
			[array[lowest], array[i]] = [array[i], array[lowest]];
		}
	}

	return array;
}
console.log(selectionSort([2,7,1,5,9]));