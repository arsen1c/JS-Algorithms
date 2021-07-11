/*
    [NEED IMPROVEMENT]

            ----------------------------------------------------------
            | Link: https://leetcode.com/problems/majority-element/ |
            ----------------------------------------------------------

    Given an array nums of size n, return the majority element.

    The majority element is the element that appears more than ⌊n / 2⌋ times. 
    You may assume that the majority element always exists in the array.

    Example 1:
        Input: nums = [3,2,3]
        Output: 3

    Example 2:
        Input: nums = [2,2,1,1,1,2,2]
        Output: 2

*/

var majorityElement = function(nums) {
    const half = Math.ceil(nums.length / 2);
    console.log('Half is:', half);
    // const obj = {};

    // for (let x = 0; x < nums.length; x++) {
    //     if (!obj[nums[x]]) {
    //         obj[nums[x]] = 0;
    //     };i

    //     obj[nums[x]] = obj[nums[x]] + 1;
        
    //     if (obj[nums[x]] >= Math.ceil(nums.length / 2)){
    //         return Object.keys(obj).filter(e => obj[e] === obj[nums[x]])[0];
    //     }
    // }


    // Converting what we did above using a hash table
    const storage = new Map();

    for (let x = 0; x < nums.length; x++) {
        if (!storage.has(nums[x])) {
            storage.set(nums[x], 0);
        };

        storage.set(nums[x], storage.get(nums[x]) + 1);
        
        if (storage.get(nums[x]) >= half) {
            for (let n of storage) {
                if (n[1] === storage.get(nums[x])){
                    return n[0];
                }
            }
        }
    }

};

console.log(majorityElement([6,5,5]));


var majorityElement1 = function(nums) {
    const storage = new Map();
    let highest = [0,0];
    
    for (let [key, value] of nums.entries()) {
        if (storage.has(value)) {
            let currValue = storage.get(value) + 1;
            storage.set(value, currValue);
            
            if (highest[1] < currValue){
                highest[0] = value;
                highest[1] =  currValue;
            }
        }else {
            storage.set(value, 1);
        }
    }
    // console.log(highest);
    return highest[0];
};

majorityElement1([2,2,1,1,1,2,2]);


// Solution from discussion
var majorityElement2 = function(nums) {
    var obj = {};
    
    for(var i = 0; i < nums.length; i++){
        obj[nums[i]] = obj[nums[i]] + 1 || 1;
        if(obj[nums[i]] > nums.length / 2)  return nums[i];
    }
    
};