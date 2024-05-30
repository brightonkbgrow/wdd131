const galleryImages = [
    'images/fedex1.jpg',
    'images/fedex2.jpg',
    'images/fedex3.jpg',
    // Add more image URLs as needed
];

// Function to display gallery images
function displayGallery() {
    const galleryContainer = document.getElementById('galleryContainer');
    let galleryHTML = '';

    galleryImages.forEach((image) => {
        galleryHTML += `
            <div class="gallery-item">
                <img src="${image}" alt="Fedex">
            </div>
        `;
    });

    galleryContainer.innerHTML = galleryHTML;
}

// Call function to display gallery
displayGallery();
