/**
 * Reference: https://structy.net/problems/has-path 
 * 
 * Description:
 *  Write a function, hasPath, that takes in an object representing the adjacency list of a 
 *  directed acyclic graph and two nodes (src, dst). The function should return a boolean 
 *  indicating whether or not there exists a directed path between the source and destination 
 *  nodes.
 * 
 * Tip: This problem can be solved using BFS or DFS
 * 
 * */

// [+] Depth First Search [+]

// Iterative approach
// const hasPath = (graph, src, dst) => {
//   const stack = [src];

//   while(stack.length > 0) {
//     // Take the last element in the stack
//     const current = stack.pop();

//     // Loop through the neighbors of the current node
//     for (let neighbor of graph[current]) {
//       // if current neighbor === destination, return true
//       if (neighbor === dst) return true;

//       // else add the neighbors to the stack
//       stack.push(neighbor);
//     }
//   }

//   return false;
// }


// Recursive approach
// const hasPath = (graph, src, dst) => {
//   if (src === dst) return true;

//   for (let neighbor of graph[src]) {
//     if (hasPath(graph, neighbor, dst)) return true;
//   }

//   return false;
// }

// [+] Breadth First Search [+]
const hasPath = (graph, src, dst) => {
  const queue = [src];

  while(queue.length > 0) {
    const current = queue.pop();

    if (current === dst) return true;

    for (let neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }

  return false;
}


// [+] Test Cases [+]

const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: []
};

const graph2 = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: []
};

const graph3 = {
  v: ['x', 'w'],
  w: [],
  x: [],
  y: ['z'],
  z: [],  
};

const graph4 = {
  v: ['x', 'w'],
  w: [],
  x: [],
  y: ['z'],
  z: [],  
};

// Test case 1
console.log(hasPath(graph, 'f', 'k')) // true
console.log(hasPath(graph2, 'i', 'h')) // true
console.log(hasPath(graph3, 'v', 'w')) // true
console.log(hasPath(graph4, 'v', 'z')) // false