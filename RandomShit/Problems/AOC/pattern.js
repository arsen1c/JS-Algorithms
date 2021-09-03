function pattern(n) {
  for (let x = 1; x <= n; x++) {
    console.log(' '.repeat(x-1) + '#'.repeat(x));
  }
}

pattern(4);

arr = [ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ];

function diagonalDifference(arr) {
    // Write your code here
    let left = 0;
    let right = 0;

    for (let x = 0; x < arr.length; x++) {
        left += arr[x][x];
        right += arr[x][arr[x].length - x-1];
    }
    
    return Math.abs(left - right); 

}

console.log(diagonalDifference(arr));


const getHour = (hr) => {
  if (hr === '12') return '00'; 
  return 12 + parseInt(hr, 10)
};
const clearOutput = (s) => s.substr(0, s.length-2);

function timeConversion(s) {
    // Write your code here
    if (s.includes('PM')) {
        let hr = s.split(':').shift();
        console.log(clearOutput(s.replace(/[0-9]{2}/, getHour(hr))));
    }
    

    if (s.split(':').shift() == '12') {
      console.log(clearOutput(s.replace(/[0-9]{2}/, '00')));
    }
}

timeConversion('12:01:00PM');