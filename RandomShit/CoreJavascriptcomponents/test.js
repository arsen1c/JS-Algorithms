class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
}

// Person.prototype.printFullName = function() {
//   console.log(this.name, this.surname);
// }

function printFullName(city) {
  console.log(this.name, this.surname, `from ${city}`);
}

const arsenic = new Person('Arsenic', 'Vec');
console.log(arsenic);


const print = printFullName.bind(arsenic, ['Mumbai'])
print();
