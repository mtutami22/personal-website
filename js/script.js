const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".header-nav");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    hamburger.classList.toggle("is-active");

    const expanded = hamburger.getAttribute("aria-expanded") === "true";
    hamburger.setAttribute("aria-expanded", !expanded);
});