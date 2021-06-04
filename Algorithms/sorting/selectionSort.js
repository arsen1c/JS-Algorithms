function selectionSort(arr) {

	for (let i = 0; i < arr.length; i++) {
		let min = i;

		for (let j = i+1; j< arr.length; j++) {
			if (arr[j] < arr[min]) {
				min = j;
			}
		}

		if (min !== i) {
			[arr[i], arr[min]] = [arr[min], arr[i]]; 
		}
	}

	return arr;
}

console.log(selectionSort([5,3,1,8]));

console.log(binarySearch([1,2,3,4,5,6,7], 6));