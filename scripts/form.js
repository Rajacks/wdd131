// Copying assignment array objects source safely
const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power laces", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 },
];

document.addEventListener("DOMContentLoaded", () => {
  const productSelect = document.getElementById("product-name");

  // Populate the dropdown menu dynamically from the array objects
  products.forEach((product) => {
    const option = document.createElement("option");
    option.value = product.id; // Assign ID field as standard reference value
    option.textContent = product.name.toLowerCase(); // Map display label string
    productSelect.appendChild(option);
  });

  // Handle universal footer metrics variables cleanly
  document.getElementById("currentyear").textContent = new Date().getFullYear();
  document.getElementById("lastmodified").textContent = document.lastModified;
});
