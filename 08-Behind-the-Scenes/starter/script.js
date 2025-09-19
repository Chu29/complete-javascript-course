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

console.log('This in the global scope: ', this);

// this with function expression
const calcAge = function (birthYear) {
  console.log(2025 - birthYear);
  console.log('This in function expression: ', this);
};

calcAge(2003);

// this with arrow functions
const calcAgeArrow = birthYear => {
  console.log(2025 - birthYear);
  console.log('This in arrow functions:', this);
};

calcAgeArrow(2014);

// this with methods
const jonas = {
  name: 'Chu',
  birthYear: 2003,
  calcAge: function () {
    console.log(this);
    console.log(2025 - this.birthYear);
  },
};

const matilda = {
  birthYear: 2014,
};

matilda.calcAge = jonas.calcAge;

matilda.calcAge();
