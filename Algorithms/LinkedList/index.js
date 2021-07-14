/**
 * Reference Links: 
 * 	- https://www.geeksforgeeks.org/implementation-linkedlist-javascript/
 * 	- https://adrianmejia.com/data-structures-time-complexity-for-beginners-arrays-hashmaps-linked-lists-stacks-queues-tutorial/#Linked-Lists
*/

class Node {
	/**
   * Create a new node 
   * @param {any} value
   * @param {node} next
  */
	constructor(value) {
		// Value: holds the data of the node
		this.value = value;
		// Next: holds the pointer to the next node
		this.next = null; // initial value "null"
	}
};


class LinkedList{
	/**
   * Create a new linked list
   * @param {node} head
   * @param {number} size
  */
	constructor() {
		// Head: first node of the list
		this.head = null;
		this.size = 0; // number of nodes in the list
	}

	/**
	 * Add a new Node to the end of the Linked list
	 * @param {any} value
	*/
	add (value) {
		// Create a new node
		let node = new Node(value); // Node: { value: VALUE, next: null };

		// To store the current node
		let current;

		// If list is empty add the
		// current node and make it head
		if (!this.head) {
			this.head = node;
			// console.log('Setting 1st node:', this.head);
		} else {
			// Current head AKA first node in the linked list
			current = this.head;
			// console.log(current);
			
			// Iterate to the end of the list
			// if theres a "next" node  in the current node
			while (current.next) {
				// console.log(current);

				// Set current "node" to the "next" Node
				current = current.next;
				// console.log(current);
			}

			// Once we find the last node with "null" as "next" property
      // Set the newly create node as the "next" property
			current.next = node;
			// console.log(current);
		}

		this.size++;
	}

	/**
	 * Insert new node at the given index in the list
	 * @param {any} data
	 * @param {number} index
	*/
	insertAt(index, data) {
		if (index < 0 || index > this.size) {
			return console.log('Please enter a valid index.');
		} else {
			// Create a new node
			let node = new Node(data);
			let curr, prev;

			curr = this.head; // grab the first node in the list

			// if index === 0
			if (index === 0) {
				// set the "next" property of newly created node as
				// the current 1st node in the list
				node.next = this.head;
				this.head = node; // set new node as the head
			} else {
				curr = this.head;
				let it = 0;
				while(it < index) {
					it++;
					prev = curr;
					curr = curr.next;
				}
			}
			this.size++;
		}
	}

	// Remove node from
}

const ll = new LinkedList();
console.log(ll);

ll.add('Arsenic');
console.log(ll);
ll.add('Astrix');
console.log(ll);
ll.insertAt(1, 'Raamu');
console.log(ll);
console.log(ll.head.next);