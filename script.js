// =============================
// FAIZAN PORTFOLIO - SCRIPT.JS
// =============================

const header = document.querySelector(".header");
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const navItems = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("section[id]");
const revealItems = document.querySelectorAll(".reveal");

// Header background on scroll
window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

    updateActiveLink();
});

// Mobile menu toggle
menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});

// Close mobile menu after clicking link
navItems.forEach(item => {
    item.addEventListener("click", () => {
        navLinks.classList.remove("open");
    });
});

// Active navigation link
function updateActiveLink() {
    let current = "";

    sections.forEach(section => {
        const top = section.offsetTop - 150;
        const height = section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < top + height) {
            current = section.getAttribute("id");
        }
    });

    navItems.forEach(item => {
        item.classList.remove("active");

        if (item.getAttribute("href") === `#${current}`) {
            item.classList.add("active");
        }
    });
}

// Scroll reveal animation
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.13
});

revealItems.forEach(item => observer.observe(item));
