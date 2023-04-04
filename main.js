const navToggle = document.querySelector(".button_mobile")
const navMenu = document.querySelector(".menu")

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("deploy_menu_visible")
})