function sumAllNumbers(num) {
    return num.toString().split('').reduce((a, b) => {
        return parseInt(a) + parseInt(b);
    }, 0)
}

function randomFnc() {
  const arr = [1,2,3];
  for (let [index, value] of arr.entries()) {
    console.log([value, index]);
  }

  return null;
}

console.log(sumAllNumbers(1233));