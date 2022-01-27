//start
(function () {
 const start = () => {
  modalMain();
  activeMenu();
  modalSec();
 }

 /**Modal backdrop */
 function modalMain() {
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
 }
 /**Modal backdrop */
 function activeMenu() {
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
 }
 //Portfolio section
 function modalSec() {

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
 }
 //scroll reveal default
 function scrollReveal() {
  return ScrollReveal({
   reset: true,
   distance: '20px',
   duration: 1500,
   delay: 100,
  })
 }
 //scroll reveal options and target
 scrollReveal().reveal('.home .info h2, .section-title-01, .section-title-02, .description h3, .contact-left', { delay: 100, origin: 'left' });
 scrollReveal().reveal('.home .info h3,.home .info p, .description h4, .services-description, .contact-right', { delay: 200, origin: 'right' });
 scrollReveal().reveal('.description p, .skills-description', { delay: 300, origin: 'bottom' });
 scrollReveal().reveal('.media-icons i, .professional-list .list-item, .education ul li, .service-list li', { delay: 300, origin: 'left', interval: 50 });
 scrollReveal().reveal('.home-img, .btn, .get-in-touch .container', { delay: 200, origin: 'bottom' });

 //start
 start();
 //start end
})()
