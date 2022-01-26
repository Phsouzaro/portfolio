const serviceModals = document.querySelectorAll('.service-modal')
const learMoreBtns = document.querySelectorAll('.learn-more-btn')
const modalCloseBtns = document.querySelectorAll('.modal-close-btn')

let modal = (modalClick) => {
 serviceModals[modalClick].classList.add('active')
}

learMoreBtns.forEach((learMoreBtn, i) => {
 learMoreBtn.addEventListener('click', () => {
  modal(i);
 })
})
modalCloseBtns.forEach((modalCloseBtn) => {
 modalCloseBtn.addEventListener('click', () => {
  serviceModals.forEach((modalView) => {
   modalView.classList.remove('active')
  })
 })
})


//Portfolio section

const portfolioModals = document.querySelectorAll('.portfolio-model')
const imgCards = document.querySelectorAll('.overlay')
const portfolioCloseBtns = document.querySelectorAll('.portfolio-close-btn')

let portfolioModal = (modalClick) => {
 portfolioModals[modalClick].classList.add('active')
}

imgCards.forEach((imgCard, i) => {
 imgCard.addEventListener('click', () => {
  portfolioModal(i);
 })
})
portfolioCloseBtns.forEach((portfolioCloseBtn) => {
 portfolioCloseBtn.addEventListener('click', () => {
  portfolioModals.forEach((portfolioModalView) => {
   portfolioModalView.classList.remove('active')
  })
 })
})

