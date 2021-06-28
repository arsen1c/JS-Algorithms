/*
    [NEED IMPROVEMENT]

    Link: https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/

    Given an integer number n, return the difference between the product of its digits and the sum of its digits.

    Example 1:
        Input: n = 234
        Output: 15 
    Explanation: 
        Product of digits = 2 * 3 * 4 = 24 
        Sum of digits = 2 + 3 + 4 = 9 
        Result = 24 - 9 = 15

    Example 2:
        Input: n = 4421
        Output: 21
    Explanation: 
        Product of digits = 4 * 4 * 2 * 1 = 32 
        Sum of digits = 4 + 4 + 2 + 1 = 11 
        Result = 32 - 11 = 21

*/


function subtractProductAndSum(n) {
    let sum = 0, product = 1;

    while(n !== 0) {
        /*
            + doing `n % 10` will always give you the last element in the number
                e.g: 421 % 10 = 1
                e.g: 579 % 10 = 9

            + doing `n / 10` will always return the whole number w/o the last element

            [Main Login] 
                - use "%10" to add/multiple last element of the number at every iteration
                - at the end of every iteration reduce the number by using "/10"
        */
        sum += n % 10;
        product *= n % 10;

        n = Math.floor(n/10);
    }

    console.log(sum, product);
    console.log(`Ans: ${product-sum}`)
}

subtractProductAndSum(4421);