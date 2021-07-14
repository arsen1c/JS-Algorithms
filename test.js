/*
	Print YES, if the boys can divide (even number) the watermelon into two parts, 
	each of them weighing  even number of kilos; and NO in the opposite case.
*/
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on('end', (_) => {
  inputString = inputString
    .trim()
    .split('\n')
    .map((string) => {
      return string.trim();
    });

  // main();
});

function readline() {
  return inputString[currentLine++];
}

function main() {
  const input = readline();
  input <= 2 || input % 2 !== 0 ? console.log('NO') : console.log('YES');
}
