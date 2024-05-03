




// Function to adjust grid layout based on available space
function adjustGrid() {
    const main = document.querySelector('main');
    const images = document.querySelectorAll('.image');

    // Calculate the number of columns based on available space
    const numColumns = Math.min(Math.floor(main.clientWidth / 200), 3); // Minimum column width is 200px

    // Set grid template columns with the calculated number of columns
    main.style.gridTemplateColumns = `repeat(${numColumns}, 1fr)`;
}

// Initial adjustment on page load
adjustGrid();

// Adjust grid layout when window is resized
window.addEventListener('resize', adjustGrid);

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
