document.addEventListener("DOMContentLoaded", () => {
    
    /* ---------------------------------------------------
       1. SCROLL REVEAL ANIMATION (Intersection Observer)
       Muncul perlahan ke atas saat section masuk layar
       --------------------------------------------------- */
    const reveals = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Efek stagger/berurutan sedikit antar elemen
                setTimeout(() => {
                    entry.target.classList.add("active");
                }, 100);
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.15 // Memulai animasi saat 15% elemen terlihat
    });

    reveals.forEach((el) => revealObserver.observe(el));

    /* ---------------------------------------------------
       2. NAVBAR SCROLL EFFECT (Glassmorphism Blur on Scroll)
       --------------------------------------------------- */
    const navbar = document.getElementById("navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    /* ---------------------------------------------------
       3. INTERACTIVE SPOTLIGHT GLOW (TikTok Dev Viral Trick)
       Cahaya biru langit halus yang mengikuti mouse Anda
       --------------------------------------------------- */
    const cursorGlow = document.getElementById("cursorGlow");
    
    // Hanya aktif pada layar laptop/desktop (bukan touch screen)
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
        window.addEventListener("mousemove", (e) => {
            cursorGlow.style.left = `${e.clientX}px`;
            cursorGlow.style.top = `${e.clientY}px`;
        });
    } else {
        cursorGlow.style.display = "none";
    }

    /* ---------------------------------------------------
       4. SMOOTH TILT EFFECT PADA PROJECT CARD
       --------------------------------------------------- */
    const cards = document.querySelectorAll(".project-card");
    cards.forEach(card => {
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            // Kemiringan 3D halus
            card.style.transform = `perspective(1000px) rotateX(${-y * 0.04}deg) rotateY(${x * 0.04}deg) translateY(-8px)`;
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)`;
        });
    });
});
