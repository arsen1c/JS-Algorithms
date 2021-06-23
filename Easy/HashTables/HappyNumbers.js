function sumAllNumbers(num) {
	return num.toString().split('').reduce((a, b) => {
		return parseInt(a) + parseInt(b);
	}, 0)
}

console.log(sumAllNumbers(1233));