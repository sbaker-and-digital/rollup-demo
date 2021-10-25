// src/main.js
import answer from 'the-answer';

const myObject = null;

const arrowFunction = () => console.log("Hey!");
arrowFunction();

console.log(`the answer is ${answer}`);
console.log(`es6 test with optional chaining: ${myObject?.foo?.bar}`);
