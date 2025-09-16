'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');

// function to open modal
const closeModal = () => {
  overlay.classList.add('hidden');
  modal.classList.add('hidden');
};

// function to close modal
const openModal = () => {
  overlay.classList.remove('hidden');
  modal.classList.remove('hidden');
};

// handle show modal click event
btnsOpenModal.forEach((button) => {
  button.addEventListener('click', openModal);
});

// handle close model event
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// handle keypress event
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
