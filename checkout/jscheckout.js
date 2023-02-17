//Obtenemos los datos del carrito desde el localStorage
const carrox = JSON.parse(localStorage.getItem('carrito'));
console.log(carrox);
//Volvemos a declarar la base de datos
const files = [
  {   src: '../needables/BD_imgs/ingles3inicial.png',
      titulo: 'English’s Clic 3 Años',
      nivel: 'Educación Inicial',
      content: 'Libro de Actividades de Inglés y DVD Audiovisual.',
      price: 14.00,
      id: 1,
      alt: 'English’s Clic 3 Años'
  },
  {   src: '../needables/BD_imgs/ingles4inicial.png',
      titulo: 'English’s Clic 4 Años',
      nivel: 'Educación Inicial',
      content: 'Libro de Actividades de Inglés y DVD Audiovisual.',
      price: 10.00,
      id: 2,
      alt: 'English’s Clic 4 Años'
  },
  {   src: '../needables/BD_imgs/ingles5inicial.png',
      titulo: 'English’s Clic 5 Años',
      nivel: 'Educación Inicial',
      content: 'Libro de Actividades de Inglés y DVD Audiovisual.',
      price: 10.00,
      id: 3,
      alt: 'English’s Clic 5 Años'
  },
  {   src: '../needables/BD_imgs/ingles1primaria.png',
      titulo: 'English’s Clic 1° Primaria',
      nivel: 'Educación Primaria',
      content: 'Libro de Actividades de Inglés y DVD Audiovisual.',
      price: 10.00,
      id: 4,
      alt: 'English’s Clic 1° Primaria'
  },
  {   src: '../needables/BD_imgs/ingles2primaria.png',
      titulo: 'English’s Clic 2° Primaria',
      nivel: 'Educación Primaria',
      content: 'Libro de Actividades de Inglés y DVD Audiovisual.',
      price: 10.00,
      id: 5,
      alt: 'English’s Clic 2° Primaria'
  },
  {   src: '../needables/BD_imgs/ingles3primaria.png',
      titulo: 'English’s Clic 3° Primaria',
      nivel: 'Educación Primaria',
      content: 'Libro de Actividades de Inglés y DVD Audiovisual.',
      price: 10.00,
      id: 6,
      alt: 'English’s Clic 3° Primaria'
  },
  {   src: '../needables/BD_imgs/ingles4primaria.png',
      titulo: 'English’s Clic 4° Primaria',
      nivel: 'Educación Primaria',
      content: 'Libro de Actividades de Inglés y DVD Audiovisual.',
      price: 10.00,
      id: 7,
      alt: 'English’s Clic 4° Primaria'
  },
  {   src: '../needables/BD_imgs/ingles5primaria.png',
      titulo: 'English’s Clic 5° Primaria',
      nivel: 'Educación Primaria',
      content: 'Libro de Actividades de Inglés y DVD Audiovisual.',
      price: 10.00,
      id: 8,
      alt: 'English’s Clic 5° Primaria'
  },
  {   src: '../needables/BD_imgs/ingles6primaria.png',
      titulo: 'English’s Clic 6° Primaria',
      nivel: 'Educación Primaria',
      content: 'Libro de Actividades de Inglés y DVD Audiovisual.',
      price: 10.00,
      id: 9,
      alt: 'English’s Clic 6° Primaria'
  },
  {   src: '../needables/BD_imgs/ingles1secundaria.png',
      titulo: 'English’s Clic 1° Secundaria',
      nivel: 'Educación Secundaria',  
      content: 'Libro de Actividades de Inglés y DVD Audiovisual.',
      price: 10.00,
      id: 10,
      alt: 'English’s Clic 1° Secundaria'
  },
  {   src: '../needables/BD_imgs/ingles2secundaria.png',
      titulo: 'English’s Clic 2° Secundaria',
      nivel: 'Educación Secundaria',
      content: 'Libro de Actividades de Inglés y DVD Audiovisual.',
      price: 10.00,
      id: 11,
      alt: 'English’s Clic 2° Secundaria'
  },
  {   src: '../needables/BD_imgs/ingles3secundaria.png',
      titulo: 'English’s Clic 3° Secundaria',
      nivel: 'Educación Secundaria',
      content: 'Libro de Actividades de Inglés y DVD Audiovisual.',
      price: 10.00,
      id: 12,
      alt: 'English’s Clic 3° Secundaria'
  },
  {   src: '../needables/BD_imgs/ingles4secundaria.png',
      titulo: 'English’s Clic 4° Secundaria',
      nivel: 'Educación Secundaria',
      content: 'Libro de Actividades de Inglés y DVD Audiovisual.',
      price: 10.00,
      id: 13,
      alt: 'English’s Clic 4° Secundaria'
  },
  {   src: '../needables/BD_imgs/ingles5secundaria.png',
      titulo: 'English’s Clic 5° Secundaria',
      nivel: 'Educación Secundaria',
      content: 'Libro de Actividades de Inglés y DVD Audiovisual.',
      price: 10.00,
      id: 14,
      alt: 'English’s Clic 5° Secundaria'
  },
  {   src: '../needables/BD_imgs/computo3inicial.png',
      titulo: 'Computación 3 Años',
      nivel: 'Educación Inicial',
      content: 'Libro de Actividades de Computación Informática y DVD Audiovisual.',
      price: 10.00,
      id: 15,
      alt: 'Computación 3 Años'
  },
  {   src: '../needables/BD_imgs/computo4inicial.png',
      titulo: 'Computación 4 Años',
      nivel: 'Educación Inicial',
      content: 'Libro de Actividades de Computación Informática y DVD Audiovisual.',
      price: 10.00,
      id: 16,
      alt: 'Computación 4 Años'
  },
  {   src: '../needables/BD_imgs/computo5inicial.png',
      titulo: 'Computación 5 Años',
      nivel: 'Educación Inicial',
      content: 'Libro de Actividades de Computación Informática y DVD Audiovisual.',
      price: 10.00,
      id: 17,
      alt: 'Computación 5 Años'
  },
  {   src: '../needables/BD_imgs/computo1primaria.png',
      titulo: 'Computación 1° Primaria',
      nivel: 'Educación Primaria',
      content: 'Libro de Actividades de Computación Informática y DVD Audiovisual.',
      price: 10.00,
      id: 18,
      alt: 'Computación 1° Primaria'
  },
  {   src: '../needables/BD_imgs/computo2primaria.png',
      titulo: 'Computación 2° Primaria',
      nivel: 'Educación Primaria',
      content: 'Libro de Actividades de Computación Informática y DVD Audiovisual.',
      price: 10.00,
      id: 19,
      alt: 'Computación 2° Primaria'
  },
  {   src: '../needables/BD_imgs/computo3primaria.png',
      titulo: 'Computación 3° Primaria',
      nivel: 'Educación Primaria',
      content: 'Libro de Actividades de Computación Informática y DVD Audiovisual.',
      price: 10.00,
      id: 20,
      alt: 'Computación 3° Primaria'
  },
  {   src: '../needables/BD_imgs/computo4primaria.png',
      titulo: 'Computación 4° Primaria',
      nivel: 'Educación Primaria',
      content: 'Libro de Actividades de Computación Informática y DVD Audiovisual.',
      price: 10.00,
      id: 21,
      alt: 'Computación 4° Primaria'
  },
  {   src: '../needables/BD_imgs/computo5primaria.png',
      titulo: 'Computación 5° Primaria',
      nivel: 'Educación Primaria',
      content: 'Libro de Actividades de Computación Informática y DVD Audiovisual.',
      price: 10.00,
      id: 22,
      alt: 'Computación 5° Primaria'
  },
  {   src: '../needables/BD_imgs/computo6primaria.png',
      titulo: 'Computación 6° Primaria',
      nivel: 'Educación Primaria',
      content: 'Libro de Actividades de Computación Informática y DVD Audiovisual.',
      price: 10.00,
      id: 23,
      alt: 'Computación 6° Primaria'
  },
  {   src: '../needables/BD_imgs/computo1secundaria.png',
      titulo: 'Computación 1° Secundaria',
      nivel: 'Educación Secundaria',
      content: 'Libro de Actividades de Computación Informática y DVD Audiovisual.',
      price: 10.00,
      id: 24,
      alt: 'Computación 1° Secundaria'
  },
  {   src: '../needables/BD_imgs/computo2secundaria.png',
      titulo: 'Computación 2° Secundaria',
      nivel: 'Educación Secundaria',
      content: 'Libro de Actividades de Computación Informática y DVD Audiovisual.',
      price: 10.00,
      id: 25,
      alt: 'Computación 2° Secundaria'
  },
  {   src: '../needables/BD_imgs/computo3secundaria.png',
      titulo: 'Computación 3° Secundaria',
      nivel: 'Educación Secundaria',
      content: 'Libro de Actividades de Computación Informática y DVD Audiovisual.',
      price: 10.00,
      id: 26,
      alt: 'Computación 3° Secundaria'
  },
  {   src: '../needables/BD_imgs/computo4secundaria.png',
      titulo: 'Computación 4° Secundaria',
      nivel: 'Educación Secundaria',
      content: 'Libro de Actividades de Computación Informática y DVD Audiovisual.',
      price: 10.00,
      id: 27,
      alt: 'Computación 4° Secundaria'
  },
  {   src: '../needables/BD_imgs/computo5secundaria.png',
      titulo: 'Computación 5° Secundaria',
      nivel: 'Educación Secundaria',
      content: 'Libro de Actividades de Computación Informática y DVD Audiovisual.',
      price: 10.00,
      id: 28,
      alt: 'Computación 5° Secundaria'
  },
  {   src: '../needables/BD_imgs/lecturas1.png',
      titulo: 'Lectura 1° Primaria',
      nivel: 'Educación Primaria',
      content: 'Libro de Lectura, Cuaderno de Actividades y CD Audiovisual.',
      price: 10.00,
      id: 29,
      alt: 'Lectura 1° Primaria'
  },
  {   src: '../needables/BD_imgs/lecturas2.png',
      titulo: 'Lectura 2° Primaria',
      nivel: 'Educación Primaria',
      content: 'Libro de Lectura, Cuaderno de Actividades y CD Audiovisual.',
      price: 10.00,
      id: 30,
      alt: 'Lectura 2° Primaria'
  },
  {   src: '../needables/BD_imgs/lecturas3.png',
      titulo: 'Lectura 3° Primaria',
      nivel: 'Educación Primaria',
      content: 'Libro de Lectura, Cuaderno de Actividades y CD Audiovisual.',
      price: 10.00,
      id: 31,
      alt: 'Lectura 3° Primaria'
  },
  {   src: '../needables/BD_imgs/lecturas4.png',
      titulo: 'Lectura 4° Primaria',
      nivel: 'Educación Primaria',
      content: 'Libro de Lectura, Cuaderno de Actividades y CD Audiovisual.',
      price: 10.00,
      id: 32,
      alt: 'Lectura 4° Primaria'
  },
  {   src: '../needables/BD_imgs/lecturas5.png',
      titulo: 'Lectura 5° Primaria',
      nivel: 'Educación Primaria',
      content: 'Libro de Lectura, Cuaderno de Actividades y CD Audiovisual.',
      price: 10.00,
      id: 33,
      alt: 'Lectura 5° Primaria'
  },
  {   src: '../needables/BD_imgs/lecturas6.png',
      titulo: 'Lectura 6° Primaria',
      nivel: 'Educación Primaria', 
      content: 'Libro de Lectura, Cuaderno de Actividades y CD Audiovisual.',
      price: 10.00,
      id: 34,
      alt: 'Lectura 6° Primaria'
  },
];

//Matriz nueva con la los datos en comun de las dos matrices anteriores
const productosSeleccionados = files.filter(file => {
  const item = carrox.find(item => item.id.toString() === file.id.toString());
  if (item) {
    file.quantity = item.quantity;
    return true;
  }
  return false;
});

// //Renderizamos los prudustos dentro del div "container-items"
const container = document.querySelector('.container-items');
for (const producto of productosSeleccionados) {
  const item = document.createElement('div');
  item.classList.add('item');
  item.innerHTML = `
    <img src="${producto.src}" alt="${producto.alt}">
    <h3>${producto.titulo}</h3>
    <p>${producto.content}</p>
    <p>Precio: $${producto.price}</p>
    <p>Cantidad: ${producto.quantity}</p>
  `;
  container.appendChild(item);
}



// carItems.forEach((item) => {
//   const product = document.createElement("div");
//   product.classList.add("product");
//   product.innerHTML = `
//     <img src="${item.image}" alt="${item.name}">
//     <h3>${item.name}</h3>
//     <p>Price: $${item.price}</p>
//     <p>Quantity: ${cart.find((cartItem) => cartItem.id === item.id).quantity}</p>
//   `;
//   container.appendChild(product);
// });