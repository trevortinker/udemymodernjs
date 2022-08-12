/* --- Begin Constructors and the 'this' Keyword --- */

// Person constructor
function Person(name, dob) {
  this.name = name;
  this.birthday = new Date(dob);
  this.calculateAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
}

const brad = new Person('Brad', '3-10-1981');
const trevor = new Person('Trevor', '8-23-1979');

// console.log(brad.calculateAge(), john.calculateAge(), trevor.calculateAge());

/* --- End Constructors and the 'this' Keyword --- */

/* --- Begin Built in Constructors --- */

// String
const name1 = 'Jeff';
const name2 = new String('Jeff');

// console.log(name1, name2);

// Number
const num1 = 5;
const num2 = new Number(5);

// Boolean
const bool1 = true;
const bool2 = new Boolean(true);

// Function
const getSum1 = function (x, y) {
  return x + y;
};
const getSum2 = new Function('x', 'y', 'return x + y');
// console.log(getSum2(3, 4));

// Object
const john1 = { name: 'John' };
const john2 = new Object({ name: 'John' });
// console.log(john1, john2);

// Arrays
const arr1 = [1, 2, 3, 4];
const arr2 = new Array(1, 2, 3, 4);

// Regular Expressions
const re1 = /\w+/;
const re2 = new RegExp('\\w+');

// console.log(re1, re2);

/* --- End Built in Constructors --- */

/* --- Begin Prototypes Explained --- */

// Object.prototype
// Person.prototype

// Person constructor
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
  // this.calculateAge = function () {
  //   const diff = Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // };
}

// Calculate age
Person.prototype.calculateAge = function () {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

// Get full name
Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

// Gets Married
Person.prototype.getsMarried = function (newLastName) {
  this.lastName = newLastName;
};

const john = new Person('John', 'Doe', '8-12-1990');
const mary = new Person('Mary', 'Jane', '4-7-1978');

console.log(mary.getFullName());
mary.getsMarried('Smith');
console.log(mary.getFullName());

/* --- End Prototypes Explained --- */

/* --- Begin Prototypal Inheritance --- */

// Person constructor
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = function () {
  return `Hello there, ${this.firstName} ${this.lastName}`;
};

const p1 = new Person('Jane', 'Doe');
console.log(p1.greeting());

// Customer constructor
function Customer(firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName);
  this.phone = phone;
  this.membership = membership;
}

// Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);

// Make customer.prototype return Customer()
Customer.prototype.constructor = Customer;

// Create customer
const customer1 = new Customer('Bob', 'Smith', '555-555-1212', 'standard');
console.log(customer1);

// Customer greeting
Customer.prototype.greeting = function () {
  return `Hello there, ${this.firstName} ${this.lastName}. Welcome to our showroom.`;
};

console.log(customer1.greeting());

/* --- End Prototypal Inheritance --- */

/* --- Begin Object.create --- */

const personPrototypes = {
  greeting: function () {
    return `Hello there, ${this.firstName} ${this.lastName}!`;
  },
  getsMarried: function (newLastName) {
    this.lastName = newLastName;
  },
};

const susan = Object.create(personPrototypes);

susan.firstName = 'Susan';
susan.lastName = 'James';
susan.age = 30;

susan.getsMarried('Thomas');

console.log(susan.greeting());

// Alternate method of Object creation
const bradley = Object.create(personPrototypes, {
  firstName: { value: 'Bradley' },
  lastName: { value: 'Timothy' },
  age: { value: 30 },
});

console.log(bradley.greeting());
/* --- End Object.create --- */
