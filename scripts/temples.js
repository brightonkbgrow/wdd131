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

    // Calculate the number of columns based on the viewport width
    let numColumns;
    if (window.innerWidth < 600) {
        numColumns = 1; // 1 column for viewport width < 600px
    } else if (window.innerWidth < 900) {
        numColumns = 2; // 2 columns for viewport width < 900px
    } else {
        numColumns = 3; // 3 columns for viewport width >= 900px
    }

    // Calculate the width of each column
    const columnWidth = `${100 / numColumns}%`;

    // Set grid template columns with a minimum width for each column
    main.style.gridTemplateColumns = `repeat(${numColumns}, minmax(200px, 1fr))`; // Adjust the minimum width as needed

    // Set max-width for images to fill the column width
    images.forEach(image => {
        image.style.maxWidth = `calc(${columnWidth} - 10px)`; // Subtract margin/padding
    });
}

// Initial adjustment on page load
adjustLayout();

// Adjust layout when window is resized
window.addEventListener('resize', adjustLayout);
