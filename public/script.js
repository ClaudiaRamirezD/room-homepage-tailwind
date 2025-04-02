
//Obtener elementos
const menuBtn = document.querySelector("#menu-open");
const closeBtn = document.querySelector("#menu-close");
const navbar = document.querySelector(".header__nav-mobile");
const backdrop = document.querySelector("#backdrop");
const prevBtn = document.querySelector(".carousel-control-prev");
const nextBtn = document.querySelector(".carousel-control-next");
const pictures = document.querySelectorAll(".main-img picture");
const texts = document.querySelectorAll(".hero-text article");

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

// Carousel

let currentIndex = 0;
const totalSlides = pictures.length;

function updateCarousel(index) {
    //Hide all images and text
    pictures.forEach((pic) => pic.classList.add("hidden"));
    texts.forEach((text) => text.classList.add("hidden"));

    //Show current images and text
    pictures[index].classList.remove("hidden");
    texts[index].classList.remove("hidden");
}

//Handle buttons click
nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel(currentIndex);
})

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; 
    updateCarousel(currentIndex);
});

// Initialize by showing the first slide
updateCarousel(currentIndex);