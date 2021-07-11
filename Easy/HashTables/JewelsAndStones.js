/*
    Link: https://leetcode.com/problems/jewels-and-stones/

    You're given strings jewels representing the types of stones that are jewels, and stones 
    representing the stones you have. Each character in stones is a type of stone you have. 
    You want to know how many of the stones you have are also jewels.

    Letters are case sensitive, so "a" is considered a different type of stone from "A".

    Example 1:
        Input: jewels = "aA", stones = "aAAbbbb"
        Output: 3

    Example 2:
        Input: jewels = "z", stones = "ZZ"
        Output: 0

*/

var numJewelsInStones = function(jewels, stones) {
    const jewelStore = new Map();
    let total = 0;
    
    for (let x = 0; x < jewels.length; x++) {
        jewelStore.set(jewels[x]);    
    }

    for (let x = 0; x < stones.length; x++) {
        if (jewelStore.has(stones[x])) {
            total++;
        }
    }

    return total;
};


// console.log(numJewelsInStones('aA', 'aAAbbbb'));

// Better Solution

var numJewelsInStones1 = function(jewels, stones) {
    let total = 0;
    for (let value of stones) {
        if (jewels.includes(value)) {
            total++;
        }
    }

    return total;
};

console.log(numJewelsInStones1('aA', 'aAAbbbb'))