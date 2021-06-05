// Recursive function to print numbers
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

count(10);

// [+] FACTORIAL [+]
function factorial (n) {
	if (n === 1) {
		return 1;
	} else {
		return n * factorial(n - 1);
	}
}

// console.log(factorial(4))