'use strict';
/*
const msg = document.querySelector('.message').textContent;
console.log(msg);

document.querySelector('.message').textContent = '🎉 Correct Number';

document.querySelector('.number').textContent = 30;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 13;
console.log(document.querySelector('.guess').value);
*/

// generate the number
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;

// click event to check the guess
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No Number!';

    // when player wins the game
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = '🎉 Correct Number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // when guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💣️ You lost the game';
      document.querySelector('.score').textContent = 0;
    }

    // when guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💣️ You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// resetting the game
document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
