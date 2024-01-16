/*
    Resources:
    - freeCodeCamp on Map, Reduce and Filter: https://www.freecodecamp.org/news/javascript-map-reduce-and-filter-explained-with-examples/
*/
// TODO 5.1 Use the map method to create a new array that contains the squares of all numbers in the array
const numbers = [1, 2, 3, 4, 5];
// Your code here
const squares = numbers.map(number => number ** 2);
console.log(squares);
// TODO 5.2 Use the filter method to create a new array that contains only the even numbers in the array
// Your code here
const even = numbers.filter(item => item % 2 === 0);
console.log(even);
// TODO 5.3 Use the reduce method to find the sum of all numbers in the array
// Your code here
const sum = numbers.reduce((accumulator, number) => accumulator + number, 0);
console.log(sum);
// TODO 5.4 Use the map method to convert all elements in the array to uppercase
const words = ['hello', 'world'];
// Your code here
const upper = words.map(word => word.toUpperCase());
console.log(upper);
// TODO 5.5 Use the filter method to create a new array that contains only the words with more than four letters in the array
// Your code here
const fourletters = words.filter(word => word.length > 4);
console.log(fourletters);
// TODO 5.6 Use the reduce method to concatenate all words in the array into a single string
// Your code here
//const combined = words.reduce()
// Checkpoint 5.1 Summarize what map, filter, and reduce do
// Answer: 