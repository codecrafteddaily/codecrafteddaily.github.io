// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Typewriter Effect
const textSpan = document.getElementById("typewriter");
const words = ["Automation", "Web Apps", "APIs", "DevOps Pipelines"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typeSpeed = 100;
const deleteSpeed = 50;
const delayNextWord = 2000;

function type() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        textSpan.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        textSpan.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(type, delayNextWord);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 500);
    } else {
        setTimeout(type, isDeleting ? deleteSpeed : typeSpeed);
    }
}

// Start typing on load
document.addEventListener('DOMContentLoaded', type);

// Smooth Scroll for Anchor Links (Optional Polyfill)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        navLinks.classList.remove('active'); // Close menu on click
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});