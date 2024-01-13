/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
*/

// TODO 1.1 Use the var keyword to define a variable. Log the variable to the console. Now try moving the variable declaration after you log the variable.
// Your code here
console.log(carName);
var carName = "Volvo";
// TODO 1.2 Use the let keyword to define a variable.
// Your code here
let x = 10;
console.log(x);
// TODO 1.3 Use the const keyword to define a variable. Try reassigning the value of the variable. What happens?
// Your code here
const alphabet = "abcdefghijklmnopqrstuvwxyz";
//alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; won't work
console.log(alphabet);
// Checkpoint 1.1 What is the difference between var, let, and const?
// Answer: var can be reassigned and can be used before declaration, let cannot be reassigned and cannot be used before declaration, const cannot be reassigned and redeclared.

// TODO 1.4 Try out the different arithmetic operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators
// Your code here
x += 5;
let y = 10;
y /= 2;
console.log(x);
console.log(y);
// Checkpoint 1.2 What operators did you use?
// Answer: Addition and Division
// Your code here
// + for Addition and / for Division
// TODO 1.5 Try out the different string operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#string_operators
// Your code here
console.log("Hello" + "World");
let text = "Hello";
text += " World 2";
console.log(text);
// Checkpoint 1.3 What operators did you use?
// Answer: plus sign for concatenation  

// TODO 1.6 Try out the different logical operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators
// Your code here
let a = 5;
let b = 10;
const result = a == 5 && b == 10;
const result2 = a == 4 || b == 11;
console.log(result);
console.log(result2);
// Checkpoint 1.4 What operators did you use?
// Answer: logical AND and OR operators


// TODO 1.7 Try out the different relational operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#relational_operators


// Checkpoint 1.5 What does [] == false evaluate to? Why does that happen? Research why
// Answer: 
// Your code here