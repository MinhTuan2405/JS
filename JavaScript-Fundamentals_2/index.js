
// "Strict mode" is a feature in JavaScript that helps you write cleaner, 
// more reliable code by enforcing stricter parsing and error handling. 
// When you use strict mode, JavaScript catches common coding mistakes and 
// throws errors that otherwise would have been ignored or caused bugs. This 
// helps prevent the use of unsafe actions, like using undeclared variables.

'use strict';


// functions

function processFruit (apples, oranges) {
    console.log (apples.name, oranges.date)
}

let redApple = {
    name: "red apple",
    date: '2020'
}

let orangeOrange = {
    name: "orange has orange color",
    date: '1020'
}

processFruit (redApple, orangeOrange)

// a function is only called if the calling has ()

processFruit // function is not called
processFruit (redApple, orangeOrange) // function is called


// Hoisting is a behavior in JavaScript where variable and function declarations 
// are moved to the top of their containing scope (global or function scope) 
// during the compile phase, before the code is executed. This means that you 
// can use variables and functions before they are declared in the code, without
// getting a reference error


// The arguments object in JavaScript is an array-like object that represents all the 
// arguments passed to a function. It is available in every function by default, 
// except for arrow functions. The arguments object allows you to access each 
// argument passed to the function, regardless of whether they are explicitly
// defined as parameters in the function signature.

// Key Characteristics of the arguments Object
// Array-like, but not an Array: The arguments object is similar to an 
//     array (you can access its elements using indexes like arguments[0], 
//     arguments[1], etc.), but it does not have all the built-in methods 
//     that arrays do, such as forEach(), map(), or filter().

// Dynamic Length: The arguments object has a length property, which indicates 
//                 the number of arguments passed to the function.

// Mutable: You can modify the values of the arguments object. However, 
//         if you modify an arguments entry, it will not affect any parameters 
//         explicitly defined in the function signature, and vice versa 
//         (in non-strict mode).

// Not Available in Arrow Functions: The arguments object is not available 
//     in arrow functions. To achieve similar functionality, you can use the 
//     rest parameter syntax (...args).

// function declarations
function funcName (argument) {
    // do st here
}
// hoisting -> true
// argument object -> true

// function expression
const FuncName = function (argument) {
    // do st here
}
// hoisting -> false
// argument object -> true

// arrow function
const FUNCNAME = (argumentList) => {
    // do st here
}
// hoisting -> false
// argument object -> false

// or can be declared in shorter (in one line)
const fname = argumentList => argumentList // do st here in one line, this is the return value


// functions calling other functons
// it simply is the calling of a function


// array
const friends = ['michael', 'linda', 'peter']
const year = [2000, '2003', true]
console.log (typeof year[2]) // boolean
const month = new Array (1, 2,3, 4, 5)

// get size of an array
const size = friends.length // return number
console.log (size) // 3
console.log (friends[0].length) // 7

const myArr = [
    [1, 2, 3],
    [4, 5, 6], 
    [7, 8, 9]
]

console.log (myArr[0], myArr[0][2]) // [1, 2, 3] 3


// basic methods, string can be streated as an array
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// put an element into an array, add an element at the end of an array
// change the origin array
// array.push(element1, ..., elementN);
const newLength = array.push (10) // return new length of an array
console.log (array) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log (newLength) // 10

// add at the begining of an array
// array.unshift(element1, ..., elementN);
const newlength = array.unshift (0) // return new length 
console.log (array) // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log (newlength) // 11

// remove last elements
// array.pop ()
const popped = array.pop () // return removed element
console.log (array) // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log (popped) // 10


// remove the first element 
// array.shift ()
const rm = array.shift () // return removed element
console.log (array) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log (rm) // 0

// get index of indicated element
// array.indexOf (<element>)
const arr = ['fruit', 'mountain', 'sea']
const index = arr.indexOf ('sea') // return the index of element, return -1 if not found
console.log (index) // 2


// check if an array include indicated element
// array.includes (<element>)
const isFound = arr.includes ('sea') // return true or false 
console.log (isFound) // true



// object
// In JavaScript, an object is a collection of related data and functionalities. 
// It is composed of key-value pairs, where each key (also known as a property name) 
// is a string (or symbol) that identifies a property, and each value can be of any 
// data type, including numbers, strings, arrays, functions, or even other objects.

