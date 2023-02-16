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

/*
  Rediseño del scroll
*/
// Función para añadir el estilo personalizado al scrollbar
function customScrollbar() {
  // Selecciona todos los elementos con overflow scroll
  const elementsWithOverflow = document.querySelectorAll('[style*="overflow-y: scroll"]');
  
  // Itera sobre cada elemento con overflow
  elementsWithOverflow.forEach(element => {
    // Añade una clase personalizada al elemento
    element.classList.add('custom-scrollbar');
  });
}

// Ejecuta la función cuando la página esté cargada
document.addEventListener("DOMContentLoaded", customScrollbar);



// código para el menú desplegable del carrito
const carInput = document.getElementById('car');
const navCar = document.querySelector('.nav-car');

carInput.addEventListener('change', () => {
  if (carInput.checked) {
    navCar.style.display = 'block';
  } else {
    navCar.style.display = 'none';
  }
});