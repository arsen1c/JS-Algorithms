/*

    Link: https://leetcode.com/problems/defanging-an-ip-address/

    Given a valid (IPv4) IP address, return a defanged version of that IP address.

    A defanged IP address replaces every period "." with "[.]".

    Example 1:
        Input: address = "1.1.1.1"
        Output: "1[.]1[.]1[.]1"

    Example 2:
        Input: address = "255.100.50.0"
        Output: "255[.]100[.]50[.]0"
*/

var defangIPaddr = function(address) {
    return address.replaceAll('.', '[.]');
};

// defangIPaddr("255[.]100[.]50[.]0")


function test(str) {
    s = str.split(' ');
    let reversed = '';
    // console.log(s);

    s.forEach(e => reversed += `${e.split('').reverse().join('')} `);

    console.log(reversed);
}

test("Let's do it");