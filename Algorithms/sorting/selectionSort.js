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
  }

  return array;
};

let inputArr = [
  58, 81, 77, 47, 90, 55, 15, 66, 88, 28, 1, 20, 50, 89, 6, 3, 19, 14, 80, 34,
  11, 61, 83, 46, 44, 30, 94, 95, 74, 68, 75, 98, 73, 25, 24, 29, 42, 51, 18,
  31, 9, 64, 49, 27, 12, 63, 33, 69, 35, 26, 84, 17, 96, 22, 100, 16, 40, 62,
  39, 71, 82, 21, 76, 5, 93, 67, 53, 10, 97, 72, 59, 2, 8, 45, 32, 65, 37, 85,
  4, 13, 48, 57, 41, 60, 52, 23, 79, 99, 86, 87, 56, 7, 91, 36, 43, 70, 78, 38,
  92, 54
];
// let inputArr = ['zebronics', 'apple', 'orange', 'kingdom', 'aashish'];
console.log('Array before:', inputArr);
console.log('Array after:', selectionSort(inputArr));
