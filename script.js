// Navigation Background & Scroll Progress
const header = document.querySelector("header");
const scrollProgress = document.querySelector(".scroll-progress");

window.addEventListener("scroll", () => {
    // Scroll Progress
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    scrollProgress.style.width = scrolled + "%";

    // Header Background
    if (window.scrollY > 100) {
        header.style.padding = "0.5rem 0";
        header.style.background = "rgba(15, 23, 42, 0.95)";
    } else {
        header.style.padding = "0";
        header.style.background = "rgba(15, 23, 42, 0.8)";
    }
});

// Scroll Reveal Observer
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
        }
    });
}, observerOptions);

// Add reveal class to sections
document.querySelectorAll("section").forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 1s ease-out";
    observer.observe(section);
});

// CSS for reveal
const style = document.createElement('style');
style.textContent = `
    .reveal-visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// Menu
const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");

if (burger) {
    burger.addEventListener("click", () => {
        navLinks.classList.toggle("nav-active");
        burger.classList.toggle("toggle");
    });
}

// Form Submission
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Thank you for your message! This is a demo site, so no data was actually sent.");
        contactForm.reset();
    });
}

