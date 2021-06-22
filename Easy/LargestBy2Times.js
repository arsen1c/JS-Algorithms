/*
	[NEED IMPROVEMENT]

	Link: https://binarysearch.com/problems/Largest-Number-By-Two-Times

	Given a list of integers nums, return whether the largest number is bigger than the second-largest 
	number by more than two times.

	Constraints:
	2 ≤ n ≤ 100,000 where n is the length of nums

	Example 1
		Input:
			nums = [3, 6, 9]
		Output:
			false

	Explanation:
		9 is not bigger than 2 * 6.


*/

function main(nums) {
	const length = nums.length;

	if (length < 2) {
		return false;
	}

	const sortedList = nums.sort((a, b) => a - b);

	return sortedList[length-1] > sortedList[length-2] * 2 ? true : false;
}

console.log(main([3, 6, 12]));