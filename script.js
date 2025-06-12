// Theme toggle button logic
const themeToggleBtn = document.querySelector(".theme-toggle");

themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  const newTheme = document.body.classList.contains("dark-mode")
    ? "dark-mode"
    : "light-mode";

  localStorage.setItem("theme", newTheme);
  updateImageSources(newTheme);
});

// Apply saved theme on page load
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark-mode") {
    document.body.classList.add("dark-mode");
  }

  updateImageSources(savedTheme || "light-mode");
});

// Image popup logic
document.querySelectorAll(".project img").forEach((image) => {
  image.onclick = () => {
    document.querySelector(".popup-image").style.display = "block";
    document.querySelector(".popup-image img").src = image.getAttribute("src");
  };
});

document.querySelector(".popup-image span").onclick = () => {
  document.querySelector(".popup-image").style.display = "none";
};

// Sidebar toggle logic
function showsidebar() {
  document.querySelector(".sidebar").style.display = "flex";
}

function closesidebar() {
  document.querySelector(".sidebar").style.display = "none";
}
