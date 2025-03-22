// Get the hamburger menu and nav element
const menuToggle = document.getElementById('mobile-menu');
const nav = document.querySelector('nav');

// Add event listener for the hamburger icon click event
menuToggle.addEventListener('click', () => {
    // Toggle the 'active' class on the nav element
    nav.classList.toggle('active');
});
