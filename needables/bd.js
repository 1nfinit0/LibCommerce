const contactLinks = document.querySelector('#contact'); // Obtener el enlace con el ID "contact"
contactLinks.addEventListener('click', (event) => { // Agregar un evento de clic al enlace
  event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace (que navegue a otra página)
  const contactSection = document.querySelector('footer'); // Obtener la sección de contacto (o cualquier otra sección que desees)
  contactSection.scrollIntoView({ behavior: 'smooth' }); // Desplazar la página hasta la sección de contacto con una animación suave
});

const contactLink = document.querySelector('nav a#contact'); // Obtener el enlace con el ID "contact" dentro de la etiqueta nav
const mq = window.matchMedia('(max-width: 767px)'); // Obtener el media query para pantallas menores a 768px

function handleMediaQuery(mq) {
  if (mq.matches) { // Si la pantalla es menor a 768px
    contactLink.addEventListener('click', (event) => { // Agregar un evento de clic al enlace
      event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace (que navegue a otra página)
      const contactSection = document.querySelector('footer'); // Obtener la sección de contacto (o cualquier otra sección que desees)
      contactSection.scrollIntoView({ behavior: 'smooth' }); // Desplazar la página hasta la sección de contacto con una animación suave
    });
  } else { // Si la pantalla es mayor o igual a 768px
    contactLink.removeEventListener('click', () => {}); // Eliminar el evento de clic del enlace
  }
}

mq.addListener(handleMediaQuery); // Agregar un listener al media query para que se ejecute cuando cambie
handleMediaQuery(mq); // Ejecutar la función handleMediaQuery() al cargar la página



/*
Código del menú, la constante "files" representa una matriz de objetos, cada objeto representa un producto, este se filtra por el codigo de debajo
*/

