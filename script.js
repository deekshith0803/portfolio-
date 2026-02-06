/**
 * Cinematic Portfolio Script
 * Smooth Parallax & Elegant Animations
 */

// Initialize Lenis Smooth Scroll
const lenis = new Lenis({
    duration: 1.5,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    smoothWheel: true,
    smoothTouch: false
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

// Register GSAP Plugins
gsap.registerPlugin(ScrollTrigger);

// Subtle Particle Background
const canvas = document.getElementById('hero-canvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles();
}

window.addEventListener('resize', resize);
resize();

class Particle {
    constructor() {
        this.reset();
    }

    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.2;
        this.speedY = (Math.random() - 0.5) * 0.2;
        this.opacity = Math.random() * 0.3 + 0.1;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
            this.reset();
        }
    }

    draw() {
        ctx.fillStyle = `rgba(212, 175, 55, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function initParticles() {
    particles = [];
    for (let i = 0; i < 40; i++) {
        particles.push(new Particle());
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animateParticles);
}
animateParticles();

// Page Load - Initialize Hero Entrance
window.addEventListener('load', () => {
    initHeroEntrance();
});

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Hero Section Entrance Animation
function initHeroEntrance() {
    const heroTimeline = gsap.timeline();

    heroTimeline.from('.hero-content .subtitle', {
        y: 30,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out"
    })
        .from('.hero-content .title', {
            y: 60,
            opacity: 0,
            duration: 1.4,
            ease: "power4.out"
        }, "-=0.9")
        .from('.hero-content .description', {
            y: 30,
            opacity: 0,
            duration: 1,
            ease: "power4.out"
        }, "-=0.9")
        .from('.hero-content .cta-buttons', {
            y: 30,
            opacity: 0,
            duration: 1,
            ease: "power4.out"
        }, "-=0.8");
}

// Scroll Triggered Reveal for Sections
const sections = document.querySelectorAll('.section');

sections.forEach(section => {
    const title = section.querySelector('.section-title');
    const content = section.querySelectorAll('.container > *:not(.section-title)');

    if (title) {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: "top 85%",
            },
            y: 50,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out"
        });
    }

    if (content.length > 0) {
        gsap.from(content, {
            scrollTrigger: {
                trigger: section,
                start: "top 75%",
            },
            y: 60,
            opacity: 0,
            duration: 1.2,
            stagger: 0.15,
            ease: "power3.out"
        });
    }
});

// ===== GTA 6-STYLE CINEMATIC ANIMATIONS =====

// Parallax on Hero Title
gsap.to('.hero .title', {
    scrollTrigger: {
        trigger: '.hero',
        start: "top top",
        end: "bottom top",
        scrub: 1.5
    },
    y: 150,
    opacity: 0.3,
    scale: 0.95,
    ease: "none"
});

// Parallax on Hero Content
gsap.to('.hero-content .subtitle, .hero-content .description, .hero-content .cta-buttons', {
    scrollTrigger: {
        trigger: '.hero',
        start: "top top",
        end: "bottom top",
        scrub: 1
    },
    y: 100,
    opacity: 0,
    ease: "none"
});

// Parallax on Hero Visual
gsap.to('.hero-visual', {
    scrollTrigger: {
        trigger: '.hero',
        start: "top top",
        end: "bottom top",
        scrub: 2
    },
    y: -80,
    opacity: 0.5,
    ease: "none"
});

// Section Titles - Parallax Effect
document.querySelectorAll('.section-title').forEach(title => {
    gsap.to(title, {
        scrollTrigger: {
            trigger: title,
            start: "top bottom",
            end: "bottom top",
            scrub: 2
        },
        y: -30,
        ease: "none"
    });
});


// Project Cards - GTA 6 Style with Image Scaling
document.querySelectorAll('.project-card').forEach((card, index) => {
    const image = card.querySelector('.project-img');

    // Card entrance animation
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 85%",
        },
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
    });

    // Image scale on scroll (GTA 6 signature effect)
    if (image) {
        gsap.fromTo(image,
            {
                scale: 1.3,
                filter: "brightness(0.7)"
            },
            {
                scrollTrigger: {
                    trigger: card,
                    start: "top 80%",
                    end: "top 30%",
                    scrub: 1
                },
                scale: 1,
                filter: "brightness(1)",
                ease: "none"
            }
        );
    }

    // Enhanced hover with smooth lift
    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            y: -20,
            scale: 1.02,
            boxShadow: "0 30px 60px rgba(0, 0, 0, 0.4)",
            duration: 0.6,
            ease: "power2.out"
        });

        if (image) {
            gsap.to(image, {
                scale: 1.05,
                duration: 0.6,
                ease: "power2.out"
            });
        }
    });

    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            y: 0,
            scale: 1,
            boxShadow: "none",
            duration: 0.6,
            ease: "power2.out"
        });

        if (image) {
            gsap.to(image, {
                scale: 1,
                duration: 0.6,
                ease: "power2.out"
            });
        }
    });
});

// Skill Cards - Smooth Fade with Parallax
document.querySelectorAll('.skill-card').forEach((card, index) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 90%",
        },
        y: 80,
        opacity: 0,
        duration: 1,
        delay: index * 0.08,
        ease: "power3.out"
    });

    // Subtle parallax on scroll
    gsap.to(card, {
        scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5
        },
        y: -20,
        ease: "none"
    });

    // Bounce hover effect
    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            y: -10,
            scale: 1.05,
            duration: 0.3,
            ease: "back.out(1.5)"
        });
    });

    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
        });
    });
});

// Magnetic Effect for Buttons
const magneticElements = document.querySelectorAll('.btn, .social-icon');
magneticElements.forEach(el => {
    el.addEventListener('mousemove', (e) => {
        const { left, top, width, height } = el.getBoundingClientRect();
        const x = e.clientX - left - width / 2;
        const y = e.clientY - top - height / 2;

        gsap.to(el, {
            x: x * 0.2,
            y: y * 0.2,
            duration: 0.4,
            ease: "power2.out"
        });
    });

    el.addEventListener('mouseleave', () => {
        gsap.to(el, {
            x: 0,
            y: 0,
            duration: 0.6,
            ease: "elastic.out(1, 0.3)"
        });
    });
});

// Mobile Menu Handler


// Set current year
const yearSpan = document.getElementById('year');
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

// Parallax effect on hero title
gsap.to('.hero .title', {
    scrollTrigger: {
        trigger: '.hero',
        start: "top top",
        end: "bottom top",
        scrub: 1
    },
    y: 100,
    opacity: 0.5,
    ease: "none"
});

console.log("Cinematic portfolio initialized.");

// Robust Mobile Menu Handler
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links a');

    if (!hamburger || !navLinks) return;

    // Toggle menu
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Prevent closing when clicking inside menu
    navLinks.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    // Close on outside click
    document.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });

    // Close on link click
    navLinksItems.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
});

