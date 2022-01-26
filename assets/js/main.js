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


//Navigation menu items active on page scroll

window.addEventListener('scroll', () => {
 const sections = document.querySelectorAll('section')
 const scrollY = window.pageYOffset;

 sections.forEach(current => {
  let sectionHeight = current.offsetHeight;
  let sectionTop = current.offsetTop - 50;
  let id = current.getAttribute('id');
  const navItems = document.querySelector('.nav-items a[href*=' + id + ']')
  if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
   /*    navItems.classList.add('active'); */
  } else {

   /* navItems.classList.remove('active'); */

  }
 })
})

const menuBtn = document.querySelector('.nav-menu-btn')
const closeBtn = document.querySelector('.nav-close-btn')
const navigation = document.querySelector('.navigation')
const navItem = document.querySelectorAll('.nav-items a')

menuBtn.addEventListener('click', () => {
 navigation.classList.add('active')
})

closeBtn.addEventListener('click', () => {
 navigation.classList.remove('active')
})

navItem.forEach(current => {
 current.addEventListener('click', () => {
  navigation.classList.remove('active')
 })
})