const files = [
    {   src: './needables/imgs/tittle_1_precio.png',
      titulo: 'Mi Mundo CLic PACK x10',
      nivel: 'Educación Inicial 3, 4, 5 años.',
      content: 'Matemática + RM Tomo I y II, Comunicación + RV, Grafomotricidad, Inglés, Construyendo Valores, Fonología, Cuento, Personal Social-Religión-Ciencia y Tecnología, Cuento del Bicentenario y Cartilla con QR´s',
      price: 240.00,
      id: 35,
      alt: 'English’s Clic 3 Años'
  },
  {   src: './needables/BD_imgs/ingles3inicial.png',
      titulo: 'English’s Clic 3 Años',
      nivel: 'Educación Inicial',
      content: 'Libro de Actividades de Inglés y DVD Audiovisual.',
      price: 95.00,
      id: 1,
      alt: 'English’s Clic 3 Años'
  },
  {   src: './needables/BD_imgs/ingles4inicial.png',
      titulo: 'English’s Clic 4 Años',
      nivel: 'Educación Inicial',
      content: 'Libro de Actividades de Inglés y DVD Audiovisual.',
      price: 95.00,
      id: 2,
      alt: 'English’s Clic 4 Años'
  },
  {   src: './needables/BD_imgs/ingles5inicial.png',
      titulo: 'English’s Clic 5 Años',
      nivel: 'Educación Inicial',
      content: 'Libro de Actividades de Inglés y DVD Audiovisual.',
      price: 95.00,
      id: 3,
      alt: 'English’s Clic 5 Años'
  },
  {   src: './needables/BD_imgs/ingles1primaria.png',
      titulo: 'English’s Clic 1° Primaria',
      nivel: 'Educación Primaria',
      content: 'Libro de Actividades de Inglés y DVD Audiovisual.',
      price: 95.00,
      id: 4,
      alt: 'English’s Clic 1° Primaria'
  },
  {   src: './needables/BD_imgs/ingles2primaria.png',
      titulo: 'English’s Clic 2° Primaria',
      nivel: 'Educación Primaria',
      content: 'Libro de Actividades de Inglés y DVD Audiovisual.',
      price: 95.00,
      id: 5,
      alt: 'English’s Clic 2° Primaria'
  },
  {   src: './needables/BD_imgs/ingles3primaria.png',
      titulo: 'English’s Clic 3° Primaria',
      nivel: 'Educación Primaria',
      content: 'Libro de Actividades de Inglés y DVD Audiovisual.',
      price: 95.00,
      id: 6,
      alt: 'English’s Clic 3° Primaria'
  },
  {   src: './needables/BD_imgs/ingles4primaria.png',
      titulo: 'English’s Clic 4° Primaria',
      nivel: 'Educación Primaria',
      content: 'Libro de Actividades de Inglés y DVD Audiovisual.',
      price: 95.00,
      id: 7,
      alt: 'English’s Clic 4° Primaria'
  },
  {   src: './needables/BD_imgs/ingles5primaria.png',
      titulo: 'English’s Clic 5° Primaria',
      nivel: 'Educación Primaria',
      content: 'Libro de Actividades de Inglés y DVD Audiovisual.',
      price: 95.00,
      id: 8,
      alt: 'English’s Clic 5° Primaria'
  },
  {   src: './needables/BD_imgs/ingles6primaria.png',
      titulo: 'English’s Clic 6° Primaria',
      nivel: 'Educación Primaria',
      content: 'Libro de Actividades de Inglés y DVD Audiovisual.',
      price: 95.00,
      id: 9,
      alt: 'English’s Clic 6° Primaria'
  },
  {   src: './needables/BD_imgs/ingles1secundaria.png',
      titulo: 'English’s Clic 1° Secundaria',
      nivel: 'Educación Secundaria',  
      content: 'Libro de Actividades de Inglés y DVD Audiovisual.',
      price: 95.00,
      id: 10,
      alt: 'English’s Clic 1° Secundaria'
  },
  {   src: './needables/BD_imgs/ingles2secundaria.png',
      titulo: 'English’s Clic 2° Secundaria',
      nivel: 'Educación Secundaria',
      content: 'Libro de Actividades de Inglés y DVD Audiovisual.',
      price: 95.00,
      id: 11,
      alt: 'English’s Clic 2° Secundaria'
  },
  {   src: './needables/BD_imgs/ingles3secundaria.png',
      titulo: 'English’s Clic 3° Secundaria',
      nivel: 'Educación Secundaria',
      content: 'Libro de Actividades de Inglés y DVD Audiovisual.',
      price: 95.00,
      id: 12,
      alt: 'English’s Clic 3° Secundaria'
  },
  {   src: './needables/BD_imgs/ingles4secundaria.png',
      titulo: 'English’s Clic 4° Secundaria',
      nivel: 'Educación Secundaria',
      content: 'Libro de Actividades de Inglés y DVD Audiovisual.',
      price: 95.00,
      id: 13,
      alt: 'English’s Clic 4° Secundaria'
  },
  {   src: './needables/BD_imgs/ingles5secundaria.png',
      titulo: 'English’s Clic 5° Secundaria',
      nivel: 'Educación Secundaria',
      content: 'Libro de Actividades de Inglés y DVD Audiovisual.',
      price: 95.00,
      id: 14,
      alt: 'English’s Clic 5° Secundaria'
  },
  {   src: './needables/BD_imgs/computo3inicial.png',
      titulo: 'Computación 3 Años',
      nivel: 'Educación Inicial',
      content: 'Libro de Actividades de Computación Informática y DVD Audiovisual.',
      price: 90.00,
      id: 15,
      alt: 'Computación 3 Años'
  },
  {   src: './needables/BD_imgs/computo4inicial.png',
      titulo: 'Computación 4 Años',
      nivel: 'Educación Inicial',
      content: 'Libro de Actividades de Computación Informática y DVD Audiovisual.',
      price: 90.00,
      id: 16,
      alt: 'Computación 4 Años'
  },
  {   src: './needables/BD_imgs/computo5inicial.png',
      titulo: 'Computación 5 Años',
      nivel: 'Educación Inicial',
      content: 'Libro de Actividades de Computación Informática y DVD Audiovisual.',
      price: 90.00,
      id: 17,
      alt: 'Computación 5 Años'
  },
  {   src: './needables/BD_imgs/computo1primaria.png',
      titulo: 'Computación 1° Primaria',
      nivel: 'Educación Primaria',
      content: 'Libro de Actividades de Computación Informática y DVD Audiovisual.',
      price: 90.00,
      id: 18,
      alt: 'Computación 1° Primaria'
  },
  {   src: './needables/BD_imgs/computo2primaria.png',
      titulo: 'Computación 2° Primaria',
      nivel: 'Educación Primaria',
      content: 'Libro de Actividades de Computación Informática y DVD Audiovisual.',
      price: 90.00,
      id: 19,
      alt: 'Computación 2° Primaria'
  },
  {   src: './needables/BD_imgs/computo3primaria.png',
      titulo: 'Computación 3° Primaria',
      nivel: 'Educación Primaria',
      content: 'Libro de Actividades de Computación Informática y DVD Audiovisual.',
      price: 90.00,
      id: 20,
      alt: 'Computación 3° Primaria'
  },
  {   src: './needables/BD_imgs/computo4primaria.png',
      titulo: 'Computación 4° Primaria',
      nivel: 'Educación Primaria',
      content: 'Libro de Actividades de Computación Informática y DVD Audiovisual.',
      price: 90.00,
      id: 21,
      alt: 'Computación 4° Primaria'
  },
  {   src: './needables/BD_imgs/computo5primaria.png',
      titulo: 'Computación 5° Primaria',
      nivel: 'Educación Primaria',
      content: 'Libro de Actividades de Computación Informática y DVD Audiovisual.',
      price: 90.00,
      id: 22,
      alt: 'Computación 5° Primaria'
  },
  {   src: './needables/BD_imgs/computo6primaria.png',
      titulo: 'Computación 6° Primaria',
      nivel: 'Educación Primaria',
      content: 'Libro de Actividades de Computación Informática y DVD Audiovisual.',
      price: 90.00,
      id: 23,
      alt: 'Computación 6° Primaria'
  },
  {   src: './needables/BD_imgs/computo1secundaria.png',
      titulo: 'Computación 1° Secundaria',
      nivel: 'Educación Secundaria',
      content: 'Libro de Actividades de Computación Informática y DVD Audiovisual.',
      price: 90.00,
      id: 24,
      alt: 'Computación 1° Secundaria'
  },
  {   src: './needables/BD_imgs/computo2secundaria.png',
      titulo: 'Computación 2° Secundaria',
      nivel: 'Educación Secundaria',
      content: 'Libro de Actividades de Computación Informática y DVD Audiovisual.',
      price: 90.00,
      id: 25,
      alt: 'Computación 2° Secundaria'
  },
  {   src: './needables/BD_imgs/computo3secundaria.png',
      titulo: 'Computación 3° Secundaria',
      nivel: 'Educación Secundaria',
      content: 'Libro de Actividades de Computación Informática y DVD Audiovisual.',
      price: 90.00,
      id: 26,
      alt: 'Computación 3° Secundaria'
  },
  {   src: './needables/BD_imgs/computo4secundaria.png',
      titulo: 'Computación 4° Secundaria',
      nivel: 'Educación Secundaria',
      content: 'Libro de Actividades de Computación Informática y DVD Audiovisual.',
      price: 90.00,
      id: 27,
      alt: 'Computación 4° Secundaria'
  },
  {   src: './needables/BD_imgs/computo5secundaria.png',
      titulo: 'Computación 5° Secundaria',
      nivel: 'Educación Secundaria',
      content: 'Libro de Actividades de Computación Informática y DVD Audiovisual.',
      price: 90.00,
      id: 28,
      alt: 'Computación 5° Secundaria'
  },
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
];

