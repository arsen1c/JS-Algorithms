class Node {
  /**
   * Create a new node 
   * @param {any} value
   * @param {node} next
  */
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

Node

class LinkedList{
  /**
   * Create a new linked list
   * @param {node} head
   * @param {number} size
  */
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Add element to the end of the linked list
  add (value) {
    const node = new Node(value);

    if(!this.head) {
      this.head = node;
    } else {
      let currentNode = this.head; // Intially, 1st node in the list

      // Iterate to the end of the list
      while(currentNode.next) {
        // Set current node to the next Node
        currentNode = currentNode.next;
      }

      // Once we find the last node with "null" as "next" property
      // Set the newly create node as the "next" property
      currentNode.next = node;
    }
    // Increase the size of the list by one
    this.size++;
  }
};

LinkedList

const ll = new LinkedList();  // head: null, size: 0;
ll.add('Arsenic');
console.log(ll);
ll.add('Astrix');
console.log(ll);
ll.add('Vector');
console.log(ll);