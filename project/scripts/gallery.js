// Array of image URLs for Fedex's gallery
const galleryImages = [
    'images/bush1.webp',
    'images/candy.webp',
    'images/destiny.webp',
    'images/lapcat.webp',
    'images/powerstance.webp',
    'images/bush2.webp',
    'images/painterstape.webp',

];

// Function to display gallery images with lazy loading
function displayGalleryWithLazyLoading() {
    const galleryContainer = document.getElementById('galleryContainer');

    galleryImages.forEach((image) => {
        const imgElement = document.createElement('img');
        imgElement.src = image;
        imgElement.alt = 'Fedex';
        imgElement.loading = 'lazy'; // Set loading attribute to "lazy"
        
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');
        galleryItem.appendChild(imgElement);

        galleryContainer.appendChild(galleryItem);
    });
}

// Call function to display gallery with lazy loading
displayGalleryWithLazyLoading();
