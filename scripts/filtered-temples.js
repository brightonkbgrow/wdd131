function adjustGrid() {
    const main = document.querySelector('main');
    const images = document.querySelectorAll('.image');

    const numColumns = Math.min(Math.floor(main.clientWidth / 200), 3);

    main.style.gridTemplateColumns = `repeat(${numColumns}, 1fr)`;
}

adjustGrid();
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

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
    templeName: "Laia Hawaii",
    location: "Laia, Hawaii",
    dedicated: "1919, November, 27",
    area: 47224,
    imageUrl:
    "https://www.churchofjesuschrist.org/imgs/7a0f50d86d25bad2131ff37fa7a90f48b5472df0/full/1600%2C/0/default"
    },
    {
    templeName: "Mount Timpanogos Utah",
    location: "Mount Timpanogos, Utah",
    dedicated: "1996, October, 13",
    area: 107240,
    imageUrl:
    "https://www.churchofjesuschrist.org/imgs/b4b7425f9c94ab4c8086b24ab4a93531044093fe/full/1920%2C/0/default"
    },
    {
    templeName: "Bountiful Utah",
    location: "Bountiful, Utah",
    dedicated: "1995, January, 8",
    area: 104000,
    imageUrl:
    "https://www.churchofjesuschrist.org/imgs/ad136e9292c808a43e65262d436d94291dad09c8/full/1920%2C/0/default"
    },
  ];






  const container = document.createElement('div');
container.className = 'temples-container';

temples.forEach(temple => {
  const templeCard = document.createElement('div');
  templeCard.className = 'temple-card';

  const templeName = document.createElement('h2');
  templeName.textContent = temple.templeName;
  templeCard.appendChild(templeName);

  const location = document.createElement('p');
  location.textContent = `Location: ${temple.location}`;
  templeCard.appendChild(location);

  const dedicated = document.createElement('p');
  dedicated.textContent = `Dedicated: ${temple.dedicated}`;
  templeCard.appendChild(dedicated);

  const area = document.createElement('p');
  area.textContent = `Size: ${temple.area} sq ft`;
  templeCard.appendChild(area);

  const image = document.createElement('img');
  image.src = temple.imageUrl;
  image.alt = temple.templeName;
  image.loading = 'lazy';
  templeCard.appendChild(image);

  container.appendChild(templeCard);
});

document.body.appendChild(container);

// CSS (Assuming you want to add some basic styling)
const style = document.createElement('style');
style.textContent = `
  .temples-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    text-align: center;
    
  }
  .temple-card {
    border: 1px solid #ccc;
    padding: 20px;
    max-width: 300px;
    background: #D3D3D3;
  }
  .temple-card img {
    width: 100%;
    height: auto;
  }
`;
document.head.appendChild(style);