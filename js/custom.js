/** INSERT CUSTOM JS HERE **/
export default function() {


const refs={
openModalBtn: document.querySelector('[data-modal-open]'),
closeModalBtn: document.querySelector('[data-modal-close]'),
modalTeamBackdrop: document.querySelector('[data-modal]'),
}

refs.openModalBtn.addEventListener('click', openModalTeam);
refs.closeModalBtn.addEventListener('click', closeModalTeam);
refs.modalTeamBackdrop.addEventListener('click', closeModalTeamOverlay);

function openModalTeam() {
  window.addEventListener('keydown', closeModalTeamESC);
  document.body.classList.toggle('modal-open');
  refs.modalTeamBackdrop.classList.remove('is-close');
}

function closeModalTeamESC(event) {
  if (event.code === 'Escape') {
    closeModalTeam();
  }
}

function closeModalTeamOverlay(event) {
  if (event.target === event.currentTarget) {
    closeModalTeam();
  }
}

function closeModalTeam() {
  window.removeEventListener('keydown', closeModalTeamESC);
  document.body.classList.toggle('modal-open');
  refs.modalTeamBackdrop.classList.add('is-close');
}}