// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - (document.querySelector('header') ? document.querySelector('header').offsetHeight : 0),
                behavior: 'smooth'
            });
        }
    });
});

// Basic fade-in animation on scroll for sections (optional, can be expanded)
const sections = document.querySelectorAll('section');

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

sections.forEach(section => {
    section.classList.add('hidden'); // Add a hidden class initially
    sectionObserver.observe(section);
});

// Add CSS for .hidden and .fade-in to style.css manually or dynamically if needed
// For simplicity, assuming CSS will handle .hidden { opacity: 0; transition: opacity 0.8s ease-out; } and .fade-in { opacity: 1; }

// --- Triggering new deployment after manual GitHub Pages enablement ---