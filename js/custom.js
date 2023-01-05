/** INSERT CUSTOM JS HERE **/
export default function() {


const refs={
openModalBtn: document.querySelector('[data-modal-open]'),
closeModalBtn: document.querySelector('[data-modal-close]'),
modalBackdrop: document.querySelector('[data-modal]'),
}

refs.openModalBtn.addEventListener('click', openModal);
refs.closeModalBtn.addEventListener('click', closeModal);
refs.modalBackdrop.addEventListener('click', closeModalOverlay);

function openModal() {
  window.addEventListener('keydown', closeModalESC);
  document.body.classList.toggle('modal-open');
  refs.modalBackdrop.classList.remove('is-close');
}

function closeModalESC(event) {
  if (event.code === 'Escape') {
    closeModal();
  }
}

function closeModalOverlay(event) {
  if (event.target === event.currentTarget) {
    closeModal();
  }
}

function closeModal() {
  window.removeEventListener('keydown', closeModalESC);
  document.body.classList.toggle('modal-open');
  refs.modalBackdrop.classList.add('is-close');
}}