/*
	---------------------------------------------------------------
	| Link: https://binarysearch.com/problems/Detect-Voter-Fraud |
	---------------------------------------------------------------

	Given a two dimensional list of integers votes, where each list has two elements [candidate_id, voter_id], 
	report whether any voter has voted more than once.

	Constraints:
		n ≤ 100,000 where n is the length of votes
	
	Example 1
		Input:
			votes = [
		    [3, 1],
		    [3, 0],
		    [3, 4],
		    [3, 3],
		    [3, 2]
			]

	Output:
		false

	Explanation:
		Every voter has voted once.

	Example 2:
		Input:
			votes = [
			    [2, 3],
			    [2, 2],
			    [2, 1],
			    [2, 0],
			    [2, 1]
			]

		Output:
			true

		Explanation:
			The voter with voter_id 1 voted twice.


*/ 

// function detectFraud(votes) {
// 	const track = [];
// 	for (let x = 0; x < votes.length; x++) {
// 		for (let y = 0; y < x.length; y++) {

// 		}	
// 	}
// }



function findPair(nums, target) {
	//  Create an empty HashTable
	const dict = new Map();

	// do for each element
	for (let [index, element] of nums.entries()) {
		// Check if pair `(value, target - value ) exists`

		// if the difference is seen before, print the pair
		if (dict.has(target-element)) {
			console.log(`Pair found: (${nums[dict.get(target - element)]}, ${nums[index]})`);
			return;
		}

		dict.set(element, index);
	}

	console.log('Pair not found');
}

findPair([8, 7, 2, 5, 3, 1], 10)