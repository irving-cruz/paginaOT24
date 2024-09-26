document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');

    nextButton.addEventListener('click', () => {
        carousel.scrollLeft += 300; // Ajusta este valor según el tamaño de las tarjetas
    });

    prevButton.addEventListener('click', () => {
        carousel.scrollLeft -= 300; // Ajusta este valor según el tamaño de las tarjetas
    });

    // Inicializa las secciones
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            sections.forEach(section => {
                section.classList.add('hidden');
            });
            const targetSection = document.querySelector(this.getAttribute('href'));
            targetSection.classList.remove('hidden');
        });
    });

    // Muestra la sección por defecto
    document.querySelector('#sobre-mi').classList.remove('hidden');
});

