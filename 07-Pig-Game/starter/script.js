'use strict';

const player0 = document.querySelector('.player--0');
const btnRollDice = document.querySelector('.btn--roll');
const btnNewGame = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const score0Elt = document.querySelector('#score--0');
const current0El = document.querySelector('#current--0');
const score1Elt = document.querySelector('#score--1');
const diceElt = document.querySelector('.dice');

// starting conditions
score0Elt.textContent = 0;
score1Elt.textContent = 0;
diceElt.classList.add('hidden');

let currentScore = 0;

//simulate dice roll
const diceRoll = () => {
  //generate random dice roll
  const dice = Math.trunc(Math.random() * 6 + 1);
  diceElt.classList.remove('hidden');

  // display the dice
  diceElt.src = `dice-${dice}.png`;
  console.log(dice);

  // check for roll === 1, then switch to other player
  if (dice !== 1) {
    // add dice to current score
    currentScore += dice;
    current0El.textContent = currentScore;
  } else {
    current0El.textContent = 0;
    console.log('Current Score: ', (currentScore = 0));
  }
};

btnRollDice.addEventListener('click', diceRoll);
