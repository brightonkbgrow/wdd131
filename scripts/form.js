const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;
const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = lastModified;
const products = [
    { id: "ac", name: "AC Unit" },
    { id: "fan", name: "Ceiling Fan" },
    { id: "window", name: "Window" },
    { id: "skylight", name: "Skylight" }
];
function populateProductOptions() {
    const selectProduct = document.getElementById("product");

    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        selectProduct.appendChild(option);
    });
}
function updateReviewCounter() {
    let reviewCount = localStorage.getItem("reviewCount") || 0;
    reviewCount++;
    localStorage.setItem("reviewCount", reviewCount);
}
document.addEventListener("DOMContentLoaded", function() {
    populateProductOptions();
});
document.addEventListener("submit", function(event) {
    const form = event.target;
    if (form.classList.contains("wf1")) {
        updateReviewCounter();
    }
});