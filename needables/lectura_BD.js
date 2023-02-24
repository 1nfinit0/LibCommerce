const libLectura = [
  {   src: './needables/BD_imgs/lecturas1.png',
      titulo: 'Lectura 1° Primaria',
      nivel: 'Educación Primaria',
      content: 'Libro de Lectura, Cuaderno de Actividades y CD Audiovisual.',
      price: 50.00,
      id: 29,
      alt: 'Lectura 1° Primaria'
  },
  {   src: './needables/BD_imgs/lecturas2.png',
      titulo: 'Lectura 2° Primaria',
      nivel: 'Educación Primaria',
      content: 'Libro de Lectura, Cuaderno de Actividades y CD Audiovisual.',
      price: 50.00,
      id: 30,
      alt: 'Lectura 2° Primaria'
  },
  {   src: './needables/BD_imgs/lecturas3.png',
      titulo: 'Lectura 3° Primaria',
      nivel: 'Educación Primaria',
      content: 'Libro de Lectura, Cuaderno de Actividades y CD Audiovisual.',
      price: 50.00,
      id: 31,
      alt: 'Lectura 3° Primaria'
  },
  {   src: './needables/BD_imgs/lecturas4.png',
      titulo: 'Lectura 4° Primaria',
      nivel: 'Educación Primaria',
      content: 'Libro de Lectura, Cuaderno de Actividades y CD Audiovisual.',
      price: 50.00,
      id: 32,
      alt: 'Lectura 4° Primaria'
  },
  {   src: './needables/BD_imgs/lecturas5.png',
      titulo: 'Lectura 5° Primaria',
      nivel: 'Educación Primaria',
      content: 'Libro de Lectura, Cuaderno de Actividades y CD Audiovisual.',
      price: 50.00,
      id: 33,
      alt: 'Lectura 5° Primaria'
  },
  {   src: './needables/BD_imgs/lecturas6.png',
      titulo: 'Lectura 6° Primaria',
      nivel: 'Educación Primaria', 
      content: 'Libro de Lectura, Cuaderno de Actividades y CD Audiovisual.',
      price: 50.00,
      id: 34,
      alt: 'Lectura 6° Primaria'
  },
]

const lec = document.querySelector('#lecturas');

for(let file of libLectura){
      lec.innerHTML +=`
      <div class="ejemplar">
      <h2 class="tittle">${file.titulo}</h2>
      <img class="portada" src=${file.src} alt=${file.alt}>
      <strong>Nivel:&nbsp;</strong><p>${file.nivel}</p>
      <strong>Contenido:&nbsp;</strong><p>${file.content}</p>
      <div class="price">
        <span>S/.&nbsp;${file.price}</span>
        <button class="agregar-carrito" data-id="${file.id}"></button>
      </div>
    </div>
      `;
}