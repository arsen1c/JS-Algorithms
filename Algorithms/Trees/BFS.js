/*
  Breadth first used queues
  BFS is very similar to DFS, only difference is how we access the items in the array
    Stack/Queue 
*/

const breadthFirstPrint = (graph, sourceNode) => {
  const queue = [ sourceNode ];

  while(queue.length > 0) { 
    const current = queue.shift();
    console.log(current);
    for (let neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }
}


// const breadthFirstPrint = (graph, sourceNode) => {
//   console.log(sourceNode);
//   for (let neighbor of graph[sourceNode]) {
//     breadthFirstPrint(graph, neighbor);
//   }
// }

const graph = {
  a: ['c', 'b'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: [],
}

breadthFirstPrint(graph, 'a'); // acbedf