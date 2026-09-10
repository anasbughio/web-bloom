/* =====================================================
   WEBBLOOM
   JavaScript
===================================================== */


/* ================= MOBILE MENU ================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


/* Close mobile menu when clicking a link */

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


/* ================= FAQ ================= */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        const isActive = item.classList.contains("active");

        /* Close all */

        faqItems.forEach(faq => {
            faq.classList.remove("active");
        });

        /* Open clicked one */

        if (!isActive) {
            item.classList.add("active");
        }

    });

});


/* ================= CONTACT FORM ================= */

const contactForm = document.getElementById("contactForm"); const toast = document.getElementById("toast"); if (contactForm) { contactForm.addEventListener("submit", function () { /* IMPORTANT: Do NOT use event.preventDefault() here. The form action already points to Web3Forms, so the browser will submit the form normally. */ console.log("Contact form submitted to Web3Forms"); /* Do not reset the form here. Web3Forms needs to receive the form data first. */ }); }

/* ================= SCROLL REVEAL ================= */

const revealElements = document.querySelectorAll(
    ".problem-card, .industry-card, .project, .service-item, .process-step, .benefit, .faq-item"
);


/* Add reveal class */

revealElements.forEach(element => {

    element.classList.add("reveal");

});


/* Observer */

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.1
    }
);


/* Observe */

revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* ================= NAVBAR SHADOW ================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        navbar.style.boxShadow =
            "0 8px 30px rgba(30, 60, 40, 0.06)";

    } else {

        navbar.style.boxShadow = "none";

    }

});


/* ================= CURRENT YEAR ================= */

const currentYear = new Date().getFullYear();

const footerYear = document.querySelector(".footer-bottom span");

if (footerYear) {

    footerYear.textContent =
        `© ${currentYear} WebBloom. All rights reserved.`;

}