
const menuIcon = document.querySelector('.menu__icon')
const menu = document.querySelector('.menu__list')

if (menuIcon && menu) {
    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('active')
        menu.classList.toggle('active')
    })
}