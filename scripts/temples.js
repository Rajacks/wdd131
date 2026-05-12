// Dynamic Year
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Last Modified
const lastMod = document.lastModified;
document.getElementById("lastModified").textContent =
  `Last Modification: ${lastMod}`;

// Hamburger Menu Toggle
const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("#navigation");

menuButton.addEventListener("click", () => {
  navigation.classList.toggle("show");
  menuButton.classList.toggle("open");
});
