const currentYear = document.querySelector("#currentYear");
const today = new Date();
currentYear.innerHTML = `getFullYear(): <span class="highlight">${today.getFullYear()}</span>`;