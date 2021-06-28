/*
    [NEED IMPROVEMENT]

    Link: https://leetcode.com/problems/reverse-words-in-a-string-iii/

    Given a string s, reverse the order of characters in each word within a sentence while 
    still preserving whitespace and initial word order.

    Example 1:
        Input: s = "Let's take LeetCode contest"
        Output: "s'teL ekat edoCteeL tsetnoc"

    Example 2:
        Input: s = "God Ding"
        Output: "doG gniD"
*/


var reverseWords = function(s) {
    s = s.split(' ');
    let reversed = '';

    s.forEach(e => reversed += `${e.split('').reverse().join('')} `);
    
    return reversed.trim();
};

reverseWords("Let's take LeetCode contest");