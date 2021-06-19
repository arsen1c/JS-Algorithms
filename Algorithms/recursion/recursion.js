// [+] 1.Recursive function to print numbers [+]
function count(i) {
	console.log(i);
	if (i <= 0) return;
	count(i-1);

	/*
		While loop approach
		while(!i <= 0) {
			console.log(i);
			i--;
		}
	*/
}
// count(10);

// [+] 2. FACTORIAL [+]
function factorial(n) {
	if (n === 1) {
		return 1;
	} else {
		return n * factorial(n - 1);
	}
}
console.log('factorial of 4 is:', factorial(4), '\n')


/* [+] 3. Sum of all numbers in array using recursion [+]; */
// Reference: https://stackoverflow.com/questions/37425581/sum-of-an-array-using-recursion-javascript
let arr = [1,2,3,4,5];
// ES6
const sum = (arr) => (arr.length === 0) ? 0 : arr[0] + sum(arr.slice(1));
/*
	- ^ If length of array is 0 return 0;
	- Else, add the first element in the array with the remainder of the array
	- At some point, these successive calls will eventaully result in a call to sum[]
*/ 
console.log(`Sum of array [${arr}] is:\n`, sum(arr), '\n'); // 15

// Normal function
function sum1(arr) {
	if (arr.length === 0) {
		return 0;
	}

	return arr[0] + sum1(arr.slice(1));
}

// console.log(sum1(arr)); // 15

/* [+] Binary Recursion [+] */
// My guess: If mid === item return item else run funcition again
function binarySearchRecursion(arr, item, low = 0, high = arr.length - 1) {
	const mid = Math.floor((low + high) / 2);

	if (low <= high) { // if low is lower than high
		// Base case
		if (arr[mid] === item) {
			// item found => return its index
			return mid;
		}

		if (item < arr[mid]) {
			// This time decrease the value of "mid" and call the function again
			// If item found the further iteration, main method will return will also
			// return that same item
			return binarySearchRecursion(arr, item, low, mid - 1);
		} else{	
			// This time increase the value of "mid" and call the function again
			return binarySearchRecursion(arr, item, mid + 1, high);
		} 
	} else {
		return -1;
	}
}
console.log(`Looking for 3 from array [${arr}]`)
console.log('\t Index: ', binarySearchRecursion(arr, 3))