const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = lastModified;

function populateAboutPage() {
    const aboutText = `
        <h2>About Fedex</h2>
        <p>Fedex is a Domestic Shorthair cat with a unique personality. He enjoys exploring and playing with various objects around the house.</p>
        <p>Despite his mischievous behavior, Fedex is incredibly affectionate and loves cuddling with his owner.</p>
    `;
    document.getElementById('aboutContent').innerHTML = aboutText;

    const aboutButton = document.createElement('button');
    aboutButton.textContent = 'Watch Fedex Explore';

    aboutButton.addEventListener('click', () => {
        alert('You are leaving the official site');
        window.location.href = 'https://www.tiktok.com/@camillejoyadventures?lang=en';
    });

    document.querySelector('main').appendChild(aboutButton);
}

populateAboutPage();
