/*
    [NEED IMPROVEMENT]

    Link: https://leetcode.com/problems/fizz-buzz/

    Given an integer n, return a string array answer (1-indexed) where:

    answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
    answer[i] == "Fizz" if i is divisible by 3.
    answer[i] == "Buzz" if i is divisible by 5.
    answer[i] == i if non of the above conditions are true.
     

    Example 1:
        Input: n = 3
        Output: ["1","2","Fizz"]
  
    Example 2:
        Input: n = 5
        Output: ["1","2","Fizz","4","Buzz"]
    
    Example 3:
        Input: n = 15
        Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
*/

function fizzBuzz(n) {
    let arr = [];

    for (let x = 1; x < n+1; x++) {
        if (x % 15 === 0) {
            arr.push('FizzBuzz');
            continue;
        }

        if (x % 3 === 0) {
            arr.push('Fizz');
        } else if (x % 5 === 0) {
            arr.push('Buzz');
        } else {
            arr.push(x.toString());
        }
    }

    return arr;
}

console.log(fizzBuzz(15))