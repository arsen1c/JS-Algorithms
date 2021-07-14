/*
  Reference: https://soshace.com/understanding-data-structures-in-javascript-linked-lists/
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
    this.tail = this.head;
  }

  /**
   * Append a node to the end of the linked list
   * Time complexity: O(1)
   * @param {any} value
   */
  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size++;
  }

  /**
   * Prepend: Adding values to the started of the linked list
   * Time complexity: O(1)
   * @param {any} value
   */
  prepend(value) {
    const node = new Node(value);

    node.next = this.head;
    this.head = node;
    this.size++;
  }

  /**
   * Insert: Adding values at a specific index
   * @param {any} value
   * @param {number} index
   */
  insert(value, index) {
    if (index < 0 || index >= this.size) {
      return this.append(value);
    }

    const node = new Node(value);
    const { prevNode, nextNode } = this.getPrevNextNodes(index);
    prevNode.next = node;
    node.next = nextNode;
    this.size++;
  }

  /**
   * Remove a node at a specific index
   * @param {number} index
   */
  remove(index) {
    let { prevNode, nextNode } = this.getPrevNextNodes(index);
    prevNode.next = nextNode.next;
    this.size--;
  }

  /**
   * Get previous and next node
   * @param {number} index
   * @returns {object}
   */
  getPrevNextNodes(index) {
    let count = 0;
    let prevNode = this.head;
    let nextNode = prevNode.next;

    while (count < index - 1) {
      prevNode = prevNode.next;
      nextNode = prevNode.next;
      count++;
    }

    return { prevNode, nextNode };
  }

  /**
   * Reversing a linked list
   * => We need to keep track of 3 nodes:
   *    - previousNode, currentNode and nextNode
   * => Initially, previousNode has value "null" and
   *    currentNode has the vaue of "head"
   * => We assign the nextNode to the currentNode.next
   * => Next, we point the "currentNode.next" to previousNode
   * => Now, we shift the previousNode to currentNode and
   *    currentNode to nextNode
   */
  reverse() {
    let prevNode = null;
    let currentNode = this.head;

    while (currentNode !== null) {
      let nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }

    this.head = prevNode;
  }

  /**
   * Lookup: Looking up a value at specific index
   * @param {number} index
   * @returns {node}
   */
  lookup(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter < index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }
}

// Create a new linked list object
const ll = new LinkedList();

/**
 * Append
 */
ll.append('arsenic');
console.log(ll);
ll.append('astrix');
console.log(ll);
ll.append('ramu');
console.log(ll);

/**
 * Prepend
 */
ll.prepend('Aashish');
console.log(ll);

/**
 * Insert
 */
ll.insert('Tinku', 7);
// ll
// ll.remove(0);
// ll;
ll.reverse();
ll;
console.log(ll.lookup(1));
