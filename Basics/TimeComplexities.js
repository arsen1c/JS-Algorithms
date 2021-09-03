/**
 * We will cover 8 Big-O notions in this post.
 * */
 

 function findSmallestElem(arr) {
  let min;
  arr.forEach(e => {
    if (!min || e < min) {
      min = e;
    }
  });

  console.log('Min Elem:', min);
 } 

findSmallestElem([100, 3000, 200, 50,10]);