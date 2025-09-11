"use strict";
// function logger() {
//   console.log("Hello, I'm Chu!");
// }

// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;

//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(3, 2);
// console.log(appleOrangeJuice);

/**
 * Function Declaration VS Function Expression
 */

// function declaration
function calcAge(birthYear) {
  return 2025 - birthYear;
}

const age = calcAge(2003);
console.log(age);

// function expression which returns an anonymous function
const calcAge1 = function (birthYear) {
  return 2025 - birthYear;
};
const age1 = calcAge1(2004);
console.log(age1);
