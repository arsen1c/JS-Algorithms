// Link: https://daveceddia.com/linked-lists-javascript/
let list = null; // start with empty list

// The node is actually a list with a lenght of 1 - it's single value that doesnt
// have any value after it.
// Since we need to create node pretty often, lets write a function for that

function makeNode(value) {
	return {
		value: value,
		next: null
	}
};

// Create the nodes
let four = makeNode(4);
let three = makeNode(3);
let two = makeNode(2);
let one = makeNode(1);

// link them together
four.next = three;
three.next = two;
two.next = one;

// First we create 4 nodes, each holding a number of the 4-digit PIN.



// Function to print out the nodes
function printList(list) {
	// Start with the first node
	let current = list;

	// As long as `current` isn't null, print out the value 
	while(current) {
		console.log(current.value);

		// advance to the next node in the list by replacing
		// current with whatever `next` points to
		current = current.next;
	};
};

printList(four);

// Function to print out the nodes (Recursive)
function printListRecursive(list) {

}