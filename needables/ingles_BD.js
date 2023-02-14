const libIngles = [
  {   src: './needables/BD_imgs/ingles3inicial.png',
      titulo: 'English’s Clic 3 Años',
      nivel: 'Educación Inicial',
      content: 'Libro de Actividades de Inglés y DVD Audiovisual.',
      price: 14.00,
      id: 1,
      alt: 'English’s Clic 3 Años'
  },
  {   src: './needables/BD_imgs/ingles4inicial.png',
      titulo: 'English’s Clic 4 Años',
      nivel: 'Educación Inicial',
      content: 'Libro de Actividades de Inglés y DVD Audiovisual.',
      price: 10.00,
      id: 2,
      alt: 'English’s Clic 4 Años'
  },
  {   src: './needables/BD_imgs/ingles5inicial.png',
      titulo: 'English’s Clic 5 Años',
      nivel: 'Educación Inicial',
      content: 'Libro de Actividades de Inglés y DVD Audiovisual.',
      price: 10.00,
      id: 3,
      alt: 'English’s Clic 5 Años'
  },
  {   src: './needables/BD_imgs/ingles1primaria.png',
      titulo: 'English’s Clic 1° Primaria',
      nivel: 'Educación Primaria',
      content: 'Libro de Actividades de Inglés y DVD Audiovisual.',
      price: 10.00,
      id: 4,
      alt: 'English’s Clic 1° Primaria'
  },
  {   src: './needables/BD_imgs/ingles2primaria.png',
      titulo: 'English’s Clic 2° Primaria',
      nivel: 'Educación Primaria',
      content: 'Libro de Actividades de Inglés y DVD Audiovisual.',
      price: 10.00,
      id: 5,
      alt: 'English’s Clic 2° Primaria'
  },
  {   src: './needables/BD_imgs/ingles3primaria.png',
      titulo: 'English’s Clic 3° Primaria',
      nivel: 'Educación Primaria',
      content: 'Libro de Actividades de Inglés y DVD Audiovisual.',
      price: 10.00,
      id: 6,
      alt: 'English’s Clic 3° Primaria'
  },
  {   src: './needables/BD_imgs/ingles4primaria.png',
      titulo: 'English’s Clic 4° Primaria',
      nivel: 'Educación Primaria',
      content: 'Libro de Actividades de Inglés y DVD Audiovisual.',
      price: 10.00,
      id: 7,
      alt: 'English’s Clic 4° Primaria'
  },
  {   src: './needables/BD_imgs/ingles5primaria.png',
      titulo: 'English’s Clic 5° Primaria',
      nivel: 'Educación Primaria',
      content: 'Libro de Actividades de Inglés y DVD Audiovisual.',
      price: 10.00,
      id: 8,
      alt: 'English’s Clic 5° Primaria'
  },
  {   src: './needables/BD_imgs/ingles6primaria.png',
      titulo: 'English’s Clic 6° Primaria',
      nivel: 'Educación Primaria',
      content: 'Libro de Actividades de Inglés y DVD Audiovisual.',
      price: 10.00,
      id: 9,
      alt: 'English’s Clic 6° Primaria'
  },
  {   src: './needables/BD_imgs/ingles1secundaria.png',
      titulo: 'English’s Clic 1° Secundaria',
      nivel: 'Educación Secundaria',  
      content: 'Libro de Actividades de Inglés y DVD Audiovisual.',
      price: 10.00,
      id: 10,
      alt: 'English’s Clic 1° Secundaria'
  },
  {   src: './needables/BD_imgs/ingles2secundaria.png',
      titulo: 'English’s Clic 2° Secundaria',
      nivel: 'Educación Secundaria',
      content: 'Libro de Actividades de Inglés y DVD Audiovisual.',
      price: 10.00,
      id: 11,
      alt: 'English’s Clic 2° Secundaria'
  },
  {   src: './needables/BD_imgs/ingles3secundaria.png',
      titulo: 'English’s Clic 3° Secundaria',
      nivel: 'Educación Secundaria',
      content: 'Libro de Actividades de Inglés y DVD Audiovisual.',
      price: 10.00,
      id: 12,
      alt: 'English’s Clic 3° Secundaria'
  },
  {   src: './needables/BD_imgs/ingles4secundaria.png',
      titulo: 'English’s Clic 4° Secundaria',
      nivel: 'Educación Secundaria',
      content: 'Libro de Actividades de Inglés y DVD Audiovisual.',
      price: 10.00,
      id: 13,
      alt: 'English’s Clic 4° Secundaria'
  },
  {   src: './needables/BD_imgs/ingles5secundaria.png',
      titulo: 'English’s Clic 5° Secundaria',
      nivel: 'Educación Secundaria',
      content: 'Libro de Actividades de Inglés y DVD Audiovisual.',
      price: 10.00,
      id: 14,
      alt: 'English’s Clic 5° Secundaria'
  },
]

const comp = document.querySelector('#ingles');

for(let file of libIngles){
      comp.innerHTML +=`
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