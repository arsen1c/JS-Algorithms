/*
 *******	About Selection Sort
 *		+ The selection sort algorithm sorts an array by repeatedly 
 * 			finding the minimum element (considering ascending order) from 
 * 			unsorted part and putting it at the beginning.
 *		+ The algorithm maintains 2 subarrays in an give array
 *			1. The subarray which is already sorted.
 *			2. Remaining subarray which is unsorted.
 *		+ In every iteration, the min element from the unsorted
 *		+ subarray is picked and moved to the sorted subarray
 ******* 	Time Complexity
 *		+ You have to check each element in the list, "n" times
 *		+ Then compare the next element with current min element, "n" times
 *		+ This takes O(n*n) time OR O(n**2)
*/ 

const selectionSort = (arr) => {

	// Loop through the array
	// left side should be the sorted and right be the unsotred

	let array = [...arr]; // We don't want to mutate the original array
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

let inputArr = [5, 6, 7, 8, 1, 2, 12, 14];
// let inputArr = ['zebronics', 'apple', 'orange', 'kingdom', 'aashish'];
console.log('Array before:', inputArr);
console.log('Array after:', selectionSort(inputArr));


