const menu = document.getElementById("mobile-menu");
const navbar = document.querySelector(".navbar-menu");

menu.addEventListener("click", function() {
    menu.classList.toggle("is-active");
    navbar.classList.toggle("active");
})