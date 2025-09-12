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

// const friends = ["Peter", "Brian", "Meg"];
// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// Basic array methods
// const friends = ["Peter", "Brian", "Meg"];
// //add elements
// friends.push("Carl"); // add Carl at end of array
// console.log(friends);
// friends.unshift("Olson");
// console.log(friends); // add Olson at start of array

// //remove elements
// friends.pop();
// console.log(friends);
// friends.shift();
// console.log(friends);

// console.log(friends.indexOf("Brian"));
// console.log(friends.includes("Brian"));

/**
 * Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

Your tasks:

Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

And now let's use arrays! So, create an array called bills containing the test data below.

Create an array called tips containing the tip value for each bill, calculated from the function you created before.

BONUS: Create an array totals containing the total values, so the bill + tip.

TEST DATA: 125, 555, and 44.
 */

// const calcTip = (bill) => {
//   let tip;
//   if (bill >= 50 && bill <= 300) {
//     tip = bill * (15 / 100);
//   } else {
//     tip = bill * (20 / 100);
//   }
//   return tip;
// };

// const bills = [125, 555, 44];

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// const total = [
//   bills[0] + calcTip(bills[0]),
//   bills[1] + calcTip(bills[1]),
//   bills[2] + calcTip(bills[2]),
// ];

// console.log(tips);
// console.log(total);

// Intro to Objects
// const chu = {
//   firstName: "Mueghe",
//   middleName: "Abuemkeze",
//   lastName: "Chu",
//   age: 20,
//   job: "teacher",
//   friends: ["Peter", "Brian", "Meg"],
// };

// console.log(chu.lastName); // Dot notation
// console.log(chu["lastName"]); // Bracket notation

// const interestedIn = prompt(
//   "What are you interested in knowing about Chu? Choose between firstName, middleName, lastName, age, job, friends"
// );

// if (chu[interestedIn]) {
//   console.log(chu[interestedIn]);
// } else {
//   console.log(
//     "Invalid! Choose between firstName, middleName, lastName, age, job, friends"
//   );
// }

// // adding props
// chu.location = "Cameroon";
// console.log(chu);

// const chu = {
//   firstName: "Mueghe",
//   middleName: "Abuemkeze",
//   lastName: "Chu",
//   age: 20,
//   birthYear: 2003,
//   job: "teacher",
//   friends: ["Peter", "Brian", "Meg"],
//   hasDriversLicense: false,
//   calcAge: function () {
//     return 2025 - this.birthYear;
//   },
// };

// console.log(chu.calcAge());

/**
 * The FOR LOOP
 */

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }

// const jonasArray = [
//   "Jonas",
//   "Olson",
//   2037 - 1991,
//   "teacher",
//   ["Micheal", "Peter", "Steven"],
//   true,
// ];

// const types = [];

// for (i = 0; i < jonasArray.length; i++) {
//   //Reading from the jonasArray
//   console.log(jonasArray[i], typeof jonasArray[i]);

//   // Filling the types array
//   types.push(typeof jonasArray[i]);
// }

// console.log(types);

// // continue and break

// console.log("--- ONLY STRINGS ---");
// for (i = 0; i < jonasArray.length; i++) {
//   if (typeof jonasArray[i] !== "string") continue;
//   console.log(jonasArray[i], typeof jonasArray[i]);
// }

// console.log("--- BREAK WITH NUMBER---");
// for (i = 0; i < jonasArray.length; i++) {
//   if (typeof jonasArray[i] === "number") break;
//   console.log(jonasArray[i], typeof jonasArray[i]);
// }

const jonasArray = [
  "Jonas",
  "Olson",
  2037 - 1991,
  "teacher",
  ["Micheal", "Peter", "Steven"],
  true,
];

//looping backwards
for (i = jonasArray.length - 1; i >= 0; i--) {
  console.log(i, jonasArray[i], typeof jonasArray[i]);
}

//nested loops
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`------- Starting Exercise${exercise}`);
  for (let session = 1; session < 6; session++) {
    console.log(`Session ${session} for Exercise ${exercise}`);
  }
}
