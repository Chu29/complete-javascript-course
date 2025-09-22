// Importing Module
// import { addToCart, totalPrice, totalQuantity } from './shoppingCard.js';
// console.log('Importing Module');

// addToCart('Milk', 2);
// console.log(totalPrice, totalQuantity);

// top level awai
const response = await fetch('https://jsonplaceholder.typicode.com/posts');
const data = await response.json();
console.log(data);

const getLastPost = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = await getLastPost();
console.log(lastPost);
