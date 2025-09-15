'use strict';

const msg = document.querySelector('.message').textContent;
console.log(msg);

document.querySelector('.message').textContent = '🎉 Correct Number';

document.querySelector('.number').textContent = 30;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 13;
console.log(document.querySelector('.guess').value);
