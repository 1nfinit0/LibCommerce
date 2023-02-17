const addToCartButtons = document.querySelectorAll('.agregar-carrito');

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


//Vaciado del carrito
const vaciarBtn = document.querySelector('.vaciar');
vaciarBtn.addEventListener('click', () => {
  if (confirm('¿Seguro que desea vaciar el carrito?')) {
    // Si el usuario hace clic en "Aceptar", borrar el carrito del almacenamiento local
    localStorage.removeItem('carrito');
    alert('El carrito ha sido vaciado');
  }
});