// Mobile Menu Toggle
const menuButton = document.getElementById('menu-button');
const navLinks = document.querySelector('.nav-links');

function toggleMenu() {
    // 1. Toggle the CSS class (controls visibility via CSS)
    navLinks.classList.toggle('open');
    
    // 2. Update the button text/icon for accessibility
    const isExpanded = navLinks.classList.contains('open');
    menuButton.setAttribute('aria-expanded', isExpanded);
    menuButton.innerHTML = isExpanded ? '✕' : '☰'; // X vs Hamburger
}


// Add the event handler
menuButton.addEventListener('click', toggleMenu);

// OPTIONAL: Close the menu when a link inside is clicked (for mobile UX)
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('open')) {
            toggleMenu(); // Closes the menu
        }
    });
});

// Scroll Progress Indicator
const scrollProgress = document.getElementById('scroll-progress');

window.addEventListener('scroll', function() {
    // Calculate scroll percentage
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    
    // Update progress bar width
    scrollProgress.style.width = scrolled + '%';
});

// Form Submission Handling
const contactForm = document.getElementById('contact-form-id');
const messageDiv = document.getElementById('form-message');

if (contactForm && messageDiv) {
    contactForm.addEventListener('submit', function(event) {
        // Stop the browser from submitting the form and refreshing the page
        event.preventDefault();
        
        const nameInput = document.getElementById('name').value;
        const emailInput = document.getElementById('email').value;
        
        if (nameInput === '' || emailInput === '') {
            messageDiv.textContent = 'Please fill out all required fields.';
            messageDiv.style.color = 'red';
            messageDiv.style.background = '#ffebee';
            messageDiv.classList.add('show');
        } else {
            // Successful mock submission
            messageDiv.textContent = 'Thank you for your message! I will be in touch shortly.';
            messageDiv.style.color = 'green';
            messageDiv.style.background = '#e8f5e9';
            messageDiv.classList.add('show');
            contactForm.reset(); // Clear the form fields
        }
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Handle window resize (responsive adjustments)
window.addEventListener('resize', function() {
    // Close mobile menu if window is resized to desktop size
    if (window.innerWidth >= 768 && navLinks.classList.contains('open')) {
        toggleMenu();
    }
});