// Properties: These are values associated with an object. 
//     Properties can hold any type of data, such as strings, 
//     numbers, arrays, or other objects.
// Methods: These are functions stored as properties. 
//     They provide functionalities related to the object

const objectPattern = {
    name: "mnhtn.dev", // property
    age: 18, // property
    university: 'HCMUIT - VNU', // property
    field: ['software engineer', 'back-end developer'], // property

    getInfor: function () {
        return `my information: ${this.name}
            i am ${this.age} year olds
            my university is: ${this.university}`
    }
}

const getUni = () => {
    return 'university'
}

// to call the method of an object
console.log (objectPattern.getInfor ())
console.log (objectPattern['getInfor']())

// only pass (), now it mean call the function
// for example:
// object.method -> return the whole function (its content)
// object.method () -> calling the function and returning result

console.log (objectPattern.getInfor) //[Function: getInfor]
console.log (objectPattern.getInfor ()) // my information: mnhtn.dev
                                        //           i am 18 year olds
                                        //           my university is: HCMUIT - VNU  


// to retrieve, access data from object, there are two ways
// using dot notation
// objectName.objectProperty
const objectName = objectPattern.name
console.log (objectName)

// using bracket notation
// objectName['objectProperty']
const objectAge = objectPattern['age']
console.log (objectAge)

// the difference betweem dot notation and bracket notation is
// bracket notation can contain an expression, statement in itseft
const objectUniversity = objectPattern[getUni ()] // statement
const objectField = objectPattern['fie' + 'ld'] // expression
console.log (objectUniversity)
console.log (objectField)

// both ways will return the undefined if not found any indicated property
// to modify the property, only get access to this property and change the content of it
objectPattern.age = 19
objectPattern['name'] = 'MNHTN.DEV'
console.log (objectPattern)


// this keyword
// In JavaScript, the this keyword is used to refer to the current 
// execution context. Its value depends on how and where it is used:

// 1. Inside an Object Method
// When used inside an object method, this refers to the object that the 
// method is a part of.
const person = {
    name: "Alice",
    greet: function () {
      console.log("Hello, " + this.name); // 'this' refers to the 'person' object
    },
  };
  
  person.greet(); // Output: Hello, Alice
  

//   2. In a Regular Function
// When used inside a regular function (not an arrow function), this refers to 
// the global object (window in browsers or global in Node.js). If in strict mode 
// ('use strict';), this will be undefined.
function showThis() {
    console.log(this); // In non-strict mode, 'this' is the global object; 
                        // in strict mode, 'this' is undefined
  }
  
  showThis();


//   3. In an Arrow Function
//   Arrow functions do not have their own this context. Instead, 
//   they inherit this from the surrounding lexical context.
const personinfor = {
    name: "Alice",
    greet: function () {
      const inner = () => {
        console.log("Hello, " + this.name); // 'this' is inherited from the 
                                            //outer function ('greet')
      };
      inner();
    },
  };
  
  personinfor.greet(); // Output: Hello, Alice
  
//   4. When Used Alone
// When this is used outside of any function or method (in global scope), 
// it refers to the global object.
console.log(this); // 'this' refers to the global object (window in browsers)


// 5. With call, apply, and bind
// The call(), apply(), and bind() methods can be used to explicitly set the value 
// of this for a function.
function sayHello() {
    console.log("Hello, " + this.name);
  }
  
  const person2 = { name: "Alice" };
  
  sayHello.call(person2); // Output: Hello, Alice
  

//   6. In a Class Constructor
// Inside a class constructor, this refers to the instance of the class.

class Person {
    constructor(name) {
      this.name = name;
    }
    greet() {
      console.log("Hello, " + this.name);
    }
  }
  
  const person3 = new Person("Alice");
  person3.greet(); // Output: Hello, Alice
  

  const MarkMiller = {
    fullname: 'Mark Miller', 
    mass: 78, 
    height: 1.69,

    calcBMI: function () {
        this.BMI = this.mass / (this.height ** 2)
    }
  }

  const JohnSmith = {
    fullname: 'John Smith', 
    mass: 92, 
    height: 1.95,

    calcBMI: function () { this.BMI = this.mass / (this.height ** 2)}

  }

  const gethigher = (obj1, obj2) => {
    const getName = (obj) => {
        return obj.fullname.substring (0, obj.fullname.indexOf(' ') + 1)
    }
    obj1.calcBMI ()
    obj2.calcBMI ()
    if (obj1.BMI > obj2.BMI)
        return `${getName (obj1)}'s BMI (${obj1.BMI}) is higher than ${getName (obj2)}'s BMI`
    else if (obj2.BMI > obj1.BMI) 
        return `${getName (obj2)}'s BMI (${obj1.BMI}) is higher than ${getName (obj1)}'s BMI`
    else 
        return `${getName(obj1)} equal to ${getName (obj2)}`
  }


  console.log (MarkMiller.BMI, JohnSmith.BMI)


