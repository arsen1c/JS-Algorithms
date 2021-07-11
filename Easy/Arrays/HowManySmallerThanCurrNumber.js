/*
    Link: https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/

    Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. 
    That is, for each nums[i] you have to count the number of valid j's such that j != i and 
    nums[j] < nums[i].

    Return the answer in an array.

    Example 1:
        Input: nums = [8,1,2,2,3]
        Output: [4,0,1,1,3]
    Example 2:
        Input: nums = [6,5,4,8]
        Output: [2,1,0,3]
    Example 3:
        Input: nums = [7,7,7,7]
        Output: [0,0,0,0]
*/

var smallerNumbersThanCurrent = function(nums) {
    // Sort the list
    const sorted = [...nums].sort((a, b) => a - b);
    
    
    // simply return the index of that element in sorted list
    return nums.map(e => sorted.indexOf(e));
};