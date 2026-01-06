const slider = document.getElementById("slider");
const slides = slider.querySelectorAll("img");
let index = 0;

function autoSlide() {
    index = (index + 1) % slides.length;
    slider.scrollTo({
        left: slides[index].offsetLeft,
        behavior: "smooth"
    });
}

let interval = setInterval(autoSlide, 3000);
