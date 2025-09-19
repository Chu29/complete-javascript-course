'use strict';

// scoping in practice
// function calcAge(birthYear) {
//   const age = 2025 - birthYear;

//   function printAge() {
//     let output = `${firstName}, you are ${age} born in ${birthYear}`;
//     console.log(output);
//     if (birthYear >= 1981 && birthYear <= 1996) {
//       const str = `Oh, and you're a millennial ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }

//       output = 'New Output!';
//       console.log(output);
//     }
//     console.log(output);
//   }
//   printAge();
//   return age;
// }

// const firstName = 'Chu';
// calcAge(1983);

// the 'this' keyword

console.log(this);

// this with function expression
function calcAge(birthYear) {
  console.log(2025 - birthYear);
  console.log(this);
}

calcAge(2003);
