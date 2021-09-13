// const depthFirstPrint = (grpah, sourceNode) => {
//    // DFS uses stack
//   const stack = [ sourceNode ]; // ['a'] 
//   // while stack not empty
//   while(stack.length > 0) { 
//     const current = stack.pop();
//     console.log(current);
//     // console.log(graph['a']);
//     for(let neighbor of graph[current]) {
//       // console.log(neighbor);
//       stack.push(neighbor);
//     }
//   }
// };

// Recursive
const depthFirstPrint = (graph, sourceNode) => {
  console.log(sourceNode);
  for (let neighbor of graph[sourceNode]) {
    // Implicit base case
    // This loop itself is a base case because if 
    // a neighbors array is empty then this loop will never execute
    depthFirstPrint(graph, neighbor);
  }
}

const graph = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: [],
}

depthFirstPrint(graph, 'a'); // abdfce