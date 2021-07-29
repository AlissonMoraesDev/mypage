// Exibir menu
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId);

  if (toggle && navId) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show')
    })
  }
}

showMenu('nav-toggle', 'nav-menu')

// Ativar e remover o menu
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
  // Link ativo
  navLink.forEach(n => n.classList.remove('active'))
  this.classList.add('active')

  // Remove o menu mobile
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')

}

navLink.forEach(n => n.addEventListener('click', linkAction))

const btnEnviar = document.getElementById('btnEnviar')

btnEnviar.addEventListener('click', () => {
  alert('Envio de e-mail em processo de implementação.')
  window.location.href = "https://alissonmoraesdev.netlify.app/"
})
// Scroll reveal animation

const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
})

sr.reveal('.home__title', {})
sr.reveal('.button', {delay: 200})
sr.reveal('.home__img', {delay: 400})
sr.reveal('.home__social-icon', {interval: 200})

// Scroll About 

sr.reveal('.about__img', {})
sr.reveal('.about__subtitle', {delay: 200})
sr.reveal('.about__text', {delay: 400})

// Scroll Contact

sr.reveal('.contact', {delay: 200})
sr.reveal('.contact__form', {delay: 400})