/**
 * Reference: https://youtu.be/ke_y6z0xRpk
 * Polyfill is kind of a brower fall back if browser doesn't support bind method 
 */

// [+] Task is to create our own bind method [+] 

let name = {
  firstName: 'Arsenic',
  lastName: 'Vec',
}

let printName = function(hometown, state) {
  console.log(this.firstName, this.lastName, `from ${hometown}, ${state}`);
}

// Actual bind function
printName1 = printName.bind(name, 'Mumbai');
printName1('Maharashtra')
/*
 * This is how a bind method works

 * let printMyName = printName.bind(name);
 * printMyName(name); // Arsenic Vec 
*/

// Since, "bind" method is avaiable for any function in js
// we will prototype our "myBind" on function as well
Function.prototype.myBind = function(...args) {
  // console.log(this);
  let obj = this; // this = whatever function "myBind" is called up(printName)
  
  params = args.slice(1); // slice will return an array with params
  // console.log(params);

  return function(...args2) {
    // console.log(this);
    obj.apply(args[0], [...params, ...args2]);
  }
}

let printMyName2 = printName.myBind(name, 'Mumbai');
printMyName2('Maharashtra'); 