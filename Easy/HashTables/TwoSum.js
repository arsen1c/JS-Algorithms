/*
                ------------------------------------------------
                | Link: https://leetcode.com/problems/two-sum/ |
                ------------------------------------------------

  Given an array of integers nums and an integer target, return indices of 
  the two numbers such that they add up to target.

  You may assume that each input would have exactly one solution, and you 
  may not use the same element twice.

  You can return the answer in any order.


  Example 1:
    Input: nums = [2,7,11,15], target = 9
    Output: [0,1]
    Output: Because nums[0] + nums[1] == 9, we return [0, 1].
  
  Example 2:
    Input: nums = [3,2,4], target = 6
    Output: [1,2]

  Example 3:
    Input: nums = [3,3], target = 6
    Output: [0,1]

    Remarks: This problem can be solved by brute force method or by using hash table
*/
// Brute Force Way
function towSum(arr, target) {
    // Run through the array
    for (let x = 0; x < arr.length; x++) {
        // Check if current element has any compliment to sum up to target
        for (let y = x + 1; y < arr.length; y++) {
            // Check if x and y are not pointing to same element
            // if the pointing to same element, continure
            if (x === y) {
                continue;
            }
            if (arr[x] + arr[y] === target) {
                console.log([x, y]);
                return [x, y];
            }
        };
    };
};
towSum([8, 8, 2, 2, 1], 10);
// Two sum using Hash tables
function twoSum1(arr, target) {
    // Create an empty hash
    const storage = new Map();
    /* 
     *  + Basic Logic would be:
     *      targetSum - currentElement = diff;
     *        targetSum = diff + currentElement;
     *      => We have to look for the "difference" element in the array.
     */
    // Iterate through the array
    for (let [index, element] of arr.entries()) {
        // Check if the difference of "target" and "current element"
        // Exists in the hash table. If it exists return the index of
        // current element and the index of the element in hash table
        // Else add fill the hash table
        if (storage.has(target - element)) {
            console.log([storage.get(target - element), index])
            return [storage.get(target - element), index];
        }
        // Set current element and it's index in hash table
        storage.set(element, index);
    }
    return null;
}
twoSum1([4, 8, 5, 6], 2);