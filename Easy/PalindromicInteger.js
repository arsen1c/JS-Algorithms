// Palindrom Integer function
function palindromChecker(n) {
	const number = n.toString();
	
	if (number.length <= 1) {
		return true;
	}

	let reversed = '';

	for (let x = number.length - 1; x >= 0; x--) {
		console.log(number[x]);
		reversed += number[x];
	};

	if (reversed === number) {
		return true;
	}

	return false;
}

console.log(palindromChecker(22));


// Palindrome Integer checker ES6 (one-liner);
function palindromCheckerES(n) {
	n = n.toString();

	if (n.length <= 1) {
		return true;
	}

	return n.split('').reverse().join('') === n ? true : false;
}

console.log(palindromCheckerES(23))