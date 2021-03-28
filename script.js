const btn = document.querySelector('.menu-btn')
const burger = document.querySelector('.menu-btn__burger')

btn.addEventListener('click', () => {
  burger.classList.toggle('burger-menu-active')
})
