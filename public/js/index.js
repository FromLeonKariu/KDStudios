console.log("Hello traveller welcome to KD Studios -dark side 😂😂😂😂👌❌");

const darkModeToggle = document.querySelector(".dark-mode-toggle");

darkModeToggle.addEventListener("click", () => {
  const body = document.querySelector("body");
  body.classList.toggle("dark-mode");
  console.log(
    "Dark mode is now " + (body.classList.contains("dark-mode") ? "on" : "off"),
  );
});

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
