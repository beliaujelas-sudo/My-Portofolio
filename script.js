// Reveal Animation

const reveals = document.querySelectorAll('.reveal');

function revealElements() {

    reveals.forEach(item => {

        const windowHeight = window.innerHeight;

        const revealTop =
            item.getBoundingClientRect().top;

        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {

            item.classList.add('active');

        }

    });

}

window.addEventListener('scroll', revealElements);

revealElements();


// Navbar Effect

window.addEventListener('scroll', () => {

    const navbar =
        document.querySelector('.navbar');

    if (window.scrollY > 50) {

        navbar.style.background =
            'rgba(255,255,255,.12)';

    } else {

        navbar.style.background =
            'rgba(255,255,255,.08)';
    }

});