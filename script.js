setTimeout(() => {
    document.getElementById('welcome').classList.add('hide');
}, 2000);

const menuToggle = document.getElementById('menuToggle');
const navbar = document.getElementById('navbar');
menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('show');
    menuToggle.querySelector('i').classList.toggle('fa-times');
});

const carousel = document.querySelector(".carousel");
const images = document.querySelectorAll(".carousel img");
let index = 0;

function showSlide() {
  index++;
  if (index >= images.length) index = 0;
  carousel.style.transform = `translateX(${-index * 100}%)`;
}

let slideInterval = setInterval(showSlide, 3000); // Auto Slide

document.querySelector(".next").addEventListener("click", () => {
  clearInterval(slideInterval);
  showSlide();
});

document.querySelector(".prev").addEventListener("click", () => {
  clearInterval(slideInterval);
  index--;
  if (index < 0) index = images.length - 1;
  carousel.style.transform = `translateX(${-index * 100}%)`;
});