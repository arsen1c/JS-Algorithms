/*
 ********	 About Binary Search 
 *		+ Inputs are sorted
 *		+ Search a sorted array by repeatedly dividing the search interval in half
 *		+ You guess the middle number and eleminate half of the reamining number
 *		+ If the value of the search key is less than the item in the middle of 
 *			the interval, narrow the interval
 * 			to the lower half. Otherwise narrow it to the upper half. Repeatedly check until the
 * 			value is found or the interval is empty.
 *		+ Binary search takes O(log n) steps in the worst case
 *		+ Binary search is a lot faster than a linear/simple search
*/

const binarySearch = (arr, item, low = 0, high = arr.length - 1) => {
	console.log(`Looking for '${item}' in array: ${arr}`);

	while (low <= high) {
		// Get the middle element index
		const mid = Math.floor((low + high) / 2);

		// item === middle element, return it.
		if (arr[mid] === item) { return mid };
		// if middle element is greater than the item
		// narrow down our search to lower half
		if (arr[mid] > item) { 
			high = mid - 1 
		} else {
			low = mid + 1
		};
		
	}
	return -1; // we search whole array without finding the item
}

function binarySearchRecursion(arr, item, low = 0, high = arr.length - 1) {
	const mid = Math.floor((low + high) / 2);

	if (low <= high) { // if low is lower than high
		// Base case
		if (arr[mid] === item) {
			// item found => return its index
			return mid;
		}

		if (item < arr[mid]) {
			return binarySearchRecursion(arr, item, low, mid - 1);
		} else{	
			return binarySearchRecursion(arr, item, mid + 1, high);
		} 
	} else {
		return -1;
	}
}


// [+] Tests [+]
const numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const nameArr = ['Alpha', 'Bravo', 'Delta', 'Golf', 'Mike', 'Romeo', 'Sierra', 'Tango', 'Zulu'];

console.log(`\t5 is at index:`, binarySearch(numberArr, 5)); // 4;
console.log(`\tSierra is at index:`, binarySearch(nameArr, 'Sierra')); // 6;
console.log(`(Recursion)Looking for 3 from array ${numberArr}`)
console.log('\t Index: ', binarySearchRecursion(numberArr, 3))
