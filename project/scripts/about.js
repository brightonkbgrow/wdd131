// Function to populate about page content
function populateAboutPage() {
    const aboutText = `
        <h2>About Fedex</h2>
        <p>Fedex is a Domestic Shorthair cat with a unique personality. He enjoys exploring and playing with various objects around the house.</p>
        <p>Despite his mischievous behavior, Fedex is incredibly affectionate and loves cuddling with his owner.</p>
    `;
    document.getElementById('aboutContent').innerHTML = aboutText;
}

// Function to handle click event on a button
function handleButtonClick() {
    const button = document.getElementById('aboutButton');
    button.addEventListener('click', () => {
        alert('Thank you for learning more about Fedex!');
    });
}

// Call functions to populate content and add event listeners
populateAboutPage();
handleButtonClick();