const formulario = document.querySelector('#formulario');
const boton = document.querySelector('#boton');
const proyectos = document.querySelector('#proyectos');
const acentos = {'á':'a','é':'e','í':'i','ó':'o','ú':'u','Á':'A','É':'E','Í':'I','Ó':'O','Ú':'U'};

const filtrar = () => {
  proyectos.innerHTML = '';
  const texto = formulario.value.toLowerCase();
          texto.split('').map( letra => acentos[letra] || letra).join('').toString();
  for(let file of files){
      let titulo = file.titulo.toLowerCase();
                  titulo = titulo.split('').map( letra => acentos[letra] || letra).join('').toString();
      if(titulo.indexOf(texto) !== -1){
          proyectos.innerHTML +=`
          <div class='proyecto'>
            <div class='servicio'>
              <img src='${file.src}' alt='${file.alt}'>
            </div>
            <div class='descripcion'>
              <div class='name'>
                <h3>${file.titulo}</h3>
              </div>
              <div class='__desc'>
                <h5>Descripción:</h5>
                <span><strong>Nivel:&nbsp</strong>&nbsp${file.nivel}</span>
                <span><strong>Contenido:&nbsp</strong>&nbsp${file.content}</span>
              </div>
              <div class='formatos'>
                <div class='price'>
                  <p>S/. ${file.price}</p>
                </div>
                <button class="agregar-carrito activo" data-id="${file.id}">Agregar al carrito</button>
              </div>
            </div>
          </div>
          <div class="hr">.</div>`;

                                   
      }         
  }
  if (proyectos.innerHTML === ''){
      proyectos.innerHTML += `<h4>No se encontraron resultados</h4>`
  }

}
boton.addEventListener('click', filtrar);
formulario.addEventListener('keyup', filtrar);
filtrar();
