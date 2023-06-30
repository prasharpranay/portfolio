// Smooth scrolling effect for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Show/hide mobile navigation menu
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('nav ul');
  
  menuToggle.addEventListener('click', function() {
    navMenu.classList.toggle('show');
  });
  
  // Form submission
  const contactForm = document.getElementById('contact-form');
  
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // Perform form validation and submission logic here
    // Example: You can use AJAX to send the form data to a server-side script
  });
  