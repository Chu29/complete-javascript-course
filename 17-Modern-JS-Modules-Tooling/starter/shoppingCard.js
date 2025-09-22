// Exporting module
console.log('Exporting Module');

const shippingCost = 10;
const cart = [];

// exporting a method
export const addToCart = (product, quantity) => {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 205;
const totalQuantity = 3;

export { totalPrice, totalQuantity };
