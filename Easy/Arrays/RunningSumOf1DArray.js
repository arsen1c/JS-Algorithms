/*
    [NEED IMPROVEMENT]

    Link: https://leetcode.com/problems/running-sum-of-1d-array/

    Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
    Return the running sum of nums.

    Example 1:
        Input: nums = [1,2,3,4]
        Output: [1,3,6,10]
    Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
   
    Example 2:
        Input: nums = [1,1,1,1,1]
        Output: [1,2,3,4,5]
    Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
    
    Example 3:
        Input: nums = [3,1,2,10,1]
        Output: [3,4,6,16,17]
*/

function runningSum(nums) {
    let arr = [];
    let result = 0;

    for (let x = 0; x < nums.length; x++) {
        result += nums[x];
        arr.push(result);
    }

    return arr;
}

// My 2nd Try using map
function runningSum2(arr) { 
    let total = 0;

    return arr.map(e => {
        total += e;
        return total;
    })
}

function runningSum3(arr) {
    arr.reduce((a, c, i, nums) => {
        console.log(nums);
        return nums[i] += a
    });
    console.log(arr);
}

console.log(runningSum([1,2,3,4]))
runningSum3([1,2,3,4]);