'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex - 1], this.mainMenu[mainIndex - 1]];
  },
  orderDelivery: function ({
    starterIndex = 0,
    mainIndex = 0,
    time = '00:00',
    address = 'main street index',
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// The Spread Operator (...)
const arr = [1, 2, 3];
const newArr = [...arr, 4, 5];
console.log(arr);
console.log(newArr);

// Copy array
const newMenuCopy = [...restaurant.mainMenu];
console.log(newMenuCopy);

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

const ingredients = [
  prompt(`Lets make pasta! Ingredient 1`),
  prompt(`Ingredient 2`),
  prompt(`Ingredient 3`),
];
console.log(ingredients);

restaurant.orderPasta(...ingredients);

/*
restaurant.orderDelivery({
  time: '20:30',
  address: 'Jouvence, Yaounde',
  mainIndex: 1,
  starterIndex: 3,
});


// Objects Destructuring
const { name, openingHours, categories } = restaurant;
console.log(
  'Destructuring using the property names',
  name,
  openingHours,
  categories
);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log('Destructuring using custom names', restaurantName, hours, tags);

// default values
const { menu = [], starterMenu: starters } = restaurant;
console.log(menu, starters);

// mutating variables
let a = 211;
let b = 301;
const Obj = { a: 1, b: 3, c: 3 };
({ a, b } = Obj);
console.log(a, b);

// Nested objects
const {
  fri: { open, close },
  sat,
} = openingHours;
console.log(open, close, sat);

// Array Destructuring
/*
const [starter, main] = restaurant.order(3, 1);
console.log(starter, main);

// array destructuring
const array = [2, 3, 4];
const [x, y, z] = array;
console.log(x, y, z);

// destructuring the first and second elements of the restaurant.categories array
let [first, , secondary] = restaurant.categories;
console.log(first, secondary);

// swapping variables traditionally
const temp = first;
first = secondary;
secondary = temp;
console.log(first, secondary);

// swapping variables using array destructuring
[first, secondary] = [secondary, first];
console.log(first, secondary);
*/
