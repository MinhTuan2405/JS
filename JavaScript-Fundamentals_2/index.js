
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

