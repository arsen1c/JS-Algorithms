function romanToInt(s) {
    const symbols = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50 ,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let result = 0;

    for (let x = 0; x < s.length; x++) {
        if (symbols[s[x]] < symbols[s[x+1]]) {
            result += symbols[s[x+1]] - symbols[s[x]];
            x++;
        } else {
            result += symbols[s[x]];
        }
    }

    console.log(result);
}

romanToInt('IX');