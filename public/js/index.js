console.log("Hello traveller welcome to KD Studios -dark side 😂😂😂😂👌❌");
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDark);
  document.getElementById("dark-mode-toggle").textContent = isDark
    ? "Light Mode"
    : "Dark Mode";
}

// Apply saved preference on page load
if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark-mode");
  document.getElementById("dark-mode-toggle").textContent = "Light Mode";
}
const hamburger = document.querySelector(".humburger-button");
const navMenu = document.querySelector("header nav ul");
const overlay = document.querySelector(".nav-overlay");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
  navMenu.classList.remove("active");
  overlay.classList.remove("active");
});
