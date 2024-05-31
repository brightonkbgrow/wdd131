const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = lastModified;

function populateAboutPage() {
    const aboutText = `
        <h2>About Fedex</h2>
        <h2>Name</h2>
        <p>Fedex got his name after being adopted. His previous name was Paul, which was not fitting. He was renamed to Fedex as he paid attention the a large Fedex truck on his first ride home.</p>
        <h2>Home</h2>
        <p>Fedex lives in his home on the 3rd floor of an apartment complex. He loves to run up and down the halls at top speed and watch from the window as children play in the park across the street.</p>
        <h2>Adventures</h2>
        <p>Fedex goes on many adventures with his favorite people. He waits by the door and will request to leave. He is the harnessed, collared, and taken out on the town where he finds the most uninteresting things to smell.</p>
        <h2>Favorite Foods</h2>
        <p></p>
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
