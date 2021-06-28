// Menu
const menu = document.querySelector(".header__list")
const menuBtn = document.querySelector(".header__nav-burger")
const wrapper = document.querySelector('body')

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("header__list-open")
    menuBtn.classList.toggle("header__nav-burger-open")
    wrapper.classList.toggle("wrapper-off")
})