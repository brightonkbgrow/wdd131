const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = lastModified;

// Function to populate about page content
function populateAboutPage() {
    const aboutText = `
        <h2>About Fedex</h2>
        <p>Fedex is a Domestic Shorthair cat with a unique personality. He enjoys exploring and playing with various objects around the house.</p>
        <p>Despite his mischievous behavior, Fedex is incredibly affectionate and loves cuddling with his owner.</p>
    `;
    document.getElementById('aboutContent').innerHTML = aboutText;

    // Create a link element
    const learnMoreLink = document.createElement('a');
    learnMoreLink.href = 'https://example.com'; // Replace with your external link
    learnMoreLink.target = '_blank'; // Open link in a new tab

    // Create the button element
    const aboutButton = document.createElement('button');
    aboutButton.textContent = 'Learn More';

    // Add click event listener to the button to display alert
    aboutButton.addEventListener('click', () => {
        alert('Thank you for learning more about Fedex!');
    });

    // Append the button to the link
    learnMoreLink.appendChild(aboutButton);

    // Append the link to the main section
    document.querySelector('main').appendChild(learnMoreLink);
}

// Call function to populate content
populateAboutPage();
