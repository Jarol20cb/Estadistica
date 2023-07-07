const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Función para cerrar el menú
const closeMenu = () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
};

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

document.addEventListener('click', (event) => {
    const isClickInsideMenu = navLinks.contains(event.target) || hamburger.contains(event.target);
    
    if (!isClickInsideMenu) {
        closeMenu();
    }
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
