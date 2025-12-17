// js/main.js
document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navUl = document.querySelector('.nav ul');
    
    hamburger.addEventListener('click', () => {
        navUl.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Smooth scroll and active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Update active link
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // Close mobile menu
            navUl.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Load gallery images dynamically
    const gallery = document.getElementById('gallery');
    
    // Work1: 8 images
    for (let i = 1; i <= 8; i++) {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.innerHTML = `<img src="images/work1/${i}.jpg" alt="Trabalho fotográfico ${i}">`;
        gallery.appendChild(item);
    }
    
    // Work2: 20 images
    for (let i = 1; i <= 20; i++) {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.innerHTML = `<img src="images/work2/${i}.jpg" alt="Trabalho fotográfico ${i}">`;
        gallery.appendChild(item);
    }

    // Form submission (basic)
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Mensagem enviada com sucesso! Entrarei em contato em breve.');
        form.reset();
    });

    // Header background on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            document.querySelector('.header').style.background = 'rgba(0, 0, 0, 0.95)';
        } else {
            document.querySelector('.header').style.background = 'rgba(0, 0, 0, 0.8)';
        }
    });
});