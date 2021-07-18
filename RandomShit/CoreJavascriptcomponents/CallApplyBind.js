/**
 * Reference: https://www.youtube.com/watch?v=75W8UPQ5l7k 
*/

let name = {
  firstName: "Arsenic",
  lastName: "Vec",
}
let name2 = {
  firstName: 'Sachin',
  lastName: 'Tendulkar'
}

function printFullName(homeTown, state) {
  console.log(`My name is ${this.firstName} ${this.lastName} from ${homeTown}, ${state}`)
}

/**
 * Function Borrowing 
 * Borrow functiong from ohter object and use it
 * "Call" method
 *  - 1st agrument is the "this" reference
*/

printFullName.call(name, 'Ulhasnagar', 'Maharashtra'); // "printFullName" should point to "name" object
// OR "this" keyword in "printFullName" function should point to "name"/"name2" object
printFullName.call(name2, 'Mumbai', 'Maharashtra'); // printFullName should point to "name2"


/**
 * Apply Method
 * - The only difference between "call"  and "apply" method is how we
 *    pass the arugments
 * - We pass the agruments as an Array.
*/

printFullName.apply(name2, ['Mumbai', 'Maharashtra']);

/**
 * Bind Method
 * Works just like call method, but it doesn't invoke upon calling
 * It returns the copy of the function (printFullName) with the arguments passed in it. 
*/
let printMyName = printFullName.bind(name, 'India', "Asia");
printMyName();