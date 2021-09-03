/*
  Class inheritance is a way for one class to extend another class
  So we can create new functionality on top of the existing.

  More here: https://javascript.info/class-inheritance
*/

/*
  ============| Prototypal inheritance => [[Prototype]] |============
  + In JS, objects have a special hidden property [[Prototype]], that is either "null"
    or references another object. THAT OBJECT IS CALLED "a prototype".
  + When we read a property from object, and it's missing, JS automatically takes if from the porotype
*/
let animal = {
  eats: true
};
let rabbit = {
  runs: true
}
console.log(rabbit.runs); // true
console.log(rabbit.eats); // undefined
rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal
console.log(rabbit.eats); // true

/*
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  + Normally JS reads a property from Object, and takes the missing properties from the prototype(Object/Function)
    Example:
      Obj -> {key: value} -> [[Prototype]](Object)
    Actual (finding "rabbit.eats"):
      rabbit(Obj) -> {runs: true} -> [[Prototype]](Object) // returns undefined

  + Doing "rabbit__proto__ = animal", will set the Prototype of "rabbit" to "animal" object and the animal object will point to [[Prototype]](Object)
    OR "rabbit" will inherit properties from "animal" object
    Example:
      Obj -> {key: value} -> Obj.__proto__ -> [[Prototype]](Object)
    Actual (finding "rabbit.eats"):
      rabbit(Obj) -> {runs: true} -> rabbit.__proto__ = animal{eats: true} -> [[Prototype]](Object) 

  + Here we can say that "animal" is the Prototype of "rabbit" OR "rabbit" prototypically 
    inherits from "animal"
  + So if "animal" has a lot of useful properties and methods, then they become automatically available
    in "rabbit". Such properties are called "inherited". If we have a method in "animal", it can
    be called on "rabbit"

  + Prototype chains can be longer
    longEar[[Prototype]] -> rabbit[[Prototype]] -> animal{eats: true, walk: function}
    ^here if something is missing in "longEar" Js will look for it in "rabbit" and then in "animal"

  NOTE: 
    1. __proto__ !=== [[Prototype]]. __proto__ is rather acts as a getter and setter for [[Prototype]]
    2. __proto__ is now outdate, it is advised to use Object.getPrototypeOf/Object.setPrototypeOf

    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/




/*
  ============| Writing doesnt use prototype [[Prototype]] |============

  let animal = {
    eats: true,
    walk() {
      // this method won't be used by rabbit
      return 0
    }
  };

  let rabbit = {
    __proto__: animal
  };

  rabbit.walk = function() {
    alert("Rabbit! Bounce-bounce!");
  };
  
  From now on, rabbit.walk() call finds the method immediately in the object and executes
  it, without using the prototype:

*/
let user = {
  name: 'John',
  surname: 'Doe',

  set fullName(value) {
    [this.name, this.surname] = value.split(' ');
  },

  get fullName() {
    return `${this.name} ${this.surname}`; 
  }
}

let admin = {
  __proto__: user,
  isAdmin: true
}

console.log(admin.fullName); // John Doe (*)
// setter triggers!
admin.fullName = 'Alice Cooper';
console.log(admin.fullName); // Alice Cooper (**)
console.log(user.fullName); // John Doe
/*
  Here in the line (*) the property admin.fullName has a getter in the prototype user, so it is 
  called. And in the line (**) the property has a setter in the prototype, so it is called.
*/

animal.sleep = function() {
  this.isSleeping = true;
};

// modifies rabbit.isSleeping
console.log(rabbit.sleep()); // undefined
console.log(rabbit.isSleeping); // true


/*
  ============| for...in loop |============

  + the "for...in" loop iterates over inherited propeties too
*/

console.log(Object.keys(rabbit)) // runs
for(let prop in rabbit){console.log(prop)} // runs, isSleeping, eats, sleep
// Note: to exclude the inherited property use "Obj.hasOwnProperty(prop)"