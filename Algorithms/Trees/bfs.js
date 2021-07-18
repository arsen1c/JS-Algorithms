const graph = new Map();

graph.set('you', ['alice', 'bob','claire']);
graph.set('bob', ['anuj', 'peggy']);
graph.set('alice', ['peggy']);
graph.set('claire', ['thom', 'jonny']);
graph.set('anuj', []);
graph.set('peggy', []);
graph.set('thom', []);
graph.set('jonny', []);

// console.log(graph.get('you'));

const personIsSeller = person => person[person.length - 1] === 'm';

const search = (name) => {
  const searchQueue = [];
  searchQueue.push(graph[name]);
  const searched = [];

  while(searchQueue) {
    // console.log(searchQueue);
    person = searchQueue.unshift();
    console.log(person);
    if (!searched.includes(person)) {
      if (personIsSeller(person)) {
        console.log(`${person} is a mango seller`);
        return true;
      }

      searchQueue.push(graph[person]);
      searched.push(person); 
    }
  }

  return;
}

// search('you');