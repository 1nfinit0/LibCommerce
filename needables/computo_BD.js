const libComputo = [
  {   src: './needables/BD_imgs/computo3inicial.png',
      titulo: 'Computación 3 Años',
      nivel: 'Educación Inicial',
      content: 'Libro de Actividades de Computación Informática y DVD Audiovisual.',
      price: 10.00,
      id: 15,
      alt: 'Computación 3 Años'
  },
  {   src: './needables/BD_imgs/computo4inicial.png',
      titulo: 'Computación 4 Años',
      nivel: 'Educación Inicial',
      content: 'Libro de Actividades de Computación Informática y DVD Audiovisual.',
      price: 10.00,
      id: 16,
      alt: 'Computación 4 Años'
  },
  {   src: './needables/BD_imgs/computo5inicial.png',
      titulo: 'Computación 5 Años',
      nivel: 'Educación Inicial',
      content: 'Libro de Actividades de Computación Informática y DVD Audiovisual.',
      price: 10.00,
      id: 17,
      alt: 'Computación 5 Años'
  },
  {   src: './needables/BD_imgs/computo1primaria.png',
      titulo: 'Computación 1° Primaria',
      nivel: 'Educación Primaria',
      content: 'Libro de Actividades de Computación Informática y DVD Audiovisual.',
      price: 10.00,
      id: 18,
      alt: 'Computación 1° Primaria'
  },
  {   src: './needables/BD_imgs/computo2primaria.png',
      titulo: 'Computación 2° Primaria',
      nivel: 'Educación Primaria',
      content: 'Libro de Actividades de Computación Informática y DVD Audiovisual.',
      price: 10.00,
      id: 19,
      alt: 'Computación 2° Primaria'
  },
  {   src: './needables/BD_imgs/computo3primaria.png',
      titulo: 'Computación 3° Primaria',
      nivel: 'Educación Primaria',
      content: 'Libro de Actividades de Computación Informática y DVD Audiovisual.',
      price: 10.00,
      id: 20,
      alt: 'Computación 3° Primaria'
  },
  {   src: './needables/BD_imgs/computo4primaria.png',
      titulo: 'Computación 4° Primaria',
      nivel: 'Educación Primaria',
      content: 'Libro de Actividades de Computación Informática y DVD Audiovisual.',
      price: 10.00,
      id: 21,
      alt: 'Computación 4° Primaria'
  },
  {   src: './needables/BD_imgs/computo5primaria.png',
      titulo: 'Computación 5° Primaria',
      nivel: 'Educación Primaria',
      content: 'Libro de Actividades de Computación Informática y DVD Audiovisual.',
      price: 10.00,
      id: 22,
      alt: 'Computación 5° Primaria'
  },
  {   src: './needables/BD_imgs/computo6primaria.png',
      titulo: 'Computación 6° Primaria',
      nivel: 'Educación Primaria',
      content: 'Libro de Actividades de Computación Informática y DVD Audiovisual.',
      price: 10.00,
      id: 23,
      alt: 'Computación 6° Primaria'
  },
  {   src: './needables/BD_imgs/computo1secundaria.png',
      titulo: 'Computación 1° Secundaria',
      nivel: 'Educación Secundaria',
      content: 'Libro de Actividades de Computación Informática y DVD Audiovisual.',
      price: 10.00,
      id: 24,
      alt: 'Computación 1° Secundaria'
  },
  {   src: './needables/BD_imgs/computo2secundaria.png',
      titulo: 'Computación 2° Secundaria',
      nivel: 'Educación Secundaria',
      content: 'Libro de Actividades de Computación Informática y DVD Audiovisual.',
      price: 10.00,
      id: 25,
      alt: 'Computación 2° Secundaria'
  },
  {   src: './needables/BD_imgs/computo3secundaria.png',
      titulo: 'Computación 3° Secundaria',
      nivel: 'Educación Secundaria',
      content: 'Libro de Actividades de Computación Informática y DVD Audiovisual.',
      price: 10.00,
      id: 26,
      alt: 'Computación 3° Secundaria'
  },
  {   src: './needables/BD_imgs/computo4secundaria.png',
      titulo: 'Computación 4° Secundaria',
      nivel: 'Educación Secundaria',
      content: 'Libro de Actividades de Computación Informática y DVD Audiovisual.',
      price: 10.00,
      id: 27,
      alt: 'Computación 4° Secundaria'
  },
  {   src: './needables/BD_imgs/computo5secundaria.png',
      titulo: 'Computación 5° Secundaria',
      nivel: 'Educación Secundaria',
      content: 'Libro de Actividades de Computación Informática y DVD Audiovisual.',
      price: 10.00,
      id: 28,
      alt: 'Computación 5° Secundaria'
  },
]

const computo = document.querySelector('#computo');

for(let file of libComputo){
      computo.innerHTML +=`
      <div class="ejemplar">
      <h2 class="tittle">${file.titulo}</h2>
      <img class="portada" src=${file.src} alt="">
      <strong>Nivel:&nbsp;</strong><p>${file.nivel}</p>
      <strong>Contenido:&nbsp;</strong><p>${file.content}</p>
      <div class="price">
        <span>S/.&nbsp;${file.price}</span>
        <button class="btn"></button>
      </div>
    </div>
      `;
}