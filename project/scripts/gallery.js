const galleryImages = [
    'images/bush1.webp',
    'images/candy.webp',
    'images/destiny.webp',
    'images/lapcat.webp',
    'images/powerstance.webp',
    'images/bush2.webp',
    'images/painterstape.webp',

];

function displayGalleryWithLazyLoading() {
    const galleryContainer = document.getElementById('galleryContainer');

    galleryImages.forEach((image) => {
        const imgElement = document.createElement('img');
        imgElement.src = image;
        imgElement.alt = 'Fedex';
        imgElement.loading = 'lazy';
        
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');
        galleryItem.appendChild(imgElement);

        galleryContainer.appendChild(galleryItem);
    });
}
displayGalleryWithLazyLoading();
