/*
    [NEED IMPROVEMENT]
            -----------------------------------------------------
            | Link: https://leetcode.com/problems/happy-number/ |
            -----------------------------------------------------

    Write an algorithm to determine if a number n is happy.

    A happy number is a number defined by the following process:
        - Starting with any positive integer, replace the number by the sum of the squares of its digits.
        - Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle 
          which does not include 1.
        - Those numbers for which this process ends in 1 are happy.

    Return "true" if n is a happy number, and "false" if not.


    Example 1:
        Input: n = 19
        Output: true

    Explanation:
        12 + 92 = 82
        82 + 22 = 68
        62 + 82 = 100
        12 + 02 + 02 = 1

    Example 2:
        Input: n = 2
        Output: false
*/

function sumAllNumbers(num) {
  if (num < 10) {
    return Math.pow(num, 2);
  }
  const numberArray = num.toString().split('');

  let result = 0;

  numberArray.forEach(e => result += Math.pow(parseInt(e), 2));
  return result;
}


function isHappy(n) {
  const storage = new Map();

   while(1) {
    n = sumAllNumbers(n);
    if (n === 1) {
      return true;
    }
    if (storage.has(n)){
      return false;
    }
    storage.set(n);
   } 
}

console.log(isHappy(2));

/*
  Runtime: 80 ms, faster than 92.79% of JavaScript online submissions for Happy Number.
*/

// Contninue: Use recursion