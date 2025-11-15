setTimeout(() => {
    document.getElementById('welcome').classList.add('hide');
}, 2000);

const menuToggle = document.getElementById('menuToggle');
const navbar = document.getElementById('navbar');
menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('show');
    menuToggle.querySelector('i').classList.toggle('fa-times');
});