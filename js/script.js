// Menu
const menu = document.querySelector(".intro__nav")
const menuBtn = document.querySelector(".header__menu")

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("intro__nav-active")
    menuBtn.classList.toggle("header__menu-active")
})