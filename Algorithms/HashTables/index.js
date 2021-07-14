// [+] MAPS [+]
const myMap = new Map();

myMap.set('Nathan', "12345");
myMap.set('Jane', "0987");

// Print the key and values of the map
for (let [key, value] of myMap) {
	// console.log(`${key} = ${value}`);
};


/*
 *	Implementing Hash Tables in Javascript (3 Steps):
 *		1. Create a HashTable class with "table" and "sizze" initial properties
 *		2. Add a "hash()" function to tranform keys into indices.
 *		3. Add the "set()" and "get()" methods for adding and retrieving key/value pairs from the table
*/ 

class HashTable{
	constructor() {
		this.table =  new Array(127); // 127 buckets
		this.numItems = 0;
		// Increase the size of the array when loadFactor is 80%;
		// this.loadFactor = this.numItems / this.table.length;
	};

	// Hash() method that will accept a key value and tranform it into an Index.
	// Sum the ASCII code of the characters in the key using charCodeAt() method.
	// Note: "_" to indicate that it's a private class

	_hash(key) {
		let hash = 0;
		for (let i = 0; i < key.length; i++) {
			// console.log(`Char code of ${key[i]} is: ${key[i].charCodeAt()}`)
			hash += key.charCodeAt(i);
		};
		console.log('Hash:', hash);
		return hash % this.table.length;
	};

	set(key, value) {
		const index = this._hash(key);
		if (this.table[index]) {
			this.table[index].push([key, value]);
		} else {
			this.table[index] = [[key, value]];
		}
		this.numItems++;
		console.log('Number of items in the list:', this.numItems);
		console.log(`Running set function....Item set at index ${index}. Item: ${this.table[index]}`)
		// console.log(this.table)
	};

	get(key) {
		const target = this._hash(key);
		if (!this.table[target]) {
			return null;
		}
		return this.table[target].find(x => x[0] === key)[1];
	};

	remove(key) {
		const index = this._hash(key);

		if (this.table[index] && this.table[index].length) {
			this.table[index] = [];
			this.numItems--;
			console.log('Number of items in the list:', this.numItems);
			return true;
		}

		return false;
	};
};

const ht = new HashTable();
ht.set('Name', 'Arsenic');
ht.set('age', 20);
console.log(ht.get('Name'));
// ht.remove('Canada');
// ht.set('France', 300);
// ht.set('France', 100);
// ht.set('Spain', 110);

// console.log(ht.get('Canada'))