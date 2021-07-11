function romantoInt(s) {
    /** 
     * Representation of Roman numbers. 7 different symbols
     * I = 1; V = 5; X = 10; L = 50; C = 100; D = 500; M = 1000 
     * Note: Only 1 and 5 are represented. Like 1,5,10,50,100,500 
     */

    const romans = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 10, 'D': 500, 'M': 1000 };
    let total = 0;

    for (let x = 0; x < s.length; x++) {
        const s1 = romans[s[x]];

        if (x + 1 < s.length) {
            const s2 = romans[s[x + 1]];

            // If next symbol is >= to current symbol
            if (s1 >= s2) {
                console.log(`Curr: ${s1}, next is ${s2}. Next term is greater or equal`);
                total += s1;
            } else {
                console.log(`Curr: ${s1}, next is ${s2}. Next term is smaller. Setting total ${total + (s2 - s1)}`);
                total = total + (s2 - s1);
                x++;
            }
        } else {
            console.log(`Inside Else clause: total = ${total + s1}`);
            total += s1;
        }
    }

    console.log(total);
}

// romantoInt('MCMXCIV');

function value(r) {
    if (r == 'I')
        return 1;
    if (r == 'V')
        return 5;
    if (r == 'X')
        return 10;
    if (r == 'L')
        return 50;
    if (r == 'C')
        return 100;
    if (r == 'D')
        return 500;
    if (r == 'M')
        return 1000;
    return -1;
}

// Finds decimal value of a
// given romal numeral
function romanToDecimal(str) {
    // Initialize result
    var res = 0;

    for (i = 0; i < str.length; i++) {
        // Getting value of symbol s[i]
        var s1 = value(str.charAt(i));

        // Getting value of symbol s[i+1]
        if (i + 1 < str.length) {
            var s2 = value(str.charAt(i + 1));

            // Comparing both values
            if (s1 >= s2) {
                // Value of current symbol
                // is greater or equalto
                // the next symbol
                res = res + s1;
            } else {
                // Value of current symbol is
                // less than the next symbol
                res = res + s2 - s1;
                i++;
            }
        } else {
            res = res + s1;
        }
    }

    return res;
}

console.log(romanToDecimal('MCMXCIV'));