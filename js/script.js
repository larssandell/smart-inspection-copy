import zoomImages from "./components/zoomimg.js";

// hamburger menu
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navgationMenu = document.querySelector(".nav-ul");


hamburgerMenu.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("active");
    navgationMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(event => event.addEventListener("click", () => {
    hamburgerMenu.classList.remove("active");
    navgationMenu.classList.remove("active");
}));



