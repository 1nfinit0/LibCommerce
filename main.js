const menuToggle = document.getElementById("toggle-menu");
const menuIcon = document.querySelector(".menu-icon");
const toggleMenu = document.querySelector(".toggle-menu");
const menu = document.querySelector(".menu-desplegable");

menuToggle.addEventListener("change", function() {
  menuIcon.classList.toggle("active");
});

toggleMenu.addEventListener("change", function() {
  if (this.checked) {
    menu.style.display = "block";
    menu.style.animation = "menu-appear 0.3s ease-in-out";
  } else {
    menu.style.display = "none";
  }
});
