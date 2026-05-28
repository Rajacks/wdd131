// =====================
// TEMPLE DATA ARRAY
// =====================
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://www.churchofjesuschrist.org/imgs/ed36df40175c17cc1eb9ad4309a3729de9f00eea/full/!1200,/0/default",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },

  // extra temples (required 3+)
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253000,
    imageUrl:
      "https://www.churchofjesuschrist.org/imgs/c8f9e392284fb5ab45815e69507af83d668097bd/full/!1200,/0/default",
  },
  {
    templeName: "Manila Philippines",
    location: "Manila, Philippines",
    dedicated: "1984, September, 25",
    area: 26683,
    imageUrl:
      "https://www.churchofjesuschrist.org/imgs/de7a4293e088152271f9c6292ee37fbf83799741/full/!1200,/0/default",
  },
];

// =====================
// SELECT CONTAINER
// =====================
const container = document.querySelector("#temple-container");

// =====================
// DISPLAY FUNCTION
// =====================
function displayTemples(list) {
  container.innerHTML = "";

  list.forEach((temple) => {
    const card = document.createElement("figure");

    card.innerHTML = `
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
      <figcaption>
        <h3>${temple.templeName}</h3>
        <p>${temple.location}</p>
        <p>Dedicated: ${temple.dedicated}</p>
        <p>Area: ${temple.area.toLocaleString()} sq ft</p>
      </figcaption>
    `;

    container.appendChild(card);
  });
}

// =====================
// INITIAL LOAD
// =====================
displayTemples(temples);

// =====================
// HAMBURGER BUTTON FUNCTIONALITY
// =====================
document.querySelector("#menu").addEventListener("click", function() {
  this.classList.toggle("open");
  document.querySelector("nav ul").classList.toggle("show");
});

// =====================
// FILTER BUTTONS
// =====================
document.querySelector("#home").addEventListener("click", () => {
  displayTemples(temples);
});

document.querySelector("#old").addEventListener("click", () => {
  displayTemples(
    temples.filter((t) => new Date(t.dedicated).getFullYear() < 1900),
  );
});

document.querySelector("#new").addEventListener("click", () => {
  displayTemples(
    temples.filter((t) => new Date(t.dedicated).getFullYear() > 2000),
  );
});

document.querySelector("#large").addEventListener("click", () => {
  displayTemples(temples.filter((t) => t.area > 90000));
});

document.querySelector("#small").addEventListener("click", () => {
  displayTemples(temples.filter((t) => t.area < 10000));
});

// =====================
// FOOTER
// =====================

// FIXED: must match HTML id="year"
document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent =
  `Last Modification: ${document.lastModified}`;