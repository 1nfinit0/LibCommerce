// Obtener todos los botones con data-id
const addToCartButtons = document.querySelectorAll('button[data-id]');




// Agregar un evento de clic a cada botón
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const productId = button.getAttribute('data-id');
    let cart = JSON.parse(localStorage.getItem('carrito')) || []; // Obtener el carrito desde el almacenamiento local o crear un array vacío si no existe

    // Verificar si el producto ya está en el carrito
    const productInCart = cart.find(item => item.id === productId);
    if (productInCart) {
      // Si el producto ya está en el carrito, aumentar su cantidad
      productInCart.quantity++;
    } else {
      // Si el producto no está en el carrito, agregarlo
      cart.push({ id: productId, quantity: 1 });
    }

    localStorage.setItem('carrito', JSON.stringify(cart)); // Guardar el carrito actualizado en el almacenamiento local
  });
});
