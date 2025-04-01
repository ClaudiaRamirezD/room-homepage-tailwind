
//Obtener elementos
const menuBtn = document.querySelector("#menu-open");
const closeBtn = document.querySelector("#menu-close");
const navbar = document.querySelector(".header__nav-mobile");
const backdrop = document.querySelector("#backdrop");

//Abrir menu
menuBtn.addEventListener("click", () => {
    backdrop.classList.remove("hidden");
    backdrop.classList.add("block");
    navbar.classList.add("hidden");
});

// Close menu
closeBtn.addEventListener("click", () => {
    navbar.classList.remove("hidden");
    backdrop.classList.add("hidden"); // Hide the menu again
    backdrop.classList.remove("block");

});
