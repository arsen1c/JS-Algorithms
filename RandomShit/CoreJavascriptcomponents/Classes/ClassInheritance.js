/*
  Read More: https://javascript.info/class-inheritance
*/

class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  // Prototype method
  run(speed) {
    this.speed = speed;
    return `${this.name} is running at speed ${this.speed}`;
  }

  // Prototype method
  stop() {
    this.speed = 0;
    return `${this.name} has stopped running`;
  }
}

const dog = new Animal('spike');
console.log(dog.run(10)); // spike is running at speed 10
console.log(dog.stop()); // spike has stopped running


class Rabbit extends Animal{
  hide() {
    return `${this.name} hides!`;
  }
}

let rabbit = new Rabbit('Rob'); // Rabbit {speed: 0, name: 'Rob', hide: f}
console.log(Rabbit.prototype.__proto__); // Animal{}
console.log(rabbit.hide()); // Rob hides
console.log(rabbit.run(4)); // Rob is running at speed 4 
/*
  Observation:
    1. rabbit object has no "run" method.
    2. Its prototype, that is Rabbit.prototype has "hide", but not "run"
    3. Its prototype, that is (due to extends) Animal.prototype, that finally has the run method

  Rabbit.prototype == Animal {constructor: f, hide: f}; // prototype methods of Rabbit class
  Rabbit.prototype.__proto__ == Animal {constructor: f, run: f, stop: f}; // inherited methods (from Animal class)

  Note: JS itself uses prototypal inheritance for built-in objects
    ---> Eg: Date.prototype.[[Prototype]] === Object.prototype
    Thats why Dates have access to generic object methods 
*/


/*
  ===========| Any xpression is allowed after "extends" 😮 |============
  
  + Class syntax allows to specify not just a class, but any expression after extends.
  + For instance, a function call that generates the parent class:
*/
function f(phrase) {
  return class {
    sayHi() {return phrase}
  }
}

class User extends f('Hello 😮'){};

console.log(new User().sayHi()); // Hello 😮
/*
  + Here "class User" inherits from the result of "f('Hello')"
  + That may be useful for advanced programming patterns when we use functions to generate 
    classes depending on many conditions and can inherit from them.
*/


/*
  ===========| Overriding a method |============
  --> By default, all methods that are not specified in "class Rabbit" are taked directly "as is"
      from "class Animal"
      + We can specify our own method in Rabbit, such as stop() then it will be used instead 

      + Usually we don't want to totally replace a parent method, but rather to build on top of it
        to tweak or extend its functionality.
      + We do something in our method, but call the parent method before/after it or in the process. 

      + Classes provied "super" keyword for that.
        -> super.method(...) to call  a parent method
        -> super(...) to call a parent constructor(inside our constructor only)
*/
console.log(rabbit.stop()); // Rob has stopped running

class AnotherRabbit extends Animal {
  hide() { return `${this.name} hides!` }
  // Auto hide our rabbit when stopped
  stop(){
    // Custom stop method
    // call parent stop
    console.log(super.stop()); // Bob has stopped running 
    // and then hide
    console.log(this.hide()); // Bob hides! 
  }
}

let anotherRabbit = new AnotherRabbit('Bob');
console.log(anotherRabbit.run(5));
// console.log(AnotherRabbit.prototype.__proto__)
anotherRabbit.stop(); // Bob has stopped running. Bob hides! 
// NOTE: now rabbit has the stop method that calls the parent super.stop() in the process