// control structure 
// 1 iteration for loop
// for (initalization; condition, step)

for (let i = 0; i < 10; i++) {
    console.log (i + " " + '🎶😢💖😜🤣😁😀')
}

// break and continuing (countinue): usage
// break is used to exit and stop the loop if reach the special condition
// for example, stop if x reach 5
for (let i = 0; i < 10; ++i) {
    console.log (i+ " ❤️")
    if (i === 5) break
}
// 0 ❤️
// 1 ❤️
// 2 ❤️
// 3 ❤️
// 4 ❤️
// 5 ❤️ -> not move to 6

// continue is used to ignored current action and move to the next iteration
for (let i = 0; i < 10; ++ i) {
    if (i === 5) continue
    console.log ( i + " 💖")
}

// 0 💖
// 1 💖
// 2 💖
// 3 💖
// 4 💖
// 6 💖
// 7 💖
// 8 💖
// 9 💖 -> ignore 5 

// 2. while Loop
// The while loop executes a block of code as long as the specified condition is true.
// condition: The loop will continue to run as long as this condition is true.

// while (condition) {
//     // code to be executed
//   }
  
let i = 0;
while (i < 5) {
  console.log(i); // Output: 0, 1, 2, 3, 4
  i++;
}

// 3. do...while Loop
// The do...while loop is similar to the while loop, but it executes the block of 
// code at least once before checking the condition.

// do {
//     // code to be executed
// } while (condition);
  
let j = 0;
do {
  console.log(j); // Output: 0, 1, 2, 3, 4
  j++;
} while (j < 5);

// 4. for...of Loop
// The for...of loop is used to iterate over iterable objects like 
// arrays, strings, Map, Set, etc. It loops through the values of an iterable.
// iterable: The object to be iterated over.

// for (const element of iterable) {
//     // code to be executed
// }


const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
  console.log(fruit); // Output: "apple", "banana", "cherry"
}

// 5. for...in Loop
// The for...in loop is used to iterate over the enumerable properties of an object.

// for (const key in object) {
//     // code to be executed
// }

// object: The object whose properties are to be iterated over.

const persons = { name: "Alice", age: 25, city: "New York" };
for (const key in persons) {
  console.log(`${key}: ${persons[key]}`);
  // Output:
  // "name: Alice"
  // "age: 25"
  // "city: New York"
}

// 6. forEach Loop
// forEach is a method available on arrays. It executes a provided 
// function once for each array element.

// array.forEach((element, index, array) => {
//     // code to be executed
// });

const numbers = [1, 2, 3, 4, 5];
numbers.forEach((num) => {
  console.log(num); // Output: 1, 2, 3, 4, 5
});

// When to Use Each Loop
//     for loop: Use when you know the exact number of iterations, or need to manipulate the loop counter explicitly.
//     while loop: Use when the number of iterations is unknown and depends on a condition.
//     do...while loop: Use when you want to execute the code block at least once, regardless of the condition.
//     for...of loop: Use when iterating over the values of an iterable like an array or string.
//     for...in loop: Use when iterating over the properties of an object.
//     forEach loop: Use when iterating over an array and want to execute a function on each element.


for (let i = 0; i < 3; ++i) {
    for (let j = 0; j < 15; ++j){
        process.stdout.write("💖")
    }
    console.log ()
}


const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const tips = []
const totals = []

const callTips = (bill) => {
  return bill >= 50 && bill <= 300? bill * 0.15 : bill * 0.2
}

for (let i = 0; i < bills.length; ++i) {
  const tip = callTips (bills[i])
  totals.push (tip + bills[0])
  tips.push (tip)
}

console.log (totals)

const thermometerDislay = (array) => {
  let strings = ''
  for (let i = 0; i < array.length; ++i) {
      strings += `${array[i]}°C in ${i+1} days...`
  }
  return strings
}

console.log (thermometerDislay ([17, 21, 23]))































































