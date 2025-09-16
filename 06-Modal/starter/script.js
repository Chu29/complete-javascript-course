'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');

// handle show modal click event
btnsOpenModal.forEach(button => {
  button.addEventListener('click', () => {
    overlay.classList.remove('hidden');
    modal.classList.remove('hidden');
  });
});

// handle close model event
btnCloseModal.addEventListener('click', () => {
  overlay.classList.add('hidden');
  modal.classList.add('hidden');
});
