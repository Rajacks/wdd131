// Get the current year for the copyright
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Get the last modified date of the document
const lastModifiedElement = document.getElementById("lastModified");
lastModifiedElement.innerHTML = `Last Modification: ${document.lastModified}`;
