'use strict';

// scoping in practice
function calcAge(birthYear) {
  const age = 2025 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age} born in ${birthYear}`;
    console.log(output);
    if (birthYear >= 1981 && birthYear <= 1996) {
      const str = `Oh, and you're a millennial ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      output = 'New Output!';
      console.log(output);
      // const result = add(2, 3);
      // console.log(result);
    }
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Chu';
// console.log(calcAge(2003));
calcAge(1983);
