/*
    [NEED IMPROVEMENT]
    
    Link: https://leetcode.com/problems/number-of-good-pairs/

    Given an array of integers nums.
    A pair (i,j) is called good if nums[i] == nums[j] and i < j.
    Return the number of good pairs.

    Example 1:
        Input: nums = [1,2,3,1,1,3]
        Output: 4
    Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

    Example 2:
        Input: nums = [1,1,1,1]
        Output: 6
    Explanation: Each pair in the array are good.

    Example 3:
        Input: nums = [1,2,3]
        Output: 0
*/

function numIdenticalPairs(nums) {
    let goodPairs = 0;

    for (let x = 0; x < nums.length; x++) {
        for(let y = x+1; y < nums.length; y++) {
            if (nums[x]===nums[y] && nums[x] <= nums[y]) {
                if (x === y) {
                    console.log('SAME:', x, y, nums[x], nums[y])
                    continue
                }
                goodPairs++;
            }
        }
    }

    return goodPairs;
}

console.log(numIdenticalPairs([1,2,3,1,1,3]));