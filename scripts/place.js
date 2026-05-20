document.addEventListener("DOMContentLoaded", () => {
  // 1. Update Footer Dates
  document.getElementById("currentyear").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = document.lastModified;

  // 2. Wind Chill Functionality
  // Read values from HTML layout elements
  const tempElement = document.getElementById("temp");
  const windElement = document.getElementById("wind");
  const windChillElement = document.getElementById("windchill");

  const temperature = parseFloat(tempElement.textContent);
  const windSpeed = parseFloat(windElement.textContent);

  // Requirement: Function must execute computation on exactly one line of code
  function calculateWindChill(t, v) {
    return (
      13.12 +
      0.6215 * t -
      11.37 * Math.pow(v, 0.16) +
      0.3965 * t * Math.pow(v, 0.16)
    ).toFixed(1);
  }

  // Requirement: Verification Guard Conditions (Metric: Temp <= 10 °C AND Wind > 4.8 km/h)
  if (temperature <= 10 && windSpeed > 4.8) {
    windChillElement.textContent = `${calculateWindChill(temperature, windSpeed)} °C`;
  } else {
    windChillElement.textContent = "N/A";
  }
});
