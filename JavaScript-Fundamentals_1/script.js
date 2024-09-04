// values and variables 
// values is a piece of information that is stored in variable

// naming convention

// only start with: letter, underscore or dollar sign
// variable name must not contain special sign, do not start with number or other
// sign except from dollar, and not use the variables name like to reserved words

// example
const varName = 'var' // invalid to use const var = 'var' because var is a key word
const $varName = 'var'
const _varName = 'var'

// camelCase notation
const myCurrentCode = 'console'
// snake_case notaion
const my_current_code = 'console'


//  DATA TYPES
// primitive data types - value
// 1 number - floating number -> used for decimals and integer
let age = 20

// 2 string - sequence of characters -> used for text
let myName = 'mnhtn.dev' // using single quote
let myName2 = "mnhtn.dev" // using double quote
let myName3 = `mnhtn.dev` // using backticks, also known as template literal

// 3 boolean - logical type that can only be true or false -> for making decision
let isFullAge = true
let isEnough = false

// 4 undefined - value taken by variable that is not yet defined (empty value)
let child = undefined// child is an empty value now, so it has undefined data type

// 5 null - also mean empty value/ not existed value
let parent = null

// 6 symbol (ES5 - ECMAScript2015) - value is unique and can not be changed (use const instead)
let symVar = Symbol ("key is not be changed by anything")

// 7 BigInt (ES20 - ECMAScript2020) - larger integers than the number type can hold
let bigNumber = BigInt (3828482884328432898283828323989)

// JS has dynamic typing: we do not have to manually define the data type of value
// stored in a variable. Instead, data types are determined automatically. It also meas
// we only use const, var, let for declaring variale, the rest thing is the reponsibility of
// JS

// to check data type, use typeof -> this function return string value
console.log (typeof (child))

if (typeof (child) === 'undefined') {
    console.log ("exactly")
}

// object data type
let studentInformation = {
    name: "mnhtn.dev",
    age: 20,
    degree: 'bachelor'
}

console.log (typeof (studentInformation)) // object
console.log (studentInformation.name) // mnhtn.dev 

// except from symbol and constant, all of data type can be re-assignable andcan change
// the data type of one variable easily
let name = 'mnhtn.dev'
console.log (typeof (name)) // string

name = 20
console.log (typeof (name)) // number

// remember that null has data type is OBJECT
console.log (typeof (null)) // object


// let, const and var
// using const to define constant, regular variable can be declared by let (block scope)
// and var (global scope)
var myFullName
let myAge
const myInstitution = 'HCMUIT' // can not be changed


// basic math operator
// plus: +
const plusCal = 10 + 10
// minus: -
const minusCal = 10 - 1
// multiplication: *
const multiCal = 10 * 10
// division: /
const divCal = 100 / 3
// modulo: % 
const moduCal = 100 % 3
// power: ** (a ** b = a * a * a * ... * a * a (b times))
const expCal = 2 ** 3 

console.log (plusCal, minusCal, multiCal, divCal, moduCal, expCal)

// basic assignment operator
let x = 10
x += 10
x -= 10
x *= 10
x /= 10
x **= 19
x %= 10
x++
++x
x--
--x

// comparision operator
// ==, >, <, !=, <=, >=, ===, !==
// return true (1) or false (0)

// difference between == and ===
// == only compare value in relative, such as
const isEqual = 5 == '5'
console.log (isEqual) // true

// === strict equality operator: compare both data type (prioritized) and value in absolute
const isEqual2 = 5 === '5'
console.log (isEqual2) // false


// Operator precedence (order excution of operator)
console.log (2000-1 < 2000-3)
// readmore in https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence
//document.open ('https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence')



// strings and template literals
// string can be contained in " " or ' '
const string1 = 'i am mnhtn.dev'
const string2 = "i'am " + "mnhtn.dev"
console.log (string1, string2)

// template literals are the string contains variable that you can change the 
// pattern easily
// it is rounded by backtick sign
let myAgeDev = 19
const pattern = `i am mnhtn.dev, i am ${myAgeDev} now`
console.log (pattern) //i am mnhtn.dev, i am 19 now

// to add blank line, use \n\

const ownname = ['mnhtn.dev']
const address = ['Linh Trung wards', 'Thu Duc city', 'Ho Chi Minh City']

const templiteral = `i am ${[...ownname]}, \n\ 
i am ${[...address]} now`

console.log (templiteral)


// taking decisions: if ... else ... statements 

let condition = true
let condition2 = false
if (condition) {
    console.log ('true 🤣') // adding emoij: window + .
}else {
    console.log ('false')
}

if (condition) {
    console.log (1)
}else if (condition2) {
    console.log (2)
}else {
    console.log (3)
}

// switch ... case 
let variable = 2;
switch (variable) {
    case (1):  
        console.log (1);
        break;
    case (2):
        console.log (2);
        break;
    case (3):
    case (4):
        console.log ("new number");
        break;
    default:
        console.log ('nothing');
        break;
}

// type conversion and coercion
const inputYear = '2000'
console.log (typeof (inputYear))
// change inputYear into number

// string -> number
console.log (typeof (Number (inputYear)))
console.log (typeof (parseInt (inputYear)))
console.log (typeof (parseFloat (inputYear)))

// number -> string
const number = 1000
console.log (typeof (String (number)))

// to boolean
console.log (typeof (Boolean (number)))

// to object
console.log (typeof (Object (number)))

// there are no ways to null or undefined

// both type of var and typeof (var) -> return same thing
// operators are  ussally wrriten in lowercase 
// available functions are ussally defined with capitalized form 

console.log ('23' + 23) // 2323
console.log (23 + "23") // 2323
console.log ('23' - 3) // 20
console.log ('24' / 2) // 12
console.log ('24' * 2) // 48
console.log ('24' / '2') // 12
console.log ('24' ** '2') // 576

// truthy and falsy values
// 5 falsy values are 0, "", null, undefined and NaN
// truthy values are string not empty, not zero number, object (can be empty or not)


// boolean logic and logical operators
let a = true
let b = false
// and
// return true only if both a and b are true
if (a && b) {
    // do st here
}

// or
// return true either a or b is true, return false if both a and b are false
if (a || b) {
    // do st here
}

// not
// return the reflect value of a 
if (! a) {
    // do st here 
}

const dolphinsAverage = 96.33333333333333333333
console.log (typeof (dolphinsAverage.toFixed (2))) // string
// tofix (<amount>) method return a string

// expression is a piece of code that procedures a value, such as 2 + 4
// statement is a piece of code that performs an action, it likes a sentence


// the conditional (ternary) operator
// condition ? statements if true : statements if false
const ownAge = 19 
ownAge >= 18 ? console.log ("you are an adult 🤣") : console.log ('you are a teenager 😊')







const myString = `learning javascript`;

const sub1 = myString.substring (0, 8)
const sub2 = myString.slice (0, 8)

console.log (sub1, sub2) // learning learning


// Lower case all character in string
let sentence = `It's always sunny in Sunnyvale.`
console.log(sentence.toLowerCase()) // 'it's always sunny in sunnyvale.'
console.log(sentence) // 'It's always sunny in Sunnyvale.', un-modified

// Upper case all character in string
console.log(sentence.toUpperCase()) // 'IT'S ALWAYS SUNNY IN SUNNYVALE.'
console.log(sentence) // 'It's always sunny in Sunnyvale.', un-modified