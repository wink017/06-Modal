'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClosedModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const OpenModal = function () {
  console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const ClosedModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', OpenModal);

btnClosedModal.addEventListener('click', ClosedModal);
overlay.addEventListener('click', ClosedModal);
//reacting to a click in the button
modal.classList.remove('hidden');
overlay.classList.remove('hidden');
//responding to keyboard events -- known as global event listed on the whole document

document.addEventListener('keydown', function (e) {
  //console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closedModal();
  }
});
