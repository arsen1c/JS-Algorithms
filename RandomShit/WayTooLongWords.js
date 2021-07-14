'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readline() {
    return inputString[currentLine++];
}


function abbreviate(...args) {
    const [...inputs] = args;

    inputs.forEach(input => {
        if (input.length && input.length <= 10) {
            console.log(input);
        } else {
            console.log(`${input[0]}${input.length - 2}${input[input.length - 1]}`);
        }
    });
}

function main() {
    const numberOfInputs = readline();

    let inputs = [];

    for (let x = 0; x < numberOfInputs; x++) {
        inputs.push(readline());
    }

    abbreviate(...inputs);
}