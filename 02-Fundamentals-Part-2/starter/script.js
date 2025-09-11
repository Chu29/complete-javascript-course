// "use strict";
// function logger() {
//   console.log("Hello, I'm Chu!");
// }

// logger();

// // function fruitProcessor(apples, oranges) {
// //   console.log(apples, oranges);
// //   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;

// //   return juice;
// // }

// // const appleJuice = fruitProcessor(5, 0);
// // console.log(appleJuice);

// // const appleOrangeJuice = fruitProcessor(3, 2);
// // console.log(appleOrangeJuice);

// /**
//  * Function Declaration VS Function Expression
//  */

// // function declaration
// function calcAge(birthYear) {
//   return 2025 - birthYear;
// }

// const age = calcAge(2003);
// console.log(age);

// // function expression which returns an anonymous function
// const calcAge1 = function (birthYear) {
//   return 2025 - birthYear;
// };
// const age1 = calcAge1(2004);
// console.log(age1);

// // Arrow Function
// const calcAge3 = (birthYear) => {
//   return 2025 - birthYear;
// };

// const age2 = calcAge3(2003);
// console.log(age2);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2025 - birthYear;
//   const retirement = 60 - age;
//   return `${firstName} has ${retirement} years to retire`;
// };

// console.log(yearsUntilRetirement(2003, "Chu"));

// // Function calling another function

// const cutFruitPieces = (fruit) => {
//   return fruit * 4;
// };

// const fruitProcessor = (apples, oranges) => {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   console.log(apples, oranges);
//   const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;

//   return juice;
// };

// console.log(fruitProcessor(2, 3));

//  Intro to Arrays

const friends = ["Peter", "Brian", "Meg"];
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);
