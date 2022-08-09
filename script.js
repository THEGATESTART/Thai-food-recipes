//Hamberger toggle
const ham = document.getElementById('hamberger');
const link = document.getElementById('menulinks');

ham.addEventListener('click', () => {
    link.classList.toggle('show');
})