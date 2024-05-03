const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = lastModified;

document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelectorAll('nav a');

    hamburger.addEventListener('click', function () {
        navLinks.forEach(link => {
            link.style.display = link.style.display === 'block' ? 'none' : 'block';
        });
    });
});










// Function to adjust grid layout and image size based on viewport width
function adjustLayout() {
    const main = document.querySelector('main');
    const images = document.querySelectorAll('.image');

    if (window.innerWidth < 600) {
        main.style.gridTemplateColumns = 'repeat(1, minmax(200px, 1fr))'; // 1 column for viewport width < 600px
        images.forEach(image => {
            image.style.maxWidth = 'calc(100% - 10px)'; // Reduce image size for 1-column layout
        });
    } else if (window.innerWidth < 900) {
        main.style.gridTemplateColumns = 'repeat(2, minmax(200px, 1fr))'; // 2 columns for viewport width < 900px
        images.forEach(image => {
            image.style.maxWidth = 'calc(50% - 10px)'; // Reduce image size for 2-column layout
        });
    } else {
        main.style.gridTemplateColumns = 'repeat(3, minmax(200px, 1fr))'; // 3 columns for viewport width >= 900px
        images.forEach(image => {
            image.style.maxWidth = '100%'; // Reset image size for default layout
        });
    }
}

// Initial adjustment on page load
adjustLayout();

// Adjust layout when window is resized
window.addEventListener('resize', adjustLayout);
