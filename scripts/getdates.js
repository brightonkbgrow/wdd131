// Get the current year
const currentYear = new Date().getFullYear();

// Output the current year in the footer's first paragraph
document.getElementById('currentYear').textContent = currentYear;

// Get the last modified date of the document
const lastModified = new Date(document.lastModified);

// Format the last modified date
const formattedLastModified = lastModified.toLocaleDateString();

// Output the formatted last modified date in the footer's second paragraph
document.getElementById('lastModified').textContent = formattedLastModified;
