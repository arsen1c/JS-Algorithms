/*
 *******		QuickSort
 *		+ Quick Sort is a comparison sorting algorithm that uses a divide and conqure strategy
 *		+ Time Complexity: O(n log n) in average case. O(n**2) in worst case scenario  		      	
*/

const quickSort = (arr) => {
	const length = arr.length;
	// Base Case
	if (length <= 1) {
		// Array length is 0 or 1
		return arr;
	}

	const PIVOT = arr[0]; // 1st element is the PIVOT
	// Declare GREATER and LESSER array
	const GREATER = [];
	const LESSER = [];

	for (let i = 1; i < length; i++){
		// if current element is lesser than PIVOT
		if (arr[i] < PIVOT) {
			// Push the element in the LESSER array
			LESSER.push(arr[i]);
		} else {
			// Else push the element in the GREATER array
			GREATER.push(arr[i]);
		}
	};

	/**
	 * At this point we have 2 new arrays, GREATER and LESSER
	*/
	
	// Rerun the function with LESSER array
	let sorted = quickSort(LESSER);
	// Push the PIVOT vlaue in the sorted array
	sorted.push(PIVOT);
	// add sorted GREATED array 
	sorted = sorted.concat(quickSort(GREATER));

	return sorted;
};

let ar = [58, 81, 77, 47, 90, 55,  15, 66, 88, 28,  1, 20,
  50, 89,  6,  3, 19, 14,  80, 34, 11, 61, 83, 46,
  44, 30, 94, 95, 74, 68,  75, 98, 73, 25, 24, 29,
  42, 51, 18, 31,  9, 64,  49, 27, 12, 63, 33, 69,
  35, 26, 84, 17, 96, 22, 100, 16, 40, 62, 39, 71,
  82, 21, 76,  5, 93, 67,  53, 10, 97, 72, 59,  2,
   8, 45, 32, 65, 37, 85,   4, 13, 48, 57, 41, 60,
  52, 23, 79, 99, 86, 87,  56,  7, 91, 36, 43, 70,
  78, 38, 92, 54]
// Array before Sort
console.log(ar)
ar = quickSort(ar)
// Array after sort
console.log(ar)