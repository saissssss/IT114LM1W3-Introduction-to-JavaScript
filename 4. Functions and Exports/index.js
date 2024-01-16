/*
    Resources:
    - MDN on Functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
    - JavaScript Tutorial on Functions: https://javascript.info/function-basics
    - freeCodeCamp on Functions: https://www.freecodecamp.org/news/what-is-a-function-javascript-function-examples/
*/

// Todo 4.1 Declare a function named 'greet' that takes one parameter 'name' and displays a greeting
// Then, Call the 'greet' function with your name as the argument
// Your code here
let name = "Allen";
function greet(name) {
  console.log(`Hello, ${name}!`);
}
greet(name);
// Checkpoint 4.1 What is the difference between a function declaration and a function expression?
// Answer: A function declaration is defined using the `function` keyword and gets hoisted, while a function expression is defined by assigning a function to a variable and is not hoisted.

// Todo 4.2 Declare a function expression named 'calculateArea' that takes the length and width of a rectangle and returns its area
// Then, Call the 'calculateArea' function with any length and width as arguments
// Your code here

function calculateArea(length, width) {
  return console.log(length * width);
}
calculateArea(4, 5);
// Checkpoint 4.2 What is a callback function? Provide an example.
// Answer: A callback function is a function passed as an argument to another function, which is then invoked inside the outer function, often used for asynchronous operations or event handling; for example:

function sing(callback) {
  console.log("la la la");
  if (callback) callback();
}

function meow() {
  console.log("meow meow");
}

sing(meow);
// Todo 4.3 Declare a higher-order function named 'modifyArray' that takes an array and a function as parameters. The function should modify each element in the array using the provided function and return the modified array.
// Then, Call the 'modifyArray' function with the 'numbers' array and a function that increments each number by 1
// Useful Tutorial: https://youtu.be/H4awPsyugS0?si=7wC1B7whXVkG8X5l
// Your code here
function modifyArray(array, callback) {
  const modifiedArray = array.map(callback);
  return modifiedArray;
}

// Call the 'modifyArray' function with the 'numbers' array and a function that increments each number by 1
const numbers = [1, 2, 3, 4, 5];
const incrementByOne = function (number) {
  return number + 1;
};
const modifiedNumbers = modifyArray(numbers, incrementByOne);
console.log("Modified array:", modifiedNumbers);
// Todo 4.4 See mathUtils.js for the instructions to create the add method and PI constant.
// Then, import and call the add method here and display the value of the PI constant
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
// Your code here
const mathUtils = require("./mathUtils");
console.log(mathUtils.add(1, 2));
console.log(mathUtils.PI);
// Todo 4.5 See isPalindrome.js for the instructions to create the isPalindrome method.
// Then, import and call the isPalindrome method here
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
// Your code here
const isPalindrome = require("./isPalindrome");
console.log(isPalindrome("racecar"));
console.log(isPalindrome("horse"));
// Checkpoint 4.3 What does the require function and module.exports variable do?
// Should we use it over the import and export keywords? Why? Research your answer.
// Answer: In Node.js, the `require` function is used to import modules, and the `module.exports` variable is used to define the exported API of a module. While CommonJS syntax (`require`/`module.exports`) is widely used in Node.js, for front-end development and in more modern environments, the `import` and `export` keywords from ECMAScript Modules (ES6+) are preferred due to their cleaner syntax, better static analysis, and native browser support. The choice between them depends on the environment and specific project requirements.
