// NEW TOPIC FUNCTION 
const newTopic = topicName => {
	console.log(`\n===============| [+] ${topicName.toUpperCase()} [+] |===============`)
}

// ===============| [+] FUNCTIONAL CLASSES [+] |===============

/*
	Creating classes using Functions:
	1. Define a normal Javascript new Function
	2. Create an object by using the "new" keyword 
	3. Define properties and methods for a created object using the "this" keyword.
*/

function Fruit (type) {
	this.type = type;
	this.color = 'unknown';
	// internally defining the function.
	this.getInfomation = getFruitInformation; 
}

function getFruitInformation () {
	return 'This ' + this.type + ' is ' + this.color + '.';
}

let lime = new Fruit('Mexican lime');
console.log(lime.getInfomation()); // This Mexican lime is unknown.
// Setting the color.
lime.color = 'green';
console.log(lime.getInfomation()); // This Mexican lime is green.


// ===============| [+] THE PROTOTYPE PROPERTY [+] |===============
newTopic('the protytype property');

// Prototype "getInformation1" function into "Fruit" class.
Fruit.prototype.getInformation1 = function () {
	return 'Using Prototype: ' + 'This ' + this.type + ' is ' + this.color + '.';
}

console.log(lime.getInformation1());


// ===============|[+] Same thing as above, but using Object Literals [+]|===============
newTopic('Same thing as above, but using Object Literals');

let lime1 = {
	type: 'Mexican Lime 1',
	color: 'green',
	getInformation1 () {
		return 'This ' + this.type + ' is ' + this.color + '.'; 
	}
}

console.log("Lime1: " + lime1.getInformation1());// Lime1: This Mexican Lime 1 is green;
// Change the color property to yellow
lime1.color = 'yellow';
console.log("Lime1: " + lime1.getInformation1()); // Lime1: This Mexican Lime 1 is yellow;
console.log(lime1);

// ===============| Singleton Class Using a Function |===============
newTopic('Singleton Class Using a Function');

/*
	[+] A singleton class is a design pattern that restricts a class to a single instance. When we assign the value of new function(){...} to a variable, the following happens:
		1. We define an anonymous constructor function.
		2. We invoke the anonymous constructor function with the new keyword.
*/
let lime2 = new function() {
    this.type = 'Mexican lime 2';
    this.color = 'green';
    this.getInformation = function() {
        return 'This ' + this.type + ' is ' + this.color + '.';
    };
}

console.log(lime2.getInformation()); // This Mexican lime 2 is green.
// Change the color property of lime2 object to yellow;
lime2.color = 'yellow';
console.log(lime2.getInformation()); // This Mexican lime 2 is yellow.
// console.log(lime2); // Returns lime2 Object;


// ===============|[+] CLASSES [+]|===============
newTopic('classes');

//	+ Declaring a Class using "class" keyword;
class Polygon {
	/**
	 * @params {number, number} height, width
	 * */
	constructor(height, width) {
		this.height = height;
		this.width = width;
	}
}

// 	- Note: "new" keyword will invoke the "contructor" function inside polygon class
let p = new Polygon(1, 2); // p = { height: 1, width: 2 };
console.log('Polygon p:', p); // Polygon p: Polygon { height: 1, width: 2 }

/*
	============| Function Declaration VS Class Declaration |============
		+ Function Declaration are hoisted (i.e., can be referenced before they're declared) 
		+ Class Declaration are not hoisted.
		+ We must first declare out class before attempting to access (or refeence) it;
		+ If we fail to do so, "REFERENCE ERROR" will be thrown.
*/

try {
	// This block will throw error, because classes are not hoisted.
	let p1 = new Polygon1(1, 2);
	console.log('Polygon p1:', p1); // ReferenceError
} catch (e) {
	// Catch the error thrown from try block and print 
	// the name and message of the error.
	console.log(e.name + ': ' + e.message);
}

class Polygon1 {
	constructor(height, width) {
		this.height = height,
		this.width = width
	}
}
p1 = new Polygon1(10, 20);
console.log("Polygon p1:", p1); // Polygon p1: Polygon1 { height: 10, width: 20 }


/*
	============| The Constructor Method |============
		+ The "constructor" method is a special method we use to create and initialize objects of a class.

		+ A class can only have one special method with the name "constructor", and attempting to write 
		  a class containing more than one constructor method will throw a "SyntaxError".

		+ To implement "inheritance", we can use the "super" keyword in a constructor to call a parent 
		  class constructor.
*/

/*
	============| The Prototype Method |============
	Note:
		In normal Functional class, we have to do something like
			=> FunctionName.prototype.PrototypeFunction
		in order to protype functions.

	We can easily do that inside a class itself, like the following:
*/

class Polygon2 {
	constructor(height, width) {
		this.height = height,
		this.width = width
	}

	// Prototype Method
	getArea() {
		return this.height * this.width;
	}
};

const square = new Polygon2(10, 10);
console.log(square.height);
console.log(square.getArea()); // 100

/*
	============| Static Methods |============

	+ Static methods are methods relevant to all instances of a class 
	  and not just any one instance of the class

	[+] Static method assigns a method to the class function itself, not to its "prototype"

	[+] These methods receive information from their arguments and not a class instance.
		This allows us to invoke a class static methods without creating an instance of class
		
	+ We can't call a static method on an instantiated class object [throws TypeError] 
*/

class Point {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	// Assigns the method to the class iteself and not prototype
	static distance(a,b) {
		const dx = a.x - b.x;
		const dy = a.y - b.y;
		return Math.sqrt(dx * dx + dy * dy);
	}
};

const point1 = new Point(5,5); // Point {x: 5, y: 5};
const point2 = new Point(10,10); // Point {x: 10, y: 10};

console.log(Point.distance(point1, point2));

class Article {
	constructor(title, date) {
		this.title = title;
		this.date = date;
	}

	// Static method
	static compare(articleA, articleB) {
		return articleA.date - articleB.date;
	}

	// Static method
	static createToday() {
		return new this('Todays details', new Date());
	}

	// Static property
	static publisher = 'Arsen1c';
};

// usage
let articles = [
  new Article("HTML", new Date(2019, 1, 1)),
  new Article("CSS", new Date(2019, 0, 1)),
  new Article("JavaScript", new Date(2019, 11, 1))
];

articles.sort(Article.compare); // compare(a,b) => a - b; articles.sort(compare); 
console.log(articles[0].title);

console.log(Article.createToday());
console.log(Article.publisher); // Static property
// const article2 = Article.createToday();
// console.log(article2);
// article2.title = 'LOL';
// console.log(article2);

/*
	Static methods are also used in database-related classes to search/save/remove entries from
	the database, like this:

	> Article.remove({id: 1234});
*/