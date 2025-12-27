// Main Script

// Add scroll event listener for navbar styling
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.85)';
        navbar.style.boxShadow = 'none';
    }
});

// Scroll Reveal Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, observerOptions);

// Select elements to animate
// We'll add a .fade-in class to major sections or elements in CSS if not present, 
// but here we can target existing classes and add an animation class
document.querySelectorAll('.section-title, .about-text, .skills-grid, .project-card, .contact-content').forEach(el => {
    el.classList.add('hidden-element');
    observer.observe(el);
});

console.log("Portfolio loaded with animations.");

document.getElementById('year').textContent = new Date().getFullYear();
