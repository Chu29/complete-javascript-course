'use strict';

const player0Elt = document.querySelector('.player--0');
const player1Elt = document.querySelector('.player--1');
const btnRollDice = document.querySelector('.btn--roll');
const btnNewGame = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const score0Elt = document.querySelector('#score--0');
const current0El = document.querySelector('#current--0');
const score1Elt = document.querySelector('#score--1');
const diceElt = document.querySelector('.dice');

let scores = [0, 0],
  currentScore = 0,
  activePlayer = 0,
  playing = true;

// starting a new game
const newGame = () => {
  // starting conditions
  score0Elt.textContent = 0;
  score1Elt.textContent = 0;
  diceElt.classList.add('hidden');

  playing = true;
  activePlayer = 0;
  currentScore = 0;
  scores = [0, 0];
  score0Elt.textContent = 0;
  score1Elt.textContent = 0;
  diceElt.classList.add('hidden');
  player0Elt.classList.add('player--active');
  player0Elt.classList.remove('player--winner');
  player1Elt.classList.remove('player--winner');
  player1Elt.classList.remove('player--active');
  document.getElementById(`current--0`).textContent = 0;
  document.getElementById(`current--1`).textContent = 0;
};
newGame();
btnNewGame.addEventListener('click', newGame);

// switch current player
const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0Elt.classList.toggle('player--active');
  player1Elt.classList.toggle('player--active');
};

//simulate dice roll
const diceRoll = () => {
  if (playing) {
    //generate random dice roll
    const dice = Math.trunc(Math.random() * 6 + 1);
    diceElt.classList.remove('hidden');

    // display the dice
    diceElt.src = `dice-${dice}.png`;

    // check for roll === 1, then switch to other player
    if (dice !== 1) {
      // add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // switch the player
      switchPlayer();
    }
  }
};
btnRollDice.addEventListener('click', diceRoll);

// add the current score to the total score
const holdCurrentScore = () => {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // check if player's score is >= 100. Finish the game
    if (scores[activePlayer] >= 100) {
      playing = false;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = `Winner`;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceElt.classList.add('hidden');
    } else {
      // call the switch player function which also resets the current score upon switch
      switchPlayer();
    }
  }
};
btnHold.addEventListener('click', holdCurrentScore);
