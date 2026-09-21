// Mobile Navigation
const menuToggle = document.querySelector(".menu-toggle");
const navWrapper = document.querySelector("nav ul");

if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        navWrapper.classList.toggle("active");
    });
}

// Dark / Light Mode
const themeToggle = document.querySelector(".theme-toggle");

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
}

// Smooth Scrolling
document.querySelectorAll("a[href^='#']").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Contact Form Validation
const contactForm = document.querySelector("#contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        alert("Thank you! Your message has been submitted.");
        contactForm.reset();
    });
}

// Scroll Animation
window.addEventListener("scroll", () => {
    document.querySelectorAll("section").forEach(section => {
        const position = section.getBoundingClientRect().top;

        if (position < window.innerHeight - 100) {
            section.classList.add("show");
        }
    });
});