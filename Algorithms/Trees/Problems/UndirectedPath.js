/*
  ==> Problem link: https://structy.net/problems/undirected-path

  Problem statment:
    Write a function, undirectedPath, that takes in an array of edges for an undirected graph 
    and two nodes (nodeA, nodeB). The function should return a boolean indicating whether or not 
    there exists a path between nodeA and nodeB.
*/

const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
];

const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges); 
  // console.log(graph);
  return hasPath(graph, nodeA, nodeB, new Set()); // returns boolean
};

const hasPath = (graph, src, dst, visited) => {
  if (src === dst) return true;
  if (visited.has(src)) return false;

  visited.add(src);

  for (let neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst, visited) === true) {
      return true;
    }
  }

  return false;
}

/**
 * @params [Array] edges
 * @returns [Object] adjacency list
 * 
 * This function takes an array(edges) and returns adjacency list of those edges
 * */
const buildGraph = (edges) => {
  const graph = {};

  // each array/matrix inside the array
  for (let edge of edges) {
    const [a, b] = edge;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }

  return graph;
}

console.log(undirectedPath(edges, 'j', 'm')); // -> true
